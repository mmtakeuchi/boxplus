import React, { useEffect } from "react";
import { useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { movieDetails } from "../../store/movies/actions";

const MovieDetails = (props) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const path = location.pathname;
  const [, type, movieId] = path.split("/");
  const { movie } = useSelector((state) => state.movies);
  const { show } = useSelector((state) => state.shows);
  console.log(movie);

  useEffect(() => {
    if (type === "movie") {
      dispatch(movieDetails(movieId));
    } else {
      console.log("tv show");
    }
  }, [location.pathname]);

  return <div>MovieDetails</div>;
};

export default MovieDetails;
