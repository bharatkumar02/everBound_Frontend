import { ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Autoplay, Navigation, Keyboard } from 'swiper/modules';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

const productList = [
  {
    img: 'https://cdn.printshoppy.com/image/catalog/v9/webp/home-page/regular/home-page-desk-decoratives-phone-stands.webp',
    name: 'Acrylic Frames1 Acrylic',
  },
  {
    img: 'https://cdn.printshoppy.com/image/catalog/v9/webp/home-page/regular/home-page-desk-decoratives-illusion-lamps.webp',
    name: 'Acrylic Frames2',
  },
  {
    img: 'https://cdn.printshoppy.com/image/catalog/v9/webp/home-page/regular/home-page-desk-decoratives-photo-mugs.webp',
    name: 'Acrylic Frames3',
  },
  {
    img: 'https://cdn.printshoppy.com/image/catalog/v9/webp/home-page/regular/home-page-desk-decoratives-hanging-photo-stands.webp',
    name: 'Acrylic Frames3',
  },
  {
    img: 'https://cdn.printshoppy.com/image/catalog/v9/webp/home-page/regular/home-page-desk-decoratives-desktop-photo-stands.webp',
    name: 'Acrylic Frames3',
  },
  {
    img: 'https://cdn.printshoppy.com/image/catalog/v9/webp/home-page/regular/home-page-desk-decoratives-miniature-photo-stands.webp',
    name: 'Acrylic Frames2',
  },
];

export default function NewProduct() {
  return (
    <>
      <section className='grid w-full grid-cols-2 bg-gray-100 md:grid-cols-4 relative'>
        {/* Text */}
        <div className='space-y-4 bg-[url("/new-product-bg.svg")] bg-cover bg-center bg-no-repeat p-3 lg:p-7 md:rounded-r-xl'>
          <div className='h-full rounded-xl bg-white/20 p-5 shadow backdrop-blur-lg xl:p-10 overflow-hidden lg:pb-16 2xl:flex 2xl:flex-col 2xl:justify-center'>
            <h2 className='pb-4 text-xl leading-7 font-semibold tracking-wider lg:leading-10 uppercase lg:text-2xl xl:text-3xl'>
              New <br /> Arrivals
            </h2>
            <p className='pb-5 text-[13px] text-gray-900 lg:text-base xl:text-lg'>
              Discover the Newest Products to Arrive at Editor's Picks.
            </p>
            <button className='font-montserrat cursor-pointer rounded-full bg-[#7A3E9D] px-5 py-1 text-[14px] text-white lg:px-6 lg:py-1.5 lg:text-base whitespace-nowrap xl:mt-2 xl:w-fit'>
              Visit More
              <span className='pl-1.5 text-lg font-medium'>
                <i className='ri-arrow-right-long-fill'></i>
              </span>
            </button>
            
          </div>
        </div>
        
        <div className='md:col-start-2 md:col-end-5 md:p-10 lg:py-12'>
          <Swiper
            className='h-full'
            slidesPerView='auto'
            spaceBetween={10}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
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
              <SwiperSlide
                key={index}
                className='h-full space-y-3 overflow-hidden bg-white lg:space-y-5 md:rounded-xl '
              >
                <div className='w-full h-full group'>
                  <img
                    src={item.img}
                    alt={item.name}
                    loading='lazy'
                    className='size-full object-cover group-hover:scale-110 transition-all duration-300 cursor-pointer'
                  />
                </div>
                <span className='py-1.5 px-2.5 md:px-4 max-w-[90%] font-semibold lg:text-base absolute top-1 rounded-l-full right-0 bg-white/50 backdrop-blur-xs text-gray-800 text-[14px]'>
                  {item.name}
                </span>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Navigation */}
          <button className='custom-prev absolute right-10 bottom-1.5 z-10 size-8 cursor-pointer rounded-full border-[0.5px] border-[#7A3E9D] bg-white/30 text-[#7A3E9D] backdrop-blur-xs md:left-[34px] md:bottom-10 lg:size-11 lg:left-[50px] lg:border-[0.5px] xl:left-[70px] xl:bottom-14'>
            <ChevronLeft
              size='30'
              strokeWidth={1.5}
              className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
            />
          </button>
          <button className='custom-next rounded-full absolute right-1 bottom-1.5 z-10 size-8 cursor-pointer border-[0.5px] border-[#7A3E9D] bg-white/30 text-[#7A3E9D] xl:left-[120px] xl:bottom-14 backdrop-blur-xs md:left-[75px] md:bottom-10 lg:size-11 lg:left-[100px] lg:border-[0.5px]'>
            <ChevronRight
              size='30'
              strokeWidth={1.5}
              className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
            />
          </button>
        </div>
      </section>
    </>
  );
}
