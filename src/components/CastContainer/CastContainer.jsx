import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./CastContainer.scss";

const CastContainer = ({ cast }) => {
  const topBilledCast = cast?.slice(0, 10).map((member) => (
    <li key={member.id} className="member">
      {member.profile_path ? (
        <img
          src={`https://www.themoviedb.org/t/p/w138_and_h175_face/${member.profile_path}`}
          alt={member.name}
          className="castProfile"
        />
      ) : (
        <FontAwesomeIcon icon={faUser} size="lg" className="castProfile" />
      )}
      <p className="castName">{member.name}</p>
      <p className="character">{member.character}</p>
    </li>
  ));

  return (
    <div className="castContainer">
      <h3 className="conTitle">Top Billed Cast</h3>
      <ol className="castRow">{topBilledCast}</ol>
    </div>
  );
};

export default CastContainer;
