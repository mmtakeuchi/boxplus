import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.scss";
import {
  nowPlayingMovies,
  popularMovies,
  topRatedMovies,
  trendingItems,
  upcomingMovies,
} from "./store/movies/actions";
import { onAirShows, popularShows, topRatedShows } from "./store/tv/actions";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";

const App = () => {
  const dispatch = useDispatch();
  const { movies, shows } = useSelector((state) => state);

  useEffect(() => dispatch(topRatedMovies()), [dispatch]);
  useEffect(() => dispatch(nowPlayingMovies()), [dispatch]);
  useEffect(() => dispatch(popularMovies()), [dispatch]);
  useEffect(() => dispatch(trendingItems()), [dispatch]);
  useEffect(() => dispatch(upcomingMovies()), [dispatch]);
  useEffect(() => dispatch(topRatedShows()), [dispatch]);
  useEffect(() => dispatch(onAirShows()), [dispatch]);
  useEffect(() => dispatch(popularShows()), [dispatch]);
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <HomePage movies={movies} shows={shows} />
      </div>
    </div>
  );
};

export default App;
