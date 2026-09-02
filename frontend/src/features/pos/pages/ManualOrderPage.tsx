import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCafe } from '../../../mock/store'
import type { CartItem, PaymentMethod, Product } from '../../../shared/types'
import { formatRupiah } from '../../../shared/lib/format'
import { Button } from '../../../shared/components/ui'
import { TAX_PER_TRANSACTION } from '../../../mock/data'

export function ManualOrderPage() {
  const { products, categories, tables, placeOrder, connection } = useCafe()
  const navigate = useNavigate()
  const [cart, setCart] = useState<CartItem[]>([])
  const [name, setName] = useState('')
  const [tableId, setTableId] = useState('')
  const [pay, setPay] = useState<PaymentMethod>('cash')
  const [cat, setCat] = useState('All')
  const tabs = ['All', ...categories.map((c) => c.name)]
  const list = products.filter((p) => {
    const n = categories.find((c) => c.id === p.categoryId)?.name
    return p.isAvailable && (cat === 'All' || n === cat)
  })
  const subtotal = cart.reduce((s, i) => s + i.price * i.quantity, 0)
  // const tax = Math.round(subtotal * TAX_RATE)
  const tax = cart.length > 0 ? TAX_PER_TRANSACTION : 0
  const total = subtotal + tax
  const offline = connection === 'offline'

  function add(p: Product) {
    setCart((prev) => {
      const found = prev.find((i) => i.productId === p.id && !i.optionsLabel)
      if (found) return prev.map((i) => (i.cartId === found.cartId ? { ...i, quantity: i.quantity + 1 } : i))
      return [
        ...prev,
        {
          cartId: `${p.id}-${Date.now()}`,
          productId: p.id,
          name: p.name,
          price: p.price,
          quantity: 1,
          optionsLabel: '',
          options: {},
          imageUrl: p.imageUrl,
        },
      ]
    })
  }

  const change = useMemo(() => (pay === 'cash' ? Math.max(0, 100000 - total) : 0), [pay, total])

  function submit() {
    placeOrder({
      items: cart,
      customerName: name || 'Walk-in',
      tableId: tableId || null,
      tableNumber: tables.find((t) => t.id === tableId)?.tableNumber ?? 'Kasir',
      paymentMethod: pay,
      source: 'pos',
      offline,
    })
    navigate('/pos/orders')
  }

  return (
    <div className="grid h-[calc(100vh-7rem)] grid-cols-[1fr_360px] gap-6">
      <div>
        <h1 className="font-display mb-4 text-[32px] font-semibold">Manual POS</h1>
        <div className="mb-4 flex gap-2">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setCat(t)}
              className={`rounded-[12px] px-4 py-2 text-sm ${t === cat ? 'bg-black text-white' : 'bg-sand'}`}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3 overflow-auto xl:grid-cols-3">
          {list.map((p) => (
            <button key={p.id} onClick={() => add(p)} className="rounded-[12px] border border-[#c4c7c7] bg-cream p-3 text-left">
              <img src={p.imageUrl} alt="" className="mb-2 h-28 w-full rounded-lg object-cover" />
              <p className="font-semibold">{p.name}</p>
              <p className="text-sm text-muted">{formatRupiah(p.price)}</p>
            </button>
          ))}
        </div>
      </div>
      <aside className="flex flex-col rounded-[12px] border border-[#c4c7c7] bg-white p-5">
        <h2 className="mb-4 font-semibold">Ticket</h2>
        <label className="mb-2 text-[11px] uppercase tracking-wider text-muted">Nama Pemesan</label>
        <input className="mb-3 h-10 rounded-lg border border-clay px-3" value={name} onChange={(e) => setName(e.target.value)} />
        <label className="mb-2 text-[11px] uppercase tracking-wider text-muted">Pilih Meja</label>
        <select className="mb-3 h-10 rounded-lg border border-clay px-3" value={tableId} onChange={(e) => setTableId(e.target.value)}>
          <option value="">Kasir / Walk-in</option>
          {tables.filter((t) => t.isActive).map((t) => (
            <option key={t.id} value={t.id}>
              Meja {t.tableNumber}
            </option>
          ))}
        </select>
        <div className="flex-1 space-y-2 overflow-auto">
          {cart.map((i) => (
            <div key={i.cartId} className="flex justify-between text-sm">
              <span>
                {i.quantity}× {i.name}
              </span>
              <span>{formatRupiah(i.price * i.quantity)}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 border-t border-sand pt-3 text-sm">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>{formatRupiah(subtotal)}</span>
          </div>
          <div className="flex justify-between">
            <span>Tax (10%)</span>
            <span>{formatRupiah(tax)}</span>
          </div>
          <div className="mt-2 flex justify-between text-lg font-semibold">
            <span>Total</span>
            <span>{formatRupiah(total)}</span>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2">
          {(['cash', 'qris', 'debit', 'transfer'] as PaymentMethod[]).map((m) => (
            <button
              key={m}
              onClick={() => setPay(m)}
              className={`rounded-lg border px-2 py-2 text-xs uppercase ${pay === m ? 'border-black bg-sand' : 'border-clay'}`}
            >
              {m}
            </button>
          ))}
        </div>
        {pay === 'cash' && <p className="mt-2 text-xs text-muted">Estimasi kembalian dari Rp 100.000: {formatRupiah(change)}</p>}
        {offline && pay === 'qris' && (
          <p className="mt-2 text-xs text-[#ba1a1a]">QRIS tidak dapat diverifikasi otomatis saat offline.</p>
        )}
        <Button className="mt-4 w-full" disabled={cart.length === 0} onClick={submit}>
          Simpan Pesanan
        </Button>
      </aside>
    </div>
  )
}
