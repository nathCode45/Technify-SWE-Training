import React, { useState } from 'react';
import Button from './Msoccomponents/Button';
import './MSoccer.css';

function MSoccer() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleText = () => {
    console.log("toggling", isVisible);
    setIsVisible(!isVisible);
  }

  return (
    <div className='react'>

      <header className="header">Duke Men's Soccer Statistics</header>

      <div className='content'>

        <div className="stat-container">
          <img
            src="python figures/games-won-and-lost.png"
            width="500"
            height="300"
            className="image"
            alt="Total Games Won and Lost"
          />
          <div className="text">
            <h3>Total Games Won and Lost (2020-2024)</h3>
            <p>
              This graph displays the total number of Duke Men's Soccer games wins and losses per year for the past 5 seasons. 
              Duke Men's Soccer plays an average of 15.2 games per season with an average of 10.6 games won and 4.6 games lost.
            </p>
          </div>
        </div>

        <div className="stat-container">
          <div className="text">
            <h3>Total Goals Over Time (2020-2024)</h3>
            <p>
              This graph displays the total number of goals scored by the Duke Men's Soccer team per season. 
              From 2020 to 2024, there has on average been an increase in the goals scored per season. Based on the 
              past 5 seasons, they scored on average 40.2 goals throughout the season.
            </p>
          </div>
          <img
            src="python figures/men-soc-total-goals-over-time.png"
            width="500"
            height="300"
            className="image"
            alt="Total Goals Over Time"
          />
        </div>

        {isVisible && (
          <div className="extra-text">
            <div className="stat-container">
              <img
                src="python figures/men-soc-shot-percentage.png"
                width="500"
                height="300"
                className="image"
                alt="Shot Percentage"
              />
              <div className="text">
                <h3>Duke Men's Soccer Shot Percentages (2020-2024)</h3>
                <p>
                  This graph displays the average percentage of successful shots made per game for the past 5 seasons. 
                  The men's soccer team made attempts of an average of 14.54 shots per game during the past 5 seasons. 
                  Their average shot percentage is 14.92%. The data shows that the team has improved over the years 
                  as the average shot percentage has increased from 11.2% in 2020 to 20.9% in 2024.
                </p>
              </div>
            </div>
          </div>
        )}

      </div>

      <div className='button-container'>
        <Button color='blue' text={!isVisible ? 'SHOW MORE' : "SHOW LESS"} onClick={toggleText} />
      </div>

    </div>
  );
}

export default MSoccer;