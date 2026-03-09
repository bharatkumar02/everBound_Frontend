import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation, Keyboard } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const productList = [
  {
    img: 'https://static-assets-prod.fnp.com/images/pr/l/v20250715223135/love-forever-red-rose-bouquet_1.jpg',
    name: 'Flower Bouquets',
    title: 'Trending',
  },
  {
    img: 'https://static-assets-prod.fnp.com/images/pr/l/v300/heart-of-red-roses-truffle-cake-half-kg_1.jpg',
    name: 'Heart Shape Cake',
    title: 'New Arrival',
  },
  {
    img: 'https://static-assets-prod.fnp.com/images/pr/l/v300/money-plant-mason-jar-terrarium_2.jpg',
    name: 'Money Plant',
    title: 'Gifts',
  },
  {
    img: 'https://static-assets-prod.fnp.com/images/pr/l/v300/red-roses-bouquet-dairy-milk-chocolates_1.jpg',
    name: 'Choclate & Flower',
    title: 'For Couples',
  },
  {
    img: 'https://static-assets-prod.fnp.com/images/pr/l/v20250417014714/floral-n-nutty-hamper-for-mom_1.jpg',
    name: 'Dry Fruits Hamper',
    title: 'Trending',
  },
];

export default function Banner() {
  return (
    <>
      <section className='relative w-full overflow-hidden px-5 py-10 before:absolute before:top-0 before:left-0 before:-z-20 before:h-full before:w-full before:bg-[url("/banner-bg.svg")] before:bg-cover before:bg-bottom before:bg-no-repeat md:flex md:px-10 lg:px-20 lg:py-16'>
        <div className='absolute top-10 -right-[15rem] -z-10 min-[1280px]:!right-20 md:right-0 md:bottom-0'>
          <img
            src='/banner-img.png'
            alt='Banner'
            className='2 max-h-[40rem] drop-shadow-lg lg:max-h-[52rem]'
          />
        </div>

        <div className='flex min-h-full flex-col md:w-2/3 md:justify-self-start xl:w-[50%] py-10'>
            <h1 className='lg: pr-14 text-3xl leading-10 font-medium md:pr-24 md:text-4xl md:leading-12 lg:pr-20 lg:text-5xl lg:leading-16 xl:text-6xl xl:leading-[80px]'>
              Your One-Stop Shop for{' '}
              <i className='text-[#7A3E9D] text-shadow-md'>Gifts</i> & Decor
            </h1>
            
          <div className='relative mt-10 max-w-[30rem] rounded-xl bg-white/30 p-5 backdrop-blur-2xl lg:p-10 xl:max-w-[45rem]'>
            <h3 className='mb-3.5 text-lg font-semibold'>Top Categories</h3>
            <Swiper
              slidesPerView={2}
              spaceBetween={10}
              loop={true}
              breakpoints={{
                640: { slidesPerView: 3 },
                1440: { slidesPerView: 4 },
              }}
              keyboard={{
                enabled: true,
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              navigation={{
                enabled: true,
                nextEl: '.custom-next',
                prevEl: '.custom-prev',
              }}
              modules={[Autoplay, Navigation, Keyboard]}
            >
              {productList.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className='max-w-[25rem] p-2 lg:mt-3.5'>
                    <div className='overflow-hidden rounded-lg group cursor-pointer'>
                      <img
                        src={item.img}
                        alt={item.name}
                        loading='lazy'
                        className='group-hover:scale-125 transition-all duration-300'
                      />
                    </div>
                    <div className='mt-2.5 flex flex-col justify-center gap-1'>
                      <span className='text-[10px] font-semibold tracking-wider whitespace-nowrap text-gray-700 uppercase'>
                        {item.title}
                      </span>
                      <h3 className='text-[13px] leading-tight font-semibold lg:text-[14px]'>
                        {item.name}
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Navigation */}
            <button className='custom-prev group absolute top-4 right-16 z-10 size-8 cursor-pointer rounded-full border-[0.5px] border-[#7A3E9D] bg-transparent text-[#7A3E9D] lg:top-10 lg:right-[84px]'>
              <ChevronLeft
                size='30'
                strokeWidth={1.5}
                className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 group-hover:scale-125'
              />
            </button>
            <button className='custom-next group absolute top-4 right-5 z-10 size-8 cursor-pointer rounded-full border-[0.5px] border-[#7A3E9D] bg-transparent text-[#7A3E9D] lg:top-10 lg:right-10'>
              <ChevronRight
                size='30'
                strokeWidth={1.5}
                className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 group-hover:scale-125'
              />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
