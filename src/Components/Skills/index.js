import React from 'react'
import './style.css'

function Skills() {
    return (
        <div className="skills-container">
            <h1>Skills</h1>
            <div className="skill-list">
            <div className="skill">
                <img src="images/node.png" />
                <h3>Node Js</h3>
            </div>
            <div className="skill">
                <img src="images/js.png" />
                <h3>JavaScript</h3>
            </div>
            <div className="skill">
                <img src="images/express.png" />
                <h3>Express Js</h3>
            </div>
            <div className="skill">
                <img src="images/html.png" />
                <h3>HTML5</h3>
            </div>
            <div className="skill">
                <img src="images/css.png" />
                <h3>CSS3</h3>
            </div>
            <div className="skill">
                <img src="images/react.png" />
                <h3>React Js</h3>
            </div>
            </div>
        </div>
    )
}

export default Skills
