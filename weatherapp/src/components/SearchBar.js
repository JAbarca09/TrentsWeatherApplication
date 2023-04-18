import React, { useRef } from "react";
import "./PresentDayWeatherCard";
import emptyStar from "../assets/Icon_feather_star.png";
import classes from "./SearchBar.module.css";
// import PresentDayWeatherCard from "./PresentDayWeatherCard";
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
          <div className={classes["empty-star"]}>
            <img src={emptyStar} width="50px" alt="empty star" />
          </div>
          <form className={classes["search-bar"]} onSubmit={handleFormSubmit}>
            <input
              className={classes.search}
              id="search"
              type="text"
              placeholder="Search..."
              ref={cityQueryRef}
            />
            <label className={classes.visuallyHidden} htmlFor="search">
              Search bar
            </label>
            <button className={classes["search-btn"]} type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="search"
              >
                <g data-name="Layer 2">
                  <path
                    fill="#ffffff"
                    d="m20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z"
                    data-name="search"
                  ></path>
                </g>
              </svg>
            </button>
          </form>
        </div>
    </>
  );
};

export default SearchBar;
