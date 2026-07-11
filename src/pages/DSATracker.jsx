import { useState } from "react";

function DSATracker() {

    const [solved, setSolved] = useState(0);

    return (

        <div>

            <h1>💻 DSA Tracker</h1>

            <h2>Solved Questions</h2>

            <h1>{solved}</h1>

            <button onClick={() => setSolved(solved + 1)}>

                Solve One Question

            </button>

        </div>

    );

}

export default DSATracker;