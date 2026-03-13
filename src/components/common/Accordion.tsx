import {
  Accordion as UIAccordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

interface AccordionListData {
  name: string;
  data: string[];
  className?: string;
}

interface AccordionDocumentData {
  title: string;
  data: React.ReactNode[];
}

interface AccordionItemData {
  id: number;
  title: string;
  content: string;
  list?: AccordionListData;
  documents?: AccordionDocumentData;
}

// 2. Define the Props for the main component
interface CustomAccordionProps {
  items: AccordionItemData[];
  className?: string;
  toggleClosed?: React.ReactNode;
  toggleOpen?: React.ReactNode;
}

export default function CustomAccordion({
  items,
  className,
  toggleClosed = "+",
  toggleOpen = "−",
}: CustomAccordionProps) {
  return (
    <UIAccordion type="single" collapsible className={cn(className)}>
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          value={item.id.toString()}
          className="w-full"
        >
          <AccordionTrigger className="flex cursor-pointer items-center justify-between gap-3.5 text-left [&>svg]:hidden [&[data-state=closed]_.close-icon]:block [&[data-state=closed]_.open-icon]:hidden [&[data-state=open]_.close-icon]:hidden [&[data-state=open]_.open-icon]:block">
            <span className="font-medium md:text-[17px]">{item.title}</span>

            <span className="transition-transform duration-200">
              <span className="close-icon">{toggleClosed}</span>
              <span className="open-icon hidden">{toggleOpen}</span>
            </span>
          </AccordionTrigger>

          <AccordionContent className="lg:text-base">
            <p className="pb-5">{item.content}</p>

            {item.list && (
              <div>
                <strong>{item.list.name}</strong>
                <ul
                  className={`flex list-outside list-disc flex-col gap-4 pl-5 leading-relaxed ${item.list.className}`}
                >
                  {item.list.data.map((text, index) => (
                    <li key={index}>{text}</li>
                  ))}
                </ul>
              </div>
            )}
            {item.documents && (
              <div className="space-y-2 pt-6">
                <strong>{item.documents.title}</strong>
                <ul className="flex flex-col gap-1 pt-2.5">
                  {item.documents.data.map((doc, index) => (
                    <li key={index}>{doc}</li>
                  ))}
                </ul>
              </div>
            )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </UIAccordion>
  );
}
