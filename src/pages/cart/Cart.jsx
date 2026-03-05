import ProductCrousel from "../../components/productCrousel/ProductCrousel";
import { SwiperSlide } from "swiper/react";
import CartItems from "./CartItems";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import CartSummary from "./CartSummary";

const productList = [
  {
    img: "/public/images/img-63.jpg",
    name: "Acrylic photo Frames1",
  },
  {
    img: "/public/images/img-62.jpg",
    name: "Acrylic Photo Frames2",
  },
  {
    img: "/public/images/img-69.jpg",
    name: "Acrylic Photo Frames3",
  },
  {
    img: "/public/images/f-1.jpg",
    name: "Acrylic Photo Frames4",
  },
  {
    img: "/public/images/img-63.jpg",
    name: "Acrylic photo Frames1",
  },
  {
    img: "/public/images/img-62.jpg",
    name: "Acrylic Photo Frames2",
  },
  {
    img: "/public/images/img-69.jpg",
    name: "Acrylic Photo Frames3",
  },
  {
    img: "/public/images/f-1.jpg",
    name: "Acrylic Photo Frames4",
  },
];

function Cart() {
  return (
    <>
      <section className="relative mx-auto max-w-[500px] bg-gray-100 text-[15px] text-gray-800 md:max-w-[1500px] lg:text-base">
        {/* Upper Title */}
        <div className="fixed left-0 top-0 z-50 flex w-full items-center justify-between border-b-[0.5px] bg-white px-2 py-5 uppercase lg:hidden">
          <span className="flex items-center gap-2.5 text-lg font-medium">
            <ArrowLeft size={22} strokeWidth={1.5} />
            My Cart
          </span>
          <p className="text-[16px] normal-case">(5 Items)</p>
        </div>

        <div className="relative pt-1 md:flex md:gap-7 md:px-5 lg:mx-auto lg:max-w-[90%] lg:py-14 lg:pb-10 xl:max-w-[80%] xl:gap-20">
          {/* List of Items */}
          <CartItems />
          {/* Order Summary */}
          <CartSummary />
        </div>
        
        <div className="sticky bottom-16 left-0 flex items-center justify-between bg-white p-3.5 md:hidden">
          <span className="text-xl font-medium">₹ 8200/-</span>
          <button className="rounded-lg border-[0.5px] bg-purple-700 px-6 py-2 text-base text-white">
            <Link to="/checkout">Checkout</Link>
          </button>
        </div>
        {/* Some Related Products as Crousels*/}
        <div className="py-2 ">
          <ProductCrousel title="Related Products" className="bg-gray-100">
            {productList.map((item, index) => (
              <SwiperSlide
                key={index}
                 className='max-w-[15rem] pt-2 text-[0.9rem] md:max-w-[20rem]'
              >
                <div className="bg-white shadow-[0px_0px_5px_0px_#d9d9d9] w-full">
                  <img src={item.img} alt="Items" className="py-3" />
                </div>
                <div className="px-1.5 py-3 text-center">
                  <h3>{item.name}</h3>
                </div>
              </SwiperSlide>
            ))}
          </ProductCrousel>
        </div>
      </section>
    </>
  );
}

export default Cart;
