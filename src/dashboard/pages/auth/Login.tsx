import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Eye, EyeOff } from 'lucide-react';
import { Outlet } from 'react-router';
export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      {/* Mobile layout */}
      <section className="lg:hidden min-h-screen flex flex-col items-center justify-center gap-4 bg-gray-50">
        <div className="max-w-[12rem] drop-shadow mx-auto">
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
                  Email <span className="text-red-600 text-lg">*</span>
                </span>
                <div className="flex flex-row-reverse justify-between items-center gap-3.5 border border-gray-300  border-solid px-3.5 py-0.5 rounded-2xl overflow-hidden transition-all focus-within:border-gray-500/80 bg-white">
                  <Mail
                    strokeWidth={1.5}
                    size={25}
                    className="text-gray-400"
                  />
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    className="w-full outline-none ring-0  placeholder:text-gray-400/80 border-none focus:border-none focus:shadow-none box-border m-0 p-0"
                    placeholder="Enter Email"
                  />
                </div>
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="font-medium uppercase">
                  Password <span className="text-red-600 text-lg">*</span>
                </span>
                <div className="relative flex justify-between items-center gap-3.5 border border-gray-300  border-solid px-3.5 py-0.5 rounded-2xl transition-all focus-within:border-gray-500/80 bg-white">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    autoComplete="current-password"
                    minLength={8}
                    required
                    className="w-full outline-none ring-0  placeholder:text-gray-400/50 border-none focus:border-none focus:shadow-none box-border m-0 p-0 placeholder:align-middle"
                    placeholder="••••••"
                  />
                  <button
                    type="button"
                    aria-label={
                      showPassword ? 'Hide password' : 'Show password'
                    }
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </label>
            </div>
            <div className="mt-8 flex items-center justify-between">
              <Link
                to="/forgot-password"
                className="text-[15px] text-blue-800"
              >
                Forgot your password?
              </Link>
              <Link
                to="/layout"
                className="rounded-2xl bg-[#26A7DF] py-2.5 px-4 font-medium text-white"
              >
                Log In
              </Link>
            </div>
          </form>
        </div>
      </section>

      {/* Desktop layout */}
      <div className="hidden lg:block">
        <div className="flex flex-col justify-center items-center min-h-screen">
          <div className="drop-shadow max-w-[11rem]">
            <Link to="/">
              <img src="/assets/images/logo1.png" alt="Logo" />
            </Link>
          </div>

          <section className="max-w-[60rem] mx-auto w-full mt-12 space-y-4 px-5">
            <div className="bg-white relative before:absolute z-10 before:-z-10 before:[clip-path:polygon(50%_0%,100%_0%,100%_100%,0%_100%,25%_50%)] before:bg-[#8AC440] shadow-xl shadow-gray-200/70 overflow-hidden flex flex-row-reverse items-center before:w-full before:h-full border border-solid border-gray-200 rounded-lg">
              {/* Form */}
              <div className="w-[45%] rounded-lg shadow-2xl bg-white m-5">
                <form className="w-full p-5 !pb-10 px-10">
                  <div className="space-y-8 pt-6">
                    <label className="flex flex-col gap-1.5">
                      <span className="text-[16px] font-medium">
                        Email{' '}
                        <span className="text-red-600 text-lg">*</span>
                      </span>
                      <div className="flex flex-row-reverse justify-between items-center gap-3.5 border border-gray-300  border-solid px-2.5 rounded-lg transition-all focus-within:border-gray-500/80">
                        <Mail
                          strokeWidth={1.5}
                          size={25}
                          className="text-gray-400"
                        />
                        <input
                          type="email"
                          name="email"
                          required
                          className="w-full outline-none ring-0  placeholder:text-gray-400/80 border-none focus:border-none focus:shadow-none box-border m-0 p-0"
                          placeholder="Enter Email"
                        />
                      </div>
                    </label>
                    <label className="flex flex-col gap-1.5">
                      <span className="text-[16px] font-medium">
                        Password{' '}
                        <span className="text-red-600 text-lg">*</span>
                      </span>
                      <div className="relative flex flex-row-reverse justify-between items-center gap-3.5 border border-gray-300  border-solid px-2.5 rounded-lg transition-all focus-within:border-gray-500/80">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          name="password"
                          minLength={8}
                          required
                          className="w-full outline-none ring-0  placeholder:text-gray-400/80 border-none focus:border-none focus:shadow-none box-border m-0 p-0"
                          placeholder="Enter Password"
                        />
                        <button
                          type="button"
                          aria-label={
                            showPassword ? 'Hide password' : 'Show password'
                          }
                          onClick={() => setShowPassword((v) => !v)}
                          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
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
                    className="block mt-4 text-[15px] text-right text-blue-800 w-full"
                  >
                    Forgot your password?
                  </Link>
                  <Link
                    to="/layout"
                    className="mt-12 flex flex-col items-center gap-3"
                  >
                    <button
                      type="submit"
                      className="w-full rounded bg-[#26A7DF] py-2 font-medium uppercase text-white"
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
