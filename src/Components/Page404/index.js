import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'

function page404() {
    return (
        <div className="page404-container">
            <h1>Error 404 page not found</h1>
           <h3>Are you lost?? I'll take you</h3>
           <Link to="/">
           <img src="/images/404.png" />
           </Link>
        </div>
    )
}

export default page404
