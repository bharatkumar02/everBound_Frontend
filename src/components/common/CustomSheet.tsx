import type { ReactNode } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose
} from "../ui/sheet";

interface customSheetProp {
  sheetTrigger: string | ReactNode;
  sheetDescription?: string | ReactNode;
  sheetTitle?: string | ReactNode;
  sheetClose?: string | ReactNode;
}

export default function CustomSheet({
  sheetTrigger,
  sheetDescription,
  sheetTitle,
  sheetClose
}: customSheetProp) {
  return (
    <>
      <Sheet>
        <SheetTrigger>{sheetTrigger}</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>{sheetTitle}</SheetTitle>
            <SheetDescription>{sheetDescription}</SheetDescription>
          </SheetHeader>
          <SheetFooter>
            <SheetClose>{sheetClose}</SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}
