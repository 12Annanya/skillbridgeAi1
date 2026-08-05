import "./Auth.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiLock, FiEye, FiEyeOff } from "react-icons/fi";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    navigate("/dashboard");
  };

  const openGoogle = () => {
    window.open("https://accounts.google.com/", "_blank");
  };

  const openGithub = () => {
    window.open("https://github.com/login", "_blank");
  };

  return (
    <div className="auth-page">

      <div className="blob blob1"></div>
      <div className="blob blob2"></div>

      <div className="auth-card">

        <h2>Welcome Back 👋</h2>

        <p>
          Sign in to continue your SkillBridge AI journey.
        </p>

        <form onSubmit={handleLogin}>

          <div className="input-box">
            <HiOutlineMail />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-box">
            <FiLock />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {showPassword ? (
              <FiEyeOff
                className="eye"
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <FiEye
                className="eye"
                onClick={() => setShowPassword(true)}
              />
            )}

          </div>

          <div className="row">

            <label>
              <input type="checkbox" />
              Remember me
            </label>

            <Link to="/">
              Forgot Password?
            </Link>

          </div>

          <button type="submit" className="login-btn2">
            Login
          </button>

        </form>

        <div className="divider">
          <span>OR</span>
        </div>

        <div className="social-buttons">

          <button
            className="social"
            onClick={openGoogle}
          >
            <FaGoogle />
            Google
          </button>

          <button
            className="social"
            onClick={openGithub}
          >
            <FaGithub />
            GitHub
          </button>

        </div>

        <div className="bottom">
          Don't have an account?
          <Link to="/signup"> Sign Up</Link>
        </div>

      </div>

    </div>
  );
}

export default Login;