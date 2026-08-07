import React from "react";
import "./Analysis.css";

import {
  FaBrain,
  FaChartLine,
  FaRocket,
  FaCode,
  FaServer,
  FaProjectDiagram,
  FaLightbulb,
  FaArrowUp,
  FaCheckCircle,
  FaExclamationTriangle,
  FaRobot,
  FaDownload,
} from "react-icons/fa";

const Analysis = () => {
  return (
    <div className="analysis-page">

      {/* ================= HEADER ================= */}
      <section className="analysis-header">
        <div>
          <div className="header-badge">
            <FaBrain />
            AI CAREER INTELLIGENCE
          </div>

          <h1>
            Resume <span>Analysis</span>
          </h1>

          <p>
            Get a complete AI-powered overview of your skills,
            career readiness and growth opportunities.
          </p>
        </div>

        <div className="header-icon">
          <FaRobot />
        </div>
      </section>


      {/* ================= TOP STATS ================= */}
      <section className="stats-grid">

        <div className="stat-card blue">
          <div className="stat-icon">
            <FaChartLine />
          </div>

          <div>
            <p>ATS Score</p>
            <h2>82<span>%</span></h2>
            <small>
              <FaArrowUp /> 12% improvement
            </small>
          </div>
        </div>


        <div className="stat-card purple">
          <div className="stat-icon">
            <FaRocket />
          </div>

          <div>
            <p>Career Readiness</p>
            <h2>78<span>%</span></h2>
            <small>
              <FaArrowUp /> Strong progress
            </small>
          </div>
        </div>


        <div className="stat-card green">
          <div className="stat-icon">
            <FaCode />
          </div>

          <div>
            <p>Skills Matched</p>
            <h2>12<span>/16</span></h2>
            <small>
              <FaCheckCircle /> 75% matched
            </small>
          </div>
        </div>


        <div className="stat-card orange">
          <div className="stat-icon">
            <FaBrain />
          </div>

          <div>
            <p>Career Level</p>
            <h2 className="level-text">Intermediate</h2>
            <small>Ready to grow</small>
          </div>
        </div>

      </section>


      {/* ================= WEEKLY PROGRESS ================= */}
      <section className="dashboard-card chart-card">

        <div className="section-heading">
          <div>
            <span className="section-label">
              PERFORMANCE
            </span>

            <h2>
              <FaChartLine />
              Weekly Study Progress
            </h2>

            <p>
              Your study activity over the last 7 days
            </p>
          </div>

          <div className="chart-score">
            <strong>32 hrs</strong>
            <span>This week</span>
          </div>
        </div>

        <div className="fake-chart">

          <div className="chart-y">
            <span>8h</span>
            <span>6h</span>
            <span>4h</span>
            <span>2h</span>
            <span>0h</span>
          </div>

          <div className="chart-area">

            <div className="grid-line"></div>
            <div className="grid-line"></div>
            <div className="grid-line"></div>
            <div className="grid-line"></div>
            <div className="grid-line"></div>

            <svg
              viewBox="0 0 700 250"
              preserveAspectRatio="none"
              className="study-svg"
            >
              <defs>
                <linearGradient
                  id="studyGradient"
                  x1="0"
                  x2="0"
                  y1="0"
                  y2="1"
                >
                  <stop
                    offset="0%"
                    stopColor="#6c63ff"
                    stopOpacity="0.4"
                  />

                  <stop
                    offset="100%"
                    stopColor="#6c63ff"
                    stopOpacity="0"
                  />
                </linearGradient>
              </defs>

              <path
                d="
                M0 190
                C70 150 80 120 120 130
                C170 140 190 180 240 155
                C300 120 330 100 370 110
                C430 125 460 65 510 80
                C570 100 600 150 640 105
                C670 75 690 45 700 35
                L700 250
                L0 250
                Z
                "
                fill="url(#studyGradient)"
              />

              <path
                d="
                M0 190
                C70 150 80 120 120 130
                C170 140 190 180 240 155
                C300 120 330 100 370 110
                C430 125 460 65 510 80
                C570 100 600 150 640 105
                C670 75 690 45 700 35
                "
                fill="none"
                stroke="#6c63ff"
                strokeWidth="4"
              />

            </svg>

            <div className="chart-days">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>

          </div>

        </div>

      </section>


      {/* ================= AI SUMMARY ================= */}
      <section className="dashboard-card ai-summary">

        <div className="section-heading">
          <div>
            <span className="section-label">
              AI INSIGHTS
            </span>

            <h2>
              <FaRobot />
              AI Resume Summary
            </h2>

            <p>
              Personalized insights generated from your resume
            </p>
          </div>

          <div className="ai-badge">
            <FaBrain />
            AI Powered
          </div>
        </div>


        <div className="summary-grid">

          {/* Strengths */}
          <div className="insight-card strengths">

            <div className="insight-title">
              <div className="insight-icon">
                <FaCheckCircle />
              </div>

              <div>
                <h3>Strengths</h3>
                <span>What you're doing well</span>
              </div>
            </div>

            <ul>
              <li>Strong React and JavaScript knowledge</li>
              <li>Good frontend development experience</li>
              <li>Multiple practical projects</li>
              <li>Understanding of DSA fundamentals</li>
            </ul>

          </div>


          {/* Improvements */}
          <div className="insight-card weaknesses">

            <div className="insight-title">
              <div className="insight-icon">
                <FaExclamationTriangle />
              </div>

              <div>
                <h3>Areas to Improve</h3>
                <span>Skills that need attention</span>
              </div>
            </div>

            <ul>
              <li>Improve backend development</li>
              <li>Practice system design</li>
              <li>Strengthen advanced DSA</li>
              <li>Add measurable project achievements</li>
            </ul>

          </div>

        </div>


        {/* Recommendation */}
        <div className="recommendation">

          <div className="recommendation-icon">
            <FaLightbulb />
          </div>

          <div>
            <span>AI RECOMMENDATION</span>

            <h3>
              Focus on DSA, backend development and
              industry-level projects.
            </h3>

            <p>
              Building stronger backend projects while continuing
              DSA practice can significantly improve your placement
              readiness.
            </p>
          </div>

        </div>

      </section>


      {/* ================= SALARY + CAREER ================= */}
      <section className="two-column">

        {/* Salary */}
        <div className="dashboard-card salary-card">

          <div className="section-heading small">
            <div>
              <span className="section-label">
                CAREER FORECAST
              </span>

              <h2>
                <FaChartLine />
                Salary Prediction
              </h2>
            </div>
          </div>


          <div className="salary-grid">

            <div>
              <span>Current Salary</span>
              <strong>₹6 LPA</strong>
            </div>

            <div>
              <span>Potential Salary</span>
              <strong>₹18 LPA</strong>
            </div>

          </div>


          <div className="growth-box">
            <div>
              <span>Estimated Growth</span>
              <strong>+200%</strong>
            </div>

            <FaArrowUp />
          </div>

        </div>


        {/* Career level */}
        <div className="dashboard-card career-card">

          <div className="section-heading small">
            <div>
              <span className="section-label">
                SKILL MATURITY
              </span>

              <h2>
                <FaRocket />
                Career Level
              </h2>
            </div>
          </div>


          <div className="career-level">

            <div className="level-item completed">
              <span>1</span>
              <div>
                <strong>Beginner</strong>
                <small>Completed</small>
              </div>
            </div>

            <div className="level-line active"></div>

            <div className="level-item current">
              <span>2</span>
              <div>
                <strong>Intermediate</strong>
                <small>Current Level</small>
              </div>
            </div>

            <div className="level-line"></div>

            <div className="level-item">
              <span>3</span>
              <div>
                <strong>Advanced</strong>
                <small>Next Goal</small>
              </div>
            </div>

          </div>

        </div>

      </section>


      {/* ================= DAILY STUDY ================= */}
      <section className="dashboard-card study-plan">

        <div className="section-heading">

          <div>
            <span className="section-label">
              PERSONALIZED LEARNING
            </span>

            <h2>
              <FaCode />
              Daily Study Plan
            </h2>

            <p>
              Recommended activities based on your skill gaps
            </p>
          </div>

          <div className="hours-badge">
            5.5 hrs / day
          </div>

        </div>


        <div className="study-list">

          <div className="study-item">
            <div className="study-icon">
              <FaCode />
            </div>

            <div className="study-info">
              <div>
                <strong>Data Structures & Algorithms</strong>
                <span>2 hours</span>
              </div>

              <div className="progress">
                <div style={{ width: "80%" }}></div>
              </div>
            </div>
          </div>


          <div className="study-item">
            <div className="study-icon server">
              <FaServer />
            </div>

            <div className="study-info">
              <div>
                <strong>Backend Development</strong>
                <span>1.5 hours</span>
              </div>

              <div className="progress">
                <div style={{ width: "60%" }}></div>
              </div>
            </div>
          </div>


          <div className="study-item">
            <div className="study-icon project">
              <FaProjectDiagram />
            </div>

            <div className="study-info">
              <div>
                <strong>Project Development</strong>
                <span>2 hours</span>
              </div>

              <div className="progress">
                <div style={{ width: "70%" }}></div>
              </div>
            </div>
          </div>

        </div>

      </section>


      {/* ================= ROADMAP ================= */}
      <section className="dashboard-card roadmap">

        <div className="section-heading">

          <div>
            <span className="section-label">
              YOUR JOURNEY
            </span>

            <h2>
              <FaRocket />
              Career Roadmap
            </h2>

            <p>
              Follow these steps to become placement ready
            </p>
          </div>

        </div>


        <div className="roadmap-track">

          <div className="roadmap-step completed">
            <div className="step-number">
              <FaCheckCircle />
            </div>

            <h3>DSA</h3>
            <p>Master core concepts</p>
          </div>


          <div className="roadmap-connector active"></div>


          <div className="roadmap-step current">
            <div className="step-number">
              02
            </div>

            <h3>Backend</h3>
            <p>Build real APIs</p>
          </div>


          <div className="roadmap-connector"></div>


          <div className="roadmap-step">
            <div className="step-number">
              03
            </div>

            <h3>Projects</h3>
            <p>Build industry projects</p>
          </div>


          <div className="roadmap-connector"></div>


          <div className="roadmap-step">
            <div className="step-number">
              04
            </div>

            <h3>System Design</h3>
            <p>Learn architecture</p>
          </div>


          <div className="roadmap-connector"></div>


          <div className="roadmap-step">
            <div className="step-number">
              05
            </div>

            <h3>Interviews</h3>
            <p>Crack placements</p>
          </div>

        </div>

      </section>


      {/* ================= RESUME SUGGESTIONS ================= */}
      <section className="dashboard-card resume-suggestions">

        <div className="section-heading">

          <div>
            <span className="section-label">
              RESUME OPTIMIZATION
            </span>

            <h2>
              <FaLightbulb />
              AI Resume Suggestions
            </h2>

            <p>
              Improve your resume with AI-generated recommendations
            </p>
          </div>

        </div>


        <div className="resume-comparison">

          <div className="resume-box current">

            <div className="resume-box-header">
              <span>BEFORE</span>
              <FaExclamationTriangle />
            </div>

            <h3>Current Resume</h3>

            <p>
              Resume has good projects but needs more
              measurable achievements.
            </p>

            <div className="suggestion-line">
              <FaExclamationTriangle />
              Add measurable impact
            </div>

          </div>


          <div className="arrow">
            →
          </div>


          <div className="resume-box improved">

            <div className="resume-box-header">
              <span>AFTER</span>
              <FaCheckCircle />
            </div>

            <h3>AI Improved Resume</h3>

            <p>
              Add project impact, technical skills and
              quantified results.
            </p>

            <div className="suggestion-line">
              <FaCheckCircle />
              Add quantified achievements
            </div>

          </div>

        </div>


        <button className="download-btn">
          <FaDownload />
          Download AI Report
        </button>

      </section>


      {/* ================= FOOTER ================= */}
      <div className="analysis-footer">
        <FaBrain />
        <span>
          Powered by AI • Your career, intelligently planned.
        </span>
      </div>

    </div>
  );
};

export default Analysis;