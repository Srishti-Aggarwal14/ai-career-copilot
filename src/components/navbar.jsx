import { Link } from "react-router-dom";

function Navbar() {
  return (

    <nav>

      <h2>AI Career Copilot</h2>

      <Link to="/">Home</Link>

      {" | "}

      <Link to="/resume">Resume</Link>

      {" | "}

      <Link to="/interview">Interview</Link>

      {" | "}

      <Link to="/dashboard">Dashboard</Link>

      {" | "}

      <Link to="/career-chat">Career Chat</Link>

      {" | "}

      <Link to="/dsa">DSA Tracker</Link>

    </nav>

  );
}

export default Navbar;