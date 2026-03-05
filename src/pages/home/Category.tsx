// import { Swiper, SwiperSlide } from 'swiper/react';
// import { FreeMode } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/free-mode';
import { Link } from 'react-router';

const productList2 = [
  {
    img: 'https://printo-s3.dietpixels.net/site/2025/Marketing%20page/Tote-vag_1745405021.jpg?quality=70&format=webp&w=384',
    name: 'Stationary',
    to: '/category2',
  },
  {
    img: 'https://printo-s3.dietpixels.net/site/2025/Marketing%20page/Flyer_1745479574.jpg?quality=70&format=webp&w=384',
    name: 'Awards & Trophies',
    to: '/category/awards-trophies',
  },
  {
    img: 'https://printo-s3.dietpixels.net/cloudinary/Images/2222_1750364363.jpg?quality=70&format=webp&w=384',
    name: 'Business Stationery',
    to: '/category/business-stationery',
  },
  {
    img: 'https://printo-s3.dietpixels.net/site/2025/Marketing%20page/Acrylic-prints_1745405021.jpg?quality=70&format=webp&w=384',
    name: 'Corporate Gifts',
    to: '/category/corporate-gifts',
  },
  {
    img: 'https://printo-s3.dietpixels.net/site/2025/Marketing%20page/Best-sellers_1745421362.jpg?quality=70&format=webp&w=384',
    name: 'Drinkware',
    to: '/category/drinkware',
  },
  {
    img: 'https://printo-s3.dietpixels.net/site/2025/Marketing%20page/Flyer_1745479574.jpg?quality=70&format=webp&w=384',
    name: 'Packaging',
    to: '/category/packaging',
  },
  {
    img: 'https://printo-s3.dietpixels.net/cloudinary/Images/2222_1750364363.jpg?quality=70&format=webp&w=384',
    name: 'Photo Gifts',
    to: '/category/photo-gifts',
  },
  {
    img: 'https://printo-s3.dietpixels.net/site/2025/Marketing%20page/Best-sellers_1745421362.jpg?quality=70&format=webp&w=384',
    name: 'Signs & Marketing',
    to: '/category/signs-marketing',
  },
];

export default function Category() {
  return (
    <>
      <section className='grid grid-cols-3 gap-7 px-5 py-8 md:grid-cols-4 lg:flex lg:gap-10 lg:p-16'>
        {/* <Swiper
          spaceBetween={20}
          freeMode={true}
          slidesPerView='4'
          breakpoints={{
            768: {
              spaceBetween: 30,
              slidesPerView: 6,
            },
            1024: {
              spaceBetween: 40,
              slidesPerView: 8,
            },
          }}
          autoplay={true}
          freeModeMomentum={true}
          grabCursor={true}
          loop={true}
          speed={600}
          modules={[FreeMode]}
        > */}
        {productList2.map((item, index) => (
          // <SwiperSlide key={index} className='cursor-pointer'>
          <Link
            to={item.to}
            key={index}
            className='mx-auto flex w-fit flex-col items-center gap-y-1 pt-1 text-center text-[12px] font-medium lg:gap-y-2.5 lg:text-[15px]'
          >
            <div className='group mx-auto max-w-[8.5rem] overflow-hidden rounded-full bg-gray-100 shadow'>
              <img
                src={item.img}
                alt='Frame'
                className='transition-all duration-300 group-hover:scale-125'
              />
            </div>
            <span className=''>{item.name}</span>
          </Link>
        ))}
      </section>
    </>
  );
}
