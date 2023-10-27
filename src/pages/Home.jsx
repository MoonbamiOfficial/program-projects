
import React from 'react';
import { useEffect } from 'react';
import Building from '../assets/images/pexels-irina-iriser-1366957.jpg';
import '../styles/style-index.scss';

const Home = () => {
  useEffect(() => {
    document.title = "Vite Projects";
  }, []);
  
  return (
    <section className="hero">
      <h2>JavaScript Projects of Moonbami</h2>
      <img src={ Building } alt="High-rise Buildings During Nighttime" />
    </section>
  );
}

export default Home;