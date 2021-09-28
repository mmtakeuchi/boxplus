import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <span>&copy; 2021 Michael Takeuchi</span>
      <Link
        className="link"
        to={{
          pathname: `https://github.com/mmtakeuchi/boxplus`,
        }}
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </Link>
    </div>
  );
};

export default Footer;
