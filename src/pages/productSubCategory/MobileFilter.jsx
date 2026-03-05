import { Minus } from "lucide-react";
import { BadgeIndianRupee } from "lucide-react";
import { Link } from "react-router-dom";

export default function MobileFilter() {
  return (
    <section className="min-h-screen text-[15px]">
      {/* Top Header */}
      <div className="fixed top-0 flex w-full justify-between border-b-[0.5px] bg-white p-4">
        <h4 className="font-medium uppercase tracking-wide">Filter</h4>
        <button className="font-medium text-purple-700">Clear All</button>
      </div>
      {/* Bottom Buttons */}
      <div className="fixed bottom-0 flex w-full justify-between border-t-[0.5px] bg-white tracking-wide *:w-1/2 *:p-3">
        <Link
          to="/category"
          className="border-r-[0.5px] font-medium uppercase text-gray-800 text-center"
        >
          Close
        </Link>
        <Link
          to="/category"
          className="bg-purple-100/70 font-medium uppercase text-purple-700 text-center"
        >
          Apply
        </Link>
      </div>

      {/* Main Content */}
      <div className="flex items-start pb-12 pt-[55px] *:min-h-[85vh]">
        {/* Tabs */}
        <div className="min-w-[35%] bg-gray-100/90 md:min-w-[25%]">
          <ul className="divide-y-[0.5px] *:px-3.5 *:py-3">
            <li>Category</li>
            <li>Frames</li>
            <li>Color</li>
            <li>Size</li>
            <li>Price</li>
          </ul>
        </div>
        {/* Tabs Items */}
        <div className="w-full bg-white">
          {/* Categories */}
          <ul className=" py-2">
            <li>
              <label
                htmlFor="category_1"
                className="flex items-center justify-between px-3.5 py-2.5"
              >
                <div className="flex items-center gap-1.5">
                  <input type="checkbox" id="category_1" />
                  <span className="text-[14.5px]">Category 1</span>
                </div>
                <span className="text-[11px] text-gray-400">2</span>
              </label>
            </li>
            <li>
              <label
                htmlFor="category_2"
                className="flex items-center justify-between px-3.5 py-2.5"
              >
                <div className="flex items-center gap-1.5">
                  <input type="checkbox" id="category_2" />
                  <span className="text-[14.5px]">Category 2</span>
                </div>
                <span className="text-[11px] text-gray-400">2</span>
              </label>
            </li>
            <li>
              <label
                htmlFor="category_3"
                className="flex items-center justify-between px-3.5 py-2.5"
              >
                <div className="flex items-center gap-1.5">
                  <input type="checkbox" id="category_3" />
                  <span className="text-[14.5px]">Category 3</span>
                </div>
                <span className="text-[11px] text-gray-400">2</span>
              </label>
            </li>
            <li>
              <label
                htmlFor="category_4"
                className="flex items-center justify-between px-3.5 py-2.5"
              >
                <div className="flex items-center gap-1.5">
                  <input type="checkbox" id="category_4" />
                  <span className="text-[14.5px]">Category 4</span>
                </div>
                <span className="text-[11px] text-gray-400">2</span>
              </label>
            </li>
            <li>
              <label
                htmlFor="category_5"
                className="flex items-center justify-between px-3.5 py-2.5"
              >
                <div className="flex items-center gap-1.5">
                  <input type="checkbox" id="category_5" />
                  <span className="text-[14.5px]">Category 5</span>
                </div>
                <span className="text-[11px] text-gray-400">2</span>
              </label>
            </li>
            <li>
              <label
                htmlFor="category_6"
                className="flex items-center justify-between px-3.5 py-2.5"
              >
                <div className="flex items-center gap-1.5">
                  <input type="checkbox" id="category_6" />
                  <span className="text-[14.5px]">Category 6</span>
                </div>
                <span className="text-[11px] text-gray-400">2</span>
              </label>
            </li>
            <li>
              <label
                htmlFor="category_7"
                className="flex items-center justify-between px-3.5 py-2.5"
              >
                <div className="flex items-center gap-1.5">
                  <input type="checkbox" id="category_7" />
                  <span className="text-[14.5px]">Category 7</span>
                </div>
                <span className="text-[11px] text-gray-400">2</span>
              </label>
            </li>
          </ul>
          {/* Price */}
          <div className="space-y-2 px-3.5 py-2.5 hidden">
            <h4 className="flex items-center gap-1.5 text-gray-400">
              Set Price Range <BadgeIndianRupee size={18} />
            </h4>
            <div className="flex items-center gap-2 text-base font-medium tracking-wider">
              <span>₹0</span>{" "}
              <span>
                <Minus size={20} />{" "}
              </span>
              <span>₹5000</span>
            </div>
            <h4 className="text-gray-400">Total Items: 9</h4>
            <div className="pt-20">
              <input type="range" name="" id="" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
