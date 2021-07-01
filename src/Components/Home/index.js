import React from "react";
import {Button} from 'react-bootstrap'
import "./style.css";

function Home() {
  return (
    <div className="home-container">
      <h2>Welcome to my portfolio!</h2>
      <p>I am Siddhant Deshmukh, a <span style={{color:"#1F3C88", fontFamily:"Unica One, cursive", fontSize:"30px",
        fontWeight:"600"
    
    }}>Web developer</span></p>
        <div className="btn-container">
        <button className="btn btn-about">About me</button>
        <button className="btn btn-project">My projects</button>
        </div>
 
    </div>
  );
}

export default Home;
