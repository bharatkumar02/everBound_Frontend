import { useState } from "react";

function Dropdown({ children, heading }) {
  const [toggle, setToggle] = useState(false);
  function handelOnClick() {
    setToggle((prev) => !prev);
  }
  return (
    <>
      <section className="mx-2 lg:border-none md:py-0 border-b py-2">
        <button
          className="flex w-full items-center justify-between lg:mb-4 lg:text-[17px] lg:items-start text-[15px] font-medium "
          onClick={handelOnClick}
        >
          {heading} <span className="lg:hidden">+</span>
        </button>
        <div
          className={`overflow-y-hidden text-sm lg:text-base ${toggle ? "mt-2.5 h-fit" : "h-0 lg:h-fit"}`}
        >
          {children}
        </div>
      </section>
    </>
  );
}

export default Dropdown;
