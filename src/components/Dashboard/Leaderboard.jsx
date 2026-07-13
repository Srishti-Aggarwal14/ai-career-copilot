import leaderboard from "../../data/leaderboard";
import "../../styles/Leaderboard.css";

function Leaderboard() {

  return (

    <div className="leaderboard-card">

      <h2>🏆 Leaderboard</h2>

      {

        leaderboard
          .sort((a, b) => b.xp - a.xp)
          .map((user, index) => (

            <div
              className="leaderboard-row"
              key={user.id}
            >

              <span>

                {

                  index === 0
                    ? "🥇"
                    : index === 1
                    ? "🥈"
                    : index === 2
                    ? "🥉"
                    : "🏅"

                }

              </span>

              <span>

                {user.name}

              </span>

              <span>

                Level {user.level}

              </span>

            </div>

          ))

      }

    </div>

  );

}

export default Leaderboard;