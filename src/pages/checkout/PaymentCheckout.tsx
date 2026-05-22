import { BookUser, CircleCheckBig } from "lucide-react";

export default function PaymentCheckout() {
  return (
    <div className="min-h-screen bg-gray-100">

      <main className="p-2 md:flex md:w-full md:items-start md:gap-2 md:py-10 *:md:w-1/2 lg:mx-auto lg:max-w-[1100px] lg:gap-14 lg:py-16">
        <section>
          {/* Purchesor Information */}
          <div className="rounded-md bg-white p-2.5 py-4 text-[14px] shadow md:text-[15px] lg:px-5">
            <div className="mb-2 flex items-center justify-between gap-3 border-b border-dashed border-gray-400/70 bg-white py-2 lg:mb-3 lg:gap-4 lg:py-3 lg:text-base">
              <div className="flex items-center gap-3">
                <BookUser strokeWidth={1.7} />
                <h2 className="font-medium uppercase">Quick pay information</h2>
                <CircleCheckBig
                  strokeWidth={1.7}
                  size={17}
                  className="text-green-700"
                />
              </div>
            </div>

            {/* Three Input with Label */}
            <div className="space-y-3.5 pt-2.5 pb-3.5 *:flex *:flex-col *:gap-1">
              <div>
                <label
                  htmlFor="amount"
                  className="text-[13px] font-medium uppercase"
                >
                  Amount
                </label>
                <input
                  type="text"
                  id="amount"
                  placeholder="Amount"
                  className="rounded border-[0.5px] border-gray-300 px-2.5 py-2 shadow outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="text-[13px] font-medium uppercase"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  placeholder="Email"
                  className="rounded border-[0.5px] border-gray-300 px-2.5 py-2 shadow outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="question"
                  className="text-[13px] font-medium uppercase"
                >
                  Question
                </label>
                <input
                  type="text"
                  id="question"
                  placeholder="Question"
                  className="rounded border-[0.5px] border-gray-300 px-2.5 py-2 shadow outline-none"
                />
              </div>
            </div>
          </div>

          {/* Checkbox */}
          <div className="my-3.5 space-y-2 rounded-md bg-white px-2.5 pt-4 text-[14px] shadow md:text-[15px] lg:px-5">
            <h5 className="font-medium">Include Payment Processing Fee</h5>
            <p className="leading-[1.35rem] text-gray-600">
              You can support this event by optionally covering the processing
              fee for your payment.
            </p>
            <label
              htmlFor="checkbox"
              className="mt-3.5 flex transform cursor-pointer gap-2.5 border-t-[0.5px] border-dashed border-gray-400/70 py-3.5 pb-4 text-[15px]"
            >
              <div className="pt-1">
                <input
                  type="checkbox"
                  id="checkbox"
                  className="peer absolute size-0 opacity-0"
                />
                <div className="relative size-[16px] rounded-[2px] shadow-[0_0_0_1px_#0d9488] peer-checked:size-[16px] peer-checked:bg-[#0d9488] after:absolute after:top-1/2 after:left-1/2 after:hidden after:h-[0.6rem] after:w-[0.35rem] after:-translate-x-1/2 after:-translate-y-1/2 after:rotate-45 after:transform after:border-[0_0.15rem_0.15rem_0] after:border-white after:transition-all after:duration-300 after:ease-in-out after:content-[''] peer-checked:after:block"></div>
              </div>
              <p>
                I agree to cover the transition processing fee of
                <span className="pl-1.5 text-base font-medium">$48.70</span>
              </p>
            </label>
          </div>

          {/* Online Summary */}
          <div className="space-y-2">
            <div className="space-y-2 rounded-md bg-white px-6 py-3 shadow lg:py-4">
              <dl className="space-y-1 text-right font-medium text-gray-600 lg:ml-auto lg:max-w-[22rem]">
                <div className="flex items-center justify-between *:lg:w-1/2">
                  <dt>Online Subtotal:</dt>
                  <dd>$1,175.00</dd>
                </div>
                <div className="flex items-center justify-between *:lg:w-1/2">
                  <dt>Promo Applied:</dt>
                  <dd>$0.00</dd>
                </div>
                <div className="flex items-center justify-between *:lg:w-1/2">
                  <dt>Processing Fee:</dt>
                  <dd>$47.68</dd>
                </div>
              </dl>
            </div>

            {/* Total */}
            <div className="rounded-md bg-white px-6 py-3 text-base font-bold shadow">
              <dl className="flex items-center justify-between lg:ml-auto lg:max-w-[22rem] lg:text-right *:lg:w-1/2">
                <dt>Online Total:</dt>
                <dd>$1,222.68</dd>
              </dl>
            </div>
          </div>
        </section>

        {/* Cart Detail */}
        <section className="space-y-4 py-5 md:sticky md:top-3 md:py-0 lg:w-full lg:max-w-[25rem]">
          <div className="rounded-md bg-white px-2.5 py-3 shadow lg:px-5 lg:pt-7">
            <div className="space-y-4 *:flex *:w-full *:items-center *:justify-center *:gap-1.5 *:rounded *:bg-black *:py-2 *:text-white">
              <button>
                Pay with{" "}
                <img
                  src="/apple.svg"
                  alt="Apple_Pay"
                  className="max-w-[1rem]"
                />{" "}
                Pay
              </button>
              <button>
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="Google_Pay"
                  className="max-w-[1rem]"
                />
                Pay
              </button>
              <button>Pay with Credit Card</button>
            </div>
            <div className="mx-auto mt-8 mb-5 space-y-3 border-t-[0.5px] border-dashed border-gray-400/70 lg:space-y-5">
              <h4 className="pt-5 text-base font-medium text-gray-500">
                Enter Credit Card Manually
              </h4>
              <form className="space-y-3 lg:space-y-5">
                <input
                  className="w-full rounded border-[0.5px] border-gray-200 px-2.5 py-2 shadow shadow-gray-200 outline-none"
                  type="text"
                  placeholder="Cardholder Name"
                />
                <input
                  className="w-full rounded border-[0.5px] border-gray-200 px-2.5 py-2 shadow shadow-gray-200 outline-none"
                  type="text"
                  placeholder="Credit Card Number"
                />
                <div className="flex w-full gap-3 lg:gap-5">
                  <input
                    className="w-full rounded border-[0.5px] border-gray-200 px-2.5 py-2 shadow shadow-gray-200 outline-none"
                    type="text"
                    placeholder="MM / YY"
                  />
                  <input
                    className="w-full rounded border-[0.5px] border-gray-200 px-2.5 py-2 shadow shadow-gray-200 outline-none"
                    type="text"
                    placeholder="CVV / CVC"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full cursor-pointer rounded bg-teal-700 py-2 text-center font-medium text-white"
                  >
                    Pay $1,222.68
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
