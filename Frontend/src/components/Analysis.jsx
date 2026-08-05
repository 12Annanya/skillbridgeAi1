import "./Analysis.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { analyzeResume } from "./analyzeResume";
import ScoreCircle from "./ScoreCircle";
import ProgressBar from "./ProgressBar";
import SkillChart from "./SkillChart";
import KeywordChart from "./KeywordChart";

import SuggestionCard from "./SuggestionCard";
import DownloadReport from "./DownloadReport";
import CompanyChart from "./CompanyChart";

function Analysis() {
  const location = useLocation();
  const { resumeText, resumeFileBase64, role } = location.state || {};

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hoursPerWeek, setHoursPerWeek] = useState(10);

  useEffect(() => {
    if (!resumeText && !resumeFileBase64) {
      setError("No resume data found. Please go back and upload again.");
      setLoading(false);
      return;
    }

    analyzeResume({ resumeText, resumeFileBase64, role })
      .then(setData)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [resumeText, resumeFileBase64, role]);

  if (loading) {
    return (
      <div className="analysis-page">
        <div className="analysis-loading">
          <div className="spinner"></div>
          <p>Analyzing your resume against {role} requirements...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="analysis-page">
        <div className="analysis-card">
          <p className="error-text">{error}</p>
        </div>
      </div>
    );
  }

  const weeks = Math.max(1, Math.ceil(data.totalPrepHours / hoursPerWeek));

  return (
    <div className="analysis-page">
      <div className="analysis-container">

        <div className="analysis-card">
          <div className="card-header-row">
            <div>
              <h1>Readiness score — {data.role}</h1>
              <p className="subtext">
                Based on {data.totalRequiredSkills} skills typically expected for this role.
              </p>
            </div>
            <DownloadReport data={data} />
          </div>

          <div className="readiness-row">
            <ScoreCircle percent={data.readinessPercent} />
            <div>
              <h2 className="ready-text">{data.readinessPercent}% ready</h2>
              <p>
                {data.matchedSkills.length} of {data.totalRequiredSkills} required skills
                detected in your resume.
              </p>
            </div>
          </div>

          <div className="skills-grid">
            <div>
              <span className="label">MATCHED SKILLS</span>
              <div className="chip-row">
                {data.matchedSkills.length === 0 ? (
                  <p className="muted">None detected yet.</p>
                ) : (
                  data.matchedSkills.map((s, i) => (
                    <span key={i} className="chip chip-matched">{s.name}</span>
                  ))
                )}
              </div>
            </div>

            <div>
              <span className="label">MISSING SKILLS</span>
              <div className="chip-row">
                {data.missingSkills.map((s, i) => (
                  <span key={i} className="chip chip-missing">
                    {s.name} <b>{s.hours}h</b>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="analysis-card chart-grid">
          <div>
            <h2>Skill match overview</h2>
            <SkillChart
              matchedCount={data.matchedSkills.length}
              missingCount={data.missingSkills.length}
            />
          </div>
          <div>
            <h2>Prep hours by skill</h2>
            <KeywordChart missingSkills={data.missingSkills} />
          </div>
        </div>

        <div className="analysis-card">
          <h2>Which companies ask this most</h2>
          <CompanyChart studyPlan={data.studyPlan} />
        </div>

        <div className="analysis-card">
          <h2>How hard to work — study plan</h2>
          <p className="subtext">
            Total estimated prep: <b>{data.totalPrepHours} hours</b>.
          </p>
          <ProgressBar
            hoursPerWeek={hoursPerWeek}
            setHoursPerWeek={setHoursPerWeek}
            weeks={weeks}
          />
        </div>

        <div className="analysis-card">
          <h2>What companies actually ask</h2>
          {data.studyPlan.map((phase, i) => (
            <SuggestionCard key={i} phase={phase} />
          ))}
        </div>

      </div>
    </div>
  );
}

export default Analysis;