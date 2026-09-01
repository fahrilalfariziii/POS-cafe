import { useState } from 'react'
import { useCafe } from '../../../mock/store'

export function CatalogPage() {
  const { products, categories, toggleProductAvailability } = useCafe()
  const [cat, setCat] = useState('All')
  const [q, setQ] = useState('')
  const tabs = ['All', ...categories.map((c) => c.name)]
  const filtered = products.filter((p) => {
    const name = categories.find((c) => c.id === p.categoryId)?.name
    return (cat === 'All' || name === cat) && p.name.toLowerCase().includes(q.toLowerCase())
  })

  return (
    <div>
      <h1 className="font-display text-[40px] font-semibold tracking-tight">Menu Availability</h1>
      <p className="mb-6 text-stone">Kelola ketersediaan item dan status katalog secara real-time.</p>
      <div className="mb-6 flex flex-wrap items-center gap-3">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setCat(t)}
            className={`h-[33px] rounded-[12px] px-4 text-xs font-semibold tracking-wider ${t === cat ? 'bg-black text-white' : 'bg-sand text-stone'}`}
          >
            {t}
          </button>
        ))}
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search menu items..."
          className="h-[34px] min-w-[240px] flex-1 rounded-[12px] border border-[#c4c7c7] bg-[#f7f3ea] px-4 text-sm outline-none"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((p) => (
          <article key={p.id} className="flex gap-4 rounded-[12px] border border-[#c4c7c7] bg-cream p-4">
            <img src={p.imageUrl} alt="" className="size-20 rounded-lg object-cover" />
            <div className="flex flex-1 items-start justify-between">
              <div>
                <p className="font-semibold">{p.name}</p>
                <p className="text-xs text-muted">{categories.find((c) => c.id === p.categoryId)?.name}</p>
              </div>
              <button
                onClick={() => toggleProductAvailability(p.id)}
                className={`rounded-[12px] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ${
                  p.isAvailable ? 'bg-[#b8cda9]/50 text-sage' : 'bg-[#ba1a1a]/15 text-[#ba1a1a]'
                }`}
              >
                {p.isAvailable ? 'In Stock' : 'Out of Stock'}
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
