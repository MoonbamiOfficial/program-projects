
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import CodingImage from '../assets/images/coding.jpg';
import '../styles/style-projects.scss';

const Projects = () => {
  useEffect(() => {
    document.title = "Programming Projects";
  }, []);
  
  return (
      <section className="projects-section">
        <img src={CodingImage} alt="Coding a program" />
        <section className="projects">
          <Link to="/projects/wlc">Website Launch Countdown</Link>
        </section>
      </section>
  );
}

export default Projects;