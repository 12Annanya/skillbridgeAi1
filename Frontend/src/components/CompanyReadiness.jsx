import React from "react";
import "./AISummary.css";
function AISummary({ data }) {

return (

<div className="ai-summary">

<h2>AI Resume Summary</h2>

<div className="summary-section">

<h3>💪 Strengths</h3>

<ul>
{
(data?.strengths || [
"Strong frontend knowledge",
"Good problem solving skills",
"React project experience"
])
.map((item,index)=>(
<li key={index}>{item}</li>
))
}
</ul>


</div>


<div className="summary-section">

<h3>⚠️ Weaknesses</h3>

<ul>
{
(data?.weaknesses || [
"Need more system design practice",
"Improve backend skills"
])
.map((item,index)=>(
<li key={index}>{item}</li>
))
}
</ul>

</div>


<div className="summary-section">

<h3>🤖 AI Recommendation</h3>

<p>
{
data?.recommendation ||
"Focus on DSA, backend development and building industry-level projects."
}
</p>

</div>


</div>

)

}

export default AISummary;