const amazonQuestions = [

  // =====================================
  // HR / LEADERSHIP PRINCIPLES
  // =====================================

  {
    id: 71,
    company: "Amazon",
    role: "Software Engineer",
    type: "HR",
    difficulty: "Easy",
    category: "Leadership Principles",

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
    id: 72,
    company: "Amazon",
    role: "Software Engineer",
    type: "HR",
    difficulty: "Easy",
    category: "Leadership Principles",

    question: "Why do you want to join Amazon?",

    expectedKeywords: [
      "innovation",
      "customer",
      "technology",
      "growth"
    ],

    expectedDuration: "2 min"
  },

  {
    id: 73,
    company: "Amazon",
    role: "Software Engineer",
    type: "HR",
    difficulty: "Medium",
    category: "Customer Obsession",

    question: "Tell me about a time you went above and beyond to help a customer or user.",

    expectedKeywords: [
      "customer",
      "initiative",
      "problem",
      "solution"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 74,
    company: "Amazon",
    role: "Software Engineer",
    type: "HR",
    difficulty: "Medium",
    category: "Ownership",

    question: "Describe a situation where you took ownership of a project without being asked.",

    expectedKeywords: [
      "ownership",
      "initiative",
      "responsibility",
      "result"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 75,
    company: "Amazon",
    role: "Software Engineer",
    type: "HR",
    difficulty: "Medium",
    category: "Bias for Action",

    question: "Describe a time when you had to make a quick decision with limited information.",

    expectedKeywords: [
      "decision",
      "risk",
      "action",
      "result"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 76,
    company: "Amazon",
    role: "Software Engineer",
    type: "HR",
    difficulty: "Medium",
    category: "Learn and Be Curious",

    question: "Tell me about a new technology you learned recently and how you applied it.",

    expectedKeywords: [
      "learning",
      "technology",
      "implementation",
      "improvement"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 77,
    company: "Amazon",
    role: "Software Engineer",
    type: "HR",
    difficulty: "Hard",
    category: "Earn Trust",

    question: "Describe a situation where you had to rebuild someone's trust.",

    expectedKeywords: [
      "trust",
      "communication",
      "honesty",
      "result"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 78,
    company: "Amazon",
    role: "Software Engineer",
    type: "HR",
    difficulty: "Hard",
    category: "Dive Deep",

    question: "Tell me about a difficult bug that required deep investigation to solve.",

    expectedKeywords: [
      "debugging",
      "analysis",
      "logs",
      "solution"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 79,
    company: "Amazon",
    role: "Software Engineer",
    type: "HR",
    difficulty: "Hard",
    category: "Deliver Results",

    question: "Describe a project with a tight deadline. How did you ensure successful delivery?",

    expectedKeywords: [
      "deadline",
      "planning",
      "execution",
      "result"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 80,
    company: "Amazon",
    role: "Software Engineer",
    type: "HR",
    difficulty: "Medium",
    category: "Think Big",

    question: "If you could improve one Amazon product or service, what would you change and why?",

    expectedKeywords: [
      "innovation",
      "customer",
      "improvement",
      "impact"
    ],

    expectedDuration: "3 min"
  },  // =====================================
  // TECHNICAL QUESTIONS
  // =====================================

  {
    id: 81,
    company: "Amazon",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Easy",
    category: "DSA",

    question: "Explain the difference between Array and Linked List.",

    expectedKeywords: [
      "contiguous",
      "dynamic",
      "memory",
      "random access"
    ],

    expectedDuration: "2 min"
  },

  {
    id: 82,
    company: "Amazon",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Easy",
    category: "DSA",

    question: "What is Binary Search? Explain its time complexity and prerequisites.",

    expectedKeywords: [
      "sorted",
      "binary search",
      "log n",
      "divide"
    ],

    expectedDuration: "2 min"
  },

  {
    id: 83,
    company: "Amazon",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Medium",
    category: "DSA",

    question: "Explain HashMap and how collisions are handled internally.",

    expectedKeywords: [
      "hash function",
      "bucket",
      "collision",
      "hashing"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 84,
    company: "Amazon",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Medium",
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
    id: 85,
    company: "Amazon",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Medium",
    category: "Java",

    question: "Differentiate between Interface and Abstract Class.",

    expectedKeywords: [
      "interface",
      "abstract class",
      "implements",
      "extends"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 86,
    company: "Amazon",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Medium",
    category: "DBMS",

    question: "Explain database normalization and why it is important.",

    expectedKeywords: [
      "redundancy",
      "normalization",
      "1NF",
      "3NF"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 87,
    company: "Amazon",
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
    id: 88,
    company: "Amazon",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Medium",
    category: "Operating System",

    question: "What is the difference between a Process and a Thread?",

    expectedKeywords: [
      "process",
      "thread",
      "memory",
      "execution"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 89,
    company: "Amazon",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Hard",
    category: "Operating System",

    question: "Explain Deadlock and its prevention techniques.",

    expectedKeywords: [
      "mutual exclusion",
      "deadlock",
      "prevention",
      "avoidance"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 90,
    company: "Amazon",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Medium",
    category: "Computer Networks",

    question: "Explain HTTP, HTTPS, and the role of SSL/TLS.",

    expectedKeywords: [
      "http",
      "https",
      "ssl",
      "tls"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 91,
    company: "Amazon",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Hard",
    category: "DSA",

    question: "Explain Dynamic Programming. How is it different from recursion?",

    expectedKeywords: [
      "memoization",
      "tabulation",
      "overlapping subproblems",
      "optimization"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 92,
    company: "Amazon",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Hard",
    category: "DSA",

    question: "How would you detect a cycle in a Linked List?",

    expectedKeywords: [
      "fast pointer",
      "slow pointer",
      "floyd",
      "cycle"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 93,
    company: "Amazon",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Hard",
    category: "DSA",

    question: "Compare BFS and DFS. Mention practical applications of each.",

    expectedKeywords: [
      "queue",
      "stack",
      "graph",
      "tree"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 94,
    company: "Amazon",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Medium",
    category: "API",

    question: "What is a REST API? Explain CRUD operations with HTTP methods.",

    expectedKeywords: [
      "get",
      "post",
      "put",
      "delete"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 95,
    company: "Amazon",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Hard",
    category: "Algorithms",

    question: "Explain Time Complexity and Space Complexity with examples.",

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
    id: 96,
    company: "Amazon",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Easy",
    category: "Projects",

    question: "Explain your AI Career Copilot project from start to finish.",

    expectedKeywords: [
      "react",
      "components",
      "features",
      "workflow"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 97,
    company: "Amazon",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Medium",
    category: "Projects",

    question: "What was the most challenging bug you faced while building your project, and how did you fix it?",

    expectedKeywords: [
      "debugging",
      "logs",
      "solution",
      "testing"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 98,
    company: "Amazon",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Medium",
    category: "React",

    question: "How did you organize your React project? Explain your folder structure and component architecture.",

    expectedKeywords: [
      "components",
      "pages",
      "routing",
      "state"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 99,
    company: "Amazon",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Medium",
    category: "Backend",

    question: "Explain the complete flow of an API request from the frontend to the backend and database.",

    expectedKeywords: [
      "request",
      "server",
      "database",
      "response"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 100,
    company: "Amazon",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Hard",
    category: "System Design",

    question: "Design a URL shortening service similar to bit.ly.",

    expectedKeywords: [
      "hash",
      "database",
      "unique id",
      "redirect"
    ],

    expectedDuration: "5 min"
  },

  {
    id: 101,
    company: "Amazon",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Hard",
    category: "System Design",

    question: "Design a scalable e-commerce product catalog that can support millions of products.",

    expectedKeywords: [
      "database",
      "cache",
      "load balancer",
      "scalability"
    ],

    expectedDuration: "5 min"
  },

  {
    id: 102,
    company: "Amazon",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Hard",
    category: "Scalability",

    question: "Your application traffic increases tenfold overnight. How would you scale the system?",

    expectedKeywords: [
      "horizontal scaling",
      "load balancer",
      "cache",
      "database"
    ],

    expectedDuration: "5 min"
  },

  {
    id: 103,
    company: "Amazon",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Medium",
    category: "Debugging",

    question: "A feature that works locally fails after deployment. How would you debug and resolve the issue?",

    expectedKeywords: [
      "logs",
      "deployment",
      "configuration",
      "testing"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 104,
    company: "Amazon",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Medium",
    category: "Performance",

    question: "What techniques would you use to improve the performance of a React application?",

    expectedKeywords: [
      "lazy loading",
      "memo",
      "code splitting",
      "optimization"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 105,
    company: "Amazon",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Medium",
    category: "Career",

    question: "If you join Amazon, how would you apply the Leadership Principles in your daily work?",

    expectedKeywords: [
      "ownership",
      "customer obsession",
      "learn",
      "deliver results"
    ],

    expectedDuration: "3 min"
  }

];

export default amazonQuestions;