import { useEffect, useState } from "react";
import { updateStreak } from "../../utils/streak";
import "../../styles/StreakCard.css";
import { addXP } from "../../utils/xpSystem";
import { addNotification } from "../../utils/notificationSystem";

function StreakCard() {

  const [data, setData] = useState({
    streak: 0,
    lastLogin: ""
  });

  useEffect(() => {

    const streakData = updateStreak();

    setData(streakData);

    if(streakData.newDay){

        addXP(10);

        addNotification(
          "🔥 Daily Streak Updated! +10 XP"
        );

    }

  }, []);

  return (

    <div className="streak-card">

      <h2>🔥 Daily Streak</h2>

      <h1>{data.streak} Days</h1>

      <p>
        Last Active
      </p>

      <strong>
        {data.lastLogin}
      </strong>

    </div>

  );

}

export default StreakCard;