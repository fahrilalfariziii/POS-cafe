import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useCafe } from '../../mock/store'

const NAV = [
  { to: '/pos/orders', label: 'Orders' },
  { to: '/pos/catalog', label: 'Catalog' },
  { to: '/pos/inventory', label: 'Inventory' },
  { to: '/pos/settings', label: 'Settings' },
]

export function PosLayout() {
  const { session, connection, pendingSyncCount, logout, business } = useCafe()
  const navigate = useNavigate()

  return (
    <div className="flex min-h-full flex-col bg-cream text-black">
      <header className="flex h-16 items-center justify-between border-b border-[#c4c7c7] px-6">
        <div className="flex items-center gap-3">
          <span className="font-display text-lg font-semibold">{business.name}</span>
          <span
            className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider ${
              connection === 'online'
                ? 'bg-[#b8cda9]/40 text-sage'
                : connection === 'syncing'
                  ? 'bg-sand text-stone'
                  : 'bg-[#ba1a1a]/10 text-[#ba1a1a]'
            }`}
          >
            {connection}
            {pendingSyncCount > 0 ? ` · ${pendingSyncCount}` : ''}
          </span>
        </div>
        <nav className="flex gap-8 text-xs font-semibold uppercase tracking-[0.6px] text-stone">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => (isActive ? 'text-black' : 'text-stone')}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/pos/manual')}
            className="rounded-[12px] bg-black px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white"
          >
            New Order
          </button>
          <span className="text-xs text-muted">{session?.user.name}</span>
          <button className="text-xs text-muted" onClick={() => { logout(); navigate('/login') }}>
            Keluar
          </button>
        </div>
      </header>
      <main className="flex-1 overflow-auto p-6">
        <Outlet />
      </main>
    </div>
  )
}
