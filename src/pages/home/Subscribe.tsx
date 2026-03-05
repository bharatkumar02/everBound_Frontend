export default function Subscribe() {
  return (
    <section className="relative z-10 m-2 flex items-center justify-end gap-3 rounded-lg bg-[#7A3E9D] p-5 py-7 shadow-md before:absolute before:top-0 before:left-0 before:-z-10 before:h-full before:w-full before:rounded-lg before:bg-linear-to-tl before:from-transparent before:via-black/30 before:to-black/40 md:py-0 lg:pr-20 lg:gap-10 outline-2 outline-offset-12 outline-dashed outline-[#7A3E9D] lg:mx-10 md:my-20 ">
      <div className="hidden md:block max-h-[17rem] overflow-hidden lg:max-h-[27rem]">
        <img src="/subscribe.png" alt="Subscribe" className="drop-shadow-2xl -translate-y-10" />
      </div>
      <div className="flex flex-col gap-5 md:w-full lg:w-[80%] xl:w-[60%] ">
        <h3 className="text-2xl leading-7 font-semibold tracking-wider text-white lg:text-3xl lg:leading-11 xl:text-4xl">
          Subscribe for Latest Updates
        </h3>
        <p className="text-[15px] text-gray-200">
          We will do our best to fit your busy schedule! Shop now and enjoy
          hassle-free delivery!
        </p>
        <form className="flex items-center rounded-full border bg-white p-1 *:py-2.5 xl:max mt-7">
          <input
            type="email"
            placeholder="Enter Your Email"
            required
            className="w-full px-3 text-[14px] placeholder:text-[14px] lg:text-base lg:placeholder:text-base outline-none lg:px-5"
          />
          <button className="rounded-full shadow-md bg-[#7A3E9D] px-3 text-[15px] font-medium tracking-wider text-white uppercase lg:px-6">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}