import { useEffect, useMemo, useState } from 'react';
import {
  ShoppingCart,
  Trash2,
  Plus,
  Minus,
  Tag,
  Truck,
  Clock,
  ShieldCheck,
  CheckCircle,
  AlertTriangle,
  XCircle,
  Share2,
  ImageOff,
  X,
  PieChart,
  BellRing,
} from 'lucide-react';

const savedItemsSeed = [
  {
    id: 'tee-01',
    name: 'Essential Cotton Crew Neck Tee',
    image: '/images/f-1.jpg',
    price: 12.99,
    originalPrice: 18.99,
    quantity: 2,
    status: 'in-stock',
    variant: 'Size M / White',
    delivery: 'Arrives in 3-5 days',
    eta: 'Ready to dispatch',
    highlights: ['Free returns within 30 days', 'Ships with tracking'],
    badges: ['Bestseller'],
  },
  {
    id: 'hoodie-02',
    name: 'Cozy Fleece Zip Hoodie',
    image: '/images/f-2.jpg',
    price: 42.5,
    originalPrice: 52.5,
    quantity: 1,
    status: 'low-stock',
    variant: 'Size L / Heather Gray',
    delivery: 'Ships in 1-2 days',
    eta: 'Only 3 left',
    highlights: ['Includes gift packaging', 'Secure zipper guard'],
    badges: ['Trending now'],
  },
  {
    id: 'sneaker-03',
    name: 'Everyday Runner Sneaker',
    image: '/images/f-5.jpg',
    price: 68,
    originalPrice: 68,
    quantity: 1,
    status: 'out-of-stock',
    variant: 'Size 9 / Midnight Black',
    delivery: 'Restocking soon',
    eta: 'Expected 19 May',
    highlights: ['We will notify you once back'],
    badges: [],
  },
  {
    id: 'bag-04',
    name: 'Structured Canvas Tote',
    image: '/images/f-4.jpg',
    price: 35,
    originalPrice: 42,
    quantity: 1,
    status: 'in-stock',
    variant: 'One size / Sandstone',
    delivery: 'Arrives in 5-7 days',
    eta: 'Eligible for free shipping',
    highlights: ['Water-resistant interior', 'Limited seasonal color'],
    badges: ['Member price'],
  },
];

const statusStyles = {
  'in-stock': {
    label: 'In stock',
    icon: CheckCircle,
    pill: 'bg-emerald-50 text-emerald-600',
    accent: 'text-emerald-600',
    disabled: false,
    gradient: 'from-blue-400 via-blue-200 to-transparent',
  },
  'low-stock': {
    label: 'Limited stock',
    icon: AlertTriangle,
    pill: 'bg-amber-50 text-amber-600',
    accent: 'text-amber-600',
    disabled: false,
    gradient: 'from-amber-400 via-amber-200 to-transparent',
  },
  'out-of-stock': {
    label: 'Currently unavailable',
    icon: XCircle,
    pill: 'bg-rose-50 text-rose-600',
    accent: 'text-rose-600',
    disabled: true,
    gradient: 'from-rose-400 via-rose-200 to-transparent',
  },
};

const imageStyles = {
  'tee-01': {
    wrapper:
      'bg-gradient-to-br from-blue-200/70 via-white to-blue-50 ring-1 ring-blue-200/60 shadow-[0_18px_40px_-25px_rgba(59,130,246,0.55)]',
    accent: 'text-blue-500',
  },
  'hoodie-02': {
    wrapper:
      'bg-gradient-to-br from-emerald-200/60 via-white to-emerald-50 ring-1 ring-emerald-200/60 shadow-[0_18px_40px_-25px_rgba(16,185,129,0.45)]',
    accent: 'text-emerald-500',
  },
  'sneaker-03': {
    wrapper:
      'bg-gradient-to-br from-slate-200/70 via-white to-slate-50 ring-1 ring-slate-300/60 shadow-[0_18px_40px_-25px_rgba(15,23,42,0.4)]',
    accent: 'text-slate-500',
  },
  'bag-04': {
    wrapper:
      'bg-gradient-to-br from-amber-200/70 via-white to-amber-50 ring-1 ring-amber-200/60 shadow-[0_18px_40px_-25px_rgba(251,191,36,0.45)]',
    accent: 'text-amber-500',
  },
};

const defaultImageStyle = {
  wrapper:
    'bg-gradient-to-br from-gray-100 via-white to-gray-50 ring-1 ring-gray-200/60 shadow-[0_18px_40px_-25px_rgba(148,163,184,0.55)]',
  accent: 'text-gray-400',
};

const formatCurrency = value =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(value);

export default function SavedCart() {
  const [items, setItems] = useState(savedItemsSeed);
  const summary = items.reduce(
    (acc, item) => {
      acc.totalItems += item.quantity;
      acc.totalPrice += item.price * item.quantity;
      if (item.originalPrice && item.originalPrice > item.price) {
        acc.totalSavings += (item.originalPrice - item.price) * item.quantity;
      }
      if (item.status !== 'in-stock') {
        acc.stockAlerts += 1;
      }
      return acc;
    },
    {
      totalItems: 0,
      totalPrice: 0,
      totalSavings: 0,
      stockAlerts: 0,
    },
  );

  const statusBreakdown = items.reduce((acc, item) => {
    acc[item.status] = (acc[item.status] || 0) + 1;
    return acc;
  }, {});
  const hasItems = items.length > 0;
  const [showSummary, setShowSummary] = useState(false);

  // Close overlay with Escape
  useEffect(() => {
    if (!showSummary) return;
    const onKey = e => {
      if (e.key === 'Escape') setShowSummary(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [showSummary]);

  return (
    <>
      {/* Summary overlay */}
      {showSummary && (
        <div
          className='fixed inset-0 z-40 bg-black/30 backdrop-blur-sm'
          onClick={() => setShowSummary(false)}
        >
          <div
            className='absolute top-4 right-4 w-[min(92vw,440px)] overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-2xl ring-1 ring-black/5 transition sm:top-8 sm:right-8'
            onClick={e => e.stopPropagation()}
          >
            <div className='relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-4 text-white'>
              <div className='flex items-start justify-between'>
                <div className='flex items-center gap-3'>
                  <span className='inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/20'>
                    <PieChart size={18} />
                  </span>
                  <div>
                    <p className='text-[11px] font-semibold tracking-wider text-white/80 uppercase'>
                      Saved cart
                    </p>
                    <h2 className='text-lg font-bold'>Summary</h2>
                  </div>
                </div>
                <button
                  type='button'
                  onClick={() => setShowSummary(false)}
                  className='rounded-full p-2 text-white/80 transition hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:outline-none'
                  aria-label='Close summary'
                >
                  <X size={18} />
                </button>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-3 p-6 pb-2'>
              <div className='rounded-2xl border border-gray-100 bg-gray-50/60 p-4'>
                <p className='text-xs font-medium tracking-wide text-gray-500 uppercase'>
                  Items saved
                </p>
                <p className='mt-1 text-2xl font-semibold text-gray-900'>
                  {summary.totalItems}
                </p>
                <p className='text-[11px] text-gray-500'>
                  Across {items.length} products
                </p>
              </div>
              <div className='rounded-2xl border border-gray-100 bg-gray-50/60 p-4'>
                <p className='text-xs font-medium tracking-wide text-gray-500 uppercase'>
                  Potential spend
                </p>
                <p className='mt-1 text-2xl font-semibold text-gray-900'>
                  {formatCurrency(summary.totalPrice)}
                </p>
                {summary.totalSavings > 0 ? (
                  <p className='text-[11px] text-emerald-600'>
                    Save {formatCurrency(summary.totalSavings)}
                  </p>
                ) : (
                  <p className='text-[11px] text-gray-500'>
                    No current savings
                  </p>
                )}
              </div>
              <div className='col-span-2 rounded-2xl border border-gray-100 bg-gray-50/60 p-4'>
                <p className='text-xs font-medium tracking-wide text-gray-500 uppercase'>
                  Average per item
                </p>
                <p className='mt-1 text-2xl font-semibold text-gray-900'>
                  {summary.totalItems
                    ? formatCurrency(summary.totalPrice / summary.totalItems)
                    : '$0.00'}
                </p>
              </div>
            </div>
            <div className='px-6 pb-6'>
              <p className='text-xs font-semibold tracking-wide text-gray-500 uppercase'>
                By stock status
              </p>
              <div className='mt-2 space-y-2'>
                {['in-stock', 'low-stock', 'out-of-stock'].map(id => {
                  const count = statusBreakdown[id] || 0;
                  if (count === 0) return null;
                  const style = statusStyles[id];
                  const Icon = style.icon;
                  const percent = items.length
                    ? Math.round((count / items.length) * 100)
                    : 0;
                  return (
                    <div
                      key={id}
                      className='rounded-xl border border-gray-100 bg-white p-3'
                    >
                      <div className='flex items-center gap-2'>
                        <span
                          className={`inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-[11px] font-semibold ${style.pill}`}
                        >
                          <Icon size={12} />
                          {style.label}
                        </span>
                        <div className='ml-auto text-right'>
                          <div className='text-sm font-semibold text-gray-900'>
                            {count}
                          </div>
                          <div className='text-[11px] text-gray-500'>
                            {percent}%
                          </div>
                        </div>
                      </div>
                      <div className='mt-2 h-1.5 w-full overflow-hidden rounded-full bg-gray-100'>
                        <div
                          className={`h-full bg-gradient-to-r ${style.gradient}`}
                          style={{ width: `${percent}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      <section className='max-w-6xl'>
        {/* Header bar with summary button */}
        <div className='items- my-6 flex justify-between'>
          <div>
            <h1 className='text-xl font-bold text-gray-900'>My Wishlist</h1>
            <p className='mt-1 text-sm text-gray-600'>
              Keep tabs on items and move to cart when ready.
            </p>
          </div>
          <button
            type='button'
            onClick={() => setShowSummary(true)}
            className='inline-flex h-fit items-center gap-2 rounded-full border-[0.5px] border-purple-600 bg-white px-4 py-2 text-sm font-semibold whitespace-nowrap text-purple-700 transition hover:border-blue-300 hover:bg-blue-50 cursor-pointer'
          >
            View summary
          </button>
        </div>

        {hasItems && (
          <div className='mb-8 flex flex-col gap-3 rounded-3xl border border-gray-200 bg-white/80 p-4 backdrop-blur-sm md:flex-row md:items-center md:justify-between'>
            <div className='flex gap-2 text-sm text-gray-600 lg:items-center'>
              <ShieldCheck size={18} className='text-blue-400' />
              Items stay saved for 30 days. Move them to your cart any time.
            </div>
            <div className='flex gap-2'>
              <button
                type='button'
                className='inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-purple-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-purple-700 lg:w-fit'
              >
                <ShoppingCart size={16} />
                Move all to cart
              </button>
              <button
                type='button'
                className='inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-gray-200 bg-gray-100 px-5 py-2 text-sm font-semibold text-gray-700 transition hover:border-blue-200 hover:bg-gray-200 hover:text-purple-600'
              >
                <Share2 size={16} />
                <span className='hidden lg:block'>Share list</span>
              </button>
            </div>
          </div>
        )}

        {hasItems ? (
          <ul className='grid gap-6 lg:grid-cols-2'>
            {items.map(item => {
              const statusStyle =
                statusStyles[item.status] || statusStyles['in-stock'];
              const StatusIcon = statusStyle.icon;
              const accentGradient =
                statusStyle.gradient || statusStyles['in-stock'].gradient;
              return (
                <li
                  key={item.id}
                  className='group relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md'
                >
                  <div
                    className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accentGradient}`}
                  />
                  <div className='flex h-full flex-col'>
                    <div className='flex flex-col gap-5 p-6 sm:flex-row sm:items-stretch sm:gap-6'>
                      <ProductImage item={item} />

                      <div className='flex min-w-0 flex-1 flex-col gap-5'>
                        <div className='min-w-0 space-y-4'>
                          <div className='flex flex-wrap items-start justify-between gap-3'>
                            <div className='min-w-0 space-y-2'>
                              <h3 className='line-clamp-2 text-lg font-semibold text-gray-900'>
                                {item.name}
                              </h3>
                              {item.variant ? (
                                <p className='text-sm text-gray-500'>
                                  {item.variant}
                                </p>
                              ) : null}
                            </div>
                            <div className='flex items-center gap-2.5'>
                              {item.originalPrice &&
                              item.originalPrice > item.price ? (
                                <p className='text-sm text-gray-400 line-through'>
                                  {formatCurrency(item.originalPrice)}
                                </p>
                              ) : null}
                              <p className='text-lg font-semibold text-gray-900'>
                                {formatCurrency(item.price)}
                              </p>
                            </div>
                          </div>

                          <div className='flex flex-wrap items-center gap-2'>
                            <span
                              className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${statusStyle.pill}`}
                            >
                              <StatusIcon size={14} />
                              {statusStyle.label}
                            </span>
                            {item.delivery ? (
                              <span className='inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600'>
                                <Truck size={14} className='text-gray-400' />
                                {item.delivery}
                              </span>
                            ) : null}
                            {item.eta ? (
                              <span className='inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600'>
                                <Clock size={14} className='text-gray-400' />
                                {item.eta}
                              </span>
                            ) : null}
                          </div>

                          {item.highlights?.length ? (
                            <ul className='flex flex-wrap gap-2 text-xs text-gray-600'>
                              {item.highlights.map(highlight => (
                                <li
                                  key={highlight}
                                  className='inline-flex items-center gap-1 rounded-full border border-gray-200 px-3 py-1'
                                >
                                  <ShieldCheck
                                    size={12}
                                    className='text-blue-400'
                                  />
                                  {highlight}
                                </li>
                              ))}
                            </ul>
                          ) : null}
                        </div>
                      </div>
                    </div>

                    <div className='mt-auto flex gap-3 border-t border-gray-100 bg-white/90 p-4 sm:items-center sm:justify-between sm:gap-4'>
                      <div
                        className={`inline-flex w-fit shrink-0 items-center rounded-full border ${statusStyle.disabled ? 'border-gray-200 bg-gray-50' : 'border-gray-200 bg-white/90'} text-gray-700`}
                      >
                        <button
                          type='button'
                          aria-label='Decrease quantity'
                          disabled={statusStyle.disabled || item.quantity <= 1}
                          onClick={() =>
                            setItems(prev =>
                              prev.map(it =>
                                it.id === item.id
                                  ? {
                                      ...it,
                                      quantity: Math.max(
                                        1,
                                        (it.quantity || 1) - 1,
                                      ),
                                    }
                                  : it,
                              ),
                            )
                          }
                          className={`flex h-9 w-9 cursor-pointer items-center justify-center transition ${statusStyle.disabled || item.quantity <= 1 ? 'cursor-not-allowed text-gray-300' : 'text-gray-400 hover:text-blue-500'}`}
                        >
                          <Minus size={16} />
                        </button>
                        <input
                          type='text'
                          inputMode='numeric'
                          min={1}
                          max={99}
                          value={item.quantity}
                          onChange={e => {
                            const val = parseInt(
                              e.target.value.replace(/[^0-9]/g, ''),
                              10,
                            );
                            setItems(prev =>
                              prev.map(it =>
                                it.id === item.id
                                  ? {
                                      ...it,
                                      quantity: isNaN(val)
                                        ? 1
                                        : Math.min(99, Math.max(1, val)),
                                    }
                                  : it,
                              ),
                            );
                          }}
                          className={`w-12 appearance-none border-0 bg-transparent px-1 text-center text-sm font-semibold focus:outline-none ${statusStyle.disabled ? 'text-gray-400' : 'text-gray-900'}`}
                          aria-label='Quantity'
                          disabled={statusStyle.disabled}
                        />
                        <button
                          type='button'
                          aria-label='Increase quantity'
                          disabled={statusStyle.disabled || item.quantity >= 99}
                          onClick={() =>
                            setItems(prev =>
                              prev.map(it =>
                                it.id === item.id
                                  ? {
                                      ...it,
                                      quantity: Math.min(
                                        99,
                                        (it.quantity || 1) + 1,
                                      ),
                                    }
                                  : it,
                              ),
                            )
                          }
                          className={`flex h-9 w-9 cursor-pointer items-center justify-center transition ${statusStyle.disabled || item.quantity >= 99 ? 'cursor-not-allowed text-gray-300' : 'text-gray-400 hover:text-blue-500'}`}
                        >
                          <Plus size={16} />
                        </button>
                      </div>

                      <div className='flex w-full justify-end sm:w-auto'>
                        <div className='inline-flex items-center sm:gap-1 rounded-xl bg-gray-100 p-1 shadow-inner'>
                          {statusStyle.disabled ? (
                            <button
                              type='button'
                              title='Notify when available'
                              aria-label='Notify when available'
                              className='inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-amber-700 transition-colors hover:bg-white'
                            >
                              <BellRing size={14} />
                              Notify
                            </button>
                          ) : (
                            <button
                              type='button'
                              title='Move to cart'
                              aria-label='Move to cart'
                              className='inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-purple-700 transition-colors hover:bg-white'
                            >
                              <ShoppingCart size={14} />
                              Move
                            </button>
                          )}
                          <button
                            type='button'
                            title='Remove from saved'
                            aria-label='Remove from saved'
                            className='inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-red-600 transition-colors hover:bg-white'
                          >
                            <Trash2 size={14} />
                            <span className='hidden sm:block'>Remove</span>
                          </button>
                          <button
                            type='button'
                            title='Share item'
                            aria-label='Share item'
                            className='inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-gray-700 transition-colors hover:bg-white'
                          >
                            <Share2 size={14} />
                            <span className='hidden sm:block'>Share</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <div className='rounded-3xl border border-dashed border-gray-300 bg-white p-12 text-center shadow-sm'>
            <ShoppingCart size={48} className='mx-auto text-gray-300' />
            <h3 className='mt-4 text-lg font-semibold text-gray-900'>
              Nothing saved yet
            </h3>
            <p className='mt-2 text-sm text-gray-600'>
              Browse products and tap{' '}
              <span className='font-semibold'>Save for later</span> to build
              your list.
            </p>
            <button
              type='button'
              className='group mt-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-6 py-3 text-sm font-semibold text-blue-600 shadow-sm transition hover:bg-blue-200'
            >
              <ShoppingCart
                size={16}
                className='transition group-hover:scale-110'
              />
              Start shopping
            </button>
          </div>
        )}
      </section>
    </>
  );
}

const ProductImage = ({ item }) => {
  const [hasError, setHasError] = useState(false);
  const style = imageStyles[item.id] || defaultImageStyle;

  return (
    <div className='relative mx-auto w-full max-w-[184px] sm:mx-0 sm:flex-shrink-0'>
      <div
        className={`relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/60 p-4 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl ${style.wrapper}`}
      >
        {item.badges?.length ? (
          <div className='absolute top-3 left-3 z-10 flex flex-col gap-2'>
            {item.badges.map(badge => (
              <span
                key={badge}
                className='inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-700 shadow-sm'
              >
                <Tag size={12} className={style.accent} />
                {badge}
              </span>
            ))}
          </div>
        ) : null}

        {hasError ? (
          <div className='relative z-[1] flex h-full w-full flex-col items-center justify-center gap-2 rounded-2xl bg-white/75 text-center'>
            <ImageOff size={24} className={style.accent} />
            <span className='text-xs font-semibold text-gray-500'>
              Image unavailable
            </span>
          </div>
        ) : (
          <img
            src={item.image}
            alt={item.name}
            loading='lazy'
            onError={() => setHasError(true)}
            className='relative z-[1] h-full w-full object-contain drop-shadow-md transition duration-300 group-hover:scale-105'
          />
        )}

        <div
          className='pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/40'
          aria-hidden='true'
        />
      </div>
    </div>
  );
};
