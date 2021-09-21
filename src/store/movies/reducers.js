import {
  NOW_PLAYING_MOVIES,
  POPULAR_MOVIES,
  TOP_RATED_MOVIES,
  TRENDING_ITEMS,
  UPCOMING_MOVIES,
} from "./actionTypes";

const initialState = {
  movies: [],
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case TRENDING_ITEMS:
      return {
        ...state,
        movies: action.items,
      };
    case POPULAR_MOVIES:
      return {
        ...state,
        movies: action.movies,
      };
    case TOP_RATED_MOVIES:
      return {
        ...state,
        movies: action.movies,
      };
    case NOW_PLAYING_MOVIES:
      return {
        ...state,
        movies: action.movies,
      };
    case UPCOMING_MOVIES:
      return {
        ...state,
        movies: action.movies,
      };
    default:
      return state;
  }
};

export default moviesReducer;
