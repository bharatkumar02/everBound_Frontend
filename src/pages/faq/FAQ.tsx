import CustomAccordion from "@/components/common/Accordion";
import { Plus, Minus } from "lucide-react";

export default function Faq() {
  const faqData = [
    {
      id: 1,
      title: "What information does everBound collect when I order?",
      content:
        "We collect your name, email, shipping address, and phone number to process your order. For our custom acrylic frames and apparel, we also temporarily store the photos and text you upload so we can create your items.",
    },
    {
      id: 2,
      title: "How is my personal data and uploaded photos used?",
      content:
        "Your data is used solely for order processing and support. Uploaded photos are used exclusively for production and are automatically deleted from our active servers once your order is completed.",
    },
    {
      id: 3,
      title: "Will my custom designs be used in your marketing?",
      content:
        "No. We respect your privacy. everBound will never use your personal photos or custom designs for social media or marketing without your explicit written consent.",
    },
    {
      id: 4,
      title: "Do you share my information with third parties?",
      content:
        "We never sell your data. We only share necessary details with trusted partners essential to your order, such as payment gateways and courier services for delivery.",
    },
    {
      id: 5,
      title: "Is my shopping experience secure?",
      content:
        "Absolutely. We use industry-standard SSL encryption for all data transmission and secure storage for your account details to ensure your information stays protected.",
    },
    {
      id: 6,
      title: "How do you use cookies on the website?",
      content:
        "We use cookies to improve your experience, like remembering what's in your cart and analyzing site traffic. You can manage these settings through your browser at any time.",
    },
  ];

  return (
    <div className="w-full">
      <div className="border-gray-300 p-4 pt-8 md:p-8 md:pt-14 lg:border-t">
        <h1 className="text-2xl font-bold text-black lg:text-3xl">
          Frequently Asked Questions
        </h1>
      </div>

      <div className="bg-[#E2E2E2] p-4 md:p-8">
        <div className="bg-white">
          <CustomAccordion
            items={faqData}
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
