const microsoftQuestions = [

  // =====================================
  // HR QUESTIONS
  // =====================================

  {
    id: 31,
    company: "Microsoft",
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
    id: 32,
    company: "Microsoft",
    role: "Software Engineer",
    type: "HR",
    difficulty: "Easy",
    category: "HR",

    question: "Why do you want to join Microsoft?",

    expectedKeywords: [
      "innovation",
      "technology",
      "learning",
      "growth"
    ],

    expectedDuration: "2 min"
  },

  {
    id: 33,
    company: "Microsoft",
    role: "Software Engineer",
    type: "HR",
    difficulty: "Medium",
    category: "HR",

    question: "Describe a challenging project you have worked on.",

    expectedKeywords: [
      "problem",
      "solution",
      "technology",
      "result"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 34,
    company: "Microsoft",
    role: "Software Engineer",
    type: "HR",
    difficulty: "Medium",
    category: "HR",

    question: "Tell me about a time you worked in a team.",

    expectedKeywords: [
      "communication",
      "teamwork",
      "leadership",
      "collaboration"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 35,
    company: "Microsoft",
    role: "Software Engineer",
    type: "HR",
    difficulty: "Hard",
    category: "HR",

    question: "Describe a situation where you disagreed with your teammate. What did you do?",

    expectedKeywords: [
      "respect",
      "discussion",
      "solution",
      "communication"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 36,
    company: "Microsoft",
    role: "Software Engineer",
    type: "HR",
    difficulty: "Medium",
    category: "HR",

    question: "What motivates you to keep learning new technologies?",

    expectedKeywords: [
      "learning",
      "technology",
      "curiosity",
      "growth"
    ],

    expectedDuration: "2 min"
  },

  {
    id: 37,
    company: "Microsoft",
    role: "Software Engineer",
    type: "HR",
    difficulty: "Medium",
    category: "HR",

    question: "How do you handle tight deadlines?",

    expectedKeywords: [
      "planning",
      "priority",
      "time management"
    ],

    expectedDuration: "2 min"
  },

  {
    id: 38,
    company: "Microsoft",
    role: "Software Engineer",
    type: "HR",
    difficulty: "Hard",
    category: "HR",

    question: "Describe a failure that helped you improve as an engineer.",

    expectedKeywords: [
      "failure",
      "lesson",
      "improvement",
      "growth"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 39,
    company: "Microsoft",
    role: "Software Engineer",
    type: "HR",
    difficulty: "Easy",
    category: "HR",

    question: "What are your strengths and weaknesses?",

    expectedKeywords: [
      "strength",
      "weakness",
      "improvement"
    ],

    expectedDuration: "2 min"
  },

  {
    id: 40,
    company: "Microsoft",
    role: "Software Engineer",
    type: "HR",
    difficulty: "Medium",
    category: "HR",

    question: "Where do you see yourself in the next five years?",

    expectedKeywords: [
      "career",
      "growth",
      "learning"
    ],

    expectedDuration: "2 min"
  },
  // =====================================
  // TECHNICAL QUESTIONS
  // =====================================

  {
    id: 41,
    company: "Microsoft",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Easy",
    category: "DSA",

    question: "Explain the difference between Array and Linked List.",

    expectedKeywords: [
      "contiguous",
      "dynamic",
      "memory",
      "access"
    ],

    expectedDuration: "2 min"
  },

  {
    id: 42,
    company: "Microsoft",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Easy",
    category: "DSA",

    question: "What is Binary Search? What is its time complexity?",

    expectedKeywords: [
      "sorted",
      "divide",
      "log n",
      "search"
    ],

    expectedDuration: "2 min"
  },

  {
    id: 43,
    company: "Microsoft",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Medium",
    category: "OOP",

    question: "Explain the four pillars of Object-Oriented Programming.",

    expectedKeywords: [
      "encapsulation",
      "inheritance",
      "polymorphism",
      "abstraction"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 44,
    company: "Microsoft",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Medium",
    category: "Java",

    question: "Difference between Interface and Abstract Class in Java.",

    expectedKeywords: [
      "interface",
      "abstract",
      "implements",
      "extends"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 45,
    company: "Microsoft",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Medium",
    category: "DBMS",

    question: "Explain normalization and its advantages.",

    expectedKeywords: [
      "redundancy",
      "normalization",
      "1NF",
      "2NF",
      "3NF"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 46,
    company: "Microsoft",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Medium",
    category: "DBMS",

    question: "Differentiate SQL and NoSQL databases.",

    expectedKeywords: [
      "relational",
      "schema",
      "document",
      "scalability"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 47,
    company: "Microsoft",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Medium",
    category: "Operating System",

    question: "What is the difference between Process and Thread?",

    expectedKeywords: [
      "process",
      "thread",
      "memory",
      "execution"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 48,
    company: "Microsoft",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Hard",
    category: "Operating System",

    question: "Explain Deadlock and the four necessary conditions.",

    expectedKeywords: [
      "mutual exclusion",
      "hold and wait",
      "no preemption",
      "circular wait"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 49,
    company: "Microsoft",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Medium",
    category: "Computer Networks",

    question: "Explain the TCP/IP model.",

    expectedKeywords: [
      "application",
      "transport",
      "internet",
      "network access"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 50,
    company: "Microsoft",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Medium",
    category: "Computer Networks",

    question: "Difference between HTTP and HTTPS.",

    expectedKeywords: [
      "ssl",
      "tls",
      "security",
      "encryption"
    ],

    expectedDuration: "2 min"
  },

  {
    id: 51,
    company: "Microsoft",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Hard",
    category: "React",

    question: "Explain React Virtual DOM.",

    expectedKeywords: [
      "virtual dom",
      "diffing",
      "reconciliation",
      "performance"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 52,
    company: "Microsoft",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Medium",
    category: "React",

    question: "Difference between useState and useEffect.",

    expectedKeywords: [
      "state",
      "side effects",
      "render",
      "hooks"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 53,
    company: "Microsoft",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Medium",
    category: "API",

    question: "What is a REST API? Explain CRUD operations.",

    expectedKeywords: [
      "get",
      "post",
      "put",
      "delete"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 54,
    company: "Microsoft",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Hard",
    category: "DSA",

    question: "What is Dynamic Programming? Explain with an example.",

    expectedKeywords: [
      "overlapping subproblems",
      "memoization",
      "tabulation",
      "optimization"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 55,
    company: "Microsoft",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Hard",
    category: "DSA",

    question: "Explain BFS and DFS. Compare their applications.",

    expectedKeywords: [
      "queue",
      "stack",
      "graph",
      "tree"
    ],

    expectedDuration: "4 min"
  },  // =====================================
  // MIXED / PROJECT / SYSTEM DESIGN
  // =====================================

  {
    id: 56,
    company: "Microsoft",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Easy",
    category: "Projects",

    question: "Walk me through your AI Career Copilot project.",

    expectedKeywords: [
      "react",
      "features",
      "components",
      "workflow"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 57,
    company: "Microsoft",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Medium",
    category: "Projects",

    question: "What was the biggest technical challenge while building your project and how did you solve it?",

    expectedKeywords: [
      "challenge",
      "solution",
      "debugging",
      "implementation"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 58,
    company: "Microsoft",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Medium",
    category: "React",

    question: "How have you managed state across different components in your React application?",

    expectedKeywords: [
      "props",
      "state",
      "lifting state",
      "context"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 59,
    company: "Microsoft",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Medium",
    category: "Frontend",

    question: "How would you improve the performance of a large React application?",

    expectedKeywords: [
      "memo",
      "lazy loading",
      "code splitting",
      "optimization"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 60,
    company: "Microsoft",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Hard",
    category: "System Design",

    question: "Design a simple URL shortening service like bit.ly.",

    expectedKeywords: [
      "database",
      "hash",
      "unique id",
      "redirect"
    ],

    expectedDuration: "5 min"
  },

  {
    id: 61,
    company: "Microsoft",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Hard",
    category: "System Design",

    question: "How would you design a scalable chat application?",

    expectedKeywords: [
      "websocket",
      "database",
      "load balancer",
      "real-time"
    ],

    expectedDuration: "5 min"
  },

  {
    id: 62,
    company: "Microsoft",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Medium",
    category: "Cloud",

    question: "What are the advantages of cloud computing? Give examples of cloud services.",

    expectedKeywords: [
      "azure",
      "aws",
      "scalability",
      "availability"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 63,
    company: "Microsoft",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Medium",
    category: "Backend",

    question: "Explain the complete flow of an API request from the frontend to the database and back.",

    expectedKeywords: [
      "request",
      "server",
      "database",
      "response"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 64,
    company: "Microsoft",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Hard",
    category: "Debugging",

    question: "Suppose your application becomes slow after deployment. How would you identify and fix the issue?",

    expectedKeywords: [
      "logs",
      "profiling",
      "performance",
      "optimization"
    ],

    expectedDuration: "5 min"
  },

  {
    id: 65,
    company: "Microsoft",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Medium",
    category: "Career",

    question: "If you join Microsoft tomorrow, what would you like to learn during your first six months?",

    expectedKeywords: [
      "learning",
      "team",
      "growth",
      "technology"
    ],

    expectedDuration: "2 min"
  }

];

export default microsoftQuestions;