import React from "react";
import "./Card.css";

import { ThemeContext } from "../../Context";
import { useContext } from "react";

const Card = ({ title, text, img, button, url }) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className={darkMode ? "card frosted-dark" : "card frosted"}>
      <div className="card-image">
        <img src={img} alt={img} />
      </div>
      <div className="card-text">
        <div className="card-title">
          <h3 style={{ fontSize: "25px" }}>{title}</h3>
        </div>
        <div className="card-body">
          <p style={{ fontSize: "16px" }}>{text}</p>
        </div>
        <a href={url}>
          <button className="button card-button">{button}</button>
        </a>
      </div>
    </div>
  );
};

export default Card;
