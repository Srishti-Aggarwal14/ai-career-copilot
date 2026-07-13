import "./SkillProgress.css";

function SkillProgress({

    title,
    score

}) {

    return (

        <div className="skill-progress">

            <div className="skill-header">

                <span>

                    {title}

                </span>

                <strong>

                    {score}%

                </strong>

            </div>

            <div className="progress-bar">

                <div

                    className="progress-fill"

                    style={{

                        width: `${score}%`

                    }}

                >

                </div>

            </div>

        </div>

    );

}

export default SkillProgress;