import { productCategory } from "../../data/ProductCategory";
import Filter from "./Filter";
import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, Navigation, Keyboard } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Category() {
  return (
    <section className="flex w-full flex-col bg-white min-[1280px]:flex-row-reverse min-[1280px]:gap-5 min-[1280px]:p-5 min-[1280px]:pt-16">
      <div className="min-[1280px]:w-[75%] lg:space-y-8">
        {/* Banner */}
        <div className="h-60 overflow-hidden md:h-full md:max-h-88 lg:rounded-md">
          <img
            src="https://cdn.printshoppy.com/image/catalog/v6/webp/desktop-stands/v2/wooden-desktop-stands/category-wooden-banner-d.webp"
            alt="Banner"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="p-3 min-[1280px]:p-0 lg:relative">
          <div>
            <div className="flex items-center justify-between py-5">
              <h3 className="text-lg font-semibold lg:text-2xl xl:text-3xl">
                Top Categories
              </h3>
              <div className="flex items-center gap-2.5">
                {/* Navigation */}
                <button className="custom-prev group size-8 cursor-pointer rounded-full border-[0.5px] border-[#7A3E9D] bg-transparent text-[#7A3E9D]">
                  <ChevronLeft
                    size="30"
                    strokeWidth={1.5}
                    className="transition-all duration-300 group-hover:scale-125"
                  />
                </button>
                <button className="custom-next group size-8 cursor-pointer rounded-full border-[0.5px] border-[#7A3E9D] bg-transparent text-[#7A3E9D]">
                  <ChevronRight
                    size="30"
                    strokeWidth={1.5}
                    className="transition-all duration-300 group-hover:scale-125"
                  />
                </button>
                <button className="font-montserrat w cursor-pointer rounded-full bg-[#7A3E9D] px-5 py-1 text-[14px] text-white lg:ml-5 lg:px-6 lg:py-1.5 lg:text-base">
                  View All
                  <span className="pl-1.5 text-lg font-medium">
                    <i className="ri-arrow-right-long-fill"></i>
                  </span>
                </button>
              </div>
            </div>
            <Swiper
              className="w-full text-[16px] *:cursor-pointer"
              slidesPerView={2}
              spaceBetween={5}
              loop={true}
              breakpoints={{
                640: { slidesPerView: 3 },
                1024: { slidesPerView: 4, spaceBetween: 20 },
              }}
              keyboard={{
                enabled: true,
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              navigation={{
                enabled: true,
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              modules={[Autoplay, Navigation, Keyboard]}
            >
              {productCategory.map((product, index) => (
                <SwiperSlide key={index} className="group lg:overflow-hidden">
                  <Link to="/product-detail">
                    <div className="overflow-hidden rounded bg-white">
                      <img
                        src={product.img}
                        alt={product.name}
                        className="object-cover transition-all duration-500 group-hover:scale-125"
                      />
                    </div>
                    <div className="flex flex-col gap-2 p-3 text-[14px] lg:text-[15px] xl:text-base">
                      <span className="F font-medium">{product.name}</span>
                      <h4 className="flex items-center gap-2.5 bg-white text-base font-semibold tracking-wide text-gray-800 lg:text-lg">
                        <span className="text-[13px] text-gray-400 line-through lg:text-[14px]">
                          ₹299/-
                        </span>
                        ₹199/-
                      </h4>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="p-3 min-[1280px]:p-0 lg:relative">
          <div>
            <div className="flex items-center justify-between py-5">
              <h3 className="text-lg font-semibold lg:text-2xl xl:text-3xl">
                Top Categories
              </h3>
              <div className="flex items-center gap-2.5">
                {/* Navigation */}
                <button className="custom-prev group size-8 cursor-pointer rounded-full border-[0.5px] border-[#7A3E9D] bg-transparent text-[#7A3E9D]">
                  <ChevronLeft
                    size="30"
                    strokeWidth={1.5}
                    className="transition-all duration-300 group-hover:scale-125"
                  />
                </button>
                <button className="custom-next group size-8 cursor-pointer rounded-full border-[0.5px] border-[#7A3E9D] bg-transparent text-[#7A3E9D]">
                  <ChevronRight
                    size="30"
                    strokeWidth={1.5}
                    className="transition-all duration-300 group-hover:scale-125"
                  />
                </button>
                <button className="font-montserrat w cursor-pointer rounded-full bg-[#7A3E9D] px-5 py-1 text-[14px] text-white lg:ml-5 lg:px-6 lg:py-1.5 lg:text-base">
                  View All
                  <span className="pl-1.5 text-lg font-medium">
                    <i className="ri-arrow-right-long-fill"></i>
                  </span>
                </button>
              </div>
            </div>
            <Swiper
              className="w-full text-[16px] *:cursor-pointer"
              slidesPerView={2}
              spaceBetween={5}
              loop={true}
              breakpoints={{
                640: { slidesPerView: 3 },
                1024: { slidesPerView: 4, spaceBetween: 20 },
              }}
              keyboard={{
                enabled: true,
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              navigation={{
                enabled: true,
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              modules={[Autoplay, Navigation, Keyboard]}
            >
              {productCategory.map((product, index) => (
                <SwiperSlide key={index} className="group lg:overflow-hidden">
                  <Link to="/product-detail">
                    <div className="overflow-hidden rounded bg-white">
                      <img
                        src={product.img}
                        alt={product.name}
                        className="object-cover transition-all duration-500 group-hover:scale-125"
                      />
                    </div>
                    <div className="flex flex-col gap-2 p-3 text-[14px] lg:text-[15px] xl:text-base">
                      <span className="F font-medium">{product.name}</span>
                      <h4 className="flex items-center gap-2.5 bg-white text-base font-semibold tracking-wide text-gray-800 lg:text-lg">
                        <span className="text-[13px] text-gray-400 line-through lg:text-[14px]">
                          ₹299/-
                        </span>
                        ₹199/-
                      </h4>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="p-3 min-[1280px]:p-0 lg:relative">
          <div>
            <div className="flex items-center justify-between py-5">
              <h3 className="text-lg font-semibold lg:text-2xl xl:text-3xl">
                Top Categories
              </h3>
              <div className="flex items-center gap-2.5">
                {/* Navigation */}
                <button className="custom-prev group size-8 cursor-pointer rounded-full border-[0.5px] border-[#7A3E9D] bg-transparent text-[#7A3E9D]">
                  <ChevronLeft
                    size="30"
                    strokeWidth={1.5}
                    className="transition-all duration-300 group-hover:scale-125"
                  />
                </button>
                <button className="custom-next group size-8 cursor-pointer rounded-full border-[0.5px] border-[#7A3E9D] bg-transparent text-[#7A3E9D]">
                  <ChevronRight
                    size="30"
                    strokeWidth={1.5}
                    className="transition-all duration-300 group-hover:scale-125"
                  />
                </button>
                <button className="font-montserrat w cursor-pointer rounded-full bg-[#7A3E9D] px-5 py-1 text-[14px] text-white lg:ml-5 lg:px-6 lg:py-1.5 lg:text-base">
                  View All
                  <span className="pl-1.5 text-lg font-medium">
                    <i className="ri-arrow-right-long-fill"></i>
                  </span>
                </button>
              </div>
            </div>
            <Swiper
              className="w-full text-[16px] *:cursor-pointer"
              slidesPerView={2}
              spaceBetween={5}
              loop={true}
              breakpoints={{
                640: { slidesPerView: 3 },
                1024: { slidesPerView: 4, spaceBetween: 20 },
              }}
              keyboard={{
                enabled: true,
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              navigation={{
                enabled: true,
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              modules={[Autoplay, Navigation, Keyboard]}
            >
              {productCategory.map((product, index) => (
                <SwiperSlide key={index} className="group lg:overflow-hidden">
                  <Link to="/product-detail">
                    <div className="overflow-hidden rounded bg-white">
                      <img
                        src={product.img}
                        alt={product.name}
                        className="object-cover transition-all duration-500 group-hover:scale-125"
                      />
                    </div>
                    <div className="flex flex-col gap-2 p-3 text-[14px] lg:text-[15px] xl:text-base">
                      <span className="F font-medium">{product.name}</span>
                      <h4 className="flex items-center gap-2.5 bg-white text-base font-semibold tracking-wide text-gray-800 lg:text-lg">
                        <span className="text-[13px] text-gray-400 line-through lg:text-[14px]">
                          ₹299/-
                        </span>
                        ₹199/-
                      </h4>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="p-3 min-[1280px]:p-0 lg:relative">
          <div>
            <div className="flex items-center justify-between py-5">
              <h3 className="text-lg font-semibold lg:text-2xl xl:text-3xl">
                Top Categories
              </h3>
              <div className="flex items-center gap-2.5">
                {/* Navigation */}
                <button className="custom-prev group size-8 cursor-pointer rounded-full border-[0.5px] border-[#7A3E9D] bg-transparent text-[#7A3E9D]">
                  <ChevronLeft
                    size="30"
                    strokeWidth={1.5}
                    className="transition-all duration-300 group-hover:scale-125"
                  />
                </button>
                <button className="custom-next group size-8 cursor-pointer rounded-full border-[0.5px] border-[#7A3E9D] bg-transparent text-[#7A3E9D]">
                  <ChevronRight
                    size="30"
                    strokeWidth={1.5}
                    className="transition-all duration-300 group-hover:scale-125"
                  />
                </button>
                <button className="font-montserrat w cursor-pointer rounded-full bg-[#7A3E9D] px-5 py-1 text-[14px] text-white lg:ml-5 lg:px-6 lg:py-1.5 lg:text-base">
                  View All
                  <span className="pl-1.5 text-lg font-medium">
                    <i className="ri-arrow-right-long-fill"></i>
                  </span>
                </button>
              </div>
            </div>
            <Swiper
              className="w-full text-[16px] *:cursor-pointer"
              slidesPerView={2}
              spaceBetween={5}
              loop={true}
              breakpoints={{
                640: { slidesPerView: 3 },
                1024: { slidesPerView: 4, spaceBetween: 20 },
              }}
              keyboard={{
                enabled: true,
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              navigation={{
                enabled: true,
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              modules={[Autoplay, Navigation, Keyboard]}
            >
              {productCategory.map((product, index) => (
                <SwiperSlide key={index} className="group lg:overflow-hidden">
                  <Link to="/product-detail">
                    <div className="overflow-hidden rounded bg-white">
                      <img
                        src={product.img}
                        alt={product.name}
                        className="object-cover transition-all duration-500 group-hover:scale-125"
                      />
                    </div>
                    <div className="flex flex-col gap-2 p-3 text-[14px] lg:text-[15px] xl:text-base">
                      <span className="F font-medium">{product.name}</span>
                      <h4 className="flex items-center gap-2.5 bg-white text-base font-semibold tracking-wide text-gray-800 lg:text-lg">
                        <span className="text-[13px] text-gray-400 line-through lg:text-[14px]">
                          ₹299/-
                        </span>
                        ₹199/-
                      </h4>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="p-3 min-[1280px]:p-0 lg:relative">
          <div>
            <div className="flex items-center justify-between py-5">
              <h3 className="text-lg font-semibold lg:text-2xl xl:text-3xl">
                Top Categories
              </h3>
              <div className="flex items-center gap-2.5">
                {/* Navigation */}
                <button className="custom-prev group size-8 cursor-pointer rounded-full border-[0.5px] border-[#7A3E9D] bg-transparent text-[#7A3E9D]">
                  <ChevronLeft
                    size="30"
                    strokeWidth={1.5}
                    className="transition-all duration-300 group-hover:scale-125"
                  />
                </button>
                <button className="custom-next group size-8 cursor-pointer rounded-full border-[0.5px] border-[#7A3E9D] bg-transparent text-[#7A3E9D]">
                  <ChevronRight
                    size="30"
                    strokeWidth={1.5}
                    className="transition-all duration-300 group-hover:scale-125"
                  />
                </button>
                <button className="font-montserrat w cursor-pointer rounded-full bg-[#7A3E9D] px-5 py-1 text-[14px] text-white lg:ml-5 lg:px-6 lg:py-1.5 lg:text-base">
                  View All
                  <span className="pl-1.5 text-lg font-medium">
                    <i className="ri-arrow-right-long-fill"></i>
                  </span>
                </button>
              </div>
            </div>
            <Swiper
              className="w-full text-[16px] *:cursor-pointer"
              slidesPerView={2}
              spaceBetween={5}
              loop={true}
              breakpoints={{
                640: { slidesPerView: 3 },
                1024: { slidesPerView: 4, spaceBetween: 20 },
              }}
              keyboard={{
                enabled: true,
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              navigation={{
                enabled: true,
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              modules={[Autoplay, Navigation, Keyboard]}
            >
              {productCategory.map((product, index) => (
                <SwiperSlide key={index} className="group lg:overflow-hidden">
                  <Link to="/product-detail">
                    <div className="overflow-hidden rounded bg-white">
                      <img
                        src={product.img}
                        alt={product.name}
                        className="object-cover transition-all duration-500 group-hover:scale-125"
                      />
                    </div>
                    <div className="flex flex-col gap-2 p-3 text-[14px] lg:text-[15px] xl:text-base">
                      <span className="F font-medium">{product.name}</span>
                      <h4 className="flex items-center gap-2.5 bg-white text-base font-semibold tracking-wide text-gray-800 lg:text-lg">
                        <span className="text-[13px] text-gray-400 line-through lg:text-[14px]">
                          ₹299/-
                        </span>
                        ₹199/-
                      </h4>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {/* Filter for upper screen than lg*/}
      <div className="hidden min-[1280px]:w-[25%] lg:block">
        <div className="fixed top-0 right-0 z-50 min-[1280px]:sticky min-[1280px]:top-32 min-[1280px]:z-0">
          <Filter />
        </div>
        <div className="fixed top-0 left-0 z-40 h-screen w-screen bg-black/20 min-[1280px]:hidden"></div>
      </div>
    </section>
  );
}
