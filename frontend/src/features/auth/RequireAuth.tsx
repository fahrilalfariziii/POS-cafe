import { Navigate } from 'react-router-dom'
import { useCafe } from '../../mock/store'
import type { UserRole } from '../../shared/types'
import type { ReactNode } from 'react'

export function RequireAuth({
  children,
  roles,
  redirectTo,
}: {
  children: ReactNode
  roles?: UserRole[]
  redirectTo: string
}) {
  const { session } = useCafe()
  if (!session) return <Navigate to={`/login?next=${encodeURIComponent(redirectTo)}`} replace />
  if (roles && !roles.includes(session.user.role)) {
    return <Navigate to={session.user.role === 'owner' ? '/backoffice/dashboard' : '/frontoffice/orders'} replace />
  }
  return children
}
