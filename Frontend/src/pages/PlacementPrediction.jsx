import "./Analysis.css";

import {
  FaRocket,
  FaChartLine,
  FaBriefcase
} from "react-icons/fa";


export default function PlacementPrediction({data}) {


const score = data?.readinessPercent || 70;


return (

<div className="placement-box">


<div className="placement-score">

<FaRocket/>

<h1>
{score}%
</h1>

<p>
Placement Readiness
</p>

</div>



<div className="placement-details">


<h3>
<FaBriefcase/>
 Career Prediction
</h3>


<p>

{
score >= 80

?

"Strong profile. You can start applying for product based companies."

:

score >= 60

?

"Good profile. Improve weak areas and build projects."

:

"Need more preparation before applying."

}

</p>




<h3>
<FaChartLine/>
 Recommended Actions
</h3>


<ul>

<li>
Improve missing technical skills
</li>

<li>
Build industry level projects
</li>

<li>
Practice DSA and interviews
</li>

</ul>



</div>


</div>

)

}