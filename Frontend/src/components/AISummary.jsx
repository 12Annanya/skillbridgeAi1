import "./AISummary.css";

import { motion } from "framer-motion";

import {
  FaBrain,
  FaCheckCircle,
  FaExclamationTriangle,
  FaRocket,
  FaCode,
  FaClock
} from "react-icons/fa";

export default function AISummary({ data }) {

  const strengths = data?.strengths || [];

  const weaknesses = data?.weaknesses || [];

  const matched = data?.matchedSkills || [];

  const missing = data?.missingSkills || [];

  const advice = data?.careerAdvice || [];

  return (

<div className="ai-summary">

<motion.div
className="summary-header"
initial={{opacity:0,y:30}}
animate={{opacity:1,y:0}}
>

<FaBrain className="brain"/>

<div>

<h2>AI Resume Summary</h2>

<p>
Personalized Career Insights
</p>

</div>

</motion.div>





<div className="summary-grid">



{/* Strengths */}

<motion.div
className="summary-card"
whileHover={{y:-8}}
>

<FaCheckCircle className="green"/>

<h3>Strengths</h3>

<ul>

{
strengths.length===0

?

<li>No strengths detected.</li>

:

strengths.map((item,index)=>(

<li key={index}>

{item}

</li>

))

}

</ul>

</motion.div>





{/* Weaknesses */}

<motion.div
className="summary-card"
whileHover={{y:-8}}
>

<FaExclamationTriangle className="orange"/>

<h3>Needs Improvement</h3>

<ul>

{
weaknesses.length===0

?

<li>No weaknesses found.</li>

:

weaknesses.map((item,index)=>(

<li key={index}>

{item.skill || item}

</li>

))

}

</ul>

</motion.div>






{/* AI Advice */}

<motion.div
className="summary-card"
whileHover={{y:-8}}
>

<FaRocket className="purple"/>

<h3>Career Advice</h3>

<ul>

{
advice.length===0

?

<li>

Build more projects.

</li>

:

advice.map((item,index)=>(

<li key={index}>

{item}

</li>

))

}

</ul>

</motion.div>






{/* Matched Skills */}

<motion.div
className="summary-card"
whileHover={{y:-8}}
>

<FaCode className="blue"/>

<h3>Matched Skills</h3>

<div className="chips">

{

matched.map((skill,index)=>(

<span
className="chip success"
key={index}
>

{skill.name}

</span>

))

}

</div>

</motion.div>






{/* Missing Skills */}

<motion.div
className="summary-card"
whileHover={{y:-8}}
>

<FaClock className="red"/>

<h3>Missing Skills</h3>

<div className="chips">

{

missing.map((skill,index)=>(

<span
className="chip danger"
key={index}
>

{skill.name}

</span>

))

}

</div>

</motion.div>






{/* Overall Summary */}

<motion.div
className="summary-card full"
whileHover={{scale:1.02}}
>

<FaBrain className="brain"/>

<h3>Overall Summary</h3>

<p>

{

data?.overallSummary ||

"Your resume is good, but adding stronger projects, improving DSA, backend knowledge, and interview preparation will significantly improve placement chances."

}

</p>

</motion.div>

</div>

</div>

);

}