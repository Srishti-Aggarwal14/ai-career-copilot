import "./DailyChallenge.css";
import { useNavigate } from "react-router-dom";

const challenge = {

  title: "Today's Challenge",

  xp: 50,

  tasks: [

    "Solve Two Sum",

    "Solve Valid Parentheses",

    "Revise Binary Search",

    "Attempt 1 Mock Interview"

  ]

};

function DailyChallenge(){
    const navigate = useNavigate();

    return(

        <div className="challenge-card">

            <h2>💡 {challenge.title}</h2>

            <p className="reward">

                🎁 Reward : +{challenge.xp} XP

            </p>

            <ul>

                {

                    challenge.tasks.map((item,index)=>(

                        <li key={index}>

                            ✅ {item}

                        </li>

                    ))

                }

            </ul>

            <button
  onClick={() => navigate("/dsa")}
>
  🚀 Start Challenge
</button>

        </div>

    );

}

export default DailyChallenge;