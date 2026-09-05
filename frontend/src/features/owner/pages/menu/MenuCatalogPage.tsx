import { useState } from 'react'
import { useCafe } from '../../../../mock/store'
import { formatRupiah, uid } from '../../../../shared/lib/format'
import type { Product, ProductOption } from '../../../../shared/types'
import { Button, Field, TextInput } from '../../../../shared/components/ui'

const ALL_VARIANTS: ProductOption[] = [
  { id: 't-hot', name: 'Hot', type: 'temperature', price: 0, isRequired: true },
  { id: 't-iced', name: 'Iced', type: 'temperature', price: 0, isRequired: true },
  { id: 's-normal', name: 'Normal', type: 'sugar', price: 0, isRequired: true },
  { id: 's-less', name: 'Less Sugar', type: 'sugar', price: 0, isRequired: true },
  { id: 's-no', name: 'No Sugar', type: 'sugar', price: 0, isRequired: true },
  { id: 'i-normal', name: 'Normal', type: 'ice', price: 0, isRequired: true },
  { id: 'i-less', name: 'Less Ice', type: 'ice', price: 0, isRequired: true },
  { id: 'i-no', name: 'No Ice', type: 'ice', price: 0, isRequired: true },
  { id: 'm-reg', name: 'Regular', type: 'milk', price: 0, isRequired: false },
  { id: 'm-oat', name: 'Oat', type: 'milk', price: 5000, isRequired: false },
  { id: 'm-soy', name: 'Soy', type: 'milk', price: 3000, isRequired: false },
  { id: 'a-shot', name: 'Extra Espresso', type: 'addon', price: 5000, isRequired: false },
  { id: 'a-vanilla', name: 'Vanilla Syrup', type: 'addon', price: 5000, isRequired: false },
]

export function MenuCatalogPage() {
  const { products, categories, upsertProduct, removeProduct } = useCafe()
  const [open, setOpen] = useState(false)
  const [draft, setDraft] = useState<Product | null>(null)
  const [deletingProduct, setDeletingProduct] = useState<Product | null>(null)

  function startNew() {
    setDraft({
      id: uid('p'),
      categoryId: categories[0]?.id ?? '',
      name: '',
      description: '',
      price: 0,
      hpp: undefined,
      imageUrl: products[0]?.imageUrl ?? '',
      isAvailable: true,
      options: [],
    })
    setOpen(true)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-[32px] font-semibold tracking-tight">Katalog Menu</h1>
          <p className="text-stone">Kelola daftar produk, deskripsi, harga dasar, dan ketersediaan.</p>
        </div>
        <Button onClick={startNew} className="flex items-center gap-1.5">
          <span className="material-symbols-outlined text-[18px]">add</span>
          <span>Tambah Menu Baru</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
        {products.map((p) => (
          <article key={p.id} className="overflow-hidden rounded-[12px] border border-[#c4c7c7] bg-white shadow-2xs">
            <img src={p.imageUrl} alt="" className="h-40 w-full object-cover" />
            <div className="p-4">
              <div className="mb-2 flex items-start justify-between">
                <div>
                  <p className="font-bold text-black">{p.name}</p>
                  <p className="text-xs text-stone">{categories.find((c) => c.id === p.categoryId)?.name}</p>
                </div>
                <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${
                  p.isAvailable ? 'bg-[#b8cda9]/40 text-sage' : 'bg-[#ba1a1a]/10 text-[#ba1a1a]'
                }`}>
                  {p.isAvailable ? 'Available' : 'Out of Stock'}
                </span>
              </div>
              <p className="mb-4 line-clamp-2 text-xs text-stone">{p.description || 'Tidak ada deskripsi.'}</p>
              
              <div className="flex items-center justify-between border-t border-sand pt-3">
                <span className="font-bold text-black text-sm">{formatRupiah(p.price)}</span>
                <div className="flex gap-2">
                  <button
                    className="flex size-8 items-center justify-center rounded-lg border border-clay/60 bg-white text-stone hover:border-black hover:text-black transition-colors"
                    onClick={() => {
                      setDraft(p)
                      setOpen(true)
                    }}
                    title="Edit Menu"
                  >
                    <span className="material-symbols-outlined text-[16px]">edit</span>
                  </button>
                  <button
                    className="flex size-8 items-center justify-center rounded-lg border border-[#ba1a1a]/30 bg-white text-[#ba1a1a] hover:bg-[#ba1a1a]/10 transition-colors"
                    onClick={() => setDeletingProduct(p)}
                    title="Hapus Menu"
                  >
                    <span className="material-symbols-outlined text-[16px]">delete</span>
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* MODAL SIMPAN/EDIT MENU */}
      {open && draft && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
          <form
            className="w-full max-w-lg rounded-[16px] bg-white p-6 shadow-2xl"
            onSubmit={(e) => {
              e.preventDefault()
              upsertProduct(draft)
              setOpen(false)
            }}
          >
            <div className="flex items-center justify-between border-b border-sand pb-3 mb-4">
              <h2 className="font-bold text-black text-base">{draft.name ? 'Edit Menu' : 'Tambah Menu Baru'}</h2>
              <button type="button" onClick={() => setOpen(false)} className="font-bold text-stone">✕</button>
            </div>

            <div className="space-y-3 text-sm max-h-[65vh] overflow-y-auto pr-1">
              <Field label="Nama Menu">
                <TextInput value={draft.name} onChange={(e) => setDraft({ ...draft, name: e.target.value })} placeholder="Contoh: Kopi Susu Aren" />
              </Field>
              <Field label="Kategori">
                <select
                  className="h-10 w-full rounded-lg border border-clay bg-white px-3 outline-none focus:border-black"
                  value={draft.categoryId}
                  onChange={(e) => setDraft({ ...draft, categoryId: e.target.value })}
                >
                  {categories.map((c) => (
                    <option key={c.id} value={c.id}>{c.name}</option>
                  ))}
                </select>
              </Field>
              <Field label="Harga Dasar (IDR)">
                <TextInput type="number" value={String(draft.price)} onChange={(e) => setDraft({ ...draft, price: Number(e.target.value) })} />
              </Field>
              <Field label="HPP (Opsional)">
                <TextInput
                  type="number"
                  value={draft.hpp != null ? String(draft.hpp) : ''}
                  onChange={(e) => setDraft({ ...draft, hpp: e.target.value ? Number(e.target.value) : undefined })}
                  placeholder="Tidak wajib isi"
                />
                <p className="mt-1 text-[11px] text-stone">Hanya ditampilkan di form, untuk informasi margin.</p>
              </Field>
              <Field label="Deskripsi">
                <TextInput value={draft.description} onChange={(e) => setDraft({ ...draft, description: e.target.value })} placeholder="Penjelasan singkat menu..." />
              </Field>
              <Field label="Status Ketersediaan">
                <select
                  className="h-10 w-full rounded-lg border border-clay bg-white px-3 outline-none focus:border-black"
                  value={draft.isAvailable ? 'yes' : 'no'}
                  onChange={(e) => setDraft({ ...draft, isAvailable: e.target.value === 'yes' })}
                >
                  <option value="yes">Tersedia (In Stock)</option>
                  <option value="no">Habis (Out of Stock)</option>
                </select>
              </Field>

              <div className="rounded-xl border border-sand bg-cream/40 p-3">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-stone">Varian & Addons</p>
                <p className="text-xs text-stone mb-2">Pilih dari daftar existing (dropdown), bisa tambah beberapa.</p>
                <div className="grid grid-cols-1 gap-2">
                  {Array.from(new Set(ALL_VARIANTS.map((v) => v.type))).map((type) => (
                    <div key={type}>
                      <p className="text-[11px] font-bold uppercase text-stone">{type}</p>
                      <div className="flex flex-wrap gap-1.5 mt-1">
                        {ALL_VARIANTS.filter((v) => v.type === type).map((opt) => {
                          const selected = draft.options.some((o) => o.id === opt.id)
                          return (
                            <button
                              key={opt.id}
                              type="button"
                              onClick={() => {
                                setDraft((prev) =>
                                  prev
                                    ? {
                                        ...prev,
                                        options: selected ? prev.options.filter((o) => o.id !== opt.id) : [...prev.options, opt],
                                      }
                                    : prev
                                )
                              }}
                              className={`rounded-full border px-3 py-1 text-xs ${selected ? 'bg-black text-white border-black' : 'bg-white text-stone border-clay/60'}`}
                            >
                              {opt.name}
                              {opt.price > 0 ? ` (+${formatRupiah(opt.price)})` : ''}
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  ))}
                </div>
                {draft.options.length > 0 && (
                  <p className="mt-2 text-xs text-sage">{draft.options.length} varian terpilih</p>
                )}
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-2 border-t border-sand pt-4">
              <Button type="button" variant="outline" onClick={() => setOpen(false)}>Batal</Button>
              <Button type="submit">Simpan Menu</Button>
            </div>
          </form>
        </div>
      )}

      {/* MODAL KONFIRMASI HAPUS */}
      {deletingProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
          <div className="w-full max-w-sm rounded-[16px] bg-white p-6 shadow-2xl">
            <h3 className="font-semibold text-black text-base mb-2">Hapus Menu?</h3>
            <p className="text-sm text-stone mb-6">
              Apakah Anda yakin ingin menghapus menu <strong className="text-black">&quot;{deletingProduct.name}&quot;</strong>?
            </p>
            <div className="flex gap-2 justify-end">
              <Button variant="outline" onClick={() => setDeletingProduct(null)}>Batal</Button>
              <Button
                className="bg-[#ba1a1a] hover:bg-[#ba1a1a]/90 text-white"
                onClick={() => {
                  removeProduct(deletingProduct.id)
                  setDeletingProduct(null)
                }}
              >
                Hapus
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}