import React from "react";
import "../css/Blog.css";
import { useNavigate } from "react-router-dom";

const Blog = () => {
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
      <div className="blog-button-wrap">
        <button onClick={toHome}>Home</button>
        <button onClick={toBlog} className="blog-btn">
          Blog
        </button>
        <button onClick={toProject}>Project</button>
        <button onClick={toAbout}>About</button>
      </div>
      <div className="blog-introducing">
        <h1 className="blog-title">My Blog</h1>
        <div className="blog-post-list">
          <ul>
            <li>
              <a href="https://www.notion.so/9daacaeb3ac1461aa33172db0ee26e35?v=b94efacfedd948b88b356da2fc8f146b">
                Individual Notion
              </a>
            </li>
            <li>
              <a href="https://www.notion.so/Team-Board-28566d7f579e48d7850c0dac8bb979d7">
                Study Notion
              </a>
            </li>
            <li>
              <a href="https://github.com/guabaaa">Git Hub</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Blog;
