import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";

import "./MovieCard.scss";

const MovieCard = ({ movie, type }) => {
  const mediaType = movie.media_type;

  return (
    <li key={movie.id} className="movie">
      <Link to={`/${mediaType ?? type}/${movie.id}`}>
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`}
            alt={movie.name || movie.title}
            className="poster"
          />
        ) : (
          <FontAwesomeIcon
            icon={faImage}
            className="posterImage"
            color="#dcd0c0"
          />
        )}
      </Link>
      <p className="movieName">{movie.name || movie.title}</p>
    </li>
  );
};

export default MovieCard;
