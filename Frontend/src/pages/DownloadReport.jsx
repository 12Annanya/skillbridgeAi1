import jsPDF from "jspdf";
import { FaDownload } from "react-icons/fa";


function DownloadReport({data}) {


const generateReport = () => {


const doc = new jsPDF();


doc.setFontSize(18);

doc.text(
"AI Career Readiness Report",
20,
20
);



doc.setFontSize(12);


doc.text(
`Role: ${data.role || "N/A"}`,
20,
40
);



doc.text(
`Readiness Score: ${data.readinessPercent || 0}%`,
20,
55
);



doc.text(
`Total Required Skills: ${data.totalRequiredSkills || 0}`,
20,
70
);



doc.text(
"Matched Skills:",
20,
90
);



let y = 105;


data.matchedSkills?.forEach(skill=>{


doc.text(
"- " + skill.name,
25,
y
);


y += 10;


});



doc.save(
"Career_Report.pdf"
);


};



return(

<button

className="download-btn"

onClick={generateReport}

>

<FaDownload/>

Download Career Report

</button>

);


}


export default DownloadReport;