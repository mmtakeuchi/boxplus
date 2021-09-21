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
import { onAirShows, popularShows, topRatedShows } from "./store/tv/actions";

const App = () => {
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.moviesReducer);
  const { shows } = useSelector((state) => state.tvReducer);

  // useEffect(() => dispatch(topRatedMovies()), [dispatch]);
  useEffect(() => dispatch(topRatedShows()), [dispatch]);
  // console.log(shows);
  return (
    <div className="App">
      <div></div>
    </div>
  );
};

export default App;
