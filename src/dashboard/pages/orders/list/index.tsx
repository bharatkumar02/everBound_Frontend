import { useEffect, useMemo, useState } from 'react';
import { PieChart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import {
  Package,
  ShoppingCart,
  Search,
  RefreshCw,
  Eye,
  Clock,
  CheckCircle,
  XCircle,
  Truck,
  MoreHorizontal,
  X,
} from 'lucide-react';
import { orders, statusStyles } from '../orderData.js';

const formatDate = date =>
  new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

export default function Order() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
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

  // Flatten orders into item-level entries so each card is one item
  const orderItems = useMemo(
    () =>
      orders.flatMap(order =>
        order.items.map((item, index) => ({
          id: `${order.id}-${index + 1}`,
          orderId: order.id,
          status: order.status,
          date: order.date,
          item,
          total: item.price,
          shippingAddress: order.shippingAddress,
          paymentMethod: order.paymentMethod,
          trackingNumber: order.trackingNumber,
          estimatedDelivery: order.estimatedDelivery,
          deliveredDate: order.deliveredDate,
          cancelledDate: order.cancelledDate,
        })),
      ),
    [],
  );

  const summary = useMemo(
    () =>
      orderItems.reduce(
        (acc, entry) => {
          acc.totalOrders += 1;
          acc.totalValue += entry.total;
          acc.statusCounts[entry.status] =
            (acc.statusCounts[entry.status] || 0) + 1;
          return acc;
        },
        { totalOrders: 0, totalValue: 0, statusCounts: {} },
      ),
    [orderItems],
  );

  const statusBreakdown = useMemo(
    () =>
      Object.keys(statusStyles).map(status => ({
        id: status,
        label: statusStyles[status].label,
        count: orderItems.filter(entry => entry.status === status).length,
        icon: statusStyles[status].icon,
      })),
    [orderItems],
  );

  const filterOptions = useMemo(
    () => [
      {
        id: 'all',
        label: 'All Orders',
        count: orderItems.length,
        icon: Package,
      },
      ...statusBreakdown,
    ],
    [statusBreakdown, orderItems.length],
  );

  const filteredOrders = useMemo(() => {
    const lower = searchTerm.toLowerCase();
    return orderItems.filter(entry => {
      const matchesFilter =
        activeFilter === 'all' || entry.status === activeFilter;
      const matchesSearch =
        entry.orderId.toLowerCase().includes(lower) ||
        entry.id.toLowerCase().includes(lower) ||
        entry.item.name.toLowerCase().includes(lower);
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchTerm, orderItems]);

  const handleViewDetails = orderId => {
    navigate(`/customer/orders/${orderId}`);
  };

  return (
    <>
      {showSummary && (
        <div
          className='fixed inset-0 z-40 bg-black/30 backdrop-blur-sm'
          onClick={() => setShowSummary(false)}
        >
          <div
            className='absolute top-1/2 left-1/2 w-[min(92vw,440px)] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-black/5 transition-all'
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className='relative bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 p-4 text-white'>
              <div className='flex items-start justify-between'>
                <div className='flex items-center gap-3'>
                  <span className='inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/20'>
                    <PieChart size={18} />
                  </span>
                  <div>
                    <p className='text-[11px] font-semibold tracking-wider text-white/80 uppercase'>
                      Order summary
                    </p>
                    <h2 className='text-lg font-bold'>This period</h2>
                  </div>
                </div>
                <button
                  type='button'
                  onClick={() => setShowSummary(false)}
                  className='rounded-full p-2 text-white/80 transition bg-white/10 hover:text-white cursor-pointer'
                  aria-label='Close summary'
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            <div className='grid grid-cols-2 gap-3 p-6 pb-2'>
              <div className='rounded-2xl border border-gray-100 bg-gray-50/60 p-4'>
                <p className='text-xs font-medium tracking-wide text-gray-500 uppercase'>
                  Items
                </p>
                <p className='mt-1 text-2xl font-semibold text-gray-900'>
                  {summary.totalOrders}
                </p>
              </div>
              <div className='rounded-2xl border border-gray-100 bg-gray-50/60 p-4'>
                <p className='text-xs font-medium tracking-wide text-gray-500 uppercase'>
                  Spent
                </p>
                <p className='mt-1 text-2xl font-semibold text-gray-900'>
                  ${summary.totalValue.toFixed(2)}
                </p>
              </div>
              <div className='col-span-2 rounded-2xl border border-gray-100 bg-gray-50/60 p-4'>
                <p className='text-xs font-medium tracking-wide text-gray-500 uppercase'>
                  Average per item
                </p>
                <p className='mt-1 text-2xl font-semibold text-gray-900'>
                  $
                  {summary.totalOrders
                    ? (summary.totalValue / summary.totalOrders).toFixed(2)
                    : '0.00'}
                </p>
              </div>
            </div>

            <div className='px-6 pb-2'>
              <p className='text-xs font-semibold tracking-wide text-gray-500 uppercase'>
                By status
              </p>
              <div className='mt-2 space-y-2'>
                {Object.keys(statusStyles).map(id => {
                  const count = summary.statusCounts[id] || 0;
                  const style = statusStyles[id];
                  const Icon = style.icon;
                  const percent = summary.totalOrders
                    ? Math.round((count / summary.totalOrders) * 100)
                    : 0;
                  return (
                    <div
                      key={id}
                      className='rounded-xl border border-gray-100 bg-white p-3'
                    >
                      <div className='flex items-center gap-2'>
                        <span
                          className={`inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-[11px] font-semibold ${style.pill} ${style.ring}`}
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
                          className={`h-full bg-gradient-to-r ${style.accent}`}
                          style={{ width: `${percent}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Footer space intentionally minimal for a cleaner look */}
          </div>
        </div>
      )}

      <section className='max-w-6xl'>
        {/* Header bar with summary button */}
        <div className='my-6 flex items-center justify-between'>
          <div>
            <h1 className='text-xl font-bold text-gray-900'>My Orders</h1>
            <p className='mt-1 text-sm text-gray-600'>
              Track items, status and invoices.
            </p>
          </div>
          <button
            type='button'
            onClick={() => setShowSummary(true)}
            className='inline-flex cursor-pointer items-center gap-2 rounded-full border-[0.5px] border-purple-500 bg-white px-4 py-2 text-sm font-semibold text-purple-700 transition hover:border-blue-300 hover:bg-blue-50'
          >
            View summary
          </button>
        </div>

        {/* Filters and Search */}
        <div className='mb-8 space-y-4'>
          {/* Status filter – mobile-style pill bar with horizontal scroll */}
          <div className='-mx-4 overflow-x-auto px-4'>
            <div className='scroll-hide flex snap-x snap-mandatory items-center gap-2 overflow-x-auto pb-1'>
              {filterOptions.map(option => {
                const isActive = activeFilter === option.id;
                const style = statusStyles[option.id] || {
                  pill: 'bg-blue-50 text-blue-600',
                  badge: 'bg-blue-100 text-blue-600',
                  ring: 'ring-blue-200',
                };
                const iconColour = style.pill
                  ? style.pill
                      .split(' ')
                      .find(token => token.startsWith('text-')) ||
                    'text-blue-500'
                  : 'text-blue-500';
                const OptionIcon = option.icon;

                return (
                  <button
                    key={option.id}
                    onClick={() => setActiveFilter(option.id)}
                    className={`grid cursor-pointer snap-start place-items-center rounded-full border px-3 py-2 text-sm font-medium whitespace-nowrap transition-all focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none ${
                      isActive
                        ? option.id === 'all'
                          ? 'border-transparent bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm'
                          : `border-transparent bg-white text-gray-900 shadow-sm ${style.ring}`
                        : 'border-gray-200 bg-white/70 text-gray-700 hover:border-blue-200 hover:text-blue-600'
                    }`}
                  >
                    <span className='inline-flex items-center gap-2'>
                      <OptionIcon
                        size={14}
                        className={isActive ? iconColour : 'text-gray-400'}
                      />
                      <span>{option.label}</span>
                      <span
                        className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                          isActive
                            ? option.id === 'all'
                              ? 'bg-white/20 text-white'
                              : `${style.badge} bg-opacity-40 text-gray-900`
                            : 'bg-gray-100 text-gray-500'
                        }`}
                      >
                        {option.count}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Search only (dropdown removed) */}
          <div className='relative'>
            <Search
              size={18}
              className='absolute top-1/2 left-3 -translate-y-1/2 text-gray-400'
            />
            <input
              type='text'
              placeholder='Search orders...'
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className='w-full rounded-full border border-gray-200 bg-white px-10 py-2 text-sm text-gray-700 transition focus:border-[0.5px] focus:border-purple-700 focus:ring-blue-500/20 focus:outline-none'
            />
          </div>
        </div>

        {/* Orders Grid (item-level) */}
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {filteredOrders.length > 0 ? (
            filteredOrders.map(order => (
              <CompactOrderCard
                key={order.id}
                order={order}
                onViewDetails={handleViewDetails}
              />
            ))
          ) : (
            <div className='col-span-full rounded-3xl border border-dashed border-blue-200 bg-white p-12 text-center shadow-sm'>
              <Package size={48} className='mx-auto text-blue-300' />
              <h3 className='mt-4 text-lg font-semibold text-gray-900'>
                No orders found
              </h3>
              <p className='mt-2 text-sm text-gray-600'>
                {searchTerm
                  ? 'Try adjusting your search terms'
                  : "You're all caught up. Browse products to place your first order."}
              </p>
              <button className='mt-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-6 py-3 text-sm font-semibold text-blue-600 shadow-sm transition hover:bg-blue-200'>
                <ShoppingCart size={16} />
                Start shopping
              </button>
            </div>
          )}
        </div>

        {filteredOrders.length > 0 && (
          <div className='mt-10 text-center'>
            <button className='inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-100 px-6 py-3 text-sm font-semibold text-gray-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600'>
              <RefreshCw size={16} />
              Load more orders
            </button>
          </div>
        )}
      </section>
    </>
  );
}

function CompactOrderCard({ order, onViewDetails }) {
  const style = statusStyles[order.status] || statusStyles['in-progress'];
  const StatusIcon = style.icon;

  return (
    <div className='group relative h-full overflow-hidden rounded-2xl border border-gray-100 bg-white/80 shadow-sm backdrop-blur-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md supports-[backdrop-filter]:bg-white/70'>
      <div
        className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${style.accent}`}
      />

      <div className='flex h-full flex-col p-6'>
        {/* Header */}
        <div className='mb-2 flex items-start justify-between'>
          <div>
            <div className='flex items-center gap-3'>
              <span
                className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold ${style.pill} ${style.ring}`}
              >
                <StatusIcon size={14} />
                {style.label}
              </span>
            </div>
          </div>
          <div className='flex flex-col items-end gap-1 text-right'>
            <p className='text-[11px] font-semibold tracking-wide text-gray-500 uppercase'>
              Order ID
            </p>
            <p className='font-mono text-sm font-semibold text-gray-800'>
              {order.orderId}
            </p>
            <button
              type='button'
              className='mt-1 hidden rounded-full p-1 text-gray-400 transition hover:bg-white hover:text-gray-600 focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:outline-none sm:inline-flex'
              aria-label='More options'
            >
              <MoreHorizontal size={16} />
            </button>
          </div>
        </div>

        {/* Dates stacked */}
        <div className='my-4 flex gap-4 text-xs text-gray-600 *:w-1/2'>
          <div className='rounded-md bg-gray-50 px-2 py-1.5'>
            <div className='flex items-center gap-1'>
              <Clock size={12} className='text-gray-400' />
              <span className='font-medium'>Ordered at</span>
            </div>
            <div className='mt-0.5 font-medium text-gray-700'>
              {formatDate(order.date)}
            </div>
          </div>
          <div className='rounded-md bg-gray-50 px-2 py-1.5'>
            <div className='flex items-center gap-1'>
              {order.status === 'delivered' && order.deliveredDate ? (
                <CheckCircle size={12} className='text-emerald-500' />
              ) : order.status === 'cancelled' && order.cancelledDate ? (
                <XCircle size={12} className='text-rose-500' />
              ) : order.estimatedDelivery ? (
                <Truck size={12} className='text-amber-500' />
              ) : (
                <Clock size={12} className='text-gray-400' />
              )}
              <span className='font-medium'>
                {order.status === 'delivered' && order.deliveredDate
                  ? 'Delivered at'
                  : order.status === 'cancelled' && order.cancelledDate
                    ? 'Cancelled at'
                    : order.estimatedDelivery
                      ? 'ETA'
                      : 'Status'}
              </span>
            </div>
            <div className='mt-0.5 font-medium text-gray-700'>
              {order.status === 'delivered' && order.deliveredDate ? (
                formatDate(order.deliveredDate)
              ) : order.status === 'cancelled' && order.cancelledDate ? (
                formatDate(order.cancelledDate)
              ) : order.estimatedDelivery ? (
                formatDate(order.estimatedDelivery)
              ) : (
                <span className='capitalize'>{style.label}</span>
              )}
            </div>
          </div>
        </div>

        {/* Order Item */}
        <div className='mb-4'>
          <div className='flex items-center gap-3'>
            <img
              src={order.item.image}
              alt={order.item.name}
              className='h-10 w-10 rounded-lg border border-gray-200 object-cover shadow-sm ring-1 ring-white/60'
              loading='lazy'
            />
            <div className='min-w-0'>
              <p className='truncate text-sm font-medium text-gray-900'>
                {order.item.name}
              </p>
              <p className='text-xs text-gray-500'>Qty 1</p>
            </div>
          </div>
          {order.status === 'in-progress' && (
            <div className='mt-3 h-1.5 w-full overflow-hidden rounded-full bg-amber-100'>
              <div className='h-full w-1/2 animate-pulse bg-amber-400/80' />
            </div>
          )}
        </div>

        {/* Price + Actions - segmented control style */}
        <div className='mt-1.5 flex items-center justify-between border-t-[0.5px] pt-5'>
          <div className=''>
            <div className='text-[11px] font-semibold tracking-wide text-gray-500 uppercase'>
              Item price
            </div>
            <span className='font-semibold text-gray-900'>
              ${order.total.toFixed(2)}
            </span>
          </div>
          <div className='inline-flex w-fit items-center justify-between rounded-xl bg-gray-100 p-1 shadow-inner sm:w-auto sm:justify-start'>
            {order.status === 'in-progress' && (
              <button
                type='button'
                onClick={() => onViewDetails(order.orderId)}
                className='inline-flex items-center gap-1.5 rounded-lg rounded-r-none border-r px-3 py-1.5 text-xs font-medium text-amber-700 transition-colors hover:bg-white active:scale-[0.98]'
              >
                <Truck size={14} />
                Track
              </button>
            )}
            <button
              type='button'
              onClick={() => onViewDetails(order.orderId)}
              className='inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-blue-700 transition-colors hover:bg-white active:scale-[0.98]'
            >
              <Eye size={14} />
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
