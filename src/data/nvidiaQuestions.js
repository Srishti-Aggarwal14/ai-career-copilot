const nvidiaQuestions = [

  // =====================================
  // HR QUESTIONS
  // =====================================

  {
    id: 106,
    company: "NVIDIA",
    role: "Software Engineer / AI Engineer",
    type: "HR",
    difficulty: "Easy",
    category: "HR",

    question: "Tell me about yourself.",

    expectedKeywords: [
      "education",
      "skills",
      "AI",
      "projects"
    ],

    expectedDuration: "2 min"
  },

  {
    id: 107,
    company: "NVIDIA",
    role: "Software Engineer / AI Engineer",
    type: "HR",
    difficulty: "Easy",
    category: "HR",

    question: "Why do you want to join NVIDIA?",

    expectedKeywords: [
      "AI",
      "GPU",
      "innovation",
      "technology"
    ],

    expectedDuration: "2 min"
  },

  {
    id: 108,
    company: "NVIDIA",
    role: "Software Engineer / AI Engineer",
    type: "HR",
    difficulty: "Medium",
    category: "Projects",

    question: "Describe your most impactful AI or software project.",

    expectedKeywords: [
      "project",
      "challenge",
      "solution",
      "result"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 109,
    company: "NVIDIA",
    role: "Software Engineer / AI Engineer",
    type: "HR",
    difficulty: "Medium",
    category: "Teamwork",

    question: "Tell me about a time you collaborated with a team to solve a difficult technical problem.",

    expectedKeywords: [
      "team",
      "communication",
      "solution",
      "collaboration"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 110,
    company: "NVIDIA",
    role: "Software Engineer / AI Engineer",
    type: "HR",
    difficulty: "Medium",
    category: "Learning",

    question: "How do you stay updated with the latest AI and software technologies?",

    expectedKeywords: [
      "learning",
      "research",
      "technology",
      "AI"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 111,
    company: "NVIDIA",
    role: "Software Engineer / AI Engineer",
    type: "HR",
    difficulty: "Medium",
    category: "Problem Solving",

    question: "Describe a difficult bug that took significant effort to solve.",

    expectedKeywords: [
      "debugging",
      "analysis",
      "solution",
      "testing"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 112,
    company: "NVIDIA",
    role: "Software Engineer / AI Engineer",
    type: "HR",
    difficulty: "Hard",
    category: "Innovation",

    question: "Tell me about a time you introduced a new idea that improved a project.",

    expectedKeywords: [
      "innovation",
      "improvement",
      "initiative",
      "result"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 113,
    company: "NVIDIA",
    role: "Software Engineer / AI Engineer",
    type: "HR",
    difficulty: "Hard",
    category: "Leadership",

    question: "Describe a situation where you had to lead a technical discussion or project.",

    expectedKeywords: [
      "leadership",
      "communication",
      "planning",
      "execution"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 114,
    company: "NVIDIA",
    role: "Software Engineer / AI Engineer",
    type: "HR",
    difficulty: "Medium",
    category: "Career",

    question: "Where do you see yourself in the next five years?",

    expectedKeywords: [
      "career",
      "AI",
      "growth",
      "learning"
    ],

    expectedDuration: "2 min"
  },

  {
    id: 115,
    company: "NVIDIA",
    role: "Software Engineer / AI Engineer",
    type: "HR",
    difficulty: "Medium",
    category: "Goals",

    question: "What motivates you to work in Artificial Intelligence?",

    expectedKeywords: [
      "AI",
      "innovation",
      "learning",
      "technology"
    ],

    expectedDuration: "2 min"
  },  // =====================================
  // TECHNICAL QUESTIONS
  // =====================================

  {
    id: 116,
    company: "NVIDIA",
    role: "Software Engineer / AI Engineer",
    type: "Technical",
    difficulty: "Easy",
    category: "Python",

    question: "Why is Python widely used in Artificial Intelligence and Machine Learning?",

    expectedKeywords: [
      "libraries",
      "simplicity",
      "numpy",
      "pandas"
    ],

    expectedDuration: "2 min"
  },

  {
    id: 117,
    company: "NVIDIA",
    role: "Software Engineer / AI Engineer",
    type: "Technical",
    difficulty: "Easy",
    category: "Machine Learning",

    question: "What is the difference between Supervised, Unsupervised, and Reinforcement Learning?",

    expectedKeywords: [
      "labels",
      "clustering",
      "reward",
      "learning"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 118,
    company: "NVIDIA",
    role: "Software Engineer / AI Engineer",
    type: "Technical",
    difficulty: "Medium",
    category: "Machine Learning",

    question: "Explain the Bias-Variance Tradeoff.",

    expectedKeywords: [
      "overfitting",
      "underfitting",
      "generalization",
      "error"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 119,
    company: "NVIDIA",
    role: "Software Engineer / AI Engineer",
    type: "Technical",
    difficulty: "Medium",
    category: "Deep Learning",

    question: "What is a Neural Network? Explain its basic architecture.",

    expectedKeywords: [
      "input layer",
      "hidden layer",
      "output layer",
      "weights"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 120,
    company: "NVIDIA",
    role: "Software Engineer / AI Engineer",
    type: "Technical",
    difficulty: "Medium",
    category: "Deep Learning",

    question: "What is the purpose of an activation function? Name some commonly used activation functions.",

    expectedKeywords: [
      "relu",
      "sigmoid",
      "tanh",
      "non linear"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 121,
    company: "NVIDIA",
    role: "Software Engineer / AI Engineer",
    type: "Technical",
    difficulty: "Medium",
    category: "Computer Vision",

    question: "What is a Convolutional Neural Network (CNN)? Where is it used?",

    expectedKeywords: [
      "convolution",
      "pooling",
      "images",
      "feature extraction"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 122,
    company: "NVIDIA",
    role: "Software Engineer / AI Engineer",
    type: "Technical",
    difficulty: "Hard",
    category: "NLP",

    question: "What are Transformers? Why are they preferred over RNNs in modern NLP?",

    expectedKeywords: [
      "attention",
      "parallelization",
      "sequence",
      "transformer"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 123,
    company: "NVIDIA",
    role: "Software Engineer / AI Engineer",
    type: "Technical",
    difficulty: "Hard",
    category: "LLM",

    question: "What is a Large Language Model (LLM)? Give some real-world applications.",

    expectedKeywords: [
      "transformer",
      "tokens",
      "language model",
      "generation"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 124,
    company: "NVIDIA",
    role: "Software Engineer / AI Engineer",
    type: "Technical",
    difficulty: "Medium",
    category: "PyTorch",

    question: "Why is PyTorch popular for Deep Learning development?",

    expectedKeywords: [
      "dynamic graph",
      "gpu",
      "tensor",
      "autograd"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 125,
    company: "NVIDIA",
    role: "Software Engineer / AI Engineer",
    type: "Technical",
    difficulty: "Hard",
    category: "GPU Computing",

    question: "Why are GPUs significantly faster than CPUs for Deep Learning workloads?",

    expectedKeywords: [
      "parallel processing",
      "cores",
      "matrix operations",
      "gpu"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 126,
    company: "NVIDIA",
    role: "Software Engineer / AI Engineer",
    type: "Technical",
    difficulty: "Hard",
    category: "CUDA",

    question: "What is CUDA? Why is it important for NVIDIA GPUs?",

    expectedKeywords: [
      "cuda",
      "parallel computing",
      "kernel",
      "gpu"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 127,
    company: "NVIDIA",
    role: "Software Engineer / AI Engineer",
    type: "Technical",
    difficulty: "Medium",
    category: "Statistics",

    question: "Explain Precision, Recall, and F1-Score.",

    expectedKeywords: [
      "precision",
      "recall",
      "f1",
      "classification"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 128,
    company: "NVIDIA",
    role: "Software Engineer / AI Engineer",
    type: "Technical",
    difficulty: "Medium",
    category: "Machine Learning",

    question: "What is Cross Validation? Why is it used?",

    expectedKeywords: [
      "k-fold",
      "validation",
      "generalization",
      "evaluation"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 129,
    company: "NVIDIA",
    role: "Software Engineer / AI Engineer",
    type: "Technical",
    difficulty: "Hard",
    category: "Optimization",

    question: "How would you reduce overfitting in a Machine Learning model?",

    expectedKeywords: [
      "dropout",
      "regularization",
      "augmentation",
      "early stopping"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 130,
    company: "NVIDIA",
    role: "Software Engineer / AI Engineer",
    type: "Technical",
    difficulty: "Hard",
    category: "AI",

    question: "Explain the complete Machine Learning pipeline from data collection to model deployment.",

    expectedKeywords: [
      "data collection",
      "preprocessing",
      "training",
      "deployment"
    ],

    expectedDuration: "5 min"
  },  // =====================================
  // MIXED / PROJECT / SYSTEM DESIGN
  // =====================================

  {
    id: 131,
    company: "NVIDIA",
    role: "Software Engineer / AI Engineer",
    type: "Mixed",
    difficulty: "Easy",
    category: "Projects",

    question: "Explain your AI Career Copilot project from start to finish.",

    expectedKeywords: [
      "react",
      "features",
      "workflow",
      "components"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 132,
    company: "NVIDIA",
    role: "Software Engineer / AI Engineer",
    type: "Mixed",
    difficulty: "Medium",
    category: "Projects",

    question: "If you had one month to improve your AI Career Copilot project, what features would you add?",

    expectedKeywords: [
      "AI",
      "improvement",
      "features",
      "scalability"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 133,
    company: "NVIDIA",
    role: "Software Engineer / AI Engineer",
    type: "Mixed",
    difficulty: "Medium",
    category: "LLM",

    question: "How would you integrate an LLM into your AI Career Copilot application?",

    expectedKeywords: [
      "api",
      "prompt",
      "context",
      "response"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 134,
    company: "NVIDIA",
    role: "Software Engineer / AI Engineer",
    type: "Mixed",
    difficulty: "Medium",
    category: "MLOps",

    question: "What is model deployment? Describe the steps involved in deploying a Machine Learning model.",

    expectedKeywords: [
      "training",
      "model",
      "api",
      "deployment"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 135,
    company: "NVIDIA",
    role: "Software Engineer / AI Engineer",
    type: "Mixed",
    difficulty: "Hard",
    category: "System Design",

    question: "Design a scalable AI chatbot capable of handling millions of users.",

    expectedKeywords: [
      "load balancer",
      "database",
      "llm",
      "scaling"
    ],

    expectedDuration: "5 min"
  },

  {
    id: 136,
    company: "NVIDIA",
    role: "Software Engineer / AI Engineer",
    type: "Mixed",
    difficulty: "Hard",
    category: "AI Infrastructure",

    question: "How would you optimize GPU utilization during deep learning model training?",

    expectedKeywords: [
      "batch size",
      "mixed precision",
      "gpu",
      "optimization"
    ],

    expectedDuration: "5 min"
  },

  {
    id: 137,
    company: "NVIDIA",
    role: "Software Engineer / AI Engineer",
    type: "Mixed",
    difficulty: "Hard",
    category: "Debugging",

    question: "Suppose your AI model suddenly starts giving inaccurate predictions after deployment. How would you investigate the issue?",

    expectedKeywords: [
      "logs",
      "data drift",
      "monitoring",
      "evaluation"
    ],

    expectedDuration: "5 min"
  },

  {
    id: 138,
    company: "NVIDIA",
    role: "Software Engineer / AI Engineer",
    type: "Mixed",
    difficulty: "Medium",
    category: "Performance",

    question: "How would you improve the inference speed of a Deep Learning model?",

    expectedKeywords: [
      "quantization",
      "pruning",
      "batching",
      "optimization"
    ],

    expectedDuration: "4 min"
  },

  {
    id: 139,
    company: "NVIDIA",
    role: "Software Engineer / AI Engineer",
    type: "Mixed",
    difficulty: "Medium",
    category: "Cloud",

    question: "What role do cloud platforms play in AI and Machine Learning projects?",

    expectedKeywords: [
      "aws",
      "azure",
      "gcp",
      "deployment"
    ],

    expectedDuration: "3 min"
  },

  {
    id: 140,
    company: "NVIDIA",
    role: "Software Engineer / AI Engineer",
    type: "Mixed",
    difficulty: "Medium",
    category: "Career",

    question: "If you join NVIDIA, what AI technologies would you like to work on during your first year?",

    expectedKeywords: [
      "AI",
      "GPU",
      "deep learning",
      "research"
    ],

    expectedDuration: "3 min"
  }

];

export default nvidiaQuestions;