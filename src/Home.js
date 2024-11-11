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

  return (
    <div>
      <h1>Home</h1>
      <button onClick={goToBasketball}>Basketball</button>
      <button onClick={goToFootball}>Football</button>
      <button onClick={goToMensSoccer}>Men's Soccer</button>
      <button onClick={goToWomensSoccer}>Women's Soccer</button>
    </div>
  );
}

export default Home;