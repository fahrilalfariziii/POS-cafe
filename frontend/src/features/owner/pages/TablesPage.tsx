import { useState } from 'react'
import { useCafe } from '../../../mock/store'
import { uid } from '../../../shared/lib/format'
import { Button, Field, TextInput } from '../../../shared/components/ui'
import type { CafeTable } from '../../../shared/types'

// Tipe ekstensi lokal untuk lokasi meja — selaras dengan CafeTable.area?: string di shared/types
type TableArea = 'Indoor' | 'Outdoor' | 'Lantai Atas' | 'Lantai Bawah'

type TableWithArea = CafeTable & { area?: TableArea }

export function TablesPage() {
  const { tables, business, upsertTable, removeTable } = useCafe()

  // State Modal Tambah Meja
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [tableNumberInput, setTableNumberInput] = useState('')
  const [areaInput, setAreaInput] = useState<TableArea>('Indoor')

  // State Modal Konfirmasi Toggle Status
  const [toggleTarget, setToggleTarget] = useState<CafeTable | null>(null)

  // State Modal Preview & Print QR Code
  const [selectedQRTable, setSelectedQRTable] = useState<CafeTable | null>(null)

  // State Modal Konfirmasi Hapus
  const [deletingTable, setDeletingTable] = useState<CafeTable | null>(null)

  // Buka Modal Tambah Meja dengan nomor meja otomatis
  function handleOpenAddModal() {
    const nextNum = String(tables.length + 1).padStart(2, '0')
    setTableNumberInput(nextNum)
    setAreaInput('Indoor')
    setIsAddModalOpen(true)
  }

  // Simpan Meja Baru
  function handleSaveNewTable() {
    if (!tableNumberInput.trim()) return

    const newTable: TableWithArea = {
      id: uid('t'),
      tableNumber: tableNumberInput.trim(),
      qrToken: `table-${tableNumberInput.trim().toLowerCase()}`,
      isActive: true,
      area: areaInput,
    }

    upsertTable(newTable)
    setIsAddModalOpen(false)
  }

  // Konfirmasi Perubahan Status Toggle
  function handleConfirmToggleStatus() {
    if (!toggleTarget) return

    upsertTable({
      ...toggleTarget,
      isActive: !toggleTarget.isActive,
    })

    setToggleTarget(null)
  }

  // Fungsi Cetak QR Code
  function handlePrintQR() {
    window.print()
  }

  // Hitung ringkasan statistik meja
  const totalTables = tables.length
  const activeTables = tables.filter((t) => t.isActive).length
  const inactiveTables = totalTables - activeTables

  return (
    <div className="space-y-6 pb-12">
      {/* CSS Khusus untuk Tampilan Print / Cetak QR Code */}
      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #printable-qr-card, #printable-qr-card * {
            visibility: visible;
          }
          #printable-qr-card {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
          }
        }
      `}</style>

      {/* Header Utama & Ringkasan */}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-[32px] font-semibold tracking-tight">Floor Plan & Meja</h1>
          <p className="text-stone">Kelola tata letak meja dan QR Code self-order pelanggan.</p>
        </div>

        <Button onClick={handleOpenAddModal} className="flex items-center gap-1.5">
          <span className="material-symbols-outlined text-[18px]">add</span>
          <span>Tambah Meja</span>
        </Button>
      </div>

      {/* Ringkasan Statistik Meja */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <article className="rounded-[12px] border border-[#c4c7c7] bg-cream p-5">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-stone">Total Meja</p>
          <p className="mt-2 text-[28px] font-bold text-black">{totalTables} Meja</p>
        </article>
        <article className="rounded-[12px] border border-[#c4c7c7] bg-cream p-5">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-stone">Meja Aktif</p>
          <p className="mt-2 text-[28px] font-bold text-sage">{activeTables} Aktif</p>
        </article>
        <article className="rounded-[12px] border border-[#c4c7c7] bg-cream p-5">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-stone">Meja Inaktif</p>
          <p className="mt-2 text-[28px] font-bold text-[#ba1a1a]">{inactiveTables} Inaktif</p>
        </article>
      </div>

      {/* Grid Kartu Meja */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {tables.map((t) => (
          <article
            key={t.id}
            className="flex flex-col justify-between rounded-[16px] border border-[#c4c7c7] bg-white p-5 shadow-2xs transition-all hover:shadow-md"
          >
            <div>
              {/* Header Kartu: Nomor Meja & Toggle Status */}
              <div className="mb-3 flex items-center justify-between border-b border-sand pb-3">
                <div>
                  <h3 className="font-display text-xl font-bold text-black">Meja {t.tableNumber}</h3>
                  <span className="rounded-md bg-sand px-2 py-0.5 text-[10px] font-bold text-stone">
                    {t.area || 'Indoor'}
                  </span>
                </div>

                {/* Custom iOS Toggle Switch */}
                <button
                  type="button"
                  onClick={() => setToggleTarget(t)}
                  className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                    t.isActive ? 'bg-sage' : 'bg-clay/50'
                  }`}
                  title={t.isActive ? 'Klik untuk nonaktifkan' : 'Klik untuk aktifkan'}
                >
                  <span
                    className={`pointer-events-none inline-block size-5 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${
                      t.isActive ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              {/* Visual Mini Grid Matrix */}
              <div className="mb-4 flex items-center justify-center rounded-lg border border-sand bg-cream/40 p-4">
                <div className="grid grid-cols-5 gap-1">
                  {Array.from({ length: 25 }).map((_, i) => (
                    <span
                      key={i}
                      className={`size-2.5 rounded-[1px] ${
                        i % 2 === 0 ? (t.isActive ? 'bg-black' : 'bg-stone/40') : 'bg-white'
                      }`}
                    />
                  ))}
                </div>
              </div>
              {/* <p className="mb-4 truncate text-center text-xs text-stone">/order/{t.qrToken}</p> */}
            </div>

            {/* Bottom Actions */}
            <div className="flex items-center gap-2 border-t border-sand pt-3">
              <Button
                variant="outline"
                // size="sm"
                className="flex-1 text-xs"
                onClick={() => setSelectedQRTable(t)}
              >
                <span className="material-symbols-outlined text-[16px]">qr_code_2</span>
                <span>Buka QR</span>
              </Button>
              <button
                className="flex size-9 items-center justify-center rounded-lg border border-[#ba1a1a]/30 bg-white text-[#ba1a1a] hover:bg-[#ba1a1a]/10 transition-colors"
                onClick={() => setDeletingTable(t)}
                title="Hapus Meja"
              >
                <span className="material-symbols-outlined text-[16px]">delete</span>
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* MODAL 1: TAMBAH MEJA BARU */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
          <div className="w-full max-w-md rounded-[16px] bg-white p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-sand pb-3">
              <h3 className="font-bold text-black text-base">Tambah Meja Baru</h3>
              <button onClick={() => setIsAddModalOpen(false)} className="font-bold text-stone">
                ✕
              </button>
            </div>

            <div className="space-y-4">
              <Field label="Nomor Meja">
                <TextInput
                  value={tableNumberInput}
                  onChange={(e) => setTableNumberInput(e.target.value)}
                  placeholder="Contoh: 01 / 12A"
                  autoFocus
                />
              </Field>

              <Field label="Area / Lokasi Meja">
                <select
                  value={areaInput}
                  onChange={(e) => setAreaInput(e.target.value as TableArea)}
                  className="h-10 w-full rounded-lg border border-clay bg-white px-3 text-sm font-semibold outline-none focus:border-black"
                >
                  <option value="Indoor">Indoor (Dalam Ruangan)</option>
                  <option value="Outdoor">Outdoor (Area Luar)</option>
                  <option value="Lantai Atas">Lantai Atas</option>
                  {/* <option value="Lantai Bawah">Lantai Bawah (Utama)</option> */}
                </select>
              </Field>
            </div>

            <div className="mt-6 flex justify-end gap-2 border-t border-sand pt-4">
              <Button variant="outline" className="flex-1" onClick={() => setIsAddModalOpen(false)}>
                Batal
              </Button>
              <Button className="flex-1" disabled={!tableNumberInput.trim()} onClick={handleSaveNewTable}>
                Simpan Meja
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: KONFIRMASI TOGGLE STATUS */}
      {toggleTarget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
          <div className="w-full max-w-sm rounded-[16px] bg-white p-6 shadow-2xl">
            <h3 className="font-semibold text-black text-base mb-2">Ubah Status Meja?</h3>
            <p className="text-sm text-stone mb-6">
              Apakah Anda yakin ingin mengubah status <strong>Meja {toggleTarget.tableNumber}</strong> menjadi{' '}
              <strong className={toggleTarget.isActive ? 'text-[#ba1a1a]' : 'text-sage'}>
                {toggleTarget.isActive ? 'Inaktif' : 'Aktif'}
              </strong>
              ?
            </p>
            <div className="flex gap-2 justify-end">
              <Button variant="outline" onClick={() => setToggleTarget(null)}>
                Batal
              </Button>
              <Button onClick={handleConfirmToggleStatus}>Ya, Ubah Status</Button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 3: PREVIEW & PRINT QR CODE UNIK */}
      {selectedQRTable && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
          <div className="w-full max-w-md rounded-[20px] bg-white p-6 shadow-2xl flex flex-col items-center">
            <div className="w-full flex justify-between items-center border-b border-sand pb-3 mb-4">
              <span className="font-bold text-black text-sm uppercase tracking-wider">Pratinjau QR Code</span>
              <button onClick={() => setSelectedQRTable(null)} className="font-bold text-stone">✕</button>
            </div>

            {/* KARTU CETAK QR CODE UNIK */}
            <div
              id="printable-qr-card"
              className="w-full max-w-xs rounded-2xl border-2 border-black bg-cream p-6 shadow-md text-center space-y-4"
            >
              {/* Branding Header */}
              <div className="border-b-2 border-black pb-3">
                <div className="mx-auto mb-1 flex size-10 items-center justify-center rounded-full bg-black text-white">
                  <span className="material-symbols-outlined text-[20px]">local_cafe</span>
                </div>
                <h2 className="font-display text-xl font-bold text-black uppercase tracking-tight">
                  {business.name}
                </h2>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-stone">
                  {selectedQRTable.area || 'Indoor'}
                </p>
              </div>

              {/* QR Code SVG Dummy Unique Graphic */}
              <div className="mx-auto flex size-44 items-center justify-center rounded-xl bg-white p-3 border-2 border-black shadow-xs">
                <svg className="size-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="100" height="100" fill="white" />
                  {/* Position Marker Left Top */}
                  <rect x="5" y="5" width="25" height="25" fill="black" />
                  <rect x="9" y="9" width="17" height="17" fill="white" />
                  <rect x="13" y="13" width="9" height="9" fill="black" />
                  {/* Position Marker Right Top */}
                  <rect x="70" y="5" width="25" height="25" fill="black" />
                  <rect x="74" y="9" width="17" height="17" fill="white" />
                  <rect x="78" y="13" width="9" height="9" fill="black" />
                  {/* Position Marker Left Bottom */}
                  <rect x="5" y="70" width="25" height="25" fill="black" />
                  <rect x="9" y="74" width="17" height="17" fill="white" />
                  <rect x="13" y="78" width="9" height="9" fill="black" />
                  {/* Matrix Random Pattern */}
                  <rect x="35" y="10" width="10" height="10" fill="black" />
                  <rect x="50" y="15" width="15" height="10" fill="black" />
                  <rect x="35" y="35" width="30" height="30" fill="black" />
                  <rect x="40" y="40" width="20" height="20" fill="white" />
                  <rect x="45" y="45" width="10" height="10" fill="black" />
                  <rect x="70" y="40" width="15" height="15" fill="black" />
                  <rect x="40" y="70" width="25" height="10" fill="black" />
                  <rect x="70" y="75" width="20" height="15" fill="black" />
                </svg>
              </div>

              {/* Nomor Meja & Instruksi */}
              <div>
                <span className="inline-block rounded-lg bg-black px-4 py-1 text-xs font-bold text-white uppercase tracking-wider mb-2">
                  MEJA {selectedQRTable.tableNumber}
                </span>
                <p className="text-xs font-bold text-black uppercase tracking-widest flex items-center justify-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">qr_code_scanner</span>
                  <span>SCAN ME TO ORDER</span>
                </p>
                <p className="text-[9px] text-stone mt-1">Pesan & bayar langsung dari meja Anda</p>
              </div>
            </div>

            {/* Tombol Cetak & Tutup */}
            <div className="mt-6 flex w-full gap-2">
              <Button variant="outline" className="flex-1" onClick={() => setSelectedQRTable(null)}>
                Batal
              </Button>
              <Button className="flex-1 flex items-center justify-center gap-2" onClick={handlePrintQR}>
                <span className="material-symbols-outlined text-[18px]">print</span>
                <span>Cetak QR</span>
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 4: KONFIRMASI HAPUS MEJA */}
      {deletingTable && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
          <div className="w-full max-w-sm rounded-[16px] bg-white p-6 shadow-2xl">
            <h3 className="font-semibold text-black text-base mb-2">Hapus Meja?</h3>
            <p className="text-sm text-stone mb-6">
              Apakah Anda yakin ingin menghapus <strong>Meja {deletingTable.tableNumber}</strong>?
            </p>
            <div className="flex gap-2 justify-end">
              <Button variant="outline" onClick={() => setDeletingTable(null)}>
                Batal
              </Button>
              <Button
                className="bg-[#ba1a1a] hover:bg-[#ba1a1a]/90 text-white"
                onClick={() => {
                  removeTable(deletingTable.id)
                  setDeletingTable(null)
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