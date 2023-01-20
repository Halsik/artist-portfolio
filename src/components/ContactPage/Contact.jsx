import React from "react";
import './Contact.css'
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import contactBackground from '../images/ContactPage/contact-background.jpeg'

function Contact() {
    return(

        <div className="contact-container">
            <Navbar />
            <div className="contact-content-container">
            <div className="contact-info">
                    <img draggable="false" className="contact-background" src={contactBackground}/>
                    <div className="contact-details">
                        <div className="details-container">
                            <div className="contact-box">
                                <h1 className="contact-header">Mail</h1>
                                <p className="contact-text">jane.doe@gmail.com</p>
                            </div>
                            <div className="contact-box">
                                <h1 className="contact-header">Phone</h1>
                                <p className="contact-text">123-456-789</p>
                            </div>
                            <div className="contact-box">
                                <h1 className="contact-header">Location</h1>
                                <p className="contact-text">Warsaw, Poland</p>
                            </div>
                        </div>
                    </div>
            </div>
            
                    
            </div>
            <Footer />
        </div>
    )
}

export default Contact