import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.scss";

const MovieList = ({ title, movies, type }) => {
  const listMovies =
    movies &&
    movies.map((movie) => (
      <MovieCard movie={movie} type={type} key={movie.id} />
    ));

  return (
    <div className="movieRow">
      <h2 className="title">{title}</h2>
      <ul className="movies">{listMovies}</ul>
    </div>
  );
};

export default MovieList;
