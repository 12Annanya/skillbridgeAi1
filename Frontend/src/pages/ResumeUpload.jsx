import "./ResumeUpload.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaCloudUploadAlt,
  FaFilePdf,
  FaImage,
} from "react-icons/fa";


function ResumeUpload() {


  const navigate = useNavigate();


  const [file, setFile] = useState(null);

  const [resumeText, setResumeText] = useState("");

  const [role, setRole] = useState("Frontend Developer");




  const handleFile = (e) => {


    const selected = e.target.files[0];


    if (!selected) return;


    setFile(selected);


  };






  const fileToBase64 = (file) => {


    return new Promise((resolve, reject) => {


      const reader = new FileReader();


      reader.onload = () => {


        resolve(
          reader.result.split(",")[1]
        );


      };


      reader.onerror = reject;


      reader.readAsDataURL(file);


    });


  };








  const analyzeResume = async () => {


    if (!file && resumeText.trim() === "") {


      alert(
        "Upload resume or paste resume text."
      );


      return;


    }




    let resumeFileBase64 = null;



    if(file){


      resumeFileBase64 = await fileToBase64(file);


    }






    console.log(
      "Sending Resume:",
      {
        resumeText,
        resumeFileBase64,
        role
      }
    );






   navigate("/analysis", {
  state: {
    resumeText,
    resumeFileBase64,
    role
  }
});


  };







  return (


    <div className="resume-page">


      <div className="resume-container">



        <h1>
          Add your resume
        </h1>





        <div className="upload-card">





          <h2>
            1. Resume Input
          </h2>



          <span>
            Upload PDF/Image or paste resume text.
          </span>






          <label className="dropzone">



            <input

              type="file"

              accept=".pdf,.png,.jpg,.jpeg"

              hidden

              onChange={handleFile}

            />



            <FaCloudUploadAlt className="uploadIcon"/>



            <h3>
              Drop resume here or click to browse
            </h3>



            <small>
              PDF • JPG • PNG
            </small>



          </label>







          {
            file && (

              <div className="selectedFile">


                {
                  file.type.includes("pdf")
                  ?
                  <FaFilePdf/>
                  :
                  <FaImage/>
                }


                <span>
                  {file.name}
                </span>


              </div>


            )
          }







          <div className="divider">

            OR PASTE TEXT

          </div>







          <textarea


            rows="8"


            placeholder="Paste your resume here..."


            value={resumeText}


            onChange={(e)=>setResumeText(e.target.value)}


          />








          <label className="roleLabel">

            Target Role

          </label>







          <select


            value={role}


            onChange={(e)=>setRole(e.target.value)}


          >


            <option>
              Frontend Developer
            </option>


            <option>
              Backend Developer
            </option>


            <option>
              Full Stack Developer
            </option>


            <option>
              AI Engineer
            </option>


            <option>
              Machine Learning Engineer
            </option>


            <option>
              Software Engineer
            </option>


          </select>








          <button


            className="analyzeBtn"


            onClick={analyzeResume}


          >


            Analyze Resume


          </button>






        </div>


      </div>


    </div>


  );


}



export default ResumeUpload;