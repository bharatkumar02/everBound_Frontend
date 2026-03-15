import { NavLink } from "react-router";
import {
  LogOut,
  ChevronRight,
  UserPen,
  ShoppingBag,
  Heart,
  MapPinned,
  Tag,
  HandCoins,
  type LucideIcon,
} from "lucide-react";
import Header from "./Header";

const iconMap: Record<string, LucideIcon> = {
  UserPen,
  ShoppingBag,
  Heart,
  MapPinned,
  Tag,
  HandCoins,
};

export default function Sidebar() {
  return (
    <aside>
      <div className="lg:hidden">
        <Header />
      </div>
      <div className="space-y-3">
        <section className="bg-gray-100 text-[15px] lg:bg-white">
          <div>
            <div className="mx-auto w-fit translate-y-10 rounded-lg bg-gray-100 px-5 py-3 pt-5 md:flex md:w-full md:translate-y-0 md:items-center md:gap-1 md:rounded-none lg:items-center lg:gap-5 lg:py-10">
              <div className="mx-auto max-w-[10rem] md:mx-0 md:max-w-[4rem]">
                {(() => {
                  const name = "Bharat kumar";
                  const initials = name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .toUpperCase();
                  return (
                    <div
                      aria-label="Registrant avatar"
                      className="mx-auto flex size-20 items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-purple-700 text-3xl font-bold tracking-widest text-white"
                    >
                      {initials}
                    </div>
                  );
                })()}
              </div>
              <div className="mt-5 flex flex-col items-center justify-center space-y-1 text-[16px] font-medium tracking-wider text-gray-600 md:space-y-0 lg:mt-0">
                <strong>Bharat kumar</strong>
                <span>+91 8397826133</span>
              </div>
            </div>
            <div className="h-16 bg-white md:hidden"></div>
          </div>

          <ul className="divide-y-[0.5px] *:bg-white *:px-4 *:py-3 *:md:px-8 *:lg:py-4">
            {[
              {
                label: "My Profile",
                to: "/customer/myprofile",
                icon: "UserPen",
                description: "Update your profile info.",
              },
              {
                label: "My Orders",
                to: "/customer/orders",
                icon: "ShoppingBag",
                description: "View and manage your orders status.",
              },
              {
                label: "My Wishlist",
                to: "/customer/wishlist",
                icon: "Heart",
                description: "Save items you love.",
              },
              {
                label: "Addresses",
                to: "/customer/addresses",
                icon: "MapPinned",
                description: "Add an address for smooth delivery.",
              },
              {
                label: "Earn & Refer",
                to: "/customer/referrals",
                icon: "HandCoins",
                description: "Invite and earn with each referral.",
              },
            ].map((item, index) => {
              const IconComponent = iconMap[item.icon];

              return (
                <li key={index}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center justify-between text-purple-700"
                        : "flex items-center justify-between"
                    }
                  >
                    <div className="flex items-start gap-5">
                      {IconComponent && <IconComponent strokeWidth={1.7} />}
                      <p className="flex flex-col">
                        <span className="font-medium md:font-normal">
                          {item.label}
                        </span>
                        <span className="text-[12px] text-gray-500 md:hidden">
                          {item.description}
                        </span>
                      </p>
                    </div>
                    <ChevronRight
                      strokeWidth={1.2}
                      className="text-gray-500 md:hidden"
                    />
                  </NavLink>
                </li>
              );
            })}
          </ul>

          <div className="border-none bg-gray-100 py-2 text-red-500 md:bg-white">
            <div className="bg-white p-3 md:bg-gray-100 md:px-8">
              <button
                onClick={() => {
                  localStorage.removeItem("authToken");
                  localStorage.removeItem("user");
                  sessionStorage.clear();
                  window.location.href = "/login";
                }}
                className="flex items-start gap-5 font-medium"
              >
                <LogOut strokeWidth={1.7} />
                Logout
              </button>
            </div>
          </div>
        </section>
      </div>
    </aside>
  );
}
