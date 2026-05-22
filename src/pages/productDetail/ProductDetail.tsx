import ProductCrousel from '../../components/layout/productCrousel/ProductCrousel';
import { SwiperSlide } from 'swiper/react';
import CustomerReview from './CustomerReview';
import {
  CloudUpload,
  Heart,
  Plus,
  Minus,
  Star,
  Layers2,
  Brush,
  Palette,
  PencilRuler,
} from 'lucide-react';

interface RelatedProduct {
  id: number;
  name: string;
  img: string;
}

const relatedProducts: RelatedProduct[] = [
  { id: 1, name: 'Wooden Frame (1 Photo)', img: '/images/f-1.jpg' },
  { id: 2, name: 'Classic Wall Frame', img: '/images/f-2.jpg' },
  { id: 3, name: 'Rustic Table Frame', img: '/images/f-3.jpg' },
  { id: 4, name: 'Minimalist Frame', img: '/images/f-4.jpg' },
  { id: 5, name: 'Vintage Oak Frame', img: '/images/f-5.jpg' },
  { id: 6, name: 'Modern Slim Frame', img: '/images/f-6.jpg' },
];

const features = [
  { icon: <Layers2 size={25} strokeWidth={1.6} />, label: 'Best Quality Material' },
  { icon: <Brush size={25} strokeWidth={1.6} />, label: 'Easy Maintenance' },
  { icon: <Palette size={25} strokeWidth={1.6} />, label: 'Customizable Design' },
  { icon: <PencilRuler size={25} strokeWidth={1.6} />, label: 'Built Professionally' },
];

const accordionItems = ['Detail', 'Benefits', 'How to Use'];

const sizes = ['14 x 5', '12 x 12', '10 x 18', '13 x 10'];

export default function ProductDetail() {
  return (
    <section className='relative mx-auto xl:max-w-[1200px]'>
      {/* Main Content */}
      <div className='md:flex md:gap-5 *:md:w-1/2 lg:mx-16 lg:gap-10 xl:mx-auto xl:gap-16'>
        {/* Product Image */}
        <div className='w-full md:sticky md:top-[160px] md:h-full xl:w-[40%]'>
          <img
            src='https://cdn.printshoppy.com/image/cache/catalog/product-image/wooden-photo-stands/wooden-photo-stands-501-600x600.webp'
            alt='Wooden Frame Product'
            className='w-full'
          />
        </div>

        {/* Product Detail */}
        <div className='space-y-3.5 p-4'>
          {/* Title & Wishlist */}
          <div className='flex items-end justify-between gap-5'>
            <div>
              <div className='flex items-center gap-1 text-[13px] text-gray-400'>
                {[1, 2, 3, 4].map((n) => (
                  <Star
                    key={n}
                    size={13}
                    fill='#7e22ce'
                    className='text-purple-700 opacity-50'
                  />
                ))}
                <span>101 Reviews</span>
              </div>
              <h2 className='text-lg font-medium'>Wooden Frame (1 Photo Frame)</h2>
            </div>
            <button
              aria-label='Add to wishlist'
              className='rounded-full border-[0.5px] border-purple-700 p-2.5 text-purple-500'
            >
              <Heart size={20} />
            </button>
          </div>

          {/* Price */}
          <div className='space-x-4'>
            <i className='text-2xl font-medium'>₹160.00</i>
            <span className='text-gray-400 line-through'>₹20.00</span>
            <span className='rounded-full bg-purple-200 px-2 py-0.5'>20%</span>
          </div>

          {/* Size */}
          <div className='flex flex-col gap-3'>
            <h3 className='font-medium'>Size (In Inches):</h3>
            <ul className='flex flex-wrap items-center justify-between gap-2 text-[14px] font-medium text-gray-500 *:rounded-md *:px-1.5 *:py-1.5 md:justify-start md:gap-4'>
              {sizes.map((size, i) => (
                <li
                  key={size}
                  className={
                    i === 0
                      ? 'border-[0.5px] border-purple-700 text-purple-700'
                      : 'border-[0.5px] border-gray-300'
                  }
                >
                  ({size})
                </li>
              ))}
            </ul>
          </div>

          {/* Upload Photo */}
          <div className='py-3.5'>
            <button className='flex w-full items-center justify-center gap-3 bg-gray-100 py-2.5 font-medium text-purple-700 shadow'>
              <CloudUpload size={21} />
              Upload Photo
            </button>
          </div>

          {/* Quantity */}
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
              <h4 className='font-medium'>Quantity:</h4>
              <div className='flex items-center rounded-full border-[0.5px] border-gray-500'>
                <button aria-label='Decrease quantity' className='p-2 text-gray-600'>
                  <Minus size={20} />
                </button>
                <input
                  type='text'
                  defaultValue={1}
                  aria-label='Quantity'
                  className='w-12 py-0.5 text-center font-medium outline-none'
                />
                <button aria-label='Increase quantity' className='p-2 text-gray-600'>
                  <Plus size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Add to Cart & Buy Now */}
          <div className='w-full py-3.5 text-center text-[15px] *:w-1/2'>
            <button className='rounded-l border-[0.5px] border-purple-700 py-2.5 font-medium uppercase text-purple-700'>
              Buy Now
            </button>
            <button className='rounded-r border-[0.5px] border-purple-700 bg-purple-700 py-2.5 font-medium uppercase text-white'>
              Add to Cart
            </button>
          </div>

          {/* Feature Points */}
          <ul className='flex w-full items-start rounded-md bg-gray-100 px-0.5 py-4 text-center text-[11.5px] font-medium text-gray-600 *:flex *:w-1/4 *:flex-col *:items-center *:gap-2'>
            {features.map(({ icon, label }) => (
              <li key={label}>
                {icon}
                {label}
              </li>
            ))}
          </ul>

          {/* Accordion Info */}
          <div>
            <ul className='divide-y-[0.5px] divide-gray-300 *:flex *:items-center *:justify-between *:py-2.5'>
              {accordionItems.map((item) => (
                <li key={item}>
                  {item} <Plus size={18} strokeWidth={2} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Customer Reviews */}
      <CustomerReview />

      {/* Related Products */}
      <div className='py-2'>
        <ProductCrousel title='Related Products'>
          {relatedProducts.map((item) => (
            <SwiperSlide
              key={item.id}
              className='max-w-[15rem] pt-2 text-[0.9rem] md:max-w-[20rem]'
            >
              <div className='shadow-[0px_0px_5px_0px_#d9d9d9]'>
                <img src={item.img} alt={item.name} className='rounded-md' />
              </div>
              <div className='px-1.5 py-3 text-center'>
                <h3>{item.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </ProductCrousel>
      </div>
    </section>
  );
}
