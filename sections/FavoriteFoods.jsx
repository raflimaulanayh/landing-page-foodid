/* eslint-disable @next/next/no-img-element */
import React from "react";
import CardsFavoriteFoods from "@/components/CardsFavoriteFoods";

const FavoriteFoods = () => {
  return (
    <section className="container mx-auto py-24 md:py-36 xl:pt-24 0 2xl:pt-96">
      <div className="flex flex-wrap">
        <CardsFavoriteFoods
          imgFoodsFavorite="/assets/ikan-pindang.png"
          titleFavoriteFoods="Ikan Pindang"
          descFavoriteFoods="Lorem ipsum dolor sit amet consectetur. Sollicitudin"
          hargaFavoriteFoods="Rp 10.000"
        />
        <CardsFavoriteFoods
          imgFoodsFavorite="/assets/nasi-liwet.png"
          titleFavoriteFoods="Nasi Liwet"
          descFavoriteFoods="Lorem ipsum dolor sit amet consectetur. Sollicitudin"
          hargaFavoriteFoods="Rp 37.000"
        />
        <CardsFavoriteFoods
          imgFoodsFavorite="/assets/gurame-bakar.png"
          titleFavoriteFoods="Gurame Bakar"
          descFavoriteFoods="Lorem ipsum dolor sit amet consectetur. Sollicitudin"
          hargaFavoriteFoods="Rp 21.000"
        />
        <CardsFavoriteFoods
          imgFoodsFavorite="/assets/tahu-sumedang.png"
          titleFavoriteFoods="Tahu Sumedang"
          descFavoriteFoods="Lorem ipsum dolor sit amet consectetur. Sollicitudin"
          hargaFavoriteFoods="Rp 15.000"
        />
      </div>
    </section>
  );
};

export default FavoriteFoods;
