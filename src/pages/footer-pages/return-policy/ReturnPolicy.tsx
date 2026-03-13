import CustomAccordion from "@/components/common/Accordion";
import { Plus, Minus } from "lucide-react";

export default function ReturnPolicy() {
  const returnPolicy = [
  {
    id: 1,
    title: "Personalized Items Policy",
    content: `Because our acrylic frames and apparel are custom-made specifically for you with your photos and text, we cannot accept returns or exchanges if you change your mind. Once a custom order is placed and production begins, it is unique to you and cannot be resold.`,
  },
  {
    id: 2,
    title: "Damaged or Defective Goods",
    content: `If your order arrives damaged (e.g., cracked acrylic, broken frame) or has a manufacturing defect, we will provide a free replacement. Please inspect your package immediately upon delivery and notify us within 48 hours of receipt.`,
  },
  {
    id: 3,
    title: "Incorrect Personalization",
    content: `If we make an error that differs from the customization details you provided (such as a spelling mistake made by our team), we will replace the item at no extra cost. However, everBound is not responsible for errors in the original text or low-resolution photos uploaded by the user.`,
  },
  {
    id: 4,
    title: "How to Initiate a Return",
    content: `To report a damaged or incorrect item, please email our support team with your Order ID and clear photos of the product and the packaging. Our team will review your request and get back to you within 24-48 hours.`,
  },
  {
    id: 5,
    title: "Return Window",
    content: `Claims for damaged or defective items must be filed within 7 days of the delivery date. After this period, everBound cannot be held responsible for damages reported, as they may be attributed to post-delivery handling.`,
  },
  {
    id: 6,
    title: "Refunds",
    content: `Refunds are only issued in exceptional cases where a replacement is not possible. If approved, the refund will be processed back to your original payment method within 5-7 business days. Shipping costs are generally non-refundable.`,
  },
  {
    id: 7,
    title: "Return Shipping",
    content: `In the event that we request the damaged item to be sent back to us, everBound will provide a prepaid shipping label or reimburse the shipping costs. Do not send items back to us without prior authorization from our support team.`,
  },
];

  return (
    <div className="w-full">
      <div className="border-gray-300 p-4 pt-8 md:p-8 md:pt-14 lg:border-t">
        <h1 className="text-2xl font-bold text-black lg:text-3xl">
          Return Policy
        </h1>
      </div>

      <div className="bg-[#E2E2E2] p-4 md:p-8">
        <div className="bg-white">
          <CustomAccordion
            items={returnPolicy}
            toggleClosed={
              <Plus className="size-5 lg:size-6" strokeWidth={1.4} />
            }
            toggleOpen={
              <Minus className="size-5 lg:size-6" strokeWidth={1.4} />
            }
            className="rounded-lg border p-3 md:p-8"
          />
        </div>
      </div>
    </div>
  );
}
