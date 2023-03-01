import React from "react";

const NavItem = ({ dir }) => {
  const dirs = {
    horizontal: "space-x-6 lg:space-x-10",
    vertikal: "flex-col pl-10 space-y-6",
  };

  const pickedDir = dirs[dir];
  return (
    <div className={`flex ${pickedDir}`}>
      <a href="#home" className="hover:text-gray-700 font-semibold text-lg">
        Home
      </a>
      <a href="#menu" className="hover:text-gray-700 font-semibold text-lg">
        Menu
      </a>
      <a href="#footer" className="hover:text-gray-700 font-semibold text-lg">
        About Us
      </a>
      <a href="#footer" className="hover:text-gray-700 font-semibold text-lg">
        Contact
      </a>
    </div>
  );
};

export default NavItem;
