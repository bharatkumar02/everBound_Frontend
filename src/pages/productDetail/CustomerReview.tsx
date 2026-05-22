import { Star, ChevronDown, ThumbsUp, ThumbsDown } from "lucide-react";

const PRODUCT_IMG =
  "https://cdn.printshoppy.com/image/cache/catalog/product-image/wooden-photo-stands/wooden-photo-stands-501-600x600.webp";

interface Review {
  id: number;
  name: string;
  rating: number;
  date: string;
  text: string;
  images: string[];
  helpful: number;
  unhelpful: number;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Bharat Kumar",
    rating: 5,
    date: "Yesterday",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste nulla, esse vel quasi quam dignissimos assumenda.",
    images: [PRODUCT_IMG, PRODUCT_IMG],
    helpful: 23,
    unhelpful: 0,
  },
  {
    id: 2,
    name: "Priya Sharma",
    rating: 5,
    date: "2 days ago",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste nulla, esse vel quasi quam dignissimos assumenda.",
    images: [PRODUCT_IMG, PRODUCT_IMG],
    helpful: 15,
    unhelpful: 1,
  },
  {
    id: 3,
    name: "Ravi Verma",
    rating: 4,
    date: "Last week",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste nulla, esse vel quasi quam dignissimos assumenda.",
    images: [PRODUCT_IMG, PRODUCT_IMG],
    helpful: 8,
    unhelpful: 0,
  },
];

const ratingBreakdown = [
  { stars: 5, count: 182, pct: "100%" },
  { stars: 4, count: 34, pct: "80%" },
  { stars: 3, count: 10, pct: "30%" },
  { stars: 2, count: 0, pct: "0" },
  { stars: 1, count: 0, pct: "0" },
];

export default function CustomerReview() {
  return (
    <div className="px-4 md:mt-10">
      <h2 className="mb-7 text-xl font-medium md:text-2xl">Customer Reviews</h2>
      <div className="md:flex md:divide-x md:gap-5">
        {/* Rating Summary */}
        <div className="flex divide-x md:flex-col md:divide-x-0 md:gap-7">
          {/* Overall Score */}
          <div className="flex flex-col gap-3 pr-4 md:flex-row md:items-center md:justify-center">
            <div className="space-x-1 text-lg">
              <span className="text-6xl font-light">4.5</span>
              <span>/</span>
              <span>5</span>
            </div>
            <div className="leading-4">
              <ul className="flex items-center gap-1.5">
                {[1, 2, 3, 4, 5].map((n) => (
                  <li key={n} className="text-purple-700">
                    <Star size={18} fill="#7e22ce" />
                  </li>
                ))}
              </ul>
              <span className="text-[11px] font-medium text-gray-400">
                Based on 214 Reviews
              </span>
            </div>
          </div>

          {/* Star Breakdown */}
          <div className="w-full pl-4 text-[14px]">
            <ul className="*:flex *:items-center *:gap-3">
              {ratingBreakdown.map(({ stars, count, pct }) => (
                <li key={stars}>
                  <span className="flex w-10 items-center gap-3">
                    {stars}
                    <Star size={14} fill="#7e22ce" className="text-purple-700" />
                  </span>
                  <div
                    className="relative h-[3px] w-[90%] rounded-full bg-gray-300"
                    style={{ "--bar-width": pct } as React.CSSProperties}
                  >
                    <div
                      className="absolute h-[3px] rounded-full bg-gray-500"
                      style={{ width: pct }}
                    />
                  </div>
                  <span className="w-10">{count}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Review List */}
        <div className="my-5 text-[15px] md:pl-8">
          {/* Sort */}
          <div className="flex items-center justify-between gap-5 rounded-md bg-gray-100 px-3 py-2">
            <h4 className="font-medium">Sort By</h4>
            <span className="flex items-center gap-10 rounded-md bg-white px-3 py-2 shadow">
              All Rating <ChevronDown size={18} />
            </span>
          </div>

          {/* Reviews */}
          <ul className="divide-y *:py-5">
            {reviews.map((review) => (
              <li key={review.id} className="space-y-3">
                {/* Stars & Date */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star
                        key={i}
                        size={15}
                        fill="#7e22ce"
                        className="text-purple-700"
                      />
                    ))}
                  </div>
                  <span className="text-[14px] text-gray-400">{review.date}</span>
                </div>
                {/* Reviewer Name */}
                <h4 className="font-medium">{review.name}</h4>
                {/* Review Text */}
                <p className="leading-5">{review.text}</p>
                {/* Review Images */}
                <div className="flex flex-wrap gap-2">
                  {review.images.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`Review image ${i + 1}`}
                      className="max-w-[6rem]"
                    />
                  ))}
                </div>
                {/* Helpful */}
                <div className="flex items-center gap-3">
                  <span className="text-gray-500">Was this review helpful?</span>
                  <span className="flex items-center gap-2 text-gray-500">
                    <ThumbsUp size={20} /> {review.helpful}
                  </span>
                  <span className="flex items-center gap-2 text-gray-500">
                    <ThumbsDown size={20} /> {review.unhelpful}
                  </span>
                </div>
              </li>
            ))}
          </ul>

          {/* Show More */}
          <div className="mx-auto mt-5 w-1/2">
            <button className="w-full rounded-md border-[0.5px] border-purple-700 px-3 py-2 font-medium text-purple-700">
              Show more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
