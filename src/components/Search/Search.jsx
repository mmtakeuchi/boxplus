import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { movieSearch } from "../../store/movies/actions";
import "./Search.scss";

const Search = (props) => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const slugify_name = (name) => {
    return name.split(" ").join("_");
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query) {
      dispatch(movieSearch(query));
      history.push(`/search/${slugify_name(query)}`);
    }
  };

  return (
    <div className="search">
      <form className="searchForm" onSubmit={handleSubmit}>
        <input value={query} name="query" onChange={handleInputChange} />
        <button className="submit" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
