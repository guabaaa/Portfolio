import React from "react";
import "../css/Project.css";
import { useNavigate } from "react-router-dom";

const Project = () => {
  const navigate = useNavigate();
  const toHome = () => {
    navigate("/");
  };
  const toBlog = () => {
    navigate("/blog");
  };
  const toProject = () => {
    navigate("/project");
  };
  const toAbout = () => {
    navigate("/about");
  };
  return (
    <div className="wrap">
      <div className="project-button-wrap">
        <button onClick={toHome}>Home</button>
        <button onClick={toBlog}>Blog</button>
        <button onClick={toProject} className="project-btn">
          Project
        </button>
        <button onClick={toAbout}>About</button>
      </div>
      <div className="project-introducing">
        <h1 className="project-title">Project</h1>
        <div className="project-post-list">
          <ul>
            <li>
              <a href="https://github.com/guabaaa/Corn-Market">Corn-Market</a>
            </li>
            <li>
              <a href="https://github.com/JJABFLIX/JJAPFLIX-Client">JJAPFLIX</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Project;
