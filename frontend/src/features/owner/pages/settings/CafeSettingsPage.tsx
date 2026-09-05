import { useEffect, useRef, useState } from 'react'
import { useCafe } from '../../../../mock/store'
import { Button, Field, TextInput } from '../../../../shared/components/ui'

export function CafeSettingsPage() {
  const { business, updateBusiness } = useCafe()

  // State Form Profile Bisnis
  const [cafeForm, setCafeForm] = useState({
    name: business.name || '',
    tagline: business.tagline || '',
    address: business.address || '',
    phone: business.phone || '',
    email: business.email || '',
    logoUrl: business.logoUrl || '',
  })

  // State Notifikasi & Logo
  const [isSaved, setIsSaved] = useState(false)
  const [logoError, setLogoError] = useState('')
  const fileRef = useRef<HTMLInputElement | null>(null)

  // Sinkronkan form jika business berubah dari luar
  useEffect(() => {
    setCafeForm({
      name: business.name || '',
      tagline: business.tagline || '',
      address: business.address || '',
      phone: business.phone || '',
      email: business.email || '',
      logoUrl: business.logoUrl || '',
    })
  }, [business])

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    setLogoError('')
    const file = e.target.files?.[0]
    if (!file) return
    if (!file.type.startsWith('image/')) {
      setLogoError('File harus berupa gambar (png, jpg, webp).')
      return
    }
    if (file.size > 2 * 1024 * 1024) {
      setLogoError('Ukuran gambar maksimal 2MB.')
      return
    }
    const reader = new FileReader()
    reader.onload = () => {
      const result = reader.result as string
      setCafeForm((prev) => ({ ...prev, logoUrl: result }))
    }
    reader.readAsDataURL(file)
    // reset input agar bisa pilih file yang sama lagi
    e.target.value = ''
  }

  function handleRemoveLogo() {
    setCafeForm((prev) => ({ ...prev, logoUrl: '' }))
    setLogoError('')
    if (fileRef.current) fileRef.current.value = ''
  }

  function handleSaveCafeProfile(e: React.FormEvent) {
    e.preventDefault()
    updateBusiness({
      name: cafeForm.name,
      tagline: cafeForm.tagline,
      address: cafeForm.address,
      phone: cafeForm.phone,
      email: cafeForm.email,
      logoUrl: cafeForm.logoUrl || undefined,
    })
    setIsSaved(true)
    setTimeout(() => setIsSaved(false), 3000)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-[32px] font-semibold tracking-tight">Profil Bisnis</h1>
        <p className="text-stone">Kelola identitas bisnis yang ditampilkan pada cetakan resi, QR Code, dan header aplikasi.</p>
      </div>

      <form onSubmit={handleSaveCafeProfile} className="max-w-2xl rounded-[16px] border border-[#c4c7c7] bg-white p-6 shadow-2xs space-y-5">
        <div className="border-b border-sand pb-3">
          <h2 className="font-bold text-black text-base">Identitas Bisnis</h2>
          <p className="text-xs text-stone">Ubah rincian informasi bisnis Anda.</p>
        </div>

        {isSaved && (
          <div className="flex items-center gap-2 rounded-lg bg-[#b8cda9]/30 p-3 text-xs font-semibold text-sage border border-sage/40">
            <span className="material-symbols-outlined text-[18px]">check_circle</span>
            <span>Profil Bisnis berhasil diperbarui!</span>
          </div>
        )}

        {/* LOGO BISNIS */}
        <div className="rounded-xl border border-sand bg-cream/40 p-4">
          <p className="text-[12px] font-medium tracking-[0.14px] text-soil">Logo Bisnis</p>
          <p className="mt-1 text-xs text-stone">Upload foto untuk logo bisnis. Maks 2MB, format png/jpg/webp. In-memory (reset saat refresh, belum persist backend).</p>

          <div className="mt-4 flex items-center gap-4">
            <div className="flex size-24 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-clay bg-white shadow-xs">
              {cafeForm.logoUrl ? (
                <img src={cafeForm.logoUrl} alt="Logo preview" className="h-full w-full object-cover" />
              ) : (
                <span className="material-symbols-outlined text-[36px] text-clay">storefront</span>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              <input ref={fileRef} type="file" accept="image/png,image/jpeg,image/webp,image/*" className="hidden" onChange={handleFileChange} />
              <Button type="button" variant="outline" onClick={() => fileRef.current?.click()} className="gap-1.5">
                <span className="material-symbols-outlined text-[18px]">{cafeForm.logoUrl ? 'sync' : 'upload'}</span>
                <span>{cafeForm.logoUrl ? 'Ganti Foto' : 'Upload Foto'}</span>
              </Button>
              {cafeForm.logoUrl && (
                <Button type="button" variant="outline" onClick={handleRemoveLogo} className="gap-1.5 text-[#ba1a1a] border-[#ba1a1a]/30 hover:bg-[#ba1a1a]/10">
                  <span className="material-symbols-outlined text-[18px]">delete</span>
                  <span>Hapus Foto</span>
                </Button>
              )}
            </div>
          </div>

          {logoError && <p className="mt-2 text-xs font-medium text-[#ba1a1a]">{logoError}</p>}
        </div>

        <div className="space-y-4 text-sm">
          <Field label="Nama Bisnis">
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

            <Field label="Email Kontak Bisnis">
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
