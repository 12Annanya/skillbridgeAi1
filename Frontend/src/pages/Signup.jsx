import "./Auth.css";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { FaGoogle, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiUser, FiLock, FiEye, FiEyeOff } from "react-icons/fi";


function Signup() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);


  const handleSignup = (e) => {

    e.preventDefault();


    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill all fields.");
      return;
    }


    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }


    alert("Account Created Successfully!");

    navigate("/login");

  };


  return (

    <div className="auth-page">

      <div className="blob blob1"></div>
      <div className="blob blob2"></div>


      <div className="auth-card">


        <h2>
          Create Account 🚀
        </h2>


        <p>
          Join SkillBridge AI and start your learning journey.
        </p>



        <form onSubmit={handleSignup}>


          {/* Name */}

          <div className="input-box">

            <FiUser />

            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />

          </div>




          {/* Email */}

          <div className="input-box">

            <HiOutlineMail />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />

          </div>





          {/* Password */}

          <div className="input-box">

            <FiLock />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />


            {
              showPassword ?

              <FiEyeOff
                className="eye"
                onClick={()=>setShowPassword(false)}
              />

              :

              <FiEye
                className="eye"
                onClick={()=>setShowPassword(true)}
              />

            }


          </div>





          {/* Confirm Password */}

          <div className="input-box">

            <FiLock />


            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e)=>setConfirmPassword(e.target.value)}
            />



            {
              showConfirmPassword ?

              <FiEyeOff
                className="eye"
                onClick={()=>setShowConfirmPassword(false)}
              />

              :

              <FiEye
                className="eye"
                onClick={()=>setShowConfirmPassword(true)}
              />

            }


          </div>





          <button
            type="submit"
            className="login-btn2"
          >
            Create Account
          </button>


        </form>





        <div className="divider">

          <span>
            OR
          </span>

        </div>





        <div className="social-buttons">


          <button className="social">

            <FaGoogle />

            <span>
              Sign up with Google
            </span>

          </button>




          <button className="social">

            <FaGithub />

            <span>
              Sign up with GitHub
            </span>

          </button>



        </div>







        <div className="bottom">

          Already have an account?

          <Link to="/login">
            {" "}Login
          </Link>

        </div>



      </div>


    </div>

  );

}


export default Signup;