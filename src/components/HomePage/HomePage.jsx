import React from "react";
import MovieList from "../MovieList/MovieList";

const HomePage = (props) => {
  console.log(props);
  return (
    <>
      <MovieList title="trending" movies={props.movies.trending} />
    </>
  );
};

export default HomePage;
