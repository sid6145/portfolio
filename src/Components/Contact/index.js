import React from 'react'
import './style.css'

function Contact() {
    return (
        <div className="contact-container">
            <input className="email-input" type="text" placeholder="enter email id"/>
            <textarea className="message-input" placeholder="enter your message"/> 
        </div>
    )
}

export default Contact
