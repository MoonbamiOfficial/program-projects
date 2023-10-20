
import { useEffect } from 'react';
import CodingImage from './assets/images/coding.jpg';
import './css/style-index.css';

const Home = () => {
  useEffect(() => {
    document.title = "Programming Projects";
  }, []);
  
  return (
    <section className="hero">
      <h2>JavaScript Projects of Moonbami</h2>
      <img src={CodingImage} alt="Coding a program" />
    </section>
  );
}

export default Home;