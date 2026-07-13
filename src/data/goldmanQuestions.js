const goldmanQuestions = [

  // =====================================
  // HR / BEHAVIORAL
  // =====================================

  {
    id: 211,
    company: "Goldman Sachs",
    role: "Software Engineer Analyst",
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
    id: 212,
    company: "Goldman Sachs",
    role: "Software Engineer Analyst",
    type: "HR",
    difficulty: "Easy",
    category: "HR",

    question: "Why Goldman Sachs?",

    expectedKeywords: [
      "finance",
      "technology",
      "innovation",
      "growth"
    ],

    expectedDuration: "2 min"
  },

  {
    id: 213,
    company: "Goldman Sachs",
    role: "Software Engineer Analyst",
    type: "HR",
    difficulty: "Medium",
    category: "Projects",

    question: "Explain your AI Career Copilot project to a non-technical interviewer.",

    expectedKeywords: [
      "problem",
      "solution",
      "users",
      "impact"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 214,
    company: "Goldman Sachs",
    role: "Software Engineer Analyst",
    type: "HR",
    difficulty: "Medium",
    category: "Behavioral",

    question: "Tell me about a time you worked under a tight deadline.",

    expectedKeywords: [
      "deadline",
      "planning",
      "execution",
      "result"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 215,
    company: "Goldman Sachs",
    role: "Software Engineer Analyst",
    type: "HR",
    difficulty: "Medium",
    category: "Leadership",

    question: "Describe a situation where you had to take ownership of a task.",

    expectedKeywords: [
      "ownership",
      "initiative",
      "team",
      "result"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 216,
    company: "Goldman Sachs",
    role: "Software Engineer Analyst",
    type: "HR",
    difficulty: "Medium",
    category: "Problem Solving",

    question: "Tell me about the most challenging bug you've fixed.",

    expectedKeywords: [
      "debugging",
      "analysis",
      "solution",
      "testing"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 217,
    company: "Goldman Sachs",
    role: "Software Engineer Analyst",
    type: "HR",
    difficulty: "Medium",
    category: "Conflict Resolution",

    question: "Describe a disagreement within your team and how you handled it.",

    expectedKeywords: [
      "communication",
      "discussion",
      "solution",
      "teamwork"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 218,
    company: "Goldman Sachs",
    role: "Software Engineer Analyst",
    type: "HR",
    difficulty: "Hard",
    category: "Decision Making",

    question: "Describe a difficult decision you had to make during a project.",

    expectedKeywords: [
      "decision",
      "tradeoff",
      "analysis",
      "result"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 219,
    company: "Goldman Sachs",
    role: "Software Engineer Analyst",
    type: "HR",
    difficulty: "Medium",
    category: "Career",

    question: "Where do you see yourself after five years?",

    expectedKeywords: [
      "growth",
      "software",
      "learning",
      "career"
    ],

    expectedDuration: "2 min"
  },

  {
    id: 220,
    company: "Goldman Sachs",
    role: "Software Engineer Analyst",
    type: "HR",
    difficulty: "Medium",
    category: "Goals",

    question: "What motivates you to solve difficult programming problems?",

    expectedKeywords: [
      "problem solving",
      "logic",
      "learning",
      "motivation"
    ],

    expectedDuration: "2 min"
  },  // =====================================
  // TECHNICAL QUESTIONS
  // =====================================

  {
    id: 221,
    company: "Goldman Sachs",
    role: "Software Engineer Analyst",
    type: "Technical",
    difficulty: "Medium",
    category: "DSA",

    question: "Explain the difference between Arrays and Linked Lists. When would you choose one over the other?",

    expectedKeywords: [
      "memory",
      "random access",
      "insertion",
      "deletion"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 222,
    company: "Goldman Sachs",
    role: "Software Engineer Analyst",
    type: "Technical",
    difficulty: "Hard",
    category: "Hashing",

    question: "How does HashMap achieve nearly O(1) average lookup time? What happens when collisions occur?",

    expectedKeywords: [
      "hash function",
      "bucket",
      "collision",
      "rehashing"
    ],

    expectedDuration: "5 min"
  },

  {
    id: 223,
    company: "Goldman Sachs",
    role: "Software Engineer Analyst",
    type: "Technical",
    difficulty: "Hard",
    category: "DSA",

    question: "Design an LRU Cache. Which data structures would you use and why?",

    expectedKeywords: [
      "hashmap",
      "doubly linked list",
      "o1",
      "cache"
    ],

    expectedDuration: "5 min"
  },

  {
    id: 224,
    company: "Goldman Sachs",
    role: "Software Engineer Analyst",
    type: "Technical",
    difficulty: "Medium",
    category: "Algorithms",

    question: "How would you analyze the time and space complexity of an algorithm?",

    expectedKeywords: [
      "big o",
      "space complexity",
      "worst case",
      "efficiency"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 225,
    company: "Goldman Sachs",
    role: "Software Engineer Analyst",
    type: "Technical",
    difficulty: "Medium",
    category: "OOP",

    question: "Explain abstraction and polymorphism using a real-world software example.",

    expectedKeywords: [
      "abstraction",
      "polymorphism",
      "inheritance",
      "objects"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 226,
    company: "Goldman Sachs",
    role: "Software Engineer Analyst",
    type: "Technical",
    difficulty: "Medium",
    category: "DBMS",

    question: "Explain normalization. Why is it important in relational databases?",

    expectedKeywords: [
      "1nf",
      "2nf",
      "3nf",
      "redundancy"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 227,
    company: "Goldman Sachs",
    role: "Software Engineer Analyst",
    type: "Technical",
    difficulty: "Hard",
    category: "SQL",

    question: "How would you optimize a slow SQL query on a large table?",

    expectedKeywords: [
      "index",
      "execution plan",
      "joins",
      "optimization"
    ],

    expectedDuration: "5 min"
  },

  {
    id: 228,
    company: "Goldman Sachs",
    role: "Software Engineer Analyst",
    type: "Technical",
    difficulty: "Medium",
    category: "Operating Systems",

    question: "What is the difference between a Process and a Thread?",

    expectedKeywords: [
      "process",
      "thread",
      "memory",
      "context switching"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 229,
    company: "Goldman Sachs",
    role: "Software Engineer Analyst",
    type: "Technical",
    difficulty: "Hard",
    category: "Operating Systems",

    question: "Explain Deadlock. What are the necessary conditions and how can it be prevented?",

    expectedKeywords: [
      "deadlock",
      "mutex",
      "hold and wait",
      "prevention"
    ],

    expectedDuration: "5 min"
  },

  {
    id: 230,
    company: "Goldman Sachs",
    role: "Software Engineer Analyst",
    type: "Technical",
    difficulty: "Medium",
    category: "Computer Networks",

    question: "Explain the TCP three-way handshake and why it is required.",

    expectedKeywords: [
      "syn",
      "ack",
      "connection",
      "tcp"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 231,
    company: "Goldman Sachs",
    role: "Software Engineer Analyst",
    type: "Technical",
    difficulty: "Hard",
    category: "Computer Networks",

    question: "Compare TCP and UDP. Which scenarios are suitable for each?",

    expectedKeywords: [
      "reliable",
      "connectionless",
      "latency",
      "packet"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 232,
    company: "Goldman Sachs",
    role: "Software Engineer Analyst",
    type: "Technical",
    difficulty: "Hard",
    category: "DSA",

    question: "Suppose you're given one billion integers. How would you efficiently find the top 100 largest values?",

    expectedKeywords: [
      "heap",
      "priority queue",
      "streaming",
      "optimization"
    ],

    expectedDuration: "5 min"
  },

  {
    id: 233,
    company: "Goldman Sachs",
    role: "Software Engineer Analyst",
    type: "Technical",
    difficulty: "Hard",
    category: "System Design",

    question: "Design a URL shortening service similar to bit.ly.",

    expectedKeywords: [
      "database",
      "hashing",
      "unique id",
      "scalability"
    ],

    expectedDuration: "6 min"
  },

  {
    id: 234,
    company: "Goldman Sachs",
    role: "Software Engineer Analyst",
    type: "Technical",
    difficulty: "Medium",
    category: "Debugging",

    question: "A program suddenly consumes excessive memory in production. How would you investigate the issue?",

    expectedKeywords: [
      "memory leak",
      "profiling",
      "heap",
      "logs"
    ],

    expectedDuration: "5 min"
  },

  {
    id: 235,
    company: "Goldman Sachs",
    role: "Software Engineer Analyst",
    type: "Technical",
    difficulty: "Hard",
    category: "Problem Solving",

    question: "Describe your general strategy when solving a coding problem you've never seen before.",

    expectedKeywords: [
      "brute force",
      "optimization",
      "edge cases",
      "testing"
    ],

    expectedDuration: "4 min"
  },  // =====================================
  // MIXED / BEHAVIORAL / SYSTEM DESIGN
  // =====================================

  {
    id: 236,
    company: "Goldman Sachs",
    role: "Software Engineer Analyst",
    type: "Mixed",
    difficulty: "Medium",
    category: "Projects",

    question: "If your AI Career Copilot had to support one million users, what architectural changes would you make?",

    expectedKeywords: [
      "load balancing",
      "database",
      "caching",
      "scalability"
    ],

    expectedDuration: "5 min"
  },

  {
    id: 237,
    company: "Goldman Sachs",
    role: "Software Engineer Analyst",
    type: "Mixed",
    difficulty: "Medium",
    category: "System Design",

    question: "Design a secure online banking transaction system.",

    expectedKeywords: [
      "authentication",
      "transactions",
      "database",
      "security"
    ],

    expectedDuration: "6 min"
  },

  {
    id: 238,
    company: "Goldman Sachs",
    role: "Software Engineer Analyst",
    type: "Mixed",
    difficulty: "Hard",
    category: "Performance",

    question: "A backend service starts responding slowly only during market opening hours. How would you identify and solve the bottleneck?",

    expectedKeywords: [
      "profiling",
      "monitoring",
      "database",
      "load"
    ],

    expectedDuration: "5 min"
  },

  {
    id: 239,
    company: "Goldman Sachs",
    role: "Software Engineer Analyst",
    type: "Mixed",
    difficulty: "Medium",
    category: "Behavioral",

    question: "Describe a situation where you received critical feedback. How did you respond?",

    expectedKeywords: [
      "feedback",
      "improvement",
      "learning",
      "communication"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 240,
    company: "Goldman Sachs",
    role: "Software Engineer Analyst",
    type: "Mixed",
    difficulty: "Medium",
    category: "Behavioral",

    question: "Tell me about a time you made a mistake in a project. What did you learn from it?",

    expectedKeywords: [
      "mistake",
      "responsibility",
      "learning",
      "improvement"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 241,
    company: "Goldman Sachs",
    role: "Software Engineer Analyst",
    type: "Mixed",
    difficulty: "Hard",
    category: "Decision Making",

    question: "Two important production issues arrive at the same time, but your team can only fix one immediately. How would you prioritize?",

    expectedKeywords: [
      "impact",
      "priority",
      "risk",
      "decision"
    ],

    expectedDuration: "5 min"
  },

  {
    id: 242,
    company: "Goldman Sachs",
    role: "Software Engineer Analyst",
    type: "Mixed",
    difficulty: "Hard",
    category: "Debugging",

    question: "Users report intermittent failures in a distributed application, but logs don't show clear errors. How would you investigate?",

    expectedKeywords: [
      "logging",
      "tracing",
      "reproduction",
      "monitoring"
    ],

    expectedDuration: "5 min"
  },

  {
    id: 243,
    company: "Goldman Sachs",
    role: "Software Engineer Analyst",
    type: "Mixed",
    difficulty: "Medium",
    category: "Finance",

    question: "Why are reliability and low latency especially important in financial software systems?",

    expectedKeywords: [
      "latency",
      "accuracy",
      "availability",
      "transactions"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 244,
    company: "Goldman Sachs",
    role: "Software Engineer Analyst",
    type: "Mixed",
    difficulty: "Medium",
    category: "Career",

    question: "How do you stay updated with new technologies while maintaining strong DSA and CS fundamentals?",

    expectedKeywords: [
      "learning",
      "practice",
      "projects",
      "balance"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 245,
    company: "Goldman Sachs",
    role: "Software Engineer Analyst",
    type: "Mixed",
    difficulty: "Medium",
    category: "Career",

    question: "If selected at Goldman Sachs, what type of engineering problems would you be most excited to solve?",

    expectedKeywords: [
      "scalability",
      "distributed systems",
      "problem solving",
      "technology"
    ],

    expectedDuration: "3 min"
  }

];

export default goldmanQuestions;