# Frontend — Bean & Brew POS

Web app untuk tiga area terpisah sesuai PRD:

| Area | Route |
| --- | --- |
| Self-order pelanggan | `/order/:qrToken` contoh `/order/table-04` |
| POS kasir/barista | `/pos/*` |
| Owner | `/owner/*` |

## Menjalankan

```bash
npm install
npm run dev
```

Login demo: `owner@beanbrew.id`, `kasir@beanbrew.id`, `barista@beanbrew.id` (tanpa password, data masih mock).

UI mengikuti palet dan alur dari folder `references/`, dengan struktur production (bukan salinan Figma export).
