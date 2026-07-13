import "./XPCard.css";
import { getXPData } from "../../utils/xpSystem";

function XPCard() {

    const data = getXPData();

    const progress = data.xp % 100;
    const remaining = 100 - progress;

    return (

        <div className="xp-card">

            <h2>⭐ Level {data.level}</h2>

            <h3>🏅 Career Progress</h3>

            <p>{data.xp} XP Earned</p>

            <div className="xp-bar">

                <div
                    className="xp-fill"
                    style={{
                        width: `${progress}%`
                    }}
                ></div>

            </div>

            <p>{remaining} XP Remaining</p>

            <h4>
                {
                    data.level >= 10
                        ? "👑 AI Career Master"
                        : data.level >= 5
                        ? "🚀 Career Explorer"
                        : "🌱 Beginner"
                }
            </h4>

        </div>

    );

}

export default XPCard;