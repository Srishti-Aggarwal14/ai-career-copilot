import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>AI Career Copilot</h2>

      <div>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>

        {" | "}

        <NavLink
          to="/resume"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Resume
        </NavLink>

        {" | "}

        <NavLink
          to="/interview"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Interview
        </NavLink>

        {" | "}

        <NavLink
          to="/dashboard"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Dashboard
        </NavLink>

        {" | "}

        <NavLink
          to="/career-chat"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Career Chat
        </NavLink>

        {" | "}

        <NavLink
          to="/dsa"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          DSA Tracker
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;