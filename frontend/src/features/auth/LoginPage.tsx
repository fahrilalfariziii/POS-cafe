import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useCafe } from '../../mock/store'
import { Button, Field, TextInput } from '../../shared/components/ui'

export function LoginPage() {
  const { login, business } = useCafe()
  const [email, setEmail] = useState('kasir@beanbrew.id')
  const [params] = useSearchParams()
  const navigate = useNavigate()
  const next = params.get('next') || '/pos/orders'

  return (
    <div className="flex min-h-full items-center justify-center bg-cream">
      <form
        className="w-full max-w-sm rounded-[12px] bg-white p-8 ring-1 ring-[#e4e2dd]"
        onSubmit={(e) => {
          e.preventDefault()
          if (login(email)) navigate(next)
        }}
      >
        <p className="font-display text-2xl">{business.name}</p>
        <p className="mb-6 text-sm text-muted">Masuk sebagai kasir, barista, atau owner.</p>
        <Field label="Email">
          <TextInput value={email} onChange={(e) => setEmail(e.target.value)} />
        </Field>
        <p className="mt-2 text-xs text-muted">Contoh: owner@beanbrew.id, kasir@beanbrew.id, barista@beanbrew.id</p>
        <Button className="mt-6 w-full" type="submit">
          Masuk
        </Button>
      </form>
    </div>
  )
}
