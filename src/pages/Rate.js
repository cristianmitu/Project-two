import React, { useState} from "react"
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Rating from "./../components/SubmitRating"


function Rate() {
    
    const location = useLocation();
    const searchTerm = location.state
    console.log(searchTerm);

    return (
        <div>
            <h2>{searchTerm}</h2>
            <h3>Test</h3>
            <Rating id={searchTerm}/>
        </div>
    )
}

export default Rate;