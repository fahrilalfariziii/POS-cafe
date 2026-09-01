import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useCafe } from '../../mock/store'

const NAV = [
  { to: '/owner/dashboard', label: 'Dashboard' },
  { to: '/owner/sales', label: 'Sales' },
  { to: '/owner/menu', label: 'Menu' },
  { to: '/owner/tables', label: 'Tables' },
  { to: '/owner/settings', label: 'Settings' },
]

export function OwnerLayout() {
  const { business, session, logout } = useCafe()
  const navigate = useNavigate()

  return (
    <div className="flex min-h-full bg-cream text-black">
      <aside className="flex w-[72px] flex-col items-center justify-between border-r border-[#e4e2dd] py-6">
        <div className="font-display text-sm font-semibold">{business.name.split(' ')[0]}</div>
        <nav className="flex flex-1 flex-col items-center gap-2 pt-8">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              title={item.label}
              className={({ isActive }) =>
                `relative flex h-16 w-full items-center justify-center text-[10px] uppercase tracking-wider ${
                  isActive ? 'font-semibold text-black' : 'text-muted'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && <span className="absolute left-0 h-8 w-[3px] bg-black" />}
                  <span className="w-14 px-1 text-center text-[9px] leading-tight">{item.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>
        <button
          className="text-[10px] uppercase text-muted"
          onClick={() => {
            logout()
            navigate('/login')
          }}
        >
          Out
        </button>
      </aside>
      <div className="flex-1 overflow-auto p-8 pl-10">
        <p className="mb-2 text-xs text-muted">{session?.user.name} · Owner</p>
        <Outlet />
      </div>
    </div>
  )
}
