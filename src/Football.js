import {buttonImageStyle, paragraphStyle, containerStyle, containerStyle2 } from './football_styles';
//import backgroundImg from '/Users/MandyNemshin/Desktop/Duke/Technify/FinalProj/tester/src/backgroundd.png';
//import buttonImage from '/Users/MandyNemshin/Desktop/Duke/Technify/FinalProj/tester/src/button.png';
//import graph from '/Users/MandyNemshin/Desktop/Duke/Technify/FinalProj/tester/src/graph.png';
import React, { useState } from 'react';

function Football() {
  const [showImage, setShowImage] = useState(false);

  const handleClick = () => {
    //alert('Button clicked!');
    setShowImage(true);
  };

  return (
    <div >
      <img src="/backgroundd.png" alt="Background 1" /> 

      <div style={containerStyle}>
      <p style={paragraphStyle}>
        Duke football has evolved from humble beginnings into a powerhouse of resilience
        and ambition. For decades, Duke’s football program has played under the looming
        shadow of its celebrated basketball legacy, a quiet and persistent underdog 
        striving for recognition on a campus where the echoes of Cameron Indoor Stadium 
        often took center stage. Yet, through every season, win or lose, Duke football has
        retained an indomitable spirit, fueled by the loyalty of its players and the unbreakable 
        dedication of its fans. This is a program that has fought to build a reputation in the 
        highly competitive world of college football, overcoming years of struggle to carve 
        out a place in the national conversation.  </p> 
      <p style={paragraphStyle}>
        Today, Duke football stands as a testament to perseverance, with recent seasons witnessing 
        an extraordinary transformation. Bolstered by outstanding coaching led by Manny Diaz, a 
        roster of high-caliber athletes, and an unstoppable drive, Duke has become a formidable 
        competitor on the field. With a strategic blend of talent and grit, the Blue Devils have 
        captivated fans and sent shockwaves through the ACC, consistently challenging long-standing 
        powerhouses and rewriting what it means to play Duke football. Game after game, their newfound 
        prowess is turning heads and rallying fans with an energy that resonates across campus and 
        far beyond. Duke football is not merely having a moment—it’s crafting a new era, one marked 
        by thrilling victories, unyielding teamwork, and a legacy that will continue to shape the 
        program for years to come. This rise to prominence is not just a phase but a powerful movement, 
        proving that Duke is ready to redefine its place in college football history.</p>
      </div>

      <div style={containerStyle2}>
      <img style={buttonImageStyle} src="/button.png" alt="Button" onClick={handleClick}  />
      
 
      {showImage && (
        <img 
          src="/graph.png" //in here put in image of graphs 
          alt="Popped up" 
          style={{ marginTop: '20px', width: '800px', height: 'auto' }} 
        />
      )}
      </div>
      
    </div>
  );
}

export default Football;