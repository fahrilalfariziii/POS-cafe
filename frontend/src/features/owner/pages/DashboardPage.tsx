import { useMemo, useState } from 'react'
import { useCafe } from '../../../mock/store'
import { formatRupiah } from '../../../shared/lib/format'

const FALLBACK_DAYS = [8.2, 9.1, 7.4, 11.2, 10.5, 12.4, 11.8]

export function DashboardPage() {
  const { orders, products } = useCafe()
  const [period, setPeriod] = useState<'daily' | 'weekly' | 'monthly'>('daily')
  const paid = orders.filter((o) => o.paymentStatus === 'paid')
  const revenue = paid.reduce((s, o) => s + o.total, 0)
  const avg = paid.length ? revenue / paid.length : 0
  const counts = new Map<string, number>()
  for (const o of paid) {
    for (const i of o.items) counts.set(i.productName, (counts.get(i.productName) ?? 0) + i.quantity)
  }
  const best = [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 5)
  const oos = products.filter((p) => !p.isAvailable)

  const chart = useMemo(() => {
    if (paid.length === 0) return FALLBACK_DAYS.map((v, i) => ({ label: `H${i + 1}`, value: v }))
    // mock agregasi by period dari paid (hour/day/week) — pakai total per bucket mock + revenue real sebagai scale
    const total = paid.reduce((s, o) => s + o.total, 0)
    const scale = total > 0 ? total / FALLBACK_DAYS.reduce((a, b) => a + b, 0) / 1000 : 1
    const base = period === 'daily' ? FALLBACK_DAYS : period === 'weekly' ? [3.2, 3.8, 3.5, 4.1, 5.8, 7.2, 6.9] : [18.5, 22.1, 19.8, 25.4]
    return base.map((v, i) => ({
      label: period === 'daily' ? `${8 + i * 2}:00` : period === 'weekly' ? ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'][i] : `M${i + 1}`,
      value: v * scale,
    }))
  }, [paid, period])
  const max = Math.max(...chart.map((c) => c.value), 1)

  return (
    <div>
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h1 className="font-display text-[40px] font-semibold tracking-tight">Dashboard Overview</h1>
          <p className="text-muted">Today's Performance</p>
        </div>
        <div className="flex rounded-[2px] border border-[#c4c7c7] bg-[#f2ede4] p-[5px]">
          {(['daily', 'weekly', 'monthly'] as const).map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={`px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.6px] ${
                period === p ? 'bg-cream text-black shadow-sm' : 'text-muted'
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>
      <div className="mb-6 grid grid-cols-3 gap-6">
        {[
          { label: 'Total Revenue', value: formatRupiah(revenue), hint: paid.length ? '+8.5% from yesterday' : 'Belum ada transaksi' },
          { label: 'Total Orders', value: String(paid.length), hint: paid.length ? '+4 vs yesterday' : 'Belum ada order' },
          { label: 'Avg. Transaction', value: formatRupiah(Math.round(avg)), hint: paid.length ? 'Stabil' : '-' },
        ].map((k) => (
          <article key={k.label} className="flex h-32 flex-col justify-between rounded-[4px] bg-cream p-6 ring-1 ring-[#e4e2dd]">
            <p className="text-[12px] font-semibold uppercase tracking-[0.6px] text-muted">{k.label}</p>
            <div>
              <p className="text-[28px] font-bold tracking-tight">{k.value}</p>
              <p className="text-sm text-[#b8cda9]">{k.hint}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="grid grid-cols-12 gap-6">
        <section className="col-span-8 min-h-[400px] rounded-[4px] bg-cream p-6 ring-1 ring-[#e4e2dd]">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Omset {period}</h2>
            <span className="text-[12px] font-semibold uppercase tracking-wider text-muted">Export</span>
          </div>
          <div className="flex h-64 items-end gap-3 border-b border-sand px-2">
            {chart.map((c, i) => (
              <div key={i} className="group relative flex flex-1 flex-col items-center justify-end">
                <div className="absolute -top-6 hidden rounded bg-black px-2 py-1 text-[10px] font-bold text-white group-hover:block">{formatRupiah(Math.round(c.value * 1000))}</div>
                <div className="w-full rounded-t-sm bg-[#b8cda9] group-hover:bg-black transition-colors" style={{ height: `${(c.value / max) * 100}%` }} />
                <span className="mt-2 text-[10px] text-muted">{c.label}</span>
              </div>
            ))}
          </div>
          {paid.length === 0 && <p className="mt-2 text-center text-xs text-muted">Belum ada transaksi — menampilkan data contoh.</p>}
        </section>
        <div className="col-span-4 flex flex-col gap-6">
          <section className="rounded-[4px] bg-cream p-5 ring-1 ring-[#e4e2dd]">
            <h2 className="mb-4 text-lg font-semibold">Best Selling</h2>
            {best.length === 0 ? (
              <p className="text-sm text-muted">Belum ada penjualan.</p>
            ) : (
              <ul className="space-y-3">
                {best.map(([name, qty]) => (
                  <li key={name} className="flex items-center justify-between">
                    <span className="flex items-center gap-3">
                      <span className="flex size-8 items-center justify-center rounded-[2px] bg-sand text-xs">•</span>
                      {name}
                    </span>
                    <span className="text-sm text-muted">{qty}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
          <section className="rounded-[4px] bg-[#f5f0e7] p-5">
            <h2 className="mb-2 text-sm font-semibold">Status Alerts</h2>
            {oos.length === 0 ? (
              <p className="text-sm text-muted">Semua menu tersedia.</p>
            ) : (
              oos.map((p) => (
                <p key={p.id} className="text-sm">
                  {p.name} — Out of Stock
                </p>
              ))
            )}
          </section>
        </div>
      </div>
    </div>
  )
}
