import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import "../styles/Dashboard.css";

function Dashboard() {

  const { user, setUser } = useContext(UserContext);

  const switchUser = () => {

    if (user.name === "Srishti Aggarwal") {

      setUser({
        name: "Rahul Sharma",
        resume: "Rahul_Resume.pdf",
        score: 86,
        status: "Reviewed ⭐",
        suggestion: "2 Suggestions Pending 📝",
      });

    }

    else {

      setUser({
        name: "Srishti Aggarwal",
        resume: "AI_Resume.pdf",
        score: 92,
        status: "Uploaded ✅",
        suggestion: "Available 🤖",
      });

    }

  };

  return (

    <div className="dashboard">

      <div className="welcome">

        <h2>👋 Welcome Back</h2>

        <h1 className="user-name">
          {user.name}
        </h1>

      </div>

      <div className="dashboard-card">

        <p>

          <strong>📄 Resume :</strong>

          {user.resume}

        </p>

        <div className="progress-section">

          <strong>🎯 Resume Score</strong>

          <div className="progress-bar">

            <div

              className="progress-fill"

              style={{

                width: `${user.score}%`,

                background:

                  user.score >= 90

                    ? "green"

                    : user.score >= 75

                    ? "orange"

                    : "red",

              }}

            ></div>

          </div>

          <p className="score">

            Score :

            <span

              style={{

                color:

                  user.score >= 90

                    ? "green"

                    : user.score >= 75

                    ? "orange"

                    : "red",

              }}

            >

              {" "}

              {user.score}/100

            </span>

          </p>

        </div>

        <h3

          className="badge"

          style={{

            color:

              user.score >= 90

                ? "green"

                : user.score >= 75

                ? "orange"

                : "red",

          }}

        >

          {

            user.score >= 90

              ? "🏆 Excellent Resume"

              : user.score >= 75

              ? "🥈 Good Resume"

              : "⚠ Needs Improvement"

          }

        </h3>

        <hr />

        <p>

          <strong>📌 Status :</strong>

          {user.status}

        </p>

        <hr />

        <h3>🤖 AI Suggestions</h3>

        <ul>

          <li>✔ Improve Resume Headline</li>

          <li>✔ Add Projects Section</li>

          <li>✔ Include GitHub Link</li>

        </ul>

        <div className="button-group">

          <button>

            📥 Download Resume

          </button>

          <button>

            🤖 Analyze Again

          </button>

        </div>

        <div className="switch-user">

          <button onClick={switchUser}>

            {

              user.name === "Srishti Aggarwal"

                ? "➡️ Switch to Rahul"

                : "➡️ Switch to Srishti"

            }

          </button>

        </div>

      </div>

      <div className="dashboard-links">

        <Link to="profile">

          👤 Profile

        </Link>

        |

        <Link to="analytics">

          📊 Analytics

        </Link>

        |

        <Link to="settings">

          ⚙ Settings

        </Link>

      </div>

      <hr />

      <Outlet />

    </div>

  );

}

export default Dashboard;


