import { useParams, useLocation, useNavigate } from "react-router-dom";
import resumes from "../data/resumes";

function Resume() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const resume = resumes.find(
    (item) => item.id === Number(id)
  );

  // If an invalid ID is entered
  if (!resume) {
    return (
      <div
        style={{
          textAlign: "center",
          marginTop: "100px",
        }}
      >
        <h1>❌ Resume Not Found</h1>

        <button onClick={() => navigate("/")}>
          🏠 Back to Home
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "calc(100vh - 90px)",
        background: "#f4f7fc",
        padding: "30px",
      }}
    >
      <div
        style={{
          width: "450px",
          background: "#fff",
          borderRadius: "15px",
          padding: "30px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.15)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "34px",
            marginBottom: "20px",
            letterSpacing: "0",
          }}
        >
          📄 Resume Details
        </h1>

        <hr />

        <div
          style={{
            textAlign: "center",
            margin: "25px 0",
          }}
        >
          <h3>Resume Number</h3>

          <h1
            style={{
              color: "#2563eb",
              fontSize: "48px",
              margin: "10px 0",
            }}
          >
            {resume.id}
          </h1>
        </div>

        <div
          style={{
            background: "#f8f9fa",
            padding: "20px",
            borderRadius: "10px",
            lineHeight: "2",
          }}
        >
          <p>
            <strong>👤 Candidate:</strong> {resume.name}
          </p>

          <p>
            <strong>📌 Status:</strong> {resume.status}
          </p>

          <p>
            <strong>💼 Experience:</strong> {resume.experience}
          </p>
        </div>

        <div
          style={{
            marginTop: "25px",
          }}
        >
          <h3>Current Path</h3>

          <p
            style={{
              background: "#eef3ff",
              padding: "10px",
              borderRadius: "8px",
              color: "#2563eb",
              fontWeight: "bold",
              textAlign: "center",
              width: "auto",
              margin: "10px 0",
            }}
          >
            {location.pathname}
          </p>
        </div>

        <div
          style={{
            textAlign: "center",
            marginTop: "30px",
          }}
        >
          <button onClick={() => navigate("/")}>
            🏠 Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default Resume;