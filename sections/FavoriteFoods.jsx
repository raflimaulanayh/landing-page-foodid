/* eslint-disable @next/next/no-img-element */
import React from "react";
import CardsFavoriteFoods from "@/components/CardsFavoriteFoods";

const FavoriteFoods = () => {
  return (
    <section className="container mx-auto py-24 md:py-36 xl:pt-24 0 2xl:pt-96">
      <div className="flex flex-wrap">
        <CardsFavoriteFoods />
      </div>
    </section>
  );
};

export default FavoriteFoods;
