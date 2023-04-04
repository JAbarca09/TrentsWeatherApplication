import React, { useRef } from "react";
// import classes from "./SearchBar.module.css";

const SearchBar = () => {
  const cityQueryRef = useRef();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const cityQuery = cityQueryRef.current.value;
    console.log(cityQuery);
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input type="text" placeholder="Search..." ref={cityQueryRef} />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default SearchBar;
