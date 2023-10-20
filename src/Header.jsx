
import { Link } from 'react-router-dom';
import './css/header.css'

const Header = () => {
  return (
    <header>
      <h1><Link to="/">Programming Projects</Link></h1>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="">Contact</Link>
        <Link to="">About</Link>
      </nav>
    </header>
  );
}

export default Header;