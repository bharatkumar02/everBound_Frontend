import { Minus } from "lucide-react";
export default function Filter() {
  return (
    <>
      <section className=" hidden min-w-[19rem] space-y-5 text-[15px] lg:block">
        {/* Category */}
        <div className="rounded-md bg-white p-7 shadow">
          <h3 className="relative mb-9 text-[17px] font-medium before:absolute before:-bottom-[13px] before:left-0 before:z-20 before:h-1 before:w-[40%] before:rounded-full before:bg-purple-700 after:absolute after:-bottom-3 after:left-0 after:z-10 after:h-[3px] after:w-full after:rounded-full after:bg-gray-100">
            Category
          </h3>
          <ul className="space-y-3 *:cursor-pointer">
            <li>
              <label
                htmlFor="category-1"
                className="flex items-center justify-between"
              >
                <div className="space-x-2.5">
                  <input type="checkbox" id="category-1" />
                  <span>Category-1</span>
                </div>
                <span className="text-gray-400">2</span>
              </label>
            </li>
            <li>
              <label
                htmlFor="category-2"
                className="flex items-center justify-between"
              >
                <div className="space-x-2.5">
                  <input type="checkbox" id="category-2" />
                  <span>Category-2</span>
                </div>
                <span className="text-gray-400">2</span>
              </label>
            </li>
            <li>
              <label
                htmlFor="category-3"
                className="flex items-center justify-between"
              >
                <div className="space-x-2.5">
                  <input type="checkbox" id="category-3" />
                  <span>Category-3</span>
                </div>
                <span className="text-gray-400">2</span>
              </label>
            </li>
            <li>
              <label
                htmlFor="category-4"
                className="flex items-center justify-between"
              >
                <div className="space-x-2.5">
                  <input type="checkbox" id="category-4" />
                  <span>Category-4</span>
                </div>
                <span className="text-gray-400">2</span>
              </label>
            </li>
            <li>
              <label
                htmlFor="category-5"
                className="flex items-center justify-between"
              >
                <div className="space-x-2.5">
                  <input type="checkbox" id="category-5" />
                  <span>Category-5</span>
                </div>
                <span className="text-gray-400">2</span>
              </label>
            </li>
            <li>
              <label
                htmlFor="category-6"
                className="flex items-center justify-between"
              >
                <div className="space-x-2.5">
                  <input type="checkbox" id="category-6" />
                  <span>Category-6</span>
                </div>
                <span className="text-gray-400">2</span>
              </label>
            </li>
          </ul>
        </div>
        {/* Color */}
        <div className="rounded-md bg-white p-7 shadow">
          <h3 className="relative mb-9 text-[17px] font-medium before:absolute before:-bottom-[13px] before:left-0 before:z-20 before:h-1 before:w-[40%] before:rounded-full before:bg-purple-700 after:absolute after:-bottom-3 after:left-0 after:z-10 after:h-[3px] after:w-full after:rounded-full after:bg-gray-100">
            Colors
          </h3>
          <ul className="space-y-3 *:cursor-pointer">
            <li>
              <label
                htmlFor="Color-1"
                className="flex items-center justify-between"
              >
                <div className="space-x-2.5">
                  <input type="checkbox" id="Color-1" />
                  <span>Color-1</span>
                </div>
                <span className="text-gray-400">2</span>
              </label>
            </li>
            <li>
              <label
                htmlFor="Color-2"
                className="flex items-center justify-between"
              >
                <div className="space-x-2.5">
                  <input type="checkbox" id="Color-2" />
                  <span>Color-2</span>
                </div>
                <span className="text-gray-400">2</span>
              </label>
            </li>
          </ul>
        </div>
        {/* Frames */}
        <div className="rounded-md bg-white p-7 shadow">
          <h3 className="relative mb-9 text-[17px] font-medium before:absolute before:-bottom-[13px] before:left-0 before:z-20 before:h-1 before:w-[40%] before:rounded-full before:bg-purple-700 after:absolute after:-bottom-3 after:left-0 after:z-10 after:h-[3px] after:w-full after:rounded-full after:bg-gray-100">
            Frames
          </h3>
          <ul className="space-y-3 *:cursor-pointer">
            <li>
              <label
                htmlFor="Frame-1"
                className="flex items-center justify-between"
              >
                <div className="space-x-2.5">
                  <input type="checkbox" id="Frame-1" />
                  <span>Frame-1</span>
                </div>
                <span className="text-gray-400">2</span>
              </label>
            </li>
            <li>
              <label
                htmlFor="Frame-2"
                className="flex items-center justify-between"
              >
                <div className="space-x-2.5">
                  <input type="checkbox" id="Frame-2" />
                  <span>Frame-2</span>
                </div>
                <span className="text-gray-400">2</span>
              </label>
            </li>
            <li>
              <label
                htmlFor="Frame-3"
                className="flex items-center justify-between"
              >
                <div className="space-x-2.5">
                  <input type="checkbox" id="Frame-3" />
                  <span>Frame-3</span>
                </div>
                <span className="text-gray-400">2</span>
              </label>
            </li>
          </ul>
        </div>
        {/* Price */}
        <div className="rounded-md bg-white p-7 shadow">
          <h3 className="relative mb-9 text-[17px] font-medium before:absolute before:-bottom-[13px] before:left-0 before:z-20 before:h-1 before:w-[40%] before:rounded-full before:bg-purple-700 after:absolute after:-bottom-3 after:left-0 after:z-10 after:h-[3px] after:w-full after:rounded-full after:bg-gray-100">
            Price
          </h3>
          <div>
            <div className="flex items-center gap-2 text-base font-medium tracking-wider">
              <span>₹0</span>{" "}
              <span>
                <Minus size={20} />{" "}
              </span>
              <span>₹5000</span>
            </div>
            <h4 className="mt-1.5 text-gray-400">Total Items: 9</h4>
            <div className="pt-7">
              <input
                type="range"
                name=""
                id=""
                className="w-full cursor-grab active:cursor-grabbing"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
