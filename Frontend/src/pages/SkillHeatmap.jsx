import "./Analysis.css";


export default function SkillHeatmap({data}){


return (

<div className="heatmap">


{

data?.missingSkills?.map((skill,index)=>(


<div 
className="heat-item"
key={index}
>


<h4>
{skill.name}
</h4>


<div className="heat-bar">


<div

style={{
width:`${Math.min(skill.hours*3,100)}%`
}}

>

</div>


</div>


<p>
{skill.hours} hours required
</p>


</div>


))


}



</div>

)


}