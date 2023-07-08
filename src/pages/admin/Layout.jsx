import React from "react";
import { Outlet, Link } from "react-router-dom";
import { AlignJustify } from "lucide-react";

const routes = [
  {
    path: "/admin",
    icon: <AlignJustify size={24} />,
    name: "Dashboard",
  },
  {
    path: "/admin/orders",
    icon: <AlignJustify size={24} />,
    name: "Orders",
  },
  {
    path: "/admin/profit",
    icon: <AlignJustify size={24} />,
    name: "Profit",
  },
  {
    path: "/admin/reviews",
    icon: <AlignJustify size={24} />,
    name: "Reviews",
  },
  {
    path: "/admin/barcode",
    icon: <AlignJustify size={24} />,
    name: "Barcode",
  },
];

function SideMenu({ title, icon, route }) {
  return (
    <li className="relative px-6 py-3">
      <Link
        to={route}
        className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 text-gray-800 dark:text-gray-100"
      >
        <span className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"></span>
        {icon}
        <span className="ml-4">{title}</span>
      </Link>
    </li>
  );
}

export default function Layout() {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 false">
      <aside className="z-30 flex-shrink-0 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 lg:block">
        <a
          href="/#"
          className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200"
        >
          The java restaurant
        </a>
        <div className="py-4 text-gray-500 dark:text-gray-400">
          <ul className="mt-6">
            {routes.map((route, index) => (
              <SideMenu
                key={index}
                title={route.name}
                icon={route.icon}
                route={route.path}
              />
            ))}
          </ul>
        </div>
      </aside>
      <div className="flex flex-col flex-1 w-full">
        <Outlet />
      </div>
    </div>
  );
}
