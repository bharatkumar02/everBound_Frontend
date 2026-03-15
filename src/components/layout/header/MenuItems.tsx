import { Layers } from "lucide-react";
import { Headset } from "lucide-react";
import { House } from "lucide-react";
import { MessagesSquare } from "lucide-react";
import { Link } from "react-router";

const menuItems = [
  { icon: House, name: "Home", link: "/" },
  { icon: Layers, name: "About Us", link: "about-us" },
  { icon: Headset, name: "Help Center", link: "contact-us" },
  { icon: MessagesSquare, name: "FAQ's", link: "faq" },
];

function MenuItems() {
  return (
    <>
      {menuItems.map((item, index) => (
        <li key={index}>
          <Link
            to={item.link}
            className={`flex cursor-pointer items-center gap-3.5 px-4 py-2.5 ${item.name === "Admin-Dashboard" && "bg-gray-100"}`}
          >
            <item.icon size={20} strokeWidth={1.5} />
            <span>{item.name}</span>
          </Link>
        </li>
      ))}
    </>
  );
}

export default MenuItems;
