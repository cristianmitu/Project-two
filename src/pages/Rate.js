import React, { useState} from "react"
import { Link, useNavigate, useLocation } from 'react-router-dom';



function Rate() {
    
    const location = useLocation();
    const searchTerm = location.state
    console.log(searchTerm);

    return (
        <div>
            <h2>{searchTerm}</h2>
            <h3>Test</h3>
        </div>
    )
}

export default Rate;