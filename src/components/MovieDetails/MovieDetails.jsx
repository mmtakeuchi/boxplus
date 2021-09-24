import React, { useEffect } from "react";
import { useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { movieDetails } from "../../store/movies/actions";
import { showDetails } from "../../store/tv/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import "./MovieDetails.scss";

const MovieDetails = (props) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const path = location.pathname;
  const [, type, id] = path.split("/");
  const { movie } = useSelector((state) => state.movies);
  const { tv } = useSelector((state) => state.tv);
  const details = type === "movie" ? movie : tv;
  console.log(details);

  const formatDate = () => {
    let releaseDate;

    if (type === "movie") {
      releaseDate = details.release_date;
    } else {
      releaseDate = details.first_air_date;
    }

    if (releaseDate) {
      return releaseDate.slice(0, 4);
    }
  };

  const formatGenres = () => {
    let genres = movie.genres || tv.genres;
    return genres && genres.map((genre) => genre.name).join(", ");
  };

  const formatRuntime = (runtime) => {
    let num = runtime;
    let hours = num / 60;
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);
    if (rhours < 1) {
      return `${rminutes}m`;
    } else {
      return `${rhours}h ${rminutes}m`;
    }
  };

  useEffect(() => {
    if (type === "movie") {
      dispatch(movieDetails(id));
    } else {
      dispatch(showDetails(id));
    }
  }, [dispatch, type, id]);

  return (
    <div className="detailsContainer">
      <div
        className="detailsHeader"
        style={{
          backgroundImage: `url(
          https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${details.backdrop_path}`,
        }}
      >
        <img
          src={`https://image.tmdb.org/t/p/w300_and_h450_face${details.poster_path}`}
          alt={details.name}
        />
        <div className="header">
          <h1 className="name">
            {type === "movie" ? movie.name || movie.title : tv.name || tv.title}
            <span className="releaseDate">({formatDate()})</span>
          </h1>
          <div className="detailFacts">
            <span className="rating">
              {movie.release_dates || tv.content_ratings}
            </span>
            <span className="genres">{formatGenres()}</span>
            <span className="runTime">
              {formatRuntime(movie.runtime || (tv && tv.episode_run_time))}
            </span>
          </div>
          <div className="headerInfo">
            <p className="tagline">{movie.tagline || tv.tagline}</p>
            <div className="overview">
              <h2>Overview</h2>
              <p>{movie.overview || tv.overview}</p>
            </div>
            <p className="video">
              <a
                className="link"
                href={`https://www.youtube.com/watch?v=${
                  type === "movie"
                    ? movie.videos && movie.videos.key
                    : tv.videos && tv.videos.key
                }`}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faPlay} size="sm" /> Youtube
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;