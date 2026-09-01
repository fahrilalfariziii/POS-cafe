import { useState } from 'react';
import svgPaths from '../imports/svg-seuvv6mwyz';

type Screen = 'menu' | 'cart' | 'payment' | 'status';
type TempOpt = 'Hot' | 'Iced';
type SugarOpt = 'Normal' | 'Less Sugar' | 'No Sugar';
type IceOpt = 'Normal' | 'Less Ice' | 'No Ice';

interface MenuItem {
  id: string;
  name: string;
  desc: string;
  price: number;
  img: string;
  category: string;
  badge?: string;
  outOfStock?: boolean;
}

interface CartItem {
  cartId: string;
  menuId: string;
  name: string;
  price: number;
  qty: number;
  options: string;
  img: string;
}

interface Customization {
  temp: TempOpt;
  sugar: SugarOpt;
  ice: IceOpt;
  extraEspresso: boolean;
  vanillaSyrup: boolean;
  qty: number;
}

const IMG = {
  headerBg: 'https://images.unsplash.com/photo-1485686531765-ba63b07845a7?crop=entropy&cs=tinysrgb&fit=crop&w=800&h=400&q=80',
  caramelMacchiato: 'https://images.unsplash.com/photo-1604298458655-ae6e04213678?crop=entropy&cs=tinysrgb&fit=crop&w=400&h=400&q=80',
  doubleEspresso: 'https://images.unsplash.com/photo-1580661869408-55ab23f2ca6e?crop=entropy&cs=tinysrgb&fit=crop&w=400&h=400&q=80',
  butterCroissant: 'https://images.unsplash.com/photo-1681218424681-b4f8228ecea9?crop=entropy&cs=tinysrgb&fit=crop&w=400&h=400&q=80',
  matchaLatte: 'https://images.unsplash.com/photo-1749280447307-31a68eb38673?crop=entropy&cs=tinysrgb&fit=crop&w=400&h=400&q=80',
  icedCaramelLatte: 'https://images.unsplash.com/photo-1662047102608-a6f2e492411f?crop=entropy&cs=tinysrgb&fit=crop&w=400&h=400&q=80',
};

const MENU: MenuItem[] = [
  { id: '1', name: 'Caramel Macchiato', desc: 'Espresso dengan sirup vanilla, susu segar, dan…', price: 45000, img: IMG.caramelMacchiato, category: 'Signature', badge: 'SIGNATURE' },
  { id: '2', name: 'Double Espresso', desc: 'Dua shot espresso murni dari biji kopi house blend', price: 30000, img: IMG.doubleEspresso, category: 'Espresso' },
  { id: '3', name: 'Butter Croissant', desc: 'Croissant klasik ala Perancis yang renyah di luar', price: 25000, img: IMG.butterCroissant, category: 'Pastry', outOfStock: true },
  { id: '4', name: 'Matcha Latte', desc: 'Bubuk matcha premium Jepang yang diseduh dengan sempurna', price: 40000, img: IMG.matchaLatte, category: 'Non-Coffee' },
  { id: '5', name: 'Iced Caramel Latte', desc: 'Espresso dengan sirup karamel dan susu oat segar', price: 45000, img: IMG.icedCaramelLatte, category: 'Signature', badge: 'SIGNATURE' },
];

const CATEGORIES = ['Semua', 'Signature', 'Espresso', 'Non-Coffee', 'Pastry'];

function fmt(n: number) {
  return 'Rp ' + n.toLocaleString('id-ID');
}

// --- SVG Icons ---
function IconSearch() {
  return (
    <svg fill="none" height="18" viewBox="0 0 18 18" width="18">
      <path d={svgPaths.p8a35e00} fill="#4E453D" />
    </svg>
  );
}
function IconPlus({ color = '#98A98F' }: { color?: string }) {
  return (
    <svg fill="none" height="8.17" viewBox="0 0 8.17 8.17" width="8.17">
      <path d={svgPaths.p10ad69c0} fill={color} />
    </svg>
  );
}
function IconMinus({ color = '#4E453D' }: { color?: string }) {
  return (
    <svg fill="none" height="1.17" viewBox="0 0 8.17 1.17" width="8.17">
      <path d={svgPaths.p3ab8d800} fill={color} />
    </svg>
  );
}
function IconMenu({ color = '#4E644F' }: { color?: string }) {
  return (
    <svg fill="none" height="18" viewBox="0 0 18 18" width="18">
      <path d={svgPaths.p5dfbb10} fill={color} />
    </svg>
  );
}
function IconOrder({ color = '#4E453D' }: { color?: string }) {
  return (
    <svg fill="none" height="20" viewBox="0 0 18 20" width="18">
      <path d={svgPaths.p396ca1c0} fill={color} />
    </svg>
  );
}
function IconCart({ color = 'white' }: { color?: string }) {
  return (
    <svg fill="none" height="20" viewBox="0 0 19.98 20" width="19.98">
      <path d={svgPaths.pb5c2400} fill={color} />
    </svg>
  );
}
function IconChevron({ color = 'white' }: { color?: string }) {
  return (
    <svg fill="none" height="7" viewBox="0 0 4.32 7" width="4.32">
      <path d={svgPaths.p35022f90} fill={color} />
    </svg>
  );
}
function IconBack() {
  return (
    <svg fill="none" height="16" viewBox="0 0 16 16" width="16">
      <path d={svgPaths.p300a1100} fill="#1A2816" />
    </svg>
  );
}
function IconClose() {
  return (
    <svg fill="none" height="32.38" viewBox="0 0 32.38 32.38" width="32.38">
      <path clipRule="evenodd" d={svgPaths.p3c4f4300} fill="black" fillRule="evenodd" />
    </svg>
  );
}
function IconAdd({ color = '#1A2816' }: { color?: string }) {
  return (
    <svg fill="none" height="20" viewBox="0 0 20 20" width="20">
      <path d={svgPaths.p2d8e4cc0} fill={color} />
    </svg>
  );
}
function IconTrash() {
  return (
    <svg fill="none" height="15" viewBox="0 0 13.33 15" width="13.33">
      <path d={svgPaths.pd83d200} fill="#4E453D" />
    </svg>
  );
}
function IconQris() {
  return (
    <svg fill="none" height="18" viewBox="0 0 18 18" width="18">
      <path d={svgPaths.p2cd8680} fill="#1A2816" />
    </svg>
  );
}
function IconCash() {
  return (
    <svg fill="none" height="16" viewBox="0 0 22 16" width="22">
      <path d={svgPaths.p26835240} fill="#1A2816" />
    </svg>
  );
}
function IconCheck() {
  return (
    <svg fill="none" height="12.03" viewBox="0 0 16.3 12.03" width="16.3">
      <path d={svgPaths.p2f7dfa00} fill="white" />
    </svg>
  );
}
function IconTimer() {
  return (
    <svg fill="none" height="21" viewBox="0 0 18 21" width="18">
      <path d={svgPaths.p15f55048} fill="#4E644F" />
    </svg>
  );
}

// --- Customization Popup (Bottom Sheet) ---
interface PopupProps {
  item: MenuItem;
  onClose: () => void;
  onAddToCart: (item: MenuItem, custom: Customization) => void;
}

function ItemPopup({ item, onClose, onAddToCart }: PopupProps) {
  const [custom, setCustom] = useState<Customization>({
    temp: 'Hot', sugar: 'Normal', ice: 'Normal',
    extraEspresso: false, vanillaSyrup: false, qty: 1,
  });

  const addons = (custom.extraEspresso ? 5000 : 0) + (custom.vanillaSyrup ? 5000 : 0);
  const total = (item.price + addons) * custom.qty;

  function OptionBtn({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
    return (
      <button
        onClick={onClick}
        className={`relative rounded-[9999px] px-[18px] py-[10px] text-[14px] font-['Inter:Regular',sans-serif] font-medium transition-all ${
          active
            ? 'bg-[#cee6cb] text-[#526853] border-2 border-[#4e644f]'
            : 'bg-[#eee] text-[#4e453d] border border-[rgba(210,196,186,0.3)]'
        }`}
      >
        {label}
      </button>
    );
  }

  function TileBtn({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
    return (
      <button
        onClick={onClick}
        className={`relative rounded-[12px] flex-1 py-[10px] text-[16px] font-['Inter:Regular',sans-serif] transition-all ${
          active
            ? 'bg-[#cee6cb] text-[#526853] font-medium border-2 border-[#4e644f]'
            : 'bg-[#eee] text-[#4e453d] font-normal border border-[rgba(210,196,186,0.3)]'
        }`}
      >
        {label}
      </button>
    );
  }

  return (
    <div className="absolute inset-0 bg-[rgba(0,0,0,0.7)] z-50 flex items-end" onClick={onClose}>
      <div
        className="w-full bg-[#f9f9f9] rounded-tl-[12px] rounded-tr-[12px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)] overflow-hidden"
        style={{ maxHeight: '92%' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-4 pb-4 border-b border-[rgba(210,196,186,0.2)] bg-[#f9f9f9]">
          <div>
            <p className="text-[20px] font-['Montserrat:SemiBold',sans-serif] font-semibold text-[#1a2816] leading-[28px]">{item.name}</p>
            <p className="text-[14px] font-['Inter:Regular',sans-serif] font-semibold text-[#4e453d] tracking-[0.14px] leading-[20px]">{fmt(item.price)}</p>
          </div>
          <button onClick={onClose} className="size-[40px] flex items-center justify-center">
            <IconClose />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="overflow-y-auto scrollbar-hide" style={{ maxHeight: 'calc(92vh - 81px - 155px)' }}>
          <div className="flex flex-col gap-6 p-5">
            {/* Temperature */}
            <div className="flex flex-col gap-3">
              <p className="text-[14px] font-['Inter:Regular',sans-serif] font-semibold text-[#1a2816] tracking-[0.14px]">Suhu</p>
              <div className="flex gap-3">
                <TileBtn label="Hot" active={custom.temp === 'Hot'} onClick={() => setCustom(c => ({ ...c, temp: 'Hot' }))} />
                <TileBtn label="Iced" active={custom.temp === 'Iced'} onClick={() => setCustom(c => ({ ...c, temp: 'Iced' }))} />
              </div>
            </div>

            {/* Sugar Level */}
            <div className="flex flex-col gap-3">
              <p className="text-[14px] font-['Inter:Regular',sans-serif] font-semibold text-[#1a2816] tracking-[0.14px]">Tingkat Gula</p>
              <div className="flex gap-2 flex-wrap">
                {(['Normal', 'Less Sugar', 'No Sugar'] as SugarOpt[]).map(opt => (
                  <OptionBtn key={opt} label={opt} active={custom.sugar === opt} onClick={() => setCustom(c => ({ ...c, sugar: opt }))} />
                ))}
              </div>
            </div>

            {/* Ice Level */}
            <div className="flex flex-col gap-3">
              <p className="text-[14px] font-['Inter:Regular',sans-serif] font-semibold text-[#1a2816] tracking-[0.14px]">Tingkat Es</p>
              <div className="flex gap-2 flex-wrap">
                {(['Normal', 'Less Ice', 'No Ice'] as IceOpt[]).map(opt => (
                  <OptionBtn key={opt} label={opt} active={custom.ice === opt} onClick={() => setCustom(c => ({ ...c, ice: opt }))} />
                ))}
              </div>
            </div>

            {/* Add-ons */}
            <div className="flex flex-col gap-3">
              <p className="text-[14px] font-['Inter:Regular',sans-serif] font-semibold text-[#1a2816] tracking-[0.14px]">Tambahan</p>
              <div className="flex flex-col gap-2">
                {[
                  { key: 'extraEspresso', label: 'Extra Espresso', price: '+Rp 5k' },
                  { key: 'vanillaSyrup', label: 'Vanilla Syrup', price: '+Rp 5k' },
                ].map(({ key, label, price }) => {
                  const checked = custom[key as keyof Customization] as boolean;
                  return (
                    <label key={key} className="relative bg-[#f3f3f3] rounded-[12px] border border-[rgba(210,196,186,0.2)] flex items-center justify-between p-[13px] cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div
                          className={`size-5 rounded-[4px] border flex items-center justify-center transition-all ${checked ? 'bg-[#4e644f] border-[#4e644f]' : 'bg-white border-[#80756c]'}`}
                          onClick={() => setCustom(c => ({ ...c, [key]: !c[key as keyof Customization] }))}
                        >
                          {checked && <svg fill="none" height="10" viewBox="0 0 12 10" width="12"><path d="M1 5L4.5 8.5L11 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                        </div>
                        <span className="text-[16px] font-['Inter:Regular',sans-serif] font-normal text-[#1a1c1c]">{label}</span>
                      </div>
                      <span className="text-[14px] font-['Inter:Regular',sans-serif] font-semibold text-[#1a2816] tracking-[0.14px]">{price}</span>
                    </label>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#f9f9f9] border-t border-[rgba(210,196,186,0.2)] px-5 pt-5 pb-5">
          <div className="flex items-center justify-between mb-4">
            <p className="text-[20px] font-['Montserrat:SemiBold',sans-serif] font-semibold text-[#1a2816]">Total: {fmt(total)}</p>
            {/* Qty selector */}
            <div className="bg-[#eee] border border-[rgba(210,196,186,0.3)] rounded-[9999px] flex items-center h-10">
              <button className="w-14 h-10 flex items-center justify-center text-[#4e453d] text-[40px] leading-none" onClick={() => setCustom(c => ({ ...c, qty: Math.max(1, c.qty - 1) }))}>
                <span className="relative -top-1">–</span>
              </button>
              <div className="w-8 flex items-center justify-center border-l border-r border-[rgba(188,188,188,0.73)]">
                <span className="text-[16px] font-['Inter:Regular',sans-serif] font-bold text-[#1a2816]">{custom.qty}</span>
              </div>
              <button className="w-10 h-10 flex items-center justify-center text-[#4e453d] text-[20px]" onClick={() => setCustom(c => ({ ...c, qty: c.qty + 1 }))}>
                +
              </button>
            </div>
          </div>
          <button
            className="w-full bg-[#1a2816] rounded-[12px] py-[14px] text-[14px] font-['Inter:Regular',sans-serif] font-bold text-white text-center tracking-[0.14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]"
            onClick={() => onAddToCart(item, custom)}
          >
            Tambah ke Keranjang
          </button>
        </div>
      </div>
    </div>
  );
}

// --- Menu Screen ---
interface MenuScreenProps {
  cart: CartItem[];
  onSelectItem: (item: MenuItem) => void;
  onUpdateCartQty: (cartId: string, delta: number) => void;
  onGoCart: () => void;
  onGoOrder: () => void;
}

function MenuScreen({ cart, onSelectItem, onUpdateCartQty, onGoCart, onGoOrder }: MenuScreenProps) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('Semua');

  const cartTotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  const filtered = MENU.filter(m => {
    const matchCat = category === 'Semua' || m.category === category;
    const matchSearch = m.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  function getCartQty(menuId: string) {
    return cart.filter(c => c.menuId === menuId).reduce((s, c) => s + c.qty, 0);
  }

  return (
    <div className="flex flex-col h-full bg-[#f9f9f9]">
      {/* Header */}
      <div className="relative shrink-0 drop-shadow-[0px_4px_7.5px_rgba(74,124,89,0.06)]">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute inset-0 w-full h-full object-cover object-center" src={IMG.headerBg} />
          <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)]" />
        </div>
        <div className="relative flex flex-col items-center gap-3 px-5 py-6">
          {/* Logo circle */}
          <div className="size-16 rounded-full bg-[#2f3e2a] flex items-center justify-center shrink-0">
            <svg fill="none" height="28" viewBox="0 0 34 28" width="34">
              <path d={svgPaths.p2ffcdb00} fill="#BACCB0" />
            </svg>
          </div>
          <div className="text-center">
            <p className="text-[24px] font-['Geist:Bold',sans-serif] font-bold text-white leading-[32px]">Bean &amp; Brew</p>
            <p className="text-[14px] font-['Inter:Regular',sans-serif] font-medium text-white tracking-[0.14px] leading-[20px]">Halo, Selamat Datang!</p>
            <p className="text-[12px] font-['Inter:Italic',sans-serif] font-medium italic text-[rgba(255,255,255,0.8)] leading-[16px]">Eksplorasi Rasa dalam Setiap Cangkir</p>
          </div>
          <div className="bg-[rgba(206,230,203,0.5)] border border-[rgba(210,196,186,0.3)] rounded-full px-[17px] py-[5px] flex items-center gap-1 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
            <svg fill="none" height="8" viewBox="0 0 9.99 8" width="9.99"><path d={svgPaths.p1094bc40} fill="white" /></svg>
            <span className="text-[12px] font-['Inter:Regular',sans-serif] font-semibold text-white leading-[16px]">Table 04</span>
          </div>
        </div>
      </div>

      {/* Scrollable body */}
      <div className="flex-1 overflow-y-auto scrollbar-hide">
        <div className="flex flex-col gap-6 px-5 pt-4 pb-40">
          {/* Search */}
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <IconSearch />
            </div>
            <input
              className="w-full h-14 rounded-full bg-[#eee] pl-12 pr-4 text-[16px] font-['Inter:Regular',sans-serif] text-[rgba(78,69,61,0.7)] shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.05)] outline-none"
              placeholder="Cari minuman atau makanan..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>

          {/* Categories */}
          <div className="flex gap-2 overflow-x-auto scrollbar-hide -mx-1 px-1">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`shrink-0 h-10 px-6 rounded-full text-[14px] font-['Inter:Regular',sans-serif] font-semibold tracking-[0.14px] transition-all ${
                  category === cat
                    ? 'bg-[#cee6cb] text-[#526853] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)]'
                    : 'bg-[#eee] text-[#4e453d] border border-[rgba(210,196,186,0.3)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-2 gap-3">
            {filtered.map(item => {
              const qty = getCartQty(item.id);
              const cartItemsForMenu = cart.filter(c => c.menuId === item.id);
              return (
                <div
                  key={item.id}
                  className={`bg-white rounded-[12px] overflow-hidden shadow-[0px_4px_15px_0px_rgba(74,124,89,0.06)] flex flex-col ${item.outOfStock ? 'opacity-60' : ''} ${qty > 0 ? 'ring-2 ring-[#cee6cb]' : ''}`}
                >
                  {/* Image */}
                  <div className="relative h-[169px] bg-[#e2e2e2] shrink-0">
                    <img alt={item.name} className={`absolute inset-0 w-full h-full object-cover ${item.outOfStock ? 'saturate-0' : ''}`} src={item.img} />
                    {item.badge && (
                      <div className="absolute top-2 right-2 bg-[#4e644f] rounded-[6px] px-[6px] py-[2px]">
                        <span className="text-[10px] font-['Inter:Regular',sans-serif] font-medium text-white tracking-[0.25px]">{item.badge}</span>
                      </div>
                    )}
                    {item.outOfStock && (
                      <div className="absolute inset-0 flex items-center justify-center backdrop-blur-[1px] bg-[rgba(249,249,249,0.4)]">
                        <div className="bg-[rgba(186,26,26,0.9)] rounded-[6px] px-2 py-1 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
                          <span className="text-[12px] font-['Inter:Regular',sans-serif] font-medium text-white">Habis</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex flex-col justify-between p-3 flex-1">
                    <div>
                      <p className="text-[14px] font-['Inter:Regular',sans-serif] font-semibold text-[#1a2816] tracking-[0.14px] leading-[17.5px] mb-1">{item.name}</p>
                      <p className="text-[12px] font-['Inter:Regular',sans-serif] font-medium text-[#4e453d] leading-[15px] line-clamp-2 mb-2">{item.desc}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[14px] font-['Inter:Regular',sans-serif] font-semibold text-[#1a2816] tracking-[0.14px]">
                        {item.price >= 1000 ? `Rp ${item.price / 1000}k` : fmt(item.price)}
                      </span>
                      {!item.outOfStock && (
                        qty === 0 ? (
                          <button
                            onClick={() => onSelectItem(item)}
                            className="bg-[#2f3e2a] rounded-full size-8 flex items-center justify-center"
                          >
                            <IconPlus color="#98A98F" />
                          </button>
                        ) : (
                          <div className="bg-[#eee] border border-[rgba(210,196,186,0.3)] rounded-full flex items-center p-[3px] gap-0">
                            <button
                              className="size-6 flex items-center justify-center"
                              onClick={() => {
                                const ci = cartItemsForMenu[cartItemsForMenu.length - 1];
                                if (ci) onUpdateCartQty(ci.cartId, -1);
                              }}
                            >
                              <IconMinus />
                            </button>
                            <span className="w-4 text-center text-[12px] font-['Inter:Regular',sans-serif] font-medium text-[#1a2816]">{qty}</span>
                            <button
                              className="size-6 flex items-center justify-center"
                              onClick={() => onSelectItem(item)}
                            >
                              <IconPlus color="#4E453D" />
                            </button>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Floating cart bar */}
      {cartCount > 0 && (
        <div className="absolute bottom-20 left-0 right-0 px-5 z-10">
          <button
            onClick={onGoCart}
            className="w-full bg-[#1a2816] rounded-[12px] h-[72px] flex items-center justify-between px-4 shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1)]"
          >
            <div className="flex items-center gap-3">
              <div className="relative bg-[rgba(255,255,255,0.2)] rounded-full size-10 flex items-center justify-center">
                <IconCart />
                <div className="absolute -top-1 -right-1 bg-[#4e644f] rounded-full size-5 flex items-center justify-center">
                  <span className="text-[10px] font-['Inter:Regular',sans-serif] font-bold text-white">{cartCount}</span>
                </div>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-[12px] font-['Inter:Regular',sans-serif] font-medium text-white opacity-80">{cartCount} Item</span>
                <span className="text-[20px] font-['Geist:SemiBold',sans-serif] font-semibold text-white leading-[28px]">{fmt(cartTotal)}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[14px] font-['Inter:Regular',sans-serif] font-semibold text-white tracking-[0.14px]">Lihat Keranjang</span>
              <IconChevron />
            </div>
          </button>
        </div>
      )}

      {/* Bottom Nav */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#eee] h-20 flex items-center justify-around border-t border-[rgba(210,196,186,0.2)] z-10">
        <button className="flex flex-col items-center gap-1">
          <IconMenu color="#4E644F" />
          <span className="text-[12px] font-['Inter:Regular',sans-serif] font-medium text-[#4e644f]">Menu</span>
        </button>
        <button onClick={onGoOrder} className="flex flex-col items-center gap-1">
          <IconOrder color="#4E453D" />
          <span className="text-[12px] font-['Inter:Regular',sans-serif] font-medium text-[#4e453d]">Pesanan</span>
        </button>
      </div>
    </div>
  );
}

// --- Cart Screen ---
interface CartScreenProps {
  cart: CartItem[];
  onBack: () => void;
  onUpdateQty: (cartId: string, delta: number) => void;
  onCheckout: () => void;
}

function CartScreen({ cart, onBack, onUpdateQty, onCheckout }: CartScreenProps) {
  const [payMethod, setPayMethod] = useState<'QRIS' | 'CASH'>('QRIS');
  const [name, setName] = useState('');
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const tax = Math.round(subtotal * 0.1);
  const total = subtotal + tax;

  return (
    <div className="flex flex-col h-full bg-[#f9f9f9]">
      {/* Header */}
      <div className="bg-[#f9f9f9] h-12 flex items-center justify-between px-5 shrink-0 drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] z-10">
        <button onClick={onBack} className="size-12 flex items-center justify-center">
          <IconBack />
        </button>
        <span className="text-[20px] font-['Montserrat:Bold',sans-serif] font-bold text-[#1a2816]">Keranjang</span>
        <span className="text-[16px] font-['Inter:Regular',sans-serif] text-[#1a2816]">Table 04</span>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide">
        <div className="flex flex-col gap-10 px-5 py-6 pb-48">
          {/* Customer name */}
          <div className="flex flex-col gap-2">
            <p className="text-[20px] font-['Montserrat:SemiBold',sans-serif] font-semibold text-[#1a2816] pb-2">Informasi Pemesan</p>
            <div className="relative">
              <input
                className="w-full bg-white rounded-[8px] border border-[#d2c4ba] pt-6 pb-3 px-4 text-[16px] font-['Inter:Regular',sans-serif] text-[#1a2816] outline-none focus:border-[#4e644f] transition-colors"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder=" "
              />
              <label className="absolute left-4 top-2 text-[12px] font-['Inter:Regular',sans-serif] text-[#4e453d]">Nama Panggilan</label>
            </div>
            <p className="text-[12px] font-['Inter:Regular',sans-serif] font-medium text-[#4e453d] px-1">Nama ini akan dipanggil saat pesanan siap.</p>
          </div>

          {/* Cart items */}
          <div className="flex flex-col gap-4">
            <p className="text-[20px] font-['Montserrat:SemiBold',sans-serif] font-semibold text-[#1a2816]">Pesanan Anda</p>
            {cart.map(ci => (
              <div key={ci.cartId} className="bg-white rounded-[12px] p-4 shadow-[0px_15px_15px_-5px_rgba(51,33,13,0.06)] flex gap-4 relative">
                <div className="bg-[#eee] rounded-[8px] size-24 overflow-hidden shrink-0">
                  <img alt={ci.name} className="w-full h-full object-cover" src={ci.img} />
                </div>
                <div className="flex flex-col justify-between flex-1 min-w-0">
                  <div>
                    <p className="text-[14px] font-['Inter:Regular',sans-serif] font-bold text-[#1a2816] tracking-[0.14px] leading-[20px]">{ci.name}</p>
                    {ci.options && <p className="text-[12px] font-['Inter:Regular',sans-serif] font-medium text-[#4e453d] leading-[16px]">{ci.options}</p>}
                    <p className="text-[14px] font-['Inter:Regular',sans-serif] font-semibold text-[#4e644f] tracking-[0.14px] leading-[20px] mt-1">{fmt(ci.price)}</p>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-[rgba(214,232,203,0.2)] rounded-full flex items-center h-8">
                      <button className="size-8 flex items-center justify-center" onClick={() => onUpdateQty(ci.cartId, -1)}>
                        <IconMinus color="#1A2816" />
                      </button>
                      <div className="w-6 flex items-center justify-center border-l border-r border-[rgba(188,188,188,0.73)]">
                        <span className="text-[14px] font-['Inter:Regular',sans-serif] font-semibold text-[#1a2816]">{ci.qty}</span>
                      </div>
                      <button className="size-8 flex items-center justify-center" onClick={() => onUpdateQty(ci.cartId, 1)}>
                        <IconPlus color="#1A2816" />
                      </button>
                    </div>
                  </div>
                </div>
                <button className="absolute top-4 right-4" onClick={() => onUpdateQty(ci.cartId, -ci.qty)}>
                  <IconTrash />
                </button>
              </div>
            ))}
            <button className="flex items-center justify-center gap-2 py-2 rounded-[8px]" onClick={() => onBack()}>
              <IconAdd color="#1A2816" />
              <span className="text-[16px] font-['Inter:Regular',sans-serif] text-[#1a2816]">Tambah Item Lain</span>
            </button>
          </div>

          {/* Payment method */}
          <div className="flex flex-col gap-4">
            <p className="text-[20px] font-['Montserrat:Bold',sans-serif] font-bold text-[#1a2816]">Metode Pembayaran</p>
            <div className="flex flex-col gap-2">
              {[
                { id: 'QRIS' as const, Icon: IconQris, label: 'QRIS', sub: 'GoPay, ShopeePay, Dana, dll' },
                { id: 'CASH' as const, Icon: IconCash, label: 'CASH', sub: 'Bayar di Kasir' },
              ].map(({ id, Icon, label, sub }) => (
                <button
                  key={id}
                  onClick={() => setPayMethod(id)}
                  className={`bg-white rounded-[8px] border p-[13px] flex items-center gap-3 transition-all ${payMethod === id ? 'border-[#4e644f]' : 'border-[#d2c4ba]'}`}
                >
                  <Icon />
                  <div className="flex-1 text-left">
                    <p className="text-[14px] font-['Inter:Regular',sans-serif] font-bold text-[#1a2816] tracking-[0.14px]">{label}</p>
                    <p className="text-[10px] font-['Inter:Regular',sans-serif] text-[#4e453d]">{sub}</p>
                  </div>
                  {payMethod === id && (
                    <div className="size-5 rounded-full bg-[#4e644f] flex items-center justify-center shrink-0">
                      <svg fill="none" height="8" viewBox="0 0 10 8" width="10"><path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Order summary */}
          <div className="bg-[#f3f3f3] rounded-[12px] p-5 flex flex-col gap-2">
            <p className="text-[20px] font-['Montserrat:SemiBold',sans-serif] font-semibold text-[#1a2816] pb-2">Ringkasan Pesanan</p>
            <div className="flex justify-between py-1">
              <span className="text-[16px] font-['Inter:Regular',sans-serif] text-[#4e453d]">Subtotal ({cart.length} item)</span>
              <span className="text-[16px] font-['Inter:Regular',sans-serif] text-[#1a1c1c]">{fmt(subtotal)}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-[16px] font-['Inter:Regular',sans-serif] text-[#4e453d]">Pajak PB1 (10%)</span>
              <span className="text-[16px] font-['Inter:Regular',sans-serif] text-[#1a1c1c]">{fmt(tax)}</span>
            </div>
            <div className="h-px bg-[rgba(210,196,186,0.5)] my-2" />
            <div className="flex justify-between py-2">
              <span className="text-[24px] font-['Montserrat:Bold',sans-serif] font-bold text-[#1a2816]">Total</span>
              <span className="text-[24px] font-['Montserrat:Bold',sans-serif] font-bold text-[#4e644f]">{fmt(total)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Checkout bar */}
      <div className="absolute bottom-20 left-0 right-0 bg-white border-t border-[rgba(210,196,186,0.2)] rounded-tl-[12px] rounded-tr-[12px] px-4 pt-[17px] pb-4 flex items-center justify-between drop-shadow-[0px_-8px_10px_rgba(51,33,13,0.08)]">
        <div>
          <p className="text-[12px] font-['Inter:Regular',sans-serif] font-medium text-[#4e453d]">Total Tagihan</p>
          <p className="text-[20px] font-['Montserrat:Bold',sans-serif] font-bold text-[#4e644f] leading-[28px]">{fmt(total)}</p>
        </div>
        <button
          onClick={onCheckout}
          className="bg-[#1a2816] rounded-full h-12 px-8 flex items-center gap-2 shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)]"
        >
          <span className="text-[14px] font-['Inter:Regular',sans-serif] font-semibold text-white tracking-[0.14px]">Pesan Sekarang</span>
          <svg fill="none" height="12" viewBox="0 0 12 12" width="12"><path d={svgPaths.p304eaa0} fill="white" /></svg>
        </button>
      </div>

      {/* Bottom Nav */}
      <div className="absolute bottom-0 left-0 right-0 bg-white h-20 flex items-center justify-around border-t border-[rgba(210,196,186,0.2)] z-10">
        <button onClick={onBack} className="flex flex-col items-center gap-1">
          <IconMenu color="#4E453D" />
          <span className="text-[12px] font-['Inter:Regular',sans-serif] font-medium text-[#4e453d]">Menu</span>
        </button>
        <div className="flex flex-col items-center gap-1">
          <div className="bg-[#cee6cb] rounded-[18px] px-3 py-1 flex items-center justify-center">
            <IconOrder color="#526853" />
          </div>
          <span className="text-[12px] font-['Inter:Regular',sans-serif] font-bold text-[#1a2816]">Pesanan</span>
        </div>
      </div>
    </div>
  );
}

// --- Payment Screen ---
interface PaymentScreenProps {
  cart: CartItem[];
  onBack: () => void;
  onConfirm: () => void;
}

function PaymentScreen({ cart, onBack, onConfirm }: PaymentScreenProps) {
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const tax = Math.round(subtotal * 0.1);
  const total = subtotal + tax;
  const [timer] = useState('06:26');

  return (
    <div className="flex flex-col h-full bg-[#f9f9f9]">
      {/* Header */}
      <div className="bg-[#f9f9f9] h-12 flex items-center justify-center px-5 shrink-0 drop-shadow-[0px_4px_5px_rgba(51,33,13,0.03)] z-10 relative">
        <button onClick={onBack} className="absolute left-5 size-12 flex items-center justify-center">
          <IconBack />
        </button>
        <span className="text-[20px] font-['Montserrat:SemiBold',sans-serif] font-semibold text-[#1a2816]">Pembayaran</span>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide">
        <div className="px-5 py-6 flex flex-col gap-6 pb-32">
          {/* Order summary card */}
          <div className="bg-white rounded-[12px] border border-[#e2e2e2] shadow-[0px_15px_7.5px_rgba(51,33,13,0.06)] p-[17px] flex flex-col items-center gap-4">
            <div className="flex flex-col items-center">
              <p className="text-[14px] font-['Inter:Regular',sans-serif] font-semibold text-[#4e453d] tracking-[0.14px]">Total Pembayaran</p>
              <p className="text-[24px] font-['Montserrat:Bold',sans-serif] font-bold text-[#1a2816] leading-[32px]">{fmt(total)}</p>
            </div>
            <div className="w-full h-px border-t border-dashed border-[#e2e2e2]" />
            <div className="w-full flex items-center justify-between">
              <span className="text-[16px] font-['Inter:Regular',sans-serif] text-[#4e453d]">Order ID</span>
              <span className="text-[14px] font-['Inter:Regular',sans-serif] font-semibold text-[#1a2816] tracking-[0.14px]">#BB-20231024</span>
            </div>
          </div>

          {/* QRIS section */}
          <div className="relative bg-white rounded-[12px] border border-[#e2e2e2] shadow-[0px_15px_15px_0px_rgba(51,33,13,0.06)] overflow-hidden" style={{ minHeight: 448 }}>
            {/* decorative */}
            <div className="absolute top-px right-px w-32 h-32 bg-[#d6e8cb] opacity-20 rounded-bl-full" />
            <div className="absolute bottom-px left-px w-24 h-24 bg-[#d1e9ce] opacity-20 rounded-tr-full" />

            <div className="flex flex-col items-center px-5 pt-6 pb-6 gap-4 relative">
              <p className="text-[20px] font-['Montserrat:SemiBold',sans-serif] font-semibold text-[#1a2816]">Scan QRIS</p>
              <p className="text-[16px] font-['Inter:Regular',sans-serif] text-[#4e453d] text-center">Gunakan aplikasi e-wallet atau m-banking Anda untuk memindai kode ini.</p>

              {/* QR code placeholder */}
              <div className="bg-white border border-[#d2c4ba] rounded-[8px] p-[17px] shadow-[0px_1px_1px_rgba(0,0,0,0.05)]">
                <div className="size-48 bg-white rounded-[6px] overflow-hidden relative">
                  {/* QR code visual */}
                  <svg viewBox="0 0 192 192" width="192" height="192" className="absolute inset-0">
                    <rect width="192" height="192" fill="white" />
                    {/* Finder patterns */}
                    <rect x="8" y="8" width="56" height="56" fill="#1a2816" rx="4" />
                    <rect x="14" y="14" width="44" height="44" fill="white" rx="2" />
                    <rect x="20" y="20" width="32" height="32" fill="#1a2816" rx="2" />
                    <rect x="128" y="8" width="56" height="56" fill="#1a2816" rx="4" />
                    <rect x="134" y="14" width="44" height="44" fill="white" rx="2" />
                    <rect x="140" y="20" width="32" height="32" fill="#1a2816" rx="2" />
                    <rect x="8" y="128" width="56" height="56" fill="#1a2816" rx="4" />
                    <rect x="14" y="134" width="44" height="44" fill="white" rx="2" />
                    <rect x="20" y="140" width="32" height="32" fill="#1a2816" rx="2" />
                    {/* Data modules */}
                    {[72,80,88,96,104,112,120].map((x, xi) =>
                      [8,16,24,32,40,48,56,64,72,80,88,96,104,112,120,128,136,144,152,160,168,176].map((y, yi) =>
                        (xi + yi) % 3 !== 0 ? <rect key={`${x}-${y}`} x={x} y={y} width="8" height="8" fill="#1a2816" /> : null
                      )
                    )}
                    {[8,16,24,32,40,48,56,64].map((y, yi) =>
                      [72,80,88,96,104,112,120].map((x, xi) =>
                        (xi + yi) % 2 === 0 ? <rect key={`d-${x}-${y}`} x={x} y={y} width="8" height="8" fill="#1a2816" /> : null
                      )
                    )}
                    {/* Logo in center */}
                    <rect x="76" y="76" width="40" height="40" fill="white" rx="4" />
                    <rect x="80" y="80" width="32" height="32" fill="#2f3e2a" rx="2" />
                  </svg>
                </div>
              </div>

              {/* Timer */}
              <div className="bg-[#eee] rounded-full px-4 py-2 flex items-center gap-2">
                <IconTimer />
                <span className="text-[12px] font-['Inter:Regular',sans-serif] font-medium text-[#4e453d]">
                  Sisa Waktu: <span className="font-['Inter:Regular',sans-serif] font-normal text-[#1a2816]">{timer}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="flex flex-col gap-4">
            <p className="text-[14px] font-['Inter:Regular',sans-serif] font-bold text-[#1a2816] tracking-[0.14px]">Cara Pembayaran</p>
            {[
              'Buka aplikasi pembayaran (Ovo, GoPay, Dana, m-BCA, dll).',
              'Pilih menu Scan QR.',
              'Arahkan kamera ke QR Code di atas dan selesaikan pembayaran.',
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="bg-[#2f3e2a] rounded-full size-6 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-[12px] font-['Inter:Regular',sans-serif] font-medium text-[#98a98f]">{i + 1}</span>
                </div>
                <p className="text-[16px] font-['Inter:Regular',sans-serif] text-[#1a1c1c] leading-[24px]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#f9f9f9] px-5 pb-6 pt-4 flex flex-col gap-2 border-t border-[rgba(210,196,186,0.1)]">
        <button
          onClick={onConfirm}
          className="w-full bg-[#1a2816] rounded-[8px] h-12 flex items-center justify-center text-[14px] font-['Inter:Regular',sans-serif] font-semibold text-white tracking-[0.14px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)]"
        >
          Cek Status Pembayaran
        </button>
        <button
          onClick={onBack}
          className="w-full border border-[#1a2816] rounded-[8px] h-12 flex items-center justify-center text-[14px] font-['Inter:Regular',sans-serif] font-semibold text-[#1a2816] tracking-[0.14px]"
        >
          Pilih Metode Lain
        </button>
      </div>
    </div>
  );
}

// --- Order Status Screen ---
interface StatusScreenProps {
  cart: CartItem[];
  onOrderAgain: () => void;
}

function StatusScreen({ cart, onOrderAgain }: StatusScreenProps) {
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <div className="flex flex-col h-full bg-[#f9f9f9]">
      {/* Header */}
      <div className="bg-[#f9f9f9] h-12 flex items-center justify-center shrink-0 drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] z-10">
        <span className="text-[24px] font-['Liberation_Serif:Bold',Georgia,serif] text-[#1a2816] leading-[32px]">Bean &amp; Brew</span>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide">
        <div className="px-5 py-6 flex flex-col gap-10 pb-24">
          {/* Status hero */}
          <div className="flex flex-col items-center gap-4">
            <div className="bg-[#2f3e2a] rounded-full px-6 py-2">
              <span className="text-[14px] font-['Inter:Regular',sans-serif] font-semibold text-[#baccb0] tracking-[0.7px] uppercase">SEDANG DISIAPKAN</span>
            </div>
            <p className="text-[16px] font-['Inter:Regular',sans-serif] text-[#4e453d] text-center leading-[24px]">
              Barista kami sedang meracik pesanan Anda<br />dengan penuh cinta.
            </p>
          </div>

          {/* Progress stepper */}
          <div className="flex items-center justify-between">
            {/* Step 1: Done */}
            <div className="flex flex-col items-center gap-2">
              <div className="bg-[#1a2816] rounded-full size-10 flex items-center justify-center shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)]">
                <IconCheck />
              </div>
              <span className="text-[12px] font-['Inter:Regular',sans-serif] font-medium text-[#1a2816]">Diterima</span>
            </div>
            <div className="flex-1 h-1 bg-[#1a2816] mx-2 mb-5" />
            {/* Step 2: Active */}
            <div className="flex flex-col items-center gap-2">
              <div className="bg-[#2f3e2a] rounded-full size-10 flex items-center justify-center border-2 border-[#1a2816] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)]">
                <svg fill="none" height="20" viewBox="0 0 16 20" width="16"><path d={svgPaths.p530c300} fill="#BACCB0" /></svg>
              </div>
              <span className="text-[12px] font-['Inter:Regular',sans-serif] font-bold text-[#1a2816]">Diproses</span>
            </div>
            <div className="flex-1 h-1 bg-[#d2c4ba] mx-2 mb-5" />
            {/* Step 3: Pending */}
            <div className="flex flex-col items-center gap-2">
              <div className="bg-[#e2e2e2] rounded-full size-10 flex items-center justify-center">
                <svg fill="none" height="17" viewBox="0 0 20 17" width="20"><path d={svgPaths.p12e4a480} fill="#80756C" /></svg>
              </div>
              <span className="text-[12px] font-['Inter:Regular',sans-serif] font-medium text-[#80756c]">Siap</span>
            </div>
          </div>

          {/* Order details card */}
          <div className="bg-white rounded-[12px] shadow-[0px_4px_7.5px_rgba(51,33,13,0.06)] p-4 flex flex-col gap-2">
            <div className="flex items-center justify-between pb-2 border-b border-[#e2e2e2]">
              <span className="text-[20px] font-['Liberation_Serif:Bold',Georgia,serif] text-[#1a2816]">Order #BB-9021</span>
              <span className="text-[12px] font-['Inter:Regular',sans-serif] font-medium text-[#4e453d]">Meja 04</span>
            </div>
            <div className="flex flex-col gap-2 py-2">
              {cart.map(ci => (
                <div key={ci.cartId} className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <div className="bg-[#eee] rounded-[8px] px-2 py-1">
                      <span className="text-[16px] font-['Inter:Regular',sans-serif] font-bold text-[#1a2816]">{ci.qty}x</span>
                    </div>
                    <div>
                      <p className="text-[16px] font-['Inter:Regular',sans-serif] font-semibold text-[#1a1c1c]">{ci.name}</p>
                      {ci.options && <p className="text-[12px] font-['Inter:Regular',sans-serif] font-medium text-[#4e453d]">{ci.options}</p>}
                    </div>
                  </div>
                  <span className="text-[16px] font-['Inter:Regular',sans-serif] font-semibold text-[#1a2816]">{fmt(ci.price * ci.qty)}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-[#e2e2e2]">
              <span className="text-[16px] font-['Inter:Regular',sans-serif] font-bold text-[#1a1c1c]">Total Bayar</span>
              <span className="text-[20px] font-['Liberation_Serif:Bold',Georgia,serif] text-[#1a2816]">{fmt(total)}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-2">
            <button
              onClick={onOrderAgain}
              className="w-full bg-[#1a2816] rounded-full h-12 flex items-center justify-center gap-2 shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)]"
            >
              <IconAdd color="white" />
              <span className="text-[14px] font-['Inter:Regular',sans-serif] font-semibold text-white tracking-[0.14px]">Pesan Lagi</span>
            </button>
            <button className="w-full border border-[#1a2816] rounded-full h-12 flex items-center justify-center">
              <span className="text-[14px] font-['Inter:Regular',sans-serif] font-semibold text-[#1a2816] tracking-[0.14px]">Butuh Bantuan?</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#eee] h-20 flex items-center justify-around border-t border-[rgba(210,196,186,0.2)] z-10">
        <button onClick={onOrderAgain} className="flex flex-col items-center gap-1">
          <IconMenu color="#4E453D" />
          <span className="text-[12px] font-['Inter:Regular',sans-serif] font-medium text-[#4e453d]">Menu</span>
        </button>
        <div className="flex flex-col items-center gap-1">
          <div className="bg-[#cee6cb] rounded-[18px] px-3 py-1 flex items-center justify-center">
            <IconOrder color="#526853" />
          </div>
          <span className="text-[12px] font-['Inter:Regular',sans-serif] font-bold text-[#1a2816]">Pesanan</span>
        </div>
      </div>
    </div>
  );
}

// --- Main App ---
export default function App() {
  const [screen, setScreen] = useState<Screen>('menu');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [popupItem, setPopupItem] = useState<MenuItem | null>(null);

  function addToCart(item: MenuItem, custom: Customization) {
    const optParts: string[] = [];
    if (custom.temp !== 'Hot') optParts.push(custom.temp);
    if (custom.sugar !== 'Normal') optParts.push(custom.sugar);
    if (custom.ice !== 'Normal') optParts.push(custom.ice);
    if (custom.extraEspresso) optParts.push('Extra Espresso');
    if (custom.vanillaSyrup) optParts.push('Vanilla Syrup');

    const addonPrice = (custom.extraEspresso ? 5000 : 0) + (custom.vanillaSyrup ? 5000 : 0);
    const newItem: CartItem = {
      cartId: `${item.id}-${Date.now()}`,
      menuId: item.id,
      name: item.name,
      price: item.price + addonPrice,
      qty: custom.qty,
      options: optParts.join(', '),
      img: item.img,
    };
    setCart(prev => [...prev, newItem]);
    setPopupItem(null);
  }

  function updateCartQty(cartId: string, delta: number) {
    setCart(prev =>
      prev
        .map(ci => ci.cartId === cartId ? { ...ci, qty: ci.qty + delta } : ci)
        .filter(ci => ci.qty > 0)
    );
  }

  function resetAndGoMenu() {
    setCart([]);
    setScreen('menu');
  }

  return (
    <div className="min-h-full bg-[#d0ccc8] flex items-start justify-center py-0 sm:py-8">
      <div
        className="relative bg-[#f9f9f9] overflow-hidden"
        style={{ width: 390, minHeight: '100vh', maxWidth: '100vw' }}
      >
        <div className="absolute inset-0">
          {screen === 'menu' && (
            <MenuScreen
              cart={cart}
              onSelectItem={setPopupItem}
              onUpdateCartQty={updateCartQty}
              onGoCart={() => setScreen('cart')}
              onGoOrder={() => setScreen('status')}
            />
          )}
          {screen === 'cart' && (
            <CartScreen
              cart={cart}
              onBack={() => setScreen('menu')}
              onUpdateQty={updateCartQty}
              onCheckout={() => setScreen('payment')}
            />
          )}
          {screen === 'payment' && (
            <PaymentScreen
              cart={cart}
              onBack={() => setScreen('cart')}
              onConfirm={() => setScreen('status')}
            />
          )}
          {screen === 'status' && (
            <StatusScreen
              cart={cart}
              onOrderAgain={resetAndGoMenu}
            />
          )}
        </div>

        {/* Item customization popup */}
        {popupItem && (
          <ItemPopup
            item={popupItem}
            onClose={() => setPopupItem(null)}
            onAddToCart={addToCart}
          />
        )}
      </div>
    </div>
  );
}
