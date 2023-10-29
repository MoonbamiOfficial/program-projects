
import React, { useEffect } from 'react';
import Building from '../assets/images/pexels-irina-iriser-1366957.jpg';
import '../styles/style-index.scss';

const Home = () => {
  useEffect(() => {
    document.title = "Vite Projects";
  }, []);
  
  return (
    <section className="hero">
      <h2>
        A simple <span className="js-span">JavaScript</span> projects using <span className="vite-span">Vite</span> for learning purposes.
      </h2>
      <img src={ Building } alt="High-rise Buildings During Nighttime" />
    </section>
  );
}

export default Home;