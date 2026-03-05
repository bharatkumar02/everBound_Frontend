import ProductCrousel from '../../components/productCrousel/ProductCrousel';
import productList from '../../jsonData/ProductCategory.json';
import { SwiperSlide } from 'swiper/react';
import CustomerReview from './CustomerReview';
import {
  CloudUpload,
  Heart,
  ChevronDown,
  Plus,
  Minus,
  Star,
  Layers2,
  Brush,
  Palette,
  PencilRuler,
} from 'lucide-react';

export default function ProductDetail() {
  return (
    <section className='relative mx-auto xl:max-w-[1200px]'>
      {/* Main Content */}
      <div className='md:flex md:gap-5 *:md:w-1/2 lg:mx-16 lg:gap-10 xl:mx-auto xl:gap-16'>
        {/* Image Crousel */}
        <div className='w-full md:sticky md:top-[160px] md:h-full xl:w-[40%]'>
          <img
            src='https://cdn.printshoppy.com/image/cache/catalog/product-image/wooden-photo-stands/wooden-photo-stands-501-600x600.webp'
            alt='Image'
            className='w-full'
          />
        </div>
        {/* Product Detail */}
        <div className='space-y-3.5 p-4'>
          <div className='flex items-end justify-between gap-5'>
            <h2 className='text-lg font-medium'>
              <div className='flex items-center gap-1 text-[13px] text-gray-400'>
                <Star
                  size={13}
                  fill='#7e22ce'
                  className='text-purple-700 opacity-50'
                />
                <Star
                  size={13}
                  fill='#7e22ce'
                  className='text-purple-700 opacity-50'
                />
                <Star
                  size={13}
                  fill='#7e22ce'
                  className='text-purple-700 opacity-50'
                />
                <Star
                  size={13}
                  fill='#7e22ce'
                  className='text-purple-700 opacity-50'
                />
                <span>101 Reviews</span>
              </div>
              Wooden Frame (1 Photo Frame)
            </h2>
            <button className='rounded-full border-[0.5px] border-purple-700 p-2.5 text-purple-500'>
              <Heart size={20} />
            </button>
          </div>
          <div className='space-x-4'>
            <i className='text-2xl font-medium'>₹160.00</i>
            <span className='text-gray-400 line-through'>₹20.00</span>
            <span className='rounded-full bg-purple-200 px-2 py-0.5'>20%</span>
          </div>
          {/* Size */}
          <div className='flex flex-col gap-3'>
            <h3 className='font-medium'>Size (In Inches):</h3>
            <ul className='flex flex-wrap items-center justify-between gap-2 text-[14px] font-medium text-gray-500 *:rounded-md *:px-1.5 *:py-1.5 md:justify-start md:gap-4'>
              <li className='border-[0.5px] border-purple-700 text-purple-700'>
                (14 x 5)
              </li>
              <li className='border-[0.5px] border-gray-300'>(12 x 12)</li>
              <li className='border-[0.5px] border-gray-300'>(10 x 18)</li>
              <li className='border-[0.5px] border-gray-300'>(13 x 10)</li>
            </ul>
          </div>
          {/* Upload Images or Names */}
          <div className='py-3.5'>
            <button className='flex w-full items-center justify-center gap-3 bg-gray-100 py-2.5 font-medium text-purple-700 shadow'>
              <CloudUpload size={21} />
              Upload Photo
            </button>
          </div>
          {/* Quantity and WishList */}
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
              <h4 className='font-medium'>Quantity :</h4>
              <div className='flex items-center rounded-full border-[0.5px] border-gray-500'>
                <button className='p-2 text-gray-600'>
                  <Minus size={20} />
                </button>
                <input
                  type='text'
                  defaultValue={1}
                  className='w-12 py-0.5 text-center font-medium outline-none'
                />
                <button className='p-2 text-gray-600'>
                  <Plus size={20} />
                </button>
              </div>
            </div>
          </div>
          {/* Add to Cart and Buy Now */}
          <div className='w-full py-3.5 text-center text-[15px] *:w-1/2'>
            <button className='rounded-l border-[0.5px] border-purple-700 py-2.5 font-medium text-purple-700 uppercase'>
              Buy Now
            </button>
            <button className='rounded-r border-[0.5px] border-purple-700 bg-purple-700 py-2.5 font-medium text-white uppercase'>
              Add to Cart
            </button>
          </div>
          {/*  Four Points with Images*/}
          <ul className='px flex w-full items-start rounded-md bg-gray-100 px-0.5 py-4 text-center text-[11.5px] font-medium text-gray-600 *:flex *:w-1/4 *:flex-col *:items-center *:gap-2'>
            <li>
              <Layers2 size={25} strokeWidth={1.6} />
              Best Quality Material
            </li>
            <li>
              <Brush size={25} strokeWidth={1.6} />
              Easy Maintainance
            </li>
            <li>
              <Palette size={25} strokeWidth={1.6} />
              Customizable Design
            </li>
            <li>
              <PencilRuler size={25} strokeWidth={1.6} />
              Build Professionally
            </li>
          </ul>
          {/* Additional Four Points information */}
          <div>
            <ul className='divide-y-[0.5px] divide-gray-300 *:flex *:items-center *:justify-between *:py-2.5'>
              <li>
                Detail <Plus size={18} strokeWidth={2} />
              </li>
              <li>
                Benefits <Plus size={18} strokeWidth={2} />
              </li>
              <li>
                How to Use <Plus size={18} strokeWidth={2} />
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Customer Review */}
      <CustomerReview />
      {/* Related Products */}
      <div className='py-2'>
        <ProductCrousel title='Related Products'>
          {productList.map((item, index) => (
            <SwiperSlide
              key={index}
              className='max-w-[15rem] pt-2 text-[0.9rem] md:max-w-[20rem]'
            >
              <div className='shadow-[0px_0px_5px_0px_#d9d9d9]'>
                <img src={item.img} alt='Items' className='rounded-md' />
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
