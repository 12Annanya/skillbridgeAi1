import "./Analysis.css";

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

import { motion } from "framer-motion";

import {
  FaCode,
  FaReact,
  FaDatabase,
  FaProjectDiagram,
  FaArrowLeft
} from "react-icons/fa";


function Analysis(){

const skills=[
{
subject:"React",
A:50
},
{
subject:"JavaScript",
A:75
},
{
subject:"DSA",
A:60
},
{
subject:"Backend",
A:35
},
{
subject:"Database",
A:55
},
{
subject:"System Design",
A:25
}
];


const studyData=[
{
day:"Mon",
hours:4
},
{
day:"Tue",
hours:5
},
{
day:"Wed",
hours:3
},
{
day:"Thu",
hours:6
},
{
day:"Fri",
hours:5
},
{
day:"Sat",
hours:7
},
{
day:"Sun",
hours:3
}

];


return(

<div className="analysis-page">


<div className="analysis-container">


<motion.h1
initial={{opacity:0,y:-30}}
animate={{opacity:1,y:0}}
>
AI Career Readiness Analysis
</motion.h1>


<p className="subtitle">
Personalized roadmap based on your skills and target role
</p>



{/* SCORE */}


<motion.div 
className="score-card"
whileHover={{scale:1.03}}
>


<div>

<h3>
Overall Readiness Score
</h3>


<h2 className="score">
72%
</h2>


<p>
You are 28% away from industry ready
</p>

</div>


<div className="chart-icon">
🚀
</div>


</motion.div>





{/* SKILL GRAPH */}



<div className="section-card">


<h2>
<FaCode/>
Skill Gap Analysis
</h2>



<div className="chart-box">

<ResponsiveContainer width="100%" height={350}>


<RadarChart data={skills}>


<PolarGrid/>


<PolarAngleAxis dataKey="subject"/>


<Radar
dataKey="A"
stroke="#818cf8"
fill="#6366f1"
fillOpacity={0.6}
/>


</RadarChart>


</ResponsiveContainer>


</div>



</div>





{/* STUDY PLAN */}


<div className="section-card">


<h2>
📚 What You Should Study
</h2>


<div className="study-grid">



<div className="study-item">

<FaReact/>

<h3>
Advanced React
</h3>

<p>
Hooks, Redux Toolkit,
Context API, Performance
</p>

<span>
15 Days | 2 hrs/day
</span>

</div>





<div className="study-item">


<FaDatabase/>


<h3>
Backend Development
</h3>

<p>
Node.js, Express,
MongoDB, Authentication
</p>

<span>
30 Days | 1.5 hrs/day
</span>


</div>





<div className="study-item">


<FaProjectDiagram/>


<h3>
DSA Preparation
</h3>


<p>
Arrays, Trees,
Graphs, DP
</p>


<span>
90 min daily
</span>


</div>



</div>


</div>






{/* WEEKLY GRAPH */}



<div className="section-card">


<h2>
Weekly Study Hours
</h2>


<ResponsiveContainer width="100%" height={300}>


<BarChart data={studyData}>


<XAxis dataKey="day"/>

<YAxis/>


<Tooltip/>


<Bar
dataKey="hours"
fill="#8b5cf6"
/>


</BarChart>


</ResponsiveContainer>



</div>







{/* ROADMAP */}


<div className="section-card">


<h2>
Learning Roadmap
</h2>



<div className="roadmap">


<div>
<h3>
Month 1
</h3>

<p>
React Advanced + Frontend Projects
</p>

</div>



<div>
<h3>
Month 2
</h3>

<p>
Backend + Database + Deployment
</p>

</div>



<div>
<h3>
Month 3
</h3>

<p>
DSA + System Design + Interviews
</p>

</div>


</div>


</div>








{/* PROJECTS */}


<div className="section-card">


<h2>
Recommended Projects
</h2>



<div className="project">


<h3>
AI Resume Analyzer
</h3>

<p>
React + Node + AI API
</p>


</div>



<div className="project">


<h3>
Task Management SaaS
</h3>


<p>
Authentication + Database + Deployment
</p>


</div>



</div>





<button className="back-btn">

<FaArrowLeft/>
 Back

</button>



</div>


</div>


)

}


export default Analysis;