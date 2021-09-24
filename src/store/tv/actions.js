import axios from "axios";
import {
  POPULAR_SHOWS,
  TOP_RATED_SHOWS,
  ON_AIR_SHOWS,
  SHOW_DETAILS,
} from "./actionTypes";
const key = process.env.REACT_APP_MOVIES_API_KEY;

const BASE_URL = "https://api.themoviedb.org/3/tv";

export const topRatedShows = (dispatch) => {
  return (dispatch) => {
    axios
      .get(`${BASE_URL}/popular?api_key=${key}&language=en-US$page=1`)
      .then((shows) => {
        if (shows) {
          return dispatch({
            type: TOP_RATED_SHOWS,
            shows: shows.data.results,
          });
        }
      })
      .catch((err) => console.log(err));
  };
};

export const onAirShows = (dispatch) => {
  return (dispatch) => {
    axios
      .get(`${BASE_URL}/top_rated?api_key=${key}&language=en-US&page=1`)
      .then((shows) => {
        if (shows) {
          return dispatch({
            type: ON_AIR_SHOWS,
            shows: shows.data.results,
          });
        }
      })
      .catch((err) => console.log(err));
  };
};

export const popularShows = (dispatch) => {
  return (dispatch) => {
    axios
      .get(`${BASE_URL}/on_the_air?api_key=${key}&language=en-US&page=1`)
      .then((shows) => {
        if (shows) {
          return dispatch({
            type: POPULAR_SHOWS,
            shows: shows.data.results,
          });
        }
      })
      .catch((err) => console.log(err));
  };
};

export const showDetails = (id, dispatch) => {
  return (dispatch) => {
    axios
      .get(`${BASE_URL}/${id}?api_key=${key}&language=en-US`)
      .then((show) => {
        if (show) {
          return dispatch({
            type: SHOW_DETAILS,
            show: show.data,
          });
        }
      })
      .catch((err) => console.log(err));
  };
};
