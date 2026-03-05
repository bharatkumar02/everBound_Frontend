import { Truck, ShieldCheck, BadgeIndianRupee, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CartSummary() {
  return (
    <div className='w-full space-y-2 p-5 pb-3 md:mx-auto md:max-w-[20rem] md:p-0 lg:w-full lg:max-w-[22rem] lg:pb-10'>
      {/* Delivery */}
      <div className='space-y-1 rounded-lg bg-white px-6 py-3 shadow lg:py-4'>
        <h3 className='flex items-center gap-1.5 text-[13px] font-medium text-gray-500 uppercase'>
          <Truck size={18} strokeWidth={1.8} />
          Delivery
        </h3>
        <div className='flex items-center gap-2.5'>
          {/* <Truck strokeWidth={1.5} /> */}
          <p>
            Estimate Delivered by
            <span className='pl-1 font-medium'>June 24, 2022</span>.
          </p>
        </div>
      </div>
      {/* PromoCode */}
      <div className='space-y-2 rounded-lg bg-white px-6 py-3 shadow lg:py-4'>
        <h3 className='flex items-center gap-1.5 text-[13px] font-medium text-gray-500 uppercase'>
          <Tag size={18} strokeWidth={1.8} />
          Apply Coupon
        </h3>
        <div className='flex items-center rounded-lg border-[0.5px] bg-white'>
          <input
            type='text'
            className='w-full rounded-lg p-2 outline-none placeholder:tracking-widest'
            placeholder='Promocode'
          />
          <button className='m-[0.15rem] rounded-lg border-[0.5px] bg-gray-100 px-3 py-1.5'>
            Apply
          </button>
        </div>
      </div>

      {/* Subototal */}
      <div className='space-y-2 rounded-lg bg-white px-6 py-3 shadow lg:py-4'>
        <div className='flex items-center justify-between text-[13px] font-medium text-gray-500 uppercase'>
          <span className='flex items-center gap-1.5'>
            <BadgeIndianRupee size={18} /> Price Detail
          </span>
          <span>2 Items</span>
        </div>
        <ul className='*:flex *:items-center *:justify-between *:py-2'>
          <li>
            <span>Total price:</span>
            <span>$16.19</span>
          </li>
          <li>
            <span>Discount:</span>
            <span>-$5.00</span>
          </li>
          <li>
            <span>Delivery:</span>
            <span className='rounded-lg'>Free</span>
          </li>
        </ul>
      </div>

      {/* Total */}
      <div className='flex items-center justify-between rounded-lg bg-white px-6 py-3 text-lg font-medium shadow'>
        <span>Total</span>
        <span>₹ 8200</span>
      </div>

      <div className='flex items-start gap-1 px-6 py-3 pt-2 text-[14px] font-medium text-gray-500 lg:px-0 lg:py-4'>
        <ShieldCheck className='text-green-600/70 drop-shadow-md' /> Shop Safe.
        Return Easy. 100% Genuine Items.
      </div>
      <button className='hidden w-full rounded-lg border-[0.5px] bg-purple-700 px-6 py-3 text-base text-white md:block lg:py-3'>
        <Link to='/checkout'>Checkout</Link>
      </button>
    </div>
  );
}
