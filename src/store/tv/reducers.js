import { ON_AIR_SHOWS, POPULAR_SHOWS, TOP_RATED_SHOWS } from "./actionTypes";

const initialState = {
  shows: [],
};

const tvReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_AIR_SHOWS:
      return {
        ...state,
        shows: action.shows,
      };
    case POPULAR_SHOWS:
      return {
        ...state,
        shows: action.shows,
      };
    case TOP_RATED_SHOWS:
      return {
        ...state,
        shows: action.shows,
      };

    default:
      return state;
  }
};

export default tvReducer;
