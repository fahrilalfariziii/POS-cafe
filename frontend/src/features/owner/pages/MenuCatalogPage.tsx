import { useState } from 'react'
import { useCafe } from '../../../mock/store'
import { formatRupiah, uid } from '../../../shared/lib/format'
import type { Product } from '../../../shared/types'
import { Button, Field, TextInput } from '../../../shared/components/ui'

export function MenuCatalogPage() {
  const { products, categories, upsertProduct, removeProduct } = useCafe()
  const [open, setOpen] = useState(false)
  const [draft, setDraft] = useState<Product | null>(null)

  function startNew() {
    setDraft({
      id: uid('p'),
      categoryId: categories[0]?.id ?? '',
      name: '',
      description: '',
      price: 0,
      imageUrl: products[0]?.imageUrl ?? '',
      isAvailable: true,
      options: [],
    })
    setOpen(true)
  }

  return (
    <div>
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h1 className="font-display text-[40px] font-semibold tracking-tight">Menu Catalog</h1>
          <p className="text-muted">Kelola menu, harga, kategori, dan ketersediaan.</p>
        </div>
        <Button onClick={startNew}>Add New Menu</Button>
      </div>
      <div className="grid grid-cols-2 gap-4 xl:grid-cols-3">
        {products.map((p) => (
          <article key={p.id} className="overflow-hidden rounded-[8px] bg-white ring-1 ring-[#e4e2dd]">
            <img src={p.imageUrl} alt="" className="h-40 w-full object-cover" />
            <div className="p-4">
              <div className="mb-2 flex items-start justify-between">
                <div>
                  <p className="font-semibold">{p.name}</p>
                  <p className="text-xs text-muted">{categories.find((c) => c.id === p.categoryId)?.name}</p>
                </div>
                <span className={`text-[11px] uppercase ${p.isAvailable ? 'text-sage' : 'text-[#ba1a1a]'}`}>
                  {p.isAvailable ? 'Available' : 'Out of Stock'}
                </span>
              </div>
              <p className="mb-3 line-clamp-2 text-sm text-muted">{p.description}</p>
              <div className="flex items-center justify-between">
                <span className="font-semibold">{formatRupiah(p.price)}</span>
                <div className="flex gap-2">
                  <button
                    className="text-xs"
                    onClick={() => {
                      setDraft(p)
                      setOpen(true)
                    }}
                  >
                    Edit
                  </button>
                  <button className="text-xs text-[#ba1a1a]" onClick={() => removeProduct(p.id)}>
                    Hapus
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
      {open && draft && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 p-6" onClick={() => setOpen(false)}>
          <form
            className="max-h-[90vh] w-full max-w-lg overflow-auto rounded-[12px] bg-cream p-6"
            onClick={(e) => e.stopPropagation()}
            onSubmit={(e) => {
              e.preventDefault()
              upsertProduct(draft)
              setOpen(false)
            }}
          >
            <h2 className="mb-4 font-display text-2xl">Simpan Menu</h2>
            <div className="grid gap-3">
              <Field label="Nama Menu">
                <TextInput value={draft.name} onChange={(e) => setDraft({ ...draft, name: e.target.value })} />
              </Field>
              <Field label="Kategori">
                <select
                  className="h-12 rounded-[8px] border border-clay bg-white px-3"
                  value={draft.categoryId}
                  onChange={(e) => setDraft({ ...draft, categoryId: e.target.value })}
                >
                  {categories.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Harga (IDR)">
                <TextInput
                  value={String(draft.price)}
                  onChange={(e) => setDraft({ ...draft, price: Number(e.target.value) })}
                />
              </Field>
              <Field label="Deskripsi">
                <TextInput value={draft.description} onChange={(e) => setDraft({ ...draft, description: e.target.value })} />
              </Field>
              <Field label="Status">
                <select
                  className="h-12 rounded-[8px] border border-clay bg-white px-3"
                  value={draft.isAvailable ? 'yes' : 'no'}
                  onChange={(e) => setDraft({ ...draft, isAvailable: e.target.value === 'yes' })}
                >
                  <option value="yes">Tersedia</option>
                  <option value="no">Habis</option>
                </select>
              </Field>
            </div>
            <div className="mt-5 flex justify-end gap-2">
              <Button type="button" variant="ghost" onClick={() => setOpen(false)}>
                Batal
              </Button>
              <Button type="submit">Simpan Menu</Button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}
