import React from "react";
import "./RecommendedCertificates.css";


function RecommendedCertificates({ data }) {


  let certificates =
    data?.certificates || 
    data?.recommendedCertificates || 
    [];



  // Convert object/string into array
  if(!Array.isArray(certificates)){

    if(typeof certificates === "object"){

      certificates = Object.values(certificates);

    }
    else{

      certificates = [certificates];

    }

  }



  return (

    <div className="certificate-box">

      <h2>
        Recommended Certificates
      </h2>


      {
        certificates.length === 0 ? (

          <p>
            No certificate recommendations available
          </p>

        ) : (


          <ul>

            {
              certificates.map((certificate,index)=>(

                <li key={index}>
                  {certificate}
                </li>

              ))
            }

          </ul>


        )
      }


    </div>

  );

}


export default RecommendedCertificates;