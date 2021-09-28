import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../MovieList/MovieList";

const HomePage = () => {
  const { movies, tv } = useSelector((state) => state);
  return (
    <div className="homePage">
      <MovieList title="trending" movies={movies.trending} />
      <MovieList title="popular movies" movies={movies.popular} type="movie" />
      <MovieList title="popular shows" movies={tv.popular} type="tv" />
      <MovieList title="on air shows" movies={tv.onAir} type="tv" />
    </div>
  );
};

export default HomePage;
