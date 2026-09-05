import { useState } from 'react'
import { useCafe } from '../../../mock/store'
import { Button, Field, TextInput } from '../../../shared/components/ui'
import { formatRupiah } from '../../../shared/lib/format'

type SettingCategory = 'device' | 'cash' | 'account'
type PrinterConnectionType = 'bluetooth' | 'usb' | 'lan'

export function PosSettingsPage() {
  const { session, logout, business, updateBusiness, orders } = useCafe()
  const [activeCategory, setActiveCategory] = useState<SettingCategory>('device')

  const [printerType, setPrinterType] = useState<PrinterConnectionType>('bluetooth')
  const [printerStatus, setPrinterStatus] = useState<string>('Disconnected')
  const [ipAddress, setIpAddress] = useState('192.168.1.200')
  const [port, setPort] = useState('9100')
  const [openingCashInput, setOpeningCashInput] = useState(String(business.openingCash ?? 0))
  const [cashSaved, setCashSaved] = useState(false)

  const cashPaidTotal = orders.filter((o) => o.paymentStatus === 'paid' && o.paymentMethod === 'cash').reduce((s, o) => s + o.total, 0)

  function handleTestPrint() {
    setPrinterStatus('Testing Connection...')
    setTimeout(() => {
      setPrinterStatus('Connected')
      alert('Tes cetak berhasil dikirim ke printer POS!')
    }, 1000)
  }

  function handleSaveCash() {
    const val = Math.max(0, Number(openingCashInput) || 0)
    updateBusiness({ openingCash: val })
    setCashSaved(true)
    setTimeout(() => setCashSaved(false), 2500)
  }

  return (
    <div>
      <h1 className="font-display text-[40px] font-semibold tracking-tight">POS Settings</h1>
      <p className="mb-6 text-stone">Atur perangkat, modal kas, dan sesi pengguna.</p>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[240px_1fr]">
        <aside className="flex flex-col gap-2 rounded-[12px] border border-[#c4c7c7] bg-white p-3 h-fit">
          <button
            onClick={() => setActiveCategory('device')}
            className={`flex items-center gap-3 rounded-[10px] px-4 py-3 text-sm font-semibold transition-all ${
              activeCategory === 'device' ? 'bg-black text-white shadow-xs' : 'text-stone hover:bg-sand hover:text-black'
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">devices</span>
            <span>Perangkat</span>
          </button>
          <button
            onClick={() => setActiveCategory('cash')}
            className={`flex items-center gap-3 rounded-[10px] px-4 py-3 text-sm font-semibold transition-all ${
              activeCategory === 'cash' ? 'bg-black text-white shadow-xs' : 'text-stone hover:bg-sand hover:text-black'
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">payments</span>
            <span>Modal Kas</span>
          </button>
          <button
            onClick={() => setActiveCategory('account')}
            className={`flex items-center gap-3 rounded-[10px] px-4 py-3 text-sm font-semibold transition-all ${
              activeCategory === 'account' ? 'bg-black text-white shadow-xs' : 'text-stone hover:bg-sand hover:text-black'
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">account_circle</span>
            <span>Akun & Sesi</span>
          </button>
        </aside>

        <main className="rounded-[12px] border border-[#c4c7c7] bg-white p-6 shadow-xs">
          {activeCategory === 'device' && (
            <div className="space-y-6">
              {/* Sound toggle di atas thermal printer */}
              <div className="flex items-center justify-between rounded-xl border border-sand bg-cream p-4">
                <div>
                  <p className="text-sm font-semibold text-black">Notifikasi Suara Pesanan Masuk</p>
                  <p className="text-xs text-stone">Bunyikan saat ada pesanan self-order baru.</p>
                </div>
                <button
                  type="button"
                  onClick={() => updateBusiness({ soundEnabled: !business.soundEnabled })}
                  className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors ${business.soundEnabled ? 'bg-sage' : 'bg-clay/50'}`}
                >
                  <span className={`inline-block size-5 transform rounded-full bg-white shadow transition ${business.soundEnabled ? 'translate-x-5' : 'translate-x-0'}`} />
                </button>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-black">Konfigurasi Thermal Printer</h2>
                <p className="text-xs text-stone mt-1">Pilih jenis koneksi printer nota fisik yang terhubung dengan perangkat kasir.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setPrinterType('bluetooth')}
                  className={`flex flex-col items-center justify-center rounded-[12px] border p-4 text-center transition-all ${
                    printerType === 'bluetooth' ? 'border-black bg-cream font-bold text-black ring-1 ring-black' : 'border-clay/60 bg-white text-stone hover:border-black'
                  }`}
                >
                  <span className="material-symbols-outlined mb-2 text-2xl">bluetooth</span>
                  <span className="text-xs uppercase tracking-wider">Web Bluetooth</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPrinterType('usb')}
                  className={`flex flex-col items-center justify-center rounded-[12px] border p-4 text-center transition-all ${
                    printerType === 'usb' ? 'border-black bg-cream font-bold text-black ring-1 ring-black' : 'border-clay/60 bg-white text-stone hover:border-black'
                  }`}
                >
                  <span className="material-symbols-outlined mb-2 text-2xl">usb</span>
                  <span className="text-xs uppercase tracking-wider">Direct USB</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPrinterType('lan')}
                  className={`flex flex-col items-center justify-center rounded-[12px] border p-4 text-center transition-all ${
                    printerType === 'lan' ? 'border-black bg-cream font-bold text-black ring-1 ring-black' : 'border-clay/60 bg-white text-stone hover:border-black'
                  }`}
                >
                  <span className="material-symbols-outlined mb-2 text-2xl">lan</span>
                  <span className="text-xs uppercase tracking-wider">Network LAN</span>
                </button>
              </div>

              <div className="rounded-[12px] border border-sand bg-cream p-5 space-y-4">
                {printerType === 'bluetooth' && (
                  <div>
                    <h3 className="font-semibold text-sm mb-1">Web Bluetooth Printer</h3>
                    <p className="text-xs text-stone mb-4">Hubungkan langsung printer struk Bluetooth via Web Bluetooth API browser.</p>
                    <Button onClick={handleTestPrint}>
                      <span>Pindai Device Bluetooth</span>
                    </Button>
                  </div>
                )}
                {printerType === 'usb' && (
                  <div>
                    <h3 className="font-semibold text-sm mb-1">Direct USB Printer</h3>
                    <p className="text-xs text-stone mb-4">Menggunakan koneksi fisik kabel USB (WebUSB / POS Thermal Driver).</p>
                    <Button onClick={handleTestPrint}>
                      <span>Hubungkan Printer USB</span>
                    </Button>
                  </div>
                )}
                {printerType === 'lan' && (
                  <div className="space-y-3">
                    <h3 className="font-semibold text-sm mb-1">Network LAN Printer</h3>
                    <p className="text-xs text-stone">Cetak nota melalui jaringan Wi-Fi/LAN lokal menggunakan IP Address.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                      <Field label="IP Address Printer">
                        <TextInput value={ipAddress} onChange={(e) => setIpAddress(e.target.value)} placeholder="192.168.1.200" />
                      </Field>
                      <Field label="Port">
                        <TextInput value={port} onChange={(e) => setPort(e.target.value)} placeholder="9100" />
                      </Field>
                    </div>
                    <Button onClick={handleTestPrint} className="mt-2">
                      Tes Koneksi IP
                    </Button>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between rounded-lg border border-sand bg-white p-3 text-xs">
                <span className="text-stone">Status Printer:</span>
                <span className={`font-bold ${printerStatus === 'Connected' ? 'text-sage' : 'text-[#ba1a1a]'}`}>{printerStatus}</span>
              </div>
            </div>
          )}

          {activeCategory === 'cash' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-black">Modal Kas</h2>
                <p className="text-xs text-stone mt-1">Atur uang awal (opening cash) saat shift untuk perhitungan pendapatan cash. Belum hitung expectedCash — nanti backend.</p>
              </div>

              {cashSaved && (
                <div className="rounded-lg border border-sage/40 bg-[#b8cda9]/30 px-3 py-2 text-xs font-semibold text-sage">Modal kas disimpan!</div>
              )}

              <Field label="Uang Awal Opening Cash (IDR)">
                <TextInput
                  type="number"
                  value={openingCashInput}
                  onChange={(e) => setOpeningCashInput(e.target.value)}
                  placeholder="0"
                />
              </Field>
              <p className="text-xs text-stone">Pendapatan cash tercatat: <span className="font-bold text-black">{formatRupiah(cashPaidTotal)}</span> (mock, belum dikurangi opening).</p>
              <p className="text-[11px] text-stone">Nilai disimpan di `business.openingCash` (in-memory). Reset saat refresh — persist nanti backend.</p>

              <Button onClick={handleSaveCash} className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">save</span>
                <span>Simpan Modal Kas</span>
              </Button>
            </div>
          )}

          {activeCategory === 'account' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-black">Profil Pengguna</h2>
                <p className="text-xs text-stone mt-1">Informasi sesi kasir yang sedang aktif saat ini.</p>
              </div>

              <div className="flex items-start justify-between rounded-[12px] border border-sand bg-cream p-5">
                <div className="flex items-center gap-4">
                  <div className="flex size-14 items-center justify-center rounded-full bg-black font-bold text-xl text-white">
                    {session?.user.name.charAt(0) || 'K'}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-black">{session?.user.name || 'Kasir Cafe'}</h3>
                    <p className="text-xs text-stone">{session?.user.email || 'kasir@cafe.com'}</p>
                    <span className="mt-2 inline-block rounded-full bg-sand px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-black">
                      Role: {session?.user.role || 'Staff'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 border-t border-sand pt-4 text-xs">
                <div className="flex justify-between py-1">
                  <span className="text-stone">Nama Cafe:</span>
                  <span className="font-semibold text-black">{business.name}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-stone">Alamat:</span>
                  <span className="font-semibold text-black">{business.address}</span>
                </div>
              </div>

              <div className="border-t border-sand pt-6">
                <button
                  type="button"
                  onClick={logout}
                  className="flex w-full items-center justify-center gap-2 rounded-[10px] bg-[#ba1a1a] py-3 text-sm font-semibold text-white hover:bg-[#ba1a1a]/90 transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px]">logout</span>
                  <span>Keluar / Sign Out</span>
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
