import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {

  const [showDropdown, setShowDropdown] = useState(false);

  return (

    <nav>

      <h2>AI Career Copilot</h2>

      <div className="nav-links">

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/resume"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          Resume
        </NavLink>

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/career-chat"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          Career Chat
        </NavLink>

        <div
          className="dropdown-container"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >

          <button className="dropdown-btn">

            🚀 Modules ▼

          </button>

          {

            showDropdown && (

              <div className="dropdown-menu">

                <NavLink to="/resume-analyzer">
                  📄 Resume Analyzer
                </NavLink>

                <NavLink to="/resume-builder">
                  📝 Resume Builder
                </NavLink>

                <NavLink to="/job-recommendation">
                  💼 Job Recommendation
                </NavLink>

                <NavLink to="/saved-jobs">
                  ❤️ Saved Jobs
                </NavLink>

                <NavLink to="/dsa">
                  📚 DSA Tracker
                </NavLink>

                <NavLink to="/placement-tracker">
                  🏢 Placement Tracker
                </NavLink>

                <NavLink to="/interview-scheduler">
                  📅 Interview Scheduler
                </NavLink>

                <NavLink to="/interview">
                  🎤 Mock Interview
                </NavLink>

              </div>

            )

          }

        </div>

      </div>

    </nav>

  );

}

export default Navbar;