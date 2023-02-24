import React from "react";
import Image from "next/image";
import Link from "next/link";

const CardsFavoriteFoods = ({
  imgFoodsFavorite,
  titleFavoriteFoods,
  descFavoriteFoods,
  hargaFavoriteFoods,
}) => {
  return (
    <div className="py-36 px-5 md:px-10 lg:px-2 flex mx-auto items-center justify-center">
      <Image
        src={imgFoodsFavorite}
        alt=""
        width={260}
        height={260}
        className="absolute mb-80"
      />
      <div className="w-full lg:w-[380px] xl:w-72 h-80 bg-white shadow-2xl rounded-lg flex flex-col items-center px-5 lg:px-10 xl:px-0">
        <h2 className=" text-black text-2xl font-bold mt-36">
          {titleFavoriteFoods}
        </h2>
        <p className="text-center mt-3 text-lg text-gray-500">
          {descFavoriteFoods}
        </p>
        <div className="flex pt-3">
          <Link href="/">
            <div className="py-2 px-4 rounded-full border border-gray-500 mr-4 text-gray-700">
              {hargaFavoriteFoods}
            </div>
          </Link>
          <Link href="/">
            <div className="py-2 px-4 rounded-full border border-[#84B750] bg-[#84B750] text-white">
              Buy Now
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardsFavoriteFoods;
