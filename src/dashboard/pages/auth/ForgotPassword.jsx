import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

export default function ForgotPassword() {
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
          <div className="w-full max-w-[35rem] p-5 !pb-10">
            <h1 className="text-[20px] font-semibold text-gray-900">Forgot Password</h1>
            <p className="mt-1 text-[13px] text-gray-600">Enter your email and we’ll send a secure link to reset your password.</p>
          </div>
          <form className="w-full max-w-[35rem] p-5 !pt-0 !pb-10">
            <div className="space-y-6">
              <label className="flex flex-col gap-1.5">
                <span className="font-medium uppercase">
                  Email <span className="text-red-600 text-lg">*</span>
                </span>
                <div className="flex flex-row-reverse justify-between items-center gap-3.5 border border-gray-300 border-solid px-3.5 py-0.5 rounded-2xl overflow-hidden transition-all focus-within:border-gray-500/80 bg-white">
                  <Mail strokeWidth={1.5} size={25} className="text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full outline-none ring-0 placeholder:text-gray-400/80 border-none focus:border-none focus:shadow-none box-border m-0 p-0"
                    placeholder="abc@gmail.com"
                  />
                </div>
              </label>
            </div>
            <div className="mt-8 flex items-center justify-between">
              <Link to="/login" className="text-[14px] text-gray-600 hover:text-gray-800">Back to login</Link>
              <button type="submit" className="rounded-2xl bg-[#26A7DF] py-2.5 px-4 font-medium text-white">Send Reset Link</button>
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
                <div className="px-10 pt-10">
                  <h1 className="text-[22px] font-semibold text-gray-900">Forgot Password</h1>
                  <p className="mt-1 text-[13px] text-gray-600">Enter your email address and we’ll send you a secure link to reset your password. If you don’t receive an email, please check your spam folder.</p>
                </div>
                <form className="w-full p-5 !pb-10 px-10">
                  <div className="space-y-6 pt-6">
                    <label className="flex flex-col gap-1.5">
                      <span className="text-[16px] font-medium">
                        Email <span className="text-red-600 text-lg">*</span>
                      </span>
                      <div className="flex flex-row-reverse justify-between items-center gap-3.5 border border-gray-300 border-solid px-2.5 rounded-lg transition-all focus-within:border-gray-500/80">
                        <Mail strokeWidth={1.5} size={25} className="text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          required
                          className="w-full outline-none ring-0 placeholder:text-gray-400/80 border-none focus:border-none focus:shadow-none box-border m-0 p-0"
                          placeholder="Enter Email"
                        />
                      </div>
                    </label>
                  </div>
                  <div className="mt-10 flex items-center justify-between">
                    <Link to="/login" className="text-[14px] text-gray-600 hover:text-gray-800">Back to login</Link>
                    <button type="submit" className="rounded bg-[#26A7DF] py-2 px-4 font-medium text-white">Send Reset Link</button>
                  </div>
                </form>
              </div>

              {/* Image */}
              <div className="w-[55%]">
                <img src="./login.svg" alt="Password Reset" className="h-full w-full drop-shadow-lg" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
