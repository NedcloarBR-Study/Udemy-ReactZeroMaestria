import { Link } from "react-router-dom";
import "./Navbar.css";

// 2 - Navigation
const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">Sobre</Link>
    </nav>
  );
};

export default Navbar;
