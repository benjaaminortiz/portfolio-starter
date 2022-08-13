import React from "react";
import "./Skills.css";

import { ThemeContext } from "../../Context";
import { useContext } from "react";

const Skills = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="skills-main">
      <div
        className={
          darkMode
            ? "skills-section-dark frosted-dark"
            : "skills-section frosted"
        }
      >
        <div className="main-skills">
          <h1>Skills</h1>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.Js</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>PostgreSQL</li>
          </ul>
        </div>
        <div className="sub-skills">
          <h1>Sub-skills</h1>
          <ul>
            <li>Redux</li>
            <li>axios</li>
            <li>yarn</li>
            <li>React-Bootstrap</li>
            <li>Figma</li>
            <li>Mongoose</li>
            <li>Metodologia Ágil SCRUM</li>
            <li>Github - Bitbucket</li>
            <li>Firebase</li>
            <li>Postman</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
