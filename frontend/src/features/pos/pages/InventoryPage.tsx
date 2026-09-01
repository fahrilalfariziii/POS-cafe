import { useState } from 'react'
import { useCafe } from '../../../mock/store'
import { uid } from '../../../shared/lib/format'
import type { Ingredient, StockMovementType } from '../../../shared/types'
import { Button, Field, TextInput } from '../../../shared/components/ui'

export function InventoryPage() {
  const { ingredients, movements, upsertIngredient, recordStock } = useCafe()
  const [form, setForm] = useState({ name: '', unit: 'kg', currentStock: '0', minimumStock: '0' })
  const [move, setMove] = useState({ ingredientId: ingredients[0]?.id ?? '', type: 'in' as StockMovementType, quantity: '1', notes: '' })

  function saveIngredient() {
    const item: Ingredient = {
      id: uid('ing'),
      name: form.name,
      unit: form.unit,
      currentStock: Number(form.currentStock),
      minimumStock: Number(form.minimumStock),
      isAvailable: Number(form.currentStock) > 0,
    }
    upsertIngredient(item)
    setForm({ name: '', unit: 'kg', currentStock: '0', minimumStock: '0' })
  }

  return (
    <div>
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h1 className="font-display text-[40px] font-semibold tracking-tight">Inventory</h1>
          <p className="text-stone">Manajemen bahan, stok masuk, dan penyesuaian.</p>
        </div>
      </div>
      <div className="mb-8 overflow-hidden rounded-[8px] bg-white">
        <table className="w-full text-left text-sm">
          <thead className="bg-[#f7f3ea] text-[12px] uppercase tracking-wider text-muted">
            <tr>
              <th className="px-4 py-3">Ingredient</th>
              <th className="px-4 py-3">Current</th>
              <th className="px-4 py-3">Unit</th>
              <th className="px-4 py-3">Minimum</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {ingredients.map((i) => {
              const low = i.currentStock <= i.minimumStock
              const oos = !i.isAvailable || i.currentStock <= 0
              return (
                <tr key={i.id} className="border-t border-sand">
                  <td className="px-4 py-3 font-medium">{i.name}</td>
                  <td className="px-4 py-3">{i.currentStock}</td>
                  <td className="px-4 py-3">{i.unit}</td>
                  <td className="px-4 py-3">{i.minimumStock}</td>
                  <td className="px-4 py-3">
                    {oos ? (
                      <span className="text-[#ba1a1a]">Out of Stock</span>
                    ) : low ? (
                      <span className="text-[#9a6b2f]">Low Stock</span>
                    ) : (
                      <span className="text-sage">OK</span>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-[12px] border border-[#c4c7c7] bg-cream p-5">
          <h2 className="mb-4 text-lg font-semibold">Simpan Bahan</h2>
          <div className="grid gap-3">
            <Field label="Nama">
              <TextInput value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            </Field>
            <div className="grid grid-cols-3 gap-3">
              <Field label="Satuan">
                <TextInput value={form.unit} onChange={(e) => setForm({ ...form, unit: e.target.value })} />
              </Field>
              <Field label="Stok">
                <TextInput value={form.currentStock} onChange={(e) => setForm({ ...form, currentStock: e.target.value })} />
              </Field>
              <Field label="Minimum">
                <TextInput value={form.minimumStock} onChange={(e) => setForm({ ...form, minimumStock: e.target.value })} />
              </Field>
            </div>
            <Button className="w-fit" disabled={!form.name} onClick={saveIngredient}>
              Simpan Bahan
            </Button>
          </div>
        </section>
        <section className="rounded-[12px] border border-[#c4c7c7] bg-cream p-5">
          <h2 className="mb-4 text-lg font-semibold">Receive Stock / Adjustment</h2>
          <div className="grid gap-3">
            <Field label="Bahan">
              <select
                className="h-12 rounded-[8px] border border-clay bg-white px-3"
                value={move.ingredientId}
                onChange={(e) => setMove({ ...move, ingredientId: e.target.value })}
              >
                {ingredients.map((i) => (
                  <option key={i.id} value={i.id}>
                    {i.name}
                  </option>
                ))}
              </select>
            </Field>
            <div className="grid grid-cols-2 gap-3">
              <Field label="Tipe">
                <select
                  className="h-12 rounded-[8px] border border-clay bg-white px-3"
                  value={move.type}
                  onChange={(e) => setMove({ ...move, type: e.target.value as StockMovementType })}
                >
                  <option value="in">Masuk</option>
                  <option value="out">Keluar</option>
                  <option value="adjustment">Adjustment</option>
                  <option value="waste">Waste</option>
                </select>
              </Field>
              <Field label="Qty">
                <TextInput value={move.quantity} onChange={(e) => setMove({ ...move, quantity: e.target.value })} />
              </Field>
            </div>
            <Field label="Catatan">
              <TextInput value={move.notes} onChange={(e) => setMove({ ...move, notes: e.target.value })} />
            </Field>
            <Button
              className="w-fit"
              onClick={() => recordStock(move.ingredientId, move.type, Number(move.quantity), move.notes || 'Manual')}
            >
              Catat Pergerakan
            </Button>
          </div>
          <h3 className="mb-2 mt-6 text-xs font-semibold uppercase tracking-wider text-muted">Stock History</h3>
          <ul className="space-y-2 text-sm">
            {movements.slice(0, 6).map((m) => (
              <li key={m.id} className="flex justify-between text-muted">
                <span>
                  {m.type} · {m.quantity} · {m.notes}
                </span>
                <span>
                  {m.stockBefore} → {m.stockAfter}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}
