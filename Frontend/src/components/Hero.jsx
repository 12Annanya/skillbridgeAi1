import "./Hero.css";
import heroImage from "../assets/hero.png";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <span className="badge">
            AI Resume Intelligence
        </span>

        <h1>
          Your <span>AI</span> workspace
          <br />
          for faster career
          <br />
          decisions.
        </h1>

        <p>
          Upload your resume, analyze your ATS score,
          discover skill gaps, and get a personalized
          roadmap to become industry ready.
        </p>

        <div className="hero-buttons">

          <button className="primary">
            Analyze Resume
          </button>

          <button className="secondary">
            Watch Demo →
          </button>

        </div>

        <div className="hero-points">

          <p>✔ ATS Score Analysis</p>
          <p>✔ Skill Gap Detection</p>
          <p>✔ AI Learning Roadmap</p>

        </div>

      </div>

      <div className="hero-right">

        <img src={heroImage} alt="hero" />

      </div>

    </section>
  );
}

export default Hero;