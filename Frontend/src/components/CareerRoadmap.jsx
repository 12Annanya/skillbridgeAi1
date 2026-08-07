import React from "react";


function CareerRoadmap({ data }) {


  let roadmap =
    data?.careerRoadmap ||
    data?.roadmap ||
    data?.career ||
    [];



  // Convert AI response into array
  if (!Array.isArray(roadmap)) {


    if (typeof roadmap === "object" && roadmap !== null) {

      roadmap = Object.values(roadmap);

    } else {

      roadmap = [roadmap];

    }

  }



  return (

    <div className="roadmap-box">


      <h2>
        Career Roadmap
      </h2>



      {
        roadmap.length === 0 ? (

          <p className="empty-text">
            No career roadmap available
          </p>

        ) : (


          <div className="roadmap-list">


            {
              roadmap.map((step,index)=>(

                <div 
                  className="roadmap-card"
                  key={index}
                >

                  <span className="step-number">
                    {index + 1}
                  </span>


                  <p>

                  {
                    typeof step === "object"
                    ? step.step ||
                      step.title ||
                      step.goal ||
                      JSON.stringify(step)

                    : step
                  }

                  </p>


                </div>

              ))
            }


          </div>


        )
      }



      <style>{`

        .roadmap-box {

          background:#111827;
          padding:25px;
          border-radius:16px;
          margin-top:25px;
          color:white;
          box-shadow:0 8px 25px rgba(0,0,0,0.25);

        }


        .roadmap-box h2 {

          color:#60a5fa;
          font-size:22px;
          margin-bottom:20px;

        }


        .roadmap-list {

          display:flex;
          flex-direction:column;
          gap:15px;

        }


        .roadmap-card {

          display:flex;
          align-items:center;
          gap:15px;
          background:#1f2937;
          padding:15px;
          border-radius:12px;

        }


        .step-number {

          min-width:35px;
          height:35px;
          border-radius:50%;
          display:flex;
          align-items:center;
          justify-content:center;
          background:#2563eb;
          font-weight:bold;

        }


        .roadmap-card p {

          margin:0;
          line-height:1.5;

        }


        .empty-text {

          color:#9ca3af;

        }


      `}</style>


    </div>

  );

}


export default CareerRoadmap;