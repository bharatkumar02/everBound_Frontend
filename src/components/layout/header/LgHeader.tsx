import MenuItems from "./MenuItems";
import AccountList from "../../../data/AccountList.json";
import {
  UserPen,
  ShoppingBag,
  Heart,
  HandCoins,
  Tag,
  MapPinned,
  Search,
  ShoppingCart,
  EllipsisVertical,
  CircleUserRound,
  LogOut,
} from "lucide-react";

type IconName = keyof typeof iconMap;
interface AccountItem {
  label: string;
  to: string;
  icon: IconName;
  description: string;
}

const AccountListItems = AccountList as AccountItem[];

const iconMap = {
  UserPen,
  ShoppingBag,
  Heart,
  MapPinned,
  Tag,
  HandCoins,
};

export default function LgHeader() {
  return (
    <div className="flex items-center justify-between bg-white px-3.5 py-5 xl:px-14">
      <div className="flex w-2/3 items-center justify-start gap-10 xl:gap-16">
        <a href="#">
          <img src="/logo/logo2.png" alt="logo" className="max-w-[13rem]" />
        </a>
        <div className="flex w-[50%] justify-between overflow-hidden rounded-full border-[0.5px] border-gray-200 bg-gray-50 text-[15px] *:py-2.5">
          <label
            htmlFor="search"
            className="flex w-full cursor-text items-center justify-between"
          >
            <input
              type="text"
              id="search"
              placeholder="Search here for products"
              className="w-full bg-transparent px-7 outline-none"
            />
          </label>
          <button className="bg-gray-200 px-5 py-2.5 font-medium tracking-wide text-black">
            <Search size={22} strokeWidth={1.7} />
          </button>
        </div>
      </div>
      <div className="flex w-1/3 items-center justify-end gap-10 text-[14px]">
        <a href="#" className="flex items-center gap-2.5">
          <ShoppingCart size={22} strokeWidth={1.7} />
          My Cart
        </a>
        <div className="relative">
          <button className="peer flex cursor-pointer items-center gap-2.5">
            <CircleUserRound size={22} strokeWidth={1.7} />
            My Account
          </button>
          <div className="translate-all invisible absolute top-12 -left-3 z-50 w-full min-w-[12rem] translate-y-2 divide-y-[0.5px] rounded-md bg-white text-start text-[14.5px] opacity-0 shadow-md duration-300 peer-focus:visible peer-focus:translate-y-0 peer-focus:opacity-100">
            <ul className="divide-y-[0.5px]">
              {AccountListItems.map((item, index) => {
                const IconComponent = iconMap[item.icon];
                return (
                  <li key={index}>
                    <a
                      href={item.to}
                      className="flex cursor-pointer items-center gap-3.5 px-4 py-2.5"
                    >
                      <div className="flex items-start gap-5">
                        {/* {IconComponent && ( */}
                        <IconComponent strokeWidth={1.5} size={20} />
                        {/* )} */}
                        <p className="flex flex-col">
                          <span className="font-medium md:font-normal">
                            {item.label}
                          </span>
                        </p>
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="bg-red-50">
              <a
                href="#"
                className="flex cursor-pointer items-center gap-3.5 px-4 py-2.5 text-red-600"
              >
                <LogOut strokeWidth={1.5} size={20} /> Logout
              </a>
            </div>
          </div>
        </div>
        <div className="relative z-50">
          <button className="peer cursor-pointer rounded-full bg-gray-100 p-2 shadow">
            <EllipsisVertical size={20} className="peer drop-shadow-md" />
          </button>
          <ul className="translate-all invisible absolute top-12 right-0 w-full min-w-[12rem] translate-y-2 divide-y-[0.5px] overflow-hidden rounded-md bg-white pt-1 text-start text-[14.5px] opacity-0 shadow-md duration-300 peer-focus:visible peer-focus:translate-y-0 peer-focus:opacity-100">
            <MenuItems />
          </ul>
        </div>
      </div>
    </div>
  );
}
