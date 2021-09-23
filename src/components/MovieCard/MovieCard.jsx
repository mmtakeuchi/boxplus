import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.scss";

const MovieCard = ({ movie }) => {
  const type = movie.media_type;

  return (
    <li key={movie.id} className="movie">
      <Link to={`/${type}/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`}
          alt={movie.name || movie.title}
          className="poster"
        />
      </Link>
      <p className="movieName">{movie.name || movie.title}</p>
    </li>
  );
};

export default MovieCard;
