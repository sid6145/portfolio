import React from 'react'
import { Container } from 'react-bootstrap'


function Home (){
    return(
        <Container fluid style={{padding:"13rem 1rem", backgroundColor:"#404B69", color:"#DBEDF3"}}>
            <div style={{display:"flex", flexDirection:"column"}}>
            <h2 style={{fontSize:"35px"}}>Welcome to my portfolio!</h2>
            <p style={{fontSize:"18px"}}>I am Siddhant Deshmukh, a web developer</p>
           
            </div>
         
        </Container>
    )
}

export default Home