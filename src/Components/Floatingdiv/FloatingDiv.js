import React from "react";
import "./FloatingDiv.css";

import { ThemeContext } from "../../Context";
import { useContext } from "react";

const FloatingDiv = ({ img, txt1, txt2 }) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className={darkMode ? "floatingdiv frosted-dark" : "floatingdiv frosted"}
    >
      <img src={img} alt={img} />
      <span>
        {txt1}
        <br />
        {txt2}
      </span>
    </div>
  );
};

export default FloatingDiv;
