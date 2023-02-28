/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-children-prop */
import React from "react";
import ListMenuFooter from "@/components/ListMenuFooter";

const Footer = () => {
  return (
    <footer id="footer" className="bg-[#E5F1D9] w-full py-20 relative">
      <div className="container mx-auto">
        <div className="px-16 flex flex-wrap mx-auto">
          <div className="w-full lg:w-3/12">
            <h4 className="text-5xl font-semibold py-5">Menu</h4>
            <div className="flex flex-col">
              <ListMenuFooter urlListFooter="/" children="Home" />
              <ListMenuFooter urlListFooter="/" children="Why Choose" />
              <ListMenuFooter urlListFooter="/" children="Special Menu" />
              <ListMenuFooter urlListFooter="/" children="Regular Food" />
            </div>
          </div>
          <div className="w-full lg:w-3/12">
            <h4 className="text-5xl font-semibold py-5">Help</h4>
            <div className="flex flex-col">
              <ListMenuFooter urlListFooter="/" children="Privacy" />
              <ListMenuFooter urlListFooter="/" children="Terms & Condition" />
              <ListMenuFooter urlListFooter="/" children="Policy" />
            </div>
          </div>
          <div className="w-full lg:w-3/12">
            <h4 className="text-5xl font-semibold py-5">Contact</h4>
            <div className="flex flex-col">
              <ListMenuFooter urlListFooter="/" children="081320179936" />
              <ListMenuFooter urlListFooter="/" children="foodid@gmail.com" />
              <ListMenuFooter urlListFooter="/" children="43764, Sundanese" />
            </div>
          </div>
          <div className="w-full lg:w-3/12 flex flex-wrap">
            <div className="flex flex-col justify-center">
              <h4 className="text-5xl sm:text-5xl font-semibold mt-10 sm:mt-0 mb-10">
                Subscribe our newsletter
              </h4>
              <input
                type="text"
                placeholder="Enter Your Email"
                className="px-2 py-2 sm:px-10 sm:py-5 text-lg bg-transparent rounded-lg border border-gray-500 outline-none z-10"
              />
              <button
                type="submit"
                className="cursor-pointer my-7 mr-36 bg-[#84B750] hover:bg-opacity-80 py-3 px-4 rounded-lg border-0 text-white font-semibold text-lg"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between bottom-0 absolute w-full">
        <img src="/assets/shape-footer-left.png" alt="" className="" />
        <img
          src="/assets/shape-footer-right.png"
          alt=""
          className="hidden sm:flex justify-end"
        />
      </div>
    </footer>
  );
};

export default Footer;
