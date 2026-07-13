import "./ActivityCard.css";

const activities = [

  {
    icon: "📄",
    title: "Resume Uploaded",
    time: "Today"
  },

  {
    icon: "🎤",
    title: "Mock Interview Completed",
    time: "Yesterday"
  },

  {
    icon: "💼",
    title: "Applied to Microsoft",
    time: "2 days ago"
  },

  {
    icon: "🏆",
    title: "Solved 10 LeetCode Problems",
    time: "3 days ago"
  }

];

function ActivityCard() {

  return (

    <div className="activity-card">

      <h2>🕒 Recent Activity</h2>

      {

        activities.map((item,index)=>(

          <div
            key={index}
            className="activity-item"
          >

            <div className="activity-icon">

              {item.icon}

            </div>

            <div>

              <h4>{item.title}</h4>

              <span>{item.time}</span>

            </div>

          </div>

        ))

      }

    </div>

  );

}

export default ActivityCard;