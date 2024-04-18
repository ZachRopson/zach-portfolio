const programmingLanguages = [
  "python",
  "javascript",
  "mongodb",
  "json",
  "java",
  "html",
  "css",
  "c",
  "csharp",
  "golang",
  "kotlin",
  "php",
  "sql",
  "ruby",
  "fortran",
];

export const randomWord = () => {
  return programmingLanguages[
    Math.floor(Math.random() * programmingLanguages.length)
  ];
};

export const qBank = [
  {
    id: 1,
    question: "What is the capital of Canada?",
    options: ["Toronto", "Montreal", "Vancouver", "Ottawa"],
    answer: "Ottawa",
  },
  {
    id: 2,
    question: "What is the capital of the USA?",
    options: ["Los Angeles", "Houston", "New York", "Washington D.C."],
    answer: "Washington D.C.",
  },
  {
    id: 3,
    question: "What is the capital of India?",
    options: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
    answer: "Delhi",
  },
  {
    id: 4,
    question: "What is the capital of Spain?",
    options: ["Seville", "Valencia", "Madrid", "Barcelona"],
    answer: "Madrid",
  },
  {
    id: 5,
    question: "What is capital of Ireland?",
    options: ["Cork", "Dublin", "Waterford", "Galway"],
    answer: "Dublin",
  },
];
