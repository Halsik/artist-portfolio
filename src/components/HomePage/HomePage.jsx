import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import './HomePage.css'
import videoPaint from '../images/HomePage/paintingVideo.mp4'


function HomePage(props) {
    return(
        
            <div className="home-container">
                <Navbar 
                theme={props.theme}/>
                <div className="home-main">
                <h1 className="home-header">Jane Doe</h1>
                    <video autoPlay loop muted playsInline className="background-video">
                        <source  src={videoPaint} type="video/mp4"/>
                      
                    </video>
                    
                </div>
                <Footer />
            </div>
       
    )
}

export default HomePage