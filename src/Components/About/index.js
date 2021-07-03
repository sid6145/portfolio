import React from 'react'
import './style.css'

function About() {
    return (
        <div className="about-container">
            <div className="about">
            <h2>About Me</h2>
            <img className="about-img" src="images/about-img.svg" />
            <p className="about-text">
               I am a 2020 graduate in Batchlor's of Information Technology, and I am currently
               pursuing certification in full stack development through SOAL (School Of Accelerated Learning).
               As a Web developer || Programmer I am always polishing my development skills and love building
               web sites and working on projects. 
             </p>
             <p className="about-text">
                 Apart from coding and web development, I do enjoy playing video games
             </p>

            </div>
           
             <button className="about-btn">My Projects</button>
        </div>
    )
}

export default About
