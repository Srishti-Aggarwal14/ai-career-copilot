import { useState, useEffect, useMemo } from "react";
import placementsData from "../data/placements";
import "../styles/PlacementTracker.css";

function PlacementTracker() {

  const [placements, setPlacements] = useState(() => {

    const saved = localStorage.getItem("placements");

    return saved

      ? JSON.parse(saved)

      : placementsData;

  });

  const [search, setSearch] = useState("");

  const [filterStatus, setFilterStatus] = useState("All");

  const [showForm, setShowForm] = useState(false);

  const [newCompany, setNewCompany] = useState({

    company: "",

    role: "",

    location: "",

    date: "",

    interview: "",

    status: "Applied",

    logo: "🏢"

  });

  useEffect(() => {

    localStorage.setItem(

      "placements",

      JSON.stringify(placements)

    );

  }, [placements]);

  const handleStatusChange = (id, status) => {

    const updated = placements.map((company) =>

      company.id === id

        ? {

            ...company,

            status,

          }

        : company

    );

    setPlacements(updated);

  };

  const deleteCompany = (id) => {

    const updated = placements.filter(

      (company) =>

        company.id !== id

    );

    setPlacements(updated);

  };

  const addCompany = () => {

    if (

      !newCompany.company ||

      !newCompany.role ||

      !newCompany.location

    ) {

      alert("Please fill all fields.");

      return;

    }

    const company = {

      ...newCompany,

      id: Date.now(),

    };

    setPlacements([

      ...placements,

      company,

    ]);

    setNewCompany({

      company: "",

      role: "",

      location: "",

      date: "",

      interview: "",

      status: "Applied",

      logo: "🏢"

    });

    setShowForm(false);

  };  const applied = placements.filter(

    (company) => company.status === "Applied"

  ).length;

  const oa = placements.filter(

    (company) => company.status === "OA Cleared"

  ).length;

  const interview = placements.filter(

    (company) => company.status === "Interview"

  ).length;

  const offer = placements.filter(

    (company) => company.status === "Offer"

  ).length;

  const rejected = placements.filter(

    (company) => company.status === "Rejected"

  ).length;

  const progress = Math.round(

    ((oa + interview + offer) /

      Math.max(placements.length, 1)) *

      100

  );

  const filteredPlacements = useMemo(() => {

    return placements.filter((company) => {

      const matchesSearch =

        company.company

          .toLowerCase()

          .includes(

            search.toLowerCase()

          );

      const matchesStatus =

        filterStatus === "All"

          ? true

          : company.status ===

            filterStatus;

      return (

        matchesSearch &&

        matchesStatus

      );

    });

  }, [

    placements,

    search,

    filterStatus,

  ]);

  const upcomingInterviews = placements.filter(

    (company) =>

      company.status === "Interview" ||

      company.status === "OA Cleared"

  );

  return (

    <div className="placement-page">

      <h1>

        🏢 Placement Tracker

      </h1>

      <div className="stats">

        <div className="stat-card">

          <h2>{placements.length}</h2>

          <p>Total Applications</p>

        </div>

        <div className="stat-card">

          <h2>{interview}</h2>

          <p>Interviews</p>

        </div>

        <div className="stat-card">

          <h2>{offer}</h2>

          <p>Offers</p>

        </div>

        <div className="stat-card">

          <h2>{rejected}</h2>

          <p>Rejected</p>

        </div>

        <div className="stat-card">

          <h2>{progress}%</h2>

          <p>Placement Readiness</p>

        </div>

      </div>

      <h3>

        Overall Placement Progress

      </h3>

      <div className="progress-bar">

        <div

          className="progress-fill"

          style={{

            width: `${progress}%`

          }}

        >

          {progress}%

        </div>

      </div>

      <div className="placement-controls">

        <input

          type="text"

          placeholder="🔍 Search Company..."

          value={search}

          onChange={(e) =>

            setSearch(

              e.target.value

            )

          }

        />

        <select

          value={filterStatus}

          onChange={(e) =>

            setFilterStatus(

              e.target.value

            )

          }

        >

          <option>All</option>

          <option>Applied</option>

          <option>OA Cleared</option>

          <option>Interview</option>

          <option>Offer</option>

          <option>Rejected</option>

        </select>

        <button

          className="add-btn"

          onClick={() =>

            setShowForm(true)

          }

        >

          ➕ Add Application

        </button>

      </div>

      {

        showForm && (

          <div className="add-form">

            <h2>

              Add New Application

            </h2>            <input

              type="text"

              placeholder="Company"

              value={newCompany.company}

              onChange={(e) =>

                setNewCompany({

                  ...newCompany,

                  company: e.target.value,

                })

              }

            />

            <input

              type="text"

              placeholder="Role"

              value={newCompany.role}

              onChange={(e) =>

                setNewCompany({

                  ...newCompany,

                  role: e.target.value,

                })

              }

            />

            <input

              type="text"

              placeholder="Location"

              value={newCompany.location}

              onChange={(e) =>

                setNewCompany({

                  ...newCompany,

                  location: e.target.value,

                })

              }

            />

            <input

              type="text"

              placeholder="Applied Date"

              value={newCompany.date}

              onChange={(e) =>

                setNewCompany({

                  ...newCompany,

                  date: e.target.value,

                })

              }

            />

            <input

              type="text"

              placeholder="Interview Date"

              value={newCompany.interview}

              onChange={(e) =>

                setNewCompany({

                  ...newCompany,

                  interview: e.target.value,

                })

              }

            />

            <select

              value={newCompany.status}

              onChange={(e) =>

                setNewCompany({

                  ...newCompany,

                  status: e.target.value,

                })

              }

            >

              <option>Applied</option>

              <option>OA Cleared</option>

              <option>Interview</option>

              <option>Offer</option>

              <option>Rejected</option>

            </select>

            <div className="form-buttons">

              <button onClick={addCompany}>

                ✅ Add

              </button>

              <button

                onClick={() =>

                  setShowForm(false)

                }

              >

                ❌ Cancel

              </button>

            </div>

          </div>

        )

      }

      <div className="upcoming-section">

        <h2>

          📅 Upcoming Interviews

        </h2>

        {

          upcomingInterviews.length === 0 ? (

            <p>

              No upcoming interviews.

            </p>

          ) : (

            upcomingInterviews.map((company) => (

              <div

                className="upcoming-card"

                key={company.id}

              >

                <h3>

                  {company.logo} {company.company}

                </h3>

                <p>

                  {company.role}

                </p>

                <span>

                  {company.interview}

                </span>

              </div>

            ))

          )

        }

      </div>

      <div className="ai-box">

        <h2>

          🤖 AI Suggestions

        </h2>

        <ul>

          <li>

            ✔ Complete OA for Microsoft

          </li>

          <li>

            ✔ Prepare DSA before Amazon Interview

          </li>

          <li>

            ✔ Follow up on Google application

          </li>

          <li>

            ✔ Keep Resume updated weekly

          </li>

        </ul>

      </div>

      <h2>

        💼 Applications

      </h2>

      <div className="placement-grid">        {

          filteredPlacements.map((company) => (

            <div

              className="placement-card"

              key={company.id}

            >

              <div className="company-header">

                <h2>

                  {company.logo} {company.company}

                </h2>

                <button

                  className="delete-btn"

                  onClick={() =>

                    deleteCompany(company.id)

                  }

                >

                  🗑

                </button>

              </div>

              <p>

                <strong>

                  💼 Role :

                </strong>

                {" "}

                {company.role}

              </p>

              <p>

                <strong>

                  📍 Location :

                </strong>

                {" "}

                {company.location}

              </p>

              <p>

                <strong>

                  📅 Applied :

                </strong>

                {" "}

                {company.date}

              </p>

              <p>

                <strong>

                  🎤 Interview :

                </strong>

                {" "}

                {company.interview}

              </p>

              <h3

                className={`status-badge ${company.status

                  .replace(/\s/g, "")

                  .toLowerCase()}`}

              >

                {company.status}

              </h3>

              <select

                className={company.status

                  .replace(/\s/g, "")

                  .toLowerCase()}

                value={company.status}

                onChange={(e) =>

                  handleStatusChange(

                    company.id,

                    e.target.value

                  )

                }

              >

                <option>

                  Applied

                </option>

                <option>

                  OA Cleared

                </option>

                <option>

                  Interview

                </option>

                <option>

                  Offer

                </option>

                <option>

                  Rejected

                </option>

              </select>

              <div className="timeline">

                <div

                  className={

                    company.status === "Applied" ||

                    company.status === "OA Cleared" ||

                    company.status === "Interview" ||

                    company.status === "Offer"

                      ? "step active"

                      : "step"

                  }

                >

                  Applied

                </div>

                <div

                  className={

                    company.status === "OA Cleared" ||

                    company.status === "Interview" ||

                    company.status === "Offer"

                      ? "step active"

                      : "step"

                  }

                >

                  OA

                </div>

                <div

                  className={

                    company.status === "Interview" ||

                    company.status === "Offer"

                      ? "step active"

                      : "step"

                  }

                >

                  Interview

                </div>

                <div

                  className={

                    company.status === "Offer"

                      ? "step active"

                      : "step"

                  }

                >

                  Offer

                </div>

              </div>

            </div>

          ))

        }      </div>

      <div className="placement-footer">

        <h2>

          📈 Placement Summary

        </h2>

        <p>

          Total Applications :

          <strong>

            {" "}

            {placements.length}

          </strong>

        </p>

        <p>

          Current Progress :

          <strong>

            {" "}

            {progress}%

          </strong>

        </p>

        <p>

          Offers Received :

          <strong>

            {" "}

            {offer}

          </strong>

        </p>

        <p>

          Best Strategy :

          <strong>

            {" "}

            Keep applying consistently and practice DSA daily.

          </strong>

        </p>

      </div>

    </div>

  );

}

export default PlacementTracker;