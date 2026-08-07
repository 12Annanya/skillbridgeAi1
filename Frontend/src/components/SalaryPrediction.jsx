import React from "react";
import "./SalaryPrediction.css";


function SalaryPrediction({data}){


return(

<div className="salary-card">

<h2>Salary Prediction</h2>


<div className="salary-grid">


<div>
<h3>Current Salary</h3>
<p>
₹{data?.current || "6 LPA"}
</p>
</div>


<div>
<h3>Future Salary</h3>

<p>
₹{data?.future || "18 LPA"}
</p>

</div>


<div>

<h3>Growth</h3>

<p>
{data?.growth || "200%"}
</p>


</div>


</div>


</div>

)

}


export default SalaryPrediction;