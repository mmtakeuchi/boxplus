import axios from "axios";
import { POPULAR_MOVIES } from "./actionTypes";
const BASE_URL = "https://api.themoviedb.org/3";

export const popularMovies = (dispatch) => {
  return (dispatch) => {
    axios
      .get(
        `${BASE_URL}/movie/popular?api_key=${process.env.REACT_APP_MOVIES_API_KEY}`
      )
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
