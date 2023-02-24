import React, { useState } from "react";
import { BsFillBasket2Fill } from "react-icons/bs";
import { AiOutlineLogin, AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FiX } from "react-icons/fi";
import NavItem from "./NavItem";

const Navbar = ({ className }) => {
  const addClassName = className ? `${className}` : "";
  const [offToggle, setToggle] = useState(false);

  return (
    <>
      <nav className="fixed flex px-5 lg:px-16 2xl:px-32 py-5 md:py-7 w-full z-30 items-center top-0 bg-white/80 backdrop-blur-sm shadow-lg">
        <div className="w-4/12 md:w-3/12">
          <h1 className="uppercase text-2xl md:text-3xl font-semibold">
            food<span className="text-[#DD1A1A]">id</span>
          </h1>
        </div>
        <div className="hidden md:flex w-4/12 md:w-6/12 justify-around">
          <NavItem dir="horizontal" />
        </div>
        <div className="w-6/12 md:w-5/12 flex justify-center md:justify-end items-center">
          <Link href="/">
            <div className="h-[35px] w-[35px] md:h-[50px] md:w-[50px] p-1 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center mr-4 lg:mr-7">
              <AiOutlineSearch size={30} className="text-[#677487]" />
            </div>
          </Link>
          <Link href="/">
            <div className="h-[35px] w-[35px] md:h-[50px] md:w-[50px] p-1 bg-white hover:bg-gray-300 rounded-full flex items-center justify-center mr-4 lg:mr-7">
              <BsFillBasket2Fill size={30} className="text-[#677487]" />
            </div>
          </Link>
          <Link href="/">
            <div className="md:hidden h-[35px] w-[35px] md:h-[50px] md:w-[50px] p-1 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center mr-4">
              <AiOutlineLogin size={30} className="text-[#677487]" />
            </div>
          </Link>
          <Link href="/">
            <span className="hidden md:flex bg-white hover:bg-gray-100 py-3 px-6 rounded-full font-semibold text-[#393D4E]">
              Sign Up
            </span>
          </Link>
        </div>
        <div
          onClick={() => setToggle(true)}
          className="w-2/12 flex md:hidden justify-end"
        >
          <HiOutlineMenuAlt4 size={35} />
        </div>
      </nav>
      <div
        onClick={() => setToggle(false)}
        className={`fixed bg-white z-50 top-0 h-full w-full md:hidden transition-all ${className} ${
          offToggle ? "right-0" : "right-full"
        }`}
      >
        <FiX size={35} className="right-0 absolute text-right m-5" />
        <NavItem dir="vertikal" />
      </div>
    </>
  );
};

export default Navbar;
