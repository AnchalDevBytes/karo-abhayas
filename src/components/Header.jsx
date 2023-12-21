import React, { useState } from "react";
import { IoMdCart, IoMdContact } from "react-icons/io";
import { FaList } from "react-icons/fa";
import Button from "./Button";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Header = () => {
  const [showList, setShowList] = useState(false);
  const toggle = () => {
    setShowList(!showList);
  };

  const {cartItems} = useCart();
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="flex justify-between px-10 items-center py-3 bg-neutral-100 shadow">
      <Link to="/" className="text-lg font-bold text-black">
        Karo Abhayaas
      </Link>
      <div>
        <div className={`absolute md:relative rounded-s-lg rounded-br-lg md:rounded-none z-10 bg-stone-200 p-5 md:p-0  md:bg-neutral-100 right-4 top-10 md:right-auto md:top-auto  flex-col md:flex-row flex justify-evenly items-start gap-2 md:gap-5 md:items-center lg:gap-12 text-black ${showList ? "block" : "hidden md:flex"}`}>
          <NavLink to="/login" className={({isActive})=> isActive ? "text-orange-300" : "text-black" }>
            <Button text={"JOIN Us"} />
          </NavLink>
          <NavLink to="/classes" className={({isActive})=> isActive ? "text-base font-thin text-orange-300" : "text-base font-thin"}>
            Classes
          </NavLink>
          <NavLink to="/products" className={({isActive})=> isActive ? "text-base font-thin text-orange-300" : "text-base font-thin"}>
            Products
          </NavLink>
          <NavLink to="/about" className={({isActive})=> isActive ? "text-base font-thin text-orange-300" : "text-base font-thin"}>
            About Us
          </NavLink>
          <NavLink to="/contact" className={({isActive})=> isActive ? "text-orange-300" : "text-black" }>
            <IoMdContact className="h-5 w-5 flex-shrink-0" />
          </NavLink>
          <NavLink to="/cart" className={({isActive})=> isActive ? "text-orange-300 relative" : "text-black relative" }>
            <IoMdCart className="h-5 w-5 flex-shrink-0" />
            <span className="absolute -top-2 -left-2 bg-red-500 h-4 rounded-full flex items-center justify-center w-4 text-xs">{totalQuantity}</span>
          </NavLink>
        </div>
        <button className={`md:hidden ${showList ? `text-orange-300` : `text-black`}`} onClick={toggle}>
          <FaList />
        </button>
      </div>
    </nav>
  );
};

export default Header;
