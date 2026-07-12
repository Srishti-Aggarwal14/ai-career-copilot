import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import jobs from "../data/jobs";
import placements from "../data/placements";
import interviews from "../data/interviews";
import "../styles/Dashboard.css";

function Dashboard() {

  const { user, setUser } = useContext(UserContext);

  const savedJobs = JSON.parse(
    localStorage.getItem("savedJobs")
  ) || [];

  const totalJobs = jobs.length;

  const bestMatch = Math.max(
    ...jobs.map((job) => job.match)
  );

  const totalPlacements = placements.length;

  const placementProgress = Math.round(

    (
      placements.filter(
        (item) => item.status === "Offer Received"
      ).length /

      Math.max(placements.length, 1)

    ) * 100

  );

  const upcomingInterviews = interviews.filter(

    (item) =>

      item.status === "Upcoming" ||

      item.status === "Scheduled"

  ).length;

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

        <h2>

          👋 Welcome Back

        </h2>

        <h1 className="user-name">

          {user.name}

        </h1>

      </div>

      <div className="dashboard-card">

        <p>

          <strong>

            📄 Resume :

          </strong>

          {" "}

          {user.resume}

        </p>        <div className="dashboard-progress-section">

          <strong>

            🎯 Resume Score

          </strong>

          <div className="dashboard-progress-bar">

            <div

              className="dashboard-progress-fill"

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

          <strong>

            📌 Status :

          </strong>

          {" "}

          {user.status}

        </p>

        <hr />

        <h3>

          🤖 AI Suggestions

        </h3>

        <ul>

          <li>

            ✔ Improve Resume Headline

          </li>

          <li>

            ✔ Add Projects Section

          </li>

          <li>

            ✔ Include GitHub Link

          </li>

          <li>

            ✔ Add Quantified Achievements

          </li>

          <li>

            ✔ Tailor Resume for ATS

          </li>

        </ul>

        <div className="dashboard-button-group">

          <button>

            📥 Download Resume

          </button>

          <button>

            🤖 Analyze Again

          </button>

        </div>

        <div className="switch-user">

          <button

            onClick={switchUser}

          >

            {

              user.name ===

              "Srishti Aggarwal"

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

      <h2 className="modules-heading">

        🚀 AI Career Copilot Modules

      </h2>

      <div className="feature-grid">        <Link
          to="/resume-analyzer"
          className="feature-card"
        >

          <div className="card-icon">

            📄

          </div>

          <h3>

            Resume Analyzer

          </h3>

          <p>

            ATS Score

          </p>

          <h2 className="card-number">

            {user.score}%

          </h2>

          <button>

            Open →

          </button>

        </Link>

        <Link
          to="/resume-builder"
          className="feature-card"
        >

          <div className="card-icon">

            📝

          </div>

          <h3>

            Resume Builder

          </h3>

          <p>

            Last Updated

          </p>

          <h2 className="card-number">

            Today

          </h2>

          <button>

            Open →

          </button>

        </Link>

        <Link
          to="/dsa"
          className="feature-card"
        >

          <div className="card-icon">

            📚

          </div>

          <h3>

            DSA Tracker

          </h3>

          <p>

            Solved Problems

          </p>

          <h2 className="card-number">

            73

          </h2>

          <button>

            Open →

          </button>

        </Link>

        <Link
          to="/job-recommendation"
          className="feature-card"
        >

          <div className="card-icon">

            💼

          </div>

          <h3>

            Job Recommendation

          </h3>

          <p>

            Available Jobs

          </p>

          <h2 className="card-number">

            {totalJobs}

          </h2>

          <button>

            Open →

          </button>

        </Link>

        <Link
          to="/saved-jobs"
          className="feature-card"
        >

          <div className="card-icon">

            ❤️

          </div>

          <h3>

            Saved Jobs

          </h3>

          <p>

            Saved Count

          </p>

          <h2 className="card-number">

            {savedJobs.length}

          </h2>

          <button>

            Open →

          </button>

        </Link>

        <div className="feature-card">

          <div className="card-icon">

            🤖

          </div>

          <h3>

            Highest AI Match

          </h3>

          <p>

            Best Recommendation

          </p>

          <h2 className="card-number">

            {bestMatch}%

          </h2>

          <button>

            AI Powered

          </button>

        </div>

        <Link
          to="/placement-tracker"
          className="feature-card"
        >

          <div className="card-icon">

            🏢

          </div>

          <h3>

            Placement Tracker

          </h3>

          <p>

            Progress

          </p>

          <h2 className="card-number">

            {placementProgress}%

          </h2>

          <button>

            Open →

          </button>

        </Link>

        <Link
          to="/interview-scheduler"
          className="feature-card"
        >

          <div className="card-icon">

            📅

          </div>

          <h3>

            Interview Scheduler

          </h3>

          <p>

            Upcoming Interviews

          </p>

          <h2 className="card-number">

            {upcomingInterviews}

          </h2>

          <button>

            Open →

          </button>

        </Link>

        <Link
          to="/interview"
          className="feature-card"
        >

          <div className="card-icon">

            🎤

          </div>

          <h3>

            Mock Interview

          </h3>

          <p>

            Coming Soon

          </p>

          <h2 className="card-number">

            🚀

          </h2>

          <button>

            Open →

          </button>

        </Link>

      </div>      <div className="dashboard-analytics">

        <div className="analytics-card">

          <h2>

            📊 Dashboard Analytics

          </h2>

          <p>

            Total Jobs Available :

            <strong>

              {" "}

              {totalJobs}

            </strong>

          </p>

          <p>

            Saved Jobs :

            <strong>

              {" "}

              {savedJobs.length}

            </strong>

          </p>

          <p>

            Highest AI Match :

            <strong>

              {" "}

              {bestMatch}%

            </strong>

          </p>

          <p>

            Placement Progress :

            <strong>

              {" "}

              {placementProgress}%

            </strong>

          </p>

          <p>

            Upcoming Interviews :

            <strong>

              {" "}

              {upcomingInterviews}

            </strong>

          </p>

        </div>

        <div className="analytics-card">

          <h2>

            🤖 AI Insights

          </h2>

          <ul>

            <li>

              ✔ Resume ATS Score :

              {" "}

              {user.score}%

            </li>

            <li>

              ✔ AI Match :

              {" "}

              {bestMatch}%

            </li>

            <li>

              ✔ Saved Jobs :

              {" "}

              {savedJobs.length}

            </li>

            <li>

              ✔ Placement Progress :

              {" "}

              {placementProgress}%

            </li>

            <li>

              ✔ Upcoming Interviews :

              {" "}

              {upcomingInterviews}

            </li>

            <li>

              ✔ Resume Status :

              {" "}

              {user.status}

            </li>

          </ul>

        </div>

        <div className="analytics-card">

          <h2>

            🎯 Daily Goals

          </h2>

          <ul>

            <li>

              ✅ Solve 2 DSA Problems

            </li>

            <li>

              ✅ Apply to 3 Jobs

            </li>

            <li>

              ✅ Improve Resume

            </li>

            <li>

              ✅ Practice Interview

            </li>

            <li>

              ✅ Complete One Project Task

            </li>

          </ul>

        </div>

      </div>

      <hr />      <div className="dashboard-analytics">

        <div className="analytics-card">

          <h2>

            🕒 Recent Activity

          </h2>

          <ul>

            <li>

              📄 Resume analyzed successfully

            </li>

            <li>

              ❤️ Job saved to favourites

            </li>

            <li>

              🏢 Placement Tracker updated

            </li>

            <li>

              📅 Interview scheduled

            </li>

            <li>

              📚 DSA progress synced

            </li>

          </ul>

        </div>

        <div className="analytics-card">

          <h2>

            💡 Career Tips

          </h2>

          <ul>

            <li>

              🚀 Keep your resume updated every week.

            </li>

            <li>

              💼 Apply to at least 3 jobs daily.

            </li>

            <li>

              📚 Practice DSA consistently.

            </li>

            <li>

              🎤 Give one mock interview every week.

            </li>

            <li>

              🌟 Build strong GitHub projects.

            </li>

          </ul>

        </div>

      </div>

      <hr />

      <Outlet />

    </div>

  );

}

export default Dashboard;