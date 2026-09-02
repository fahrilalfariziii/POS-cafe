import { useMemo, useState } from 'react'
import { useCafe } from '../../../../mock/store'
import { formatRupiah, formatTime } from '../../../../shared/lib/format'

export function SalesHistoryPage() {
  const { orders } = useCafe()
  const [period, setPeriod] = useState<'daily' | 'weekly' | 'monthly'>('daily')
  const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear())

  const paidOrders = useMemo(() => {
    return orders.filter((o) => {
      const orderYear = new Date(o.createdAt).getFullYear()
      return o.paymentStatus === 'paid' && orderYear === selectedYear
    })
  }, [orders, selectedYear])

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
    link.setAttribute('download', `Riwayat_Transaksi_${selectedYear}_${period}.csv`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-[32px] font-semibold tracking-tight">Riwayat Transaksi</h1>
          <p className="text-stone">Seluruh riwayat pesanan yang sudah terbayar.</p>
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
            onClick={exportSalesCSV}
            className="flex h-10 items-center gap-2 rounded-lg bg-black px-4 text-xs font-semibold text-white hover:bg-black/80 transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">download</span>
            <span>Ekspor Transaksi</span>
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-[12px] border border-[#c4c7c7] bg-white shadow-xs">
        <table className="w-full text-left text-sm">
          <thead className="bg-[#f7f3ea]/50 text-[11px] uppercase tracking-wider text-stone border-b border-sand">
            <tr>
              <th className="px-4 py-3">Waktu</th>
              <th className="px-4 py-3">No. Order</th>
              <th className="px-4 py-3">Daftar Item</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3 text-right">Total Tagihan</th>
            </tr>
          </thead>
          <tbody>
            {paidOrders.map((o) => (
              <tr key={o.id} className="border-t border-sand hover:bg-cream/40 transition-colors">
                <td className="px-4 py-3 text-stone">{formatTime(o.createdAt)}</td>
                <td className="px-4 py-3 font-semibold text-black">#{o.orderNumber}</td>
                <td className="px-4 py-3 text-stone">
                  {o.items.map((i) => `${i.quantity}× ${i.productName}`).join(', ')}
                </td>
                <td className="px-4 py-3">
                  <span className="rounded-full bg-[#b8cda9]/40 px-2.5 py-0.5 text-[10px] font-bold uppercase text-sage">
                    {o.paymentStatus}
                  </span>
                </td>
                <td className="px-4 py-3 font-semibold text-black text-right">{formatRupiah(o.total)}</td>
              </tr>
            ))}

            {paidOrders.length === 0 && (
              <tr>
                <td colSpan={5} className="py-8 text-center text-xs text-muted">
                  Tidak ada transaksi terverifikasi pada tahun {selectedYear}.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}