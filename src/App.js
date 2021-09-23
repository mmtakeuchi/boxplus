import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
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
import MovieDetails from "./components/MovieDetails/MovieDetails";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(topRatedMovies()), [dispatch]);
  useEffect(() => dispatch(nowPlayingMovies()), [dispatch]);
  useEffect(() => dispatch(popularMovies()), [dispatch]);
  useEffect(() => dispatch(trendingItems()), [dispatch]);
  useEffect(() => dispatch(upcomingMovies()), [dispatch]);
  useEffect(() => dispatch(topRatedShows()), [dispatch]);
  useEffect(() => dispatch(onAirShows()), [dispatch]);
  useEffect(() => dispatch(popularShows()), [dispatch]);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="main">
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/:type/:movieId">
              <MovieDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
