import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Blog from "./component/Blog";
import Project from "./component/Project";
import About from "./component/About";

const RoutesPage = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default RoutesPage;
