import { ArrowLeft } from "lucide-react";
import Delivery from "./Delivery";
import Summary from "./Summary";
import Payment from "./Payment";
import OrderDetail from "./OrderDetail";
import { useState } from "react";

export default function Checkout() {
  const [currentStep, setCurrentStep] = useState(1);

  const goToNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  return (
    <section className="relative mx-auto max-w-[500px] bg-gray-100 text-[15px] text-gray-800 md:max-w-[1500px] lg:text-base">
      {/* Upper Title */}
      <div className="fixed left-0 top-0 z-50 flex w-full items-center justify-between border-b-[0.5px] bg-white px-2 py-5 uppercase lg:hidden">
        <span className="flex items-center gap-2.5 text-lg font-medium">
          <ArrowLeft size={22} strokeWidth={1.5} />
          Delivery Address
        </span>
        <p className="text-[16px]">
          Step <span className="tracking-wider">1/3</span>
        </p>
      </div>

      <div className="relative space-y-8 pt-1 md:flex md:gap-7 md:space-y-0 md:px-5 lg:mx-auto lg:max-w-[90%] lg:py-14 lg:pb-10 xl:max-w-[80%] xl:gap-20">
        <div className="w-full max-w-full space-y-3 rounded-lg px-1.5 md:px-0 lg:space-y-4">
          {/* Steps 1-2-3 */}
          <div className="relative z-10 mb-6 hidden md:block">
            <div className="absolute left-4 top-6 -z-10 h-[0.5px] w-[45%] border border-dashed"></div>
            <div className="absolute right-3 top-6 -z-10 h-[0.5px] w-[45%] border border-dashed"></div>
            <ul className="flex items-center justify-between">
              <li className="flex flex-col items-center justify-center gap-1.5 font-medium">
                <span className="grid size-12 place-items-center rounded-lg bg-white text-lg font-medium shadow-md">
                  1
                </span>
                <span className="text-[15px]">Address</span>
              </li>
              <li className="flex flex-col items-center justify-center gap-1.5 font-medium">
                <span className="grid size-12 place-items-center rounded-lg bg-white text-lg font-medium shadow-md">
                  2
                </span>
                <span className="text-[15px]">Summary</span>
              </li>
              <li className="flex flex-col items-center justify-center gap-1.5 font-medium">
                <span className="grid size-12 place-items-center rounded-lg bg-white text-lg font-medium shadow-md">
                  3
                </span>
                <span className="text-[15px]">Payment</span>
              </li>
            </ul>
          </div>
          {/* Address */}
          <Delivery currentStep={currentStep} onContinue={goToNextStep} />
          {/* Order Summary */}
          <Summary currentStep={currentStep} onContinue={goToNextStep} />
          {/* Payment */}
          <Payment currentStep={currentStep} onContinue={goToNextStep} />
        </div>
        {/* Order Summary */}
        <OrderDetail />
      </div>
    </section>
  );
}
