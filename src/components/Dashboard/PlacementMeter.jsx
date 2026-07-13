import "../../styles/PlacementMeter.css";

function PlacementMeter({

    resume,

    dsa,

    interview,

    projects

}) {

    const overall = Math.round(

        (resume + dsa + interview + projects) / 4

    );

    return (

        <div className="placement-card">

            <h2>

                🎯 Placement Readiness

            </h2>

            <div className="meter">

                <div

                    className="meter-fill"

                    style={{

                        width: `${overall}%`

                    }}

                ></div>

            </div>

            <h1>

                {overall}%

            </h1>

            <p>

                Resume : {resume}%

            </p>

            <p>

                DSA : {dsa}%

            </p>

            <p>

                Interview : {interview}%

            </p>

            <p>

                Projects : {projects}%

            </p>

            <h3>

                {

                    overall>=85

                    ? "🟢 Ready"

                    : overall>=70

                    ? "🟡 Almost Ready"

                    : "🔴 Keep Practicing"

                }

            </h3>

        </div>

    );

}

export default PlacementMeter;