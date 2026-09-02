import { useMemo, useState } from 'react'
import { useCafe } from '../../../../mock/store'
import { formatRupiah } from '../../../../shared/lib/format'

export function SalesPerformancePage() {
  const { orders, products } = useCafe()
  const [period, setPeriod] = useState<'daily' | 'weekly' | 'monthly'>('daily')
  const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear())

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

  const topSellingProducts = useMemo(() => {
    return [...productSalesMap].sort((a, b) => b.qty - a.qty).slice(0, 5)
  }, [productSalesMap])

  const lowSellingProducts = useMemo(() => {
    return [...productSalesMap].sort((a, b) => a.qty - b.qty).slice(0, 5)
  }, [productSalesMap])

  function exportMenuPerformanceCSV() {
    const headers = ['Nama Menu', 'Kuantitas Terjual', 'Total Omset']
    const sortedProducts = [...productSalesMap].sort((a, b) => b.qty - a.qty)
    const rows = sortedProducts.map((p) => [`"${p.name}"`, p.qty, p.revenue])

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n')
    const encodedUri = encodeURI(csvContent)
    const link = document.createElement('a')
    link.setAttribute('href', encodedUri)
    link.setAttribute('download', `Performa_Menu_${selectedYear}_${period}.csv`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-[32px] font-semibold tracking-tight">Performa Menu</h1>
          <p className="text-stone">Analisis produk terlaris dan kurang laku berdasarkan periode waktu.</p>
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

          {/* FILTER PERIODE HARIAN, MINGGUAN, BULANAN */}
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
            onClick={exportMenuPerformanceCSV}
            className="flex h-10 items-center gap-1.5 rounded-lg border border-clay bg-white px-4 text-xs font-semibold text-stone hover:border-black hover:text-black transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">file_download</span>
            <span>Ekspor CSV</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-[12px] border border-[#c4c7c7] bg-cream p-5">
          <div className="mb-4 flex items-center justify-between border-b border-sand pb-3">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sage">local_fire_department</span>
              <h2 className="font-semibold text-black">Menu Terlaris (Top Selling)</h2>
            </div>
            <span className="text-xs text-stone uppercase tracking-wider">{period} - {selectedYear}</span>
          </div>

          <ul className="space-y-3">
            {topSellingProducts.map((p, idx) => (
              <li key={p.name} className="flex items-center justify-between rounded-lg bg-white p-3 border border-sand">
                <div className="flex items-center gap-3">
                  <span className="flex size-6 items-center justify-center rounded-full bg-sand font-bold text-xs text-black">
                    {idx + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-black text-sm">{p.name}</p>
                    <p className="text-xs text-stone">{formatRupiah(p.revenue)}</p>
                  </div>
                </div>
                <span className="rounded-full bg-[#b8cda9]/40 px-3 py-1 text-xs font-bold text-sage">
                  {p.qty} Terjual
                </span>
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
            <span className="text-xs text-stone uppercase tracking-wider">{period} - {selectedYear}</span>
          </div>

          <ul className="space-y-3">
            {lowSellingProducts.map((p) => (
              <li key={p.name} className="flex items-center justify-between rounded-lg bg-white p-3 border border-sand">
                <div>
                  <p className="font-semibold text-black text-sm">{p.name}</p>
                  <p className="text-xs text-stone">{formatRupiah(p.revenue)}</p>
                </div>
                <span className="rounded-full bg-[#ba1a1a]/10 px-3 py-1 text-xs font-bold text-[#ba1a1a]">
                  {p.qty} Terjual
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}