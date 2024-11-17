import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const goToBasketball = () => {
    navigate('/basketball'); // Navigates to the "About" screen
  };
  const goToFootball = ()=>{
    navigate('/football');
  };
  const goToMensSoccer = ()=>{
    navigate('/mens_soccer');
  }
  const goToWomensSoccer =()=>{
    navigate('/womens_soccer');
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
    section: {
      width: '100%',
      maxWidth: '800px',
      marginBottom: '20px',
      marginTop: '200px',
      textAlign: 'center'
  },

  image:{
    width: '100%',
    maxWidth: '800px',
    height: 'auto',
    display: 'block',
    margin: '0 auto'
},
}

  return (
    <div style = {styles.container}>
      <header style ={styles.header}>
        <h1>Duke Sports Stats Home</h1>
        <button style = {styles.buttons} onClick={goToBasketball}>Basketball</button>
        <button style = {styles.buttons} onClick={goToFootball}>Football</button>
        <button style = {styles.buttons} onClick={goToMensSoccer}>Men's Soccer</button>
        <button style = {styles.buttons} onClick={goToWomensSoccer}>Women's Soccer</button>
      </header>

      <section style ={styles.section}>
                <h2>The Home of Statistical Insights into Duke Athletics</h2>
                <img src="/statisticspic.jpg" alt="Basketball Huddle" style={styles.image} />
                

      </section>
      
    </div>
  );
}

export default Home;