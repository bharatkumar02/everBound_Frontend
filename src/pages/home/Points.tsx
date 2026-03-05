import { Tags, Truck, RefreshCcw, ThumbsUp } from "lucide-react";
export default function Points() {
  return (
    <>
      <section className="grid w-full grid-cols-4 md:divide-x-[0.5px] divide-gray-400 py-5 text-center text-[10px] font-medium text-gray-700 md:grid-cols-4 md:text-[14px] lg:px-10 lg:text-start *:lg:flex-row *:lg:gap-4 xl:px-20 border-t border-gray-400">
        {/* 1 */}
        <div className="flex flex-col items-center justify-center gap-3">
          <Tags size={40} strokeWidth={1.5} />
          <div>
            <h4 className="uppercase tracking-wider">All Major Brands</h4>
            <span>Up to 50% OFF</span>
          </div>
        </div>
        {/* 2 */}
        <div className="flex flex-col items-center justify-center gap-3">
          <Truck size={40} strokeWidth={1.5} />
          <div>
            <h4 className="uppercase tracking-wider">No Minimum</h4>
            <span>Free Shiping</span>
          </div>
        </div>
        {/* 3 */}
        <div className="flex flex-col items-center justify-center gap-3">
          <RefreshCcw size={40} strokeWidth={1.5} />
          <div>
            <h4 className="uppercase tracking-wider">Hassle Free</h4>
            <span>30-days Return</span>
          </div>
        </div>
        {/* 4 */}
        <div className="flex flex-col items-center justify-center gap-3">
          <ThumbsUp size={40} strokeWidth={1.5} />
          <div>
            <h4 className="uppercase tracking-wider">5-Star Rated</h4>
            <span>Customer Service</span>
          </div>
        </div>
      </section>
    </>
  );
}
