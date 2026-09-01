# PRD — Project Requirements Document

## 1. Overview

Aplikasi ini bertujuan untuk mendigitalkan dan menyederhanakan proses pemesanan coffee shop, mulai dari pelanggan melakukan self-order melalui QR Code di meja, pesanan masuk secara real-time ke kasir/barista, proses pembayaran, hingga pengelolaan menu, meja, stok, dan analitik oleh owner.

Sistem dirancang sebagai **Web App** dengan tiga area utama, yaitu **Halaman Pemesanan Pelanggan (Self-Ordering App)**, **Halaman Kasir / Barista (Point Of Sale)**, dan **Halaman Owner (Analytics & Management)**. Fokus utama sistem adalah mempercepat proses pemesanan, mengurangi kesalahan input manual, menyediakan status pesanan secara real-time, dan memberikan owner data penjualan yang mudah dipantau.

## 2. Requirements

Berikut adalah persyaratan tingkat tinggi untuk pengembangan sistem:

- **Aksesibilitas:** Aplikasi harus dapat diakses melalui Web Browser. Halaman pelanggan diutamakan responsif dan nyaman digunakan melalui smartphone, sedangkan halaman kasir/barista dan owner diutamakan nyaman digunakan melalui desktop/laptop.
- **Pengguna:** Sistem memiliki tiga area penggunaan utama:
  - **Pelanggan:** melakukan pemesanan melalui QR Code meja.
  - **Kasir / Barista:** menerima, memproses, dan mengelola pesanan.
  - **Owner:** mengelola menu, harga, meja, stok/menu availability, dan melihat analitik penjualan.
- **Self-Ordering:** Pelanggan dapat membuka katalog berdasarkan QR Code meja, memilih menu beserta varian/add-ons, memasukkan nama pada pesanan, dan melakukan checkout.
- **Pembayaran:** Sistem untuk MVP hanya mendukung dua metode pembayaran: **Cash** dan **QRIS**. QRIS untuk tahap saat ini **tidak diintegrasikan dengan Midtrans/Xendit atau payment gateway online**.
- **Real-time Update:** Pesanan harus dapat diteruskan dari pelanggan ke kasir/barista secara real-time tanpa perlu refresh halaman. Status pesanan pelanggan juga harus diperbarui secara real-time menggunakan WebSocket atau teknologi realtime sejenis.
- **Notifikasi:** Pesanan baru pada halaman kasir/barista harus dapat menampilkan notifikasi suara.
- **Printer:** Sistem harus mendukung pencetakan struk melalui Web Bluetooth API dan/atau direct thermal printer USB/LAN menggunakan perintah ESC/POS.
- **Settings POS:** POS/Kasir memiliki halaman pengaturan untuk konfigurasi printer POS dan pengaturan akun sesuai hak akses.
- **Settings Owner:** Owner memiliki halaman pengaturan untuk profil cafe/coffee shop dan manajemen staff.
- **UI Design Reference:** Desain UI utama mengacu pada referensi desain Figma yang telah dikonversi ke HTML. File HTML tersebut digunakan sebagai referensi visual dan struktur antarmuka utama, tetapi implementasi tetap harus mengikuti kebutuhan fungsional dalam PRD.
- **Manajemen Availability:** Menu/bahan yang tidak tersedia dapat diubah menjadi **Out of Stock** sehingga tidak dapat dipesan pelanggan.
- **Manajemen Meja:** Owner dapat mengatur jumlah meja dan QR Code untuk setiap meja.
- **Analytics:** Owner dapat melihat ringkasan omset dan performa menu berdasarkan periode harian, mingguan, dan bulanan.
- **Offline POS:** Halaman Kasir/Barista harus tetap dapat digunakan untuk operasi inti ketika internet terputus, dengan penyimpanan lokal berbasis IndexedDB dan antrean sinkronisasi.
- **Offline Sync:** Data transaksi dan perubahan stok yang dibuat saat offline harus disinkronkan otomatis ketika koneksi kembali tersedia, dengan mekanisme idempotency untuk mencegah duplikasi.
- **Payment Safety:** Pembayaran QRIS tidak boleh dianggap berhasil secara otomatis ketika perangkat offline; pembayaran Cash tetap dapat dicatat secara offline.
- **SaaS-Friendly Foundation:** MVP bukan SaaS dan tidak memiliki subscription/billing, tetapi struktur data harus memiliki batas kepemilikan bisnis (`business_id`) agar di masa depan dapat dimigrasikan ke arsitektur multi-tenant tanpa membangun ulang modul Self-Order, POS, dan Analytics.

## 3. Core Features

Fitur-fitur kunci yang harus ada dalam versi pertama (MVP):

1. **Halaman Pemesanan Pelanggan (Self-Ordering App)**

   - **Scan QR di Meja**
     - Pelanggan mengakses halaman pemesanan melalui QR Code yang terkait dengan nomor meja.
     - QR Code meja dibuat dan dikelola melalui halaman Owner / Manajemen Meja.
     - Sistem otomatis mengetahui nomor meja berdasarkan QR Code yang dipindai.
   - **Katalog Digital Interaktif**
     - Menampilkan daftar menu coffee shop.
     - Menu dikelompokkan berdasarkan kategori.
     - Menampilkan nama menu, harga, deskripsi, dan status ketersediaan.
     - Menu dengan status Out of Stock tidak dapat ditambahkan ke keranjang.
   - **Form Pesanan**
     - Menampilkan nomor meja yang berasal dari QR Code.
     - Pelanggan dapat memasukkan nama pada pesanan.
   - **Detail Menu, Varian, dan Add-ons**
     - Saat pelanggan memilih menu dan menekan tombol tambah, sistem menampilkan pilihan varian/add-ons jika tersedia.
     - Pilihan dapat mencakup:
       - Suhu minuman.
       - Tingkat gula.
       - Tingkat es.
       - Pilihan susu.
       - Extra espresso.
     - Sistem menghitung harga berdasarkan varian atau add-on yang dipilih.
   - **Keranjang**
     - Menampilkan seluruh item yang akan dipesan.
     - Menampilkan detail varian dan add-ons setiap item.
     - Pelanggan dapat mengubah jumlah item.
     - Pelanggan dapat menghapus item.
     - Sistem menghitung subtotal dan total pesanan.
   - **Checkout**
     - Menampilkan ringkasan pesanan.
     - Menampilkan nomor meja dan nama pada pesanan.
     - Menampilkan total pembayaran.
     - Pilihan metode pembayaran:
       - QRIS menggunakan QRIS statis/QRIS merchant tanpa auto-verification dari payment gateway.
       - Cash.
       - Transfer Bank.
       - Debit.
     - Jika pelanggan memilih **Cash**, sistem menampilkan notifikasi bahwa pelanggan harus segera melakukan pembayaran di kasir.
     - Sistem menyimpan pesanan dan status pembayarannya.
   - **Live Order Status**
     - Pelanggan dapat melihat perkembangan pesanan secara real-time.
     - Status utama:
       - **Diterima**
       - **Diproses**
       - **Siap Diambil/Disajikan**
     - Perubahan status dikirim menggunakan WebSocket/Realtime update tanpa perlu refresh halaman.

2. **Halaman Kasir / Barista (Point Of Sale)**

   - **Real-time Order Feed**
     - Pesanan dari pelanggan masuk ke halaman kasir/barista secara real-time.
     - Tidak membutuhkan refresh halaman.
     - Pesanan baru memicu notifikasi suara.
     - Menampilkan informasi penting seperti nomor order, nomor meja, nama pelanggan, item, varian, add-ons, metode pembayaran, dan status pembayaran.
   - **Manajemen Status Pesanan**
     - Kasir/barista dapat mengubah status pesanan:
       - Diterima.
       - Diproses.
       - Siap Diambil/Disajikan.
     - Perubahan status langsung dikirim ke halaman pelanggan secara real-time.
   - **Input Pesanan Manual**
     - Kasir dapat membuat pesanan secara manual untuk pelanggan yang memesan langsung di kasir/meja kasir.
     - Antarmuka harus cepat digunakan untuk transaksi langsung.
     - Mendukung terutama transaksi dengan pembayaran Cash.
     - Pesanan manual mengikuti alur order yang sama dengan pesanan dari self-order.
   - **Pembayaran Pesanan**
     - Kasir dapat melihat metode pembayaran yang dipilih pelanggan.
     - Untuk pembayaran Cash, sistem menampilkan informasi bahwa pembayaran perlu dilakukan di kasir.
     - Status pembayaran dapat dicatat agar order dapat diproses sesuai aturan pembayaran.
   - **Cetak Struk Otomatis**
     - Sistem mendukung pencetakan struk setelah transaksi/order sesuai kebutuhan.
     - Integrasi dapat menggunakan:
       - Web Bluetooth API.
       - Direct Thermal Printer melalui USB.
       - Direct Thermal Printer melalui LAN.
     - Format komunikasi printer menggunakan perintah **ESC/POS**.
     - Struk minimal berisi informasi coffee shop, nomor order, waktu, nomor meja, nama pelanggan, daftar item, varian/add-ons, total, dan metode pembayaran.
   - **Manajemen Stok / Availability Real-time**
     - Kasir/barista dapat melakukan toggle cepat terhadap menu atau bahan yang tidak tersedia.
     - Menu yang ditandai **Out of Stock** langsung tidak dapat dipesan pelanggan.
     - Perubahan availability harus tersinkron secara real-time atau near real-time pada katalog pelanggan.
   - **Manajemen Bahan**
     - Kasir/barista dapat melihat daftar bahan operasional coffee shop.
     - Menambah, mengedit, menghapus/menonaktifkan bahan.
     - Mencatat stok masuk dan penyesuaian stok secara manual.
     - Menampilkan stok saat ini, satuan, batas minimum, Low Stock, dan Out of Stock.
     - Setiap perubahan stok dicatat dalam riwayat pergerakan stok.
   - **Offline Mode & Synchronization**
     - POS tetap dapat dibuka dan menjalankan operasi inti ketika koneksi internet terputus.
     - Data order manual, perubahan status yang diizinkan, dan stock movement yang dibuat saat offline disimpan pada IndexedDB/local database.
     - Setiap transaksi offline memiliki `client_order_id`/idempotency key unik untuk mencegah order ganda ketika sinkronisasi.
     - Sistem menampilkan indikator **Online**, **Offline**, dan **Syncing** serta jumlah data yang menunggu sinkronisasi.
     - Saat koneksi kembali, Sync Engine mengirim data pending ke backend secara otomatis dan melakukan retry untuk data yang gagal.
     - Kegagalan printer tidak boleh menghapus atau menggagalkan data transaksi yang sudah tersimpan.
     - Self-Ordering pelanggan tidak wajib mendukung transaksi offline.
     - Pembayaran QRIS tidak dapat diverifikasi otomatis ketika offline; verifikasi dilakukan sesuai proses operasional kasir.

3. **Halaman Owner (Analytics & Management)**
   - **Dashboard Owner**
     - Menampilkan ringkasan performa penjualan.
     - Menampilkan omset berdasarkan periode.
     - Menampilkan informasi menu terlaris.
     - Menampilkan status menu/availability yang relevan.
   - **Laporan Penjualan**
     - Visualisasi omset harian.
     - Visualisasi omset mingguan.
     - Visualisasi omset bulanan.
     - Data dapat digunakan untuk memahami perkembangan penjualan berdasarkan periode.
   - **Menu Terlaris (Best Seller Tracking)**
     - Menampilkan grafik atau visualisasi menu yang paling banyak terjual.
     - Analisis berdasarkan jumlah item yang terjual.
     - Dapat digunakan untuk mengetahui menu yang paling dominan dalam penjualan.
   - **Manajemen Harga & Katalog**
     - Tambah menu.
     - Edit menu.
     - Hapus menu.
     - Mengatur harga menu.
     - Mengatur kategori menu.
     - Mengatur deskripsi dan informasi menu.
     - Mengatur varian/add-ons yang tersedia pada menu.
     - Mengatur status ketersediaan menu.
   - **Manajemen Meja**
     - Mengatur jumlah meja coffee shop.
     - Tambah meja.
     - Edit meja.
     - Hapus/nonaktifkan meja.
     - Mengatur nomor atau identitas meja.
     - Membuat/mengelola QR Code unik untuk setiap meja.
     - QR Code digunakan sebagai pintu masuk ke halaman self-order dengan konteks nomor meja yang sesuai.

    - **Owner Settings**
      - Tersedia halaman **Settings** khusus untuk Owner/Management.
      - Owner dapat mengatur **profil coffee shop/cafe**, termasuk nama bisnis, informasi kontak, alamat bila diperlukan, logo, dan informasi operasional yang relevan.
      - Owner dapat mengelola **staff**, termasuk melihat daftar staff, menambah staff, mengedit informasi staff, mengatur role, dan menonaktifkan akses staff bila diperlukan.
      - Role staff minimal mengikuti kebutuhan operasional seperti Owner, Kasir, dan Barista.
      - Pengelolaan akun dan staff harus dilindungi oleh authorization berbasis role.

## 4. User Flow

Alur kerja utama sistem:

### A. Pelanggan — Self-Ordering

1. **Scan QR Meja:** Pelanggan melakukan scan QR Code yang tersedia di meja.
2. **Masuk ke Katalog:** Sistem membuka halaman self-order dan otomatis mengenali nomor meja.
3. **Pilih Menu:** Pelanggan melihat katalog digital dan memilih menu yang tersedia.
4. **Pilih Varian/Add-ons:** Jika menu memiliki pilihan, pelanggan memilih suhu minuman, tingkat gula, tingkat es, pilihan susu, extra espresso, atau add-ons lainnya.
5. **Tambah ke Keranjang:** Item beserta konfigurasi varian/add-ons masuk ke keranjang.
6. **Isi Nama:** Pelanggan memasukkan nama yang akan ditampilkan pada pesanan.
7. **Checkout:** Pelanggan memeriksa ringkasan pesanan dan memilih metode pembayaran.
8. **Pembayaran:**
   - Jika **QRIS**, pelanggan menggunakan QRIS merchant yang disediakan. Untuk MVP, verifikasi pembayaran dilakukan secara manual oleh kasir dan tidak menggunakan Midtrans/Xendit.
   - Jika **Cash**, sistem memberi notifikasi untuk segera membayar di kasir.
   - 9. **Order Diterima:** Pesanan masuk ke sistem kasir/barista secara real-time.
10. **Tracking:** Pelanggan melihat status pesanan:
    - Diterima.
    - Diproses.
    - Siap Diambil/Disajikan.
11. **Selesai:** Pelanggan mengambil atau menerima pesanan ketika status sudah Siap Diambil/Disajikan.

### B. Kasir / Barista

1. **Monitoring:** Kasir/barista membuka halaman POS dan melihat order feed.
2. **Order Baru:** Pesanan pelanggan muncul secara real-time disertai notifikasi suara.
3. **Verifikasi Pembayaran:** Kasir memeriksa status/metode pembayaran, terutama untuk order Cash.
4. **Terima Pesanan:** Order ditandai sebagai Diterima.
5. **Proses Pesanan:** Barista mengubah status menjadi Diproses.
6. **Siapkan Pesanan:** Barista membuat minuman/makanan berdasarkan item, varian, dan add-ons.
7. **Cetak Struk:** Sistem dapat mencetak struk melalui printer yang terhubung.
8. **Pesanan Siap:** Status diubah menjadi Siap Diambil/Disajikan dan pelanggan mendapatkan update secara real-time.
9. **Input Manual:** Untuk pelanggan yang memesan langsung, kasir membuat order melalui form manual dan mengikuti alur order yang sama.
10. **Offline Handling:** Jika koneksi terputus, order manual dan stock movement disimpan secara lokal, ditandai pending, lalu disinkronkan otomatis ketika online kembali.
11. **Manajemen Bahan:** Kasir/barista memeriksa stok bahan, mencatat stok masuk/penyesuaian, dan melihat Low Stock/Out of Stock.
12. **POS Settings:** Kasir membuka halaman Settings untuk mengatur printer POS dan mengelola pengaturan akun yang tersedia sesuai role.

### C. Owner

1. **Login/Akses Owner:** Owner membuka halaman management.
2. **Monitoring Penjualan:** Owner melihat dashboard dan laporan penjualan.
3. **Analisis Menu:** Owner melihat menu terlaris dan performa penjualan.
4. **Kelola Katalog:** Owner menambah, mengedit, atau menghapus menu dan mengatur harga/kategori.
5. **Kelola Varian:** Owner mengatur varian dan add-ons yang tersedia untuk menu.
6. **Kelola Meja:** Owner mengatur jumlah meja dan QR Code masing-masing meja.
7. **Monitoring Availability:** Owner dapat memastikan menu yang tidak tersedia ditandai Out of Stock.
8. **Owner Settings:** Owner mengatur profil coffee shop/cafe dan mengelola staff serta role aksesnya.

## 5. Architecture

Berikut adalah gambaran arsitektur sistem dan aliran data secara teknis namun sederhana:

```mermaid
sequenceDiagram
    participant Customer as Pelanggan (Mobile Browser)
    participant UI as Frontend Web App
    participant Realtime as Realtime/WebSocket
    participant Server as Backend Logic/API
    participant DB as Database
        participant POS as Kasir/Barista Browser
    participant Printer as Thermal Printer
    participant LocalDB as IndexedDB / Local Storage

    Note over Customer, DB: Proses Self-Ordering

    Customer->>UI: Scan QR Meja & Buka Katalog
    UI->>Server: Request Data Meja & Katalog
    Server->>DB: Ambil Data Meja/Menu
    DB-->>Server: Data Meja & Menu
    Server-->>UI: Tampilkan Katalog

    Customer->>UI: Pilih Menu + Varian + Add-ons
    UI->>UI: Hitung Item & Total
    Customer->>UI: Checkout & Pilih Metode Pembayaran

    alt QRIS
        UI->>Server: Buat Order dengan Metode QRIS
        Server->>DB: Simpan Order dengan Status Payment Pending
        Server-->>UI: Tampilkan Informasi/QRIS Merchant
        POS->>Server: Kasir Verifikasi Pembayaran Secara Manual
        Server->>DB: Update Payment Status
    else Cash
        UI->>Server: Submit Order
        Server->>DB: Simpan Order & Payment Method
    end

    Server->>DB: Simpan Order
    Server->>Realtime: Publish New Order
    Realtime-->>POS: Order Baru + Notifikasi

    POS->>Server: Update Order Status
    Server->>DB: Simpan Status
    Server->>Realtime: Publish Status Update
    Realtime-->>Customer: Update Live Order Status

    POS->>Printer: Kirim ESC/POS Print Command
    Printer-->>POS: Print Receipt

    Note over POS, LocalDB: Ketika Internet Terputus
    POS->>LocalDB: Simpan order/stock movement sebagai pending
    POS-->>POS: Tampilkan status OFFLINE
    Note over POS, Server: Ketika Internet Kembali
    POS->>Server: Sync pending data + idempotency key
    Server->>DB: Simpan jika belum pernah diproses
    Server-->>POS: Sync result
```

Arsitektur sistem secara umum terdiri dari:

- **Frontend Web App:** antarmuka pelanggan, kasir/barista, dan owner.
- **Backend/API:** menangani autentikasi, katalog, order, pembayaran, status order, manajemen meja, laporan, dan validasi data.
- **Database:** menyimpan data menu, kategori, varian, add-ons, meja, order, detail order, pembayaran, user, bahan, stok, pergerakan stok, dan data penjualan.
- **Realtime Layer:** WebSocket atau layanan realtime untuk sinkronisasi order dan status tanpa refresh.
- **Payment:** MVP mendukung Cash dan QRIS. QRIS saat ini tidak menggunakan Midtrans/Xendit atau payment gateway; verifikasi pembayaran dilakukan melalui proses operasional kasir.
- **Printer Integration:** Web Bluetooth API dan/atau printer USB/LAN dengan ESC/POS; konfigurasi perangkat dikelola melalui POS Settings.
- **Responsive Client:** halaman self-order dioptimalkan untuk smartphone, sementara POS dan Owner dioptimalkan untuk desktop/laptop.

## 6. Database Schema

Untuk versi MVP, struktur database tetap dibuat sederhana, tetapi **Manajemen Bahan** dan **Offline** menjadi bagian wajib. Database menggunakan **12 tabel inti**. Tabel `businesses` hanya menjadi boundary kepemilikan data agar sistem **SaaS-friendly** di masa depan; MVP tetap hanya digunakan untuk satu bisnis dan tidak memiliki fitur subscription/billing/multi-tenant.

Data operasional utama menggunakan `business_id` agar seluruh menu, meja, order, pembayaran, bahan, dan analytics jelas dimiliki oleh satu bisnis. Saat ini cukup terdapat satu record bisnis aktif. Jika di masa depan sistem berubah menjadi SaaS, konsep ini dapat dikembangkan menjadi tenant/multi-tenant tanpa mengubah domain Self-Order, POS, dan Analytics secara fundamental.

Data offline tidak disimpan sebagai tabel server tambahan. POS menggunakan **IndexedDB** dengan local stores seperti `pending_orders`, `pending_stock_movements`, dan `sync_queue`.

Pilihan varian dan add-ons menggunakan satu tabel `product_options`, sedangkan pilihan pelanggan disimpan sebagai JSON pada `order_items.options`.

### Entity Relationship Diagram (ERD)

```mermaid
erDiagram
    businesses ||--o{ users : owns
    businesses ||--o{ tables : owns
    businesses ||--o{ categories : owns
    businesses ||--o{ products : owns
    businesses ||--o{ orders : owns
    businesses ||--o{ payments : owns
    businesses ||--o{ ingredients : owns
    businesses ||--o{ stock_movements : owns
    users ||--o{ orders : creates
    users ||--o{ stock_movements : records
    tables ||--o{ orders : used_by
    categories ||--o{ products : contains
    products ||--o{ product_options : has
    products ||--o{ order_items : ordered
    orders ||--o{ order_items : contains
    orders ||--o{ payments : has
    orders ||--o{ order_status_logs : tracks
    ingredients ||--o{ stock_movements : has

    businesses {
        int id PK
        string name
        string status
        datetime created_at
        datetime updated_at
    }

    users {
        int id PK
        int business_id FK
        string name
        string email
        string password_hash
        string role
        datetime created_at
    }

    tables {
        int id PK
        int business_id FK
        string table_number
        string qr_token
        boolean is_active
        datetime created_at
    }

    categories {
        int id PK
        int business_id FK
        string name
        int sort_order
        boolean is_active
    }

    products {
        int id PK
        int business_id FK
        int category_id FK
        string name
        text description
        decimal price
        string image_url
        boolean is_available
        datetime created_at
        datetime updated_at
    }

    product_options {
        int id PK
        int product_id FK
        string name
        string type
        decimal price
        boolean is_required
        boolean is_active
    }

    orders {
        int id PK
        int business_id FK
        string order_number
        string client_order_id
        int table_id FK
        int user_id FK
        string customer_name
        string source
        string status
        decimal subtotal
        decimal total
        datetime created_at
        datetime updated_at
    }

    order_items {
        int id PK
        int order_id FK
        int product_id FK
        string product_name
        decimal price
        int quantity
        json options
        decimal subtotal
    }

    payments {
        int id PK
        int business_id FK
        int order_id FK
        string method
        string status
        decimal amount
        string gateway
        string reference
        datetime paid_at
    }

    order_status_logs {
        int id PK
        int order_id FK
        string status
        datetime created_at
    }

    ingredients {
        int id PK
        int business_id FK
        string name
        string unit
        decimal current_stock
        decimal minimum_stock
        boolean is_available
        datetime created_at
        datetime updated_at
    }

    stock_movements {
        int id PK
        int business_id FK
        int ingredient_id FK
        string type
        decimal quantity
        decimal stock_before
        decimal stock_after
        string notes
        int user_id FK
        datetime created_at
    }
```

| Tabel                 | Deskripsi                                                                                |
| --------------------- | ---------------------------------------------------------------------------------------- |
| **businesses**        | Identitas bisnis/coffee shop; boundary kepemilikan data untuk fondasi SaaS di masa depan |
| **users**             | Data Owner, Kasir, dan Barista beserta role/access                                       |
| **tables**            | Nomor meja, QR token, dan status aktif                                                   |
| **categories**        | Master kategori menu                                                                     |
| **products**          | Master menu, harga, deskripsi, gambar, dan availability                                  |
| **product_options**   | Varian dan add-ons yang tersedia untuk menu                                              |
| **orders**            | Data utama transaksi/order                                                               |
| **order_items**       | Detail item, harga snapshot, jumlah, dan pilihan pelanggan                               |
| **payments**          | Metode, status, dan referensi pembayaran                                                 |
| **order_status_logs** | Riwayat perubahan status order                                                           |
| **ingredients**       | Master bahan, satuan, stok saat ini, minimum stock, dan availability                     |
| **stock_movements**   | Riwayat stok masuk, keluar, adjustment, dan waste                                        |

### Struktur `product_options`

Tabel `product_options` menyimpan seluruh varian dan add-ons tanpa tabel terpisah.

Contoh:

```text
Iced Latte
├── Temperature
│   ├── Hot       +0
│   └── Ice       +0
├── Sugar
│   ├── Normal    +0
│   ├── Less      +0
│   └── No Sugar  +0
├── Milk
│   ├── Regular   +0
│   ├── Oat       +5000
│   └── Soy       +3000
└── Extra Espresso
    └── Extra Shot +7000
```

`type` dapat berupa `temperature`, `sugar`, `ice`, `milk`, atau `addon`. Field `price` menyimpan penyesuaian harga.

### Penyimpanan pilihan pelanggan

Pilihan pelanggan disimpan pada `order_items.options` dalam format JSON:

```json
{
  "temperature": "Iced",
  "sugar": "Less",
  "milk": "Oat",
  "extra_espresso": 1
}
```

### Struktur `ingredients`

`ingredients` merupakan master bahan operasional coffee shop.

Contoh:

```text
Biji Kopi       2500 gram
Susu Fresh      5000 ml
Oat Milk        3000 ml
Gula Cair       2000 ml
Syrup Vanilla   1000 ml
Cup 16 oz        100 pcs
```

Field utama:

- `name`: nama bahan.
- `unit`: satuan stok.
- `current_stock`: stok saat ini.
- `minimum_stock`: batas minimum stok.
- `is_available`: bahan dapat digunakan atau tidak.

### Struktur `stock_movements`

Setiap perubahan stok harus dicatat.

Jenis movement:

- `in`: stok masuk/restock.
- `out`: stok keluar/penggunaan.
- `adjustment`: koreksi stok.
- `waste`: bahan rusak/terbuang.

Data yang dicatat:

- bahan.
- jenis movement.
- quantity.
- stok sebelum.
- stok sesudah.
- catatan.
- user yang melakukan.
- waktu perubahan.

### Offline Data & Synchronization

Offline mode menggunakan database lokal browser berbasis **IndexedDB**, bukan database server baru. Minimal local store: `pending_orders`, `pending_stock_movements`, dan `sync_queue`.

Aturan utama:

- Order offline menggunakan `client_order_id` yang unik.
- Setiap item pada sync queue memiliki operation, entity, entity_id, payload, status, retry_count, dan timestamp.
- Status sync minimal: `pending`, `syncing`, `synced`, `failed`.
- Backend harus idempotent: request dengan `client_order_id`/idempotency key yang sudah diproses tidak boleh membuat transaksi kedua.
- Stock movement disinkronkan sebagai event/pergerakan stok, bukan hanya mengirim nilai `current_stock` terakhir, agar perubahan dari lebih dari satu perangkat dapat direkonsiliasi dengan benar.
- Setelah sinkronisasi berhasil, data lokal dapat ditandai `synced` dan dibersihkan sesuai kebijakan retensi lokal.
- Sistem harus memberi tahu user jika terdapat data yang belum tersinkron.

### SaaS-Friendly Foundation (Future, Bukan Scope MVP)

- MVP hanya mendukung satu bisnis aktif dan tidak memiliki subscription, billing, tenant management, atau multi-tenant UI.
- `businesses` menjadi boundary kepemilikan data sejak awal.
- Tabel operasional utama memiliki `business_id` untuk memudahkan isolasi data ketika jumlah bisnis bertambah.
- Jangan membuat asumsi bahwa seluruh data bersifat global; menu, meja, order, pembayaran, bahan, dan user harus dapat ditelusuri ke bisnis pemiliknya.
- Konsep `outlet_id` dapat ditambahkan pada fase multi-cabang/SaaS jika diperlukan, tanpa mengubah model domain utama secara besar.
- Subscription dan billing nantinya menjadi lapisan platform di atas sistem operasional, bukan bagian dari modul Self-Order/POS/Analytics saat ini.

### Catatan MVP

- **Manajemen Bahan merupakan modul wajib MVP** pada halaman **Kasir / Barista**.
- Fitur minimal mencakup tambah, edit, hapus/nonaktifkan bahan, stok masuk, penyesuaian stok, stok saat ini, satuan, minimum stock, Low Stock, dan Out of Stock.
- Seluruh perubahan stok wajib dicatat pada `stock_movements`.
- **Out of Stock menu** menggunakan `products.is_available`.
- **Out of Stock bahan** menggunakan `ingredients.is_available`.
- Stok bahan pada MVP dikelola secara manual.
- **Offline Mode merupakan bagian wajib MVP untuk POS/Barista**, termasuk local persistence, offline queue, status koneksi, dan automatic synchronization.
- Self-Ordering pelanggan tetap membutuhkan koneksi untuk submit order/realtime/payment online; offline browsing tidak dianggap sebagai transaksi offline.
- Pengurangan stok bahan **berdasarkan resep/menu otomatis** belum wajib MVP dan dapat ditambahkan melalui relasi resep/BOM pada fase berikutnya.
- `product_name` dan `price` pada `order_items` merupakan **snapshot** saat transaksi dibuat.
- `order_number` harus unik.
- `payments.reference` dapat digunakan untuk menyimpan referensi pembayaran internal, nomor transaksi, atau informasi yang relevan.

## 7. Design & Technical Constraints

Bagian ini mengatur batasan teknis dan panduan desain yang harus dipatuhi tanpa mendikte pemilihan library secara spesifik.

1. **High-Level Technology:**
   Sistem harus dibangun menggunakan teknologi web modern yang mendukung pengembangan cepat (rapid development), real-time communication, maintainability, dan skalabilitas untuk penggunaan coffee shop skala kecil hingga menengah. Pengembang dibebaskan memilih tools yang tepat selama kebutuhan fungsional utama tetap terpenuhi, usahakan menggunakan teknologi yang gratis dan performa apps nya cukup cepat, ringan dan tampilan design terlihat modern atau anti Ai Slop.

2. **Responsive Design:**

   - **Customer App:** mobile-first karena pelanggan mengakses melalui smartphone setelah scan QR.
   - **POS:** desktop/laptop-first, tetapi tetap usable pada ukuran layar yang lebih kecil.
   - **Owner:** desktop/laptop-first untuk dashboard, tabel management, dan analytics.
   - UI harus tetap usable pada berbagai ukuran layar.

3. **Real-time Communication:**

   - Sistem harus mendukung komunikasi real-time antara pelanggan dan kasir/barista.
   - Pesanan baru harus muncul tanpa refresh halaman.
   - Update status order harus langsung diteruskan ke pelanggan.
   - Teknologi yang dapat digunakan antara lain WebSocket, Socket.IO, Supabase Realtime, atau layanan realtime lain yang sesuai.

4. **Payment Integration:**

   - QRIS harus dapat menggunakan payment gateway seperti **Midtrans atau Xendit**.
   - Status pembayaran QRIS harus diverifikasi menggunakan callback/webhook dari payment gateway, bukan hanya berdasarkan sisi frontend.
   - Secret key dan credential payment gateway tidak boleh disimpan di sisi client.
   - Sistem harus memiliki status pembayaran yang jelas seperti pending, paid, failed, expired, atau cancelled sesuai kebutuhan implementasi.

5. **Printer Integration:**

   - Sistem harus mendukung printer thermal yang kompatibel dengan **ESC/POS**.
   - Koneksi dapat menggunakan Web Bluetooth API atau printer USB/LAN sesuai lingkungan perangkat kasir.
   - Karena dukungan browser dan perangkat dapat berbeda, implementasi printer harus memiliki fallback atau konfigurasi perangkat yang jelas.
   - Proses print tidak boleh mengubah data transaksi utama apabila printer gagal mencetak.

6. **Order Integrity:**

   - Setiap order harus memiliki nomor order unik.
   - Total transaksi harus dihitung dan divalidasi di server.
   - Harga pada histori order menggunakan snapshot agar perubahan harga katalog tidak mengubah transaksi lama.
   - Sistem harus mencegah duplikasi order akibat request atau callback yang terkirim lebih dari satu kali.

7. **Authentication & Authorization:**

   - Halaman Owner dan POS harus memiliki autentikasi.
   - Hak akses harus dibedakan berdasarkan role yang digunakan.
   - Pelanggan tidak membutuhkan akun untuk melakukan self-order melalui QR meja, kecuali fitur akun ditambahkan pada pengembangan berikutnya.
   - Endpoint management dan transaksi harus dilindungi dari akses tidak sah.

8. **Availability & Stock:**

   - Perubahan status Out of Stock harus segera tercermin pada katalog pelanggan.
   - Sistem harus melakukan validasi availability kembali ketika order dibuat.
   - **Manajemen Bahan merupakan fitur wajib MVP** pada halaman Kasir/Barista.
   - Stok bahan dapat ditambah, dikurangi, dan disesuaikan secara manual.
   - Setiap perubahan stok bahan harus menghasilkan record pada `stock_movements`.
   - Sistem menampilkan Low Stock berdasarkan `ingredients.minimum_stock`.
   - Bahan dapat ditandai Out of Stock melalui `ingredients.is_available`.
   - Pengurangan stok otomatis berdasarkan resep/BOM belum wajib MVP.

9. **Offline-First POS & Synchronization:**

   - POS/Barista harus dapat menjalankan operasi inti saat koneksi internet terputus.
   - Gunakan PWA/Service Worker untuk caching asset aplikasi dan IndexedDB untuk data operasional lokal.
   - Local data harus memiliki queue sinkronisasi dengan retry dan status yang dapat dipantau.
   - Gunakan client-generated unique ID/idempotency key untuk order dan operasi yang berpotensi dikirim ulang.
   - Backend harus idempotent dan tidak membuat order duplikat ketika request yang sama dikirim lebih dari satu kali.
   - Stock movement offline disinkronkan sebagai movement/event, bukan overwrite `current_stock` secara buta.
   - UI harus menunjukkan Online, Offline, Syncing, dan jumlah data pending.
   - Jika sinkronisasi gagal, data pending tidak boleh hilang dan harus dapat dicoba kembali.
   - Pembayaran QRIS/online tidak boleh dianggap paid ketika perangkat offline. Cash dapat dicatat offline.
   - Self-Ordering pelanggan tidak wajib mendukung transaksi offline.

10. **SaaS-Friendly Architecture:**

    - SaaS bukan bagian dari MVP. Tidak ada subscription, billing, plan, tenant administration, atau multi-tenant UI pada versi ini.
    - Struktur data menggunakan `business_id` sebagai boundary kepemilikan data. MVP cukup memiliki satu bisnis aktif.
    - Service/backend layer harus menerima konteks bisnis dari authentication/session sehingga query operasional selalu ter-scope ke `business_id`.
    - Modul Self-Order, POS/Barista, Manajemen Bahan, dan Analytics harus tetap berdiri sebagai domain operasional yang dapat digunakan baik pada single-business maupun future multi-business architecture.
    - Hindari hard-code nama coffee shop atau ID bisnis pada business logic.
    - Jika nanti migrasi ke SaaS, tambahkan layer subscription/billing/tenant management di atas domain operasional yang sudah ada.

11. **UI Design Reference:**
     - Desain UI utama menggunakan referensi desain Figma yang telah dikonversi ke HTML.
     - File HTML referensi harus digunakan sebagai acuan utama untuk arah visual, layout, hierarki informasi, dan pengalaman pengguna.
     - Implementasi tidak harus menyalin kode HTML referensi secara mentah; kode production harus tetap mengikuti arsitektur project, reusable components, responsive design, accessibility, dan kebutuhan fungsional PRD.
     - Jika terdapat perbedaan antara referensi UI dan kebutuhan fungsional PRD, kebutuhan fungsional dan user flow dalam PRD tetap menjadi prioritas.
     - Referensi UI tidak boleh menyebabkan halaman Self-Ordering, POS/Kasir, dan Owner menjadi satu aplikasi/layout yang menyatu.

12. **Typography Rules:
    Sistem antarmuka (UI) wajib menggunakan font yang terlihat profesional dan elegan khas gaya coffee shop. sama juga seperti tampilan designnya, hindari banyak menggunakan icon aneh agar tidak terlihat slop AI atau hasilnya seperti dibuat oleh AI

13. **Data & Analytics:**

    - Data penjualan harus dapat diagregasi berdasarkan hari, minggu, dan bulan.
    - Perhitungan omset harus berasal dari transaksi yang memenuhi status pembayaran/transaksi yang dianggap valid.
    - Best seller dihitung berdasarkan jumlah item yang terjual.
    - Data analytics tidak boleh mengubah data transaksi historis.

14. **MVP Scope:**
    Versi MVP memprioritaskan tiga sistem utama:

    - Self-Ordering pelanggan.
    - POS Kasir/Barista, termasuk **Manajemen Bahan**.
    - Owner Analytics & Management.

    **Manajemen Bahan merupakan bagian wajib MVP**, mencakup master bahan, stok saat ini, stok masuk, penyesuaian stok, minimum stock, Low Stock, Out of Stock, dan riwayat pergerakan stok.

    Fitur lanjutan seperti loyalty program, membership pelanggan, promo kompleks, multi-cabang, delivery, integrasi marketplace, inventory otomatis berbasis resep/BOM detail, dan SaaS subscription/billing dapat dikembangkan pada fase berikutnya.

    **Catatan arsitektur:** MVP sengaja belum mengimplementasikan SaaS, tetapi fondasi `business_id`, idempotent transaction ID, dan pemisahan domain operasional disiapkan agar migrasi ke SaaS di masa depan tidak mengharuskan pembangunan ulang Self-Order, POS, Manajemen Bahan, atau Analytics.
