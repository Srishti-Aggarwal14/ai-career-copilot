import "./AIInsightsCard.css";

function AIInsightsCard({ insights }) {
  return (
    <div className="ai-card">

      <h2>🤖 AI Career Insights</h2>

      <div className="ai-list">

        {insights.map((item, index) => (

          <div
            key={index}
            className="ai-item"
          >
            ✅ {item}
          </div>

        ))}

      </div>

    </div>
  );
}

export default AIInsightsCard;