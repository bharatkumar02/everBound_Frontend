import { useParams } from 'react-router-dom';
import {
  ArrowLeft,
  Package,
  Truck,
  CheckCircle,
  XCircle,
  Download,
  Star,
  MessageCircle,
  Calendar,
  MapPin,
  CreditCard,
  Copy,
} from 'lucide-react';

import { statusStyles, findOrderById } from '../orderData.js';

const formatDate = date =>
  new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

export default function OrderDetail() {
  const { orderId } = useParams();
  const order = findOrderById(orderId);

  if (!order) {
    return (
      <div className='min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100'>
        <div className='mx-auto max-w-4xl px-4 py-10 lg:px-8'>
          <div className='rounded-3xl border border-dashed border-blue-200 bg-white p-12 text-center shadow-sm'>
            <Package size={48} className='mx-auto text-blue-300' />
            <h3 className='mt-4 text-lg font-semibold text-gray-900'>
              Order not found
            </h3>
            <p className='mt-2 text-sm text-gray-600'>
              The order you're looking for doesn't exist or has been removed.
            </p>
            <button
              onClick={() => navigate('/customer/orders')}
              className='mt-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-6 py-3 text-sm font-semibold text-blue-600 shadow-sm transition hover:bg-blue-200'
            >
              <ArrowLeft size={16} />
              Back to Orders
            </button>
          </div>
        </div>
      </div>
    );
  }

  const style = statusStyles[order.status] || statusStyles['in-progress'];
  const StatusIcon = style.icon;
  const subtotal = order.items.reduce(
    (sum, it) => sum + it.price * (it.quantity || 1),
    0,
  );
  const shipping = 0;
  const tax = 0;

  const hasShipped = Boolean(order.trackingNumber);
  const currentStep =
    order.status === 'delivered'
      ? 4
      : order.status === 'cancelled'
        ? 0
        : hasShipped
          ? 3
          : 2;
  const steps = [
    { key: 'placed', label: 'Placed' },
    { key: 'processing', label: 'Processing' },
    { key: 'shipped', label: 'Shipped' },
    {
      key: order.status === 'cancelled' ? 'cancelled' : 'delivered',
      label: order.status === 'cancelled' ? 'Cancelled' : 'Delivered',
    },
  ];

  return (
    <section className='max-w-4xl'>
      {/* Header */}
      <div className='mb-8 flex items-center gap-4'>
        
        <div>
          <h1 className='text-2xl font-bold text-gray-900'>Order Details</h1>
          <p className='flex items-center gap-2 text-sm text-gray-600'>
            <span>Order ID:</span>
            <span className='font-mono text-gray-800'>{order.id}</span>
            <button
              type='button'
              className='inline-flex items-center gap-1 rounded-full border border-gray-200 bg-white px-2 py-0.5 text-xs font-medium text-gray-600 transition hover:border-blue-300 hover:bg-blue-50 cursor-pointer hover:text-blue-700'
              onClick={() => navigator.clipboard?.writeText(order.id)}
              title='Copy order ID'
              aria-label='Copy order ID'
            >
              <Copy size={12} /> Copy
            </button>
          </p>
        </div>
      </div>

      {/* Order Status Card */}
      <div className='mb-8 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm'>
        <div className={`h-1 bg-gradient-to-r ${style.accent}`} />
        <div className='p-6'>
          <div className='flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between'>
            <div className='flex items-center gap-4'>
              <div className='flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm'>
                <StatusIcon
                  size={26}
                  className={
                    style.pill
                      .split(' ')
                      .find(token => token.startsWith('text-')) ||
                    'text-blue-500'
                  }
                />
              </div>
              <div>
                <div className='flex items-center gap-2'>
                  <span
                    className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-semibold ${style.pill} ${style.ring}`}
                  >
                    <StatusIcon size={16} />
                    {style.label}
                  </span>
                  <span className='text-sm text-gray-500'>
                    {formatDate(order.date)}
                  </span>
                </div>
                <p className='mt-1 text-sm text-gray-600'>
                  {order.status === 'delivered' &&
                    order.deliveredDate &&
                    `Delivered on ${formatDate(order.deliveredDate)}`}
                  {order.status === 'in-progress' &&
                    order.estimatedDelivery &&
                    `Estimated delivery: ${formatDate(order.estimatedDelivery)}`}
                  {order.status === 'cancelled' &&
                    order.cancelledDate &&
                    `Cancelled on ${formatDate(order.cancelledDate)}`}
                </p>
              </div>
            </div>
            <div className='text-right'>
              <p className='text-2xl font-bold text-gray-900'>
                ${order.total.toFixed(2)}
              </p>
              <p className='text-sm text-gray-500'>
                {order.items.length} items
              </p>
            </div>
          </div>
          {/* Progress timeline */}
          <div className='mt-6'>
            <ol className='grid grid-cols-4 gap-2'>
              {steps.map((s, idx) => {
                const stepIndex = idx + 1;
                const isDone =
                  order.status === 'cancelled'
                    ? idx === 0
                    : stepIndex <= currentStep;
                const isActive =
                  stepIndex === currentStep && order.status !== 'cancelled';
                const color = order.status === 'cancelled' ? 'rose' : 'blue';
                return (
                  <li key={s.key} className='text-center'>
                    <div
                      className={`mx-auto flex h-8 w-8 items-center justify-center rounded-full border shadow-sm ${
                        isDone
                          ? order.status === 'cancelled'
                            ? 'border-rose-400 bg-rose-50 text-rose-600'
                            : 'border-blue-400 bg-blue-50 text-blue-600'
                          : 'border-gray-200 bg-white text-gray-400'
                      }`}
                    >
                      {isDone ? '✓' : idx + 1}
                    </div>
                    <div className='mt-1 text-xs font-medium text-gray-600'>
                      {s.label}
                    </div>
                  </li>
                );
              })}
            </ol>
            <div className='mt-3 h-1.5 w-full overflow-hidden rounded-full bg-gray-100'>
              <div
                className={`h-full bg-gradient-to-r ${style.accent}`}
                style={{
                  width: `${order.status === 'cancelled' ? 25 : (currentStep / 4) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Order Items */}
      <div className='mb-8 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm'>
        <div className='border-b border-gray-100 bg-gray-50 px-6 py-4'>
          <h2 className='text-lg font-semibold text-gray-900'>Order Items</h2>
        </div>
        <div className='p-6'>
          <div className='space-y-4'>
            {order.items.map((item, index) => (
              <div
                key={index}
                className='flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-4'
              >
                <div className='h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl bg-gray-100'>
                  <img
                    src={item.image}
                    alt={item.name}
                    className='h-full w-full object-cover'
                  />
                </div>
                <div className='flex-1'>
                  <h3 className='font-medium text-gray-900'>{item.name}</h3>
                  <p className='text-sm text-gray-500'>
                    SKU: {item.sku || 'N/A'}
                  </p>
                </div>
                <div className='text-right'>
                  <p className='font-semibold text-gray-900'>
                    ${item.price.toFixed(2)}
                  </p>
                  <p className='text-sm text-gray-500'>
                    Qty: {item.quantity || 1}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Order Information */}
      <div className='mb-8 grid gap-6 lg:grid-cols-2'>
        {/* Shipping Information */}
        <div className='overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm'>
          <div className='border-b border-gray-100 bg-gray-50 px-6 py-4'>
            <h2 className='text-lg font-semibold text-gray-900'>
              Shipping Information
            </h2>
          </div>
          <div className='space-y-4 p-6'>
            <div className='flex items-start gap-3'>
              <MapPin size={20} className='mt-0.5 text-gray-400' />
              <div>
                <p className='text-sm font-medium text-gray-900'>
                  Shipping Address
                </p>
                <p className='text-sm text-gray-600'>{order.shippingAddress}</p>
              </div>
            </div>
            {order.trackingNumber && (
              <div className='flex items-start gap-3'>
                <Truck size={20} className='mt-0.5 text-gray-400' />
                <div>
                  <p className='text-sm font-medium text-gray-900'>
                    Tracking Number
                  </p>
                  <p className='font-mono text-sm text-gray-600'>
                    {order.trackingNumber}
                  </p>
                </div>
              </div>
            )}
            {order.estimatedDelivery && !order.deliveredDate && (
              <div className='flex items-start gap-3'>
                <Calendar size={20} className='mt-0.5 text-amber-500' />
                <div>
                  <p className='text-sm font-medium text-gray-900'>
                    Estimated Delivery
                  </p>
                  <p className='text-sm text-gray-600'>
                    {formatDate(order.estimatedDelivery)}
                  </p>
                </div>
              </div>
            )}
            {order.deliveredDate && (
              <div className='flex items-start gap-3'>
                <CheckCircle size={20} className='mt-0.5 text-emerald-500' />
                <div>
                  <p className='text-sm font-medium text-gray-900'>
                    Delivered On
                  </p>
                  <p className='text-sm text-gray-600'>
                    {formatDate(order.deliveredDate)}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Payment Information */}
        <div className='overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm'>
          <div className='border-b border-gray-100 bg-gray-50 px-6 py-4'>
            <h2 className='text-lg font-semibold text-gray-900'>
              Payment Information
            </h2>
          </div>
          <div className='space-y-4 p-6'>
            <div className='flex items-start gap-3'>
              <CreditCard size={20} className='mt-0.5 text-gray-400' />
              <div>
                <p className='text-sm font-medium text-gray-900'>
                  Payment Method
                </p>
                <p className='text-sm text-gray-600'>{order.paymentMethod}</p>
              </div>
            </div>
            {order.cancelReason && (
              <div className='flex items-start gap-3'>
                <XCircle size={20} className='mt-0.5 text-rose-500' />
                <div>
                  <p className='text-sm font-medium text-gray-900'>
                    Cancellation Reason
                  </p>
                  <p className='text-sm text-gray-600'>{order.cancelReason}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Totals */}
      <div className='mb-10 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm'>
        <div className='border-b border-gray-100 bg-gray-50 px-6 py-4'>
          <h2 className='text-lg font-semibold text-gray-900'>Order Summary</h2>
        </div>
        <div className='p-6'>
          <dl className='space-y-3 text-sm'>
            <div className='flex items-center justify-between'>
              <dt className='text-gray-600'>Subtotal</dt>
              <dd className='font-medium text-gray-900'>
                ${subtotal.toFixed(2)}
              </dd>
            </div>
            <div className='flex items-center justify-between'>
              <dt className='text-gray-600'>Shipping</dt>
              <dd className='font-medium text-gray-900'>
                {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
              </dd>
            </div>
            <div className='flex items-center justify-between'>
              <dt className='text-gray-600'>Tax</dt>
              <dd className='font-medium text-gray-900'>${tax.toFixed(2)}</dd>
            </div>
            <div className='mt-4 flex items-center justify-between border-t pt-3'>
              <dt className='text-base font-semibold text-gray-900'>Total</dt>
              <dd className='text-base font-bold text-gray-900'>
                ${order.total.toFixed(2)}
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Action Buttons */}
      <div className='flex gap-4 *:w-1/2 *:lg:w-fit'>
        {order.status === 'delivered' ? (
          <button className='inline-flex justify-center h-11 items-center gap-2 rounded-lg border border-amber-200 bg-amber-50 px-3.5 lg:px-6 text-sm font-semibold text-amber-600 transition-colors duration-200 hover:border-amber-300 hover:bg-amber-100'>
            <Star size={16} />
            Rate Order
          </button>
        ) : order.status === 'in-progress' ? (
          <button className='inline-flex justify-center h-11 items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-3.5 lg:px-6 text-sm font-semibold text-blue-600 transition-colors duration-200 hover:border-blue-300 hover:bg-blue-100'>
            <Truck size={16} />
            Track Package
          </button>
        ) : (
          <button className='inline-flex justify-center h-11 items-center gap-2 rounded-lg border border-gray-200 bg-gray-100 px-3.5 lg:px-6 text-sm font-semibold text-gray-600 transition-colors duration-200 hover:border-gray-300 hover:bg-gray-200 hover:text-gray-700'>
            <Download size={16} />
            Download Invoice
          </button>
        )}
        <button className='inline-flex justify-center h-11 items-center gap-2 rounded-lg border border-gray-200 bg-gray-100 px-3.5 lg:px-6 text-sm font-semibold text-gray-700 transition-colors duration-200 hover:border-gray-300 hover:bg-gray-200 hover:text-gray-900'>
          <MessageCircle size={16} />
          Contact Support
        </button>
      </div>
    </section>
  );
}
