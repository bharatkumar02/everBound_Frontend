import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";

export default function ProductCrousel({ children, title, className = "bg-gray-100" }) {
  return (
    <section className="px-2 py-5 tracking-wider md:px-10 lg:px-20 xl:px-28">
      <div className="relative z-10 w-full before:absolute before:left-0 before:top-1/2 before:-z-10 before:h-[0.5px] before:w-full before:-translate-y-1/2 before:bg-gray-400">
        <h2
          className={`mx-auto w-fit px-2 text-2xl font-medium ${className}`}
        >
          {title}
        </h2>
      </div>
      <Swiper
        spaceBetween={10}
        freeMode={true}
        slidesPerView="auto"
        breakpoints={{
          768: {
            spaceBetween: 20,
          },
        }}
        freeModeMomentum={true}
        grabCursor={true}
        loop={true}
        centeredSlides={false}
        speed={600}
        modules={[FreeMode]}
        className="mySwiper mx-auto mt-8 transition-all duration-300 ease-in-out"
      >
        {children}
      </Swiper>
    </section>
  );
}
