import { Link } from 'react-router';

interface Product {
  id: number;
  name: string;
  img: string;
  originalPrice: string;
  discountedPrice: string;
}

// Static product data for this sub-category listing
const productList: Product[] = [
  { id: 1, name: 'Wooden Photo Frame', img: '/images/f-1.jpg', originalPrice: '₹299/-', discountedPrice: '₹199/-' },
  { id: 2, name: 'Classic Wall Frame', img: '/images/f-2.jpg', originalPrice: '₹349/-', discountedPrice: '₹249/-' },
  { id: 3, name: 'Rustic Table Frame', img: '/images/f-3.jpg', originalPrice: '₹399/-', discountedPrice: '₹299/-' },
  { id: 4, name: 'Minimalist Frame', img: '/images/f-4.jpg', originalPrice: '₹299/-', discountedPrice: '₹199/-' },
  { id: 5, name: 'Vintage Oak Frame', img: '/images/f-5.jpg', originalPrice: '₹499/-', discountedPrice: '₹349/-' },
  { id: 6, name: 'Modern Slim Frame', img: '/images/f-6.jpg', originalPrice: '₹449/-', discountedPrice: '₹319/-' },
  { id: 7, name: 'Black Photo Frame', img: '/images/f-7.jpg', originalPrice: '₹279/-', discountedPrice: '₹199/-' },
  { id: 8, name: 'Collage Wall Frame', img: '/images/f-8.jpg', originalPrice: '₹599/-', discountedPrice: '₹449/-' },
];

export default function Category() {
  return (
    <section className='mx-auto bg-white 2xl:max-w-[1500px]'>
      {/* Banner */}
      <div className='h-[15rem] overflow-hidden md:h-full md:max-h-[27rem] md:p-10 lg:rounded-md lg:p-16'>
        <img
          src='https://cdn.printshoppy.com/image/catalog/v6/webp/desktop-stands/v2/wooden-desktop-stands/category-wooden-banner-d.webp'
          alt='Category Banner'
          className='h-full w-full object-cover lg:rounded-md'
        />
      </div>

      <div className='m-2 gap-x-5 lg:relative lg:m-10 lg:flex xl:m-16'>
        {/* Product Grid */}
        <ul className='mx-auto grid h-full w-full grid-cols-2 gap-2 text-[16px] *:cursor-pointer md:w-full md:grid-cols-3 lg:grid-cols-3 lg:gap-5 xl:grid-cols-4'>
          {productList.map((product: Product) => (
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
                  <span className='font-medium'>{product.name}</span>
                  <h4 className='flex items-center gap-2.5 bg-white text-base font-semibold tracking-wide text-gray-800 lg:text-lg'>
                    <span className='text-[13px] text-gray-400 line-through lg:text-[14px]'>
                      {product.originalPrice}
                    </span>
                    {product.discountedPrice}
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
