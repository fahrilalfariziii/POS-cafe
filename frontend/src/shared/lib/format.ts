export function formatRupiah(n: number) {
  return 'Rp ' + Math.round(n).toLocaleString('id-ID')
}

export function formatCompact(n: number) {
  if (n >= 1000) return `Rp ${n / 1000}k`
  return formatRupiah(n)
}

export function formatTime(iso: string) {
  return new Date(iso).toLocaleTimeString('id-ID', {
    hour: '2-digit',
    minute: '2-digit',
  })
}

export function uid(prefix = 'id') {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
}
