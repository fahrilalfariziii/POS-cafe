import { useState } from 'react'
import type { CartItem, PaymentMethod } from '../../../shared/types'
import { formatRupiah } from '../../../shared/lib/format'
import { Button } from '../../../shared/components/ui'
import { IconBack, IconMinus, IconPlus } from '../../../shared/components/icons'
import { TAX_RATE } from '../../../mock/data'

interface Props {
  tableNumber: string
  cart: CartItem[]
  customerName: string
  payMethod: PaymentMethod
  onName: (v: string) => void
  onPayMethod: (v: PaymentMethod) => void
  onBack: () => void
  onUpdateQty: (id: string, delta: number) => void
  onCheckout: () => void
}

const METHODS: { id: PaymentMethod; label: string; sub: string }[] = [
  { id: 'qris', label: 'QRIS', sub: 'GoPay, ShopeePay, Dana, dll' },
  { id: 'cash', label: 'Tunai', sub: 'Bayar di kasir' },
  { id: 'transfer', label: 'Transfer Bank', sub: 'Transfer ke rekening cafe' },
  { id: 'debit', label: 'Debit', sub: 'Kartu debit di kasir' },
]

export function CartScreen({
  tableNumber,
  cart,
  customerName,
  payMethod,
  onName,
  onPayMethod,
  onBack,
  onUpdateQty,
  onCheckout,
}: Props) {
  const [error, setError] = useState(false)
  const subtotal = cart.reduce((s, i) => s + i.price * i.quantity, 0)
  const tax = Math.round(subtotal * TAX_RATE)
  const total = subtotal + tax
  const handleCheckout = () => {
    // Validasi: Cek jika nama kosong atau hanya berisi spasi
    if (!customerName.trim()) {
      setError(true)
      return
    }

    setError(false)
    onCheckout()
  }

  return (
    <div className="flex h-full flex-col bg-paper">
      <header className="flex h-12 shrink-0 items-center justify-between px-5 shadow-sm">
        <button onClick={onBack} className="size-12" aria-label="Kembali">
          <IconBack />
        </button>
        <span className="font-display text-xl font-bold">Keranjang</span>
        <span className="text-sm">Table {tableNumber}</span>
      </header>
      <div className="flex-1 overflow-y-auto px-5 py-6 pb-48 scrollbar-hide">
        <div className="flex flex-col gap-8">
          <section>
            <h2 className="font-display mb-3 text-xl font-semibold">Informasi Pemesan</h2>
            <div className="relative">
              <input
                className={`w-full rounded-[8px] border bg-white px-4 pb-3 pt-6 text-base outline-none transition-colors ${
                  error
                    ? 'border-red-500 focus:border-red-500'
                    : 'border-clay focus:border-sage'
                }`}
                value={customerName}
                onChange={(e) => {
                  if (error) setError(false)
                  onName(e.target.value)
                }}
                placeholder=" "
                required
              />
              <span className="absolute left-4 top-2 text-xs text-soil">Nama Pemesan</span>
            </div>
            <p className="mt-1 px-1 text-xs text-soil"></p>
            {error ? (
              <p className="mt-1 px-1 text-xs font-medium text-red-500">
                Nama pemesan wajib diisi sebelum memesan.
              </p>
            ) : (
              <p className="mt-1 px-1 text-xs text-soil">
                Nama ini akan dipanggil saat pesanan siap.
              </p>
            )}
          </section>
          <section className="flex flex-col gap-4">
            <h2 className="font-display text-xl font-semibold">Pesanan Anda</h2>
            {cart.map((ci) => (
              <div key={ci.cartId} className="relative flex gap-4 rounded-[12px] bg-white p-4 shadow-sm">
                <img src={ci.imageUrl} alt="" className="size-24 rounded-[8px] object-cover" />
                <div className="flex min-w-0 flex-1 flex-col justify-between">
                  <div>
                    <p className="text-sm font-bold">{ci.name}</p>
                    {ci.optionsLabel && <p className="text-xs text-soil">{ci.optionsLabel}</p>}
                    <p className="mt-1 text-sm font-semibold text-sage">{formatRupiah(ci.price)}</p>
                  </div>
                  <div className="flex h-8 w-fit items-center rounded-full bg-mint/20">
                    <button className="size-8" onClick={() => onUpdateQty(ci.cartId, -1)}>
                      <IconMinus color="#1A2816" />
                    </button>
                    <span className="w-6 text-center text-sm font-semibold">{ci.quantity}</span>
                    <button className="size-8" onClick={() => onUpdateQty(ci.cartId, 1)}>
                      <IconPlus color="#1A2816" />
                    </button>
                  </div>
                </div>
                <button className="absolute right-4 top-4 text-xs text-soil" onClick={() => onUpdateQty(ci.cartId, -ci.quantity)}>
                  Hapus
                </button>
              </div>
            ))}
            <button onClick={onBack} className="py-2 text-base text-ink">
              + Tambah Item Lain
            </button>
          </section>
          <section>
            <h2 className="font-display mb-3 text-xl font-bold">Metode Pembayaran</h2>
            <div className="flex flex-col gap-2">
              {METHODS.map((m) => (
                <button
                  key={m.id}
                  onClick={() => onPayMethod(m.id)}
                  className={`flex items-center justify-between rounded-[8px] border bg-white p-[13px] text-left ${payMethod === m.id ? 'border-sage' : 'border-clay'}`}
                >
                  <div>
                    <p className="text-sm font-bold">{m.label}</p>
                    <p className="text-[10px] text-soil">{m.sub}</p>
                  </div>
                  {payMethod === m.id && (
                    <span className="flex size-5 items-center justify-center rounded-full bg-sage text-[10px] text-white">✓</span>
                  )}
                </button>
              ))}
            </div>
          </section>
          <section className="rounded-[12px] bg-[#f3f3f3] p-5">
            <h2 className="font-display mb-2 text-xl font-semibold">Ringkasan Pesanan</h2>
            <div className="flex justify-between py-1 text-soil">
              <span>Subtotal ({cart.length} item)</span>
              <span className="text-ink">{formatRupiah(subtotal)}</span>
            </div>
            <div className="flex justify-between py-1 text-soil">
              <span>Pajak PB1 (10%)</span>
              <span className="text-ink">{formatRupiah(tax)}</span>
            </div>
            <div className="my-2 h-px bg-clay/50" />
            <div className="flex justify-between py-2">
              <span className="font-display text-2xl font-bold">Total</span>
              <span className="font-display text-2xl font-bold text-sage">{formatRupiah(total)}</span>
            </div>
          </section>
        </div>
      </div>
      <div className="absolute bottom-20 left-0 right-0 flex items-center justify-between rounded-t-[12px] border-t border-clay/20 bg-white px-4 pb-4 pt-[17px]">
        <div>
          <p className="text-xs text-soil">Total Tagihan</p>
          <p className="font-display text-xl font-bold text-sage">{formatRupiah(total)}</p>
        </div>
        <Button className="h-12 rounded-full px-8 disabled:opacity-50" 
          disabled={cart.length === 0 || !customerName.trim()} 
          onClick={handleCheckout}>
          Pesan Sekarang
        </Button>
      </div>
      <nav className="absolute bottom-0 flex h-20 w-full items-center justify-around border-t border-clay/20 bg-white">
        <button onClick={onBack} className="text-xs text-soil">
          Menu
        </button>
        <span className="rounded-[18px] bg-mint px-3 py-1 text-xs font-bold text-ink">Pesanan</span>
      </nav>
    </div>
  )
}
