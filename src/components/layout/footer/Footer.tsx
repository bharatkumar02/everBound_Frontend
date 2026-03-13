import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation, Keyboard } from "swiper/modules";
import { Link } from "react-router";

interface ProductListData {
  img: string;
  name: string;
  title: string;
}
interface PaymentGateway {
  img: string;
  alt: string;
}

interface FooterLink {
  listName: string;
  link: string;
}

interface FooterData {
  name: string;
  list: FooterLink[];
}

const productList: ProductListData[] = [
  {
    img: "/public/images/img-63.jpg",
    name: "T-Shirts",
    title: "Trending",
  },
  {
    img: "/public/images/img-62.jpg",
    name: "Phone Case",
    title: "New Arrival",
  },
  {
    img: "/public/images/img-69.jpg",
    name: "Acrylic Frames",
    title: "Gifts",
  },
  {
    img: "/public/images/f-1.jpg",
    name: "Photo Books",
    title: "For Couples",
  },
  {
    img: "/public/images/img-63.jpg",
    name: "Office Stationary",
    title: "Trending",
  },
  {
    img: "/public/images/img-62.jpg",
    name: "Phone Case",
    title: "New Arrival",
  },
  {
    img: "/public/images/img-69.jpg",
    name: "Acrylic Frames",
    title: "Gifts",
  },
  {
    img: "/public/images/f-1.jpg",
    name: "Photo Books",
    title: "For Couples",
  },
];

const paymentGateway: PaymentGateway[] = [
  { img: "/visaCard.svg", alt: "Visa Card" },
  { img: "/googlePay.svg", alt: "Google Pay" },
  { img: "/mastercard.svg", alt: "Master Card" },
  { img: "/bhimUPI.svg", alt: "Bhim UPI" },
  { img: "/paytm.svg", alt: "Paytm" },
];

const footerData: FooterData[] = [
  {
    name: "Support",
    list: [
      {
        listName: "Help Center",
        link: "contact-us",
      },
      {
        listName: "FAQ's",
        link: "faq",
      },

      {
        listName: "My Account",
        link: "/",
      },
      {
        listName: "Track Order",
        link: "/",
      },
    ],
  },
  {
    name: "Our Company",
    list: [
      {
        listName: "About Us",
        link: "about-us",
      },
      {
        listName: "Terms & Conditions",
        link: "terms-conditions",
      },
      {
        listName: "Privacy Policy",
        link: "privacy-policy",
      },

      {
        listName: "Return Policy",
        link: "return-policy",
      },
    ],
  },
  {
    name: "Product",

    list: [
      {
        listName: "Flower & Bouquets",
        link: "/",
      },
      {
        listName: "Cakes & Choclates",
        link: "/",
      },
      {
        listName: "Jewelry & Keepsakes",
        link: "/",
      },
      {
        listName: "Plants & Greenry",
        link: "/",
      },
      {
        listName: "Extra Smiles",
        link: "/",
      },
    ],
  },
];

function Footer() {
  return (
    <>
      <>
        <footer className="bg-[#1E1E1E] pb-16 text-gray-300 md:pb-0">
          <div className="mx-auto grid gap-10 px-6 py-10 text-sm sm:w-full sm:max-w-[700px] sm:grid-cols-2 sm:gap-20 md:gap-x-32 lg:flex lg:max-w-[1250px] lg:justify-between lg:gap-10 lg:text-[15px] xl:py-16">
            {/* <!-- Logo & About --> */}
            <section className="space-y-4 text-gray-400 lg:space-y-6">
              <div>
                <a href="./" className="">
                  <img src="/logo/logo.png" alt="" className="max-w-[6rem]" />
                </a>
              </div>
              <p className="max-w-[300px] text-gray-400">
                We shape ideas into digital excellence with innovative web and
                mobile solutions for your business growth.
              </p>

              <div className="relative mt-3 max-w-[20rem]">
                <Swiper
                  slidesPerView={4}
                  spaceBetween={3}
                  loop={true}
                  // breakpoints={{
                  //   640: { slidesPerView: 5 },
                  //   1440: { slidesPerView: 4 },
                  // }}
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
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev",
                  }}
                  modules={[Autoplay, Navigation, Keyboard]}
                >
                  {productList.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className="max-w-[25rem] p-1.5">
                        <div className="group cursor-pointer overflow-hidden rounded-lg">
                          <img
                            src={item.img}
                            alt={item.name}
                            loading="lazy"
                            className="transition-all duration-300 group-hover:scale-125"
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </section>

            {footerData.map((item, index) => (
              <div key={index}>
                <h3 className="mb-4 w-fit border-b-[0.5px] border-white/30 pb-2.5 text-lg font-semibold tracking-wide text-white lg:mb-8">
                  {item.name}
                </h3>
                <ul className="space-y-2 lg:space-y-3.5">
                  {item.list.map((listItem, index) => (
                    <li key={index}>
                      <Link
                        to={listItem.link}
                        className="relative inline-block transition after:block after:h-0.5 after:w-0 after:bg-[#E5C185] after:transition-all hover:text-[#E5C185] hover:after:w-full"
                      >
                        {listItem.listName}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact Support */}
            <div>
              <h3 className="mb-4 w-fit border-b-[0.5px] border-white/30 pb-2.5 text-lg font-semibold tracking-wide text-white lg:mb-8">
                Contact Us
              </h3>
              <div className="flex flex-col gap-1.5 text-[14px] tracking-widest">
                {/* <!-- Email --> */}
                <a
                  href="mailto:printshoppy@gmail.com"
                  className="flex items-center gap-3"
                >
                  <div className="w-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-full"
                    >
                      <path d="M2.243 6.854 11.49 1.31a1 1 0 0 1 1.028 0l9.24 5.545a.5.5 0 0 1 .242.429V20a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.283a.5.5 0 0 1 .243-.429ZM4 8.133V19h16V8.132l-7.996-4.8L4 8.132Zm8.06 5.565 5.296-4.463 1.288 1.53-6.57 5.537-6.71-5.53 1.272-1.544 5.424 4.47Z" />
                    </svg>
                  </div>
                  theshopio@gmail.com
                </a>

                {/* <!-- Phone --> */}
                <a href="tel:+918178468838" className="flex items-center gap-3">
                  <div className="w-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-full"
                    >
                      <path d="M9.366 10.682a10.556 10.556 0 0 0 3.952 3.952l.884-1.238a1 1 0 0 1 1.294-.296 11.421 11.421 0 0 0 4.583 1.364 1 1 0 0 1 .921.997v4.462a1 1 0 0 1-.898.995c-.53.055-1.064.082-1.602.082C9.94 21 3 14.06 3 5.5c0-.538.027-1.072.082-1.602A1 1 0 0 1 4.077 3h4.462a1 1 0 0 1 .997.921A11.421 11.421 0 0 0 10.9 8.504a1 1 0 0 1-.296 1.294l-1.238.884Zm-2.522-.657 1.9-1.357A13.41 13.41 0 0 1 7.647 5H5.01c-.006.166-.009.333-.009.5C5 12.956 11.044 19 18.5 19c.167 0 .334-.003.5-.01v-2.637a13.41 13.41 0 0 1-3.668-1.097l-1.357 1.9a12.45 12.45 0 0 1-1.588-.75l-.058-.033a12.556 12.556 0 0 1-4.702-4.702l-.033-.058a12.441 12.441 0 0 1-.75-1.588Z" />
                    </svg>
                  </div>
                  +91 245789634
                </a>
              </div>
              <div className="mt-6">
                <h3 className="mb-5 w-fit border-b-[0.5px] border-white/30 pb-2.5 text-lg font-semibold tracking-wide text-white">
                  Follow Us
                </h3>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.facebook.com/dverto_ai/"
                    target="_blank"
                    className="max-w-[1.4rem] transform text-gray-400 transition-all hover:scale-110 hover:text-[#E5C185]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-full"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.001 2c-5.523 0-10 4.477-10 10 0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10Z" />
                    </svg>
                  </a>
                  <a
                    href="https://x.com/Dverto_ai"
                    target="_blank"
                    className="max-w-[1.4rem] transform text-gray-400 transition-all hover:scale-110 hover:text-[#E5C185]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-full"
                      viewBox="0 0 24 24"
                    >
                      <path d="m17.687 3.063-4.996 5.711-4.32-5.711H2.112l7.477 9.776-7.086 8.098h3.034l5.469-6.248 4.78 6.248h6.101l-7.793-10.303 6.625-7.572h-3.033Zm-1.064 16.06L5.654 4.782h1.803l10.846 14.34h-1.68Z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/dverto.ai/?g=5"
                    target="_blank"
                    className="max-w-[1.4rem] transform text-gray-400 transition-all hover:scale-110 hover:text-[#E5C185]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-full"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13.028 2c1.125.003 1.696.009 2.189.023l.194.007c.224.008.445.018.712.03 1.064.05 1.79.218 2.427.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.012.266.022.487.03.712l.006.194c.015.492.021 1.063.023 2.188l.001.746v1.31a78.831 78.831 0 0 1-.023 2.188l-.006.194c-.008.225-.018.446-.03.712-.05 1.065-.22 1.79-.466 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465a72.11 72.11 0 0 1-.712.03l-.194.006c-.493.014-1.064.021-2.189.023l-.746.001h-1.309a78.43 78.43 0 0 1-2.189-.023l-.194-.006a63.036 63.036 0 0 1-.712-.031c-1.064-.05-1.79-.218-2.428-.465a4.889 4.889 0 0 1-1.771-1.153 4.904 4.904 0 0 1-1.154-1.772c-.247-.637-.415-1.363-.465-2.428a74.1 74.1 0 0 1-.03-.712l-.005-.194A79.047 79.047 0 0 1 2 13.028v-2.056a78.82 78.82 0 0 1 .022-2.188l.007-.194c.008-.225.018-.446.03-.712.05-1.065.218-1.79.465-2.428A4.88 4.88 0 0 1 3.68 3.678 4.897 4.897 0 0 1 5.45 2.525c.638-.247 1.363-.415 2.428-.465.266-.012.488-.022.712-.03l.194-.006a79 79 0 0 1 2.188-.023h2.056ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 .001 6 3 3 0 0 1 0-6Zm5.25-3.5a1.25 1.25 0 0 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/dverto-ai/"
                    target="_blank"
                    className="max-w-[1.4rem] transform text-gray-400 transition-all hover:scale-110 hover:text-[#E5C185]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-full"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.336 18.339h-2.665v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715ZM7.004 8.575a1.546 1.546 0 0 1-1.548-1.549 1.548 1.548 0 1 1 1.547 1.549Zm1.336 9.764H5.667V9.75H8.34v8.589ZM19.67 3H4.33C3.594 3 3 3.58 3 4.297v15.406c0 .717.594 1.297 1.328 1.297h15.339C20.4 21 21 20.42 21 19.703V4.297c0-.716-.6-1.297-1.334-1.297h.003Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Bottom --> */}
          <div className="border-t-[0.5px] border-gray-950 py-4 text-center text-gray-500">
            <div className="flex flex-col gap-7 md:mx-auto md:max-w-[1250px] md:flex-row md:items-center md:justify-between md:gap-0">
              <div className="mt-5 md:mt-0 md:w-[40%] lg:w-[30%] xl:w-[23%]">
                <ul className="flex items-center justify-evenly px-2 *:drop-shadow-xl md:justify-between *:md:rounded-md *:md:p-1 *:md:shadow-md">
                  {paymentGateway.map((item, index) => (
                    <li
                      key={index}
                      className="max-w-[2.3rem] lg:max-w-[2.5rem]"
                    >
                      <img
                        src={item.img}
                        alt={item.alt}
                        className="size-full"
                        loading="lazy"
                      />
                    </li>
                  ))}
                </ul>
              </div>
              <p>&copy; 2025 The Shopio. All Rights Reserved.</p>
            </div>
          </div>
        </footer>
      </>
    </>
  );
}

export default Footer;
