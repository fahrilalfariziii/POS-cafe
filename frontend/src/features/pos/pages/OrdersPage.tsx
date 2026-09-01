import { useCafe } from '../../../mock/store'
import { formatRupiah, formatTime } from '../../../shared/lib/format'
import type { OrderStatus } from '../../../shared/types'

const COLS: { id: OrderStatus; label: string }[] = [
  { id: 'diterima', label: 'Diterima' },
  { id: 'diproses', label: 'Diproses' },
  { id: 'siap', label: 'Siap Diambil' },
]

export function OrdersPage() {
  const { orders, updateOrderStatus, markPaid } = useCafe()

  return (
    <div>
      <h1 className="font-display text-[40px] font-semibold tracking-tight">Live Orders</h1>
      <p className="mb-6 text-stone">Pesanan masuk real-time dari meja dan kasir.</p>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {COLS.map((col) => {
          const list = orders.filter((o) => o.status === col.id)
          return (
            <section key={col.id} className="rounded-[12px] bg-white/60 p-4">
              <div className="mb-4 flex items-center gap-3 border-b border-[#c4c7c7] pb-3">
                <h2 className="text-xl font-medium">{col.label}</h2>
                <span className="rounded-[12px] bg-[#e6e2d9] px-2 py-0.5 text-xs font-semibold tracking-wider text-stone">
                  {list.length}
                </span>
              </div>
              <div className="flex flex-col gap-3">
                {list.map((order) => (
                  <article key={order.id} className="rounded-[12px] border border-[#c4c7c7] bg-cream p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm font-semibold">#{order.orderNumber}</p>
                        <p className="text-xs text-muted">
                          {order.tableNumber ? `Meja ${order.tableNumber}` : 'Kasir'} · {order.customerName} · {formatTime(order.createdAt)}
                        </p>
                      </div>
                      <span className="text-[10px] uppercase tracking-wider text-muted">
                        {order.paymentMethod} · {order.paymentStatus}
                      </span>
                    </div>
                    <ul className="mt-3 space-y-1 text-sm">
                      {order.items.map((it) => (
                        <li key={it.id}>
                          {it.quantity}× {it.productName}
                          {it.optionsLabel ? <span className="text-muted"> · {it.optionsLabel}</span> : null}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="font-semibold">{formatRupiah(order.total)}</span>
                      <div className="flex gap-2">
                        {order.paymentStatus !== 'paid' && (
                          <button
                            className="rounded-lg bg-sand px-3 py-1 text-xs"
                            onClick={() => markPaid(order.id)}
                          >
                            Tandai Lunas
                          </button>
                        )}
                        {col.id === 'diterima' && (
                          <button className="rounded-lg bg-black px-3 py-1 text-xs text-white" onClick={() => updateOrderStatus(order.id, 'diproses')}>
                            Proses
                          </button>
                        )}
                        {col.id === 'diproses' && (
                          <button className="rounded-lg bg-black px-3 py-1 text-xs text-white" onClick={() => updateOrderStatus(order.id, 'siap')}>
                            Siap
                          </button>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
                {list.length === 0 && <p className="text-sm text-muted">Belum ada pesanan.</p>}
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}
