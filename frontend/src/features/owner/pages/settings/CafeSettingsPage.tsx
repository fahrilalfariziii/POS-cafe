import { useState } from 'react'
import { useCafe } from '../../../../mock/store'
import { Button, Field, TextInput } from '../../../../shared/components/ui'

export function CafeSettingsPage() {
  const { business, updateBusiness } = useCafe()

  // State Form Profile Kafe
  const [cafeForm, setCafeForm] = useState({
    name: business.name || '',
    tagline: business.tagline || '',
    address: business.address || '',
    phone: business.phone || '',
    email: business.email || '',
  })

  // State Notifikasi Berhasil Simpan
  const [isSaved, setIsSaved] = useState(false)

  function handleSaveCafeProfile(e: React.FormEvent) {
    e.preventDefault()
    updateBusiness(cafeForm)
    setIsSaved(true)
    setTimeout(() => setIsSaved(false), 3000)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-[32px] font-semibold tracking-tight">Profil Kafe</h1>
        <p className="text-stone">Kelola identitas kafe yang ditampilkan pada cetakan resi dan QR Code.</p>
      </div>

      <form onSubmit={handleSaveCafeProfile} className="max-w-2xl rounded-[16px] border border-[#c4c7c7] bg-white p-6 shadow-2xs space-y-5">
        <div className="border-b border-sand pb-3">
          <h2 className="font-bold text-black text-base">Identitas Kafe</h2>
          <p className="text-xs text-stone">Ubah rincian informasi bisnis kafe Anda.</p>
        </div>

        {isSaved && (
          <div className="flex items-center gap-2 rounded-lg bg-[#b8cda9]/30 p-3 text-xs font-semibold text-sage border border-sage/40">
            <span className="material-symbols-outlined text-[18px]">check_circle</span>
            <span>Profil Kafe berhasil diperbarui!</span>
          </div>
        )}

        <div className="space-y-4 text-sm">
          <Field label="Nama Kafe">
            <TextInput
              value={cafeForm.name}
              onChange={(e) => setCafeForm({ ...cafeForm, name: e.target.value })}
              placeholder="Contoh: Kopi Studio"
              required
            />
          </Field>

          <Field label="Tagline / Slogan">
            <TextInput
              value={cafeForm.tagline}
              onChange={(e) => setCafeForm({ ...cafeForm, tagline: e.target.value })}
              placeholder="Contoh: Rasakan Kopi Berkualitas Setiap Hari"
            />
          </Field>

          <Field label="Alamat Lengkap">
            <TextInput
              value={cafeForm.address}
              onChange={(e) => setCafeForm({ ...cafeForm, address: e.target.value })}
              placeholder="Contoh: Jl. Diponegoro No. 123, Garut"
            />
          </Field>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Nomor Telepon / WhatsApp">
              <TextInput
                value={cafeForm.phone}
                onChange={(e) => setCafeForm({ ...cafeForm, phone: e.target.value })}
                placeholder="Contoh: 081234567890"
              />
            </Field>

            <Field label="Email Kontak Kafe">
              <TextInput
                type="email"
                value={cafeForm.email}
                onChange={(e) => setCafeForm({ ...cafeForm, email: e.target.value })}
                placeholder="Contoh: info@kopistudio.com"
              />
            </Field>
          </div>
        </div>

        <div className="flex justify-end border-t border-sand pt-4">
          <Button type="submit" className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">save</span>
            <span>Simpan Perubahan</span>
          </Button>
        </div>
      </form>
    </div>
  )
}