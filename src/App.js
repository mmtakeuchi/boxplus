import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { popularMovies } from "./store/movies/actions";

const App = () => {
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.moviesReducer);

  useEffect(() => dispatch(popularMovies()), []);
  console.log(movies);
  return (
    <div className="App">
      <div></div>
    </div>
  );
};

export default App;
