import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import ResumeUpload from "./pages/ResumeUpload";
import Analysis from "./pages/Analysis";
import About from "./pages/About";


function App() {

  const location = useLocation();


  const hideLayout =
    location.pathname === "/login" ||
    location.pathname === "/signup";


  return (

    <>

      {!hideLayout && <Navbar />}


      <Routes>

        <Route 
          path="/" 
          element={<Home />} 
        />


        <Route 
          path="/resume" 
          element={<ResumeUpload />} 
        />


        <Route 
          path="/analysis" 
          element={<Analysis />} 
        />


        <Route 
          path="/about" 
          element={<About />} 
        />


        <Route 
          path="/dashboard" 
          element={<Dashboard />} 
        />


        <Route 
          path="/login" 
          element={<Login />} 
        />


        <Route 
          path="/signup" 
          element={<Signup />} 
        />


      </Routes>


      {!hideLayout && <Footer />}


    </>

  );

}


export default App;