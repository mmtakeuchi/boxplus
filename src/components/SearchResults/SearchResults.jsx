import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, Link } from "react-router-dom";
import { movieSearch } from "../../store/movies/actions";
import Search from "../Search/Search";
import MovieCard from "../MovieCard/MovieCard";
import "./SearchResults.scss";

const SearchResults = (props) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.movies);
  const path = location.pathname;
  const id = path.split("/")[2];

  const unslufify_name = () => {
    return id.split("_").join(" ");
  };

  console.log(movies);
  console.log(id);

  const renderMovies =
    movies && movies.map((movie) => <MovieCard movie={movie} key={movie.id} />);

  useEffect(() => dispatch(movieSearch(unslufify_name(id))), [dispatch]);
  return (
    <div className="searchContainer">
      <Search />
      <ul className="searchResults">{renderMovies}</ul>
    </div>
  );
};

export default SearchResults;
