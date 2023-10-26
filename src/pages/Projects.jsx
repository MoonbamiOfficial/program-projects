
import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Building from '../assets/images/pexels-irina-iriser-1366957.jpg';
import '../styles/style-projects.scss';

const Projects = () => {
  useEffect(() => {
    document.title = "Programming Projects";
  }, []);
  
  return (
      <section className="projects-section">
        <img src={ Building } alt="High-rise Buildings During Nighttime" />
        <section className="projects">
          <Link to="/projects/wlc">Website Launch Countdown</Link>
          <Link to="/projects/tts">Text to Speech</Link>
        </section>
      </section>
  );
}

export default Projects;