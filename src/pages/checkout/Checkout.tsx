import { ArrowLeft } from "lucide-react";
import Delivery from "./Delivery";
import Summary from "./Summary";
import Payment from "./Payment";
import OrderDetail from "./OrderDetail";
import { useState } from "react";

const TOTAL_STEPS = 3;

const stepLabels: Record<number, string> = {
  1: "Delivery Address",
  2: "Order Summary",
  3: "Payment",
};

export default function Checkout() {
  const [currentStep, setCurrentStep] = useState(1);

  const goToNextStep = () => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  return (
    <section className="relative mx-auto max-w-[500px] bg-gray-100 text-[15px] text-gray-800 md:max-w-[1500px] lg:text-base">
      {/* Mobile Upper Title */}
      <div className="fixed left-0 top-0 z-50 flex w-full items-center justify-between border-b-[0.5px] bg-white px-2 py-5 uppercase lg:hidden">
        <span className="flex items-center gap-2.5 text-lg font-medium">
          <ArrowLeft size={22} strokeWidth={1.5} />
          {stepLabels[currentStep]}
        </span>
        <p className="text-[16px]">
          Step{" "}
          <span className="tracking-wider">
            {currentStep}/{TOTAL_STEPS}
          </span>
        </p>
      </div>

      <div className="relative space-y-8 pt-1 md:flex md:gap-7 md:space-y-0 md:px-5 lg:mx-auto lg:max-w-[90%] lg:py-14 lg:pb-10 xl:max-w-[80%] xl:gap-20">
        <div className="w-full max-w-full space-y-3 rounded-lg px-1.5 md:px-0 lg:space-y-4">
          {/* Steps 1-2-3 */}
          <div className="relative z-10 mb-6 hidden md:block">
            <div className="absolute left-4 top-6 -z-10 h-[0.5px] w-[45%] border border-dashed" />
            <div className="absolute right-3 top-6 -z-10 h-[0.5px] w-[45%] border border-dashed" />
            <ul className="flex items-center justify-between">
              {[
                { step: 1, label: "Address" },
                { step: 2, label: "Summary" },
                { step: 3, label: "Payment" },
              ].map(({ step, label }) => (
                <li
                  key={step}
                  className="flex flex-col items-center justify-center gap-1.5 font-medium"
                >
                  <span
                    className={`grid size-12 place-items-center rounded-lg text-lg font-medium shadow-md ${
                      currentStep >= step
                        ? "bg-purple-600 text-white"
                        : "bg-white text-gray-800"
                    }`}
                  >
                    {step}
                  </span>
                  <span className="text-[15px]">{label}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Address */}
          <Delivery currentStep={currentStep} onContinue={goToNextStep} />
          {/* Order Summary */}
          <Summary currentStep={currentStep} onContinue={goToNextStep} />
          {/* Payment */}
          <Payment currentStep={currentStep} onContinue={goToNextStep} />
        </div>
        {/* Order Detail Sidebar */}
        <OrderDetail />
      </div>
    </section>
  );
}
