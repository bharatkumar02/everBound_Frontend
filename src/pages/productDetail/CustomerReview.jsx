import { Star, ChevronDown, ThumbsUp, ThumbsDown } from "lucide-react";

export default function CustomerReview() {
  return (
    <div className="px-4 md:mt-10">
      <h2 className="mb-7 text-xl font-medium md:text-2xl">Customer Reviews</h2>
      <div className="md:flex md:divide-x md:gap-5">
        {/* Rating Numbers */}
        <div className="flex divide-x md:flex-col md:divide-x-0  md:gap-7">
          {/* Upper Number and Star */}
          <div className="flex flex-col gap-3 pr-4 md:flex-row md:items-center md:justify-center">
            <div className="space-x-1 text-lg">
              <span className="text-6xl font-light">4.5</span>
              <span>/</span>
              <span>5</span>
            </div>
            <div className="leading-4">
              <ul className="flex items-center gap-1.5">
                {[1, 2, 3, 4, 5].map((item) => (
                  <li key={item} className="text-purple-700">
                    <Star size={18} fill="#7e22ce" />
                  </li>
                ))}
              </ul>
              <span className="text-[11px] font-medium text-gray-400">
                Based on 214 Reviews
              </span>
            </div>
          </div>
          {/* Bottom Number and Star */}
          <div className="w-full pl-4 text-[14px]">
            <ul className="*:flex *:items-center *:gap-3">
              <li>
                <span className="flex w-10 items-center gap-3">
                  5
                  <Star size={14} fill="#7e22ce" className="text-purple-700" />
                </span>
                <div className="relative h-[3px] w-[90%] rounded-full bg-gray-300 before:absolute before:h-[3px] before:w-full before:rounded-full before:bg-gray-500"></div>
                <span className="w-10">182</span>
              </li>
              <li>
                <span className="flex w-10 items-center gap-3">
                  4
                  <Star size={14} fill="#7e22ce" className="text-purple-700" />
                </span>
                <div className="relative h-[3px] w-[90%] rounded-full bg-gray-300 before:absolute before:h-[3px] before:w-[80%] before:rounded-full before:bg-gray-500"></div>
                <span className="w-10">34</span>
              </li>
              <li>
                <span className="flex w-10 items-center gap-3">
                  3
                  <Star size={14} fill="#7e22ce" className="text-purple-700" />
                </span>
                <div className="relative h-[3px] w-[90%] rounded-full bg-gray-300 before:absolute before:h-[3px] before:w-[30%] before:rounded-full before:bg-gray-500"></div>
                <span className="w-10">10</span>
              </li>
              <li>
                <span className="flex w-10 items-center gap-3">
                  2
                  <Star size={14} fill="#7e22ce" className="text-purple-700" />
                </span>
                <div className="relative h-[3px] w-[90%] rounded-full bg-gray-300 before:absolute before:h-[3px] before:w-0 before:rounded-full before:bg-gray-500"></div>
                <span className="w-10">0</span>
              </li>
              <li>
                <span className="flex w-10 items-center gap-3">
                  1
                  <Star size={14} fill="#7e22ce" className="text-purple-700" />
                </span>
                <div className="relative h-[3px] w-[90%] rounded-full bg-gray-300 before:absolute before:h-[3px] before:w-0 before:rounded-full before:bg-gray-500"></div>
                <span className="w-10">0</span>
              </li>
            </ul>
          </div>
        </div>
        {/* Rating Detail */}
        <div className="my-5 text-[15px] md:pl-8">
          {/* Sorting */}
          <div className="flex items-center justify-between gap-5 rounded-md bg-gray-100 px-3 py-2">
            <h4 className="font-medium">Sort By</h4>
            <span className="flex items-center gap-10 rounded-md bg-white px-3 py-2 shadow">
              All Rating <ChevronDown size={18} />
            </span>
          </div>
          {/* Customer Rating */}
          <ul className="divide-y *:py-5">
            <li className="space-y-3">
              {/* Stars */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Star size={15} fill="#7e22ce" className="text-purple-700" />

                  <Star size={15} fill="#7e22ce" className="text-purple-700" />

                  <Star size={15} fill="#7e22ce" className="text-purple-700" />

                  <Star size={15} fill="#7e22ce" className="text-purple-700" />

                  <Star size={15} fill="#7e22ce" className="text-purple-700" />
                </div>
                <span className="text-[14px] text-gray-400">Yesterday</span>
              </div>
              {/* Name */}
              <h4 className="font-medium">Bharat Kumar</h4>
              {/* Paragraph */}
              <p className="leading-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
                nulla, esse vel quasi quam dignissimos assumenda.
              </p>
              {/* Image */}
              <div className="flex flex-wrap gap-2">
                <img
                  src="https://cdn.printshoppy.com/image/cache/catalog/product-image/wooden-photo-stands/wooden-photo-stands-501-600x600.webp"
                  alt="Image"
                  className="max-w-[6rem]"
                />
                <img
                  src="https://cdn.printshoppy.com/image/cache/catalog/product-image/wooden-photo-stands/wooden-photo-stands-501-600x600.webp"
                  alt="Image"
                  className="max-w-[6rem]"
                />
              </div>
              {/* like or Dislike */}
              <div className="flex items-center gap-3">
                <span className="text-gray-500">Was this reviw helpful?</span>
                <span className="flex items-center gap-2 text-gray-500">
                  <ThumbsUp size={20} /> 23
                </span>
                <span className="flex items-center gap-2 text-gray-500">
                  <ThumbsDown size={20} /> 0
                </span>
              </div>
            </li>
            <li className="space-y-3">
              {/* Stars */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Star size={15} fill="#7e22ce" className="text-purple-700" />

                  <Star size={15} fill="#7e22ce" className="text-purple-700" />

                  <Star size={15} fill="#7e22ce" className="text-purple-700" />

                  <Star size={15} fill="#7e22ce" className="text-purple-700" />

                  <Star size={15} fill="#7e22ce" className="text-purple-700" />
                </div>
                <span className="text-[14px] text-gray-400">Yesterday</span>
              </div>
              {/* Name */}
              <h4 className="font-medium">Bharat Kumar</h4>
              {/* Paragraph */}
              <p className="leading-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
                nulla, esse vel quasi quam dignissimos assumenda.
              </p>
              {/* Image */}
              <div className="flex flex-wrap gap-2">
                <img
                  src="https://cdn.printshoppy.com/image/cache/catalog/product-image/wooden-photo-stands/wooden-photo-stands-501-600x600.webp"
                  alt="Image"
                  className="max-w-[6rem]"
                />
                <img
                  src="https://cdn.printshoppy.com/image/cache/catalog/product-image/wooden-photo-stands/wooden-photo-stands-501-600x600.webp"
                  alt="Image"
                  className="max-w-[6rem]"
                />
              </div>
              {/* like or Dislike */}
              <div className="flex items-center gap-3">
                <span className="text-gray-500">Was this reviw helpful?</span>
                <span className="flex items-center gap-2 text-gray-500">
                  <ThumbsUp size={20} /> 23
                </span>
                <span className="flex items-center gap-2 text-gray-500">
                  <ThumbsDown size={20} /> 0
                </span>
              </div>
            </li>
            <li className="space-y-3">
              {/* Stars */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Star size={15} fill="#7e22ce" className="text-purple-700" />

                  <Star size={15} fill="#7e22ce" className="text-purple-700" />

                  <Star size={15} fill="#7e22ce" className="text-purple-700" />

                  <Star size={15} fill="#7e22ce" className="text-purple-700" />

                  <Star size={15} fill="#7e22ce" className="text-purple-700" />
                </div>
                <span className="text-[14px] text-gray-400">Yesterday</span>
              </div>
              {/* Name */}
              <h4 className="font-medium">Bharat Kumar</h4>
              {/* Paragraph */}
              <p className="leading-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
                nulla, esse vel quasi quam dignissimos assumenda.
              </p>
              {/* Image */}
              <div className="flex flex-wrap gap-2">
                <img
                  src="https://cdn.printshoppy.com/image/cache/catalog/product-image/wooden-photo-stands/wooden-photo-stands-501-600x600.webp"
                  alt="Image"
                  className="max-w-[6rem]"
                />
                <img
                  src="https://cdn.printshoppy.com/image/cache/catalog/product-image/wooden-photo-stands/wooden-photo-stands-501-600x600.webp"
                  alt="Image"
                  className="max-w-[6rem]"
                />
              </div>
              {/* like or Dislike */}
              <div className="flex items-center gap-3">
                <span className="text-gray-500">Was this reviw helpful?</span>
                <span className="flex items-center gap-2 text-gray-500">
                  <ThumbsUp size={20} /> 23
                </span>
                <span className="flex items-center gap-2 text-gray-500">
                  <ThumbsDown size={20} /> 0
                </span>
              </div>
            </li>
          </ul>
          {/* button */}
          <div className="mx-auto mt-5 w-1/2">
            <button className="w-full rounded-md border-[0.5px] border-purple-700 px-3 py-2 font-medium text-purple-700">
              Show more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
