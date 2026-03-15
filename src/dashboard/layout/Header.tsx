import { ShoppingCart, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";
export default function Header() {
  const navigate = useNavigate();
  return (
    <header className="sticky top-0 z-20 border-b border-gray-100 bg-white/80 py-1 shadow-sm backdrop-blur-xl">
      {/* Mobile header: logo (left), profile toggle (right) */}
      <div className="grid grid-cols-3 items-center px-3 py-2.5 lg:hidden">
        <div>
          <button
            type="button"
            aria-label="Back"
            title="Back"
            className="inline-flex size-9 items-center justify-center rounded-full border border-gray-400"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft size={18} strokeWidth={1.8} />
          </button>
        </div>
        <div>
          <a href="/" aria-label="Go to homepage">
            <img
              src="/logo/logo2.png"
              alt="Logo"
              className="mx-auto h-6 w-auto"
            />
          </a>
        </div>

        <div className="flex justify-end">
          <a
            href="/cart"
            aria-label="Cart"
            title="Cart"
            className="inline-flex size-9 items-center justify-center rounded-full border border-gray-400"
          >
            <ShoppingCart size={18} strokeWidth={1.8} />
          </a>
        </div>
      </div>

      {/* Desktop header remains unchanged */}
      <div className="hidden items-center gap-3 px-3 py-2.5 lg:flex lg:px-8">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="inline-flex cursor-pointer items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-1.5 text-[13px] text-gray-700 hover:bg-gray-50 focus-visible:ring-2 focus-visible:ring-[#26A7DF]/30 focus-visible:outline-none"
        >
          <ArrowLeft size={18} />
          <span>Back</span>
        </button>

        {/* Centered logo */}
        <div className="flex flex-1 justify-center">
          <img src="/logo/logo2.png" alt="Logo" className="h-8 w-auto" />
        </div>
      </div>
    </header>
  );
}
