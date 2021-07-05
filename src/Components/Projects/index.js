import React from "react";
import "./style.css";

function Projects() {
  return (
    <div className="project-container">
        <div className="project-card">
            <h2>Ecommerce</h2>
            <p>Ecommerce website built using React.js</p>
        </div>
        <div className="project-card">
            <h2>Image Upload</h2>
            <p>Image upload website built with MERN stack similar to imgur</p>
        </div>
        <div className="project-card">
            <h2>Movie Website</h2>
            <p>Movie website built with React.js similar to IMDB.</p>
        </div>
        <div className="project-card">
            <h2>Black Jack</h2>
            <p>Black jack game made with HTML5, CSS3 and Vanilla JavaScript</p>
        </div>
        <div className="project-card">
            <h2>Image Puzzle</h2>
            <p>Image puzzle made with HTML5, CSS3 and Vanilla JavaScript</p>
        </div>
        <div className="project-card">
            <h2>Mental Health</h2>
            <p>Mental Health website where users can book appointments with therapists and also has 
                a community page where users can post their experiences. Made with MERN Stack
            </p>
        </div>
    </div>
  );
}

export default Projects;
