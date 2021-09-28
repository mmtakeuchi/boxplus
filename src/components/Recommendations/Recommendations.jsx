import React from "react";
import { Link } from "react-router-dom";
import "./Recommendations.scss";

export const Recommendations = ({ recommendations }) => {
  const topRecommended = recommendations?.slice(0, 10).map((item) => (
    <li key={item.id} className="rec">
      <Link to={`/${item.media_type}/${item.id}`} className="link">
        <img
          src={`https://www.themoviedb.org/t/p/w250_and_h141_face/${item.backdrop_path}`}
          alt={item.title || item.name}
          className="itemPoster"
        />
      </Link>
      <p className="recTitle">
        <Link
          to={`/${recommendations.media_type}/${recommendations.id}`}
          className="link"
        >
          {item.title || item.name}
        </Link>
      </p>
    </li>
  ));
  return (
    <div className="recContainer">
      <h3 className="conTitle">Recommendations</h3>
      <ol className="recRow">{topRecommended}</ol>
    </div>
  );
};
