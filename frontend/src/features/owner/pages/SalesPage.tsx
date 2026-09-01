import { useCafe } from '../../../mock/store'
import { formatRupiah, formatTime } from '../../../shared/lib/format'

export function SalesPage() {
  const { orders } = useCafe()
  const paid = orders.filter((o) => o.paymentStatus === 'paid')
  const revenue = paid.reduce((s, o) => s + o.total, 0)
  const avg = paid.length ? revenue / paid.length : 0

  return (
    <div>
      <h1 className="font-display text-[40px] font-semibold tracking-tight">Laporan Penjualan</h1>
      <p className="mb-8 text-muted">Omset dan histori transaksi yang sudah valid.</p>
      <div className="mb-6 grid grid-cols-3 gap-6">
        <article className="rounded-[4px] bg-cream p-6 ring-1 ring-[#e4e2dd]">
          <p className="text-[12px] font-semibold uppercase tracking-wider text-muted">Total Revenue (Today)</p>
          <p className="mt-3 text-[28px] font-bold">{formatRupiah(revenue)}</p>
        </article>
        <article className="rounded-[4px] bg-cream p-6 ring-1 ring-[#e4e2dd]">
          <p className="text-[12px] font-semibold uppercase tracking-wider text-muted">Total Orders</p>
          <p className="mt-3 text-[28px] font-bold">{paid.length}</p>
        </article>
        <article className="rounded-[4px] bg-cream p-6 ring-1 ring-[#e4e2dd]">
          <p className="text-[12px] font-semibold uppercase tracking-wider text-muted">Avg Order Value</p>
          <p className="mt-3 text-[28px] font-bold">{formatRupiah(avg)}</p>
        </article>
      </div>
      <div className="overflow-hidden rounded-[8px] bg-white">
        <table className="w-full text-left text-sm">
          <thead className="bg-[#f7f3ea] text-[12px] uppercase tracking-wider text-muted">
            <tr>
              <th className="px-4 py-3">Time</th>
              <th className="px-4 py-3">Order ID</th>
              <th className="px-4 py-3">Items</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Amount</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.id} className="border-t border-sand">
                <td className="px-4 py-3">{formatTime(o.createdAt)}</td>
                <td className="px-4 py-3">{o.orderNumber}</td>
                <td className="px-4 py-3">{o.items.map((i) => `${i.quantity}× ${i.productName}`).join(', ')}</td>
                <td className="px-4 py-3 capitalize">{o.paymentStatus}</td>
                <td className="px-4 py-3">{formatRupiah(o.total)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
