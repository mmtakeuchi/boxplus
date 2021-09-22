import axios from "axios";
import {
  NOW_PLAYING_MOVIES,
  POPULAR_MOVIES,
  TOP_RATED_MOVIES,
  TRENDING_ITEMS,
  UPCOMING_MOVIES,
} from "./actionTypes";
const key = process.env.REACT_APP_MOVIES_API_KEY;

const BASE_URL = "https://api.themoviedb.org/3";

export const trendingItems = (dispatch) => {
  return (dispatch) => {
    axios
      .get(`${BASE_URL}/trending/all/week?api_key=${key}&language=en-US`)
      .then((item) => {
        if (item) {
          return dispatch({
            type: TRENDING_ITEMS,
            items: item.data.results,
          });
        }
      });
  };
};

export const popularMovies = (dispatch) => {
  return (dispatch) => {
    axios
      .get(`${BASE_URL}/movie/popular?api_key=${key}&language=en-US$page=1`)
      .then((movies) => {
        if (movies) {
          return dispatch({
            type: POPULAR_MOVIES,
            movies: movies.data.results,
          });
        }
      })
      .catch((err) => console.log(err));
  };
};

export const topRatedMovies = (dispatch) => {
  return (dispatch) => {
    axios
      .get(`${BASE_URL}/movie/top_rated?api_key=${key}&language=en-US&page=1`)
      .then((movies) => {
        if (movies) {
          return dispatch({
            type: TOP_RATED_MOVIES,
            movies: movies.data.results,
          });
        }
      })
      .catch((err) => console.log(err));
  };
};

export const nowPlayingMovies = (dispatch) => {
  return (dispatch) => {
    axios
      .get(`${BASE_URL}/movie/now_playing?api_key=${key}&language=en-US&page=1`)
      .then((movies) => {
        if (movies) {
          return dispatch({
            type: NOW_PLAYING_MOVIES,
            movies: movies.data.results,
          });
        }
      })
      .catch((err) => console.log(err));
  };
};

export const upcomingMovies = (dispatch) => {
  return (dispatch) => {
    axios
      .get(`${BASE_URL}/movie/upcoming?api_key=${key}&language=en-US&page=1`)
      .then((movies) => {
        if (movies) {
          return dispatch({
            type: UPCOMING_MOVIES,
            movies: movies.data.results,
          });
        }
      })
      .catch((err) => console.log(err));
  };
};
