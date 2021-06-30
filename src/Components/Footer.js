import React from 'react'


const date = new Date()


function Footer() {
    return (
      
        <footer style={{
            position:"fixed", 
            bottom:"0", 
            textAlign:"center", 
            width:"100%", 
            padding:"10px 5px", 
            backgroundColor:"#283149",
            color:"#DBEDF3"
            }}>

                Siddhant Deshmukh {date.getFullYear()}

        </footer>
    )
}

export default Footer
