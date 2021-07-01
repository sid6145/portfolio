import React from 'react'


const date = new Date()


function Footer() {
    return (
      
        <footer style={{
            position:"relative", 
            bottom:"0", 
            fontSize: "15px",
            textAlign:"center", 
            width:"100%", 
            padding:"10px 5px", 
            backgroundColor:"#1F3C88",
            color:"#DBEDF3"
            }}>

                Siddhant Deshmukh {date.getFullYear()}

        </footer>
    )
}

export default Footer
