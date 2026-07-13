import { useState, useEffect } from "react";
import "../styles/DSATracker.css";
import { addXP } from "../utils/xpSystem";
import { addNotification } from "../utils/notificationSystem";

function DSATracker() {

  // ---------------- STATES ----------------

  const [problem, setProblem] = useState("");

  const [difficulty, setDifficulty] = useState("Easy");

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All");

  const [problems, setProblems] = useState(() => {

    const saved = localStorage.getItem("dsaProblems");

    return saved ? JSON.parse(saved) : [];

  });

  // ---------------- LOCAL STORAGE ----------------

  useEffect(() => {

    localStorage.setItem(
      "dsaProblems",
      JSON.stringify(problems)
    );

  }, [problems]);

  // ---------------- ADD PROBLEM ----------------

  const addProblem = () => {

    if (problem.trim() === "") return;

    const newProblem = {

  id: Date.now(),

  name: problem,

  difficulty,

  solved: false,

  xpAwarded: false,

};

    setProblems([...problems, newProblem]);

    setProblem("");

    setDifficulty("Easy");

  };

  // ---------------- TOGGLE SOLVED ----------------

  const toggleSolved = (id) => {

  const updatedProblems = problems.map((item) => {

  if (item.id === id) {

    // XP sirf jab unsolved -> solved ho
    if (!item.solved && !item.xpAwarded) {
      addXP(5);
      addNotification(`💻 Solved "${item.name}" (+5 XP)`);
    }

    return {

    ...item,

    solved: !item.solved,

    xpAwarded:

        item.xpAwarded || !item.solved,

};
  }

  return item;

});

  setProblems(updatedProblems);

  // Dashboard ke liye profile update
  const solvedCount = updatedProblems.filter(
    (item) => item.solved
  ).length;

  const profile =
    JSON.parse(localStorage.getItem("profile")) || {
      dsaSolved: 0,
      interviewsTaken: 0,
    };

  profile.dsaSolved = solvedCount;

  localStorage.setItem(
    "profile",
    JSON.stringify(profile)
  );

};

  // ---------------- DELETE ----------------

  const deleteProblem = (id) => {

  const updatedProblems = problems.filter(
    (item) => item.id !== id
  );

  setProblems(updatedProblems);

  const solvedCount = updatedProblems.filter(
    (item) => item.solved
  ).length;

  const profile =
    JSON.parse(localStorage.getItem("profile")) || {
      dsaSolved: 0,
      interviewsTaken: 0,
    };

  profile.dsaSolved = solvedCount;

  localStorage.setItem(
    "profile",
    JSON.stringify(profile)
  );

};

  // ---------------- CLEAR ALL ----------------

  const clearAll = () => {

  if (window.confirm("Delete all problems?")) {

    setProblems([]);

    const profile =
      JSON.parse(localStorage.getItem("profile")) || {
        dsaSolved: 0,
        interviewsTaken: 0,
      };

    profile.dsaSolved = 0;

    localStorage.setItem(
      "profile",
      JSON.stringify(profile)
    );

  }

};

  // ---------------- RESET ----------------

  const resetProgress = () => {

  const updatedProblems = problems.map((item) => ({
    ...item,
    solved: false,
  }));

  setProblems(updatedProblems);

  const profile =
    JSON.parse(localStorage.getItem("profile")) || {
      dsaSolved: 0,
      interviewsTaken: 0,
    };

  profile.dsaSolved = 0;

  localStorage.setItem(
    "profile",
    JSON.stringify(profile)
  );

};

  // ---------------- COUNTS ----------------

  const solvedCount =

    problems.filter(

      (item) => item.solved

    ).length;

  const pendingCount =

    problems.length - solvedCount;

  const progress =

    problems.length === 0

      ? 0

      : (solvedCount / problems.length) * 100;

  // ---------------- SORT ----------------

  const sortedProblems = [...problems]

    .sort((a, b) => {

      const order = {

        Easy: 1,

        Medium: 2,

        Hard: 3,

      };

      return (

        order[a.difficulty] -

        order[b.difficulty]

      );

    })

    .filter((item) =>

      filter === "All"

        ? true

        : item.difficulty === filter

    )

    .filter((item) =>

      item.name

        .toLowerCase()

        .includes(

          search.toLowerCase()

        )

    );

  // ---------------- RETURN ----------------

  return (
<div className="tracker">

  <h1>📚 DSA Tracker</h1>

  {/* ---------- Statistics ---------- */}

  <div className="stats">

    <div className="stat">
      <h2>{problems.length}</h2>
      <p>Total</p>
    </div>

    <div className="stat">
      <h2>{solvedCount}</h2>
      <p>Solved</p>
    </div>

    <div className="stat">
      <h2>{pendingCount}</h2>
      <p>Pending</p>
    </div>

  </div>

  {/* ---------- Form ---------- */}

  <div className="form">

    <input
      type="text"
      placeholder="Problem Name"
      value={problem}
      onChange={(e) => setProblem(e.target.value)}
    />

    <select
      value={difficulty}
      onChange={(e) => setDifficulty(e.target.value)}
    >
      <option>Easy</option>
      <option>Medium</option>
      <option>Hard</option>
    </select>

    <button onClick={addProblem}>
      ➕ Add Problem
    </button>

  </div>

  {/* ---------- Search & Filter ---------- */}

  <div className="form">

    <input
      type="text"
      placeholder="🔍 Search Problem..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />

    <select
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
    >

      <option>All</option>
      <option>Easy</option>
      <option>Medium</option>
      <option>Hard</option>

    </select>

  </div>

  <h2>

    📚 Total Problems : {problems.length}

  </h2>

  {problems.length === 0 && (

    <h3
      style={{
        marginTop: "30px",
        color: "#666",
      }}
    >

      📚 Start your DSA Journey!

      <br />

      Add your first problem above 🚀

    </h3>

  )}

  {/* ---------- Problem Cards ---------- */}

  <div className="problem-list">

    {sortedProblems.map((item) => (

      <div
        className="problem-card"
        key={item.id}
      >

        <h3>

          {item.solved ? "✅" : "📌"} {item.name}

        </h3>

        <p>

          Difficulty :

          <span
            style={{
              marginLeft: "10px",
              fontWeight: "bold",
              color:
                item.difficulty === "Easy"
                  ? "green"
                  : item.difficulty === "Medium"
                  ? "orange"
                  : "red",
            }}
          >

            {item.difficulty === "Easy" && "🟢 Easy"}

            {item.difficulty === "Medium" && "🟡 Medium"}

            {item.difficulty === "Hard" && "🔴 Hard"}

          </span>

        </p>

        <div className="buttons">

          <button
            onClick={() =>
              toggleSolved(item.id)
            }
          >

            {item.solved
              ? "↩ Undo"
              : "✔ Mark Solved"}

          </button>

          <button
            onClick={() =>
              deleteProblem(item.id)
            }
          >

            🗑 Delete

          </button>

        </div>

      </div>

    ))}

  </div>

  {/* ---------- Congratulations ---------- */}

  {problems.length > 0 &&
    solvedCount === problems.length && (

      <h2
        style={{
          color: "green",
          marginTop: "30px",
        }}
      >

        🎉 Congratulations!

        <br />

        All Problems Solved!

      </h2>

    )}

  {/* ---------- Progress ---------- */}

  <h2>📈 Progress</h2>

  <div className="progress-bar">

    <div
      className="progress-fill"
      style={{
        width: `${progress}%`,
      }}
    ></div>

  </div>

  <h3>

    {solvedCount} / {problems.length} Solved

  </h3>

  {/* ---------- Buttons ---------- */}

  <div className="buttons">

    <button onClick={clearAll}>

      🗑 Clear All

    </button>

    <button onClick={resetProgress}>

      🔄 Reset Progress

    </button>

  </div>

</div>

  );

}

export default DSATracker;