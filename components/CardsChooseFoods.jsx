/* eslint-disable @next/next/no-img-element */
import React from "react";

const ChooseFoods = ({ imgChooseFoods, titleChooseFoods, descChooseFoods }) => {
  return (
    <div className="flex flex-col justify-center bg-white shadow-lg h-[305px] w-full md:w-[350px] px-10 text-center py-20">
      <img src={imgChooseFoods} alt="" className="mx-auto" />
      <h2 className="mt-5 font-semibold text-3xl">{titleChooseFoods}</h2>
      <p className="mt-4 text-gray-500">{descChooseFoods}</p>
    </div>
  );
};

export default ChooseFoods;
