import { useMemo, useState } from 'react'
import { useCafe } from '../../../../mock/store'
import { formatRupiah } from '../../../../shared/lib/format'

type PerformaTab = 'menu' | 'kategori' | 'varian'

export function SalesPerformancePage() {
  const { orders, products, categories } = useCafe()
  const [period, setPeriod] = useState<'daily' | 'weekly' | 'monthly'>('daily')
  const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear())
  const [activeTab, setActiveTab] = useState<PerformaTab>('menu')

  const paidOrders = useMemo(() => {
    return orders.filter((o) => {
      const orderYear = new Date(o.createdAt).getFullYear()
      return o.paymentStatus === 'paid' && orderYear === selectedYear
    })
  }, [orders, selectedYear])

  const productSalesMap = useMemo(() => {
    const map = new Map<string, { name: string; qty: number; revenue: number }>()
    products.forEach((p) => map.set(p.name, { name: p.name, qty: 0, revenue: 0 }))
    paidOrders.forEach((order) => {
      order.items.forEach((item) => {
        const existing = map.get(item.productName) || { name: item.productName, qty: 0, revenue: 0 }
        map.set(item.productName, {
          name: item.productName,
          qty: existing.qty + item.quantity,
          revenue: existing.revenue + item.price * item.quantity,
        })
      })
    })
    return Array.from(map.values())
  }, [paidOrders, products])

  const categorySalesMap = useMemo(() => {
    const map = new Map<string, { name: string; qty: number; revenue: number }>()
    categories.forEach((c) => map.set(c.name, { name: c.name, qty: 0, revenue: 0 }))
    const prodCat = new Map(products.map((p) => [p.name, categories.find((c) => c.id === p.categoryId)?.name ?? '-']))
    paidOrders.forEach((o) => {
      o.items.forEach((it) => {
        const cat = prodCat.get(it.productName) ?? '-'
        const cur = map.get(cat) ?? { name: cat, qty: 0, revenue: 0 }
        map.set(cat, { name: cat, qty: cur.qty + it.quantity, revenue: cur.revenue + it.price * it.quantity })
      })
    })
    return Array.from(map.values())
  }, [paidOrders, products, categories])

  const variantSalesMap = useMemo(() => {
    const map = new Map<string, { name: string; qty: number }>()
    paidOrders.forEach((o) => {
      o.items.forEach((it) => {
        const opts = it.options as Record<string, unknown>
        Object.entries(opts).forEach(([k, v]) => {
          if (v === true || typeof v === 'string') {
            const label = typeof v === 'string' ? `${k}: ${v}` : String(k)
            const cur = map.get(label) ?? { name: label, qty: 0 }
            map.set(label, { name: label, qty: cur.qty + it.quantity })
          } else if (typeof v === 'number' && v > 0) {
            const label = `${k} x${v}`
            const cur = map.get(label) ?? { name: label, qty: 0 }
            map.set(label, { name: label, qty: cur.qty + it.quantity })
          }
        })
        // fallback for simple string optionsLabel
        if (it.optionsLabel) {
          it.optionsLabel.split(',').forEach((part) => {
            const s = part.trim()
            if (!s) return
            // avoid double count if already counted via options keys
            if (!map.has(s) && !Array.from(map.keys()).some((k) => k.includes(s))) {
              // only count addon-like if not already
            }
          })
        }
      })
    })
    return Array.from(map.values()).sort((a, b) => b.qty - a.qty)
  }, [paidOrders])

  const topSellingProducts = useMemo(() => [...productSalesMap].sort((a, b) => b.qty - a.qty).slice(0, 5), [productSalesMap])
  const lowSellingProducts = useMemo(() => [...productSalesMap].sort((a, b) => a.qty - b.qty).slice(0, 5), [productSalesMap])
  const topCategories = useMemo(() => [...categorySalesMap].sort((a, b) => b.qty - a.qty).slice(0, 5), [categorySalesMap])
  const lowCategories = useMemo(() => [...categorySalesMap].sort((a, b) => a.qty - b.qty).slice(0, 5), [categorySalesMap])

  function exportCSV() {
    let headers: string[] = []
    let rows: (string | number)[][] = []
    let filename = ''
    if (activeTab === 'menu') {
      headers = ['Nama Menu', 'Kuantitas Terjual', 'Total Omset']
      rows = [...productSalesMap].sort((a, b) => b.qty - a.qty).map((p) => [`"${p.name}"`, p.qty, p.revenue])
      filename = `Performa_Item_Menu_${selectedYear}_${period}.csv`
    } else if (activeTab === 'kategori') {
      headers = ['Kategori', 'Kuantitas Terjual', 'Total Omset']
      rows = [...categorySalesMap].sort((a, b) => b.qty - a.qty).map((p) => [`"${p.name}"`, p.qty, p.revenue])
      filename = `Performa_Item_Kategori_${selectedYear}_${period}.csv`
    } else {
      headers = ['Varian/Addon', 'Kuantitas Terjual']
      rows = variantSalesMap.map((p) => [`"${p.name}"`, p.qty])
      filename = `Performa_Item_Varian_${selectedYear}_${period}.csv`
    }
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n')
    const encodedUri = encodeURI(csvContent)
    const link = document.createElement('a')
    link.setAttribute('href', encodedUri)
    link.setAttribute('download', filename)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-[32px] font-semibold tracking-tight">Performa Item</h1>
          <p className="text-stone">Analisis terlaris & kurang laku per menu, kategori, dan varian/addons.</p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(Number(e.target.value))}
            className="h-10 rounded-lg border border-[#c4c7c7] bg-white px-3 text-xs font-semibold outline-none focus:border-black"
          >
            {[2024, 2025, 2026].map((yr) => (
              <option key={yr} value={yr}>
                Tahun {yr}
              </option>
            ))}
          </select>

          <div className="flex rounded-lg border border-[#c4c7c7] bg-sand/50 p-1">
            {(['daily', 'weekly', 'monthly'] as const).map((p) => (
              <button
                key={p}
                onClick={() => setPeriod(p)}
                className={`rounded-md px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all ${
                  period === p ? 'bg-black text-white shadow-xs' : 'text-stone hover:text-black'
                }`}
              >
                {p === 'daily' ? 'Harian' : p === 'weekly' ? 'Mingguan' : 'Bulanan'}
              </button>
            ))}
          </div>

          <button
            onClick={exportCSV}
            className="flex h-10 items-center gap-1.5 rounded-lg border border-clay bg-white px-4 text-xs font-semibold text-stone hover:border-black hover:text-black transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">file_download</span>
            <span>Ekspor CSV</span>
          </button>
        </div>
      </div>

      {/* Kategori bar performa: menu | kategori | varian */}
      <div className="flex gap-2 rounded-lg border border-[#c4c7c7] bg-cream p-1.5">
        {(
          [
            { id: 'menu', label: 'Menu' },
            { id: 'kategori', label: 'Kategori' },
            { id: 'varian', label: 'Varian & Addons' },
          ] as const
        ).map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveTab(t.id)}
            className={`flex-1 rounded-md px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === t.id ? 'bg-black text-white shadow-xs' : 'bg-white text-stone hover:text-black border border-sand'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {activeTab === 'menu' && (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-[12px] border border-[#c4c7c7] bg-cream p-5">
            <div className="mb-4 flex items-center justify-between border-b border-sand pb-3">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sage">local_fire_department</span>
                <h2 className="font-semibold text-black">Menu Terlaris (Top)</h2>
              </div>
              <span className="text-xs text-stone uppercase tracking-wider">
                {period} - {selectedYear}
              </span>
            </div>
            <ul className="space-y-3">
              {topSellingProducts.map((p, idx) => (
                <li key={p.name} className="flex items-center justify-between rounded-lg bg-white p-3 border border-sand">
                  <div className="flex items-center gap-3">
                    <span className="flex size-6 items-center justify-center rounded-full bg-sand font-bold text-xs text-black">{idx + 1}</span>
                    <div>
                      <p className="font-semibold text-black text-sm">{p.name}</p>
                      <p className="text-xs text-stone">{formatRupiah(p.revenue)}</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-[#b8cda9]/40 px-3 py-1 text-xs font-bold text-sage">{p.qty} Terjual</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[12px] border border-[#c4c7c7] bg-cream p-5">
            <div className="mb-4 flex items-center justify-between border-b border-sand pb-3">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#ba1a1a]">trending_down</span>
                <h2 className="font-semibold text-black">Menu Kurang Laku</h2>
              </div>
              <span className="text-xs text-stone uppercase tracking-wider">
                {period} - {selectedYear}
              </span>
            </div>
            <ul className="space-y-3">
              {lowSellingProducts.map((p) => (
                <li key={p.name} className="flex items-center justify-between rounded-lg bg-white p-3 border border-sand">
                  <div>
                    <p className="font-semibold text-black text-sm">{p.name}</p>
                    <p className="text-xs text-stone">{formatRupiah(p.revenue)}</p>
                  </div>
                  <span className="rounded-full bg-[#ba1a1a]/10 px-3 py-1 text-xs font-bold text-[#ba1a1a]">{p.qty} Terjual</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {activeTab === 'kategori' && (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-[12px] border border-[#c4c7c7] bg-cream p-5">
            <div className="mb-4 flex items-center justify-between border-b border-sand pb-3">
              <h2 className="font-semibold text-black">Kategori Terlaris</h2>
              <span className="text-xs text-stone uppercase tracking-wider">
                {period} - {selectedYear}
              </span>
            </div>
            <ul className="space-y-3">
              {topCategories.map((c, idx) => (
                <li key={c.name} className="flex items-center justify-between rounded-lg bg-white p-3 border border-sand">
                  <div className="flex items-center gap-3">
                    <span className="flex size-6 items-center justify-center rounded-full bg-sand font-bold text-xs text-black">{idx + 1}</span>
                    <div>
                      <p className="font-semibold text-black text-sm">{c.name}</p>
                      <p className="text-xs text-stone">{formatRupiah(c.revenue)}</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-[#b8cda9]/40 px-3 py-1 text-xs font-bold text-sage">{c.qty} Terjual</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[12px] border border-[#c4c7c7] bg-cream p-5">
            <div className="mb-4 flex items-center justify-between border-b border-sand pb-3">
              <h2 className="font-semibold text-black">Kategori Kurang Laku</h2>
              <span className="text-xs text-stone uppercase tracking-wider">
                {period} - {selectedYear}
              </span>
            </div>
            <ul className="space-y-3">
              {lowCategories.map((c) => (
                <li key={c.name} className="flex items-center justify-between rounded-lg bg-white p-3 border border-sand">
                  <div>
                    <p className="font-semibold text-black text-sm">{c.name}</p>
                    <p className="text-xs text-stone">{formatRupiah(c.revenue)}</p>
                  </div>
                  <span className="rounded-full bg-[#ba1a1a]/10 px-3 py-1 text-xs font-bold text-[#ba1a1a]">{c.qty} Terjual</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {activeTab === 'varian' && (
        <div className="rounded-[12px] border border-[#c4c7c7] bg-white p-5 shadow-2xs">
          <div className="mb-4 flex items-center justify-between border-b border-sand pb-3">
            <h2 className="font-semibold text-black">Performa Varian & Addons</h2>
            <span className="text-xs text-stone uppercase tracking-wider">
              {period} - {selectedYear} • mock
            </span>
          </div>
          {variantSalesMap.length === 0 ? (
            <p className="py-8 text-center text-sm text-stone">Belum ada data varian/addons pada periode ini.</p>
          ) : (
            <ul className="space-y-2">
              {variantSalesMap.slice(0, 10).map((v, idx) => (
                <li key={v.name} className="flex items-center justify-between rounded-lg border border-sand bg-cream px-4 py-3">
                  <div className="flex items-center gap-3">
                    <span className="flex size-7 items-center justify-center rounded-full bg-black text-white text-xs font-bold">{idx + 1}</span>
                    <span className="text-sm font-medium text-black">{v.name}</span>
                  </div>
                  <span className="rounded-full bg-sand px-3 py-1 text-xs font-bold text-black">{v.qty} terjual</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  )
}
