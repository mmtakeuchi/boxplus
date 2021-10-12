import React, { useState, useEffect, useRef } from "react";
import { useLocation, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { movieDetails } from "../../store/movies/actions";
import { showDetails } from "../../store/tv/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import CastContainer from "../CastContainer/CastContainer";
import { Recommendations } from "../Recommendations/Recommendations";
import "./MovieDetails.scss";

const MovieDetails = (props) => {
  const ref = useRef(null);
  const [dimensions, setDimensions] = useState([]);
  const location = useLocation();
  const dispatch = useDispatch();
  const path = location.pathname;
  const [, type, id] = path.split("/");
  const { movie } = useSelector((state) => state.movies);
  const { tv } = useSelector((state) => state.tv);
  const details = type === "movie" ? movie : tv;

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

  const showRating = () => {
    if (type === "movie") {
      return details?.release_dates || "NR";
    } else if (type === "tv") {
      return details?.content_ratings || "NR";
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

  const formatMoney = (num) => {
    let money = num && num.toLocaleString("en-US");
    return money;
  };

  useEffect(() => {
    if (type === "movie") {
      dispatch(movieDetails(id));
    } else {
      dispatch(showDetails(id));
    }
  }, [dispatch, type, id]);

  useEffect(
    () => setDimensions([ref.current.offsetWidth, ref.current.offsetHeight]),
    [ref]
  );
  console.log(dimensions);

  const renderDetails = () =>
    details ? (
      <div className="detailsContainer">
        <div
          className="detailsHeader"
          ref={ref}
          style={{
            backgroundImage:
              dimensions[0] > 800
                ? `url(
          https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${details.backdrop_path}`
                : `url(
                  https://www.themoviedb.org/t/p/w1000_and_h450_multi_faces${details.backdrop_path}`,
          }}
        >
          <img
            src={`https://image.tmdb.org/t/p/w300_and_h450_face${details.poster_path}`}
            alt={details.name}
          />
          <div className="header">
            <h1 className="name">
              {type === "movie"
                ? movie.name || movie.title
                : tv.name || tv.title}
              <span className="releaseDate">({formatDate()})</span>
            </h1>
            <div className="detailFacts">
              <span className="rating">{showRating()}</span>
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
                <Link
                  className="link"
                  to={{
                    pathname: `https://www.youtube.com/watch?v=${
                      type === "movie"
                        ? movie.videos && movie.videos.key
                        : tv.videos && tv.videos.key
                    }`,
                  }}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faPlay} size="sm" /> Youtube Trailer
                </Link>
              </p>
              <p className="status">{`Status: ${details?.status}`}</p>
              <div className="money">
                <span className="budget">{`Budget: $${formatMoney(
                  details?.budget
                )}`}</span>
                <span>{`Revenue: $${formatMoney(details?.revenue)}`}</span>
              </div>
              <p className="website">
                <Link
                  to={{ pathname: `${details?.homepage}` }}
                  target="_blank"
                  className="link"
                  rel="noreferrer"
                >
                  Website Homepage
                </Link>
              </p>
            </div>
          </div>
        </div>

        <CastContainer cast={details?.credits?.cast} />
        <Recommendations recommendations={details?.recommendations} />
      </div>
    ) : (
      <div>Loading...</div>
    );

  return renderDetails();
};

export default MovieDetails;
