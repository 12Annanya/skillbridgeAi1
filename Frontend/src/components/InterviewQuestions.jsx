import React from "react";


function InterviewQuestions({ data }) {


  let questions =
    data?.interviewQuestions ||
    data?.questions ||
    [];


  // Convert AI response into array
  if (!Array.isArray(questions)) {

    if (typeof questions === "object" && questions !== null) {

      questions = Object.values(questions);

    } else {

      questions = [questions];

    }

  }



  return (

    <div className="interview-box">


      <h2>
        Interview Questions
      </h2>


      {
        questions.length === 0 ? (

          <p className="empty-text">
            No interview questions available
          </p>

        ) : (

          <ul>

            {
              questions.map((question, index) => (

                <li key={index}>

                  {typeof question === "object"
                    ? question.question || JSON.stringify(question)
                    : question
                  }

                </li>

              ))
            }

          </ul>

        )
      }



      <style>{`

        .interview-box {

          background:#111827;
          padding:25px;
          border-radius:16px;
          margin-top:25px;
          color:white;
          box-shadow:0 8px 25px rgba(0,0,0,0.25);

        }


        .interview-box h2 {

          font-size:22px;
          margin-bottom:20px;
          color:#60a5fa;

        }


        .interview-box ul {

          list-style:none;
          padding:0;
          margin:0;

        }


        .interview-box li {

          background:#1f2937;
          padding:15px 18px;
          margin-bottom:12px;
          border-radius:10px;
          font-size:16px;
          line-height:1.5;
          transition:0.3s ease;

        }


        .interview-box li:hover {

          transform:translateX(6px);
          background:#374151;

        }


        .interview-box li::before {

          content:"💡";
          margin-right:12px;

        }


        .empty-text {

          color:#9ca3af;
          font-size:16px;

        }


      `}</style>


    </div>

  );

}


export default InterviewQuestions;