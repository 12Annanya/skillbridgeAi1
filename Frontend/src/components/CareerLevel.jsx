import React from "react";


function CareerLevel({level}){


return(

<div className="career-level">


<h2>Career Level</h2>


<div className="levels">


<div className={level==="Beginner"?"active":""}>
Beginner
</div>


<div className={level==="Intermediate"?"active":""}>
Intermediate
</div>


<div className={level==="Advanced"?"active":""}>
Advanced
</div>


</div>


</div>

)

}


export default CareerLevel;