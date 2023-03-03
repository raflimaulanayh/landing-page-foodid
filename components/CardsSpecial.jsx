import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsFillBasket2Fill } from "react-icons/bs";

const CardsSpecial = ({
  imgSpecialMenu,
  titleSpecialMenu,
  hargaSpecialMenu,
  imgRating,
}) => {
  return (
    <div className="py-36 px-10 lg:px-2 flex items-center">
      <Image
        src={imgSpecialMenu}
        alt=""
        width={260}
        height={260}
        className="absolute mb-80 right-0 mr-5"
      />
      <div className="w-full h-[320px] bg-white shadow-lg rounded-lg flex flex-col px-5 lg:px-10 xl:px-0">
        <h2 className=" text-black text-2xl sm:text-4xl font-bold mt-36 lg:mt-10 xl:mt-32 mr-10 sm:ml-7">
          {titleSpecialMenu}
        </h2>
        <div className="flex items-center mt-5 sm:mt-0">
          <Image
            src={imgRating}
            alt={titleSpecialMenu}
            width={140}
            height={140}
            className="sm:m-7 mr-2"
          />
          <p>(190)</p>
        </div>
        <div className="flex justify-between">
          <div className="sm:ml-7 mt-5 sm:mt-0">
            <p className="text-[#84B750] font-semibold text-2xl sm:text-4xl">
              Rp {hargaSpecialMenu}
            </p>
            <Link href="/">
              <div className="px-5 py-7 sm:px-7 sm:py-9 rounded-lg border border-[#84B750] bg-[#84B750] text-white absolute right-10 sm:right-10 lg:right-2 bottom-36">
                <BsFillBasket2Fill size={50} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsSpecial;
