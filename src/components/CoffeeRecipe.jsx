import React from "react";
import ReactStars from "react-rating-stars-component";
import "./CoffeeRecipe.css";

const CoffeeRecipe = ({ grindingSettings, litresWater, coffeeBrand, rating }) => {
  return (
    <div className="CoffeeRecipe">
      <span>RECIPE:</span>
      <span>
        Coffee: <b>{coffeeBrand}</b>
      </span>
      <span>
        Grinding setting: <b>{grindingSettings}</b>
      </span>
      <span>
        Water: <b>{litresWater}l</b>
      </span>
      {rating && (
        <span className="rating">
          <ReactStars className="star" count={5} value={rating} activeColor={"black"} edit={false} size={"1.5rem"} />
        </span>
      )}
    </div>
  );
};

CoffeeRecipe.defaultProps = {
  grindingSettings: 7,
  litresWater: 1.5,
  coffeeBrand: "Unknown",
  rating: null,
};

export default CoffeeRecipe;
