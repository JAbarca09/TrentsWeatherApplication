import React, { useRef } from "react";
import classes from "./SearchBar.module.css";
import emptyStar from "../assets/Icon_feather_star.png";
// import fullStar from "../assets/Icon_feather_starFilled.png";

const SearchBar = () => {
  const cityQueryRef = useRef();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const cityQuery = cityQueryRef.current.value;
    console.log(cityQuery);
  };

  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <img width="60px" src={emptyStar} alt="empty star" />
      </div>
      <form onSubmit={handleFormSubmit}>
        <input
          className={classes.searchBar}
          type="text"
          placeholder="Search..."
          ref={cityQueryRef}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
