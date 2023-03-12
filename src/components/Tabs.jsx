import React from "react";
import {IoFastFoodSharp} from "react-icons/io5";
import {BiDrink} from "react-icons/bi";
export default function Tabs({handleFood, handleDrink, activeTab}) {
  return (
    <ul className="flex border-b border-gray-100">
      <li className="flex-1">
        <button onClick={handleFood} className="relative block p-4 w-full">
          <span className="absolute inset-x-0 -bottom-px h-px w-full bg-pink-600"></span>
          <div className="flex items-center justify-center gap-4">
            <IoFastFoodSharp size="18px" color={activeTab === 'foods' ? "blue" : ""} />
            <span className={activeTab === 'foods' ? "text-sm font-medium text-blue-900" : "text-sm font-medium text-gray-900"}> Foods </span>
          </div>
        </button>
      </li>

      <li className="flex-1">
        <button onClick={handleDrink} className="relative block p-4 w-full">
          <span className="absolute inset-x-0 -bottom-px h-px w-full bg-blue-400"></span>

          <div className="flex items-center justify-center gap-4">
            <BiDrink size="18px" color={activeTab !== 'foods' ? "blue" : "" } />
            <span className={activeTab !== 'foods' ? "text-sm font-medium text-blue-900" : "text-sm font-medium text-gray-900"}> Drinks </span>
          </div>
        </button>
      </li>
    </ul>
  );
}
