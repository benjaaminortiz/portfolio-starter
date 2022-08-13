import React, { useContext } from "react";
import "./Toggle.css";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import { ThemeContext } from "../../Context";

const Toggle = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleClick = () => {
    theme.dispatch({ type: "toggle" });
  };
  return (
    <div onClick={handleClick} className={darkMode ? "toggle-dark" : "toggle"}>
      <Sun />
      <Moon />
      <div
        className={darkMode ? "toggle-button-dark" : "toggle-button"}
        style={darkMode ? { right: "2px" } : { left: "2px" }}
      ></div>
    </div>
  );
};

export default Toggle;
