import { Banknote } from "lucide-react";
import { useState } from "react";

export default function Payment({ currentStep, onContinue }) {
  const [method, setMethod] = useState(1);
  return (
    <>
      <div className="w-full max-w-full">
        <div className="mb-1.5 flex items-start justify-between gap-5 rounded-md bg-white px-2.5 py-3.5 shadow lg:px-5 lg:py-4">
          <h2 className="flex items-center gap-3 text-[14px] font-medium uppercase md:text-[15px] lg:gap-4 lg:text-base">
            <Banknote strokeWidth={1.7} />
            Payment
          </h2>
        </div>
        {currentStep === 3 && (
          <div>
            <ul className="flex items-start justify-evenly rounded-md bg-white py-2.5 text-[11px] shadow *:w-1/4 *:cursor-pointer lg:text-[12px]">
              <li onClick={() => setMethod(1)}>
                <div className="flex flex-col items-center">
                  <div className="mb-1 w-fit rounded-md border border-purple-600 bg-gray-50 p-1 shadow">
                    <img
                      src="/bhimUPI.svg"
                      alt="UPI"
                      className="w-full max-w-[2rem]"
                    />
                  </div>
                  <span className="font-medium text-purple-600">UPI</span>
                </div>
              </li>
              <li onClick={() => setMethod(2)}>
                <div className="flex flex-col items-center text-center">
                  <div className="mb-1 w-fit rounded-md bg-gray-50 p-1 shadow">
                    <img
                      src="/card.svg"
                      alt="UPI"
                      className="w-full max-w-[2rem]"
                    />
                  </div>
                  <span className="">Credit/Debit Card</span>
                </div>
              </li>
              <li onClick={() => setMethod(3)}>
                <div className="flex flex-col items-center text-center">
                  <div className="mb-1 w-fit rounded-md bg-gray-50 p-1 shadow">
                    <img
                      src="/netbanking.svg"
                      alt="UPI"
                      className="w-full max-w-[2rem]"
                    />
                  </div>
                  <span>Net Banking</span>
                </div>
              </li>
              <li onClick={() => setMethod(4)}>
                <div className="flex flex-col items-center text-center">
                  <div className="mb-1 w-fit rounded-md bg-gray-50 p-1 shadow">
                    <img
                      src="/cash.svg"
                      alt="Cash"
                      className="w-full max-w-[2rem]"
                    />
                  </div>
                  <span>Cash on Delivery</span>
                </div>
              </li>
            </ul>
            {/* UPI */}
            {method === 1 && (
              <div className="mt-1.5 rounded-md bg-white px-2.5 py-3 shadow lg:p-5">
                <h4 className="text-base font-medium text-gray-500 lg:text-[17px]">
                  Choose an option (
                  <span className="font-normal tracking-widest text-gray-800">
                    00:00:00
                  </span>
                  )
                </h4>
                {/* Pay By UPI ID */}
                <div className="group mt-5 space-y-3 lg:space-y-5">
                  <label
                    htmlFor="upiID"
                    className="flex cursor-pointer items-center gap-2.5"
                  >
                    <input type="radio" id="upiID" name="upi" />
                    <span>Pay By UPI ID</span>
                  </label>
                  <div className="hidden space-x-2.5 group-has-[input:checked]:block">
                    <input
                      type="text"
                      className="rounded-md border-[0.5px] bg-gray-100 px-2.5 py-1.5 outline-none"
                      placeholder="Enter UPI ID"
                    />
                    <button className="rounded-md bg-purple-700 px-3.5 py-1.5 text-white lg:px-5">
                      Pay ₹820
                    </button>
                  </div>
                </div>
                {/* Pay By QR Code */}
                <div className="group mt-5 space-y-3 lg:space-y-5">
                  <label
                    htmlFor="qrCode"
                    className="flex cursor-pointer items-center gap-2.5"
                  >
                    <input type="radio" id="qrCode" name="upi" />
                    <span>Pay By QR Code (Scan & Pay)</span>
                  </label>
                  <div className="">
                    <div className="mx-auto hidden w-fit rounded-md p-2 drop-shadow-md group-has-[input:checked]:block">
                      <img
                        src="https://cdn.britannica.com/17/155017-050-9AC96FC8/Example-QR-code.jpg"
                        alt="QR Code"
                        className="mx-auto max-w-[10rem]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* Credit / Debit / ATM Cards */}
            {method === 2 && (
              <div className="mt-1.5 rounded-md bg-white px-2.5 py-3 shadow lg:px-10 lg:py-7">
                <h4 className="text-base font-medium text-gray-500 lg:text-[17px]">
                  Credit / Debit / ATM Card
                </h4>
                <div className="mx-auto my-5 space-y-3 lg:space-y-5">
                  <span>Enter Your Card Detail correctly.</span>
                  <div className="w-full space-y-5 lg:flex lg:gap-10 lg:space-y-0">
                    <form className="space-y-4 lg:space-y-7">
                      <input
                        className="w-full rounded-md border-[0.5px] bg-gray-50 px-2.5 py-2 shadow shadow-gray-200 outline-none"
                        type="text"
                        placeholder="Enter Cardholder Name"
                      />
                      <input
                        className="w-full rounded-md border-[0.5px] bg-gray-50 px-2.5 py-2 shadow shadow-gray-200 outline-none"
                        type="text"
                        placeholder="Enter Card Number"
                      />
                      <div className="flex w-full gap-5 lg:gap-7">
                        <input
                          className="w-full rounded-md border-[0.5px] bg-gray-50 px-2.5 py-2 shadow shadow-gray-200 outline-none"
                          type="text"
                          placeholder="Expiry (MM / YY)"
                        />
                        <input
                          className="w-full rounded-md border-[0.5px] bg-gray-50 px-2.5 py-2 shadow shadow-gray-200 outline-none"
                          type="text"
                          placeholder="CVV"
                        />
                        {/* <Info size={30} className="text-gray-400" /> */}
                      </div>
                      <button className="w-full rounded-md bg-purple-700 py-2.5 text-center text-white">
                        Pay ₹800
                      </button>
                    </form>
                    <div className="space-y-5 lg:space-y-8">
                      <p className="flex items-start gap-2">
                        <img
                          src="https://th.bing.com/th/id/OIP.YhDXKBtABsik5Ct6NsEkFwHaHa?rs=1&pid=ImgDetMain"
                          alt="Card"
                          className="max-w-[2rem]"
                        />
                        <span className="text-[14px]">
                          Pay with <strong>HDFC Bank </strong>Card & Get 5%
                          Instant Discount!
                        </span>
                      </p>
                      <p className="flex items-start gap-2">
                        <img
                          src="https://th.bing.com/th/id/OIP.ceAXleGyAouaAYjPFVuupAHaHa?rs=1&pid=ImgDetMain"
                          alt="Card"
                          className="max-w-[2rem]"
                        />
                        <span className="text-[14px]">
                          Save 5% Instantly on <strong>Axis Bank</strong>{" "}
                          Credit/Debit Cards!
                        </span>
                      </p>
                      <p className="flex items-start gap-2">
                        <img
                          src="https://th.bing.com/th/id/OIP._aj2Q7iELtIn98FMo6uhtwHaEZ?rs=1&pid=ImgDetMain"
                          alt="Card"
                          className="max-w-[2rem]"
                        />
                        <span className="text-[14px]">
                          Enjoy 5% Off with <strong>ICICI Bank</strong> Cards –
                          Limited Time Offer!
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Net Banking */}
            {method === 3 && (
              <div className="mt-1.5 rounded-md bg-white px-2.5 py-3 shadow lg:px-10 lg:py-7">
                <h4 className="text-base font-medium text-gray-500 lg:text-[17px]">
                  Select the Bank that you want to pay.
                </h4>
                <div className="mx-auto my-5 space-y-5 lg:space-y-7">
                  <span>Popular Banks</span>
                  <ul className="grid grid-cols-2 gap-7 *:flex *:cursor-pointer *:flex-col *:items-center *:gap-1.5 *:text-center lg:grid-cols-3">
                    <li className="text-[14px]">
                      {" "}
                      <img
                        src="https://th.bing.com/th/id/OIP.YhDXKBtABsik5Ct6NsEkFwHaHa?rs=1&pid=ImgDetMain"
                        alt="Card"
                        className="size-[2rem] lg:size-[2.5rem]"
                      />{" "}
                      <span>HDFC Bank</span>
                    </li>
                    <li className="text-[14px]">
                      {" "}
                      <img
                        src="https://th.bing.com/th/id/OIP.ceAXleGyAouaAYjPFVuupAHaHa?rs=1&pid=ImgDetMain"
                        alt="Card"
                        className="size-[2rem] lg:size-[2.5rem]"
                      />{" "}
                      <span>Axis Bank</span>
                    </li>
                    <li className="text-[14px]">
                      {" "}
                      <img
                        src="https://th.bing.com/th/id/OIP._aj2Q7iELtIn98FMo6uhtwHaEZ?rs=1&pid=ImgDetMain"
                        alt="Card"
                        className="size-[2rem] lg:size-[2.5rem]"
                      />{" "}
                      <span>ICICI Bank</span>
                    </li>
                    <li className="text-[14px]">
                      {" "}
                      <img
                        src="https://th.bing.com/th/id/OIP.CdkIHp9eyZ2zHe8xOx30lwHaHw?o=7rm=3&rs=1&pid=ImgDetMain"
                        alt="Card"
                        className="size-[2rem] lg:size-[2.5rem]"
                      />{" "}
                      <span>SBI Bank</span>
                    </li>
                    <li className="text-[14px]">
                      {" "}
                      <img
                        src="https://companieslogo.com/img/orig/KOTAKBANK.NS-36440c5e.png?t=1593960269"
                        alt="Card"
                        className="size-[2rem] lg:size-[2.5rem]"
                      />{" "}
                      <span>Kotak Mahindra Bank</span>
                    </li>
                    <li className="text-[14px]">
                      {" "}
                      <img
                        src="https://th.bing.com/th/id/OIP.vtB6wHBzgylYucupSEpZBAHaHa?rs=1&pid=ImgDetMain"
                        alt="Card"
                        className="size-[2rem] lg:size-[2.5rem]"
                      />{" "}
                      <span>Punjab National Bank</span>
                    </li>
                    <li className="text-[14px]">
                      {" "}
                      <img
                        src="https://th.bing.com/th/id/OIP.YKnbDv-ChD9JhKKo_mR5kwAAAA?rs=1&pid=ImgDetMain"
                        alt="Card"
                        className="size-[2rem] lg:size-[2.5rem]"
                      />{" "}
                      <span>Gramin Bank of Haryana</span>
                    </li>
                    <li className="text-[14px]">
                      {" "}
                      <img
                        src="https://play-lh.googleusercontent.com/RTmfgCmNOoh97mbifT3s14MusUVdLFBb0_0Kge85MPob0cmhyiikN_thf2FnGSOb4X8-"
                        alt="Card"
                        className="size-[2rem] lg:size-[2.5rem]"
                      />{" "}
                      <span>Federal Bank</span>
                    </li>
                  </ul>
                  <div className="space-y-5 pt-5">
                    <h4>Other Banks</h4>
                    <select
                      id="paymentMethod"
                      name="paymentMethod"
                      className="cursor-pointer rounded-md border-[0.5px] px-3.5 py-2.5 shadow outline-none"
                    >
                      <option value="other">Other Banks</option>
                      <option value="hdfc">HDFC Bank (5% Discount)</option>
                      <option value="icici">ICICI Bank</option>
                      <option value="sbi">SBI Bank</option>
                      <option value="upi">UPI</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Cash on Delivery */}
            {method === 4 && (
              <div className="mt-1.5 flex items-center justify-between rounded-md bg-white px-2.5 py-3 shadow lg:px-10 lg:py-7">
                <h4 className="font-medium text-gray-500">
                  Cash on Delivery (Cash / UPI)
                </h4>
                <button className="rounded-md bg-purple-700 px-5 py-2.5 text-white">
                  Continue
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
