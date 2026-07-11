import { useState } from "react";

function Interview() {

    const [status, setStatus] = useState(0);

    function handleInterview() {

        if (status === 0) {

            setStatus(1);

        }

        else if (status === 1) {

            setStatus(2);

        }

        else {

            setStatus(0);

        }

    }

    return (

        <section>

            <h2>

                {status === 0 && "Interview Not Started"}

                {status === 1 && "Interview Started 🎤"}

                {status === 2 && "Interview Completed ✅"}

            </h2>

            <button onClick={handleInterview}>

                {status === 0 && "Start Interview"}

                {status === 1 && "End Interview"}

                {status === 2 && "Restart"}

            </button>

        </section>

    );

}

export default Interview;