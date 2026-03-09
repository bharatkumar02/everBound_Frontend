import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, Navigation, Keyboard } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

const productList = [
  {
    img: "https://static-assets-prod.fnp.com/images/pr/l/v20250128171620/grateful-for-you-roses-in-jar-arrangement_2.jpg",
    name: "Roses in Jar Arrangement",
  },
  {
    img: "https://static-assets-prod.fnp.com/images/pr/l/v20210701022349/decorated-chocolate-truffle-cake-half-kg-eggless_1.jpg",
    name: "Choclate Truffle Cake",
  },
  {
    img: "https://static-assets-prod.fnp.com/images/pr/l/v20210712181835/jade-plant-in-gold-tone-metal-pot_1.jpg",
    name: "Jade Plant in Golder Pot",
  },
  {
    img: "https://static-assets-prod.fnp.com/images/pr/l/v20250915152354/angelic-rose-bouquet-n-black-forest-birthday-bliss_1.jpg",
    name: "Rose Bouquet & Cake",
  },
  {
    img: "https://static-assets-prod.fnp.com/images/pr/l/v20250317110136/personalised-mug-for-her_1.jpg",
    name: "Personalised Mug for her",
  },
];

export default function Product() {
  return (
    <>
      <section className="relative space-y-8 bg-white py-10 md:px-10 lg:py-16">
        <h2 className="px-5 text-2xl leading-7 font-semibold tracking-wider md:px-1 lg:pb-5 lg:text-center lg:text-3xl lg:leading-10 xl:text-4xl">
          Best Selling Gifts
        </h2>
        <div className="px-1 md:relative lg:px-7">
          <Swiper
            slidesPerView={2}
            spaceBetween={5}
            loop={true}
            breakpoints={{
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4, spaceBetween: 10 },
              1440: { slidesPerView: 4, spaceBetween: 20 },
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
              nextEl: ".cus-next",
              prevEl: ".cus-prev",
            }}
            modules={[Autoplay, Navigation, Keyboard]}
          >
            {productList.map((item, index) => (
              <SwiperSlide
                key={index}
                className="relative overflow-hidden rounded-xl rounded-br-none"
              >
                <div className="group h-full lg:h-[25rem] cursor-pointer ">
                  <img
                    src={item.img}
                    alt={item.name}
                    loading="lazy"
                    className=" object-cover size-full transition-all duration-300 group-hover:scale-110"
                  />
                </div>
                <span className="absolute right-0 bottom-0 max-w-[90%] rounded-l-full bg-white/50 px-2.5 py-1.5 text-[14px] font-semibold text-gray-800 backdrop-blur-xs md:px-4 lg:text-base">
                  {item.name}
                </span>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Navigation */}
          <button className="cus-prev absolute top-10 right-14 z-10 size-8 cursor-pointer rounded-full border-[0.5px] border-[#7A3E9D] bg-white/30 text-[#7A3E9D] backdrop-blur-xs md:top-1/2 md:-left-7 md:-translate-y-1/2 lg:size-12">
            <ChevronLeft
              size="30"
              strokeWidth={1.5}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </button>
          <button className="cus-next absolute top-10 right-4 z-10 size-8 cursor-pointer rounded-full border-[0.5px] border-[#7A3E9D] bg-white/30 text-[#7A3E9D] backdrop-blur-xs md:top-1/2 md:-right-7 md:-translate-y-1/2 lg:size-12">
            <ChevronRight
              size="30"
              strokeWidth={1.5}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </button>
        </div>
      </section>
    </>
  );
}
