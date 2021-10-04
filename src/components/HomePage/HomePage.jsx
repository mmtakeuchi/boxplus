import React from "react";
import { useSelector } from "react-redux";
import Search from "../Search/Search";
import MovieList from "../MovieList/MovieList";

const HomePage = () => {
  const { movies, tv } = useSelector((state) => state);
  return (
    <div className="homePage">
      <Search />
      <MovieList title="trending" movies={movies.trending} />
      <MovieList title="popular movies" movies={movies.popular} type="movie" />
      <MovieList title="popular shows" movies={tv.popular} type="tv" />
      <MovieList
        title="in theaters movies"
        movies={movies.nowPlaying}
        type="movie"
      />
      <MovieList title="on air shows" movies={tv.onAir} type="tv" />
      <MovieList
        title="top rated movies"
        movies={movies.topRated}
        type="movie"
      />
      <MovieList title="top rated shows" movies={tv.topRated} type="tv" />
      <MovieList
        title="upcoming movies"
        movies={movies.upcoming}
        type="movie"
      />
    </div>
  );
};

export default HomePage;
