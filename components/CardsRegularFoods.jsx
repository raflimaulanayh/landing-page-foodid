import React from "react";
import Image from "next/image";
import Link from "next/link";

const CardsRegularFoods = ({
  imgFoodsRegular,
  titleRegularFoods,
  descRegularFoods,
  hargaRegularFoods,
}) => {
  return (
    <div className="pb-16 pt-24 px-10 lg:px-2 flex mx-auto items-center justify-center">
      <Image
        src={imgFoodsRegular}
        alt=""
        width={260}
        height={260}
        className="absolute mb-80"
      />
      <div className="w-full h-[400px] bg-white shadow-xl rounded-lg flex flex-col items-center px-5 lg:px-10 xl:px-0">
        <h2 className=" text-black text-2xl font-bold mt-48">
          {titleRegularFoods}
        </h2>
        <p className="text-center mt-3 text-lg text-gray-500">
          {descRegularFoods}
        </p>
        <div className="flex pt-3">
          <Link href="/">
            <div className="py-2 px-4 rounded-full border border-gray-500 mr-4 text-gray-700 font-medium">
              {hargaRegularFoods}
            </div>
          </Link>
          <Link href="/">
            <div className="py-2 px-4 rounded-full border border-[#84B750] bg-[#84B750] text-white font-medium">
              Buy Now
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardsRegularFoods;
