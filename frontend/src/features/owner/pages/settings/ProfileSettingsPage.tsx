import { useCafe } from '../../../../mock/store'
import { Field, TextInput } from '../../../../shared/components/ui'

export function ProfileSettingsPage() {
  const { session } = useCafe()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-[32px] font-semibold tracking-tight">Profil Akun</h1>
        <p className="text-stone">Informasi akun pengguna dan hak akses peran Anda dalam sistem.</p>
      </div>

      <div className="max-w-2xl rounded-[16px] border border-[#c4c7c7] bg-white p-6 shadow-2xs space-y-6">
        <div className="flex items-center gap-4 border-b border-sand pb-6">
          <div className="flex size-16 items-center justify-center rounded-full bg-sand font-display text-2xl font-bold text-black">
            {session?.user.name.charAt(0) || 'O'}
          </div>
          <div>
            <h2 className="text-lg font-bold text-black">{session?.user.name || 'Owner Cafe'}</h2>
            <p className="text-xs text-stone">{session?.user.email || 'owner@cafe.com'}</p>
            <span className="mt-1 inline-block rounded-md bg-sage/20 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-sage">
              {session?.user.role || 'Owner'}
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-stone">Detail Pengguna</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Nama Pengguna">
              <TextInput value={session?.user.name || ''} disabled readOnly className="bg-cream/50 cursor-not-allowed" />
            </Field>
            <Field label="Alamat Email">
              <TextInput value={session?.user.email || ''} disabled readOnly className="bg-cream/50 cursor-not-allowed" />
            </Field>
          </div>
        </div>
      </div>
    </div>
  )
}