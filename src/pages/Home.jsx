import Hero from "../components/Hero";
import Features from "../components/Features";
import { Link } from "react-router-dom";
import resumes from "../data/resumes";

function Home() {
  return (
    <>
      <Hero />

      <Features />

      <section
        style={{
          marginTop: "80px",
          textAlign: "center",
        }}
      >
        <h2>📄 Resume List</h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
            marginTop: "30px",
          }}
        >
          {resumes.map((resume) => (
            <div
              key={resume.id}
              style={{
                width: "250px",
                background: "#fff",
                padding: "20px",
                borderRadius: "12px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
              }}
            >
              <h3>{resume.name}</h3>

              <p
                style={{
                  width: "auto",
                  margin: "15px 0",
                }}
              >
                ID: {resume.id}
              </p>

              <Link to={`/resume/${resume.id}`}>
                <button>View Resume</button>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;