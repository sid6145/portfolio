import React from "react";
import './style.css'

const date = new Date();

function Footer() {
  return (
    <footer>
      Siddhant Deshmukh {date.getFullYear()}
      <div className="icons-container">
        <a href="https://github.com/sid6145"><img src="https://img.icons8.com/ios-filled/50/000000/github.png" /></a> 
         <a href="https://www.linkedin.com/in/deshmukhsiddhant/"><img src="https://img.icons8.com/color/48/000000/linkedin.png" /></a>
      </div>
    </footer>
  );
}

export default Footer;
