import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Basketball(){
    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/');
    }

    const styles = {
        container:{
            textAlign: 'center',
            color: '#FFFFFF',
            padding: '20px',
            backgroundColor: '#00539b'
        }
    }


    return(
        <div style = {styles.container}>
            <h1>Basketball</h1>
            <button onClick={goToHome}>Home</button>
        </div>
    );
}

export default Basketball;