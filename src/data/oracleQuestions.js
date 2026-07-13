const oracleQuestions = [

  // =====================================
  // HR QUESTIONS
  // =====================================

  {
    id: 176,
    company: "Oracle",
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
    id: 177,
    company: "Oracle",
    role: "Software Engineer",
    type: "HR",
    difficulty: "Easy",
    category: "HR",

    question: "Why Oracle?",

    expectedKeywords: [
      "database",
      "cloud",
      "enterprise",
      "technology"
    ],

    expectedDuration: "2 min"
  },

  {
    id: 178,
    company: "Oracle",
    role: "Software Engineer",
    type: "HR",
    difficulty: "Medium",
    category: "Projects",

    question: "Explain your AI Career Copilot project.",

    expectedKeywords: [
      "react",
      "features",
      "workflow",
      "components"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 179,
    company: "Oracle",
    role: "Software Engineer",
    type: "HR",
    difficulty: "Medium",
    category: "Projects",

    question: "If Oracle wanted to use your project internally, what improvements would you make?",

    expectedKeywords: [
      "security",
      "database",
      "authentication",
      "scalability"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 180,
    company: "Oracle",
    role: "Software Engineer",
    type: "HR",
    difficulty: "Medium",
    category: "Problem Solving",

    question: "Tell me about a difficult technical problem you solved.",

    expectedKeywords: [
      "analysis",
      "solution",
      "debugging",
      "testing"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 181,
    company: "Oracle",
    role: "Software Engineer",
    type: "HR",
    difficulty: "Medium",
    category: "Learning",

    question: "How do you learn a new backend technology quickly?",

    expectedKeywords: [
      "documentation",
      "practice",
      "projects",
      "learning"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 182,
    company: "Oracle",
    role: "Software Engineer",
    type: "HR",
    difficulty: "Medium",
    category: "Teamwork",

    question: "Describe a situation where your team disagreed on a technical solution.",

    expectedKeywords: [
      "communication",
      "discussion",
      "solution",
      "team"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 183,
    company: "Oracle",
    role: "Software Engineer",
    type: "HR",
    difficulty: "Hard",
    category: "Leadership",

    question: "Tell me about a time when you took ownership of a project.",

    expectedKeywords: [
      "ownership",
      "initiative",
      "leadership",
      "impact"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 184,
    company: "Oracle",
    role: "Software Engineer",
    type: "HR",
    difficulty: "Medium",
    category: "Career",

    question: "Where do you see yourself in the next five years?",

    expectedKeywords: [
      "growth",
      "software engineer",
      "backend",
      "learning"
    ],

    expectedDuration: "2 min"
  },

  {
    id: 185,
    company: "Oracle",
    role: "Software Engineer",
    type: "HR",
    difficulty: "Medium",
    category: "Goals",

    question: "Why do you enjoy backend development?",

    expectedKeywords: [
      "backend",
      "database",
      "api",
      "logic"
    ],

    expectedDuration: "2 min"
  },  // =====================================
  // TECHNICAL QUESTIONS
  // =====================================

  {
    id: 186,
    company: "Oracle",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Easy",
    category: "Java",

    question: "What are the main features of Java?",

    expectedKeywords: [
      "platform independent",
      "oop",
      "robust",
      "secure"
    ],

    expectedDuration: "2 min"
  },

  {
    id: 187,
    company: "Oracle",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Easy",
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
    id: 188,
    company: "Oracle",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Medium",
    category: "Java Collections",

    question: "What is the difference between ArrayList and LinkedList?",

    expectedKeywords: [
      "arraylist",
      "linkedlist",
      "performance",
      "memory"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 189,
    company: "Oracle",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Medium",
    category: "Java Collections",

    question: "Explain HashMap. How does it work internally?",

    expectedKeywords: [
      "hashing",
      "bucket",
      "collision",
      "hashcode"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 190,
    company: "Oracle",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Medium",
    category: "Java",

    question: "What is the difference between String, StringBuilder, and StringBuffer?",

    expectedKeywords: [
      "immutable",
      "mutable",
      "thread safe",
      "performance"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 191,
    company: "Oracle",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Medium",
    category: "Multithreading",

    question: "What is multithreading? Why is synchronization required?",

    expectedKeywords: [
      "thread",
      "synchronization",
      "race condition",
      "shared resource"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 192,
    company: "Oracle",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Medium",
    category: "Exception Handling",

    question: "What is the difference between checked and unchecked exceptions?",

    expectedKeywords: [
      "compile time",
      "runtime",
      "exception",
      "throws"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 193,
    company: "Oracle",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Hard",
    category: "JVM",

    question: "Explain JVM, JRE, and JDK. How does Java achieve platform independence?",

    expectedKeywords: [
      "jvm",
      "jre",
      "jdk",
      "bytecode"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 194,
    company: "Oracle",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Hard",
    category: "Garbage Collection",

    question: "What is Garbage Collection in Java? Why is it important?",

    expectedKeywords: [
      "memory",
      "heap",
      "garbage collector",
      "automatic"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 195,
    company: "Oracle",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Medium",
    category: "SQL",

    question: "What is the difference between DELETE, TRUNCATE, and DROP?",

    expectedKeywords: [
      "delete",
      "truncate",
      "drop",
      "ddl"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 196,
    company: "Oracle",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Medium",
    category: "DBMS",

    question: "Explain ACID properties of a database transaction.",

    expectedKeywords: [
      "atomicity",
      "consistency",
      "isolation",
      "durability"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 197,
    company: "Oracle",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Hard",
    category: "Backend",

    question: "What are REST APIs? Explain common HTTP methods used in backend development.",

    expectedKeywords: [
      "get",
      "post",
      "put",
      "delete"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 198,
    company: "Oracle",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Hard",
    category: "Spring Boot",

    question: "Why is Spring Boot widely used for Java backend development?",

    expectedKeywords: [
      "spring boot",
      "dependency injection",
      "auto configuration",
      "microservices"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 199,
    company: "Oracle",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Medium",
    category: "JDBC",

    question: "What is JDBC? Explain the steps to connect a Java application with a database.",

    expectedKeywords: [
      "driver",
      "connection",
      "statement",
      "resultset"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 200,
    company: "Oracle",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Hard",
    category: "System Design",

    question: "Design the backend architecture for a simple online banking system.",

    expectedKeywords: [
      "database",
      "authentication",
      "transactions",
      "api"
    ],

    expectedDuration: "5 min"
  },  // =====================================
  // MIXED / BACKEND / SYSTEM DESIGN
  // =====================================

  {
    id: 201,
    company: "Oracle",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Easy",
    category: "Projects",

    question: "How would you convert your AI Career Copilot into a full-stack application?",

    expectedKeywords: [
      "frontend",
      "backend",
      "database",
      "api"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 202,
    company: "Oracle",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Medium",
    category: "Backend",

    question: "Design REST APIs for a job application management system.",

    expectedKeywords: [
      "rest",
      "endpoint",
      "crud",
      "http methods"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 203,
    company: "Oracle",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Medium",
    category: "Database",

    question: "How would you design the database schema for an interview preparation platform?",

    expectedKeywords: [
      "tables",
      "relationships",
      "primary key",
      "foreign key"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 204,
    company: "Oracle",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Hard",
    category: "Authentication",

    question: "Explain the difference between Authentication and Authorization. How would you implement both?",

    expectedKeywords: [
      "authentication",
      "authorization",
      "jwt",
      "roles"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 205,
    company: "Oracle",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Hard",
    category: "Performance",

    question: "How would you optimize the performance of a backend service handling millions of API requests?",

    expectedKeywords: [
      "caching",
      "load balancer",
      "database indexing",
      "scaling"
    ],

    expectedDuration: "5 min"
  },

  {
    id: 206,
    company: "Oracle",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Hard",
    category: "Debugging",

    question: "A backend API suddenly becomes very slow in production. How would you investigate and fix the issue?",

    expectedKeywords: [
      "logs",
      "database",
      "profiling",
      "monitoring"
    ],

    expectedDuration: "5 min"
  },

  {
    id: 207,
    company: "Oracle",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Medium",
    category: "Deployment",

    question: "Describe the steps involved in deploying a Java backend application to production.",

    expectedKeywords: [
      "build",
      "server",
      "deployment",
      "monitoring"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 208,
    company: "Oracle",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Medium",
    category: "Cloud",

    question: "What are the advantages of deploying backend applications on cloud platforms such as Oracle Cloud?",

    expectedKeywords: [
      "cloud",
      "availability",
      "scalability",
      "managed services"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 209,
    company: "Oracle",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Medium",
    category: "Security",

    question: "What security practices would you follow while building REST APIs?",

    expectedKeywords: [
      "https",
      "jwt",
      "validation",
      "authentication"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 210,
    company: "Oracle",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Medium",
    category: "Career",

    question: "If you join Oracle, which backend technologies or products would you like to work on, and why?",

    expectedKeywords: [
      "java",
      "backend",
      "database",
      "cloud"
    ],

    expectedDuration: "3 min"
  }

];

export default oracleQuestions;