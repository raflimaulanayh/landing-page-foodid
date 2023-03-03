/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Navbar from "@/components/Navbar";

const Header = () => {
  return (
    <div className="h-full top-0">
      <img
        src="/assets/bg-hero.png"
        alt="bg-hero"
        className="hidden sm:flex absolute -z-10 object-cover"
      />
      <img
        src="/assets/bg-hero-sm.png"
        alt="bg-hero"
        className="sm:hidden absolute -z-10 object-cover"
      />
      <Navbar />
      <header id="home" className="container mx-auto">
        <div className="px-5 md:px-10 pt-36 md:pt-48 xl:pt-64">
          <a href="#menu">
            <span className="py-2 px-5 border border-gray-700 font-semibold rounded-full">
              Hungry?
            </span>
          </a>
          <h1 className="pt-8 lg:pt-14 text-3xl sm:text-5xl lg:text-7xl font-semibold w-8/12 sm:w-9/12 xl:w-6/12">
            JUST COME TO FOODIED & ORDER
          </h1>
          <p className="pt-1 lg:pt-12 text-lg text-gray-500 w-8/12 md:w-8/12">
            Lorem ipsum dolor sit amet consectetur. Lectus sit mauris velit
            tellus ullamcorper neque ultrices id neque.
          </p>
          <div className="pt-7 lg:pt-12 flex items-center justify-arround">
            <a href="#menu">
              <span className="py-3 px-5 sm:py-4 sm:px-10 bg-[#85B84E] hover:bg-opacity-80 rounded-full text-lg font-semibold text-white mr-5">
                Order Now
              </span>
            </a>
            <a href="#menu">
              <div className="py-2 px-4 md:py-3 md:px-6 border border-gray-600 rounded-full text-lg font-semibold text-gray-800 flex items-center">
                <p className="mr-1 sm:mr-2">Buy Now</p>
                <BsArrowRight />
              </div>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
