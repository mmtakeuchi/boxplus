import {
  NOW_PLAYING_MOVIES,
  POPULAR_MOVIES,
  TOP_RATED_MOVIES,
  TRENDING_ITEMS,
  UPCOMING_MOVIES,
  MOVIE_DETAILS,
} from "./actionTypes";

const initialState = {
  trending: [],
  popular: [],
  topRated: [],
  nowPlaying: [],
  upcoming: [],
  movie: {},
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case TRENDING_ITEMS:
      return {
        ...state,
        trending: action.items,
      };
    case POPULAR_MOVIES:
      return {
        ...state,
        popular: action.movies,
      };
    case TOP_RATED_MOVIES:
      return {
        ...state,
        topRated: action.movies,
      };
    case NOW_PLAYING_MOVIES:
      return {
        ...state,
        nowPlaying: action.movies,
      };
    case UPCOMING_MOVIES:
      return {
        ...state,
        upcoming: action.movies,
      };
    case MOVIE_DETAILS:
      return {
        ...state,
        movie: action.movie,
      };
    default:
      return state;
  }
};

export default moviesReducer;
