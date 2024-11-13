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
        color: '#FFFFFF',
        padding: '20px',
        margins: '20px',
        backgroundColor: '#00539b'
    },
    buttons:{
      padding: '10px',
      margins: '20px'
    }
}

  return (
    <div style = {styles.container}>
      <h1>Duke Sports Stats Home</h1>
      <button style = {styles.buttons} onClick={goToBasketball}>Basketball</button>
      <button style = {styles.buttons} onClick={goToFootball}>Football</button>
      <button style = {styles.buttons} onClick={goToMensSoccer}>Men's Soccer</button>
      <button style = {styles.buttons} onClick={goToWomensSoccer}>Women's Soccer</button>
    </div>
  );
}

export default Home;