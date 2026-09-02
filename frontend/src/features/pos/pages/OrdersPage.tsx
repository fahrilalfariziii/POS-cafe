import { useState } from 'react'
import { useCafe } from '../../../mock/store'
import { formatRupiah, formatTime } from '../../../shared/lib/format'
import type { Order, OrderStatus } from '../../../shared/types'
import { ReceiptModal } from '../components/ReceiptModal'

// Tab Kategori Pesanan Aktif
const CATEGORY_TABS: { id: OrderStatus; label: string; }[] = [
  { id: 'diterima', label: 'Diterima' },
  { id: 'diproses', label: 'Diproses' },
  { id: 'siap', label: 'Siap Diambil' },
]

export function OrdersPage() {
  const { orders, updateOrderStatus, markPaid } = useCafe()
  const [activeTab, setActiveTab] = useState<OrderStatus>('diterima')
  const [selectedOrderForReceipt, setSelectedOrderForReceipt] = useState<Order | null>(null)

  // Filter pesanan sesuai tab yang sedang aktif
  const filteredOrders = orders.filter((o) => o.status === activeTab)

  // Hitung jumlah pesanan selesai untuk badge tombol riwayat
  const completedCount = orders.filter((o) => o.status === 'selesai').length

  return (
    <div>
      <h1 className="font-display text-[40px] font-semibold tracking-tight">Live Orders</h1>
      <p className="mb-6 text-stone">Pesanan masuk real-time dari meja dan kasir.</p>

      {/* Baris Navigasi Utama: Terbagi Kiri (Kategori) & Kanan (Riwayat) */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-[#c4c7c7] pb-4">
        {/* Sisi Kiri: Tab Kategori Status Pesanan Aktif */}
        <div className="flex flex-wrap items-center gap-3">
          {CATEGORY_TABS.map((tab) => {
            const count = orders.filter((o) => o.status === tab.id).length
            const isActive = activeTab === tab.id

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 rounded-[12px] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all ${
                  isActive
                    ? 'bg-black text-white shadow-md'
                    : 'bg-sand text-stone hover:bg-[#e6e2d9] hover:text-black'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`ml-1 rounded-full px-2 py-0.5 text-[10px] font-bold ${
                    isActive ? 'bg-white/20 text-white' : 'bg-stone/20 text-stone'
                  }`}
                >
                  {count}
                </span>
              </button>
            )
          })}
        </div>

        {/* Sisi Kanan: Button Riwayat Transaksi (Sejajar dengan Tab Kiri) */}
        <div>
          <button
            onClick={() => setActiveTab('selesai')}
            className={`flex items-center gap-2 rounded-[12px] border px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all ${
              activeTab === 'selesai'
                ? 'border-black bg-black text-white shadow-md'
                : 'border-clay bg-white text-stone hover:border-black hover:text-black'
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">history</span>
            <span>Riwayat Transaksi</span>
            <span
              className={`ml-1 rounded-full px-2 py-0.5 text-[10px] font-bold ${
                activeTab === 'selesai' ? 'bg-white/20 text-white' : 'bg-sand text-stone'
              }`}
            >
              {completedCount}
            </span>
          </button>
        </div>
      </div>

      {/* Grid Utama Kartu Pesanan */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredOrders.map((order) => (
          <article
            key={order.id}
            className="flex flex-col justify-between rounded-[12px] border border-[#c4c7c7] bg-cream p-4 shadow-xs"
          >
            <div>
              <div className="flex items-start justify-between border-b border-sand pb-3">
                <div>
                  <p className="text-sm font-bold text-black">#{order.orderNumber}</p>
                  <p className="mt-0.5 text-xs text-muted">
                    {order.tableNumber ? `Meja ${order.tableNumber}` : 'Kasir'} · {order.customerName}
                  </p>
                  <p className="text-[11px] text-stone">{formatTime(order.createdAt)}</p>
                </div>
                <span className="rounded-full bg-sand px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-stone">
                  {order.paymentMethod} · {order.paymentStatus}
                </span>
              </div>

              <ul className="my-3 space-y-1 text-sm">
                {order.items.map((it) => (
                  <li key={it.id} className="flex justify-between">
                    <span>
                      <strong className="font-semibold">{it.quantity}×</strong> {it.productName}
                      {it.optionsLabel ? <span className="block text-xs text-muted">{it.optionsLabel}</span> : null}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 border-t border-sand pt-3">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs text-muted">Total</span>
                <span className="font-semibold text-black">{formatRupiah(order.total)}</span>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  {order.paymentStatus !== 'paid' && activeTab !== 'selesai' && (
                    <button
                      className="flex-1 rounded-lg bg-sand px-3 py-2 text-xs font-semibold text-black hover:bg-[#e6e2d9] transition-colors"
                      onClick={() => markPaid(order.id)}
                    >
                      Tandai Lunas
                    </button>
                  )}

                  {activeTab === 'diterima' && (
                    <button
                      className="flex-1 rounded-lg bg-black px-3 py-2 text-xs font-semibold text-white hover:bg-black/80 transition-colors"
                      onClick={() => updateOrderStatus(order.id, 'diproses')}
                    >
                      Proses
                    </button>
                  )}

                  {activeTab === 'diproses' && (
                    <button
                      className="flex-1 rounded-lg bg-black px-3 py-2 text-xs font-semibold text-white hover:bg-black/80 transition-colors"
                      onClick={() => updateOrderStatus(order.id, 'siap')}
                    >
                      Siap
                    </button>
                  )}

                  {activeTab === 'siap' && (
                    <button
                      className="flex-1 rounded-lg bg-sage px-3 py-2 text-xs font-semibold text-white hover:bg-sage/90 transition-colors"
                      onClick={() => updateOrderStatus(order.id, 'selesai')}
                    >
                      Selesai
                    </button>
                  )}
                </div>

                {/* Tombol Cetak Struk (Muncul di Diterima dan Riwayat Transaksi) */}
                {(activeTab === 'diterima' || activeTab === 'selesai') && (
                  <button
                    className="flex items-center justify-center gap-1.5 rounded-lg border border-clay bg-white py-2 text-xs font-semibold text-stone hover:border-black hover:text-black transition-colors"
                    onClick={() => setSelectedOrderForReceipt(order)}
                  >
                    <span className="material-symbols-outlined text-[16px]">print</span>
                    <span>Cetak Struk</span>
                  </button>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Empty State jika tidak ada data */}
      {filteredOrders.length === 0 && (
        <div className="flex flex-col items-center justify-center rounded-[12px] border border-dashed border-[#c4c7c7] py-16 text-center">
          <span className="material-symbols-outlined mb-2 text-4xl text-stone">
            {activeTab === 'selesai' ? 'history' : 'inbox'}
          </span>
          <p className="text-sm font-medium text-stone">
            {activeTab === 'selesai'
              ? 'Belum ada riwayat transaksi yang selesai.'
              : `Tidak ada pesanan dalam status "${
                  CATEGORY_TABS.find((t) => t.id === activeTab)?.label
                }".`}
          </p>
        </div>
      )}

      {/* Modal Popup Struk */}
      {selectedOrderForReceipt && (
        <ReceiptModal
          order={selectedOrderForReceipt}
          onClose={() => setSelectedOrderForReceipt(null)}
        />
      )}
    </div>
  )
}