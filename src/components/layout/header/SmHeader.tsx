// import { Link } from "react-router";
import MenuItems from "./MenuItems";
import CustomSheet from "../../common/CustomSheet";
import MainProducts from "./ProductList";
import {
  Search,
  UserRound,
  ShoppingCart,
  AlignJustify,
  EllipsisVertical,
  House,
} from "lucide-react";

const bottomButtons = [
  { name: "Home", icon: House, link: "/" },
  { name: "My Cart ", icon: ShoppingCart, link: "/cart" },
  { name: "Account", icon: UserRound, link: "/sidebar" },
  { name: "Menu", icon: AlignJustify },
];

export default function SmHeader() {
  return (
    <>
      <section className="fixed top-0 left-0 z-40 flex w-full max-w-full items-center justify-between gap-4 border-b-[0.5px] border-b-gray-300 bg-white px-3.5 py-4">
        <div>
          <img src="/logo/logo.png" alt="logo" className="max-w-[4.5rem]" />
        </div>
        <div className="flex items-center gap-3">
          <div>
            <div className="flex w-full justify-between overflow-hidden rounded-full border-[0.5px] border-gray-200 bg-gray-50 text-[15px] *:py-2">
              <label
                htmlFor="search"
                className="flex w-full cursor-text items-center justify-between"
              >
                <input
                  type="text"
                  id="search"
                  placeholder="Search here for products"
                  className="w-full bg-transparent px-4 text-[14px] outline-none"
                />
              </label>
              <button className="bg-gray-200 px-3 py-2.5 font-medium tracking-wide text-black">
                <Search size={20} strokeWidth={1.7} />
              </button>
            </div>
          </div>

          <div className="relative">
            <button className="peer rounded-full bg-gray-100 p-2 shadow">
              <EllipsisVertical size={20} className="peer drop-shadow-md" />
            </button>
            <ul className="translate-all invisible absolute top-12 right-0 z-50 w-full min-w-[12rem] translate-y-2 divide-y-[0.5px] overflow-hidden rounded-md bg-white pt-1 text-start text-[14.5px] opacity-0 shadow-md duration-300 peer-focus:visible peer-focus:translate-y-0 peer-focus:opacity-100">
              <MenuItems />
            </ul>
          </div>
        </div>
      </section>
      <section className="fixed bottom-0 left-0 z-40 w-full border-t-[0.5px] border-t-gray-300 bg-white">
        <ul className="flex items-center py-2.5 text-[13px] *:w-1/4">
          {bottomButtons.map((item, index) =>
            index !== 3 ? (
              <li key={index}>
                <a
                  href={item.link}
                  className="mx-auto flex w-fit flex-col items-center gap-[1px]"
                >
                  <item.icon size={22} strokeWidth={1.5} />
                  <span>{item.name}</span>
                </a>
              </li>
            ) : (
              <li key={index}>
                <div className="flex items-center justify-center">
                  <CustomSheet
                    sheetTrigger={
                      <div className="mx-auto flex w-fit flex-col items-center gap-[1px]">
                        <item.icon size={22} strokeWidth={1.5} />
                        <span>{item.name}</span>
                      </div>
                    }
                    sheetDescription={<MainProducts />}
                  />
                </div>
              </li>
            ),
          )}
        </ul>
      </section>
    </>
  );
}
