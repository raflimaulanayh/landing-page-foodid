/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Image } from "next/image";
import ChooseFoods from "@/components/CardsChooseFoods";
import TitleSection from "@/components/TitleSection";

const TypeFoods = () => {
  return (
    <div>
      <section className="container mx-auto">
        <div className="">
          <TitleSection title="WHY CHOOSE US?" />
        </div>
        <div className="flex flex-wrap justify-around gap-10 px-10 lg:px-0 py-20">
          <ChooseFoods
            imgChooseFoods="/assets/mug.svg"
            titleChooseFoods="Serve Healthy Food"
            descChooseFoods="Lorem ipsum dolor sit amet consectetur. Sollicitudin."
          />
          <ChooseFoods
            imgChooseFoods="/assets/best-connect.svg"
            titleChooseFoods="Best Quality"
            descChooseFoods="Lorem ipsum dolor sit amet consectetur. Sollicitudin."
          />
          <ChooseFoods
            imgChooseFoods="/assets/truck.svg"
            titleChooseFoods="Fast Delivery"
            descChooseFoods="Lorem ipsum dolor sit amet consectetur. Sollicitudin."
          />
        </div>
      </section>
    </div>
  );
};

export default TypeFoods;
