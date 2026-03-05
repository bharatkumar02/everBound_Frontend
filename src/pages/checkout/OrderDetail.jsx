import { Truck, ShieldCheck, BadgeIndianRupee } from "lucide-react";

export default function OrderDetail() {
  return (
    <>
      <div className="w-full space-y-2 p-5 pb-3 md:mx-auto md:max-w-[20rem] md:p-0 lg:w-full lg:max-w-[22rem] lg:pb-10">
        <div className="space-y-1 rounded-md bg-white px-6 py-3 shadow lg:py-4">
          <h3 className="flex items-center gap-1.5 text-[13px] font-medium uppercase text-gray-500">
            <Truck size={18} strokeWidth={1.8} />
            Delivery
          </h3>
          <div className="flex items-center gap-2.5">
            {/* <Truck strokeWidth={1.5} /> */}
            <p>
              Estimate Delivered by
              <span className="pl-1 font-medium">June 24, 2022</span>.
            </p>
          </div>
        </div>
        {/* Subototal */}
        <div className="space-y-2 rounded-md bg-white px-6 py-3 shadow lg:py-4">
          <div className="flex items-center justify-between border-b border-dashed py-4 text-[15px] font-medium uppercase text-gray-500">
            <span className="flex items-center gap-1.5">
              <BadgeIndianRupee size={18} /> Price Detail
            </span>
            <span>2 Items</span>
          </div>
          <ul className="font-medium text-gray-600 *:flex *:items-center *:justify-between *:py-2">
            <li>
              <span>Total price:</span>
              <span>$16.19</span>
            </li>
            <li>
              <span>Discount:</span>
              <span>-$5.00</span>
            </li>
            <li>
              <span>Delivery:</span>
              <span className="rounded-lg">Free</span>
            </li>
          </ul>
        </div>

        {/* Total */}
        <div className="flex items-center justify-between rounded-md bg-white px-6 py-3 text-lg font-medium shadow">
          <span>Total</span>
          <span>$78.76</span>
        </div>

        <div className="items- flex gap-1 pt-3 text-[14px] font-medium text-gray-500">
          <ShieldCheck className="text-green-600/70 drop-shadow-md" /> Shop
          Safe. Return Easy. 100% Genuine Items.
        </div>
        <div>
          <p className="text-center text-gray-500">
            By continuing with the order, you confirm that you are above 18
            <a href="#" className="w-fit text-blue-600">
              {" "}
              Terms of Use{" "}
            </a>{" "}
            and{" "}
            <a href="#" className="w-fit text-blue-600">
              {" "}
              Pricacy Policy.{" "}
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
