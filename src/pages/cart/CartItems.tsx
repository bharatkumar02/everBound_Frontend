import { Trash2, Heart, Plus, Minus } from "lucide-react";
import cartItems from "../../data/cartItems.json";

export default function CartItems() {
  return (
    <>
      <div className="w-full max-w-full rounded-lg px-1.5 md:px-0">
        <ul className="space-y-2.5 rounded-lg bg-gray-100 p-1.5 text-[15px] *:rounded-lg *:bg-white *:shadow md:pt-0 lg:space-y-3.5">
          {cartItems.map((item) => (
            <li key={item.id} className="flex items-start gap-3 px-1.5 py-3">
              <div className="max-w-[5rem] lg:mx-3">
                <img src={item.image} alt={item.title} className="size-full" />
              </div>
              <div className="w-full space-y-3">
                <div className="flex justify-between">
                  <div>
                    <h4 className="line-clamp-1 text-[16px] leading-5">
                      {item.title}
                    </h4>
                    <div className="pt-0.5">
                      <span className="text-[13px] text-gray-400 line-through">
                        {item.oldPrice}
                      </span>
                      <span className="px-3 font-semibold">
                        {item.newPrice}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center gap-2 rounded-xl border">
                    <span className="cursor-pointer p-2 text-gray-500">
                      <Minus size={18} />
                    </span>
                    <span>{item.quantity}</span>
                    <span className="cursor-pointer px-2 text-gray-500">
                      <Plus size={18} />
                    </span>
                  </div>
                  <div className="flex items-center">
                    <button className="flex items-center gap-1 border-r pr-3">
                      <Heart size={18} /> <span>Save</span>
                    </button>
                    <button className="flex items-center gap-1 px-3 text-red-600">
                      <Trash2 size={18} />
                      <span className="hidden">Delete</span>
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
