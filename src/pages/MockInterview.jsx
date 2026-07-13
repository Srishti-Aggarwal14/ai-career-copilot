import { useEffect, useMemo, useState } from "react";
import interviewQuestions from "../data/interviewQuestions";
import "../styles/MockInterview.css";
import ScoreCard from "../components/AIFeedback/ScoreCard";
import SkillProgress from "../components/AIFeedback/SkillProgress";
import FeedbackCard from "../components/AIFeedback/FeedbackCard";
import SuggestionCard from "../components/AIFeedback/SuggestionCard";
import InterviewSummary from "../components/AIFeedback/InterviewSummary";
import jsPDF from "jspdf";
import { addXP } from "../utils/xpSystem";
import { addNotification } from "../utils/notificationSystem";


function MockInterview() {

  const [company, setCompany] = useState("Google");

  const [role, setRole] = useState("Software Engineer");

  const [type, setType] = useState("Technical");

  const [difficulty, setDifficulty] = useState("Medium");

  const [questionCount, setQuestionCount] = useState(5);

  const [started, setStarted] = useState(false);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [answers, setAnswers] = useState([]);

  const [currentAnswer, setCurrentAnswer] = useState("");

  const [timeLeft, setTimeLeft] = useState(20 * 60);

  const [submitted, setSubmitted] = useState(false);

  const [result, setResult] = useState(null);

  const generateAIReport = (answers) => {

  let confidence = 70;
  let technical = 70;
  let communication = 70;
  let vocabulary = 70;

  answers.forEach((item) => {

    const text = (item.answer || "").toLowerCase();

    // Confidence
    if (text.length > 120) confidence += 5;
    if (text.includes("i think")) confidence -= 3;
    if (text.includes("definitely")) confidence += 3;

    // Technical
    if (
      text.includes("time complexity") ||
      text.includes("space complexity")
    ) {
      technical += 8;
    }

    if (
      text.includes("array") ||
      text.includes("tree") ||
      text.includes("graph")
    ) {
      technical += 5;
    }

    // Communication
    if (text.split(" ").length > 40) {
      communication += 5;
    }

    // Vocabulary
    if (
      text.includes("efficient") ||
      text.includes("optimize") ||
      text.includes("approach")
    ) {
      vocabulary += 5;
    }

  });

  return {
    confidence: Math.min(confidence, 100),
    technical: Math.min(technical, 100),
    communication: Math.min(communication, 100),
    vocabulary: Math.min(vocabulary, 100)
  };

};

  const filteredQuestions = useMemo(() => {

    return interviewQuestions.filter(

      (item) =>

        item.company === company &&

        item.role === role &&

        item.type === type &&

        item.difficulty === difficulty

    );

  }, [company, role, type, difficulty]);

  const selectedQuestions = useMemo(() => {

    return filteredQuestions.slice(0, questionCount);

  }, [filteredQuestions, questionCount]);

  useEffect(() => {

    if (!started || submitted) return;

    if (timeLeft <= 0) {

      finishInterview();

      return;

    }

    const timer = setInterval(() => {

      setTimeLeft((prev) => prev - 1);

    }, 1000);

    return () => clearInterval(timer);

  }, [started, timeLeft, submitted]);

  const formatTime = (seconds) => {

    const mins = Math.floor(seconds / 60);

    const secs = seconds % 60;

    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;

  };

  const startInterview = () => {

    setStarted(true);

    setSubmitted(false);

    setCurrentQuestion(0);

    setAnswers([]);

    setCurrentAnswer("");

    setTimeLeft(20 * 60);

  };  const saveCurrentAnswer = () => {

    const updatedAnswers = [...answers];

    updatedAnswers[currentQuestion] = {

      question:

        selectedQuestions[currentQuestion]?.question ||

        "",

      answer: currentAnswer,

    };

    setAnswers(updatedAnswers);

  };

  const nextQuestion = () => {

    saveCurrentAnswer();

    if (

      currentQuestion <

      selectedQuestions.length - 1

    ) {

      const nextIndex = currentQuestion + 1;

      setCurrentQuestion(nextIndex);

      setCurrentAnswer(

        answers[nextIndex]?.answer || ""

      );

    }

  };

  const previousQuestion = () => {

    saveCurrentAnswer();

    if (currentQuestion > 0) {

      const previousIndex = currentQuestion - 1;

      setCurrentQuestion(previousIndex);

      setCurrentAnswer(

        answers[previousIndex]?.answer || ""

      );

    }

  };

  const calculateScore = (answersList) => {

  const validAnswers = answersList.filter(

    (item) =>

      item?.answer &&

      item.answer.trim().length > 30

  ).length;

  return Math.round(

    (validAnswers / Math.max(answersList.length, 1)) * 100

  );

};
  const generateFeedback = (score) => {

    if (score >= 90) {

      return {

        title: "Excellent Performance",

        strengths: [

          "Strong communication",

          "Detailed answers",

          "Good confidence",

        ],

        improvements: [

          "Keep practicing system design.",

        ],

      };

    }

    if (score >= 70) {

      return {

        title: "Good Performance",

        strengths: [

          "Good understanding",

          "Clear explanations",

        ],

        improvements: [

          "Answer with more examples.",

          "Improve confidence.",

        ],

      };

    }

    return {

      title: "Needs Improvement",

      strengths: [

        "Keep learning consistently.",

      ],

      improvements: [

        "Practice DSA daily.",

        "Revise core CS subjects.",

        "Improve communication.",

      ],

    };

  };

  const finishInterview = () => {

  const updatedAnswers = [...answers];

  updatedAnswers[currentQuestion] = {

    question:

      selectedQuestions[currentQuestion]?.question ||

      "",

    answer: currentAnswer,

  };

  setAnswers(updatedAnswers);

  const score = calculateScore(updatedAnswers);

  const feedback = generateFeedback(score);
  const aiReport = generateAIReport(updatedAnswers);

  const interviewResult = {

    company,

    role,

    type,

    difficulty,

    score,

    feedback,

    aiReport,

    answers: updatedAnswers,

    completedOn: new Date().toLocaleString(),

  };
  setResult(interviewResult);

  localStorage.setItem(

    "lastInterview",

    JSON.stringify(interviewResult)

  );
  addXP(30);

addNotification(
  "🎤 Mock Interview Completed! +30 XP"
);

  setSubmitted(true);

};
const downloadReport = () => {

  if (!result) return;

  const doc = new jsPDF();

// Blue Header
doc.setFillColor(37, 99, 235);
doc.rect(0, 0, 210, 30, "F");

// White Title
doc.setTextColor(255, 255, 255);
doc.setFontSize(22);
doc.text("AI Interview Report", 20, 20);

// Black Text
doc.setTextColor(0, 0, 0);
doc.setFontSize(14);

doc.setDrawColor(220);
doc.roundedRect(15, 35, 180, 55, 4, 4);

doc.setFontSize(15);

doc.text(`🏢 Company : ${result.company}`, 22, 48);
doc.text(`💼 Role : ${result.role}`, 22, 58);
doc.text(`🎤 Type : ${result.type}`, 22, 68);
doc.text(`📊 Difficulty : ${result.difficulty}`, 22, 78);
doc.text(`⭐ Overall Score : ${result.score}%`, 22, 88);

let y = 110;

doc.setFillColor(245,245,245);
doc.roundedRect(15, y-5, 180, 40, 3,3,"F");

doc.setFontSize(14);

doc.text("Skill Scores",20,y+5);

doc.setFontSize(12);

doc.text(`Confidence : ${result.aiReport.confidence}%`,25,y+15);

doc.text(`Technical : ${result.aiReport.technical}%`,25,y+23);

doc.text(`Communication : ${result.aiReport.communication}%`,110,y+15);

doc.text(`Vocabulary : ${result.aiReport.vocabulary}%`,110,y+23);

y+=50;
  doc.text("Strengths", 20, y);
  y += 10;

  result.feedback.strengths.forEach((item) => {
    doc.text(`• ${item}`, 25, y);
    y += 8;
  });

  y += 8;

  doc.text("Areas to Improve", 20, y);
  y += 10;

  result.feedback.improvements.forEach((item) => {
    doc.text(`• ${item}`, 25, y);
    y += 8;
  });

  y += 8;

  doc.text("AI Suggestions", 20, y);
  y += 10;

  [
    "Practice Dynamic Programming",
    "Revise Operating Systems",
    "Practice Mock Interviews",
    "Explain your thought process"
  ].forEach((item) => {
    doc.text(`• ${item}`, 25, y);
    y += 8;
  });
  doc.setFontSize(11);
doc.setTextColor(120);
doc.text(
  "Generated by AI Career Copilot | Chitkara University Project | © 2026",
  20,
  285
);

  doc.save(`${result.company}-Interview-Report.pdf`);

};  if (!started) {

    return (

      <div className="mock-interview-page">

        <div className="setup-card">

          <h1>

            🤖 AI Mock Interview

          </h1>

          <p>

            Practice company-specific interviews and receive AI-powered feedback.

          </p>

          <div className="form-group">

            <label>

              🏢 Company

            </label>

            <select

              value={company}

              onChange={(e) =>

                setCompany(e.target.value)

              }

            >

              <option>

                Google

              </option>

              <option>

                Microsoft

              </option>

              <option>

                Amazon

              </option>

              <option>

                Nvidia

              </option>

              <option>

                Adobe

              </option>

              <option>

                Oracle

              </option>

            </select>

          </div>

          <div className="form-group">

            <label>

              💼 Role

            </label>

            <select

              value={role}

              onChange={(e) =>

                setRole(e.target.value)

              }

            >

              <option>

                Software Engineer

              </option>

              <option>

                SDE

              </option>

              <option>

                AI Engineer

              </option>

            </select>

          </div>

          <div className="form-group">

            <label>

              🎤 Interview Type

            </label>

            <select

              value={type}

              onChange={(e) =>

                setType(e.target.value)

              }

            >

              <option>

                HR

              </option>

              <option>

                Technical

              </option>

              <option>

                Mixed

              </option>

            </select>

          </div>

          <div className="form-group">

            <label>

              📊 Difficulty

            </label>

            <select

              value={difficulty}

              onChange={(e) =>

                setDifficulty(e.target.value)

              }

            >

              <option>

                Easy

              </option>

              <option>

                Medium

              </option>

              <option>

                Hard

              </option>

            </select>

          </div>          <div className="form-group">

            <label>

              🔢 Number of Questions

            </label>

            <select

              value={questionCount}

              onChange={(e) =>

                setQuestionCount(

                  Number(e.target.value)

                )

              }

            >

              <option value={3}>

                3 Questions

              </option>

              <option value={5}>

                5 Questions

              </option>

              <option value={10}>

                10 Questions

              </option>

            </select>

          </div>

          <div className="interview-summary">

            <h3>

              📋 Interview Summary

            </h3>

            <p>

              <strong>

                Company :

              </strong>

              {" "}

              {company}

            </p>

            <p>

              <strong>

                Role :

              </strong>

              {" "}

              {role}

            </p>

            <p>

              <strong>

                Type :

              </strong>

              {" "}

              {type}

            </p>

            <p>

              <strong>

                Difficulty :

              </strong>

              {" "}

              {difficulty}

            </p>

            <p>

              <strong>

                Questions :

              </strong>

              {" "}

              {

                Math.min(

                  questionCount,

                  selectedQuestions.length

                )

              }

            </p>

            <p>

              <strong>

                Duration :

              </strong>

              {" "}

              20 Minutes

            </p>

          </div>

          {

            selectedQuestions.length === 0 ? (

              <div className="no-questions">

                <h3>

                  ⚠ No Questions Found

                </h3>

                <p>

                  No interview questions are available for the selected combination.

                </p>

                <p>

                  Try changing the company, role, interview type, or difficulty.

                </p>

              </div>

            ) : (

              <button

                className="start-btn"

                onClick={startInterview}

              >

                ▶ Start Interview

              </button>

            )

          }

        </div>

      </div>

    );

  }  if (!submitted) {

    return (

      <div className="mock-interview-page">

        <div className="interview-card">

          <div className="interview-header">

            <h2>

              {company} Mock Interview

            </h2>

            <div className="timer">

              ⏱ {formatTime(timeLeft)}

            </div>

          </div>

          <div className="progress-container">

            <div className="progress-text">

              Question {currentQuestion + 1} of {selectedQuestions.length}

            </div>

            <div className="progress-bar">

              <div

                className="progress-fill"

                style={{

                  width: `${

                    ((currentQuestion + 1) /

                      selectedQuestions.length) *

                    100

                  }%`,

                }}

              ></div>

            </div>

          </div>

          <div className="question-box">

            <h3>

              ❓

              {

                selectedQuestions[currentQuestion]

                  ?.question

              }

            </h3>

          </div>

          <textarea

            className="answer-box"

            placeholder="Type your answer here..."

            rows={10}

            value={currentAnswer}

            onChange={(e) =>

              setCurrentAnswer(

                e.target.value

              )

            }

          />

          <div className="navigation-buttons">

            <button

              onClick={previousQuestion}

              disabled={currentQuestion === 0}

            >

              ⬅ Previous

            </button>

            {

              currentQuestion ===

              selectedQuestions.length - 1

              ? (

                <button

                  className="finish-btn"

                  onClick={finishInterview}

                >

                  ✅ Finish Interview

                </button>

              )

              : (

                <button

                  onClick={nextQuestion}

                >

                  Next ➡

                </button>

              )

            }

          </div>

        </div>

      </div>

    );

  }  const lastInterview = JSON.parse(

    localStorage.getItem("lastInterview")

  );

  return (
  <div className="mock-interview-page">
    <div className="result-card">

      <InterviewSummary
        company={lastInterview.company}
        totalQuestions={selectedQuestions.length}
        answered={answers.length}
        score={(lastInterview.score / 10).toFixed(1)}
      />

      <ScoreCard
  overall={(result.score / 10).toFixed(1)}
  confidence={result.aiReport.confidence}
  technical={result.aiReport.technical}
  communication={result.aiReport.communication}
  vocabulary={result.aiReport.vocabulary}
/>

<SkillProgress
  title="Confidence"
  score={result.aiReport.confidence}
/>

<SkillProgress
  title="Technical"
  score={result.aiReport.technical}
/>

<SkillProgress
  title="Communication"
  score={result.aiReport.communication}
/>

<SkillProgress
  title="Vocabulary"
  score={result.aiReport.vocabulary}
/>

      <h3>{result.feedback.title}</h3>

      <div className="feedback-section">

        <FeedbackCard
          title="💪 Strengths"
          items={result.feedback.strengths}
        />

        <FeedbackCard
          title="📈 Areas to Improve"
          items={result.feedback.improvements}
        />

      </div>

      <SuggestionCard
        suggestions={[
          "Practice Dynamic Programming",
          "Revise Operating Systems",
          "Explain your approach before coding",
          "Improve confidence while speaking",
          "Solve at least 5 interview questions daily",
        ]}
      />
      <button
  className="download-btn"
  onClick={downloadReport}
>
  📄 Download AI Report
</button>

      <button
        className="restart-btn"
        onClick={() => window.location.reload()}
      >
        🔄 Take Another Interview
      </button>

    </div>
  </div>
);

}

export default MockInterview;