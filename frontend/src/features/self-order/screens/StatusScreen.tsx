import type { CartItem, Order, OrderStatus } from '../../../shared/types'
import { formatRupiah } from '../../../shared/lib/format'
import { Button } from '../../../shared/components/ui'
import { useCafe } from '../../../mock/store'

interface Props {
  order: Order | null
  cart: CartItem[]
  tableNumber: string
  onOrderAgain: () => void
}

const STEPS: { id: OrderStatus; label: string }[] = [
  { id: 'diterima', label: 'Diterima' },
  { id: 'diproses', label: 'Diproses' },
  { id: 'siap', label: 'Siap' },
]

export function StatusScreen({ order, cart, tableNumber, onOrderAgain }: Props) {
  const { business } = useCafe()
  const status = order?.status ?? 'diterima'
  const idx = STEPS.findIndex((s) => s.id === status)
  const items = order?.items ?? cart.map((c) => ({
    id: c.cartId,
    productName: c.name,
    quantity: c.quantity,
    optionsLabel: c.optionsLabel,
    subtotal: c.price * c.quantity,
  }))
  const total = order?.total ?? items.reduce((s, i) => s + i.subtotal, 0)
  const headline =
    status === 'siap' ? 'SIAP DISAJIKAN' : status === 'diproses' ? 'SEDANG DISIAPKAN' : 'PESANAN DITERIMA'

  return (
    <div className="flex h-full flex-col bg-paper">
      <header className="flex h-12 items-center justify-center shadow-sm">
        <span className="font-display text-2xl font-semibold">{business.name}</span>
      </header>
      <div className="flex-1 overflow-y-auto px-5 py-6 pb-24 scrollbar-hide">
        <div className="mb-10 flex flex-col items-center gap-4 text-center">
          <span className="rounded-full bg-[#2f3e2a] px-6 py-2 text-sm font-semibold tracking-[0.7px] text-leaf">
            {headline}
          </span>
          <p className="text-soil">
            {status === 'siap'
              ? 'Pesanan Anda sudah siap. Silakan ambil di counter atau tunggu penyajian ke meja.'
              : 'Barista kami sedang meracik pesanan Anda dengan penuh perhatian.'}
          </p>
        </div>
        <div className="mb-10 flex items-center justify-between">
          {STEPS.map((step, i) => (
            <div key={step.id} className="flex flex-1 items-center">
              <div className="flex flex-col items-center gap-2">
                <div
                  className={`flex size-10 items-center justify-center rounded-full text-xs font-bold ${
                    i <= idx ? 'bg-ink text-white' : 'bg-[#e2e2e2] text-[#80756c]'
                  }`}
                >
                  {i < idx ? '✓' : i + 1}
                </div>
                <span className={`text-xs ${i <= idx ? 'font-bold text-ink' : 'text-[#80756c]'}`}>{step.label}</span>
              </div>
              {i < STEPS.length - 1 && (
                <div className={`mx-2 mb-5 h-1 flex-1 ${i < idx ? 'bg-ink' : 'bg-clay'}`} />
              )}
            </div>
          ))}
        </div>
        <div className="rounded-[12px] bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-[#e2e2e2] pb-2">
            <span className="font-display text-xl">{order ? `Order #${order.orderNumber}` : 'Pesanan'}</span>
            <span className="text-xs text-soil">Meja {order?.tableNumber ?? tableNumber}</span>
          </div>
          <div className="flex flex-col gap-2 py-3">
            {items.map((ci) => (
              <div key={ci.id} className="flex items-start justify-between">
                <div className="flex gap-3">
                  <span className="rounded-[8px] bg-[#eee] px-2 py-1 text-sm font-bold">{ci.quantity}x</span>
                  <div>
                    <p className="font-semibold">{ci.productName}</p>
                    {'optionsLabel' in ci && ci.optionsLabel && (
                      <p className="text-xs text-soil">{ci.optionsLabel}</p>
                    )}
                  </div>
                </div>
                <span className="font-semibold">{formatRupiah(ci.subtotal)}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-between border-t border-[#e2e2e2] pt-2">
            <span className="font-bold">Total Bayar</span>
            <span className="font-display text-xl">{formatRupiah(total)}</span>
          </div>
        </div>
        {order?.paymentMethod === 'cash' && order.paymentStatus !== 'paid' && (
          <p className="mt-4 rounded-[12px] bg-sand p-4 text-sm">Pembayaran tunai belum dicatat kasir. Silakan bayar di counter.</p>
        )}
        <div className="mt-8 flex flex-col gap-2">
          <Button className="h-12 w-full rounded-full" onClick={onOrderAgain}>
            Pesan Lagi
          </Button>
          <Button variant="outline" className="h-12 w-full rounded-full">
            Butuh Bantuan?
          </Button>
        </div>
      </div>
      <nav className="absolute bottom-0 flex h-20 w-full items-center justify-around border-t border-clay/20 bg-[#eee]">
        <button onClick={onOrderAgain} className="text-xs text-soil">
          Menu
        </button>
        <span className="rounded-[18px] bg-mint px-3 py-1 text-xs font-bold">Pesanan</span>
      </nav>
    </div>
  )
}
