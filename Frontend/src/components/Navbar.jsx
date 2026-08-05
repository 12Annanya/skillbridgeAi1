import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <div className="logo-dot"></div>
        <h2>SkillBridgeAI</h2>
      </div>


      <div className="nav-links">

        <NavLink to="/">
          Home
        </NavLink>


        <NavLink to="/resume">
          Resume
        </NavLink>


        <NavLink to="/about">
          About Us
        </NavLink>


        <NavLink to="/dashboard">
          Dashboard
        </NavLink>

      </div>



      <div className="nav-buttons">

        <NavLink 
          to="/login" 
          className="login-btn"
        >
          Login
        </NavLink>

      </div>


    </nav>
  );
}

export default Navbar;