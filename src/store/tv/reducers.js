import {
  ON_AIR_SHOWS,
  POPULAR_SHOWS,
  SHOW_DETAILS,
  TOP_RATED_SHOWS,
} from "./actionTypes";

const initialState = {
  onAir: [],
  popular: [],
  topRated: [],
  tv: {},
};

const tvReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_AIR_SHOWS:
      return {
        ...state,
        onAir: action.shows,
      };
    case POPULAR_SHOWS:
      return {
        ...state,
        popular: action.shows,
      };
    case TOP_RATED_SHOWS:
      return {
        ...state,
        topRated: action.shows,
      };
    case SHOW_DETAILS:
      return {
        ...state,
        tv: action.show,
      };
    default:
      return state;
  }
};

export default tvReducer;
