import React from "react";
import "./MovieList.scss";

const MovieList = ({ title, movies }) => {
  const listMovies =
    movies &&
    movies.map((movie) => (
      <li key={movie.id} className="movie">
        <img
          src={`https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`}
          alt={movie.name || movie.title}
          className="poster"
        />
        <p>{movie.name || movie.title}</p>
      </li>
    ));

  return (
    <div className="movieRow">
      <h2 className="title">{title}</h2>
      <ul className="movies">{listMovies}</ul>
    </div>
  );
};

export default MovieList;
