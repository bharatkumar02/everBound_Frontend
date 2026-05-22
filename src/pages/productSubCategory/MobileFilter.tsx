import { Minus } from "lucide-react";
import { BadgeIndianRupee } from "lucide-react";
import { Link } from "react-router";

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
          className="border-r-[0.5px] text-center font-medium uppercase text-gray-800"
        >
          Close
        </Link>
        <Link
          to="/category"
          className="bg-purple-100/70 text-center font-medium uppercase text-purple-700"
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
        {/* Tab Items */}
        <div className="w-full bg-white">
          {/* Categories */}
          <ul className="py-2">
            {[1, 2, 3, 4, 5, 6, 7].map((n) => (
              <li key={n}>
                <label
                  htmlFor={`category_${n}`}
                  className="flex items-center justify-between px-3.5 py-2.5"
                >
                  <div className="flex items-center gap-1.5">
                    <input type="checkbox" id={`category_${n}`} />
                    <span className="text-[14.5px]">Category {n}</span>
                  </div>
                  <span className="text-[11px] text-gray-400">2</span>
                </label>
              </li>
            ))}
          </ul>
          {/* Price */}
          <div className="hidden space-y-2 px-3.5 py-2.5">
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
              <input
                type="range"
                id="price-range"
                name="price-range"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
