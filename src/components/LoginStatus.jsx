import { useState } from "react";

function ResumeStatus() {

    const [uploaded, setUploaded] = useState(false);

    return (

        <section>

            <h2>

                {uploaded

                    ? "Resume Uploaded Successfully ✅"

                    : "Please Upload Resume 📄"}

            </h2>

            <button onClick={() => setUploaded(!uploaded)}>

                {uploaded ? "Remove Resume" : "Upload Resume"}

            </button>

        </section>

    );

}

export default ResumeStatus;