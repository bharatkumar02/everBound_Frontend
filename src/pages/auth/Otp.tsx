import { Link } from "react-router";

export default function Otp() {
  return (
    <>
      <div className='bg-purple-50/80 md:grid md:h-screen md:w-screen md:place-items-center md:bg-[url("/circle.svg")] md:bg-cover md:bg-center md:bg-no-repeat md:px-5'>
        <div className="max-w-[60rem] bg-white md:flex md:w-full md:items-center md:justify-center md:border md:shadow-[0px_0px_5px_0px_#D1D5DB]">
          <div className="flex min-h-screen w-full flex-col items-center gap-10 pt-10 md:mt-0 md:min-h-full md:w-1/2 md:justify-center md:pt-0">
            <div className="max-w-[10rem] md:hidden">
              <img
                src="/logo/logo2.png"
                alt="Logo"
              />
            </div>
            <form
              // onSubmit={handeSubmit}
              className="relative z-50 w-full max-w-[20.5rem] before:absolute before:-top-2.5 before:-left-2.5 before:-z-10 before:h-full before:w-full before:rounded-md before:border-2 before:border-purple-200 md:max-w-full md:before:hidden"
            >
              <div className="absolute -right-2.5 -bottom-2.5 -z-10 h-full w-full rounded-md border-2 border-purple-200 md:hidden"></div>

              <div className="rounded-md bg-white p-3 py-5 shadow-[0px_0px_5px_0px_#D1D5DB] md:space-y-5 md:rounded-none md:px-10 md:shadow-none">
                <h2 className="text-center text-xl font-medium md:text-2xl">
                  Verify Your Account
                </h2>
                <p className="pt-0.5 text-center text-[15px] text-gray-500">
                  OTP has been sent to your Phone 8397826xxx !!
                </p>
                <div className="flex items-center justify-evenly pt-5 *:size-16 *:rounded-md *:border-[0.5px] *:shadow">
                  <input
                    type="text"
                    maxLength={1}
                    className="text-center text-3xl transition-all duration-300 outline-none focus:border-purple-400 focus:shadow-lg focus:shadow-purple-100"
                  />
                  <input
                    type="text"
                    maxLength={1}
                    className="text-center text-3xl transition-all duration-300 outline-none focus:border-purple-400 focus:shadow-lg focus:shadow-purple-100"
                  />
                  <input
                    type="text"
                    maxLength={1}
                    className="text-center text-3xl transition-all duration-300 outline-none focus:border-purple-400 focus:shadow-lg focus:shadow-purple-100"
                  />
                  <input
                    type="text"
                    maxLength={1}
                    className="text-center text-3xl transition-all duration-300 outline-none focus:border-purple-400 focus:shadow-lg focus:shadow-purple-100"
                  />
                </div>
                <div className="mt-4 text-[15px] tracking-wider text-blue-900 md:pl-7">
                  <a href="#">Resend OTP?</a>
                </div>
                <div className="mt-4 flex flex-col items-center gap-3 text-[15px]">
                  <button
                    type="submit"
                    className="w-full rounded-full bg-purple-700 py-2 font-medium tracking-wider text-white uppercase md:w-[80%]"
                  >
                    <Link to="/new-password">Verify</Link>
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="hidden w-[50%] bg-white md:block md:border-l-[0.5px] md:border-gray-200/70">
            <img
              src="/logo/logo2.png"
              alt="Registration"
              className="mx-auto mt-10 max-w-[10rem]"
            />
            <img src="./otp.svg" alt="Registration" />
          </div>
        </div>
      </div>
    </>
  );
}
