import React, { useRef } from "react";
import "./PresentDayWeatherCard";
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
      <div>
        <div>
          <img src={emptyStar} alt="empty star" />
        </div>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Search..."
            ref={cityQueryRef}
          />
          <button type="submit">
            Search
          </button>
        </form>
      </div>
      <PresentDayWeatherCard />
    </>
  );
};

export default SearchBar;
