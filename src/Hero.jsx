
import CodingImage from './assets/images/coding.jpg'
import './css/style-index.css'

const Hero = () => {
  return (
    <section className="hero">
      <h2>JavaScript Projects of Moonbami</h2>
      <img src={CodingImage} alt="Coding a program" />
    </section>
  );
}

export default Hero;