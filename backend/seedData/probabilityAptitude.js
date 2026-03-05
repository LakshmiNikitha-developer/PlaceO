// Seed data for Probability aptitude questions

const probabilityAptitudeQuestions = [
  {
    questionText: "What is the probability of selecting 2 spades from a pack of 52 cards?",
    options: [
      "A) 78/1275",
      "B) 100/1275",
      "C) 150/1275",
      "D) 200/1275"
    ],
    correctAnswer: "A) 78/1275",
    explanation: "Total ways of selecting 2 cards = 52C2 = 1275. Ways of selecting 2 spades = 13C2 = 78. Probability = 78/1275",
    difficulty: "hard",
    category: "aptitude",
    subcategory: "probability",
    topic: "Probability"
  },
  {
    questionText: "A bag contains 3 red and 5 blue balls. If one ball is drawn at random, what is the probability it is blue?",
    options: ["A) 3/8", "B) 5/8", "C) 1/2", "D) 2/3"],
    correctAnswer: "B) 5/8",
    explanation: "Total balls = 8, blue = 5 so probability = 5/8.",
    difficulty: "easy",
    category: "aptitude",
    subcategory: "probability",
    topic: "Basic Probability"
  },
  {
    questionText: "What is the probability of drawing a red card from a standard deck of 52 cards?",
    options: ["A) 1/4", "B) 1/3", "C) 1/2", "D) 2/3"],
    correctAnswer: "C) 1/2",
    explanation: "Half the cards in a deck are red (26/52 = 1/2).",
    difficulty: "easy",
    category: "aptitude",
    subcategory: "probability",
    topic: "Color Probability"
  },
  {
    questionText: "A die is thrown once. What is the probability of getting a prime number?",
    options: ["A) 1/6", "B) 1/3", "C) 1/2", "D) 2/3"],
    correctAnswer: "C) 1/2",
    explanation: "Prime numbers on a die: 2, 3, 5 (3 numbers). Total outcomes: 6. Probability = 3/6 = 1/2.",
    difficulty: "easy",
    category: "aptitude",
    subcategory: "probability",
    topic: "Dice Probability"
  },
  {
    questionText: "Two coins are tossed simultaneously. What is the probability of getting at least one head?",
    options: ["A) 1/4", "B) 1/2", "C) 3/4", "D) 1"],
    correctAnswer: "C) 3/4",
    explanation: "Total outcomes: HH, HT, TH, TT. Favorable: HH, HT, TH (3 outcomes). Probability = 3/4.",
    difficulty: "easy",
    category: "aptitude",
    subcategory: "probability",
    topic: "Coin Probability"
  },
  {
    questionText: "A bag contains 4 red, 3 blue, and 2 green balls. What is the probability of drawing a blue ball?",
    options: ["A) 1/3", "B) 3/9", "C) 1/4", "D) 2/9"],
    correctAnswer: "B) 3/9",
    explanation: "Total balls = 9, blue balls = 3. Probability = 3/9 = 1/3.",
    difficulty: "easy",
    category: "aptitude",
    subcategory: "probability",
    topic: "Basic Probability"
  },
  {
    questionText: "What is the probability of rolling a sum of 7 with two dice?",
    options: ["A) 1/6", "B) 1/9", "C) 1/8", "D) 1/7"],
    correctAnswer: "A) 1/6",
    explanation: "Total outcomes = 36. Favorable outcomes for sum 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 ways. Probability = 6/36 = 1/6.",
    difficulty: "medium",
    category: "aptitude",
    subcategory: "probability",
    topic: "Dice Probability"
  },
  {
    questionText: "A card is drawn from a pack of 52 cards. What is the probability it is a king or a spade?",
    options: ["A) 4/52", "B) 13/52", "C) 16/52", "D) 17/52"],
    correctAnswer: "C) 16/52",
    explanation: "Kings = 4, spades = 13, but king of spades is counted twice. So 4 + 13 - 1 = 16. Probability = 16/52.",
    difficulty: "medium",
    category: "aptitude",
    subcategory: "probability",
    topic: "Card Probability"
  },
  {
    questionText: "The probability of raining tomorrow is 0.3. What is the probability it will not rain?",
    options: ["A) 0.3", "B) 0.7", "C) 1.0", "D) 0.0"],
    correctAnswer: "B) 0.7",
    explanation: "Probability of not raining = 1 - probability of raining = 1 - 0.3 = 0.7.",
    difficulty: "easy",
    category: "aptitude",
    subcategory: "probability",
    topic: "Complementary Probability"
  },
  {
    questionText: "A box contains 10 balls numbered 1 to 10. What is the probability of drawing a number greater than 7?",
    options: ["A) 3/10", "B) 4/10", "C) 5/10", "D) 7/10"],
    correctAnswer: "A) 3/10",
    explanation: "Numbers greater than 7: 8, 9, 10 (3 numbers). Total numbers: 10. Probability = 3/10.",
    difficulty: "easy",
    category: "aptitude",
    subcategory: "probability",
    topic: "Number Probability"
  },
  {
    questionText: "What is the probability of drawing 2 aces from a pack of 52 cards?",
    options: ["A) 1/221", "B) 2/221", "C) 3/221", "D) 4/221"],
    correctAnswer: "A) 1/221",
    explanation: "Total ways = 52C2 = 1326. Ways to draw 2 aces = 4C2 = 6. Probability = 6/1326 = 1/221.",
    difficulty: "hard",
    category: "aptitude",
    subcategory: "probability",
    topic: "Card Probability"
  },
  {
    questionText: "Three coins are tossed. What is the probability of getting exactly 2 heads?",
    options: ["A) 1/8", "B) 3/8", "C) 1/4", "D) 1/2"],
    correctAnswer: "B) 3/8",
    explanation: "Total outcomes = 8. Favorable: HHT, HTH, THH (3 outcomes). Probability = 3/8.",
    difficulty: "medium",
    category: "aptitude",
    subcategory: "probability",
    topic: "Coin Probability"
  }
];

module.exports = probabilityAptitudeQuestions;
