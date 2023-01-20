import React, {useState} from "react";
import './Portfolio.css'
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Paiting from "./Paiting/Paiting";
import PaitingDetails from "./PaitingDetails/PaitingDetails";
import nextIcon from '../images/Portfolio/nextIcon.png'
import backIcon from '../images/Portfolio/backIcon.png'
import paitingsData from './PaitingsData.js'

function Portfolio() {

    const [data, setData] = useState(paitingsData)
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(1)

    const callback = (id) => {
        console.log(id)
    }

    const newArrayPaiting = data.map(item => {
        return <Paiting 
                key={item.id}
                id={item.id}
                image={item.image}/>
                
    })

    const newArrayDetails = data.map(item => {
        return <PaitingDetails
                key={item.id}
                id={item.id}
                title={item.title}
                text={item.text}/>
    })

    const nextPage = () => {
        if(currentPage < data.length) {
        setCurrentPage(currentPage + 1)
        }
    }
    const previousPage = () => {
        if(currentPage > 1) {
            setCurrentPage(currentPage - 1)
    }
    }

 

    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage
    const currentPostPaiting = newArrayPaiting.slice(firstPostIndex, lastPostIndex)
    const currentPostDetails = newArrayDetails.slice(firstPostIndex, lastPostIndex)

    return(
        <div className="portfolio-container">
            <Navbar />
            <div className="portfolio-content-container">
               
                <div className="paiting-image-container">
                        <div className="back">
                         {currentPage > 1 && (<img onClick={previousPage} src={backIcon} />)}   
                        </div>
                            {currentPostPaiting}
                        <div className="next">
                        {currentPage < data.length && (<img onClick={nextPage} src={nextIcon} />)}
                        </div>
                </div>

                 {currentPostDetails}
                
            </div>
            <Footer />
        </div>
    )
}

export default Portfolio