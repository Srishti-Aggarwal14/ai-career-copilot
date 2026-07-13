import "./InterviewSummary.css";

function InterviewSummary({

    totalQuestions,

    answered,

    score,

    company

}) {

    return (

        <div className="interview-summary">

            <h2>🎉 Interview Completed</h2>

            <p>

                Congratulations! Here's your interview summary.

            </p>

            <div className="summary-grid">

                <div>

                    <h3>{company}</h3>

                    <span>Company</span>

                </div>

                <div>

                    <h3>{totalQuestions}</h3>

                    <span>Total Questions</span>

                </div>

                <div>

                    <h3>{answered}</h3>

                    <span>Answered</span>

                </div>

                <div>

                    <h3>{score}/10</h3>

                    <span>Overall Score</span>

                </div>

            </div>

        </div>

    );

}

export default InterviewSummary;