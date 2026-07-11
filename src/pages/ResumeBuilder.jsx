import { useState, useEffect } from "react";
import { jsPDF } from "jspdf";
import "../styles/ResumeBuilder.css";

function ResumeBuilder() {

  const [resume, setResume] = useState({
    name: "",
    email: "",
    experience: "",
  });

  const [photo, setPhoto] = useState(null);

  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState([]);

  const [project, setProject] = useState("");
  const [projects, setProjects] = useState([]);

  const [theme, setTheme] = useState("#2563eb");

  const [template, setTemplate] = useState("Modern");

  // ---------------- Load Saved Resume ----------------

  useEffect(() => {

    const data = localStorage.getItem("resume");

    if (data) {

      const parsed = JSON.parse(data);

      setResume(parsed.resume);

      setSkills(parsed.skills);

      setProjects(parsed.projects);

      setTheme(parsed.theme);

      setTemplate(parsed.template);

      alert("✅ Resume Loaded Successfully");

    }

  }, []);

  // ---------------- Save Resume ----------------

  useEffect(() => {

    localStorage.setItem(

      "resume",

      JSON.stringify({

        resume,

        skills,

        projects,

        theme,

        template,

      })

    );

  }, [resume, skills, projects, theme, template]);

  // ---------------- Form ----------------

  const handleChange = (e) => {

    setResume({

      ...resume,

      [e.target.name]: e.target.value,

    });

  };

  // ---------------- Photo ----------------

  const handlePhoto = (e) => {

    if (e.target.files[0]) {

      setPhoto(URL.createObjectURL(e.target.files[0]));

    }

  };

  // ---------------- Skills ----------------

  const addSkill = () => {

    if (skill.trim() === "") return;

    setSkills([...skills, skill]);

    setSkill("");

  };

  const removeSkill = (index) => {

    setSkills(

      skills.filter((_, i) => i !== index)

    );

  };

  // ---------------- AI Skills ----------------

  const suggestSkills = () => {

    setSkills([

      "React",

      "Java",

      "Python",

      "MongoDB",

      "SQL",

      "Git",

      "JavaScript",

      "Node.js",

    ]);

  };

  // ---------------- Projects ----------------

  const addProject = () => {

    if (project.trim() === "") return;

    setProjects([...projects, project]);

    setProject("");

  };

  const removeProject = (index) => {

    setProjects(

      projects.filter((_, i) => i !== index)

    );

  };

  // ---------------- AI Summary ----------------

  const summary =

    resume.name === ""

      ? "Your professional summary will appear here."

      : `${resume.name} is a passionate Computer Science student with strong problem-solving skills and hands-on experience in ${skills.join(", ") || "modern technologies"}.`;

  // ---------------- PDF ----------------

  const downloadResume = () => {

    const doc = new jsPDF();

    doc.setFontSize(22);

    doc.text("AI Resume", 20, 20);

    doc.setFontSize(14);

    doc.text(`Name : ${resume.name}`, 20, 40);

    doc.text(`Email : ${resume.email}`, 20, 55);

    doc.text("Skills", 20, 75);

    skills.forEach((item, index) => {

      doc.text(`• ${item}`, 30, 90 + index * 10);

    });

    let y = 95 + skills.length * 10;

    doc.text("Projects", 20, y);

    projects.forEach((item, index) => {

      doc.text(`• ${item}`, 30, y + 15 + index * 10);

    });

    y = y + projects.length * 10 + 30;

    doc.text("Experience", 20, y);

    doc.text(resume.experience || "-", 30, y + 15);

    doc.save("Resume.pdf");

  };

  return (<div className="builder">

    {/* Left Panel */}

    <div className="builder-form">

      <h1>📄 AI Resume Builder</h1>

      <label>Profile Photo</label>

      <input
        type="file"
        accept="image/*"
        onChange={handlePhoto}
      />

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={resume.name}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={resume.email}
        onChange={handleChange}
      />

      <textarea
        rows="4"
        name="experience"
        placeholder="Experience"
        value={resume.experience}
        onChange={handleChange}
      />

      <h3>💻 Skills</h3>

      <div className="input-row">

        <input
          type="text"
          placeholder="Add Skill"
          value={skill}
          onChange={(e)=>setSkill(e.target.value)}
        />

        <button onClick={addSkill}>

          Add

        </button>

      </div>

      <button
        onClick={suggestSkills}
      >

        ✨ Suggest AI Skills

      </button>

      <h3>🚀 Projects</h3>

      <div className="input-row">

        <input
          type="text"
          placeholder="Add Project"
          value={project}
          onChange={(e)=>setProject(e.target.value)}
        />

        <button
          onClick={addProject}
        >

          Add

        </button>

      </div>

      <h3>🎨 Theme</h3>

      <div className="theme-buttons">

        <button
          onClick={()=>setTheme("#2563eb")}
        >

          🔵

        </button>

        <button
          onClick={()=>setTheme("#16a34a")}
        >

          🟢

        </button>

        <button
          onClick={()=>setTheme("#9333ea")}
        >

          🟣

        </button>

      </div>

      <h3>

        Resume Template

      </h3>

      <select

        value={template}

        onChange={(e)=>setTemplate(e.target.value)}

      >

        <option>

          Modern

        </option>

        <option>

          Classic

        </option>

        <option>

          Minimal

        </option>

      </select>

      <button

        className="download-btn"

        onClick={downloadResume}

      >

        📥 Download Resume

      </button>

    </div>

    {/* Right Panel */}

    <div

      className={`resume-preview ${template.toLowerCase()}`}

    >

      <div

        className="resume-header"

        style={{

          background:theme

        }}

      >

        {

          photo ?

          (

            <img

              src={photo}

              alt="Profile"

              className="profile-pic"

            />

          )

          :

          (

            <div

              className="profile-placeholder"

            >

              👤

            </div>

          )

        }

        <div>

          <h2>

            {

              resume.name ||

              "Your Name"

            }

          </h2>

          <p>

            {

              resume.email ||

              "example@gmail.com"

            }

          </p>

        </div>

      </div>

      <div className="resume-section">

        <h3

          style={{color:theme}}

        >

          🤖 Professional Summary

        </h3>

        <p>

          {summary}

        </p>

      </div>

      <div className="resume-section">

        <h3

          style={{color:theme}}

        >

          💻 Skills

        </h3>

        {

          skills.length===0 ?

          (

            <p>

              No skills added.

            </p>

          )

          :

          (

            <ul>

              {

                skills.map((item,index)=>(

                  <li key={index}>

                    {item}

                    <button

                      className="delete-btn"

                      onClick={()=>removeSkill(index)}

                    >

                      ❌

                    </button>

                  </li>

                ))

              }

            </ul>

          )

        }

      </div>

      <div className="resume-section">

        <h3

          style={{color:theme}}

        >

          🚀 Projects

        </h3>

        {

          projects.length===0 ?

          (

            <p>

              No projects added.

            </p>

          )

          :

          (

            <ul>

              {

                projects.map((item,index)=>(

                  <li key={index}>

                    {item}

                    <button

                      className="delete-btn"

                      onClick={()=>removeProject(index)}

                    >

                      ❌

                    </button>

                  </li>

                ))

              }

            </ul>

          )

        }

      </div>

      <div className="resume-section">

        <h3

          style={{color:theme}}

        >

          💼 Experience

        </h3>

        <p>

          {

            resume.experience ||

            "Your experience will appear here."

          }

        </p>

      </div>

    </div>

  </div>

);

}

export default ResumeBuilder;