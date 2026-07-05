import { useState } from "react";

function ResumeForm() {

  const [resume, setResume] = useState("");
  const [uploaded, setUploaded] = useState(false);
  const [error, setError] = useState(false);
  const currentTime = new Date().toLocaleTimeString();

  return (
    <section className="resume">

      <h2>Upload Resume</h2>

      <input
        type="text"
        placeholder="Enter Resume Name"
        value={resume}
        onChange={(e) => setResume(e.target.value)}
      />

      <br /><br />

      <button
        onClick={() => {

          if (resume) {
            setUploaded(true);
            setError(false);
          } else{
            setError(true);
            setUploaded(false);
          }
        }}
      >
        Upload Resume
      </button>
      {error && (
        <p className = "error">Please enter a resume name.</p>
      )}

      {uploaded && (
        <div className = "result">
          <h3>Resume Uploaded Successfully ✅</h3>
          <p>
          <strong>Resume Name:</strong>{resume}
          </p>
          <p>
          <strong>Status:</strong>Uploaded
          </p>
          <p>
            <strong>Time:</strong>{currentTime}
          </p>
          <button
          onClick={() => {
          setResume("");
          setUploaded(false);
          setError(false);
          }}
          >
          Upload Again
          </button>
        </div>
      )}

    </section>
  );
}

export default ResumeForm;