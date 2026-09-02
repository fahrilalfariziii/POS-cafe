export type UserRole = 'owner' | 'kasir' | 'barista'

export type OrderStatus = 'diterima' | 'diproses' | 'siap' | 'selesai'
export type PaymentMethod = 'qris' | 'cash' | 'transfer' | 'debit'
export type PaymentStatus = 'pending' | 'paid' | 'failed'
export type OrderSource = 'self_order' | 'pos'
export type ConnectionStatus = 'online' | 'offline' | 'syncing'
export type StockMovementType = 'in' | 'out' | 'adjustment' | 'waste'
export type SyncStatus = 'pending' | 'syncing' | 'synced' | 'failed'

export interface Business {
  id: string
  name: string
  tagline: string
  address: string
  phone: string
  email: string
}

export interface StaffUser {
  id: string
  name: string
  email: string
  role: UserRole
  active: boolean
}

export interface CafeTable {
  id: string
  tableNumber: string
  qrToken: string
  isActive: boolean
  area?: string
}

export interface Category {
  id: string
  name: string
  sortOrder: number
}

export interface ProductOption {
  id: string
  name: string
  type: string
  price: number
  isRequired: boolean
}

export interface Product {
  id: string
  categoryId: string
  name: string
  description: string
  price: number
  imageUrl: string
  isAvailable: boolean
  badge?: string
  options: ProductOption[]
}

export interface CartItem {
  cartId: string
  productId: string
  name: string
  price: number
  quantity: number
  optionsLabel: string
  options: Record<string, string | number | boolean>
  imageUrl: string
}

export interface OrderItem {
  id: string
  productId: string
  productName: string
  price: number
  quantity: number
  options: Record<string, string | number | boolean>
  optionsLabel: string
  subtotal: number
}

export interface Order {
  id: string
  orderNumber: string
  clientOrderId: string
  tableId: string | null
  tableNumber: string | null
  customerName: string
  source: OrderSource
  status: OrderStatus
  paymentMethod: PaymentMethod
  paymentStatus: PaymentStatus
  subtotal: number
  tax: number
  total: number
  createdAt: string
  items: OrderItem[]
  syncStatus: SyncStatus
}

export interface Ingredient {
  id: string
  name: string
  unit: string
  currentStock: number
  minimumStock: number
  isAvailable: boolean
}

export interface StockMovement {
  id: string
  ingredientId: string
  type: StockMovementType
  quantity: number
  stockBefore: number
  stockAfter: number
  notes: string
  createdAt: string
}
