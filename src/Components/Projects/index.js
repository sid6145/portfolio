import React from "react";
import "./style.css";

function Projects() {
  return (
    <div className="project-container">
        <div className="project-card">
            <h2>Ecommerce</h2>
            <p>Ecommerce website built using React.js</p>
          <a href="https://github.com/sid6145/Ecommerce" ><button className="project-btn">Source Code</button></a> 
        </div>
        <div className="project-card">
            <h2>Image Upload</h2>
            <p>Image upload website built with MERN stack similar to imgur</p>
            <button className="project-btn">Source Code</button>
        </div>
        <div className="project-card">
            <h2>Movie Website</h2>
            <p>Movie website built with React.js similar to IMDB.</p>
            <button className="project-btn">Source Code</button>
        </div>
        <div className="project-card">
            <h2>Black Jack</h2>
            <p>Black jack game made with HTML5, CSS3 and Vanilla JavaScript</p>
            <a href="https://github.com/sid6145/Card-game"><button className="project-btn">Source Code</button></a>
        </div>
        <div className="project-card">
            <h2>Image Puzzle</h2>
            <p>Image puzzle made with HTML5, CSS3 and Vanilla JavaScript</p>
           <a href="https://github.com/exponentsoftware/MS_Grid-game_Aquila_Tep_Online_Full-time_2021_4"><button className="project-btn">Source Code</button></a> 
        </div>
        <div className="project-card">
            <h2>Mental Health</h2>
            <p>Mental Health website where users can book appointments with their therapists, made with 
                MERN Stack
               
            </p>
            <a href="https://github.com/sid6145/mental-health-frontend"><button className="project-btn">Source Code</button></a>
        </div>
    </div>
  );
}

export default Projects;
