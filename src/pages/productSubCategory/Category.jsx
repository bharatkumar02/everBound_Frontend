import { SwiperSlide } from 'swiper/react';
import ProductCrousel from '../../components/productCrousel/ProductCrousel';
import { ListFilter } from 'lucide-react';
import { ArrowUpDown } from 'lucide-react';
import productList from '../../jsonData/ProductCategory.json';
import { ChevronDown } from 'lucide-react';
import Filter from './Filter';
import { Link } from 'react-router-dom';

export default function Category() {
  return (
    <section className='mx-auto bg-white 2xl:max-w-[1500px]'>
      {/* Crousels of Banner */}
      <div className='h-[15rem] overflow-hidden md:h-full md:max-h-[27rem] lg:rounded-md  md:p-10 lg:p-16'>
        <img
          src='https://cdn.printshoppy.com/image/catalog/v6/webp/desktop-stands/v2/wooden-desktop-stands/category-wooden-banner-d.webp'
          alt='Banner'
          className='h-full w-full object-cover lg:rounded-md'
        />
      </div>

      <div className='gap-x-5 lg:relative lg:m-10 m-2 lg:flex xl:m-16'>
        {/* Product Items */}
        <ul className='mx-auto grid h-full w-full grid-cols-2 gap-2 text-[16px] *:cursor-pointer md:w-full md:grid-cols-3 lg:grid-cols-3 lg:gap-5 xl:grid-cols-4'>
          {productList.map(product => (
            <li key={product.id} className='group lg:overflow-hidden'>
              <Link to='/product-detail'>
                <div className='overflow-hidden rounded bg-white'>
                  <img
                    src={product.img}
                    alt={product.name}
                    className='object-cover transition-all duration-500 group-hover:scale-125'
                  />
                </div>
                <div className='flex flex-col gap-2 p-3 text-[14px] lg:text-[15px] xl:text-base'>
                  <span className='F font-medium'>{product.name}</span>
                  <h4 className='flex items-center gap-2.5 bg-white text-base font-semibold tracking-wide text-gray-800 lg:text-lg'>
                    <span className='text-[13px] text-gray-400 line-through lg:text-[14px]'>
                      ₹299/-
                    </span>
                    ₹199/-
                  </h4>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
