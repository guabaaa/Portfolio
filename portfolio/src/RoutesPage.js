import React from "react";
import { Routes, Route } from "react-router-dom";
import Blog from "./component/Blog";
import Project from "./component/Project";
import About from "./component/About";
import Portfolio from "./pages/Portfolio";

const RoutesPage = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default RoutesPage;
