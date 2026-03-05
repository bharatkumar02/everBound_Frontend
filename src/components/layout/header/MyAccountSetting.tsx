import { ShoppingBag, Heart, HandCoins, Tag } from "lucide-react";
import { Link } from "react-router";

const itemList = [
  { name: "My Order", icon: ShoppingBag },
  { name: "WishList", icon: Heart },
  { name: "My Coupons", icon: Tag },
  { name: "Earn & Refers", icon: HandCoins },
];

interface onClickHandler {
  onClick: () => void;
}

const MainAccoutnSetting = ({ onClick }: onClickHandler) => {
  return (
    <>
      <div className="border-t-[0.5px] bg-gray-50 py-5 text-[15px]">
        <ul className="font-medium text-gray-500">
          {itemList.map((item, index) => (
            <li key={index} onClick={onClick}>
              <Link to="/">
                <div className="flex items-center gap-3 px-5 py-2.5">
                  <item.icon size={20} /> {item.name}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MainAccoutnSetting;
