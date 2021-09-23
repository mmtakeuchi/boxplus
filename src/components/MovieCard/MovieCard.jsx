import React from "react";
import "./MovieCard.scss";

const MovieCard = ({ movie }) => {
  return (
    <li key={movie.id} className="movie">
      <img
        src={`https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`}
        alt={movie.name || movie.title}
        className="poster"
      />
      <p className="movieName">{movie.name || movie.title}</p>
    </li>
  );
};

export default MovieCard;
