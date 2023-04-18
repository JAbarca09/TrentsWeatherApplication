import React from "react";
import classes from "./App.module.css";
import "./App.module.css";

import SearchBar from "./components/SearchBar";

const App = () => {
  return (
    <div className={classes.container}>
      <SearchBar />
    </div>
  );
}

export default App;
