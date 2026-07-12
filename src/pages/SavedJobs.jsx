import { useState } from "react";
import { Link } from "react-router-dom";
import jobs from "../data/jobs";
import "../styles/SavedJobs.css";

function SavedJobs() {

  const [savedJobs, setSavedJobs] = useState(() => {

    const data = localStorage.getItem("savedJobs");

    return data ? JSON.parse(data) : [];

  });

  const savedJobList = jobs.filter((job) =>
    savedJobs.includes(job.id)
  );

  const removeJob = (id) => {

    const updatedJobs = savedJobs.filter(
      (jobId) => jobId !== id
    );

    setSavedJobs(updatedJobs);

    localStorage.setItem(
      "savedJobs",
      JSON.stringify(updatedJobs)
    );

  };

  return (

    <div className="saved-page">

      <h1>

        ❤️ Saved Jobs

      </h1>

      <p className="saved-count">

        Total Saved Jobs : {savedJobList.length}

      </p>

      {

        savedJobList.length === 0

        ?

        (

          <div className="empty-state">

            <h2>

              📭 No Saved Jobs Yet

            </h2>

            <p>

              Save jobs from the Job Recommendation page.

            </p>

            <Link to="/job-recommendation">

              <button>

                💼 Explore Jobs

              </button>

            </Link>

          </div>

        )

        :

        (

          <div className="saved-container">

            {

              savedJobList.map((job)=>(

                <div

                  key={job.id}

                  className="saved-card"

                >

                  <div className="saved-top">

                    <h2>

                      {job.logo} {job.title}

                    </h2>

                    <span className="saved-match">

                      {job.match}%

                    </span>

                  </div>

                  <p>

                    <strong>

                      🏢 Company :

                    </strong>

                    {job.company}

                  </p>

                  <p>

                    <strong>

                      📍 Location :

                    </strong>

                    {job.location}

                  </p>

                  <p>

                    <strong>

                      💰 Salary :

                    </strong>

                    {job.salary}

                  </p>

                  <div className="saved-buttons">

                    <Link

                      to={`/job/${job.id}`}

                    >

                      <button>

                        View Details

                      </button>

                    </Link>

                    <button

                      className="remove"

                      onClick={() =>

                        removeJob(job.id)

                      }

                    >

                      ❌ Remove

                    </button>

                  </div>

                </div>

              ))

            }

          </div>

        )

      }

    </div>

  );

}

export default SavedJobs;