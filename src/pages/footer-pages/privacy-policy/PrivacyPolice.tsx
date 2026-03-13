import CustomAccordion from "@/components/common/Accordion";
import { Plus, Minus } from "lucide-react";

export default function PrivacyPolicy() {
  const privacyData = [
  {
    id: 1,
    title: "Information We Collect",
    content: `At everBound, we collect personal information such as your name, email address, shipping address, and phone number when you place an order. For customized items (acrylic frames, apparel), we also collect and temporarily store the images and text you upload for production purposes.`,
  },
  {
    id: 2,
    title: "How We Use Your Data",
    content: `Your information is used solely to process your orders, provide customer support, and keep you updated on your shipment. Uploaded photos are used exclusively for the creation of your customized gifts and are deleted from our active production servers after order completion.`,
  },
  {
    id: 3,
    title: "Customized Product Privacy",
    content: `We respect the personal nature of your gifts. everBound will never use your personal photos or custom designs for marketing or social media without your explicit written consent. Your designs are your own.`,
  },
  {
    id: 4,
    title: "Sharing with Third Parties",
    content: `We do not sell your personal data. We only share necessary information with trusted partners to fulfill your order, such as payment gateways (to process transactions) and courier services (to deliver your acrylic gifts and apparel).`,
  },
  {
    id: 5,
    title: "Data Security",
    content: `We implement industry-standard security measures to protect your personal information. This includes SSL encryption for data transmission and secure storage for your account details.`,
  },
  {
    id: 6,
    title: "Cookies and Tracking",
    content: `everBound uses cookies to enhance your shopping experience, such as remembering items in your cart and analyzing site traffic to improve our interface. You can manage cookie preferences through your browser settings.`,
  },
  {
    id: 7,
    title: "Updates to This Policy",
    content: `We may update our Privacy Policy from time to time to reflect changes in our practices or for legal reasons. Continued use of everBound after updates constitutes acceptance of the revised terms.`,
  },
];

  return (
    <div className="w-full">
      <div className="border-gray-300 p-4 pt-8 md:p-8 md:pt-14 lg:border-t">
        <h1 className="text-2xl font-bold text-black lg:text-3xl">
          Privacy Policy
        </h1>
      </div>

      <div className="bg-[#E2E2E2] p-4 md:p-8">
        <div className="bg-white">
          <CustomAccordion
            items={privacyData}
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
