import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { RiSearchLine } from "react-icons/ri";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Navbar = () => {
  const cart = useSelector((store) => store.cart.items);
  const navItems = [
    {
      name: "Swiggy Corporate",
      icon: HiOutlineShoppingBag,
    },
    {
      name: "Search",
      icon: RiSearchLine,
    },
    {
      name: "Offer",
      icon: BiSolidOffer,
    },
    {
      name: "Help",
      icon: IoHelpBuoyOutline,
    },
    {
      name: "Sign In",
      icon: FaRegUser,
    },
    {
      name: "Cart",
      icon: IoMdCart,
      link: "/cart",
    },
  ];
  return (
    <ul className="flex gap-8">
      {navItems.map((item, index) => {
        const IconComponent = item.icon;
        if (item.name === "Cart") {
          return (
            <Link to="cart">
              <li
                key={index}
                className="flex cursor-pointer items-center text-menu"
              >
                <div className="flex gap-1 items-center">
                  <IconComponent size={20} />
                  <span className="text-base font-medium">
                    {item.name} ({cart.length})
                  </span>
                </div>
              </li>
            </Link>
          );
        }
        return (
          <li
            key={index}
            className="flex cursor-pointer items-center text-menu"
          >
            <div className="flex gap-1 items-center">
              <IconComponent size={20} />
              <span className="text-base font-medium">{item.name}</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Navbar;
