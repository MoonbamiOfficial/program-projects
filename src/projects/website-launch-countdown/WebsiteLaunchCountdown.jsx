
import React from 'react';
import { useEffect } from "react";
import Rocket from '../../assets/images/png/rocket.png';
import './style.scss';

const LaunchWebsite = () => {
  useEffect(() => {
    document.title = "Website Launch Countdown";
  })
  
  let dateDeadline = new Date("January 1, 2024 00:00:00:00").getTime();
  let timeInterval = setInterval(() => {
    let now = new Date().getTime();
    let timeDistance = dateDeadline - now;

    let days = Math.floor(timeDistance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeDistance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeDistance % (1000 * 60)) / 1000);
    
    document.querySelector('#js-days').textContent = days;
    document.querySelector('#js-hours').textContent = hours;
    document.querySelector('#js-minutes').textContent = minutes;
    document.querySelector('#js-seconds').textContent = seconds;
    
    if(timeDistance < 0) {
      clearInterval(timeInterval);
      document.querySelector('#js-days').textContent = "00";
      document.querySelector('#js-hours').textContent = "00";
      document.querySelector('#js-minutes').textContent = "00";
      document.querySelector('#js-seconds').textContent = "00";
    }
  }, 1000);

  return (
    <section className="website-launch-countdown-section">
      <div className="content">
        <p>Currently under maintenance...</p>
        <h1>We're <span>launching</span> soon!</h1>
        <div className="launch-timer">
          <div>
            <p id="js-days">00</p>
            <span>Days</span>
          </div>
          <div>
            <p id="js-hours">00</p>
            <span>Hours</span>
          </div>
          <div>
            <p id="js-minutes">00</p>
            <span>Minutes</span>
          </div>
          <div>
            <p id="js-seconds">00</p>
            <span>Seconds</span>
          </div>
        </div>
        <button>
          Learn more
          <i className="fa-solid fa-right-to-bracket"></i>
        </button>
      </div>
      <img src={ Rocket } alt="Rocket" className="rocket" />
    </section>
  );
}

export default LaunchWebsite;