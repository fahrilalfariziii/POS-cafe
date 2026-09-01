import { Link } from 'react-router-dom'
import { useCafe } from '../../mock/store'

export function LandingPage() {
  const { business, tables } = useCafe()
  const demoTable = tables.find((t) => t.tableNumber === '04') ?? tables[0]

  return (
    <div className="min-h-full bg-cream px-8 py-16">
      <div className="mx-auto max-w-3xl">
        <p className="font-display text-4xl font-semibold">{business.name}</p>
        <p className="mt-2 text-muted">{business.tagline}</p>
        <p className="mt-6 max-w-xl text-stone">
          Tiga area aplikasi terpisah: pemesanan pelanggan lewat QR meja, POS kasir/barista, dan dashboard owner.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <Link to={`/order/${demoTable?.qrToken ?? 'table-04'}`} className="rounded-[12px] bg-white p-5 ring-1 ring-[#e4e2dd]">
            <p className="text-xs uppercase tracking-wider text-muted">Pelanggan</p>
            <p className="mt-2 font-display text-xl">Self-Order</p>
            <p className="mt-1 text-sm text-stone">Katalog, keranjang, QRIS/tunai, status pesanan.</p>
          </Link>
          <Link to="/login?next=/pos/orders" className="rounded-[12px] bg-white p-5 ring-1 ring-[#e4e2dd]">
            <p className="text-xs uppercase tracking-wider text-muted">Kasir / Barista</p>
            <p className="mt-2 font-display text-xl">POS</p>
            <p className="mt-1 text-sm text-stone">Order feed, stok, bahan, printer, offline sync.</p>
          </Link>
          <Link to="/login?next=/owner/dashboard" className="rounded-[12px] bg-white p-5 ring-1 ring-[#e4e2dd]">
            <p className="text-xs uppercase tracking-wider text-muted">Owner</p>
            <p className="mt-2 font-display text-xl">Analytics</p>
            <p className="mt-1 text-sm text-stone">Dashboard, katalog, meja QR, staff.</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
