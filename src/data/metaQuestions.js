const metaQuestions = [

  // =====================================
  // HR / BEHAVIORAL
  // =====================================

  {
    id: 246,
    company: "Meta",
    role: "Software Engineer",
    type: "HR",
    difficulty: "Easy",
    category: "HR",

    question: "Tell me about yourself.",

    expectedKeywords: [
      "education",
      "skills",
      "projects",
      "career"
    ],

    expectedDuration: "2 min"
  },

  {
    id: 247,
    company: "Meta",
    role: "Software Engineer",
    type: "HR",
    difficulty: "Easy",
    category: "HR",

    question: "Why do you want to work at Meta?",

    expectedKeywords: [
      "innovation",
      "social impact",
      "technology",
      "products"
    ],

    expectedDuration: "2 min"
  },

  {
    id: 248,
    company: "Meta",
    role: "Software Engineer",
    type: "HR",
    difficulty: "Medium",
    category: "Projects",

    question: "Explain your AI Career Copilot project to a product manager.",

    expectedKeywords: [
      "users",
      "problem",
      "solution",
      "value"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 249,
    company: "Meta",
    role: "Software Engineer",
    type: "HR",
    difficulty: "Medium",
    category: "Leadership",

    question: "Tell me about a time you influenced your team without being the leader.",

    expectedKeywords: [
      "communication",
      "initiative",
      "teamwork",
      "impact"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 250,
    company: "Meta",
    role: "Software Engineer",
    type: "HR",
    difficulty: "Medium",
    category: "Conflict Resolution",

    question: "Describe a disagreement with a teammate and how you resolved it.",

    expectedKeywords: [
      "discussion",
      "respect",
      "solution",
      "communication"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 251,
    company: "Meta",
    role: "Software Engineer",
    type: "HR",
    difficulty: "Medium",
    category: "Learning",

    question: "How do you keep your frontend development skills up to date?",

    expectedKeywords: [
      "documentation",
      "practice",
      "projects",
      "learning"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 252,
    company: "Meta",
    role: "Software Engineer",
    type: "HR",
    difficulty: "Medium",
    category: "Problem Solving",

    question: "Tell me about a challenging bug that required multiple attempts to solve.",

    expectedKeywords: [
      "debugging",
      "analysis",
      "testing",
      "solution"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 253,
    company: "Meta",
    role: "Software Engineer",
    type: "HR",
    difficulty: "Hard",
    category: "Decision Making",

    question: "Describe a situation where you had to make a technical trade-off between speed and quality.",

    expectedKeywords: [
      "tradeoff",
      "quality",
      "deadline",
      "decision"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 254,
    company: "Meta",
    role: "Software Engineer",
    type: "HR",
    difficulty: "Medium",
    category: "Career",

    question: "What type of engineering work excites you the most?",

    expectedKeywords: [
      "frontend",
      "scalability",
      "products",
      "technology"
    ],

    expectedDuration: "2 min"
  },

  {
    id: 255,
    company: "Meta",
    role: "Software Engineer",
    type: "HR",
    difficulty: "Medium",
    category: "Goals",

    question: "What motivates you to build products used by millions of people?",

    expectedKeywords: [
      "users",
      "impact",
      "innovation",
      "motivation"
    ],

    expectedDuration: "2 min"
  },

  // =====================================
  // TECHNICAL QUESTIONS
  // =====================================

  {
    id: 256,
    company: "Meta",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Medium",
    category: "JavaScript",

    question: "Explain closures in JavaScript with a practical example.",

    expectedKeywords: [
      "closure",
      "lexical scope",
      "function",
      "variables"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 257,
    company: "Meta",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Medium",
    category: "JavaScript",

    question: "Explain the JavaScript Event Loop and how asynchronous code executes.",

    expectedKeywords: [
      "call stack",
      "callback queue",
      "event loop",
      "microtask"
    ],

    expectedDuration: "5 min"
  },

  {
    id: 258,
    company: "Meta",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Medium",
    category: "JavaScript",

    question: "Differentiate between var, let, and const.",

    expectedKeywords: [
      "scope",
      "hoisting",
      "block scope",
      "const"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 259,
    company: "Meta",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Hard",
    category: "React",

    question: "Explain Virtual DOM and React Reconciliation.",

    expectedKeywords: [
      "virtual dom",
      "diffing",
      "reconciliation",
      "rendering"
    ],

    expectedDuration: "5 min"
  },

  {
    id: 260,
    company: "Meta",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Hard",
    category: "React",

    question: "When would you use useMemo and useCallback? Explain with examples.",

    expectedKeywords: [
      "useMemo",
      "useCallback",
      "optimization",
      "re-render"
    ],

    expectedDuration: "5 min"
  },

  {
    id: 261,
    company: "Meta",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Medium",
    category: "React",

    question: "What causes unnecessary re-renders in React applications? How can they be prevented?",

    expectedKeywords: [
      "state",
      "props",
      "memo",
      "optimization"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 262,
    company: "Meta",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Hard",
    category: "Frontend",

    question: "How would you optimize the loading performance of a React application?",

    expectedKeywords: [
      "lazy loading",
      "code splitting",
      "caching",
      "images"
    ],

    expectedDuration: "5 min"
  },

  {
    id: 263,
    company: "Meta",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Hard",
    category: "Frontend",

    question: "Design the component structure for a social media news feed.",

    expectedKeywords: [
      "components",
      "state",
      "props",
      "architecture"
    ],

    expectedDuration: "6 min"
  },

  {
    id: 264,
    company: "Meta",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Hard",
    category: "DSA",

    question: "Given millions of posts, how would you efficiently return the top K trending posts?",

    expectedKeywords: [
      "heap",
      "priority queue",
      "sorting",
      "optimization"
    ],

    expectedDuration: "5 min"
  },

  {
    id: 265,
    company: "Meta",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Hard",
    category: "System Design",

    question: "Design the backend architecture for a basic messaging application.",

    expectedKeywords: [
      "messages",
      "database",
      "real time",
      "websocket"
    ],

    expectedDuration: "6 min"
  },

  {
    id: 266,
    company: "Meta",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Medium",
    category: "Debugging",

    question: "How would you debug a React application that works locally but fails in production?",

    expectedKeywords: [
      "logs",
      "environment",
      "deployment",
      "browser"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 267,
    company: "Meta",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Medium",
    category: "HTML/CSS",

    question: "Explain the difference between Flexbox and CSS Grid. When would you use each?",

    expectedKeywords: [
      "flexbox",
      "grid",
      "layout",
      "responsive"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 268,
    company: "Meta",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Hard",
    category: "JavaScript",

    question: "Explain prototypal inheritance in JavaScript.",

    expectedKeywords: [
      "prototype",
      "inheritance",
      "__proto__",
      "object"
    ],

    expectedDuration: "5 min"
  },

  {
    id: 269,
    company: "Meta",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Hard",
    category: "Frontend System Design",

    question: "Design the frontend architecture for an Instagram-like application.",

    expectedKeywords: [
      "routing",
      "components",
      "state management",
      "performance"
    ],

    expectedDuration: "6 min"
  },

  {
    id: 270,
    company: "Meta",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Hard",
    category: "Problem Solving",

    question: "When solving a difficult DSA problem, how do you move from a brute-force solution to an optimized one?",

    expectedKeywords: [
      "brute force",
      "optimization",
      "patterns",
      "complexity"
    ],

    expectedDuration: "5 min"
  },  // =====================================
  // MIXED / PRODUCT / FRONTEND DESIGN
  // =====================================

  {
    id: 271,
    company: "Meta",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Medium",
    category: "Projects",

    question: "If your AI Career Copilot suddenly had one million daily active users, what changes would you make to the frontend architecture?",

    expectedKeywords: [
      "lazy loading",
      "code splitting",
      "caching",
      "performance"
    ],

    expectedDuration: "5 min"
  },

  {
    id: 272,
    company: "Meta",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Hard",
    category: "Product Design",

    question: "How would you design the frontend architecture for an Instagram-like feed?",

    expectedKeywords: [
      "pagination",
      "infinite scroll",
      "components",
      "performance"
    ],

    expectedDuration: "6 min"
  },

  {
    id: 273,
    company: "Meta",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Hard",
    category: "Recommendation Systems",

    question: "What factors would you consider while designing a personalized Reels recommendation experience?",

    expectedKeywords: [
      "engagement",
      "user behavior",
      "ranking",
      "personalization"
    ],

    expectedDuration: "5 min"
  },

  {
    id: 274,
    company: "Meta",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Medium",
    category: "Accessibility",

    question: "How would you make your React application accessible for users with disabilities?",

    expectedKeywords: [
      "aria",
      "keyboard navigation",
      "screen reader",
      "accessibility"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 275,
    company: "Meta",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Medium",
    category: "UI/UX",

    question: "Tell us about a UI decision you made that significantly improved the user experience.",

    expectedKeywords: [
      "users",
      "feedback",
      "design",
      "usability"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 276,
    company: "Meta",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Hard",
    category: "Performance",

    question: "Users report that your application becomes slow after long usage. How would you diagnose and fix the issue?",

    expectedKeywords: [
      "memory leak",
      "profiling",
      "performance",
      "optimization"
    ],

    expectedDuration: "5 min"
  },

  {
    id: 277,
    company: "Meta",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Hard",
    category: "Frontend Architecture",

    question: "How would you organize a large React codebase with hundreds of components and multiple teams working together?",

    expectedKeywords: [
      "folder structure",
      "reusability",
      "modularity",
      "state management"
    ],

    expectedDuration: "6 min"
  },

  {
    id: 278,
    company: "Meta",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Medium",
    category: "Debugging",

    question: "A newly released feature causes random UI crashes for a small percentage of users. What steps would you take?",

    expectedKeywords: [
      "logs",
      "reproduction",
      "error boundary",
      "monitoring"
    ],

    expectedDuration: "5 min"
  },

  {
    id: 279,
    company: "Meta",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Medium",
    category: "Product Thinking",

    question: "How would you measure whether a newly launched feature is successful?",

    expectedKeywords: [
      "metrics",
      "engagement",
      "retention",
      "feedback"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 280,
    company: "Meta",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Medium",
    category: "Career",

    question: "If you joined Meta tomorrow, which product would you like to contribute to and why?",

    expectedKeywords: [
      "facebook",
      "instagram",
      "whatsapp",
      "innovation"
    ],

    expectedDuration: "3 min"
  }

];

export default metaQuestions;