import { KeyRound } from "lucide-react";
import { Link } from "react-router";
export default function ResetPassword() {
  return (
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

            <div className="rounded-md bg-white p-3 py-5 shadow-[0px_0px_5px_0px_#D1D5DB] md:space-y-3 md:rounded-none md:px-10 md:shadow-none">
              <h2 className="text-center text-xl font-medium md:text-2xl">
                Forgot Password ??
              </h2>
              <p className="pt-0.5 text-center text-[15px] text-gray-500">
                No big deal – let’s get you a new password.
              </p>
              <div className="space-y-6 pt-5 text-[15px] md:space-y-9">
                <ul className="list-disc space-y-3 rounded-lg bg-purple-100 p-3 pl-6">
                  <li>Enter your email and we’ll send reset instructions.</li>
                  <li>We don’t store passwords, so we’ll never email yours.</li>
                </ul>
                {/* <label className="flex items-center gap-3 border-b-[0.5px] py-1 text-[15px]">
                  <KeyRound strokeWidth={1.2} size={22} color="gray" />
                  <input
                    type="Password"
                    name="password"
                    minLength={8}
                    required
                    className="w-full outline-none placeholder:text-gray-400/80"
                    placeholder="New Password"
                  />
                </label> */}
                <label className="flex items-center gap-3 border-b-[0.5px] py-1 text-[15px]">
                  <KeyRound strokeWidth={1.2} size={22} color="gray" />
                  <input
                    type="email"
                    name="email"
                    // minLength={8}
                    required
                    className="w-full outline-none placeholder:text-gray-400/80"
                    placeholder="Enter Email"
                  />
                </label>
              </div>

              <div className="my-10 flex flex-col items-center gap-3 text-[15px]">
                <button
                  type="submit"
                  className="w-full rounded-full bg-purple-700 py-2 font-medium tracking-wider text-white uppercase md:mt-10 md:w-[80%]"
                >
                  <Link to="/new-password">Send Reset Instruction</Link>
                </button>
              </div>
              {/* <div className="mt-7 text-[15px] text-gray-500">
                <ul className="list-disc space-y-1 rounded-lg bg-purple-100 px-2 py-5 pl-7 md:mt-10 md:space-y-3 md:pl-10">
                  <li>Password Must be minimum 8 Characters.</li>
                  <li>It's Include atleast one Capital Letter.</li>
                  <li>It's not started with underscore (_).</li>
                </ul>
              </div> */}
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
  );
}
