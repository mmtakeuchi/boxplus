import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { movieSearch } from "../../store/movies/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas, faSearch } from "@fortawesome/free-solid-svg-icons";
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
      setQuery(query);
    }
  };

  return (
    <div className="searchForm">
      <form className="searchInputs" onSubmit={handleSubmit}>
        <input
          placeholder="Search movies or tv shows..."
          type="text"
          value={query}
          name="query"
          onChange={handleInputChange}
        />
        <div className="searchIcon" onSubmit={handleSubmit}>
          <FontAwesomeIcon icon={faSearch} color="#222b33" />
        </div>
      </form>
    </div>
  );
};

export default Search;
