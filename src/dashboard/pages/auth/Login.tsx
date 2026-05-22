import { useState } from "react";
import { Link } from "react-router";
import { Mail, Eye, EyeOff } from "lucide-react";
import { Outlet } from "react-router";
export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      {/* Mobile layout */}
      <section className="flex min-h-screen flex-col items-center justify-center gap-4 bg-gray-50 lg:hidden">
        <div className="mx-auto max-w-[12rem] drop-shadow">
          <Link to="/">
            <img src="/assets/images/logo1.png" alt="Logo" />
          </Link>
        </div>
        <div className="w-full px-5">
          <form className="w-full max-w-[35rem] p-5 !pb-10">
            <div className="mb-2">
              <h1 className="text-[20px] font-semibold text-gray-900">
                Log In
              </h1>
              <p className="mt-1 text-[13px] text-gray-600">
                Enter your credentials to access your dashboard.
              </p>
            </div>
            <div className="space-y-7 pt-4">
              <label className="flex flex-col gap-1.5">
                <span className="font-medium uppercase">
                  Email <span className="text-lg text-red-600">*</span>
                </span>
                <div className="flex flex-row-reverse items-center justify-between gap-3.5 overflow-hidden rounded-2xl border border-solid border-gray-300 bg-white px-3.5 py-0.5 transition-all focus-within:border-gray-500/80">
                  <Mail strokeWidth={1.5} size={25} className="text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    className="m-0 box-border w-full border-none p-0 ring-0 outline-none placeholder:text-gray-400/80 focus:border-none focus:shadow-none"
                    placeholder="Enter Email"
                  />
                </div>
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="font-medium uppercase">
                  Password <span className="text-lg text-red-600">*</span>
                </span>
                <div className="relative flex items-center justify-between gap-3.5 rounded-2xl border border-solid border-gray-300 bg-white px-3.5 py-0.5 transition-all focus-within:border-gray-500/80">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    autoComplete="current-password"
                    minLength={8}
                    required
                    className="m-0 box-border w-full border-none p-0 ring-0 outline-none placeholder:align-middle placeholder:text-gray-400/50 focus:border-none focus:shadow-none"
                    placeholder="••••••"
                  />
                  <button
                    type="button"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute top-1/2 right-2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </label>
            </div>
            <div className="mt-8 flex items-center justify-between">
              <Link to="/forgot-password" className="text-[15px] text-blue-800">
                Forgot your password?
              </Link>
              <Link
                to="/layout"
                className="rounded-2xl bg-[#26A7DF] px-4 py-2.5 font-medium text-white"
              >
                Log In
              </Link>
            </div>
          </form>
        </div>
      </section>

      {/* Desktop layout */}
      <div className="hidden lg:block">
        <div className="flex min-h-screen flex-col items-center justify-center">
          <div className="max-w-[11rem] drop-shadow">
            <Link to="/">
              <img src="/assets/images/logo1.png" alt="Logo" />
            </Link>
          </div>

          <section className="mx-auto mt-12 w-full max-w-[60rem] space-y-4 px-5">
            <div className="relative z-10 flex flex-row-reverse items-center overflow-hidden rounded-lg border border-solid border-gray-200 bg-white shadow-xl shadow-gray-200/70 before:absolute before:-z-10 before:h-full before:w-full before:bg-[#8AC440] before:[clip-path:polygon(50%_0%,100%_0%,100%_100%,0%_100%,25%_50%)]">
              {/* Form */}
              <div className="m-5 w-[45%] rounded-lg bg-white shadow-2xl">
                <form className="w-full p-5 px-10 !pb-10">
                  <div className="space-y-8 pt-6">
                    <label className="flex flex-col gap-1.5">
                      <span className="text-[16px] font-medium">
                        Email <span className="text-lg text-red-600">*</span>
                      </span>
                      <div className="flex flex-row-reverse items-center justify-between gap-3.5 rounded-lg border border-solid border-gray-300 px-2.5 transition-all focus-within:border-gray-500/80">
                        <Mail
                          strokeWidth={1.5}
                          size={25}
                          className="text-gray-400"
                        />
                        <input
                          type="email"
                          name="email"
                          required
                          className="m-0 box-border w-full border-none p-0 ring-0 outline-none placeholder:text-gray-400/80 focus:border-none focus:shadow-none"
                          placeholder="Enter Email"
                        />
                      </div>
                    </label>
                    <label className="flex flex-col gap-1.5">
                      <span className="text-[16px] font-medium">
                        Password <span className="text-lg text-red-600">*</span>
                      </span>
                      <div className="relative flex flex-row-reverse items-center justify-between gap-3.5 rounded-lg border border-solid border-gray-300 px-2.5 transition-all focus-within:border-gray-500/80">
                        <input
                          type={showPassword ? "text" : "password"}
                          name="password"
                          minLength={8}
                          required
                          className="m-0 box-border w-full border-none p-0 ring-0 outline-none placeholder:text-gray-400/80 focus:border-none focus:shadow-none"
                          placeholder="Enter Password"
                        />
                        <button
                          type="button"
                          aria-label={
                            showPassword ? "Hide password" : "Show password"
                          }
                          onClick={() => setShowPassword((v) => !v)}
                          className="absolute top-1/2 right-2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showPassword ? (
                            <EyeOff size={18} />
                          ) : (
                            <Eye size={18} />
                          )}
                        </button>
                      </div>
                    </label>
                  </div>
                  <Link
                    to="/forgot-password"
                    className="mt-4 block w-full text-right text-[15px] text-blue-800"
                  >
                    Forgot your password?
                  </Link>
                  <Link
                    to="/layout"
                    className="mt-12 flex flex-col items-center gap-3"
                  >
                    <button
                      type="submit"
                      className="w-full rounded bg-[#26A7DF] py-2 font-medium text-white uppercase"
                    >
                      Log In
                    </button>
                  </Link>
                </form>
              </div>
              {/* Image */}
              <div className="w-[55%]">
                <img
                  src="./login.svg"
                  alt="Registration"
                  className="h-full w-full drop-shadow-lg"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
