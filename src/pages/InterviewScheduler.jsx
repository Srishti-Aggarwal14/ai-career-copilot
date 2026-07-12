import { useState, useEffect, useMemo } from "react";
import interviewsData from "../data/interviews";
import "../styles/InterviewScheduler.css";

function InterviewScheduler() {

  const [interviews, setInterviews] = useState(() => {

    const saved = localStorage.getItem("interviews");

    return saved

      ? JSON.parse(saved)

      : interviewsData;

  });

  const [search, setSearch] = useState("");

  const [filterStatus, setFilterStatus] = useState("All");

  const [showForm, setShowForm] = useState(false);

  const [newInterview, setNewInterview] = useState({

    company: "",

    role: "",

    date: "",

    time: "",

    mode: "Online",

    round: "",

    meetingLink: "",

    status: "Upcoming"

  });

  useEffect(() => {

    localStorage.setItem(

      "interviews",

      JSON.stringify(interviews)

    );

  }, [interviews]);

  const handleStatusChange = (id, status) => {

    const updated = interviews.map((item) =>

      item.id === id

        ? {

            ...item,

            status

          }

        : item

    );

    setInterviews(updated);

  };

  const deleteInterview = (id) => {

    const updated = interviews.filter(

      (item) => item.id !== id

    );

    setInterviews(updated);

  };

  const addInterview = () => {

    if (

      !newInterview.company ||

      !newInterview.role ||

      !newInterview.date ||

      !newInterview.time

    ) {

      alert("Please fill all required fields.");

      return;

    }

    const interview = {

      id: Date.now(),

      ...newInterview

    };

    setInterviews([

      ...interviews,

      interview

    ]);

    setNewInterview({

      company: "",

      role: "",

      date: "",

      time: "",

      mode: "Online",

      round: "",

      meetingLink: "",

      status: "Upcoming"

    });

    setShowForm(false);

  };  const upcoming = interviews.filter(

    (item) =>

      item.status === "Upcoming"

  ).length;

  const scheduled = interviews.filter(

    (item) =>

      item.status === "Scheduled"

  ).length;

  const completed = interviews.filter(

    (item) =>

      item.status === "Completed"

  ).length;

  const cancelled = interviews.filter(

    (item) =>

      item.status === "Cancelled"

  ).length;

  const progress = Math.round(

    (

      (completed /

      Math.max(interviews.length, 1))

    ) * 100

  );

  const filteredInterviews = useMemo(() => {

    return interviews.filter((item) => {

      const matchesSearch =

        item.company

          .toLowerCase()

          .includes(

            search.toLowerCase()

          );

      const matchesStatus =

        filterStatus === "All"

          ? true

          : item.status ===

            filterStatus;

      return (

        matchesSearch &&

        matchesStatus

      );

    });

  }, [

    interviews,

    search,

    filterStatus

  ]);

  return (

    <div className="interview-page">

      <h1>

        📅 Interview Scheduler

      </h1>

      <div className="interview-stats">

        <div className="interview-stat-card">

          <h2>

            {interviews.length}

          </h2>

          <p>

            Total Interviews

          </p>

        </div>

        <div className="interview-stat-card">

          <h2>

            {upcoming}

          </h2>

          <p>

            Upcoming

          </p>

        </div>

        <div className="interview-stat-card">

          <h2>

            {scheduled}

          </h2>

          <p>

            Scheduled

          </p>

        </div>

        <div className="interview-stat-card">

          <h2>

            {completed}

          </h2>

          <p>

            Completed

          </p>

        </div>

        <div className="interview-stat-card">

          <h2>

            {progress}%

          </h2>

          <p>

            Progress

          </p>

        </div>

      </div>

      <h3>

        Interview Progress

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

      <div className="interview-controls">

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

          <option>

            All

          </option>

          <option>

            Upcoming

          </option>

          <option>

            Scheduled

          </option>

          <option>

            Completed

          </option>

          <option>

            Cancelled

          </option>

        </select>

        <button

          className="add-btn"

          onClick={() =>

            setShowForm(true)

          }

        >

          ➕ Add Interview

        </button>

      </div>

      {

        showForm && (

          <div className="add-form">

            <h2>

              Add Interview

            </h2>            <input

              type="text"

              placeholder="Company"

              value={newInterview.company}

              onChange={(e) =>

                setNewInterview({

                  ...newInterview,

                  company: e.target.value,

                })

              }

            />

            <input

              type="text"

              placeholder="Role"

              value={newInterview.role}

              onChange={(e) =>

                setNewInterview({

                  ...newInterview,

                  role: e.target.value,

                })

              }

            />

            <input

              type="text"

              placeholder="Interview Date"

              value={newInterview.date}

              onChange={(e) =>

                setNewInterview({

                  ...newInterview,

                  date: e.target.value,

                })

              }

            />

            <input

              type="text"

              placeholder="Interview Time"

              value={newInterview.time}

              onChange={(e) =>

                setNewInterview({

                  ...newInterview,

                  time: e.target.value,

                })

              }

            />

            <select

              value={newInterview.mode}

              onChange={(e) =>

                setNewInterview({

                  ...newInterview,

                  mode: e.target.value,

                })

              }

            >

              <option>

                Online

              </option>

              <option>

                Offline

              </option>

            </select>

            <input

              type="text"

              placeholder="Interview Round"

              value={newInterview.round}

              onChange={(e) =>

                setNewInterview({

                  ...newInterview,

                  round: e.target.value,

                })

              }

            />

            <input

              type="text"

              placeholder="Meeting Link"

              value={newInterview.meetingLink}

              onChange={(e) =>

                setNewInterview({

                  ...newInterview,

                  meetingLink: e.target.value,

                })

              }

            />

            <select

              value={newInterview.status}

              onChange={(e) =>

                setNewInterview({

                  ...newInterview,

                  status: e.target.value,

                })

              }

            >

              <option>

                Upcoming

              </option>

              <option>

                Scheduled

              </option>

              <option>

                Completed

              </option>

              <option>

                Cancelled

              </option>

            </select>

            <div className="form-buttons">

              <button

                onClick={addInterview}

              >

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

      <div className="ai-box">

        <h2>

          🤖 AI Interview Tips

        </h2>

        <ul>

          <li>

            ✔ Revise DSA before technical rounds.

          </li>

          <li>

            ✔ Practice HR questions.

          </li>

          <li>

            ✔ Keep resume and projects ready.

          </li>

          <li>

            ✔ Test camera and microphone before online interviews.

          </li>

        </ul>

      </div>

      <h2>

        📅 Interview List

      </h2>

      <div className="interview-grid">        {

          filteredInterviews.map((item) => (

            <div

              className="interview-card"

              key={item.id}

            >

              <div className="company-header">

                <h2>

                  🏢 {item.company}

                </h2>

                <button

                  className="delete-btn"

                  onClick={() =>

                    deleteInterview(item.id)

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

                {item.role}

              </p>

              <p>

                <strong>

                  📅 Date :

                </strong>

                {" "}

                {item.date}

              </p>

              <p>

                <strong>

                  ⏰ Time :

                </strong>

                {" "}

                {item.time}

              </p>

              <p>

                <strong>

                  🎤 Round :

                </strong>

                {" "}

                {item.round}

              </p>

              <p>

                <strong>

                  📍 Mode :

                </strong>

                <span

                  className={

                    item.mode === "Online"

                      ? "online-badge"

                      : "offline-badge"

                  }

                >

                  {" "}

                  {item.mode}

                </span>

              </p>

              <p>

                <strong>

                  🔗 Meeting :

                </strong>

                {

                  item.meetingLink &&
                  item.meetingLink !== "-"

                  ? (

                    <a

                      href={item.meetingLink}

                      target="_blank"

                      rel="noreferrer"

                    >

                      Join

                    </a>

                  )

                  : (

                    " N/A"

                  )

                }

              </p>

              <h3

                className={`status-badge ${item.status
                  .replace(/\s/g, "")
                  .toLowerCase()}`}

              >

                {item.status}

              </h3>

              <select

                value={item.status}

                className={item.status
                  .replace(/\s/g, "")
                  .toLowerCase()}

                onChange={(e) =>

                  handleStatusChange(

                    item.id,

                    e.target.value

                  )

                }

              >

                <option>

                  Upcoming

                </option>

                <option>

                  Scheduled

                </option>

                <option>

                  Completed

                </option>

                <option>

                  Cancelled

                </option>

              </select>              <div className="timeline">

                <div

                  className={`step ${
                    item.status === "Upcoming" ||
                    item.status === "Scheduled" ||
                    item.status === "Completed"
                      ? "active"
                      : ""
                  }`}

                >

                  Upcoming

                </div>

                <div

                  className={`step ${
                    item.status === "Scheduled" ||
                    item.status === "Completed"
                      ? "active"
                      : ""
                  }`}

                >

                  Scheduled

                </div>

                <div

                  className={`step ${
                    item.status === "Completed"
                      ? "active"
                      : ""
                  }`}

                >

                  Completed

                </div>

              </div>

            </div>

          ))

        }

      </div>

      <div className="interview-footer">

        <h2>

          📊 Interview Summary

        </h2>

        <p>

          Total Interviews :

          <strong>

            {" "}

            {interviews.length}

          </strong>

        </p>

        <p>

          Upcoming :

          <strong>

            {" "}

            {upcoming}

          </strong>

        </p>

        <p>

          Scheduled :

          <strong>

            {" "}

            {scheduled}

          </strong>

        </p>

        <p>

          Completed :

          <strong>

            {" "}

            {completed}

          </strong>

        </p>

        <p>

          Cancelled :

          <strong>

            {" "}

            {cancelled}

          </strong>

        </p>

        <p>

          Overall Progress :

          <strong>

            {" "}

            {progress}%

          </strong>

        </p>

      </div>

    </div>

  );

}

export default InterviewScheduler;