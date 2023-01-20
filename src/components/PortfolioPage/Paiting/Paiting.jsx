import React from "react";
import './Paiting.css'
import firstPaiting from '../../images/Paitings/1.jpg'


function Paiting(props) {

    const provideId = () => {
        props.getId(props.id)
    }
    return(
        <div onClick={provideId} className="paiting-container">
           <img className="paiting" src={props.image}/>
        </div>
        
    )
}

export default Paiting