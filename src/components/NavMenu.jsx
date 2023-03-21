import React from "react";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

export default function NavMenu() {
  const cart = useSelector((state) => state.cart);
  return (
    <div className="flex flex-row items-center justify-between p-4 my-4">
      <Link to="/">
        <IoMdArrowRoundBack size="32px" />
      </Link>
      <div className="relative">
        <Link to="/cart">
          <IoCartOutline size="32px" className="ml-auto" />
        </Link>
        {cart.length > 0 ? (
          <span className="w-2 h-2 bg-red-600 z-1 rounded-full absolute -top-1 right-0 animate-ping"></span>
        ) : null}
      </div>
    </div>
  );
}
