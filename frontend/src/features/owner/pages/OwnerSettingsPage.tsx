import { useState } from 'react'
import { useCafe } from '../../../mock/store'
import { uid } from '../../../shared/lib/format'
import type { StaffUser, UserRole } from '../../../shared/types'
import { Button, Field, TextInput } from '../../../shared/components/ui'

export function OwnerSettingsPage() {
  const { business, updateBusiness, staff, upsertStaff } = useCafe()
  const [draft, setDraft] = useState(business)
  const [user, setUser] = useState({ name: '', email: '', role: 'kasir' as UserRole })

  return (
    <div className="max-w-3xl">
      <h1 className="font-display text-[40px] font-semibold tracking-tight">Settings</h1>
      <p className="mb-8 text-muted">Profil coffee shop dan manajemen staff.</p>
      <section className="mb-8 rounded-[8px] bg-white p-6 ring-1 ring-[#e4e2dd]">
        <h2 className="mb-4 text-lg font-semibold">Profil Cafe</h2>
        <div className="grid gap-3">
          <Field label="Nama Bisnis">
            <TextInput value={draft.name} onChange={(e) => setDraft({ ...draft, name: e.target.value })} />
          </Field>
          <Field label="Tagline">
            <TextInput value={draft.tagline} onChange={(e) => setDraft({ ...draft, tagline: e.target.value })} />
          </Field>
          <Field label="Alamat">
            <TextInput value={draft.address} onChange={(e) => setDraft({ ...draft, address: e.target.value })} />
          </Field>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Telepon">
              <TextInput value={draft.phone} onChange={(e) => setDraft({ ...draft, phone: e.target.value })} />
            </Field>
            <Field label="Email">
              <TextInput value={draft.email} onChange={(e) => setDraft({ ...draft, email: e.target.value })} />
            </Field>
          </div>
          <Button className="w-fit" onClick={() => updateBusiness(draft)}>
            Simpan Profil
          </Button>
        </div>
      </section>
      <section className="rounded-[8px] bg-white p-6 ring-1 ring-[#e4e2dd]">
        <h2 className="mb-4 text-lg font-semibold">Staff</h2>
        <ul className="mb-6 divide-y divide-sand">
          {staff.map((s) => (
            <li key={s.id} className="flex items-center justify-between py-3">
              <div>
                <p className="font-medium">{s.name}</p>
                <p className="text-xs text-muted">
                  {s.email} · {s.role}
                </p>
              </div>
              <button className="text-xs" onClick={() => upsertStaff({ ...s, active: !s.active })}>
                {s.active ? 'Nonaktifkan' : 'Aktifkan'}
              </button>
            </li>
          ))}
        </ul>
        <div className="grid grid-cols-3 gap-3">
          <Field label="Nama">
            <TextInput value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} />
          </Field>
          <Field label="Email">
            <TextInput value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
          </Field>
          <Field label="Role">
            <select
              className="h-12 rounded-[8px] border border-clay bg-white px-3"
              value={user.role}
              onChange={(e) => setUser({ ...user, role: e.target.value as UserRole })}
            >
              <option value="owner">Owner</option>
              <option value="kasir">Kasir</option>
              <option value="barista">Barista</option>
            </select>
          </Field>
        </div>
        <Button
          className="mt-3 w-fit"
          disabled={!user.name || !user.email}
          onClick={() => {
            const next: StaffUser = { id: uid('u'), name: user.name, email: user.email, role: user.role, active: true }
            upsertStaff(next)
            setUser({ name: '', email: '', role: 'kasir' })
          }}
        >
          Tambah Staff
        </Button>
      </section>
    </div>
  )
}
