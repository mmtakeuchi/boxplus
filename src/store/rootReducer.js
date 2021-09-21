import { combineReducers } from "redux";
import moviesReducer from "./movies/reducers";
import tvReducer from "./tv/reducers";

export default combineReducers({ moviesReducer, tvReducer });
