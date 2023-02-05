import React from "react";
import "../css/Main.css";
import choeunjin from "../imgs/choeunjin.jpeg";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
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
      <div className="button-wrap">
        <button onClick={toHome} className="home-btn">
          Home
        </button>
        <button onClick={toBlog}>Blog</button>
        <button onClick={toProject}>Project</button>
        <button onClick={toAbout}>About</button>
      </div>
      <div className="introducing">
        <img src={choeunjin} className="intro-img" />
        <h1 className="myname">조 은 진 [趙 恩 珍]</h1>
        <p className="name-text">이롭고 보배로운 사람이 되어라.</p>
        <p className="name-text2">
          Front-end Developer [끝없이 연구하고, 공부하고 Development 하는 사람]
        </p>
      </div>
    </div>
  );
};

export default Portfolio;
