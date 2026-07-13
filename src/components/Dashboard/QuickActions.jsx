import { Link } from "react-router-dom";
import "./QuickActions.css";

const actions = [
  {
    title: "Resume Analyzer",
    icon: "📄",
    link: "/resume-analyzer",
  },
  {
    title: "Mock Interview",
    icon: "🎤",
    link: "/interview",
  },
  {
    title: "Job Recommendation",
    icon: "💼",
    link: "/job-recommendation",
  },
  {
    title: "Interview Scheduler",
    icon: "📅",
    link: "/interview-scheduler",
  },
  {
    title: "DSA Tracker",
    icon: "📈",
    link: "/dsa",
  },
  {
    title: "Career Chat",
    icon: "🤖",
    link: "/career-chat",
  },
];

function QuickActions() {
  return (
    <div className="quick-actions">

      <h2>⚡ Quick Actions</h2>

      <div className="quick-grid">

        {actions.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            className="quick-card"
          >
            <div className="quick-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>
          </Link>
        ))}

      </div>

    </div>
  );
}

export default QuickActions;