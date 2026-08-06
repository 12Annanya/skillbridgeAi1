import { FaBookOpen } from "react-icons/fa";
import "./Analysis.css";

export default function StudyPlanner({data}){


return (

<div className="study-planner">


{
data?.studyPlan?.length ?

data.studyPlan.map((phase,index)=>(

<div 
className="study-item"
key={index}
>


<FaBookOpen/>


<h3>
{phase.phase}
</h3>


<p>
{phase.hours} hours | {phase.weeks} weeks
</p>


<ul>

{
phase.topics?.map((topic,i)=>(

<li key={i}>
{topic.skill}
</li>

))
}

</ul>


</div>


))


:

<p>
AI study plan will appear here.
</p>


}



</div>


)

}