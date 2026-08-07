import React from "react";
import "./ATSScore.css";

function ATSScore({data}) {

return(

<div className="ats-card">

<h2>ATS Analysis</h2>

<div className="ats-item">
<p>Overall ATS</p>
<b>{data?.ats || 90}%</b>
</div>


<div className="ats-item">
<p>Formatting</p>
<b>{data?.formatting || 85}%</b>
</div>


<div className="ats-item">
<p>Keywords</p>
<b>{data?.keywords || 88}%</b>
</div>


<div className="ats-item">
<p>Projects</p>
<b>{data?.projects || 80}%</b>
</div>


<div className="ats-item">
<p>Experience</p>
<b>{data?.experience || 75}%</b>
</div>


</div>

)

}

export default ATSScore;