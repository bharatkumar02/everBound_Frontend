import { Clock, CheckCircle, XCircle } from 'lucide-react';

export const orders = [
  {
    id: 'ABC-6542398',
    status: 'in-progress',
    date: '2024-01-15',
    items: [
      { name: 'Screen Protector', price: 9.99, image: '/images/f-1.jpg' },
    ],
    total: 469.95,
    shippingAddress: '123 Main St, New York, NY 10001',
    paymentMethod: 'Credit Card ending in 4242',
    trackingNumber: 'TRK123456789',
    estimatedDelivery: '2024-01-20',
  },
  {
    id: 'ABC-6542399',
    status: 'delivered',
    date: '2024-01-10',
    items: [
      { name: 'Gaming Laptop', price: 1299.99, image: '/images/f-1.jpg' },
    ],
    total: 1299.99,
    shippingAddress: '456 Oak Ave, Los Angeles, CA 90210',
    paymentMethod: 'PayPal',
    trackingNumber: 'TRK987654321',
    deliveredDate: '2024-01-12',
  },
  {
    id: 'ABC-6542400',
    status: 'cancelled',
    date: '2024-01-08',
    items: [
      { name: 'Mechanical Keyboard', price: 149.99, image: '/images/f-1.jpg' },
    ],
    total: 179.98,
    shippingAddress: '789 Pine St, Chicago, IL 60601',
    paymentMethod: 'Credit Card ending in 1234',
    cancelledDate: '2024-01-09',
    cancelReason: 'Customer request',
  },
  {
    id: 'ABC-6542401',
    status: 'delivered',
    date: '2024-01-05',
    items: [
      { name: 'Protective Case', price: 39.99, image: '/images/f-1.jpg' },
    ],
    total: 939.97,
    shippingAddress: '321 Elm St, Miami, FL 33101',
    paymentMethod: 'Apple Pay',
    trackingNumber: 'TRK456789123',
    deliveredDate: '2024-01-07',
  },
];

export const statusStyles = {
  'in-progress': {
    label: 'In Progress',
    icon: Clock,
    accent: 'from-amber-400 via-amber-200 to-transparent',
    pill: 'bg-amber-50 text-amber-600',
    badge: 'bg-amber-100 text-amber-600',
    ring: 'ring-amber-200',
  },
  delivered: {
    label: 'Delivered',
    icon: CheckCircle,
    accent: 'from-emerald-400 via-emerald-200 to-transparent',
    pill: 'bg-emerald-50 text-emerald-600',
    badge: 'bg-emerald-100 text-emerald-600',
    ring: 'ring-emerald-200',
  },
  cancelled: {
    label: 'Cancelled',
    icon: XCircle,
    accent: 'from-rose-400 via-rose-200 to-transparent',
    pill: 'bg-rose-50 text-rose-600',
    badge: 'bg-rose-100 text-rose-600',
    ring: 'ring-rose-200',
  },
};

export const findOrderById = id => orders.find(order => order.id === id);
