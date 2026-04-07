import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "./Navbar.css";

export default function Navbar(){
    const { dark, setDark } = useContext(ThemeContext);
    return (
        <nav className="navbar">

            <div className="links">
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/projects">Projects</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/dashboard">Dashboard</Link>
  </div>
      

      <button className="toggle" onClick={() => setDark(!dark)}>
        {dark ? "Light" : "Dark"}
      </button>
    </nav>
    );
}