import { Link } from "react-router";

const productList2 = [
  {
    img: "https://static-assets-prod.fnp.com/assets/images/custom/new-icons-2026/yellow-theme/Birthday-Desk-Icon.png",
    name: "Birthday",
    to: "/category2",
  },
  {
    img: "https://static-assets-prod.fnp.com/assets/images/custom/new-icons-2026/yellow-theme/Anniversary-Desk-Icon.png",
    name: "Anniversary",
    to: "/category/awards-trophies",
  },
  {
    img: "https://static-assets-prod.fnp.com/assets/images/custom/new-icons-2026/yellow-theme/Flowers-Desk-Icon.png",
    name: "Love & Couples",
    to: "/category/business-stationery",
  },
  {
    img: "https://static-assets-prod.fnp.com/assets/images/custom/new-icons-2026/yellow-theme/Same-Day-Delivery-Desk-Icon.png",
    name: "Congratulations",
    to: "/category/corporate-gifts",
  },
  {
    img: "https://giftcart.com/cdn/shop/products/co-cm05gbgt46419_500x.webp?v=1739858587",
    name: "New Baby & Kids",
    to: "/category/drinkware",
  },
  {
    img: "https://static-assets-prod.fnp.com/images/pr/l/v20250417014714/floral-n-nutty-hamper-for-mom_1.jpg",
    name: "Festivals",
    to: "/category/packaging",
  },
  {
    img: "https://giftcart.com/cdn/shop/files/CM08GBGT53739-F2_500x.jpg?v=1720077104",
    name: "Farewell",
    to: "/category/photo-gifts",
  },
  {
    img: "https://static-assets-prod.fnp.com/images/pr/l/v300/green-haven_1.jpg",
    name: "Housewarming",
    to: "/category/signs-marketing",
  },
];

export default function Category() {
  return (
    <>
      <section className="grid grid-cols-3 gap-7 px-5 py-8 md:grid-cols-4 lg:flex lg:gap-10 lg:p-16">
        {productList2.map((item, index) => (
          <Link
            to={item.to}
            key={index}
            className="mx-auto flex w-fit flex-col items-center gap-y-1 pt-1 text-center text-[12px] font-medium lg:gap-y-2.5 lg:text-[14px]"
          >
            <div className="group mx-auto max-w-[8.5rem] overflow-hidden rounded-full bg-gray-100 shadow">
              <img
                src={item.img}
                alt="Frame"
                className="transition-all duration-300 group-hover:scale-110"
              />
            </div>
            <span className="">{item.name}</span>
          </Link>
        ))}
      </section>
    </>
  );
}
