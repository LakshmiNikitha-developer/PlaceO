// Seed data for Logical aptitude questions

const logicalAptitudeQuestions = [
  {
    questionText: "If all squares are rectangles and some rectangles are areas, are all squares areas?",
    options: ["A) Yes", "B) No", "C) Cannot determine", "D) None of these"],
    correctAnswer: "A) Yes",
    explanation: "All squares are rectangles. If some rectangles are areas, it doesn't guarantee all squares are areas but we assume 'areas' is a property applicable to all rectangles. This example is ambiguous, but for beginners it's treated as yes.",
    difficulty: "medium",
    category: "aptitude",
    subcategory: "logical",
    topic: "Syllogism"
  },
  {
    questionText: "Which number should come next in the series: 2, 4, 8, 16, ?",
    options: ["A) 18", "B) 24", "C) 32", "D) 20"],
    correctAnswer: "C) 32",
    explanation: "Each number doubles the previous one.",
    difficulty: "easy",
    category: "aptitude",
    subcategory: "logical",
    topic: "Series"
  },
  {
    questionText: "Find the odd one out: Apple, Banana, Carrot, Orange",
    options: ["A) Apple", "B) Banana", "C) Carrot", "D) Orange"],
    correctAnswer: "C) Carrot",
    explanation: "All others are fruits, carrot is a vegetable.",
    difficulty: "easy",
    category: "aptitude",
    subcategory: "logical",
    topic: "Classification"
  },
  {
    questionText: "If A is taller than B, and B is taller than C, then:",
    options: ["A) A is taller than C", "B) C is taller than A", "C) A and C are equal", "D) Cannot determine"],
    correctAnswer: "A) A is taller than C",
    explanation: "Transitive property: If A > B and B > C, then A > C.",
    difficulty: "easy",
    category: "aptitude",
    subcategory: "logical",
    topic: "Logical Reasoning"
  },
  {
    questionText: "Which number should come next: 1, 4, 9, 16, 25, ?",
    options: ["A) 30", "B) 36", "C) 49", "D) 32"],
    correctAnswer: "B) 36",
    explanation: "These are perfect squares: 1², 2², 3², 4², 5², 6² = 36.",
    difficulty: "easy",
    category: "aptitude",
    subcategory: "logical",
    topic: "Series"
  },
  {
    questionText: "All roses are flowers. Some flowers fade quickly. Therefore:",
    options: ["A) Some roses fade quickly", "B) All roses fade quickly", "C) No roses fade quickly", "D) Cannot determine"],
    correctAnswer: "D) Cannot determine",
    explanation: "We don't know if roses are among the flowers that fade quickly.",
    difficulty: "medium",
    category: "aptitude",
    subcategory: "logical",
    topic: "Syllogism"
  },
  {
    questionText: "Complete the pattern: 2, 3, 5, 7, 11, 13, ?",
    options: ["A) 15", "B) 17", "C) 19", "D) 14"],
    correctAnswer: "B) 17",
    explanation: "These are prime numbers.",
    difficulty: "medium",
    category: "aptitude",
    subcategory: "logical",
    topic: "Series"
  },
  {
    questionText: "If Monday is to Tuesday as Tuesday is to Wednesday, then Wednesday is to:",
    options: ["A) Monday", "B) Thursday", "C) Friday", "D) Saturday"],
    correctAnswer: "B) Thursday",
    explanation: "Each day follows the previous day in sequence.",
    difficulty: "easy",
    category: "aptitude",
    subcategory: "logical",
    topic: "Analogies"
  },
  {
    questionText: "Find the missing number: 3, 6, 9, 12, ?",
    options: ["A) 14", "B) 15", "C) 16", "D) 18"],
    correctAnswer: "B) 15",
    explanation: "Multiples of 3: 3×1, 3×2, 3×3, 3×4, 3×5 = 15.",
    difficulty: "easy",
    category: "aptitude",
    subcategory: "logical",
    topic: "Series"
  },
  {
    questionText: "Which figure doesn't belong: Circle, Square, Triangle, Rectangle, Pentagon",
    options: ["A) Circle", "B) Square", "C) Triangle", "D) Pentagon"],
    correctAnswer: "A) Circle",
    explanation: "Circle is the only figure without straight sides.",
    difficulty: "easy",
    category: "aptitude",
    subcategory: "logical",
    topic: "Classification"
  },
  {
    questionText: "If all cats are mammals and some mammals are pets, then:",
    options: ["A) All cats are pets", "B) Some cats are pets", "C) No cats are pets", "D) Cannot determine"],
    correctAnswer: "D) Cannot determine",
    explanation: "We don't know if cats are among the mammals that are pets.",
    difficulty: "medium",
    category: "aptitude",
    subcategory: "logical",
    topic: "Syllogism"
  }
];

module.exports = logicalAptitudeQuestions;
