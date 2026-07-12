import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import jobs from "../data/jobs";
import "../styles/JobRecommendation.css";

function JobRecommendation() {

  const [skill, setSkill] = useState("");

  const [category, setCategory] = useState("All");

  const [sort, setSort] = useState("");

  const [savedJobs, setSavedJobs] = useState(() => {

    const data = localStorage.getItem("savedJobs");

    return data ? JSON.parse(data) : [];

  });

  useEffect(() => {

    localStorage.setItem(

      "savedJobs",

      JSON.stringify(savedJobs)

    );

  }, [savedJobs]);

  const saveJob = (id) => {

    if (!savedJobs.includes(id)) {

      setSavedJobs([...savedJobs, id]);

    }

  };

  let filteredJobs = jobs.filter((job) =>

    job.skills.some((item) =>

      item.toLowerCase().includes(skill.toLowerCase())

    )

  );

  if (category !== "All") {

    filteredJobs = filteredJobs.filter(

      (job) => job.category === category

    );

  }

  if (sort === "high") {

    filteredJobs.sort((a, b) => b.match - a.match);

  }

  if (sort === "low") {

    filteredJobs.sort((a, b) => a.match - b.match);

  }

  return (

    <div className="job-page">

      <h1>

        💼 AI Job Recommendation

      </h1>

      <p>

        Discover jobs based on your skills.

      </p>

      <div className="filters">

        <input

          type="text"

          placeholder="Search Skill..."

          value={skill}

          onChange={(e) =>

            setSkill(e.target.value)

          }

        />

        <select

          value={category}

          onChange={(e) =>

            setCategory(e.target.value)

          }

        >

          <option>All</option>

          <option>Frontend</option>

          <option>Backend</option>

          <option>Artificial Intelligence</option>

          <option>Data Science</option>

          <option>Full Stack</option>

          <option>Cloud</option>

        </select>

        <select

          value={sort}

          onChange={(e) =>

            setSort(e.target.value)

          }

        >

          <option value="">

            Sort By

          </option>

          <option value="high">

            Highest Match

          </option>

          <option value="low">

            Lowest Match

          </option>

        </select>

      </div>

      <div className="job-container">

        {

          filteredJobs.length === 0

            ?

            (

              <h2 className="empty">

                ❌ No Jobs Found

              </h2>

            )

            :

            (

              filteredJobs.map((job) => (

                <div

                  className="job-card"

                  key={job.id}

                >

                  <div className="job-top">

                    <h2>

                      {job.logo} {job.title}

                    </h2>

                    <span

                      className={

                        job.match >= 90

                          ? "badge excellent"

                          : job.match >= 75

                          ? "badge good"

                          : "badge average"

                      }

                    >

                      {

                        job.match >= 90

                          ? "🟢 Excellent Match"

                          : job.match >= 75

                          ? "🟡 Good Match"

                          : "🔴 Needs Improvement"

                      }

                    </span>

                  </div>

                  <div className="match-score">

                    <p>

                      🤖 AI Match Score

                    </p>

                    <h1>

                      {job.match}%

                    </h1>

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

                  <p>

                    <strong>

                      📂 Category :

                    </strong>

                    {job.category}

                  </p>

                  <p>

                    <strong>

                      🧠 Skills :

                    </strong>

                    {job.skills.join(", ")}

                  </p>

                  <div className="job-buttons">

                    <Link

                      to={`/job/${job.id}`}

                    >

                      <button>

                        🚀 View Details

                      </button>

                    </Link>

                    <button

                      onClick={() =>

                        saveJob(job.id)

                      }

                      disabled={

                        savedJobs.includes(job.id)

                      }

                      className={

                        savedJobs.includes(job.id)

                          ? "saved"

                          : ""

                      }

                    >

                      {

                        savedJobs.includes(job.id)

                          ? "❤️ Saved"

                          : "🤍 Save"

                      }

                    </button>

                  </div>

                </div>

              ))

            )

        }

      </div>

    </div>

  );

}

export default JobRecommendation;