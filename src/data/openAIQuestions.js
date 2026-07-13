const openAIQuestions = [

  // =====================================
  // HR / PROJECTS
  // =====================================

  {
    id: 316,
    company: "OpenAI",
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
    id: 317,
    company: "OpenAI",
    role: "Software Engineer",
    type: "HR",
    difficulty: "Easy",
    category: "HR",

    question: "Why do you want to work at OpenAI?",

    expectedKeywords: [
      "ai",
      "research",
      "technology",
      "impact"
    ],

    expectedDuration: "2 min"
  },

  {
    id: 318,
    company: "OpenAI",
    role: "Software Engineer",
    type: "HR",
    difficulty: "Medium",
    category: "Projects",

    question: "Explain your AI Career Copilot project and describe where AI adds value.",

    expectedKeywords: [
      "resume",
      "interview",
      "ai",
      "users"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 319,
    company: "OpenAI",
    role: "Software Engineer",
    type: "HR",
    difficulty: "Medium",
    category: "Learning",

    question: "Describe a recent AI concept or technology that you learned on your own.",

    expectedKeywords: [
      "learning",
      "documentation",
      "practice",
      "implementation"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 320,
    company: "OpenAI",
    role: "Software Engineer",
    type: "HR",
    difficulty: "Medium",
    category: "Problem Solving",

    question: "Tell me about the most challenging AI-related problem you've worked on.",

    expectedKeywords: [
      "analysis",
      "solution",
      "experimentation",
      "learning"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 321,
    company: "OpenAI",
    role: "Software Engineer",
    type: "HR",
    difficulty: "Medium",
    category: "Teamwork",

    question: "Describe a project where you collaborated with people having different technical backgrounds.",

    expectedKeywords: [
      "communication",
      "teamwork",
      "collaboration",
      "solution"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 322,
    company: "OpenAI",
    role: "Software Engineer",
    type: "HR",
    difficulty: "Hard",
    category: "Innovation",

    question: "If you had unlimited resources, what AI product would you build and why?",

    expectedKeywords: [
      "innovation",
      "impact",
      "users",
      "ai"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 323,
    company: "OpenAI",
    role: "Software Engineer",
    type: "HR",
    difficulty: "Medium",
    category: "Ethics",

    question: "How should engineers balance innovation with responsible AI development?",

    expectedKeywords: [
      "ethics",
      "responsibility",
      "safety",
      "users"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 324,
    company: "OpenAI",
    role: "Software Engineer",
    type: "HR",
    difficulty: "Medium",
    category: "Career",

    question: "Where do you see yourself contributing in the field of AI over the next five years?",

    expectedKeywords: [
      "growth",
      "ai",
      "engineering",
      "learning"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 325,
    company: "OpenAI",
    role: "Software Engineer",
    type: "HR",
    difficulty: "Medium",
    category: "Goals",

    question: "What excites you the most about building AI-powered applications?",

    expectedKeywords: [
      "automation",
      "users",
      "innovation",
      "impact"
    ],

    expectedDuration: "2 min"
  },  // =====================================
  // TECHNICAL QUESTIONS
  // =====================================

  {
    id: 326,
    company: "OpenAI",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Easy",
    category: "Python",

    question: "What are the advantages of Python for AI and Machine Learning?",

    expectedKeywords: [
      "libraries",
      "simplicity",
      "productivity",
      "ecosystem"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 327,
    company: "OpenAI",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Medium",
    category: "Python",

    question: "Explain the difference between lists, tuples, sets, and dictionaries in Python.",

    expectedKeywords: [
      "list",
      "tuple",
      "set",
      "dictionary"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 328,
    company: "OpenAI",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Medium",
    category: "LLMs",

    question: "What is a Large Language Model (LLM)? How does it differ from a traditional machine learning model?",

    expectedKeywords: [
      "transformer",
      "tokens",
      "pretraining",
      "language model"
    ],

    expectedDuration: "5 min"
  },

  {
    id: 329,
    company: "OpenAI",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Hard",
    category: "Transformers",

    question: "Why did Transformer architectures replace RNNs for most NLP tasks?",

    expectedKeywords: [
      "attention",
      "parallelization",
      "long context",
      "transformer"
    ],

    expectedDuration: "5 min"
  },

  {
    id: 330,
    company: "OpenAI",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Medium",
    category: "Prompt Engineering",

    question: "What is prompt engineering? Give examples of techniques that improve LLM responses.",

    expectedKeywords: [
      "few shot",
      "zero shot",
      "chain of thought",
      "instructions"
    ],

    expectedDuration: "5 min"
  },

  {
    id: 331,
    company: "OpenAI",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Hard",
    category: "Embeddings",

    question: "What are embeddings? Why are they important in semantic search?",

    expectedKeywords: [
      "vector",
      "similarity",
      "semantic",
      "embedding"
    ],

    expectedDuration: "5 min"
  },

  {
    id: 332,
    company: "OpenAI",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Hard",
    category: "RAG",

    question: "Explain Retrieval-Augmented Generation (RAG). Why is it often preferred over training a model from scratch?",

    expectedKeywords: [
      "retrieval",
      "knowledge base",
      "context",
      "generation"
    ],

    expectedDuration: "6 min"
  },

  {
    id: 333,
    company: "OpenAI",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Hard",
    category: "Vector Databases",

    question: "What is a vector database? How is it different from a traditional relational database?",

    expectedKeywords: [
      "vectors",
      "similarity search",
      "embeddings",
      "indexing"
    ],

    expectedDuration: "5 min"
  },

  {
    id: 334,
    company: "OpenAI",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Hard",
    category: "AI Agents",

    question: "What is an AI agent? How is it different from a simple chatbot?",

    expectedKeywords: [
      "planning",
      "tools",
      "reasoning",
      "actions"
    ],

    expectedDuration: "5 min"
  },

  {
    id: 335,
    company: "OpenAI",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Hard",
    category: "Function Calling",

    question: "Why is function calling useful in LLM-powered applications?",

    expectedKeywords: [
      "apis",
      "structured output",
      "tools",
      "automation"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 336,
    company: "OpenAI",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Medium",
    category: "AI Safety",

    question: "What are hallucinations in LLMs? How can developers reduce them?",

    expectedKeywords: [
      "hallucination",
      "grounding",
      "rag",
      "verification"
    ],

    expectedDuration: "5 min"
  },

  {
    id: 337,
    company: "OpenAI",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Medium",
    category: "Evaluation",

    question: "How would you evaluate whether an AI application is performing well?",

    expectedKeywords: [
      "accuracy",
      "latency",
      "user feedback",
      "metrics"
    ],

    expectedDuration: "5 min"
  },

  {
    id: 338,
    company: "OpenAI",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Hard",
    category: "Fine-Tuning",

    question: "When would you choose fine-tuning over prompt engineering?",

    expectedKeywords: [
      "fine tuning",
      "prompt engineering",
      "dataset",
      "cost"
    ],

    expectedDuration: "5 min"
  },

  {
    id: 339,
    company: "OpenAI",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Hard",
    category: "System Design",

    question: "Design a scalable AI-powered resume review system.",

    expectedKeywords: [
      "llm",
      "api",
      "database",
      "scalability"
    ],

    expectedDuration: "6 min"
  },

  {
    id: 340,
    company: "OpenAI",
    role: "Software Engineer",
    type: "Technical",
    difficulty: "Hard",
    category: "Problem Solving",

    question: "An AI assistant gives correct answers 95% of the time but occasionally produces harmful responses. How would you improve it?",

    expectedKeywords: [
      "guardrails",
      "moderation",
      "evaluation",
      "safety"
    ],

    expectedDuration: "6 min"
  },  // =====================================
  // MIXED / AI SYSTEM DESIGN / PRODUCT
  // =====================================

  {
    id: 341,
    company: "OpenAI",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Hard",
    category: "AI Product Design",

    question: "Design an AI-powered coding assistant similar to ChatGPT for software developers.",

    expectedKeywords: [
      "llm",
      "context",
      "code",
      "api"
    ],

    expectedDuration: "6 min"
  },

  {
    id: 342,
    company: "OpenAI",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Hard",
    category: "Projects",

    question: "If you redesigned AI Career Copilot today, what AI-powered features would you add first and why?",

    expectedKeywords: [
      "personalization",
      "feedback",
      "interview",
      "recommendations"
    ],

    expectedDuration: "5 min"
  },

  {
    id: 343,
    company: "OpenAI",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Hard",
    category: "Responsible AI",

    question: "How would you prevent users from misusing an AI application that generates text or code?",

    expectedKeywords: [
      "guardrails",
      "moderation",
      "policy",
      "safety"
    ],

    expectedDuration: "5 min"
  },

  {
    id: 344,
    company: "OpenAI",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Hard",
    category: "Multi-Agent Systems",

    question: "When would you use multiple AI agents instead of a single LLM?",

    expectedKeywords: [
      "specialization",
      "coordination",
      "planning",
      "workflow"
    ],

    expectedDuration: "5 min"
  },

  {
    id: 345,
    company: "OpenAI",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Medium",
    category: "Deployment",

    question: "What factors would you consider before deploying an LLM-powered application to production?",

    expectedKeywords: [
      "latency",
      "cost",
      "security",
      "monitoring"
    ],

    expectedDuration: "5 min"
  },

  {
    id: 346,
    company: "OpenAI",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Hard",
    category: "Debugging",

    question: "Users report inconsistent AI responses for identical prompts. How would you investigate the issue?",

    expectedKeywords: [
      "temperature",
      "model version",
      "prompt",
      "logging"
    ],

    expectedDuration: "5 min"
  },

  {
    id: 347,
    company: "OpenAI",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Hard",
    category: "Monitoring",

    question: "How would you monitor the quality of an AI system after deployment?",

    expectedKeywords: [
      "evaluation",
      "feedback",
      "metrics",
      "monitoring"
    ],

    expectedDuration: "5 min"
  },

  {
    id: 348,
    company: "OpenAI",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Medium",
    category: "Scalability",

    question: "Suppose your AI application suddenly receives ten million requests in a day. How would you scale it?",

    expectedKeywords: [
      "load balancing",
      "caching",
      "autoscaling",
      "queue"
    ],

    expectedDuration: "6 min"
  },

  {
    id: 349,
    company: "OpenAI",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Medium",
    category: "Future of AI",

    question: "Which area of AI do you believe will have the greatest impact over the next five years, and why?",

    expectedKeywords: [
      "agents",
      "reasoning",
      "multimodal",
      "automation"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 350,
    company: "OpenAI",
    role: "Software Engineer",
    type: "Mixed",
    difficulty: "Medium",
    category: "Career",

    question: "If you joined OpenAI, what type of AI systems would you be most excited to help build?",

    expectedKeywords: [
      "llms",
      "agents",
      "education",
      "research"
    ],

    expectedDuration: "3 min"
  }

];

export default openAIQuestions;