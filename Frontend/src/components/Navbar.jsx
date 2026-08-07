import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaUser, FaSignOutAlt } from "react-icons/fa";

function Navbar() {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  const [showProfile, setShowProfile] = useState(false);

  // Listen for login/logout changes
  useEffect(() => {
    const handleAuthChange = () => {
      setIsLoggedIn(
        localStorage.getItem("isLoggedIn") === "true"
      );
    };

    window.addEventListener(
      "auth-change",
      handleAuthChange
    );

    return () => {
      window.removeEventListener(
        "auth-change",
        handleAuthChange
      );
    };
  }, []);

  // ================= LOGOUT =================
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");

    setIsLoggedIn(false);
    setShowProfile(false);

    // After logout → Home
    navigate("/");
  };

  return (
    <nav className="navbar">

      {/* ================= LOGO ================= */}
      <NavLink to="/" className="logo">
        <div className="logo-dot"></div>
        <h2>SkillBridgeAI</h2>
      </NavLink>


      {/* ================= NAVIGATION ================= */}
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

      </div>


      {/* ================= RIGHT SIDE ================= */}
      <div className="nav-buttons">

        {!isLoggedIn ? (

          <NavLink
            to="/login"
            className="login-btn"
          >
            Login
          </NavLink>

        ) : (

          <div className="profile-wrapper">

            {/* PROFILE BUTTON */}
            <button
              className="profile-btn"
              onClick={() =>
                setShowProfile(!showProfile)
              }
            >

              <div className="profile-avatar">
                <FaUser />
              </div>

              <span>Profile</span>

              <span className="profile-arrow">
                {showProfile ? "▴" : "▾"}
              </span>

            </button>


            {/* PROFILE DROPDOWN */}
            {showProfile && (

              <div className="profile-dropdown">

                <div className="profile-header">

                  <div className="profile-avatar large">
                    <FaUser />
                  </div>

                  <div>
                    <strong>
                      Welcome Back!
                    </strong>

                    <span>
                      Career Explorer
                    </span>
                  </div>

                </div>


                <div className="profile-divider"></div>


                {/* HOME */}
                <button
                  className="profile-option"
                  onClick={() => {
                    setShowProfile(false);
                    navigate("/");
                  }}
                >
                  <FaUser />
                  Home
                </button>


                {/* LOGOUT */}
                <button
                  className="profile-option logout"
                  onClick={handleLogout}
                >
                  <FaSignOutAlt />
                  Logout
                </button>

              </div>

            )}

          </div>

        )}

      </div>

    </nav>
  );
}

export default Navbar;