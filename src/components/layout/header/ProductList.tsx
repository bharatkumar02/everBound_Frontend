import { useState, useEffect } from "react";
import { ChevronRight, ArrowLeft, ChevronDown, ArrowRight } from "lucide-react";
import { SheetClose } from "@/components/ui/sheet";

interface categoryData {
  subCategory?: string;
  subCategoryList?: string[];
  newSubCategoryList?: string[];
  categoryImage?: string;
  categoryName?: string;
  categoryDescription?: string;
}

interface productData {
  id: number;
  productCategory: string;
  link: string;
  CategoryList: categoryData[];
}

export default function ProductList() {
  const [selectedCategory, setSelectedCategory] = useState<productData | null>(
    null,
  );

  const [headerData, setHeaderData] = useState<productData[]>([]);

  useEffect(() => {
    fetch("/src/data/productList.json")
      .then((response) => response.json())
      .then((data: productData[]) => {
        setHeaderData(data);
      })
      .catch((error) => console.log("Error for Fetch data ...", error));
  }, []);

  return (
    <>
      {/* For Mobile Device */}
      <div className="min-[1280px]:hidden">
        {/* If no category selected → Show Main Categories */}
        {!selectedCategory && (
          <ul className="divide-y-[0.5px] text-[15px] text-gray-700">
            {headerData.map((item) => (
              <li
                key={item.id}
                className="cursor-pointer py-3.5"
                onClick={() =>
                  item.CategoryList?.length && setSelectedCategory(item)
                }
              >
                <div className="flex items-center justify-between text-[15px]">
                  <span className="font-medium">{item.productCategory}</span>
                  {item.CategoryList?.length > 0 && (
                    <ChevronRight size={19} strokeWidth={1.3} />
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}

        {/* If a category is selected → Show its Sub Categories in new sidebar */}
        {selectedCategory && (
          <div className="absolute top-0 left-0 h-full w-full overflow-y-scroll bg-white p-4 min-[1280px]:static min-[1280px]:mt-10">
            {/* Back Button */}
            <button
              className="mb-8 flex items-center gap-2 rounded-full border-[0.5px] border-gray-300 px-3 py-1.5 text-[14px] text-gray-600 hover:text-black"
              onClick={() => setSelectedCategory(null)}
            >
              <ArrowLeft size={20} />
              Back
            </button>

            <h2 className="mb-5 text-[15px] font-bold tracking-wider uppercase">
              {selectedCategory.productCategory}
            </h2>

            <ul className="flex flex-col gap-2.5 text-gray-700">
              {selectedCategory.CategoryList.map((subItem, subIndex) => {
                // Standard Lists with title
                if ("subCategory" in subItem) {
                  return (
                    <li key={subIndex} className="mb-2 text-[15px]">
                      <div
                        tabIndex={0}
                        className="group peer mb-1 flex items-center justify-between font-medium text-gray-800"
                      >
                        {"subCategory" in subItem}
                        <ChevronDown
                          size="19"
                          strokeWidth={1.3}
                          className="group-focus:rotate-180"
                        />
                      </div>
                      <ul className="my-5 hidden space-y-4 pl-2.5 text-[14px] peer-focus-within:block">
                        {/* Standard Lists */}
                        {subItem.subCategoryList?.map(
                          (finalItem, finalIndex) => (
                            <li
                              key={finalIndex}
                              onMouseDown={(e) => e.preventDefault()}
                            >
                              <SheetClose className="w-full text-start">
                                {finalItem}
                              </SheetClose>
                            </li>
                          ),
                        )}

                        {subItem.newSubCategoryList &&
                          subItem.newSubCategoryList.length > 0 &&
                          subItem.newSubCategoryList.map((item, index) => (
                            <li onMouseDown={(e) => e.preventDefault()}>
                              <SheetClose className="flex w-full items-center gap-2.5 text-start">
                                <span
                                  key={index}
                                  className="block hover:text-gray-800"
                                >
                                  {item}
                                </span>
                                <i className="rounded-full border border-dashed border-[#7A3E9D] px-1.5 py-0.5 text-[9px] font-semibold tracking-wider text-[#7A3E9D]">
                                  NEW
                                </i>
                              </SheetClose>
                            </li>
                          ))}
                      </ul>
                    </li>
                  );
                }

                // Images with name and description
                if (subItem.categoryImage) {
                  return (
                    <li key={subIndex} className="mt-1.5">
                      <div onMouseDown={(e) => e.preventDefault()}>
                        <SheetClose className="flex w-full items-center gap-1.5 text-start">
                          <img
                            src={subItem.categoryImage}
                            alt={subItem.categoryName}
                            className="mb-2 max-w-[6rem] rounded"
                          />
                          <div className="flex flex-col text-start">
                            <h4 className="mb-1 text-[15px] font-medium text-gray-800">
                              {subItem.categoryName}
                            </h4>
                            <p className="text-[12px] text-gray-500">
                              {"categoryDescription" in subItem}
                            </p>
                          </div>
                        </SheetClose>
                      </div>
                    </li>
                  );
                }

                // Promo image tile
                // if (subItem.subCategoryImg) {
                //   return (
                //     <li onMouseDown={(e) => e.preventDefault()} key={subIndex}>
                //       <SheetClose className="mt-4 flex w-full items-center gap-2 text-start">
                //         <img
                //           src={subItem.subCategoryImg}
                //           alt={subItem.subCategorytext}
                //           className="mb-2 max-w-[7rem] rounded-md"
                //         />
                //         <p className="text-sm font-medium text-gray-600">
                //           {subItem.subCategorytext}
                //         </p>
                //       </SheetClose>
                //     </li>
                //   );
                // }

                return null;
              })}
              {/* See All button */}
              <div className="mt-5 flex w-full bg-gray-100/70 py-5">
                <button>
                  <SheetClose className="mx-2.5 flex w-full cursor-pointer items-center gap-2 border-b border-[#7A3E9D] py-2 text-start text-[15px] font-semibold text-[#7A3E9D]">
                    {selectedCategory.link} <ArrowRight size={20} />
                  </SheetClose>
                </button>
              </div>
            </ul>
          </div>
        )}
      </div>

      {/* For Large Screen from 1280px upward */}
      <div className="hidden bg-[#7A3E9D] min-[1280px]:block">
        {/* Main Categories */}
        <ul className="text-[15px] text-white shadow lg:flex lg:items-start lg:justify-center lg:text-[14px] *:lg:px-4">
          {headerData.map((item) => (
            <li key={item.id} className="group py-3 lg:py-0">
              <button className="relative flex cursor-pointer items-center justify-between py-3.5 text-[15px] before:absolute before:bottom-0 before:z-20 before:h-[0.5px] before:w-0 before:bg-black before:transition-all before:duration-500 before:ease-in-out group-hover:before:w-full lg:text-[14px]">
                <span>{item.productCategory}</span>
              </button>
              {/* Subcategories */}
              <div className="invisible absolute top-full left-0 z-40 min-h-[250px] w-full -translate-y-2 border-t bg-white pt-4 opacity-0 shadow-lg transition-all delay-300 duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <ul className="columns-6 px-10 py-5 text-gray-900">
                  {item.CategoryList.map((subItem, subIndex) => {
                    // Standard Lists with title
                    if ("subCategory" in subItem) {
                      return (
                        <li
                          key={subIndex}
                          className="mb-6 break-inside-avoid text-[15px]"
                        >
                          <h3
                            tabIndex={0}
                            className="group peer flex items-center justify-between pb-2.5 text-[15px] font-bold tracking-wider text-black uppercase"
                          >
                            {subItem.subCategory}
                          </h3>

                          <ul className="text-[14px] peer-focus-within:block min-[1280px]:pl-0">
                            {subItem.subCategoryList?.map(
                              (finalItem, finalIndex) => (
                                <li
                                  key={finalIndex}
                                  className="cursor-pointer rounded-full py-2 transition-all duration-200 hover:bg-gray-100 hover:pl-2"
                                >
                                  {finalItem}
                                </li>
                              ),
                            )}
                            {subItem.newSubCategoryList &&
                              subItem.newSubCategoryList.length > 0 &&
                              subItem.newSubCategoryList.map((item, index) => (
                                <li
                                  key={index}
                                  className="flex cursor-pointer items-center gap-2 rounded-full transition-all duration-200 hover:bg-gray-100 hover:pl-2"
                                >
                                  <span className="block py-2">{item}</span>
                                  <i className="rounded-full border border-dashed border-[#7A3E9D] px-1.5 py-0.5 text-[9px] font-semibold tracking-wider text-[#7A3E9D]">
                                    NEW
                                  </i>
                                </li>
                              ))}
                          </ul>
                        </li>
                      );
                    }

                    // Images with name and description
                    if ("categoryImage" in subItem) {
                      return (
                        <li
                          key={subIndex}
                          className="mb-6 w-full cursor-pointer break-inside-avoid p-2 pl-5"
                        >
                          <div className="flex w-full flex-col transition-all duration-200 hover:-translate-y-2">
                            <img
                              src={subItem.categoryImage}
                              alt={subItem.categoryName}
                              className="mb-2 w-full rounded object-cover group-hover:shadow"
                            />
                            <h4 className="mb-1 text-[15px] font-bold tracking-wider text-black uppercase">
                              {subItem.categoryName}
                            </h4>
                            <p className="text-[14px] text-gray-500">
                              {"categoryDescription" in subItem}
                            </p>
                          </div>
                        </li>
                      );
                    }

                    return null;
                  })}
                </ul>

                {/* See All button */}
                <div className="flex w-full justify-start bg-gray-100/70 px-10 py-5">
                  <button className="relative flex cursor-pointer items-center gap-2.5 py-2 text-base font-semibold text-[#7A3E9D] transition-all duration-300 before:absolute before:bottom-0 before:h-[1.5px] before:w-full before:rounded-full before:bg-[#7A3E9D] before:transition-all before:duration-300 hover:translate-y-1 hover:before:w-0">
                    {item.link} <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
