const adobeQuestions = [

  // =====================================
  // HR QUESTIONS
  // =====================================

  {
    id: 141,
    company: "Adobe",
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
    id: 142,
    company: "Adobe",
    role: "Software Engineer",
    type: "HR",
    difficulty: "Easy",
    category: "HR",

    question: "Why do you want to join Adobe?",

    expectedKeywords: [
      "innovation",
      "creativity",
      "technology",
      "products"
    ],

    expectedDuration: "2 min"
  },

  {
    id: 143,
    company: "Adobe",
    role: "Software Engineer",
    type: "HR",
    difficulty: "Medium",
    category: "Projects",

    question: "Describe the project you are most proud of and why.",

    expectedKeywords: [
      "project",
      "challenge",
      "solution",
      "impact"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 144,
    company: "Adobe",
    role: "Software Engineer",
    type: "HR",
    difficulty: "Medium",
    category: "Teamwork",

    question: "Tell me about a time when your team disagreed on a technical solution.",

    expectedKeywords: [
      "communication",
      "team",
      "discussion",
      "solution"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 145,
    company: "Adobe",
    role: "Software Engineer",
    type: "HR",
    difficulty: "Medium",
    category: "Problem Solving",

    question: "Describe a difficult technical problem you solved.",

    expectedKeywords: [
      "analysis",
      "debugging",
      "solution",
      "result"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 146,
    company: "Adobe",
    role: "Software Engineer",
    type: "HR",
    difficulty: "Medium",
    category: "Learning",

    question: "How do you learn a new framework or programming language?",

    expectedKeywords: [
      "documentation",
      "practice",
      "projects",
      "learning"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 147,
    company: "Adobe",
    role: "Software Engineer",
    type: "HR",
    difficulty: "Hard",
    category: "Leadership",

    question: "Describe a situation where you took initiative without being asked.",

    expectedKeywords: [
      "initiative",
      "ownership",
      "impact",
      "result"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 148,
    company: "Adobe",
    role: "Software Engineer",
    type: "HR",
    difficulty: "Medium",
    category: "Creativity",

    question: "How do you balance creativity with writing clean and maintainable code?",

    expectedKeywords: [
      "clean code",
      "maintainability",
      "design",
      "creativity"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 149,
    company: "Adobe",
    role: "Software Engineer",
    type: "HR",
    difficulty: "Medium",
    category: "Career",

    question: "Where do you see yourself in the next five years?",

    expectedKeywords: [
      "growth",
      "career",
      "learning",
      "technology"
    ],

    expectedDuration: "2 min"
  },

  {
    id: 150,
    company: "Adobe",
    role: "Software Engineer",
    type: "HR",
    difficulty: "Easy",
    category: "Goals",

    question: "What motivates you to build software that people use every day?",

    expectedKeywords: [
      "users",
      "impact",
      "technology",
      "motivation"
    ],

    expectedDuration: "2 min"
  },  // =====================================
  // TECHNICAL QUESTIONS
  // =====================================

  {
    id: 151,
    company: "Adobe",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Easy",
    category: "OOP",

    question: "Explain the four pillars of Object-Oriented Programming with examples.",

    expectedKeywords: [
      "encapsulation",
      "inheritance",
      "polymorphism",
      "abstraction"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 152,
    company: "Adobe",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Easy",
    category: "Java",

    question: "What is the difference between == and equals() in Java?",

    expectedKeywords: [
      "reference",
      "object",
      "equals",
      "comparison"
    ],

    expectedDuration: "2 min"
  },

  {
    id: 153,
    company: "Adobe",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Medium",
    category: "Java",

    question: "Differentiate between Interface and Abstract Class.",

    expectedKeywords: [
      "implements",
      "extends",
      "multiple inheritance",
      "abstract"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 154,
    company: "Adobe",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Medium",
    category: "React",

    question: "What are React Hooks? Explain useState and useEffect.",

    expectedKeywords: [
      "hooks",
      "state",
      "effect",
      "functional components"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 155,
    company: "Adobe",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Medium",
    category: "React",

    question: "Explain Virtual DOM and why React uses it.",

    expectedKeywords: [
      "virtual dom",
      "diffing",
      "performance",
      "rendering"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 156,
    company: "Adobe",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Medium",
    category: "JavaScript",

    question: "Explain the difference between var, let, and const.",

    expectedKeywords: [
      "scope",
      "hoisting",
      "block",
      "const"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 157,
    company: "Adobe",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Medium",
    category: "DBMS",

    question: "What are Primary Keys and Foreign Keys?",

    expectedKeywords: [
      "primary key",
      "foreign key",
      "relationship",
      "unique"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 158,
    company: "Adobe",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Hard",
    category: "DSA",

    question: "What is the difference between BFS and DFS? When would you use each?",

    expectedKeywords: [
      "queue",
      "stack",
      "graph",
      "traversal"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 159,
    company: "Adobe",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Hard",
    category: "Algorithms",

    question: "Explain Time Complexity and Big-O notation with examples.",

    expectedKeywords: [
      "big o",
      "time complexity",
      "efficiency",
      "algorithm"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 160,
    company: "Adobe",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Hard",
    category: "System Design",

    question: "How would you design a collaborative online document editor similar to Adobe Acrobat or Google Docs?",

    expectedKeywords: [
      "real-time",
      "synchronization",
      "backend",
      "scalability"
    ],

    expectedDuration: "5 min"
  },

  {
    id: 161,
    company: "Adobe",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Medium",
    category: "HTML/CSS",

    question: "What is the difference between Flexbox and CSS Grid?",

    expectedKeywords: [
      "flexbox",
      "grid",
      "layout",
      "responsive"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 162,
    company: "Adobe",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Medium",
    category: "JavaScript",

    question: "Explain Promises, async/await, and why asynchronous programming is important.",

    expectedKeywords: [
      "promise",
      "async",
      "await",
      "asynchronous"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 163,
    company: "Adobe",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Medium",
    category: "Git",

    question: "Explain your Git workflow while working on a team project.",

    expectedKeywords: [
      "branch",
      "merge",
      "pull request",
      "commit"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 164,
    company: "Adobe",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Hard",
    category: "Debugging",

    question: "A React component keeps re-rendering infinitely. How would you debug and fix it?",

    expectedKeywords: [
      "useEffect",
      "dependency array",
      "state",
      "debugging"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 165,
    company: "Adobe",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Hard",
    category: "Performance",

    question: "How would you optimize the performance of a large React application?",

    expectedKeywords: [
      "memo",
      "lazy loading",
      "code splitting",
      "optimization"
    ],

    expectedDuration: "4 min"
  },  // =====================================
  // MIXED / PROJECT / SYSTEM DESIGN
  // =====================================

  {
    id: 166,
    company: "Adobe",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Easy",
    category: "Projects",

    question: "Explain your AI Career Copilot project from start to finish.",

    expectedKeywords: [
      "react",
      "features",
      "components",
      "workflow"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 167,
    company: "Adobe",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Medium",
    category: "Projects",

    question: "Which feature of your AI Career Copilot project are you most proud of, and why?",

    expectedKeywords: [
      "feature",
      "impact",
      "design",
      "solution"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 168,
    company: "Adobe",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Medium",
    category: "React",

    question: "How did you organize your React application? Explain your component hierarchy and routing.",

    expectedKeywords: [
      "components",
      "routing",
      "state",
      "folder structure"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 169,
    company: "Adobe",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Medium",
    category: "UI/UX",

    question: "What design principles did you follow while creating the user interface of your project?",

    expectedKeywords: [
      "responsive",
      "accessibility",
      "consistency",
      "usability"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 170,
    company: "Adobe",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Hard",
    category: "Frontend System Design",

    question: "Design a scalable dashboard for an application that supports thousands of concurrent users.",

    expectedKeywords: [
      "components",
      "caching",
      "api",
      "performance"
    ],

    expectedDuration: "5 min"
  },

  {
    id: 171,
    company: "Adobe",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Hard",
    category: "Deployment",

    question: "How would you deploy a React application for production?",

    expectedKeywords: [
      "build",
      "hosting",
      "cdn",
      "deployment"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 172,
    company: "Adobe",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Hard",
    category: "Debugging",

    question: "Your application works locally but fails after deployment. How would you troubleshoot it?",

    expectedKeywords: [
      "logs",
      "environment",
      "api",
      "debugging"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 173,
    company: "Adobe",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Medium",
    category: "Performance",

    question: "How would you improve the loading speed of a large frontend application?",

    expectedKeywords: [
      "lazy loading",
      "image optimization",
      "caching",
      "code splitting"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 174,
    company: "Adobe",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Medium",
    category: "Career",

    question: "How do you ensure your software is both technically strong and user-friendly?",

    expectedKeywords: [
      "testing",
      "feedback",
      "usability",
      "quality"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 175,
    company: "Adobe",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Medium",
    category: "Career",

    question: "If you join Adobe, which product or engineering area would you like to contribute to, and why?",

    expectedKeywords: [
      "innovation",
      "product",
      "engineering",
      "creativity"
    ],

    expectedDuration: "3 min"
  }

];

export default adobeQuestions;