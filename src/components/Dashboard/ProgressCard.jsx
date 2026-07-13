import "./ProgressCard.css";

function ProgressCard({ title, value, color }) {
  return (
    <div className="progress-card">

      <div className="progress-header">
        <h3>{title}</h3>
        <span>{value}%</span>
      </div>

      <div className="progress-bar">

        <div
          className="progress-fill"
          style={{
            width: `${value}%`,
            background: color
          }}
        ></div>

      </div>

    </div>
  );
}

export default ProgressCard;