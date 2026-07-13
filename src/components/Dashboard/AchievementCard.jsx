import { getAchievements } from "../../utils/achievementSystem";

function AchievementCard() {

  const achievements =
    getAchievements();

  return (

    <div className="achievement-card">

      <h2>

        🏆 Achievements

      </h2>

      {

        achievements.length === 0 ?

        (

          <p>

            No achievements unlocked yet.

          </p>

        )

        :

        (

          achievements.map(

            (item, index) => (

              <p key={index}>

                {item}

              </p>

            )

          )

        )

      }

    </div>

  );

}

export default AchievementCard;