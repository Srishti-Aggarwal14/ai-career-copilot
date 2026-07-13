const appleQuestions = [

  // =====================================
  // HR / BEHAVIORAL
  // =====================================

  {
    id: 281,
    company: "Apple",
    role: "Software Engineer",
    type: "HR",
    difficulty: "Easy",
    category: "HR",

    question: "Tell me about yourself.",

    expectedKeywords: [
      "education",
      "projects",
      "skills",
      "career"
    ],

    expectedDuration: "2 min"
  },

  {
    id: 282,
    company: "Apple",
    role: "Software Engineer",
    type: "HR",
    difficulty: "Easy",
    category: "HR",

    question: "Why do you want to work at Apple?",

    expectedKeywords: [
      "innovation",
      "quality",
      "products",
      "engineering"
    ],

    expectedDuration: "2 min"
  },

  {
    id: 283,
    company: "Apple",
    role: "Software Engineer",
    type: "HR",
    difficulty: "Medium",
    category: "Projects",

    question: "Explain your AI Career Copilot project focusing on engineering decisions rather than features.",

    expectedKeywords: [
      "architecture",
      "components",
      "design",
      "tradeoffs"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 284,
    company: "Apple",
    role: "Software Engineer",
    type: "HR",
    difficulty: "Medium",
    category: "Problem Solving",

    question: "Describe the hardest technical bug you've ever fixed.",

    expectedKeywords: [
      "debugging",
      "analysis",
      "testing",
      "solution"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 285,
    company: "Apple",
    role: "Software Engineer",
    type: "HR",
    difficulty: "Medium",
    category: "Quality",

    question: "Apple emphasizes quality over speed. Tell me about a time you chose quality over a deadline.",

    expectedKeywords: [
      "quality",
      "testing",
      "decision",
      "impact"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 286,
    company: "Apple",
    role: "Software Engineer",
    type: "HR",
    difficulty: "Medium",
    category: "Learning",

    question: "Describe a complex technology that you learned completely on your own.",

    expectedKeywords: [
      "self learning",
      "documentation",
      "practice",
      "projects"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 287,
    company: "Apple",
    role: "Software Engineer",
    type: "HR",
    difficulty: "Medium",
    category: "Teamwork",

    question: "Tell me about a situation where you disagreed with your teammates on a technical solution.",

    expectedKeywords: [
      "communication",
      "discussion",
      "respect",
      "solution"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 288,
    company: "Apple",
    role: "Software Engineer",
    type: "HR",
    difficulty: "Hard",
    category: "Leadership",

    question: "Describe a situation where you took ownership of a project without being asked.",

    expectedKeywords: [
      "ownership",
      "initiative",
      "impact",
      "leadership"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 289,
    company: "Apple",
    role: "Software Engineer",
    type: "HR",
    difficulty: "Medium",
    category: "Career",

    question: "Where do you see yourself as an engineer in five years?",

    expectedKeywords: [
      "growth",
      "engineering",
      "learning",
      "innovation"
    ],

    expectedDuration: "2 min"
  },

  {
    id: 290,
    company: "Apple",
    role: "Software Engineer",
    type: "HR",
    difficulty: "Medium",
    category: "Goals",

    question: "What kind of engineering challenges excite you the most?",

    expectedKeywords: [
      "performance",
      "optimization",
      "systems",
      "problem solving"
    ],

    expectedDuration: "2 min"
  },  // =====================================
  // TECHNICAL QUESTIONS
  // =====================================

  {
    id: 291,
    company: "Apple",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Medium",
    category: "C++",

    question: "Explain the difference between C and C++.",

    expectedKeywords: [
      "oop",
      "procedural",
      "classes",
      "inheritance"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 292,
    company: "Apple",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Medium",
    category: "OOP",

    question: "What are constructors and destructors? When are they called?",

    expectedKeywords: [
      "constructor",
      "destructor",
      "object",
      "initialization"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 293,
    company: "Apple",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Hard",
    category: "C++",

    question: "Explain virtual functions and runtime polymorphism in C++.",

    expectedKeywords: [
      "virtual",
      "vtable",
      "runtime",
      "polymorphism"
    ],

    expectedDuration: "5 min"
  },

  {
    id: 294,
    company: "Apple",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Hard",
    category: "Pointers",

    question: "What is the difference between a pointer and a reference in C++?",

    expectedKeywords: [
      "pointer",
      "reference",
      "memory",
      "address"
    ],

    expectedDuration: "5 min"
  },

  {
    id: 295,
    company: "Apple",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Hard",
    category: "Memory Management",

    question: "Explain stack memory and heap memory. When is each used?",

    expectedKeywords: [
      "stack",
      "heap",
      "allocation",
      "memory"
    ],

    expectedDuration: "5 min"
  },

  {
    id: 296,
    company: "Apple",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Hard",
    category: "Smart Pointers",

    question: "What are unique_ptr, shared_ptr, and weak_ptr? Why are smart pointers important?",

    expectedKeywords: [
      "unique_ptr",
      "shared_ptr",
      "weak_ptr",
      "memory leak"
    ],

    expectedDuration: "5 min"
  },

  {
    id: 297,
    company: "Apple",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Hard",
    category: "Operating Systems",

    question: "What is a race condition? How can it be prevented?",

    expectedKeywords: [
      "race condition",
      "mutex",
      "thread",
      "synchronization"
    ],

    expectedDuration: "5 min"
  },

  {
    id: 298,
    company: "Apple",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Hard",
    category: "Operating Systems",

    question: "Explain deadlock. How would you detect and prevent it?",

    expectedKeywords: [
      "deadlock",
      "mutex",
      "prevention",
      "detection"
    ],

    expectedDuration: "5 min"
  },

  {
    id: 299,
    company: "Apple",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Medium",
    category: "Multithreading",

    question: "How is multithreading different from multiprocessing?",

    expectedKeywords: [
      "threads",
      "process",
      "memory",
      "performance"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 300,
    company: "Apple",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Hard",
    category: "Performance",

    question: "A C++ application becomes slower after running continuously for several hours. How would you investigate the issue?",

    expectedKeywords: [
      "profiling",
      "memory leak",
      "cpu",
      "performance"
    ],

    expectedDuration: "6 min"
  },

  {
    id: 301,
    company: "Apple",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Medium",
    category: "Operating Systems",

    question: "What is virtual memory and why is it used?",

    expectedKeywords: [
      "virtual memory",
      "paging",
      "address space",
      "ram"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 302,
    company: "Apple",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Hard",
    category: "Computer Architecture",

    question: "What is cache memory? How does it improve application performance?",

    expectedKeywords: [
      "cache",
      "cpu",
      "latency",
      "memory hierarchy"
    ],

    expectedDuration: "5 min"
  },

  {
    id: 303,
    company: "Apple",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Hard",
    category: "Algorithms",

    question: "How would you optimize an algorithm without changing its output?",

    expectedKeywords: [
      "time complexity",
      "space complexity",
      "optimization",
      "analysis"
    ],

    expectedDuration: "5 min"
  },

  {
    id: 304,
    company: "Apple",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Hard",
    category: "Debugging",

    question: "Your application crashes only on one customer's device and you cannot reproduce it locally. What would you do?",

    expectedKeywords: [
      "logs",
      "debugging",
      "reproduction",
      "diagnostics"
    ],

    expectedDuration: "5 min"
  },

  {
    id: 305,
    company: "Apple",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Hard",
    category: "Problem Solving",

    question: "Describe your approach to solving an unfamiliar system-level programming problem.",

    expectedKeywords: [
      "analysis",
      "breakdown",
      "testing",
      "optimization"
    ],

    expectedDuration: "5 min"
  },  // =====================================
  // MIXED / SYSTEM DESIGN / PRODUCT THINKING
  // =====================================

  {
    id: 306,
    company: "Apple",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Hard",
    category: "System Design",

    question: "Design the software architecture for a Camera application on a smartphone.",

    expectedKeywords: [
      "camera",
      "pipeline",
      "performance",
      "memory"
    ],

    expectedDuration: "6 min"
  },

  {
    id: 307,
    company: "Apple",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Hard",
    category: "Performance",

    question: "How would you optimize battery usage in a mobile application without affecting user experience?",

    expectedKeywords: [
      "background tasks",
      "battery",
      "optimization",
      "efficiency"
    ],

    expectedDuration: "5 min"
  },

  {
    id: 308,
    company: "Apple",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Hard",
    category: "Memory Management",

    question: "If your application's memory usage keeps increasing over time, how would you identify the root cause?",

    expectedKeywords: [
      "memory leak",
      "profiling",
      "heap",
      "diagnostics"
    ],

    expectedDuration: "5 min"
  },

  {
    id: 309,
    company: "Apple",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Medium",
    category: "Projects",

    question: "How would you optimize the performance of your AI Career Copilot project if it became significantly larger?",

    expectedKeywords: [
      "lazy loading",
      "optimization",
      "caching",
      "code splitting"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 310,
    company: "Apple",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Hard",
    category: "Debugging",

    question: "After a software update, only 2% of users report application crashes. How would you investigate and resolve the issue?",

    expectedKeywords: [
      "crash logs",
      "analytics",
      "reproduction",
      "debugging"
    ],

    expectedDuration: "5 min"
  },

  {
    id: 311,
    company: "Apple",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Medium",
    category: "Quality",

    question: "Apple is known for high-quality software. How would you ensure your code meets production-quality standards?",

    expectedKeywords: [
      "testing",
      "code review",
      "quality",
      "automation"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 312,
    company: "Apple",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Hard",
    category: "Scalability",

    question: "Suppose your application needs to support ten times more users next year. What engineering changes would you plan today?",

    expectedKeywords: [
      "scalability",
      "architecture",
      "database",
      "performance"
    ],

    expectedDuration: "5 min"
  },

  {
    id: 313,
    company: "Apple",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Medium",
    category: "Engineering Decisions",

    question: "Describe a situation where you had to balance performance, maintainability, and development time.",

    expectedKeywords: [
      "tradeoff",
      "performance",
      "maintainability",
      "decision"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 314,
    company: "Apple",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Medium",
    category: "Innovation",

    question: "If you could improve one Apple product using AI, what would you build and why?",

    expectedKeywords: [
      "ai",
      "innovation",
      "user experience",
      "product"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 315,
    company: "Apple",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Medium",
    category: "Career",

    question: "If selected at Apple, which engineering team would you most like to join and why?",

    expectedKeywords: [
      "ios",
      "macos",
      "performance",
      "engineering"
    ],

    expectedDuration: "3 min"
  }

];

export default appleQuestions;