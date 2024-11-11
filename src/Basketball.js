import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Basketball(){
    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/');
    }
    return(
        <div>
            <h1>Basketball</h1>
            <button onClick={goToHome}>Home</button>
        </div>
    );
}

export default Basketball;