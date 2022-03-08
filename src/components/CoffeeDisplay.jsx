import React from "react";
import CoffeeInfo from "./CoffeeInfo";
import Thermos from "./Thermos";
import CoffeeRecipe from "./CoffeeRecipe";

import "./CoffeeDisplay.css";

export default function CoffeeDisplay(props) {
  const { litersBrewed, brewedAt, coffeeBrand, litresWater, grindingSettings, rating } = { ...props };
  return (
    <div className="CoffeeDisplay-container">
      <div className="CoffeeDisplay">
        <Thermos litersBrewed={litersBrewed} />
        <CoffeeInfo litersBrewed={litersBrewed} brewedAt={brewedAt} typeOfCoffee={coffeeBrand} />
      </div>
      <CoffeeRecipe coffeeBrand={coffeeBrand} grindingSettings={grindingSettings} litresWater={litresWater} rating={rating} />
    </div>
  );
}
