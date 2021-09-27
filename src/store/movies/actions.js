import axios from "axios";
import {
  NOW_PLAYING_MOVIES,
  POPULAR_MOVIES,
  TOP_RATED_MOVIES,
  TRENDING_ITEMS,
  UPCOMING_MOVIES,
  MOVIE_DETAILS,
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

export const movieDetails = (movieId, dispatch) => {
  return (dispatch) => {
    axios
      .get(
        `${BASE_URL}/movie/${movieId}?api_key=${key}&language=en-US&append_to_response=videos,credits,release_dates,recommendations`
      )
      .then((movie) => {
        const rating = movie.data.release_dates.results.find(
          (code) => code.iso_3166_1 === "US"
        ).release_dates[0].certification;

        const videos = movie.data.videos.results[0];

        const recommendations = movie.data.recommendations.results;

        if (movie) {
          return dispatch({
            type: MOVIE_DETAILS,
            movie: {
              ...movie.data,
              release_dates: rating,
              videos,
              recommendations,
            },
          });
        }
      })
      .catch((err) => console.log(err));
  };
};
