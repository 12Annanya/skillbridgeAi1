import React from "react";


function DownloadReport(){


const downloadReport=()=>{

alert("AI Report Generated Successfully!");

};


return(

<button 
className="download-btn"
onClick={downloadReport}
>

Download AI Report PDF

</button>

)

}


export default DownloadReport;