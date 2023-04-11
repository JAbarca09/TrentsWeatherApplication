import React from "react";
import classes from "./PresentDayWeatherCard.module.css";
import emptyFavoriteStar from "../assets/Icon_feather_star_smol.png";
import fullFavoriteStar from "../assets/Icon_feather_starfilledFavorited.png";

const PresentDayWeatherCard = (props) => {
/* 
recieves props regarding the current weather conditions and time!
*/
  return (
    <div className={classes.mainWeatherCard}>
      <div className={classes.firstRow}>
        <p>Stockton, US</p>
        <img width="50px" height="50px" src={emptyFavoriteStar} alt="placeholder" />
        <p>57 &deg;F</p>
        <img width="50px" height="50px" src={fullFavoriteStar} alt="City Favorited" />
      </div>
    </div>
  );
};

export default PresentDayWeatherCard;
