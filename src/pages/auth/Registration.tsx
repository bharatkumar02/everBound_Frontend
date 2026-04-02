import { useState } from "react";
import { CircleUserRound } from "lucide-react";
import { Link } from "react-router";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import { KeyRound } from "lucide-react";
export default function Registration() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    agree: false,
  });

  return (
    <>
      <div className='bg-purple-50/80 md:grid md:h-screen md:w-screen md:place-items-center md:bg-[url("/circle.svg")] md:bg-cover md:bg-center md:bg-no-repeat md:px-5'>
        <div className="max-w-[60rem] bg-white md:flex md:w-full md:items-center md:justify-center md:border md:shadow-[0px_0px_5px_0px_#D1D5DB]">
          <div className="flex min-h-screen w-full flex-col items-center gap-10 pt-10 md:mt-0 md:min-h-full md:w-1/2 md:justify-center md:pt-0">
            <div className="max-w-[10rem] md:hidden">
              <img src="/logo/logo2.png" alt="Logo" />
            </div>
            <form className="relative z-50 w-full max-w-[20.5rem] before:absolute before:-top-2.5 before:-left-2.5 before:-z-10 before:h-full before:w-full before:rounded-md before:border-2 before:border-purple-200 md:max-w-full md:before:hidden">
              <div className="absolute -right-2.5 -bottom-2.5 -z-10 h-full w-full rounded-md border-2 border-purple-200 md:hidden"></div>

              <div className="rounded-md bg-white p-3 py-5 shadow-[0px_0px_5px_0px_#D1D5DB] md:rounded-none md:px-10 md:shadow-none">
                <h2 className="text-center text-xl font-medium md:text-2xl">
                  Create Your Profile
                </h2>
                <p className="pt-0.5 text-center text-[15px] text-gray-500">
                  Register for instant Access !!
                </p>
                <div className="space-y-6 pt-5">
                  <label className="items- center flex gap-3 border-b-[0.5px] py-1 text-[15px]">
                    <CircleUserRound strokeWidth={1.2} size={22} color="gray" />
                    <input
                      name="name"
                      value={formData.name}
                      type="text"
                      required
                      className="w-full outline-none placeholder:text-gray-400/80"
                      placeholder="Enter Your Full Name"
                    />
                  </label>
                  <label className="flex items-center gap-3 border-b-[0.5px] py-1 text-[15px]">
                    <Phone strokeWidth={1.2} size={22} color="gray" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      pattern="\d{10}"
                      minLength={10}
                      maxLength={10}
                      required
                      className="w-full outline-none placeholder:text-gray-400/80"
                      placeholder="Enter your Phone Number"
                    />
                  </label>
                  <label className="flex items-center gap-3 border-b-[0.5px] py-1 text-[15px]">
                    <Mail strokeWidth={1.2} size={22} color="gray" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      required
                      className="w-full outline-none placeholder:text-gray-400/80"
                      placeholder="Enter Your Email"
                    />
                  </label>
                  <label className="flex items-center gap-3 border-b-[0.5px] py-1 text-[15px]">
                    <KeyRound strokeWidth={1.2} size={22} color="gray" />
                    <input
                      type="password"
                      name="Password"
                      value={formData.email}
                      required
                      className="w-full outline-none placeholder:text-gray-400/80"
                      placeholder="New Password"
                    />
                  </label>
                  <label className="flex items-center gap-3 border-b-[0.5px] py-1 text-[15px]">
                    <KeyRound strokeWidth={1.2} size={22} color="gray" />
                    <input
                      type="Password"
                      name="Password"
                      value={formData.email}
                      required
                      className="w-full outline-none placeholder:text-gray-400/80"
                      placeholder="Conform Password"
                    />
                  </label>
                </div>
                <label className="flex gap-2 py-5">
                  <input
                    type="checkbox"
                    name="agree"
                    checked={formData.agree}
                  />
                  <p className="flex gap-1 text-[15px]">
                    I accept all
                    <span className="tracking-wider text-blue-900">
                      Terms & Privacy Policy.
                    </span>
                  </p>
                </label>
                <div className="flex flex-col items-center gap-3 text-[15px]">
                  <button
                    type="submit"
                    className="w-full rounded-full bg-purple-700 py-2 font-medium tracking-wider text-white uppercase md:w-[80%]"
                  >
                    <Link to="/login">Register</Link>
                  </button>
                  <div className="relative z-10 my-2 w-full text-center text-gray-500 before:absolute before:top-1/2 before:left-0 before:-z-10 before:h-[1px] before:w-full before:translate-y-1/2 before:rounded-full before:bg-gray-400 md:my-3">
                    <span className="bg-white px-1.5">Or Continue with</span>
                  </div>
                  <button
                    type="button"
                    className="flex w-full items-center justify-center gap-1.5 rounded-full border-[0.9px] border-gray-400 py-2 font-medium tracking-wider uppercase md:w-[80%]"
                  >
                    <img
                      src="/google.svg"
                      alt="Google"
                      className="max-w-[1.1rem]"
                    />
                    Google
                  </button>
                </div>
                <p className="pt-6 pb-1.5 text-center text-[15px]">
                  Already have an account?
                  <span className="pl-1.5 tracking-wider text-blue-900">
                    <Link to="/login">LogIn</Link>
                  </span>
                </p>
              </div>
            </form>
          </div>

          <div className="hidden w-[50%] bg-white md:block md:border-l-[0.5px] md:border-gray-200/70">
            <img
              src="/logo/logo2.png"
              alt="Registration"
              className="mx-auto mt-10 max-w-[10rem]"
            />
            <img src="./register.svg" alt="Registration" />
          </div>
        </div>
      </div>
    </>
  );
}
