import React from "react";


function DailyStudyPlan({ data }) {


  let plan =
    data?.dailyStudyPlan ||
    data?.studyPlan ||
    data?.plan ||
    [];



  // Convert AI response into array
  if (!Array.isArray(plan)) {


    if (typeof plan === "object" && plan !== null) {

      plan = Object.values(plan);

    } else {

      plan = [plan];

    }

  }



  return (

    <div className="study-plan-box">


      <h2>
        Daily Study Plan
      </h2>



      {
        plan.length === 0 ? (

          <p className="empty-text">
            No study plan available
          </p>

        ) : (


          <ul>

            {
              plan.map((item,index)=>(

                <li key={index}>

                  {
                    typeof item === "object"
                    ? item.task || item.topic || JSON.stringify(item)
                    : item
                  }

                </li>

              ))
            }

          </ul>


        )
      }



      <style>{`

        .study-plan-box {

          background:#111827;
          padding:25px;
          border-radius:16px;
          margin-top:25px;
          color:white;
          box-shadow:0 8px 25px rgba(0,0,0,0.25);

        }


        .study-plan-box h2 {

          color:#60a5fa;
          font-size:22px;
          margin-bottom:20px;

        }


        .study-plan-box ul {

          list-style:none;
          padding:0;

        }


        .study-plan-box li {

          background:#1f2937;
          padding:14px 18px;
          margin-bottom:12px;
          border-radius:10px;
          line-height:1.5;
          transition:0.3s;

        }


        .study-plan-box li:hover {

          transform:translateX(5px);
          background:#374151;

        }


        .study-plan-box li::before {

          content:"📚";
          margin-right:10px;

        }


        .empty-text {

          color:#9ca3af;

        }


      `}</style>


    </div>

  );

}


export default DailyStudyPlan;