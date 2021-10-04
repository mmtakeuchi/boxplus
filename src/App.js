import React, { useState, useEffect } from "react";
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
import Search from "./components/Search/Search";
import SearchResults from "./components/SearchResults/SearchResults";
import HomePage from "./components/HomePage/HomePage";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [search, setSearch] = useState("");
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
            <Route path="/search/:query">
              <SearchResults />
            </Route>
            <Route path="/:type/:id">
              <MovieDetails />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
