import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import {
  seedBusiness,
  seedCategories,
  seedIngredients,
  seedMovements,
  seedOrders,
  seedProducts,
  seedStaff,
  seedTables,
  TAX_PER_TRANSACTION,
} from './data'
import { uid } from '../shared/lib/format'
import type {
  Business,
  CafeTable,
  CartItem,
  Category,
  ConnectionStatus,
  Ingredient,
  Order,
  OrderStatus,
  PaymentMethod,
  PaymentStatus,
  Product,
  StaffUser,
  StockMovement,
  UserRole,
} from '../shared/types'

interface Session {
  user: StaffUser
}

interface CafeStore {
  business: Business
  staff: StaffUser[]
  categories: Category[]
  products: Product[]
  tables: CafeTable[]
  orders: Order[]
  ingredients: Ingredient[]
  movements: StockMovement[]
  session: Session | null
  connection: ConnectionStatus
  pendingSyncCount: number
  login: (email: string, roleHint?: UserRole) => boolean
  logout: () => void
  placeOrder: (payload: {
    items: CartItem[]
    customerName: string
    tableId: string | null
    tableNumber: string | null
    paymentMethod: PaymentMethod
    source: Order['source']
    offline?: boolean
  }) => Order
  updateOrderStatus: (orderId: string, status: OrderStatus) => void
  markPaid: (orderId: string, status?: PaymentStatus) => void
  toggleProductAvailability: (productId: string) => void
  upsertProduct: (product: Product) => void
  removeProduct: (productId: string) => void
  upsertCategory: (category: Category) => void
  removeCategory: (categoryId: string) => void
  upsertTable: (table: CafeTable) => void
  removeTable: (tableId: string) => void
  upsertIngredient: (ingredient: Ingredient) => void
  recordStock: (ingredientId: string, type: StockMovement['type'], quantity: number, notes: string) => void
  updateBusiness: (patch: Partial<Business>) => void
  upsertStaff: (user: StaffUser) => void
  removeStaff: (staffId: string) => void 
  setConnection: (status: ConnectionStatus) => void
  syncNow: () => void
}

const CafeContext = createContext<CafeStore | null>(null)

export function CafeProvider({ children }: { children: ReactNode }) {
  const [business, setBusiness] = useState(seedBusiness)
  const [staff, setStaff] = useState(seedStaff)
  const [categories, setCategories] = useState<Category[]>(seedCategories)
  const [products, setProducts] = useState(seedProducts)
  const [tables, setTables] = useState(seedTables)
  const [orders, setOrders] = useState(seedOrders)
  const [ingredients, setIngredients] = useState(seedIngredients)
  const [movements, setMovements] = useState(seedMovements)
  const [session, setSession] = useState<Session | null>(null)
  const [connection, setConnection] = useState<ConnectionStatus>('online')

  const pendingSyncCount = orders.filter((o) => o.syncStatus !== 'synced').length

  const login = useCallback((email: string, roleHint?: UserRole) => {
    const found = staff.find((s) => s.email.toLowerCase() === email.toLowerCase() && s.active)
    if (found) {
      setSession({ user: found })
      return true
    }
    if (roleHint) {
      const byRole = staff.find((s) => s.role === roleHint && s.active)
      if (byRole) {
        setSession({ user: byRole })
        return true
      }
    }
    return false
  }, [staff])

  const logout = useCallback(() => setSession(null), [])

  const placeOrder = useCallback<CafeStore['placeOrder']>(({ items, customerName, tableId, tableNumber, paymentMethod, source, offline }) => {
    const subtotal = items.reduce((s, i) => s + i.price * i.quantity, 0)
    const tax = TAX_PER_TRANSACTION
    const total = subtotal + tax
    const n = 9023 + orders.length
    const order: Order = {
      id: uid('ord'),
      orderNumber: `BB-${n}`,
      clientOrderId: uid('cli'),
      tableId,
      tableNumber,
      customerName: customerName || 'Tamu',
      source,
      status: 'diterima',
      paymentMethod,
      paymentStatus: paymentMethod === 'cash' || offline ? 'pending' : paymentMethod === 'qris' ? 'pending' : 'paid',
      subtotal,
      tax,
      total,
      createdAt: new Date().toISOString(),
      syncStatus: offline || connection === 'offline' ? 'pending' : 'synced',
      items: items.map((i) => ({
        id: uid('item'),
        productId: i.productId,
        productName: i.name,
        price: i.price,
        quantity: i.quantity,
        options: i.options,
        optionsLabel: i.optionsLabel,
        subtotal: i.price * i.quantity,
      })),
    }
    setOrders((prev) => [order, ...prev])
    return order
  }, [orders.length, connection])

  const updateOrderStatus = useCallback((orderId: string, status: OrderStatus) => {
    setOrders((prev) => prev.map((o) => (o.id === orderId ? { ...o, status } : o)))
  }, [])

  const markPaid = useCallback((orderId: string, status: PaymentStatus = 'paid') => {
    setOrders((prev) => prev.map((o) => (o.id === orderId ? { ...o, paymentStatus: status } : o)))
  }, [])

  const toggleProductAvailability = useCallback((productId: string) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === productId ? { ...p, isAvailable: !p.isAvailable } : p)),
    )
  }, [])

  const upsertProduct = useCallback((product: Product) => {
    setProducts((prev) => {
      const i = prev.findIndex((p) => p.id === product.id)
      if (i === -1) return [...prev, product]
      const next = [...prev]
      next[i] = product
      return next
    })
  }, [])

  const removeProduct = useCallback((productId: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== productId))
  }, [])

  const upsertCategory = useCallback((category: Category) => {
    setCategories((prev) => {
      const i = prev.findIndex((c) => c.id === category.id)
      if (i === -1) return [...prev, category]
      const next = [...prev]
      next[i] = category
      return next
    })
  }, [])

  const removeCategory = useCallback((categoryId: string) => {
    setCategories((prev) => prev.filter((c) => c.id !== categoryId))
  }, [])

  const upsertTable = useCallback((table: CafeTable) => {
    setTables((prev) => {
      const i = prev.findIndex((t) => t.id === table.id)
      if (i === -1) return [...prev, table]
      const next = [...prev]
      next[i] = table
      return next
    })
  }, [])

  const removeTable = useCallback((tableId: string) => {
    setTables((prev) => prev.filter((t) => t.id !== tableId))
  }, [])

  const upsertIngredient = useCallback((ingredient: Ingredient) => {
    setIngredients((prev) => {
      const i = prev.findIndex((x) => x.id === ingredient.id)
      if (i === -1) return [...prev, ingredient]
      const next = [...prev]
      next[i] = ingredient
      return next
    })
  }, [])

  const recordStock = useCallback((ingredientId: string, type: StockMovement['type'], quantity: number, notes: string) => {
    setIngredients((prev) => {
      const item = prev.find((i) => i.id === ingredientId)
      if (!item) return prev
      const delta = type === 'in' ? quantity : -quantity
      const after = Math.max(0, item.currentStock + delta)
      const movement: StockMovement = {
        id: uid('mv'),
        ingredientId,
        type,
        quantity,
        stockBefore: item.currentStock,
        stockAfter: after,
        notes,
        createdAt: new Date().toISOString(),
      }
      setMovements((m) => [movement, ...m])
      return prev.map((i) =>
        i.id === ingredientId
          ? { ...i, currentStock: after, isAvailable: after > 0 && i.isAvailable }
          : i,
      )
    })
  }, [])

  const updateBusiness = useCallback((patch: Partial<Business>) => {
    setBusiness((b) => ({ ...b, ...patch }))
  }, [])

  const upsertStaff = useCallback((user: StaffUser) => {
    setStaff((prev) => {
      const i = prev.findIndex((s) => s.id === user.id)
      if (i === -1) return [...prev, user]
      const next = [...prev]
      next[i] = user
      return next
    })
  }, [])

  const removeStaff = useCallback((staffId: string) => {
    setStaff((prevStaff) => prevStaff.filter((s) => String(s.id) !== String(staffId)))
  }, [])

  const syncNow = useCallback(() => {
    setConnection('syncing')
    window.setTimeout(() => {
      setOrders((prev) => prev.map((o) => ({ ...o, syncStatus: 'synced' })))
      setConnection('online')
    }, 800)
  }, [])

  const value = useMemo(
    () => ({
      business,
      staff,
      categories,
      products,
      tables,
      orders,
      ingredients,
      movements,
      session,
      connection,
      pendingSyncCount,
      login,
      logout,
      placeOrder,
      updateOrderStatus,
      markPaid,
      toggleProductAvailability,
      upsertProduct,
      removeProduct,
      upsertCategory,
      removeCategory,
      upsertTable,
      removeTable,
      upsertIngredient,
      recordStock,
      updateBusiness,
      upsertStaff,
      removeStaff,
      setConnection,
      syncNow,
    }),
    [
      business,
      staff,
      categories,
      products,
      tables,
      orders,
      ingredients,
      movements,
      session,
      connection,
      pendingSyncCount,
      login,
      logout,
      placeOrder,
      updateOrderStatus,
      markPaid,
      toggleProductAvailability,
      upsertProduct,
      removeProduct,
      upsertCategory,
      removeCategory,
      upsertTable,
      removeTable,
      upsertIngredient,
      recordStock,
      updateBusiness,
      upsertStaff,
      syncNow,
    ],
  )

  return <CafeContext.Provider value={value}>{children}</CafeContext.Provider>
}

export function useCafe() {
  const ctx = useContext(CafeContext)
  if (!ctx) throw new Error('useCafe must be used inside CafeProvider')
  return ctx
}