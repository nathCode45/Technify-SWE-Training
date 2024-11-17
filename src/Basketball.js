import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Switch.css';

function Basketball(){
    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/');
    }

    const [imageSrc, setImageSrc] = useState('/bball_top_ppg.jpg');
    const [isOn, setIsOn] = useState(false);

    const flipImage= () => {
        setIsOn(!isOn);
        if (imageSrc === '/bball_top_ppg.jpg') {
          setImageSrc('/rebounds.png');  
        } else {
          setImageSrc('/bball_top_ppg.jpg');  
        }
      };

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
                <img src={imageSrc} alt="Chart of Top 5 Scoring Duke MBB players" style={styles.image} />
                
    

            </section>
            <div className="switch-container">
                    {/* Step 3: Labeled switch */}
                    <label className="switch">
                        <input 
                        type="checkbox" 
                        checked={isOn} 
                        onChange={flipImage} 
                        />
                        <span className="slider"></span>
                    </label>
                    
                    {/* Step 4: Display label text */}
                    <span>{isOn ? 'Flip to see Top Scoring Players' : 'Flip to see 3PT% vs rebounds'}</span>
            </div>

            
        </div>
    );
}

export default Basketball;