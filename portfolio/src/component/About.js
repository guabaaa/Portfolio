import React from "react";
import { useNavigate } from "react-router-dom";
import choeunjin from "../imgs/choeunjin.jpeg";
import "../css/About.css";

const About = () => {
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
      <div className="about-button-wrap">
        <button onClick={toHome}>Home</button>
        <button onClick={toBlog}>Blog</button>
        <button onClick={toProject}>Project</button>
        <button onClick={toAbout} className="about-btn">
          About
        </button>
      </div>
      <div className="about-introducing">
        <h1 className="about-title">About Me</h1>
        <img src={choeunjin} className="about-img" />
        <p>
          이름: 조은진
          <br />
          생년월일 : 1995년 9월 23일
          <br />
        </p>
      </div>
    </div>
  );
};

export default About;
