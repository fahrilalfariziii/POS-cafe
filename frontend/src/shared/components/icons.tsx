export function IconSearch() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <circle cx="8" cy="8" r="5.5" stroke="#4E453D" strokeWidth="1.6" />
      <path d="M12.2 12.2L16 16" stroke="#4E453D" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export function IconPlus({ color = '#98A98F' }: { color?: string }) {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
      <path d="M5 1v8M1 5h8" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export function IconMinus({ color = '#4E453D' }: { color?: string }) {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
      <path d="M1 5h8" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export function IconCart() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path
        d="M3 4h1.4l1.2 8.2A1.5 1.5 0 0 0 7.1 13.5h7.6a1.5 1.5 0 0 0 1.47-1.18L17.5 6H5.2"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="7.5" cy="16.2" r="1.1" fill="white" />
      <circle cx="14.2" cy="16.2" r="1.1" fill="white" />
    </svg>
  )
}

export function IconBack() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M10 3L5 8l5 5" stroke="#1A2816" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
