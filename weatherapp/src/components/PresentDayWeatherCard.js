import React from "react";
import emptyFavoriteStar from "../assets/Icon_feather_star_smol.png";
import fullFavoriteStar from "../assets/Icon_feather_starfilledFavorited.png";

const PresentDayWeatherCard = (props) => {
  /* 
recieves props regarding the current weather conditions and time!
*/
  return (
    <div>
      <div>
        <p>Stockton, US</p>
        <img
          width="50px"
          height="50px"
          src={emptyFavoriteStar}
          alt="weather icon"
        />
        <p>57 &deg;F</p>
        <img
          src={fullFavoriteStar}
          alt="City Favorited"
        />
      </div>
    </div>
  );
};

export default PresentDayWeatherCard;
