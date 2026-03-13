import CustomAccordion from "@/components/common/Accordion";
import { Plus, Minus } from "lucide-react";

export default function TermsCondition() {
  const termsCondition = [
    {
      id: 1,
      title: "Acceptance of Terms",
      content: `By accessing everBound and placing an order, you agree to be bound by these Terms and Conditions. These terms apply to all visitors, users, and customers of the website.`,
    },
    {
      id: 2,
      title: "Product Customization",
      content: `When using our 2D customizer, you are responsible for the quality and resolution of the images you upload. everBound is not responsible for blurry or pixelated prints resulting from low-quality source files provided by the user.`,
    },
    {
      id: 3,
      title: "Orders and Payments",
      content: `All orders for acrylic items and apparel are subject to acceptance and availability. We reserve the right to refuse any order. Prices are subject to change, and orders are only processed once payment is confirmed.`,
    },
    {
      id: 4,
      title: "Intellectual Property",
      content: `The designs, logos, and website content are the property of everBound. However, you retain ownership of the photos you upload. By uploading them, you grant us a limited license to use the images solely for the purpose of producing your specific order.`,
    },
    {
      id: 5,
      title: "Cancellations and Returns",
      content: `Due to the highly personalized nature of our products, orders for customized acrylic frames or apparel cannot be cancelled or returned once production has begun, except in cases of manufacturing defects or shipping damage.`,
    },
    {
      id: 6,
      title: "Shipping and Delivery",
      content: `We aim to deliver your gifts within the estimated timeframe; however, everBound is not liable for delays caused by third-party courier services or incorrect address information provided at checkout.`,
    },
    {
      id: 7,
      title: "Limitation of Liability",
      content: `everBound shall not be liable for any indirect or consequential damages arising from the use of our products. Our maximum liability for any order is limited to the total purchase price of the specific item in question.`,
    },
  ];

  return (
    <div className="w-full">
      <div className="border-gray-300 p-4 pt-8 md:p-8 md:pt-14 lg:border-t">
        <h1 className="text-2xl font-bold text-black lg:text-3xl">
          Terms & Condition
        </h1>
      </div>

      <div className="bg-[#E2E2E2] p-4 md:p-8">
        <div className="bg-white">
          <CustomAccordion
            items={termsCondition}
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
