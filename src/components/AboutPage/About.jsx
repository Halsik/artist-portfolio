import React, {useState, useEffect} from "react";
import './About.css'
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import background from '../images/AboutPage/about-background.avif'
import imageAboutOne from '../images/AboutPage/about-photo.avif'
import imageAboutTwo from '../images/AboutPage/about-photo2.avif'
import imageAboutThree from '../images/AboutPage/about-photo3.avif'

function About() {

    const arrayOfPhotos =[
       imageAboutOne, imageAboutTwo, imageAboutThree
    ]
    const [slider, setSlider] = useState(0)


    useEffect(() => {
        const interval = setTimeout(() => {
            setSlider(slider + 1)
            if(slider >= arrayOfPhotos.length - 1) {
                setSlider(0)
            }
           
          }, 5000);
       
      }, );

    return(

        <div className="about-container">
            <Navbar />
            <div className="about-content-container">
                <div className="about-photo">
                    <img className="about-image" src={arrayOfPhotos[slider]} />
                </div>
                <div className="about-info">
                    <img draggable="false" className="about-background" src={background}/>
                    <div className="about-header">
                        <h1 className="header-text">About me</h1>
                    </div>
                    <div className="about-text">
                        
                        <p className="about-info-text">As an artist, I have always been drawn to the power of visual expression. My passion for creating began at a young age and has continued to evolve and grow throughout my life. I specialize in painting, but also enjoy experimenting with different mediums such as sculpture and digital art. I am inspired by the world around me, and my work often reflects the beauty and complexity of nature and the human experience. I strive to create pieces that evoke emotion and provoke thought, and I am constantly pushing myself to explore new techniques and styles.I believe that art has the power to connect people and bring joy, and it is my goal to share that with as many people as possible.</p>
                    </div>
                </div>
                
            </div>
           
            <Footer />
           
            

        </div>
    )
}

export default About