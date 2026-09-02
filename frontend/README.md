# Struktur folder project

```text
frontend/
├── public/                         # aset statis (favicon)
├── index.html
├── package.json
├── vite.config.ts
└── src/
    ├── main.tsx                    # entry React
    ├── App.tsx                     # router: landing, login, self-order, POS, owner
    ├── index.css                   # Tailwind + token warna/font
    ├── mock/                       # data & state sementara (belum API)
    │   ├── data.ts                 # seed menu, meja, order, bahan, staff
    │   └── store.tsx               # CafeProvider + useCafe()
    ├── shared/                     # dipakai ketiga area
    │   ├── types/index.ts          # tipe domain (order, product, dll)
    │   ├── lib/format.ts           # format Rupiah, id, waktu
    │   └── components/
    │       ├── ui.tsx              # Button, Field, TextInput, Badge
    │       └── icons.tsx
    └── features/                   # modul per area aplikasi
        ├── landing/LandingPage.tsx
        ├── auth/
        │   ├── LoginPage.tsx
        │   └── RequireAuth.tsx
        ├── self-order/             # pelanggan (mobile)
        │   ├── SelfOrderApp.tsx
        │   ├── screens/            # Menu, Cart, Payment, Status
        │   └── components/         # ItemSheet, BottomNav
        ├── pos/                    # kasir / barista (desktop)
        │   ├── PosLayout.tsx       # nav: Orders, Catalog, Inventory, Settings
        │   └── pages/
        │       ├── OrdersPage.tsx
        │       ├── CatalogPage.tsx
        │       ├── InventoryPage.tsx
        │       ├── ManualOrderPage.tsx
        │       └── PosSettingsPage.tsx
        └── owner/                  # analytics & manajemen
            ├── OwnerLayout.tsx     # nav: Dashboard, Sales, Menu, Tables, Settings
            └── pages/
                ├── DashboardPage.tsx
                ├── SalesPage.tsx
                ├── MenuCatalogPage.tsx
                ├── TablesPage.tsx
                └── OwnerSettingsPage.tsx
```
