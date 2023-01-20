import React from "react";
import './PaitingDetails.css'


function PaitingDetails(props) {
    return(
        <div className="painting-info-container">
                        <div className="painting-header">
                            <h1>{props.title}</h1>
                        </div>
                        <div className="paiting-details">
                            <p>{props.text}</p>
                        </div>
                </div>
    )
}

export default PaitingDetails