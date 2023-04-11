import React, { useRef } from "react";
import "./PresentDayWeatherCard";
import classes from "./SearchBar.module.css";
import emptyStar from "../assets/Icon_feather_star.png";
import PresentDayWeatherCard from "./PresentDayWeatherCard";
// import fullStar from "../assets/Icon_feather_starFilled.png";

const SearchBar = () => {
  const cityQueryRef = useRef();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const cityQuery = cityQueryRef.current.value;
    console.log(cityQuery);
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.imageContainer}>
          <img className={classes.starImg} src={emptyStar} alt="empty star" />
        </div>
        <form className={classes.form} onSubmit={handleFormSubmit}>
          <input
            className={classes.searchBar}
            type="text"
            placeholder="Search..."
            ref={cityQueryRef}
          />
          <button className={classes.button} type="submit">
            Search
          </button>
        </form>
      </div>
      <PresentDayWeatherCard />
    </>
  );
};

export default SearchBar;
