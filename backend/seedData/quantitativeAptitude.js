// Seed data for Quantitative Aptitude questions
// Extracted from shortcut formulas and converted to MCQ format

const quantitativeAptitudeQuestions = [
  // Ratio and Proportion
  {
    questionText: "Divide 720 in the ratio 2:3. What is the first number?",
    options: [
      "A) 270",
      "B) 288",
      "C) 300",
      "D) 360"
    ],
    correctAnswer: "B) 288",
    explanation: "Total parts = 2 + 3 = 5. First number = (2/5) × 720 = 288",
    difficulty: "easy",
    category: "aptitude",
    subcategory: "quant",
    topic: "Ratio and Proportion"
  },
  {
    questionText: "Price of diamond is directly proportional to its weight. If 2 grams of diamond costs $45,000, what is the price of 6 grams?",
    options: [
      "A) $90,000",
      "B) $110,000",
      "C) $135,000",
      "D) $150,000"
    ],
    correctAnswer: "C) $135,000",
    explanation: "Using direct proportion: 2/6 = 45000/B2 → B2 = 45000 × (6/2) = $135,000",
    difficulty: "easy",
    category: "aptitude",
    subcategory: "quant",
    topic: "Ratio and Proportion"
  },
  {
    questionText: "The ratio between salary of A and B is 4:5. The ratio between salary of B and C is 3:4. Find the salary of C if A is earning $3600.",
    options: [
      "A) $5000",
      "B) $6000",
      "C) $7200",
      "D) $8000"
    ],
    correctAnswer: "B) $6000",
    explanation: "A:B = 4:5 and B:C = 3:4. So A:C = 12:20 = 3:5. Therefore, 3600/C = 3/5 → C = 6000",
    difficulty: "medium",
    category: "aptitude",
    subcategory: "quant",
    topic: "Ratio and Proportion"
  },
  {
    questionText: "Two numbers are in the ratio 4:5. Sum of their squares is 1025. Find the numbers.",
    options: [
      "A) 16 and 20",
      "B) 20 and 25",
      "C) 24 and 30",
      "D) 28 and 35"
    ],
    correctAnswer: "B) 20 and 25",
    explanation: "Let numbers be 4x and 5x. Then (4x)² + (5x)² = 1025 → 41x² = 1025 → x = 5. Numbers are 20 and 25",
    difficulty: "medium",
    category: "aptitude",
    subcategory: "quant",
    topic: "Ratio and Proportion"
  },

  // Average
  {
    questionText: "Average age of a family of four members is 34. What is the average age after 4 years?",
    options: [
      "A) 36",
      "B) 38",
      "C) 40",
      "D) 42"
    ],
    correctAnswer: "B) 38",
    explanation: "When each person's age increases by 4 years, the average also increases by 4 years. New average = 34 + 4 = 38",
    difficulty: "easy",
    category: "aptitude",
    subcategory: "quant",
    topic: "Average"
  },
  {
    questionText: "Average marks scored by students in three classes are 40, 50, and 60. If there are 10, 20 and 30 students respectively, find the overall average.",
    options: [
      "A) 50",
      "B) 52.5",
      "C) 53.33",
      "D) 55"
    ],
    correctAnswer: "C) 53.33",
    explanation: "Overall average = [(40×10) + (50×20) + (60×30)] / [10+20+30] = 3200/60 = 53.33",
    difficulty: "medium",
    category: "aptitude",
    subcategory: "quant",
    topic: "Average"
  },

  // Percentage
  {
    questionText: "What is the percentage of marks scored by Sai if she scored 1102 out of 1200?",
    options: [
      "A) 89.5%",
      "B) 90%",
      "C) 91.83%",
      "D) 92.5%"
    ],
    correctAnswer: "C) 91.83%",
    explanation: "Percentage = (1102/1200) × 100 = 91.83%",
    difficulty: "easy",
    category: "aptitude",
    subcategory: "quant",
    topic: "Percentage"
  },
  {
    questionText: "Sradha's monthly salary is Rs. 40,000. After an increment of Rs. 5,000, what is the percentage increase?",
    options: [
      "A) 10%",
      "B) 12.5%",
      "C) 15%",
      "D) 20%"
    ],
    correctAnswer: "B) 12.5%",
    explanation: "% increase = [(45000 - 40000)/40000] × 100 = (5000/40000) × 100 = 12.5%",
    difficulty: "easy",
    category: "aptitude",
    subcategory: "quant",
    topic: "Percentage"
  },
  {
    questionText: "Salary of Sai was Rs. 20,000. If decreased by 10% and then increased by 30%, what is the new salary?",
    options: [
      "A) Rs. 21,000",
      "B) Rs. 22,400",
      "C) Rs. 23,400",
      "D) Rs. 24,000"
    ],
    correctAnswer: "C) Rs. 23,400",
    explanation: "Net change = -10 + 30 + [(-10)(30)/100] = 20 - 3 = 17% increase. New salary = 20000 + (17/100)×20000 = 23,400",
    difficulty: "medium",
    category: "aptitude",
    subcategory: "quant",
    topic: "Percentage"
  },

  // Profit and Loss
  {
    questionText: "A bike worth Rs. 40,000 is sold for Rs. 46,000. What is the profit percentage?",
    options: [
      "A) 10%",
      "B) 12%",
      "C) 15%",
      "D) 18%"
    ],
    correctAnswer: "C) 15%",
    explanation: "Profit % = [(46000-40000)/40000] × 100 = (6000/40000) × 100 = 15%",
    difficulty: "easy",
    category: "aptitude",
    subcategory: "quant",
    topic: "Profit, Loss and Discount"
  },
  {
    questionText: "A mobile phone worth Rs. 9,900 is sold for Rs. 9,000. What is the loss percentage?",
    options: [
      "A) 8%",
      "B) 9.09%",
      "C) 10%",
      "D) 11%"
    ],
    correctAnswer: "B) 9.09%",
    explanation: "Loss % = [(9900-9000)/9900] × 100 = (900/9900) × 100 = 9.09%",
    difficulty: "easy",
    category: "aptitude",
    subcategory: "quant",
    topic: "Profit, Loss and Discount"
  },

  // Time and Work
  {
    questionText: "It took 40 days to build 10 buildings. How long will it take to build 50 buildings with the same number of employees?",
    options: [
      "A) 100 days",
      "B) 150 days",
      "C) 200 days",
      "D) 250 days"
    ],
    correctAnswer: "C) 200 days",
    explanation: "Work is directly proportional to time. 10/50 = 40/T2 → T2 = 200 days",
    difficulty: "easy",
    category: "aptitude",
    subcategory: "quant",
    topic: "Time and Work"
  },
  {
    questionText: "If 20 men can do the work in 40 days, how many men are required to do the same work in 10 days?",
    options: [
      "A) 40 men",
      "B) 60 men",
      "C) 80 men",
      "D) 100 men"
    ],
    correctAnswer: "C) 80 men",
    explanation: "Time is inversely proportional to resources. 20/R2 = 10/40 → R2 = 80 men",
    difficulty: "medium",
    category: "aptitude",
    subcategory: "quant",
    topic: "Time and Work"
  },
  {
    questionText: "A can complete a work in 40 days. B can complete the same work in 60 days. How long will they take if working together?",
    options: [
      "A) 20 days",
      "B) 24 days",
      "C) 30 days",
      "D) 35 days"
    ],
    correctAnswer: "B) 24 days",
    explanation: "Time taken together = (40 × 60)/(40 + 60) = 2400/100 = 24 days",
    difficulty: "medium",
    category: "aptitude",
    subcategory: "quant",
    topic: "Time and Work"
  },

  // Simple Interest
  {
    questionText: "A man invested Rs. 10,000 at 4% per annum simple interest. What is the interest at the end of 3 years?",
    options: [
      "A) Rs. 1000",
      "B) Rs. 1200",
      "C) Rs. 1400",
      "D) Rs. 1500"
    ],
    correctAnswer: "B) Rs. 1200",
    explanation: "SI = (10000 × 3 × 4) / 100 = 120000/100 = 1200",
    difficulty: "easy",
    category: "aptitude",
    subcategory: "quant",
    topic: "Simple and Compound Interest"
  },

  // Time, Speed and Distance
  {
    questionText: "A thief standing 50m away from a dog starts running at 2 m/s. The dog chases at 3 m/s. How long will it take for the dog to catch the thief?",
    options: [
      "A) 30 seconds",
      "B) 40 seconds",
      "C) 50 seconds",
      "D) 60 seconds"
    ],
    correctAnswer: "C) 50 seconds",
    explanation: "Relative speed = 3 - 2 = 1 m/s. Time = Distance/Speed = 50/1 = 50 seconds",
    difficulty: "medium",
    category: "aptitude",
    subcategory: "quant",
    topic: "Time, Speed and Distance"
  },
  {
    questionText: "Two friends start 300m apart and walk towards each other at 2 m/s and 3 m/s. How long will they take to meet?",
    options: [
      "A) 30 seconds",
      "B) 50 seconds",
      "C) 60 seconds",
      "D) 80 seconds"
    ],
    correctAnswer: "C) 60 seconds",
    explanation: "Relative speed = 2 + 3 = 5 m/s (opposite direction). Time = 300/5 = 60 seconds",
    difficulty: "easy",
    category: "aptitude",
    subcategory: "quant",
    topic: "Time, Speed and Distance"
  },

  // Trains
  {
    questionText: "A train of length 450m travels at 54 km/h. How long will it take to cross a pole?",
    options: [
      "A) 20 seconds",
      "B) 25 seconds",
      "C) 30 seconds",
      "D) 35 seconds"
    ],
    correctAnswer: "C) 30 seconds",
    explanation: "Speed = 54 × (5/18) = 15 m/s. Time = 450/15 = 30 seconds",
    difficulty: "easy",
    category: "aptitude",
    subcategory: "quant",
    topic: "Trains"
  },

  // Number System
  {
    questionText: "Which of the following is divisible by both 5 and 9? 1115, 11115, 111115, 1111115",
    options: [
      "A) 1115",
      "B) 11115",
      "C) 111115",
      "D) 1111115"
    ],
    correctAnswer: "B) 11115",
    explanation: "11115 is divisible by both 5 (ends in 5) and 9 (sum of digits = 1+1+1+1+5 = 9)",
    difficulty: "medium",
    category: "aptitude",
    subcategory: "quant",
    topic: "Number System"
  },

  // HCF and LCM
  {
    questionText: "There are 40 apples and 32 oranges to be packed in boxes with equal fruits per box. What is the maximum number of fruits per box?",
    options: [
      "A) 4",
      "B) 6",
      "C) 8",
      "D) 10"
    ],
    correctAnswer: "C) 8",
    explanation: "Maximum fruits per box = HCF(40, 32) = 8",
    difficulty: "medium",
    category: "aptitude",
    subcategory: "quant",
    topic: "HCF and LCM"
  },

  // Permutation and Combination
  {
    questionText: "In how many ways can 2 shirts and 3 pants be selected from 5 shirts and 7 pants?",
    options: [
      "A) 150",
      "B) 250",
      "C) 350",
      "D) 450"
    ],
    correctAnswer: "C) 350",
    explanation: "5C2 × 7C3 = 10 × 35 = 350 ways",
    difficulty: "medium",
    category: "aptitude",
    subcategory: "quant",
    topic: "Permutation and Combination"
  },

  // Probability
  // (probability items have been moved to a dedicated file)
];

module.exports = quantitativeAptitudeQuestions;
