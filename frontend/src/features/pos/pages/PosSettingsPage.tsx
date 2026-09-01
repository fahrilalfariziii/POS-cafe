import { useCafe } from '../../../mock/store'
import { Button } from '../../../shared/components/ui'

export function PosSettingsPage() {
  const { session, connection, setConnection, pendingSyncCount, syncNow, orders } = useCafe()
  const pending = orders.filter((o) => o.syncStatus !== 'synced')

  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="font-display text-[40px] font-semibold tracking-tight">Settings</h1>
      <p className="mb-8 text-stone">Printer POS, sinkronisasi, dan akun.</p>
      <section className="mb-8 rounded-[12px] border border-[#c4c7c7] bg-cream p-6">
        <h2 className="mb-4 text-lg font-semibold">Konfigurasi Printer</h2>
        <p className="mb-1 text-xs uppercase tracking-wider text-muted">Terminal 01</p>
        <p className="mb-4 text-sm">Epson TM-m30II (USB) · Connected · Paper OK</p>
        <div className="flex flex-wrap gap-2">
          <Button variant="cream">Scan for Devices</Button>
          <Button variant="outline">Test Connection</Button>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <label className="text-xs uppercase tracking-wider text-muted">
            IP Address
            <input className="mt-1 h-10 w-full rounded-lg border border-clay px-3 text-sm" defaultValue="192.168.1.50" />
          </label>
          <label className="text-xs uppercase tracking-wider text-muted">
            Port
            <input className="mt-1 h-10 w-full rounded-lg border border-clay px-3 text-sm" defaultValue="9100" />
          </label>
        </div>
        <p className="mt-3 text-xs text-muted">Gagal cetak tidak membatalkan transaksi yang sudah tersimpan.</p>
      </section>
      <section className="mb-8 rounded-[12px] border border-[#c4c7c7] bg-cream p-6">
        <h2 className="mb-4 text-lg font-semibold">Sinkronisasi</h2>
        <div className="mb-4 flex gap-2">
          {(['online', 'offline'] as const).map((s) => (
            <button
              key={s}
              onClick={() => setConnection(s)}
              className={`rounded-lg px-3 py-1 text-xs uppercase ${connection === s ? 'bg-black text-white' : 'bg-sand'}`}
            >
              {s}
            </button>
          ))}
        </div>
        <p className="mb-3 text-sm">Pending Sync: {pendingSyncCount}</p>
        <Button onClick={syncNow}>Sync Now</Button>
        <ul className="mt-4 space-y-2 text-sm">
          {pending.map((o) => (
            <li key={o.id} className="flex justify-between">
              <span>
                {o.orderNumber} · {o.customerName}
              </span>
              <span className="uppercase text-muted">{o.syncStatus}</span>
            </li>
          ))}
        </ul>
      </section>
      <section className="rounded-[12px] border border-[#c4c7c7] bg-cream p-6">
        <h2 className="mb-2 text-lg font-semibold">Akun</h2>
        <p>{session?.user.name}</p>
        <p className="text-sm text-muted">
          {session?.user.email} · {session?.user.role}
        </p>
      </section>
    </div>
  )
}
