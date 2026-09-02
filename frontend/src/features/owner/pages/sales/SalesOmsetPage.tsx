import { useMemo, useState } from 'react'
import { useCafe } from '../../../../mock/store'
import { formatRupiah, formatTime } from '../../../../shared/lib/format'

export function SalesOmsetPage() {
  const { orders } = useCafe()
  const [period, setPeriod] = useState<'daily' | 'weekly' | 'monthly'>('daily')
  const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear())

  const paidOrders = useMemo(() => {
    return orders.filter((o) => {
      const orderYear = new Date(o.createdAt).getFullYear()
      return o.paymentStatus === 'paid' && orderYear === selectedYear
    })
  }, [orders, selectedYear])

  const totalRevenue = paidOrders.reduce((s, o) => s + o.total, 0)
  const totalOrdersCount = paidOrders.length
  const avgOrderValue = totalOrdersCount > 0 ? totalRevenue / totalOrdersCount : 0

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

  const maxChartValue = Math.max(...chartData.map((d) => d.value), 1)

  // Fungsi Ekspor CSV Laporan Transaksi / Omset
  function exportSalesCSV() {
    const headers = ['Waktu', 'No Order', 'Items', 'Status Pembayaran', 'Total Tagihan']
    const rows = paidOrders.map((o) => [
      formatTime(o.createdAt),
      `#${o.orderNumber}`,
      `"${o.items.map((i) => `${i.quantity}x ${i.productName}`).join(', ')}"`,
      o.paymentStatus,
      o.total,
    ])

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n')
    const encodedUri = encodeURI(csvContent)
    const link = document.createElement('a')
    link.setAttribute('href', encodedUri)
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

          {/* TOMBOL EKSPOR DATA CSV */}
          <button
            onClick={exportSalesCSV}
            className="flex h-10 items-center gap-2 rounded-lg bg-black px-4 text-xs font-semibold text-white hover:bg-black/80 transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">download</span>
            <span>Ekspor Omset (CSV)</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <article className="rounded-[12px] bg-cream p-5 border border-[#c4c7c7]">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-stone">
            Total Omset ({period} - {selectedYear})
          </p>
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
            const heightPercent = (d.value / maxChartValue) * 100
            return (
              <div key={i} className="group relative flex flex-1 flex-col items-center justify-end h-full">
                <div className="absolute -top-8 hidden rounded bg-black px-2 py-1 text-[10px] font-bold text-white group-hover:block z-10">
                  {formatRupiah(d.value)}
                </div>
                <div
                  className="w-full rounded-t-md bg-sage transition-all duration-300 group-hover:bg-black"
                  style={{ height: `${heightPercent}%` }}
                />
                <span className="mt-2 text-[11px] font-semibold text-stone">{d.label}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}