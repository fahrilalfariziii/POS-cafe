import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCafe } from '../../mock/store'
import type { CartItem, PaymentMethod, Product } from '../../shared/types'
import { CartScreen } from './screens/CartScreen'
import { MenuScreen } from './screens/MenuScreen'
import { PaymentScreen } from './screens/PaymentScreen'
import { StatusScreen } from './screens/StatusScreen'
import { ItemSheet } from './components/ItemSheet'

type Screen = 'menu' | 'cart' | 'payment' | 'status'

export function SelfOrderApp() {
  const { token } = useParams()
  const { tables, products, placeOrder, orders } = useCafe()
  const table = tables.find((t) => t.qrToken === token && t.isActive) ?? tables.find((t) => t.tableNumber === '04')
  const [screen, setScreen] = useState<Screen>('menu')
  const [cart, setCart] = useState<CartItem[]>([])
  const [popup, setPopup] = useState<Product | null>(null)
  const [customerName, setCustomerName] = useState('')
  const [payMethod, setPayMethod] = useState<PaymentMethod>('qris')
  const [activeOrderId, setActiveOrderId] = useState<string | null>(null)

  const activeOrder = orders.find((o) => o.id === activeOrderId) ?? null

  function addToCart(item: Product, optionsLabel: string, options: CartItem['options'], unitPrice: number, qty: number) {
    setCart((prev) => [
      ...prev,
      {
        cartId: `${item.id}-${Date.now()}`,
        productId: item.id,
        name: item.name,
        price: unitPrice,
        quantity: qty,
        optionsLabel,
        options,
        imageUrl: item.imageUrl,
      },
    ])
    setPopup(null)
  }

  function updateQty(cartId: string, delta: number) {
    setCart((prev) =>
      prev
        .map((i) => (i.cartId === cartId ? { ...i, quantity: i.quantity + delta } : i))
        .filter((i) => i.quantity > 0),
    )
  }

  function checkout() {
    const order = placeOrder({
      items: cart,
      customerName,
      tableId: table?.id ?? null,
      tableNumber: table?.tableNumber ?? null,
      paymentMethod: payMethod,
      source: 'self_order',
    })
    setActiveOrderId(order.id)
    if (payMethod === 'qris') setScreen('payment')
    else setScreen('status')
  }

  if (!table) {
    return (
      <div className="flex min-h-full items-center justify-center bg-paper px-6 text-center">
        <p className="text-soil">Meja tidak ditemukan atau sudah tidak aktif.</p>
      </div>
    )
  }

  return (
    <div className="flex min-h-full items-start justify-center bg-[#d0ccc8] sm:py-8">
      <div className="relative w-[390px] max-w-full overflow-hidden bg-paper" style={{ minHeight: '100vh' }}>
        <div className="absolute inset-0">
          {screen === 'menu' && (
            <MenuScreen
              tableNumber={table.tableNumber}
              products={products}
              cart={cart}
              onSelectItem={setPopup}
              onUpdateQty={updateQty}
              onGoCart={() => setScreen('cart')}
              onGoOrder={() => setScreen(activeOrder ? 'status' : 'cart')}
            />
          )}
          {screen === 'cart' && (
            <CartScreen
              tableNumber={table.tableNumber}
              cart={cart}
              customerName={customerName}
              payMethod={payMethod}
              onName={setCustomerName}
              onPayMethod={setPayMethod}
              onBack={() => setScreen('menu')}
              onUpdateQty={updateQty}
              onCheckout={checkout}
            />
          )}
          {screen === 'payment' && activeOrder && (
            <PaymentScreen
              order={activeOrder}
              onBack={() => setScreen('cart')}
              onConfirm={() => setScreen('status')}
            />
          )}
          {screen === 'status' && (
            <StatusScreen
              order={activeOrder}
              cart={cart}
              tableNumber={table.tableNumber}
              onOrderAgain={() => {
                setCart([])
                setActiveOrderId(null)
                setScreen('menu')
              }}
            />
          )}
        </div>
        {popup && (
          <ItemSheet item={popup} onClose={() => setPopup(null)} onAdd={addToCart} />
        )}
      </div>
    </div>
  )
}
