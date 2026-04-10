import { useState } from "react";
import { CircleUserRound } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import { KeyRound } from "lucide-react";
import axios from "axios";

export default function Registration() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handelChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // handelSubmit login
  const handelSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      return alert("Password do no match!");
    }

    if (!formData.agree) {
      return alert("Please agree to the terms.");
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/user/register`,
        formData,
      );

      if (response.data.success) {
        alert("Registration Successful!!");
        navigate("/login");
      }
    } catch (error: any) {
      console.error("Signup Error", error.response?.data?.message);
      alert(error.response?.data?.message || "Something Went Wrong!");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className='bg-purple-50/80 md:grid md:h-screen md:w-screen md:place-items-center md:bg-[url("/circle.svg")] md:bg-cover md:bg-center md:bg-no-repeat md:px-5'>
        <div className="max-w-[60rem] bg-white md:flex md:w-full md:items-center md:justify-center md:border md:shadow-[0px_0px_5px_0px_#D1D5DB]">
          <div className="flex min-h-screen w-full flex-col items-center gap-10 pt-10 md:mt-0 md:min-h-full md:w-1/2 md:justify-center md:pt-0">
            <div className="max-w-[10rem] md:hidden">
              <img src="/logo/logo2.png" alt="Logo" />
            </div>
            <form
              onSubmit={handelSubmit}
              className="relative z-50 w-full max-w-[20.5rem] before:absolute before:-top-2.5 before:-left-2.5 before:-z-10 before:h-full before:w-full before:rounded-md before:border-2 before:border-purple-200 md:max-w-full md:before:hidden"
            >
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
                      onChange={handelChange}
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
                      name="mobile"
                      onChange={handelChange}
                      value={formData.mobile}
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
                      onChange={handelChange}
                      required
                      className="w-full outline-none placeholder:text-gray-400/80"
                      placeholder="Enter Your Email"
                    />
                  </label>
                  <label className="flex items-center gap-3 border-b-[0.5px] py-1 text-[15px]">
                    <KeyRound strokeWidth={1.2} size={22} color="gray" />
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handelChange}
                      required
                      className="w-full outline-none placeholder:text-gray-400/80"
                      placeholder="New Password"
                    />
                  </label>
                  <label className="flex items-center gap-3 border-b-[0.5px] py-1 text-[15px]">
                    <KeyRound strokeWidth={1.2} size={22} color="gray" />
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handelChange}
                      required
                      className="w-full outline-none placeholder:text-gray-400/80"
                      placeholder="Confirm Password"
                    />
                  </label>
                </div>
                <label className="flex gap-2 py-5">
                  <input
                    type="checkbox"
                    name="agree"
                    checked={formData.agree}
                    onChange={handelChange}
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
                    className="w-full cursor-pointer rounded-full bg-purple-700 py-2 font-medium tracking-wider text-white uppercase md:w-[80%]"
                  >
                    {loading ? "Registering..." : "Register"}
                  </button>
                  <div className="relative z-10 my-2 w-full text-center text-gray-500 before:absolute before:top-1/2 before:left-0 before:-z-10 before:h-[1px] before:w-full before:translate-y-1/2 before:rounded-full before:bg-gray-400 md:my-3">
                    <span className="bg-white px-1.5">Or Continue with</span>
                  </div>
                  <button
                    type="button"
                    disabled={loading}
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
