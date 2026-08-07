import "./Auth.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { FaGoogle, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import {
  FiLock,
  FiEye,
  FiEyeOff,
} from "react-icons/fi";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // ================= LOGIN =================
  const handleLogin = (e) => {
    e.preventDefault();

    // Validation
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    // Save login state
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userEmail", email);

    console.log("Login successful:", {
      email,
    });

    // Small loading effect
    setTimeout(() => {
      setLoading(false);

      // After login → Resume page
      navigate("/resume");
    }, 800);
  };

  // ================= GOOGLE LOGIN =================
  const openGoogle = () => {
    window.open(
      "https://accounts.google.com/",
      "_blank"
    );
  };

  // ================= GITHUB LOGIN =================
  const openGithub = () => {
    window.open(
      "https://github.com/login",
      "_blank"
    );
  };

  return (
    <div className="auth-page">

      {/* ================= BACKGROUND BLOBS ================= */}
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>

      {/* ================= LOGIN CARD ================= */}
      <div className="auth-card">

        {/* Header */}
        <div className="login-header">

          <div className="login-logo">
            <span></span>
            SkillBridge AI
          </div>

          <h2>
            Welcome Back <span>👋</span>
          </h2>

          <p>
            Sign in to continue your SkillBridge AI journey.
          </p>

        </div>

        {/* ================= LOGIN FORM ================= */}
        <form onSubmit={handleLogin}>

          {/* EMAIL */}
          <div className="input-box">

            <HiOutlineMail className="input-icon" />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />

          </div>

          {/* PASSWORD */}
          <div className="input-box">

            <FiLock className="input-icon" />

            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />

            {showPassword ? (
              <FiEyeOff
                className="eye"
                onClick={() =>
                  setShowPassword(false)
                }
              />
            ) : (
              <FiEye
                className="eye"
                onClick={() =>
                  setShowPassword(true)
                }
              />
            )}

          </div>

          {/* ================= OPTIONS ================= */}
          <div className="row">

            <label>
              <input type="checkbox" />
              <span>Remember me</span>
            </label>

            <Link to="/">
              Forgot Password?
            </Link>

          </div>

          {/* ================= LOGIN BUTTON ================= */}
          <button
            type="submit"
            className="login-btn2"
            disabled={loading}
          >

            {loading ? (
              <>
                <span className="login-spinner"></span>
                Signing in...
              </>
            ) : (
              "Login"
            )}

          </button>

        </form>

        {/* ================= DIVIDER ================= */}
        <div className="divider">
          <span>OR CONTINUE WITH</span>
        </div>

        {/* ================= SOCIAL LOGIN ================= */}
        <div className="social-buttons">

          <button
            type="button"
            className="social"
            onClick={openGoogle}
          >
            <FaGoogle />
            Google
          </button>

          <button
            type="button"
            className="social"
            onClick={openGithub}
          >
            <FaGithub />
            GitHub
          </button>

        </div>

        {/* ================= SIGN UP ================= */}
        <div className="bottom">

          <span>
            Don't have an account?
          </span>

          <Link to="/signup">
            Sign Up
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Login;