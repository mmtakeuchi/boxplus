import { POPULAR_MOVIES } from "./actionTypes";

const initialState = {
  movies: [],
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case POPULAR_MOVIES:
      return {
        ...state,
        movies: action.movies,
      };
    default:
      return state;
  }
};

export default moviesReducer;
