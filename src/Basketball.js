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
            padding: '20px',
        },
        header:{
            width: '100vw',           
            padding: '20px',
            backgroundColor: '#00539b',
            color: '#FFFFFF',
            padding: '30px',
            boxSizing: 'border-box',
            margin: '0px',
            top: '0',
            left: '0',
            position: 'fixed'
        },
        buttons:{
            padding: '10px',
            margins: '20px',
            marginRight: '10px'
        },
        image:{
            width: '100%',
            maxWidth: '800px',
            height: 'auto',
            display: 'block',
            margin: '0 auto'
        },

        section: {
            width: '100%',
            maxWidth: '800px',
            marginBottom: '20px',
            marginTop: '200px',
            textAlign: 'center'
        },
    }


    return(
        <div style = {styles.container}>

            <header style = {styles.header}>
                <h1>Basketball</h1>
                <button onClick={goToHome} style={styles.buttons}>Home</button>
            </header>
            <section style ={styles.section}>
                <h2>Team Statistics</h2>
                <img src="/bball_huddle.jpg" alt="Basketball Huddle" style={styles.image} />
            </section>

            
        </div>
    );
}

export default Basketball;