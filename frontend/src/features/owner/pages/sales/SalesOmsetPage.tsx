import { useMemo, useState } from 'react'
import { useCafe } from '../../../../mock/store'
import { formatRupiah, formatTime } from '../../../../shared/lib/format'

type OmsetView = 'omset' | 'sales_type'

export function SalesOmsetPage() {
  const { orders } = useCafe()
  const [period, setPeriod] = useState<'daily' | 'weekly' | 'monthly'>('daily')
  const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear())
  const [activeView, setActiveView] = useState<OmsetView>('omset')

  const paidOrders = useMemo(() => {
    return orders.filter((o) => {
      const orderYear = new Date(o.createdAt).getFullYear()
      return o.paymentStatus === 'paid' && orderYear === selectedYear
    })
  }, [orders, selectedYear])

  const totalRevenue = paidOrders.reduce((s, o) => s + o.total, 0)
  const totalOrdersCount = paidOrders.length
  const avgOrderValue = totalOrdersCount > 0 ? totalRevenue / totalOrdersCount : 0

  const selfOrders = useMemo(() => paidOrders.filter((o) => o.source === 'self_order'), [paidOrders])
  const manualOrders = useMemo(() => paidOrders.filter((o) => o.source === 'pos'), [paidOrders])
  const selfRevenue = selfOrders.reduce((s, o) => s + o.total, 0)
  const manualRevenue = manualOrders.reduce((s, o) => s + o.total, 0)

  const chartData = useMemo(() => {
    if (period === 'daily') {
      return [
        { label: '08:00', value: 450000 },
        { label: '10:00', value: 820000 },
        { label: '12:00', value: 1650000 },
        { label: '14:00', value: 1100000 },
        { label: '16:00', value: 950000 },
        { label: '18:00', value: 2100000 },
        { label: '20:00', value: 1400000 },
      ]
    }
    if (period === 'weekly') {
      return [
        { label: 'Senin', value: 3200000 },
        { label: 'Selasa', value: 3800000 },
        { label: 'Rabu', value: 3500000 },
        { label: 'Kamis', value: 4100000 },
        { label: 'Jumat', value: 5800000 },
        { label: 'Sabtu', value: 7200000 },
        { label: 'Minggu', value: 6900000 },
      ]
    }
    return [
      { label: 'Minggu 1', value: 18500000 },
      { label: 'Minggu 2', value: 22100000 },
      { label: 'Minggu 3', value: 19800000 },
      { label: 'Minggu 4', value: 25400000 },
    ]
  }, [period])

  const salesTypeChart = useMemo(() => {
    // mock split self vs manual per period label (proporsional)
    if (period === 'daily') {
      return [
        { label: '08:00', self: 280000, manual: 170000 },
        { label: '10:00', self: 500000, manual: 320000 },
        { label: '12:00', self: 1000000, manual: 650000 },
        { label: '14:00', self: 700000, manual: 400000 },
        { label: '16:00', self: 600000, manual: 350000 },
        { label: '18:00', self: 1300000, manual: 800000 },
        { label: '20:00', self: 900000, manual: 500000 },
      ]
    }
    if (period === 'weekly') {
      return [
        { label: 'Senin', self: 2000000, manual: 1200000 },
        { label: 'Selasa', self: 2400000, manual: 1400000 },
        { label: 'Rabu', self: 2200000, manual: 1300000 },
        { label: 'Kamis', self: 2600000, manual: 1500000 },
        { label: 'Jumat', self: 3600000, manual: 2200000 },
        { label: 'Sabtu', self: 4500000, manual: 2700000 },
        { label: 'Minggu', self: 4300000, manual: 2600000 },
      ]
    }
    return [
      { label: 'Minggu 1', self: 11500000, manual: 7000000 },
      { label: 'Minggu 2', self: 13800000, manual: 8300000 },
      { label: 'Minggu 3', self: 12300000, manual: 7500000 },
      { label: 'Minggu 4', self: 15800000, manual: 9600000 },
    ]
  }, [period])

  const maxChartValue = Math.max(...chartData.map((d) => d.value), 1)
  const maxSalesType = Math.max(...salesTypeChart.map((d) => d.self + d.manual), 1)

  function exportSalesCSV() {
    if (activeView === 'sales_type') {
      const headers = ['Waktu', 'No Order', 'Sales Type', 'Items', 'Total Tagihan']
      const rows = paidOrders.map((o) => [
        formatTime(o.createdAt),
        `#${o.orderNumber}`,
        o.source === 'self_order' ? 'Self Order' : 'Manual Order',
        `"${o.items.map((i) => `${i.quantity}x ${i.productName}`).join(', ')}"`,
        o.total,
      ])
      const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n')
      const link = document.createElement('a')
      link.setAttribute('href', encodeURI(csvContent))
      link.setAttribute('download', `Sales_Type_${selectedYear}_${period}.csv`)
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      return
    }
    const headers = ['Waktu', 'No Order', 'Items', 'Status Pembayaran', 'Total Tagihan']
    const rows = paidOrders.map((o) => [
      formatTime(o.createdAt),
      `#${o.orderNumber}`,
      `"${o.items.map((i) => `${i.quantity}x ${i.productName}`).join(', ')}"`,
      o.paymentStatus,
      o.total,
    ])
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n')
    const link = document.createElement('a')
    link.setAttribute('href', encodeURI(csvContent))
    link.setAttribute('download', `Laporan_Omset_${selectedYear}_${period}.csv`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-[32px] font-semibold tracking-tight">Laporan Omset</h1>
          <p className="text-stone">Ringkasan pendapatan dan grafik statistik transaksi.</p>
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
            onClick={exportSalesCSV}
            className="flex h-10 items-center gap-2 rounded-lg bg-black px-4 text-xs font-semibold text-white hover:bg-black/80 transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">download</span>
            <span>Ekspor {activeView === 'sales_type' ? 'Sales Type' : 'Omset'} (CSV)</span>
          </button>
        </div>
      </div>

      {/* Kategori bar: Omset | Sales Type */}
      <div className="flex gap-2 rounded-lg border border-[#c4c7c7] bg-cream p-1.5">
        <button
          onClick={() => setActiveView('omset')}
          className={`flex-1 rounded-md px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
            activeView === 'omset' ? 'bg-black text-white shadow-xs' : 'bg-white text-stone hover:text-black border border-sand'
          }`}
        >
          Omset
        </button>
        <button
          onClick={() => setActiveView('sales_type')}
          className={`flex-1 rounded-md px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
            activeView === 'sales_type' ? 'bg-black text-white shadow-xs' : 'bg-white text-stone hover:text-black border border-sand'
          }`}
        >
          Sales Type
        </button>
      </div>

      {activeView === 'omset' ? (
        <>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <article className="rounded-[12px] bg-cream p-5 border border-[#c4c7c7]">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-stone">Total Omset ({period} - {selectedYear})</p>
              <p className="mt-2 text-[28px] font-bold text-black">{formatRupiah(totalRevenue)}</p>
            </article>
            <article className="rounded-[12px] bg-cream p-5 border border-[#c4c7c7]">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-stone">Total Transaksi</p>
              <p className="mt-2 text-[28px] font-bold text-black">{totalOrdersCount} Pesanan</p>
            </article>
            <article className="rounded-[12px] bg-cream p-5 border border-[#c4c7c7]">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-stone">Rata-rata Transaksi</p>
              <p className="mt-2 text-[28px] font-bold text-black">{formatRupiah(avgOrderValue)}</p>
            </article>
          </div>

          <div className="rounded-[12px] border border-[#c4c7c7] bg-white p-6 shadow-2xs">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-black">Grafik Penjualan</h2>
              <span className="material-symbols-outlined text-stone">bar_chart</span>
            </div>
            <div className="flex h-56 items-end gap-3 border-b border-sand pb-2 pt-6">
              {chartData.map((d, i) => {
                const h = (d.value / maxChartValue) * 100
                return (
                  <div key={i} className="group relative flex flex-1 flex-col items-center justify-end h-full">
                    <div className="absolute -top-8 hidden rounded bg-black px-2 py-1 text-[10px] font-bold text-white group-hover:block z-10">{formatRupiah(d.value)}</div>
                    <div className="w-full rounded-t-md bg-sage transition-all duration-300 group-hover:bg-black" style={{ height: `${h}%` }} />
                    <span className="mt-2 text-[11px] font-semibold text-stone">{d.label}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <article className="rounded-[12px] bg-cream p-5 border border-[#c4c7c7]">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-stone">Self Order</p>
              <p className="mt-2 text-[28px] font-bold text-black">{formatRupiah(selfRevenue)}</p>
              <p className="text-xs text-stone">{selfOrders.length} transaksi</p>
            </article>
            <article className="rounded-[12px] bg-cream p-5 border border-[#c4c7c7]">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-stone">Manual Order</p>
              <p className="mt-2 text-[28px] font-bold text-black">{formatRupiah(manualRevenue)}</p>
              <p className="text-xs text-stone">{manualOrders.length} transaksi</p>
            </article>
            <article className="rounded-[12px] bg-white p-5 border border-[#c4c7c7]">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-stone">Proporsi</p>
              <p className="mt-2 text-[20px] font-bold text-black">
                {totalRevenue > 0 ? `${Math.round((selfRevenue / totalRevenue) * 100)}% Self / ${Math.round((manualRevenue / totalRevenue) * 100)}% Manual` : '-'}
              </p>
              <p className="text-xs text-stone">mock — backend nanti agregasi real</p>
            </article>
          </div>

          <div className="rounded-[12px] border border-[#c4c7c7] bg-white p-6 shadow-2xs">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-black">Grafik Sales Type</h2>
              <span className="flex items-center gap-3 text-xs">
                <span className="flex items-center gap-1"><span className="inline-block size-3 rounded bg-sage" /> Self</span>
                <span className="flex items-center gap-1"><span className="inline-block size-3 rounded bg-black" /> Manual</span>
              </span>
            </div>
            <div className="flex h-56 items-end gap-3 border-b border-sand pb-2 pt-6">
              {salesTypeChart.map((d, i) => {
                const total = d.self + d.manual
                const hSelf = (d.self / maxSalesType) * 100
                const hManual = (d.manual / maxSalesType) * 100
                return (
                  <div key={i} className="flex flex-1 flex-col items-center justify-end gap-0.5 h-full">
                    <div className="flex w-full items-end gap-0.5 justify-center flex-1">
                      <div className="w-full rounded-t bg-sage" style={{ height: `${hSelf}%` }} title={`Self ${formatRupiah(d.self)}`} />
                      <div className="w-full rounded-t bg-black" style={{ height: `${hManual}%` }} title={`Manual ${formatRupiah(d.manual)}`} />
                    </div>
                    <span className="mt-2 text-[11px] font-semibold text-stone">{d.label}</span>
                    <span className="text-[10px] text-stone">{formatRupiah(total)}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
