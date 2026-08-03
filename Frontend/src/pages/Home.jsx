import "./Home.css";

function Home() {
  return (
    <main className="home">
      <div className="bg-circle bg1"></div>
      <div className="bg-circle bg2"></div>

      <section className="hero">
        <div className="hero-left">
          <span className="hero-badge">🚀 AI Powered Resume Intelligence</span>

          <h1>
            Your <span>AI</span> workspace for faster career decisions.
          </h1>

          <p>
            Analyze your resume, discover skill gaps, improve your ATS score
            and get a personalized roadmap to become industry ready.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Analyze Resume</button>
            <button className="secondary-btn">
              Watch Demo <span className="arrow">→</span>
            </button>
          </div>

          <div className="hero-checklist">
            
            
          </div>

          <div className="hero-trust">
          
          </div>
        </div>

        <div className="hero-right">
          <div className="glass-card card-chart">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 3v18h18" />
              <path d="M18 17V9" />
              <path d="M13 17V5" />
              <path d="M8 17v-3" />
            </svg>
            <h4>Resume Score</h4>
            <h2>91%</h2>
            <div className="progress">
              <div className="progress-fill"></div>
            </div>
          </div>

          <div className="glass-card card-bulb">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18h6" />
              <path d="M10 22h4" />
              <path d="M12 2a7 7 0 0 0-7 7c0 2.5 1.5 4 2.5 5.5S9 17 9 18h6c0-1 .5-2 1.5-3.5S19 11.5 19 9a7 7 0 0 0-7-7z" />
            </svg>
            <h4>AI Recommendation</h4>
          </div>

          <div className="glass-card card-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 7 13.5 15.5 8.5 10.5 2 17" />
              <path d="M16 7h6v6" />
            </svg>
            <h4>Skill Gap</h4>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;