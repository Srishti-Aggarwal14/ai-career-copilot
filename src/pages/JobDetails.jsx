import { useParams, useNavigate } from "react-router-dom";
import jobs from "../data/jobs";
import "../styles/JobDetails.css";

function JobDetails() {

  const { id } = useParams();

  const navigate = useNavigate();

  const job = jobs.find(

    (item) => item.id === Number(id)

  );

  if (!job) {

    return (

      <div className="job-details-page">

        <h1>❌ Job Not Found</h1>

        <button

          onClick={() => navigate("/job-recommendation")}

        >

          Back

        </button>

      </div>

    );

  }

  return (

    <div className="job-details-page">

      <div className="job-details-card">

        <div className="job-header">

          <h1>

            {job.logo} {job.title}

          </h1>

          <span

            className={

              job.match >= 90

                ? "badge excellent"

                : job.match >= 75

                ? "badge good"

                : "badge average"

            }

          >

            {job.match}% Match

          </span>

        </div>

        <hr />

        <p>

          <strong>🏢 Company :</strong>

          {job.company}

        </p>

        <p>

          <strong>📍 Location :</strong>

          {job.location}

        </p>

        <p>

          <strong>💰 Salary :</strong>

          {job.salary}

        </p>

        <p>

          <strong>📂 Category :</strong>

          {job.category}

        </p>

        <div className="match-box">

          <h3>

            🤖 AI Match Score

          </h3>

          <h1>

            {job.match}%

          </h1>

        </div>

        <h3>

          🧠 Required Skills

        </h3>

        <div className="skills">

          {

            job.skills.map((skill, index) => (

              <span

                key={index}

                className="skill-chip"

              >

                {skill}

              </span>

            ))

          }

        </div>

        <div className="details-buttons">

          <button>

            🚀 Apply Now

          </button>

          <button

            onClick={() =>

              navigate("/job-recommendation")

            }

          >

            ⬅ Back

          </button>

        </div>

      </div>

    </div>

  );

}

export default JobDetails;