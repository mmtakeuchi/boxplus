import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  nowPlayingMovies,
  popularMovies,
  topRatedMovies,
  trendingItems,
  upcomingMovies,
} from "./store/movies/actions";

const App = () => {
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.moviesReducer);

  // useEffect(() => dispatch(topRatedMovies()), [dispatch]);
  useEffect(() => dispatch(upcomingMovies()), [dispatch]);
  // console.log(movies);
  return (
    <div className="App">
      <div></div>
    </div>
  );
};

export default App;
