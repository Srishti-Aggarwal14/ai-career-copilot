const googleQuestions = [

  // =====================================
  // HR QUESTIONS
  // =====================================

  {
    id: 1,
    company: "Google",
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
    id: 2,
    company: "Google",
    role: "Software Engineer",
    type: "HR",
    difficulty: "Easy",
    category: "HR",

    question: "Why do you want to work at Google?",

    expectedKeywords: [
      "innovation",
      "technology",
      "learning",
      "impact"
    ],

    expectedDuration: "2 min"
  },

  {
    id: 3,
    company: "Google",
    role: "Software Engineer",
    type: "HR",
    difficulty: "Medium",
    category: "HR",

    question: "Describe a project you are most proud of.",

    expectedKeywords: [
      "project",
      "challenge",
      "solution",
      "result"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 4,
    company: "Google",
    role: "Software Engineer",
    type: "HR",
    difficulty: "Medium",
    category: "HR",

    question: "Tell me about a time you resolved a conflict within your team.",

    expectedKeywords: [
      "teamwork",
      "communication",
      "solution",
      "collaboration"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 5,
    company: "Google",
    role: "Software Engineer",
    type: "HR",
    difficulty: "Medium",
    category: "HR",

    question: "What motivates you to become a software engineer?",

    expectedKeywords: [
      "technology",
      "problem solving",
      "learning",
      "growth"
    ],

    expectedDuration: "2 min"
  },

  {
    id: 6,
    company: "Google",
    role: "Software Engineer",
    type: "HR",
    difficulty: "Hard",
    category: "HR",

    question: "Describe a failure that taught you an important lesson.",

    expectedKeywords: [
      "failure",
      "lesson",
      "improvement",
      "growth"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 7,
    company: "Google",
    role: "Software Engineer",
    type: "HR",
    difficulty: "Medium",
    category: "HR",

    question: "How do you prioritize multiple deadlines?",

    expectedKeywords: [
      "planning",
      "priority",
      "time management",
      "execution"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 8,
    company: "Google",
    role: "Software Engineer",
    type: "HR",
    difficulty: "Medium",
    category: "HR",

    question: "Describe your ideal work environment.",

    expectedKeywords: [
      "team",
      "learning",
      "innovation",
      "collaboration"
    ],

    expectedDuration: "2 min"
  },

  {
    id: 9,
    company: "Google",
    role: "Software Engineer",
    type: "HR",
    difficulty: "Hard",
    category: "HR",

    question: "If your manager disagreed with your technical decision, how would you respond?",

    expectedKeywords: [
      "respect",
      "discussion",
      "data",
      "solution"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 10,
    company: "Google",
    role: "Software Engineer",
    type: "HR",
    difficulty: "Easy",
    category: "HR",

    question: "Where do you see yourself in the next five years?",

    expectedKeywords: [
      "career",
      "growth",
      "learning",
      "leadership"
    ],

    expectedDuration: "2 min"
  },  // =====================================
  // TECHNICAL QUESTIONS
  // =====================================

  {
    id: 11,
    company: "Google",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Easy",
    category: "DSA",

    question: "Explain the difference between an Array and a Linked List.",

    expectedKeywords: [
      "contiguous",
      "dynamic",
      "memory",
      "random access"
    ],

    expectedDuration: "2 min"
  },

  {
    id: 12,
    company: "Google",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Easy",
    category: "DSA",

    question: "What is Binary Search? When should it be used?",

    expectedKeywords: [
      "sorted array",
      "divide",
      "log n",
      "search"
    ],

    expectedDuration: "2 min"
  },

  {
    id: 13,
    company: "Google",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Medium",
    category: "DSA",

    question: "Explain how a HashMap works internally.",

    expectedKeywords: [
      "hash function",
      "bucket",
      "collision",
      "O(1)"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 14,
    company: "Google",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Medium",
    category: "DSA",

    question: "Compare Stack and Queue with real-world examples.",

    expectedKeywords: [
      "LIFO",
      "FIFO",
      "push",
      "enqueue"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 15,
    company: "Google",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Medium",
    category: "DSA",

    question: "Explain recursion. What are its advantages and disadvantages?",

    expectedKeywords: [
      "base case",
      "recursive call",
      "stack",
      "backtracking"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 16,
    company: "Google",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Medium",
    category: "Operating System",

    question: "Differentiate between a Process and a Thread.",

    expectedKeywords: [
      "process",
      "thread",
      "memory",
      "execution"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 17,
    company: "Google",
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
    id: 18,
    company: "Google",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Medium",
    category: "DBMS",

    question: "Explain database normalization. Why is it important?",

    expectedKeywords: [
      "redundancy",
      "1NF",
      "2NF",
      "3NF"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 19,
    company: "Google",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Medium",
    category: "DBMS",

    question: "Explain different SQL JOIN operations with examples.",

    expectedKeywords: [
      "inner join",
      "left join",
      "right join",
      "full join"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 20,
    company: "Google",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Medium",
    category: "DBMS",

    question: "What is indexing in databases? How does it improve performance?",

    expectedKeywords: [
      "index",
      "search",
      "b-tree",
      "performance"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 21,
    company: "Google",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Hard",
    category: "DSA",

    question: "Explain Dynamic Programming with a suitable example.",

    expectedKeywords: [
      "memoization",
      "tabulation",
      "overlapping subproblems",
      "optimization"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 22,
    company: "Google",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Hard",
    category: "DSA",

    question: "How would you detect a cycle in a Linked List?",

    expectedKeywords: [
      "fast pointer",
      "slow pointer",
      "Floyd",
      "cycle"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 23,
    company: "Google",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Hard",
    category: "DSA",

    question: "Explain Trie Data Structure and its practical applications.",

    expectedKeywords: [
      "prefix",
      "dictionary",
      "autocomplete",
      "tree"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 24,
    company: "Google",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Hard",
    category: "DSA",

    question: "Compare BFS and DFS. Where would you use each?",

    expectedKeywords: [
      "queue",
      "stack",
      "graph",
      "tree"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 25,
    company: "Google",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Hard",
    category: "Algorithms",

    question: "Explain Time Complexity and Space Complexity with suitable examples.",

    expectedKeywords: [
      "big o",
      "time complexity",
      "space complexity",
      "efficiency"
    ],

    expectedDuration: "4 min"
  },  // =====================================
  // MIXED / PROJECT / SYSTEM DESIGN
  // =====================================

  {
    id: 26,
    company: "Google",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Easy",
    category: "Projects",

    question: "Walk me through your AI Career Copilot project.",

    expectedKeywords: [
      "react",
      "components",
      "features",
      "workflow"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 27,
    company: "Google",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Medium",
    category: "Projects",

    question: "What was the biggest challenge while building your project and how did you solve it?",

    expectedKeywords: [
      "challenge",
      "solution",
      "debugging",
      "implementation"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 28,
    company: "Google",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Medium",
    category: "React",

    question: "Which React Hooks have you used in your project? Explain where and why you used them.",

    expectedKeywords: [
      "useState",
      "useEffect",
      "state",
      "hooks"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 29,
    company: "Google",
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
    id: 30,
    company: "Google",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Medium",
    category: "Backend",

    question: "Explain the complete lifecycle of an API request from the frontend to the database and back.",

    expectedKeywords: [
      "request",
      "server",
      "database",
      "response"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 31,
    company: "Google",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Hard",
    category: "System Design",

    question: "Design a URL shortening service like bit.ly.",

    expectedKeywords: [
      "database",
      "hash",
      "unique id",
      "redirect"
    ],

    expectedDuration: "5 min"
  },

  {
    id: 32,
    company: "Google",
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
    id: 33,
    company: "Google",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Hard",
    category: "Scalability",

    question: "If your application suddenly had one million users, what changes would you make to scale it?",

    expectedKeywords: [
      "load balancer",
      "caching",
      "database",
      "horizontal scaling"
    ],

    expectedDuration: "5 min"
  },

  {
    id: 34,
    company: "Google",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Hard",
    category: "Debugging",

    question: "Your production application becomes very slow after deployment. How would you investigate and fix the issue?",

    expectedKeywords: [
      "logs",
      "profiling",
      "performance",
      "monitoring"
    ],

    expectedDuration: "5 min"
  },

  {
    id: 35,
    company: "Google",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Medium",
    category: "Career",

    question: "If you join Google tomorrow, what would you like to accomplish during your first six months?",

    expectedKeywords: [
      "learning",
      "team",
      "growth",
      "impact"
    ],

    expectedDuration: "2 min"
  }

];

export default googleQuestions;