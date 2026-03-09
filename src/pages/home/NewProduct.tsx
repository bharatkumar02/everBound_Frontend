import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, Navigation, Keyboard } from "swiper/modules";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

const productList = [
  {
    img: "https://giftcart.com/cdn/shop/files/Girlfriend_300x.png?v=1674210603",
  },
  {
    img: "https://giftcart.com/cdn/shop/files/mom_200x.png?v=1772177633",
  },
  {
    img: "https://giftcart.com/cdn/shop/files/GF_300x.png?v=1674210532",
  },
  {
    img: "https://giftcart.com/cdn/shop/files/sister-final-2_1_200x.png?v=1772165059",
  },
  {
    img: "https://giftcart.com/cdn/shop/files/dad_38fd9743-6863-46a3-8fbc-5a8863a8eab4_200x.png?v=1772178963",
  },
  {
    img: "https://giftcart.com/cdn/shop/files/Husband_300x.png?v=1674210559",
  },
  {
    img: "https://giftcart.com/cdn/shop/files/BF_300x.png?v=1674210500",
  },
  {
    img: "https://giftcart.com/cdn/shop/files/couple_777f4df2-a797-4b61-9a9f-92153656ad5d_200x.png?v=1772177752",
  },
];

export default function NewProduct() {
  return (
    <>
      <section className="relative grid w-full grid-cols-2 md:grid-cols-4">
        {/* Text */}
        <div className='space-y-4 bg-[url("/new-product-bg.svg")] bg-cover bg-center bg-no-repeat p-3 md:rounded-r-xl lg:p-7'>
          <div className="h-full overflow-hidden rounded-xl bg-white/20 p-5 shadow backdrop-blur-lg lg:pb-16 xl:p-10 2xl:flex 2xl:flex-col 2xl:justify-center">
            <h2 className="pb-4 text-xl leading-7 font-semibold tracking-wider uppercase lg:text-2xl lg:leading-10 xl:text-3xl">
              For <br /> Every <br /> Relationship
            </h2>
            <p className="pb-5 text-[13px] text-gray-900 lg:text-base xl:text-lg">
              Discover the Products to Arrive at Editor's Picks.
            </p>
            {/* <button className="font-montserrat cursor-pointer rounded-full bg-[#7A3E9D] px-5 py-1 text-[14px] whitespace-nowrap text-white lg:px-6 lg:py-1.5 lg:text-base xl:mt-2 xl:w-fit">
              Visit More
              <span className="pl-1.5 text-lg font-medium">
                <i className="ri-arrow-right-long-fill"></i>
              </span>
            </button> */}
          </div>
        </div>

        <div className="grid grid-cols-4 md:col-start-2 md:col-end-5 md:p-10 lg:py-12 gap-10">
          {/* <Swiper
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
          > */}
          {productList.map((item, index) => (
            <div
              key={index}
              className="h-full space-y-3 overflow-hidden bg-white md:rounded-xl lg:space-y-5"
            >
              <div className="group size-40">
                <img
                  src={item.img}
                  loading="lazy"
                  className=" cursor-pointer  transition-all duration-300 group-hover:scale-110"
                />
              </div>
              {/* <span className='py-1.5 px-2.5 md:px-4 max-w-[90%] font-semibold lg:text-base absolute top-1 rounded-l-full right-0 bg-white/50 backdrop-blur-xs text-gray-800 text-[14px]'>
                  {item.name}
                </span> */}
            </div>
          ))}
          {/* </Swiper> */}
          {/* Navigation */}
          {/* <button className='custom-prev absolute right-10 bottom-1.5 z-10 size-8 cursor-pointer rounded-full border-[0.5px] border-[#7A3E9D] bg-white/30 text-[#7A3E9D] backdrop-blur-xs md:left-[34px] md:bottom-10 lg:size-11 lg:left-[50px] lg:border-[0.5px] xl:left-[70px] xl:bottom-14'>
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
          </button> */}
        </div>
      </section>
    </>
  );
}
