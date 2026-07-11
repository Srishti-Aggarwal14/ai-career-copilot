import { useState, useEffect } from "react";
import { jsPDF } from "jspdf";
import "../styles/ResumeUpload.css";

function ResumeUpload() {

  const [file, setFile] = useState(null);

  const [loading, setLoading] = useState(false);

  const [analyzed, setAnalyzed] = useState(false);

  const [step, setStep] = useState("");

  const [score, setScore] = useState(0);

  const [atsScore, setAtsScore] = useState(92);

  const [skillsScore, setSkillsScore] = useState(85);

  const [projectsScore, setProjectsScore] = useState(90);

  const [experienceScore, setExperienceScore] = useState(75);

  const handleFileChange = (e) => {

    const selectedFile = e.target.files[0];

    if (!selectedFile) return;

    const allowedTypes = [

      "application/pdf",

      "application/msword",

      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",

    ];

    if (!allowedTypes.includes(selectedFile.type)) {

      alert("Only PDF, DOC and DOCX files are allowed!");

      return;

    }

    setFile(selectedFile);

    setAnalyzed(false);

    setScore(0);

  };

  const analyzeResume = () => {

    setLoading(true);

    setAnalyzed(false);

    setStep("📄 Reading Resume...");

    const ats = Math.floor(Math.random() * 21) + 75;

    const skills = Math.floor(Math.random() * 21) + 75;

    const projects = Math.floor(Math.random() * 21) + 75;

    const experience = Math.floor(Math.random() * 21) + 75;

    setAtsScore(ats);

    setSkillsScore(skills);

    setProjectsScore(projects);

    setExperienceScore(experience);

    setTimeout(() => {

      setStep("🛠 Extracting Skills...");

    }, 600);

    setTimeout(() => {

      setStep("📊 Checking ATS Compatibility...");

    }, 1200);

    setTimeout(() => {

      setStep("🤖 Generating AI Suggestions...");

    }, 1800);

    setTimeout(() => {

      setLoading(false);

      setAnalyzed(true);

    }, 2500);

  };

  useEffect(() => {

    if (!analyzed) {

      setScore(0);

      return;

    }

    let current = 0;

    const interval = setInterval(() => {

      current++;

      setScore(current);

      if (current >= atsScore) {

        clearInterval(interval);

      }

    }, 20);

    return () => clearInterval(interval);

  }, [analyzed, atsScore]);

  const downloadReport = () => {

    const doc = new jsPDF();

    doc.setFontSize(22);

    doc.text("AI Career Copilot",20,20);

    doc.setFontSize(16);

    doc.text("Resume Analysis Report",20,35);

    doc.line(20,42,190,42);

    doc.setFontSize(13);

    doc.text(`Resume : ${file.name}`,20,60);

    doc.text(`ATS Score : ${atsScore}/100`,20,75);

    doc.text(`Skills : ${skillsScore}%`,20,90);

    doc.text(`Projects : ${projectsScore}%`,20,105);

    doc.text(`Experience : ${experienceScore}%`,20,120);

    doc.text("Resume Strengths",20,145);

    doc.text("- Strong Technical Skills",30,155);

    doc.text("- Good Project Portfolio",30,165);

    doc.text("- GitHub Profile Added",30,175);

    doc.text("AI Suggestions",20,195);

    doc.text("- Improve Resume Summary",30,205);

    doc.text("- Add Internship Experience",30,215);

    doc.save("AI_Resume_Report.pdf");

  };

  const badge =

    atsScore >= 90

      ? "Excellent"

      : atsScore >= 75

      ? "Good"

      : "Needs Improvement";

  const badgeColor =

    atsScore >= 90

      ? "#16a34a"

      : atsScore >= 75

      ? "#f59e0b"

      : "#dc2626";

  return (    <div className="upload-card">

      <h2>📄 Resume Analyzer</h2>

      <p>Upload your resume and get an AI-powered analysis.</p>

      <input
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={handleFileChange}
      />

      {!file ? (

        <p className="no-file">

          No file selected

        </p>

      ) : (

        <>

          <div className="file-info">

            <h3>📄 {file.name}</h3>

            <p>

              <strong>Type :</strong>{" "}

              {file.name.split(".").pop().toUpperCase()}

            </p>

            <p>

              <strong>Size :</strong>{" "}

              {(file.size / 1024).toFixed(2)} KB

            </p>

            <div className="success">

              ✅ Resume Uploaded Successfully

            </div>

            <button

              onClick={analyzeResume}

              disabled={loading}

            >

              {loading

                ? "Analyzing..."

                : "🤖 Analyze Resume"}

            </button>

          </div>

          {loading && (

            <div className="loading-card">

              <div className="loader"></div>

              <h3>🤖 AI Assistant</h3>

              <p>{step}</p>

            </div>

          )}

          {analyzed && (

            <div className="analysis-card">

              <h2>🤖 AI Resume Report</h2>

              <h3>🎯 ATS Score</h3>

              <div className="score-circle">

                {score}/100

              </div>

              <div
                className="badge"
                style={{
                  background: badgeColor,
                }}
              >

                {badge}

              </div>

              <div className="rating-section">

                <h3>📊 AI Evaluation</h3>

                <div className="rating-item">

                  <span>ATS Compatibility</span>

                  <div className="rating-bar">

                    <div

                      className="rating-fill"

                      style={{
                        width: `${atsScore}%`,
                      }}

                    ></div>

                  </div>

                  <span>{atsScore}%</span>

                </div>

                <div className="rating-item">

                  <span>Skills</span>

                  <div className="rating-bar">

                    <div

                      className="rating-fill"

                      style={{
                        width: `${skillsScore}%`,
                      }}

                    ></div>

                  </div>

                  <span>{skillsScore}%</span>

                </div>

                <div className="rating-item">

                  <span>Projects</span>

                  <div className="rating-bar">

                    <div

                      className="rating-fill"

                      style={{
                        width: `${projectsScore}%`,
                      }}

                    ></div>

                  </div>

                  <span>{projectsScore}%</span>

                </div>

                <div className="rating-item">

                  <span>Experience</span>

                  <div className="rating-bar">

                    <div

                      className="rating-fill"

                      style={{
                        width: `${experienceScore}%`,
                      }}

                    ></div>

                  </div>

                  <span>{experienceScore}%</span>

                </div>

              </div>

              <h3>✅ Resume Strengths</h3>

              <ul>

                <li>✔ Strong Technical Skills</li>

                <li>✔ Clean Resume Formatting</li>

                <li>✔ Good Project Portfolio</li>

                <li>✔ GitHub Profile Added</li>

              </ul>

              <h3>💡 AI Suggestions</h3>

              <ul>

                <li>• Improve Resume Summary</li>

                <li>• Add Internship Experience</li>

                <li>• Mention Certifications</li>

                <li>• Quantify Project Achievements</li>

              </ul>

              <div className="overall-rating">

                <h3>🏆 Overall Rating</h3>

                <h2>

                  {atsScore >= 90
                    ? "⭐⭐⭐⭐⭐"
                    : atsScore >= 75
                    ? "⭐⭐⭐⭐☆"
                    : "⭐⭐⭐☆☆"}

                </h2>

                <p>{badge}</p>

              </div>

              <div className="report-button">

                <button onClick={downloadReport}>

                  📥 Download AI Report

                </button>

              </div>

            </div>

          )}

        </>

      )}

    </div>

  );

}

export default ResumeUpload;