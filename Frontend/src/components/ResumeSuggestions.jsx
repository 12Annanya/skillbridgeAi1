import React from "react";


function ResumeSuggestions({data}){


return(

<div className="resume-suggestion">


<h2>AI Resume Suggestions</h2>


<div>

<h3>Current Resume</h3>

<p>
{
data?.current ||
"Resume has good projects but needs more measurable achievements."
}
</p>


</div>



<div>

<h3>AI Improved Resume</h3>


<p>

{
data?.improved ||
"Add project impact, technical skills and quantified results."
}

</p>


</div>


</div>


)

}


export default ResumeSuggestions;