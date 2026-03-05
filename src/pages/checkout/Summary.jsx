import {
  Trash2,
  Heart,
  ArrowLeft,
  Plus,
  Minus,
  NotepadText,
  MapPinned,
  Truck,
  ShieldCheck,
  CircleCheckBig,
  BadgeIndianRupee,
  Banknote,
} from "lucide-react";
export default function Summary({ currentStep, onContinue }) {
  return (
    <>
      <div className="w-full max-w-full">
        <div className="mb-1.5 flex items-start justify-between gap-5 rounded-md bg-white px-2.5 py-3.5 shadow lg:px-5 lg:py-4">
          <div className="space-y-3.5">
            <h2 className="flex items-center gap-3 text-[14px] font-medium uppercase md:text-[15px] lg:gap-4 lg:text-base">
              <NotepadText strokeWidth={1.7} />
              Order Summary
              {/* After Completing Order Summary */}
              {[3, 4].includes(currentStep) && (
                <CircleCheckBig
                  strokeWidth={1.7}
                  size={15}
                  className="text-green-700"
                />
              )}
            </h2>
            {/* After Completing Order Summary */}

            {[3, 4].includes(currentStep) && (
              <p className="flex flex-col space-y-1 text-[14px] text-gray-500">
                Your order for 5 items.
              </p>
            )}
          </div>
          {/* After Completing Order Summary */}
          {[3, 4].includes(currentStep) && (
            <button className="rounded-md border-[0.5px] border-purple-700 px-2 py-1.5 text-[14px] text-purple-700 shadow">
              Change
            </button>
          )}
        </div>
        {/* Before Completing Order Summary */}
        {currentStep === 2 && (
          <div className="">
            <ul className="space-y-2 rounded-lg bg-gray-100 text-[15px] *:rounded-lg *:bg-white *:shadow">
              <li className="flex items-start gap-3 px-1.5 py-3">
                {/* Image Section */}
                <div className="max-w-[5rem] lg:mx-3">
                  <img
                    src="/images/f-2.jpg"
                    alt="Image"
                    className="size-full"
                  />
                </div>
                {/* Product Detail */}
                <div className="w-full space-y-3">
                  <div className="flex justify-between">
                    <div>
                      <h4 className="line-clamp-1 text-[16px] leading-5">
                        Lorem ipsum dolor Lorem ipsum dolor sit amet.
                      </h4>
                      <div className="pt-0.5">
                        <span className="text-[13px] text-gray-400 line-through">
                          $15.99
                        </span>
                        <span className="px-3 font-semibold">$12.99</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2 rounded-xl border">
                      <span className="cursor-pointer p-2 text-gray-500">
                        <Minus size={18} />
                      </span>
                      <span>5</span>
                      <span className="cursor-pointer px-2 text-gray-500">
                        <Plus size={18} />
                      </span>
                    </div>
                    <div className="flex items-center">
                      <button className="flex items-center gap-1 border-r pr-3">
                        <Heart size={18} /> <span>Save</span>
                      </button>
                      <button className="flex items-center gap-1 px-3 text-red-600">
                        <Trash2 size={18} />
                        <span className="hidden">Delete</span>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3 px-1.5 py-3">
                {/* Image Section */}
                <div className="max-w-[5rem] lg:mx-3">
                  <img
                    src="/images/f-5.jpg"
                    alt="Image"
                    className="size-full"
                  />
                </div>
                {/* Product Detail */}
                <div className="w-full space-y-3">
                  <div className="flex justify-between">
                    <div>
                      <h4 className="line-clamp-1 text-[16px] leading-5">
                        Lorem ipsum dolor Lorem ipsum dolor sit amet.
                      </h4>
                      <div className="pt-0.5">
                        <span className="text-[13px] text-gray-400 line-through">
                          $15.99
                        </span>
                        <span className="px-3 font-semibold">$12.99</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2 rounded-xl border">
                      <span className="cursor-pointer p-2 text-gray-500">
                        <Minus size={18} />
                      </span>
                      <span>5</span>
                      <span className="cursor-pointer px-2 text-gray-500">
                        <Plus size={18} />
                      </span>
                    </div>
                    <div className="flex items-center">
                      <button className="flex items-center gap-1 border-r pr-3">
                        <Heart size={18} /> <span>Save</span>
                      </button>
                      <button className="flex items-center gap-1 px-3 text-red-600">
                        <Trash2 size={18} />
                        <span className="hidden">Delete</span>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3 px-1.5 py-3">
                {/* Image Section */}
                <div className="max-w-[5rem] lg:mx-3">
                  <img
                    src="/images/f-6.jpg"
                    alt="Image"
                    className="size-full"
                  />
                </div>
                {/* Product Detail */}
                <div className="w-full space-y-3">
                  <div className="flex justify-between">
                    <div>
                      <h4 className="line-clamp-1 text-[16px] leading-5">
                        Lorem ipsum dolor Lorem ipsum dolor sit amet.
                      </h4>
                      <div className="pt-0.5">
                        <span className="text-[13px] text-gray-400 line-through">
                          $15.99
                        </span>
                        <span className="px-3 font-semibold">$12.99</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2 rounded-xl border">
                      <span className="cursor-pointer p-2 text-gray-500">
                        <Minus size={18} />
                      </span>
                      <span>5</span>
                      <span className="cursor-pointer px-2 text-gray-500">
                        <Plus size={18} />
                      </span>
                    </div>
                    <div className="flex items-center">
                      <button className="flex items-center gap-1 border-r pr-3">
                        <Heart size={18} /> <span>Save</span>
                      </button>
                      <button className="flex items-center gap-1 px-3 text-red-600">
                        <Trash2 size={18} />
                        <span className="hidden">Delete</span>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <div className="mt-1.5 flex items-center justify-between rounded-md bg-white px-2.5 py-2.5 lg:px-3.5">
              <div className="pl-1.5 text-gray-600">
                <div className="text-[13px]">
                  Delivered by{" "}
                  <span className="border-b border-dotted pl-0.5 tracking-wider">
                    25-05-2024
                  </span>
                </div>
                <div className="text-[17px] font-medium">Total: $800</div>
              </div>
              <button
                onClick={onContinue}
                className="rounded-md bg-purple-600 px-7 py-2.5 text-base font-medium text-white lg:px-12"
              >
                Continue
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
