import React from "react";
import MovieList from "../MovieList/MovieList";

const HomePage = ({ movies, shows }) => {
  return (
    <>
      <MovieList title="trending" movies={movies.trending} />
      <MovieList title="popular movies" movies={movies.popular} />
      <MovieList title="popular shows" movies={shows.popular} />
      <MovieList title="on air shows" movies={shows.onAir} />
    </>
  );
};

export default HomePage;
