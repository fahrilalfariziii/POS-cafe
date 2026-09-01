import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { CafeProvider } from './mock/store'
import { LandingPage } from './features/landing/LandingPage'
import { LoginPage } from './features/auth/LoginPage'
import { RequireAuth } from './features/auth/RequireAuth'
import { SelfOrderApp } from './features/self-order/SelfOrderApp'
import { PosLayout } from './features/pos/PosLayout'
import { OrdersPage } from './features/pos/pages/OrdersPage'
import { CatalogPage } from './features/pos/pages/CatalogPage'
import { InventoryPage } from './features/pos/pages/InventoryPage'
import { ManualOrderPage } from './features/pos/pages/ManualOrderPage'
import { PosSettingsPage } from './features/pos/pages/PosSettingsPage'
import { OwnerLayout } from './features/owner/OwnerLayout'
import { DashboardPage } from './features/owner/pages/DashboardPage'
import { SalesPage } from './features/owner/pages/SalesPage'
import { MenuCatalogPage } from './features/owner/pages/MenuCatalogPage'
import { TablesPage } from './features/owner/pages/TablesPage'
import { OwnerSettingsPage } from './features/owner/pages/OwnerSettingsPage'

export default function App() {
  return (
    <CafeProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/order/:token" element={<SelfOrderApp />} />
          <Route
            path="/pos"
            element={
              <RequireAuth roles={['kasir', 'barista', 'owner']} redirectTo="/pos/orders">
                <PosLayout />
              </RequireAuth>
            }
          >
            <Route index element={<Navigate to="orders" replace />} />
            <Route path="orders" element={<OrdersPage />} />
            <Route path="catalog" element={<CatalogPage />} />
            <Route path="inventory" element={<InventoryPage />} />
            <Route path="manual" element={<ManualOrderPage />} />
            <Route path="settings" element={<PosSettingsPage />} />
          </Route>
          <Route
            path="/owner"
            element={
              <RequireAuth roles={['owner']} redirectTo="/owner/dashboard">
                <OwnerLayout />
              </RequireAuth>
            }
          >
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="sales" element={<SalesPage />} />
            <Route path="menu" element={<MenuCatalogPage />} />
            <Route path="tables" element={<TablesPage />} />
            <Route path="settings" element={<OwnerSettingsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CafeProvider>
  )
}
