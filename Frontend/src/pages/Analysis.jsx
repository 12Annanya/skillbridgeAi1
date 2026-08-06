import "./Analysis.css";

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import {
  FaBrain,
  FaChartLine,
  FaRobot,
  FaCode,
  FaAward,
  FaBullseye,
  FaLaptopCode,
  FaGraduationCap
} from "react-icons/fa";

import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

import AISummary from "../components/AISummary";
import { analyzeResume } from "./analyzeResume";

function Analysis() {

  const location = useLocation();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {

    let savedData = location.state;

    if (savedData) {
      sessionStorage.setItem(
        "resumeData",
        JSON.stringify(savedData)
      );
    }

    if (!savedData) {
      const stored =
        sessionStorage.getItem("resumeData");

      if (stored) {
        savedData = JSON.parse(stored);
      }
    }

    if (!savedData) {
      setError("No Resume Found");
      setLoading(false);
      return;
    }

    analyzeResume(savedData)

      .then((response) => {
        setData(response);
      })

      .catch((err) => {
        setError(err.message);
      })

      .finally(() => {
        setLoading(false);
      });

  }, [location.state]);

  if (loading) {
    return (
      <div className="loading-page">
        <div className="loader"></div>
        <h2>AI is analyzing your Resume...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="loading-page">
        <h2>{error}</h2>
      </div>
    );
  }
  const skills = [
  { subject: "React", value: 85 },
  { subject: "JavaScript", value: 80 },
  { subject: "Backend", value: 60 },
  { subject: "DSA", value: 70 },
  { subject: "Database", value: 65 },
  { subject: "System Design", value: 40 },
];

const studyData = [
  { day: "Mon", hours: 4 },
  { day: "Tue", hours: 5 },
  { day: "Wed", hours: 3 },
  { day: "Thu", hours: 6 },
  { day: "Fri", hours: 5 },
  { day: "Sat", hours: 7 },
  { day: "Sun", hours: 2 },
];

return (

<div className="analysis-page">

<div className="analysis-container">

<motion.div
className="dashboard-header"
initial={{opacity:0,y:-40}}
animate={{opacity:1,y:0}}
transition={{duration:.6}}
>

<div>

<h1>

<FaBrain/>

AI Resume Dashboard

</h1>

<p>

Target Role

<b> {data.role || "Software Engineer"}</b>

</p>

</div>

<div className="overall-score">

<h2>{data.readinessPercent || 0}%</h2>

<span>Ready</span>

</div>

</motion.div>

<div className="score-grid">

<div className="score-card">

<div className="icon">

<FaAward/>

</div>

<h2>

{data.readinessPercent || 0}%

</h2>

<p>

Readiness Score

</p>

<div className="progress">

<div
className="fill"
style={{
width:`${data.readinessPercent || 0}%`
}}
></div>

</div>

</div>

<div className="score-card">

<div className="icon">

<FaBullseye/>

</div>

<h2>

85%

</h2>

<p>

ATS Score

</p>

<div className="progress">

<div
className="fill"
style={{width:"85%"}}
></div>

</div>

</div>

<div className="score-card">

<div className="icon">

<FaLaptopCode/>

</div>

<h2>

78%

</h2>

<p>

Technical

</p>

<div className="progress">

<div
className="fill"
style={{width:"78%"}}
></div>

</div>

</div>

<div className="score-card">

<div className="icon">

<FaGraduationCap/>

</div>

<h2>

92%

</h2>

<p>

Learning

</p>

<div className="progress">

<div
className="fill"
style={{width:"92%"}}
></div>

</div>

</div>

</div>
{/* Charts */}

<div className="charts">

  <div className="chart-card">

    <h2>🔥 Skill Gap Analysis</h2>

    <ResponsiveContainer width="100%" height={320}>

      <RadarChart data={skills}>

        <PolarGrid />

        <PolarAngleAxis dataKey="subject" />

        <Radar
          dataKey="value"
          stroke="#8b5cf6"
          fill="#8b5cf6"
          fillOpacity={0.6}
        />

      </RadarChart>

    </ResponsiveContainer>

  </div>



  <div className="chart-card">

    <h2>📚 Weekly Study Hours</h2>

    <ResponsiveContainer width="100%" height={320}>

      <BarChart data={studyData}>

        <XAxis dataKey="day" />

        <YAxis />

        <Tooltip />

        <Bar
          dataKey="hours"
          fill="#7c3aed"
          radius={[8, 8, 0, 0]}
        />

      </BarChart>

    </ResponsiveContainer>

  </div>

</div>



{/* AI Summary */}

<AISummary data={data} />



{/* Footer */}

<motion.div
  className="recommend-card"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>

  <FaBrain />

  <h2>Career Recommendation</h2>

  <p style={{ marginBottom: "20px" }}>
    {data.overallSummary ||
      "Continue improving your projects, DSA, backend development and interview preparation to increase your placement chances."}
  </p>

  <ul>

    {data.careerAdvice?.length > 0 ? (

      data.careerAdvice.map((item, index) => (

        <li key={index}>{item}</li>

      ))

    ) : (

      <>
        <li>Build 2 production-level projects.</li>
        <li>Solve DSA daily.</li>
        <li>Learn Backend Development.</li>
        <li>Deploy your projects online.</li>
      </>

    )}

  </ul>

</motion.div>

</div>

</div>

);

}

export default Analysis;