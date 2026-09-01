import type { Order } from '../../../shared/types'
import { formatRupiah } from '../../../shared/lib/format'
import { Button } from '../../../shared/components/ui'
import { IconBack } from '../../../shared/components/icons'

interface Props {
  order: Order
  onBack: () => void
  onConfirm: () => void
}

export function PaymentScreen({ order, onBack, onConfirm }: Props) {
  return (
    <div className="flex h-full flex-col bg-paper">
      <header className="relative flex h-12 items-center justify-center shadow-sm">
        <button onClick={onBack} className="absolute left-5 size-12" aria-label="Kembali">
          <IconBack />
        </button>
        <span className="font-display text-xl font-semibold">Pembayaran</span>
      </header>
      <div className="flex-1 overflow-y-auto px-5 py-6 pb-32 scrollbar-hide">
        <div className="mb-6 rounded-[12px] border border-[#e2e2e2] bg-white p-[17px] text-center shadow-sm">
          <p className="text-sm font-semibold text-soil">Total Pembayaran</p>
          <p className="font-display text-2xl font-bold">{formatRupiah(order.total)}</p>
          <div className="my-4 border-t border-dashed border-[#e2e2e2]" />
          <div className="flex justify-between text-soil">
            <span>Order ID</span>
            <span className="font-semibold text-ink">#{order.orderNumber}</span>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-[12px] border border-[#e2e2e2] bg-white px-5 py-6 text-center shadow-sm">
          <p className="font-display text-xl font-semibold">Scan QRIS</p>
          <p className="mt-2 text-soil">Gunakan e-wallet atau m-banking untuk memindai kode merchant cafe.</p>
          <div className="mx-auto mt-4 grid size-48 grid-cols-8 gap-1 border border-clay p-3">
            {Array.from({ length: 64 }).map((_, i) => (
              <span key={i} className={`block ${i % 3 === 0 || i % 7 === 0 ? 'bg-ink' : 'bg-white'}`} />
            ))}
          </div>
          <p className="mt-4 rounded-full bg-[#eee] px-4 py-2 text-xs text-soil">
            QRIS statis — kasir akan memverifikasi pembayaran secara manual.
          </p>
        </div>
        {order.paymentMethod === 'cash' && (
          <p className="mt-6 rounded-[12px] bg-mint/40 p-4 text-sm text-ink">
            Silakan segera melakukan pembayaran tunai di kasir.
          </p>
        )}
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-2 border-t border-clay/10 bg-paper px-5 pb-6 pt-4">
        <Button className="h-12 w-full rounded-[8px]" onClick={onConfirm}>
          Cek Status Pembayaran
        </Button>
        <Button variant="outline" className="h-12 w-full rounded-[8px]" onClick={onBack}>
          Pilih Metode Lain
        </Button>
      </div>
    </div>
  )
}
