import { useCafe } from '../../../mock/store'
import { uid } from '../../../shared/lib/format'
import { Button } from '../../../shared/components/ui'

export function TablesPage() {
  const { tables, upsertTable, removeTable } = useCafe()

  function addTable() {
    const n = String(tables.length + 1).padStart(2, '0')
    upsertTable({
      id: uid('t'),
      tableNumber: n,
      qrToken: `table-${n}`,
      isActive: true,
    })
  }

  return (
    <div>
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h1 className="font-display text-[40px] font-semibold tracking-tight">Floor Plan</h1>
          <p className="text-muted">Kelola meja dan QR code self-order.</p>
        </div>
        <Button onClick={addTable}>Add Table</Button>
      </div>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 xl:grid-cols-4">
        {tables.map((t) => (
          <article key={t.id} className="rounded-[8px] bg-white p-5 ring-1 ring-[#e4e2dd]">
            <div className="mb-3 flex items-center justify-between">
              <p className="font-display text-2xl">Meja {t.tableNumber}</p>
              <button
                className={`text-[11px] uppercase ${t.isActive ? 'text-sage' : 'text-muted'}`}
                onClick={() => upsertTable({ ...t, isActive: !t.isActive })}
              >
                {t.isActive ? 'Active' : 'Inactive'}
              </button>
            </div>
            <div className="mb-3 grid grid-cols-5 gap-1 border border-clay p-3">
              {Array.from({ length: 25 }).map((_, i) => (
                <span key={i} className={`aspect-square ${i % 2 === 0 ? 'bg-ink' : 'bg-white'}`} />
              ))}
            </div>
            <p className="mb-3 break-all text-xs text-muted">/order/{t.qrToken}</p>
            <div className="flex gap-2">
              <a className="text-xs underline" href={`/order/${t.qrToken}`} target="_blank" rel="noreferrer">
                Buka QR
              </a>
              <button className="text-xs text-[#ba1a1a]" onClick={() => removeTable(t.id)}>
                Hapus
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
