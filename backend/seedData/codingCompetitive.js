// Seed data for Competitive programming questions

const competitiveQuestions = [
  {
    questionText: "In competitive coding, which operation is considered fastest?",
    options: ["A) Addition", "B) Bitwise AND", "C) Modulo", "D) Division"],
    correctAnswer: "B) Bitwise AND",
    explanation: "Bitwise operations operate directly on bits and are generally faster than arithmetic operations.",
    difficulty: "medium",
    category: "coding",
    subcategory: "competitive",
    topic: "Performance"
  },
  {
    questionText: "What is the typical time limit for a single test case in most contests?",
    options: ["A) 1ms", "B) 1s", "C) 1 minute", "D) 5 minutes"],
    correctAnswer: "B) 1s",
    explanation: "Many online judges set a 1 second time limit per test case, requiring efficient algorithms.",
    difficulty: "easy",
    category: "coding",
    subcategory: "competitive",
    topic: "Contest Rules"
  },
  {
    questionText: "Which of the following is not a valid C++ STL container?",
    options: ["A) vector", "B) map", "C) linked_list", "D) set"],
    correctAnswer: "C) linked_list",
    explanation: "The correct STL container name is `list`, not `linked_list`.",
    difficulty: "medium",
    category: "coding",
    subcategory: "competitive",
    topic: "STL"
  },
  {
    questionText: "What is the fastest way to read input in C++ for competitive coding?",
    options: [
      "A) cin with ios_base::sync_with_stdio(false)",
      "B) scanf",
      "C) getline",
      "D) fstream"
    ],
    correctAnswer: "A) cin with ios_base::sync_with_stdio(false)",
    explanation: "Using cin with ios_base::sync_with_stdio(false) and cin.tie(NULL) is fastest for large inputs.",
    difficulty: "medium",
    category: "coding",
    subcategory: "competitive",
    topic: "I/O Optimization"
  },
  {
    questionText: "What is the maximum value of int in C++?",
    options: ["A) 2^15 - 1", "B) 2^31 - 1", "C) 2^63 - 1", "D) Depends on compiler"],
    correctAnswer: "B) 2^31 - 1",
    explanation: "In most systems, int is 32-bit, giving a range from -2^31 to 2^31 - 1.",
    difficulty: "easy",
    category: "coding",
    subcategory: "competitive",
    topic: "Data Types"
  },
  {
    questionText: "What is the time complexity you should aim for when N ≤ 10^5?",
    options: ["A) O(N)", "B) O(N log N)", "C) O(N^2)", "D) O(2^N)"],
    correctAnswer: "B) O(N log N)",
    explanation: "For N=10^5, O(N log N) is acceptable as it runs in about 10^6 operations.",
    difficulty: "easy",
    category: "coding",
    subcategory: "competitive",
    topic: "Time Complexity"
  },
  {
    questionText: "Which data structure is best for implementing a priority queue in C++?",
    options: ["A) vector", "B) queue", "C) priority_queue", "D) stack"],
    correctAnswer: "C) priority_queue",
    explanation: "priority_queue in STL provides logarithmic time insertions and deletions.",
    difficulty: "easy",
    category: "coding",
    subcategory: "competitive",
    topic: "STL"
  },
  {
    questionText: "What is the purpose of fast I/O in competitive coding?",
    options: [
      "A) To make code look faster",
      "B) To handle large inputs within time limits",
      "C) To reduce code size",
      "D) To avoid TLE"
    ],
    correctAnswer: "B) To handle large inputs within time limits",
    explanation: "Fast I/O techniques prevent Time Limit Exceeded errors on large test cases.",
    difficulty: "easy",
    category: "coding",
    subcategory: "competitive",
    topic: "I/O Optimization"
  },
  {
    questionText: "What does TLE stand for in competitive coding?",
    options: [
      "A) Time Limit Exceeded",
      "B) Test Limit Exceeded",
      "C) Total Limit Exceeded",
      "D) Type Limit Exceeded"
    ],
    correctAnswer: "A) Time Limit Exceeded",
    explanation: "TLE occurs when your solution takes longer than the allowed time limit.",
    difficulty: "easy",
    category: "coding",
    subcategory: "competitive",
    topic: "Contest Terms"
  },
  {
    questionText: "Which sorting algorithm is used in C++ STL sort()?",
    options: [
      "A) Bubble sort",
      "B) Quick sort",
      "C) Merge sort",
      "D) Intro sort"
    ],
    correctAnswer: "D) Intro sort",
    explanation: "STL sort() uses introsort, a hybrid of quicksort, heapsort, and insertion sort.",
    difficulty: "medium",
    category: "coding",
    subcategory: "competitive",
    topic: "Sorting"
  },
  {
    questionText: "What is the best way to avoid integer overflow in competitive coding?",
    options: [
      "A) Use int always",
      "B) Use long long for large numbers",
      "C) Use float",
      "D) Use double"
    ],
    correctAnswer: "B) Use long long for large numbers",
    explanation: "long long can handle larger ranges (up to 9*10^18) and prevents overflow.",
    difficulty: "easy",
    category: "coding",
    subcategory: "competitive",
    topic: "Data Types"
  },
  {
    questionText: "What is the time complexity of unordered_map in C++?",
    options: ["A) O(1)", "B) O(log N)", "C) O(N)", "D) O(N log N)"],
    correctAnswer: "A) O(1)",
    explanation: "unordered_map provides average O(1) time complexity for insertions and lookups.",
    difficulty: "easy",
    category: "coding",
    subcategory: "competitive",
    topic: "STL"
  },
  {
    questionText: "What is the maximum size of array you can declare in C++?",
    options: [
      "A) 10^5",
      "B) 10^6",
      "C) 10^7",
      "D) Depends on memory"
    ],
    correctAnswer: "D) Depends on memory",
    explanation: "Array size depends on available memory, but global arrays are limited to about 10^7-10^8 elements.",
    difficulty: "medium",
    category: "coding",
    subcategory: "competitive",
    topic: "Memory"
  },
  {
    questionText: "What is the fastest way to swap two numbers in C++?",
    options: [
      "A) Using temp variable",
      "B) Using XOR",
      "C) Using addition/subtraction",
      "D) Using multiplication/division"
    ],
    correctAnswer: "B) Using XOR",
    explanation: "XOR swap is fastest as it doesn't use temporary storage and works with bitwise operations.",
    difficulty: "medium",
    category: "coding",
    subcategory: "competitive",
    topic: "Bit Manipulation"
  },
  {
    questionText: "What is the purpose of the 'const' keyword in function parameters?",
    options: [
      "A) To make parameters read-only",
      "B) To speed up execution",
      "C) To reduce memory usage",
      "D) To allow modification"
    ],
    correctAnswer: "A) To make parameters read-only",
    explanation: "const prevents accidental modification of parameters and can help with optimization.",
    difficulty: "easy",
    category: "coding",
    subcategory: "competitive",
    topic: "Best Practices"
  },
  {
    questionText: "Which loop is generally faster in C++?",
    options: ["A) for loop", "B) while loop", "C) do-while loop", "D) All same"],
    correctAnswer: "D) All same",
    explanation: "All loops have similar performance; choice depends on the use case.",
    difficulty: "easy",
    category: "coding",
    subcategory: "competitive",
    topic: "Performance"
  },
  {
    questionText: "What is the use of __builtin_popcount() in competitive coding?",
    options: [
      "A) Count set bits in an integer",
      "B) Count total bits",
      "C) Find parity",
      "D) Reverse bits"
    ],
    correctAnswer: "A) Count set bits in an integer",
    explanation: "__builtin_popcount() is a GCC built-in function to count the number of 1s in binary representation.",
    difficulty: "medium",
    category: "coding",
    subcategory: "competitive",
    topic: "Bit Manipulation"
  },
  {
    questionText: "What is the maximum value of long long in C++?",
    options: [
      "A) 2^31 - 1",
      "B) 2^63 - 1",
      "C) 2^32 - 1",
      "D) 2^64 - 1"
    ],
    correctAnswer: "B) 2^63 - 1",
    explanation: "long long is 64-bit, giving a maximum value of 9,223,372,036,854,775,807.",
    difficulty: "easy",
    category: "coding",
    subcategory: "competitive",
    topic: "Data Types"
  },
  {
    questionText: "What is the best data structure for implementing LRU cache?",
    options: [
      "A) Array",
      "B) Linked list",
      "C) Hash map + doubly linked list",
      "D) Stack"
    ],
    correctAnswer: "C) Hash map + doubly linked list",
    explanation: "Hash map for O(1) access and doubly linked list for O(1) insertion/deletion.",
    difficulty: "hard",
    category: "coding",
    subcategory: "competitive",
    topic: "Data Structures"
  },
  {
    questionText: "What is the time limit for most CodeChef problems?",
    options: ["A) 0.5s", "B) 1s", "C) 2s", "D) 5s"],
    correctAnswer: "B) 1s",
    explanation: "CodeChef typically allows 1 second per test case for most problems.",
    difficulty: "easy",
    category: "coding",
    subcategory: "competitive",
    topic: "Contest Rules"
  },
  {
    questionText: "Which of the following is fastest for string concatenation in C++?",
    options: [
      "A) Using + operator",
      "B) Using stringstream",
      "C) Using vector<char> and push_back",
      "D) Using sprintf"
    ],
    correctAnswer: "A) Using + operator",
    explanation: "In modern C++, the + operator for strings is optimized and quite fast.",
    difficulty: "medium",
    category: "coding",
    subcategory: "competitive",
    topic: "Strings"
  },
  {
    questionText: "What is the purpose of #pragma in C++?",
    options: [
      "A) To include headers",
      "B) To give special instructions to compiler",
      "C) To define macros",
      "D) To declare functions"
    ],
    correctAnswer: "B) To give special instructions to compiler",
    explanation: "#pragma directives provide additional information to the compiler.",
    difficulty: "medium",
    category: "coding",
    subcategory: "competitive",
    topic: "Preprocessor"
  },
  {
    questionText: "What is the fastest way to check if a number is power of 2?",
    options: [
      "A) Divide by 2 repeatedly",
      "B) Use log",
      "C) Use bitwise AND",
      "D) Use modulo"
    ],
    correctAnswer: "C) Use bitwise AND",
    explanation: "Check if (n & (n-1)) == 0; this works because powers of 2 have only one set bit.",
    difficulty: "medium",
    category: "coding",
    subcategory: "competitive",
    topic: "Bit Manipulation"
  },
  {
    questionText: "What is the maximum recursion depth in C++?",
    options: [
      "A) 10^3",
      "B) 10^4",
      "C) 10^5",
      "D) Depends on stack size"
    ],
    correctAnswer: "D) Depends on stack size",
    explanation: "Recursion depth depends on stack size, typically 10^4 to 10^5 calls.",
    difficulty: "easy",
    category: "coding",
    subcategory: "competitive",
    topic: "Recursion"
  },
  {
    questionText: "Which STL algorithm is used for binary search?",
    options: [
      "A) find()",
      "B) search()",
      "C) lower_bound()",
      "D) sort()"
    ],
    correctAnswer: "C) lower_bound()",
    explanation: "lower_bound() performs binary search and returns iterator to first element >= value.",
    difficulty: "medium",
    category: "coding",
    subcategory: "competitive",
    topic: "STL"
  },
  {
    questionText: "What is the use of memset() in competitive coding?",
    options: [
      "A) Set array elements to a value",
      "B) Copy arrays",
      "C) Compare arrays",
      "D) Sort arrays"
    ],
    correctAnswer: "A) Set array elements to a value",
    explanation: "memset() is used to set all bytes of a memory block to a specific value.",
    difficulty: "easy",
    category: "coding",
    subcategory: "competitive",
    topic: "Memory"
  },
  {
    questionText: "What is the fastest way to read multiple integers in C++?",
    options: [
      "A) cin >> a >> b >> c",
      "B) scanf(\"%d%d%d\", &a, &b, &c)",
      "C) Both are same",
      "D) Depends on input size"
    ],
    correctAnswer: "B) scanf(\"%d%d%d\", &a, &b, &c)",
    explanation: "scanf is generally faster than cin for multiple inputs, but cin can be optimized.",
    difficulty: "medium",
    category: "coding",
    subcategory: "competitive",
    topic: "I/O Optimization"
  },
  {
    questionText: "What is the purpose of the 'inline' keyword?",
    options: [
      "A) To force function inlining",
      "B) To declare variables",
      "C) To include files",
      "D) To define macros"
    ],
    correctAnswer: "A) To force function inlining",
    explanation: "inline suggests to the compiler to replace function calls with the function body.",
    difficulty: "medium",
    category: "coding",
    subcategory: "competitive",
    topic: "Optimization"
  },
  {
    questionText: "Which data structure is used for implementing disjoint sets?",
    options: [
      "A) Array with path compression",
      "B) Linked list",
      "C) Stack",
      "D) Queue"
    ],
    correctAnswer: "A) Array with path compression",
    explanation: "Disjoint sets use arrays with union by rank and path compression for efficiency.",
    difficulty: "hard",
    category: "coding",
    subcategory: "competitive",
    topic: "Data Structures"
  },
  {
    questionText: "What is the time complexity of map in C++?",
    options: ["A) O(1)", "B) O(log N)", "C) O(N)", "D) O(N log N)"],
    correctAnswer: "B) O(log N)",
    explanation: "std::map is implemented as a red-black tree, providing O(log N) operations.",
    difficulty: "easy",
    category: "coding",
    subcategory: "competitive",
    topic: "STL"
  },
  {
    questionText: "What is the best way to handle floating point precision issues?",
    options: [
      "A) Use double instead of float",
      "B) Use epsilon comparison",
      "C) Avoid floating point",
      "D) Use integers"
    ],
    correctAnswer: "B) Use epsilon comparison",
    explanation: "Compare floating point numbers with a small epsilon value instead of exact equality.",
    difficulty: "medium",
    category: "coding",
    subcategory: "competitive",
    topic: "Floating Point"
  },
  {
    questionText: "What is the use of __gcd() in competitive coding?",
    options: [
      "A) Calculate GCD of two numbers",
      "B) Calculate LCM",
      "C) Calculate power",
      "D) Calculate square root"
    ],
    correctAnswer: "A) Calculate GCD of two numbers",
    explanation: "__gcd() is a GCC built-in function for computing greatest common divisor.",
    difficulty: "easy",
    category: "coding",
    subcategory: "competitive",
    topic: "Built-ins"
  },
  {
    questionText: "What is the fastest way to compute a^b mod m?",
    options: [
      "A) Loop multiplication",
      "B) Binary exponentiation",
      "C) Using pow()",
      "D) Using log"
    ],
    correctAnswer: "B) Binary exponentiation",
    explanation: "Binary exponentiation computes power in O(log b) time, much faster than linear methods.",
    difficulty: "medium",
    category: "coding",
    subcategory: "competitive",
    topic: "Mathematics"
  },
  {
    questionText: "What is the purpose of the 'auto' keyword in C++11?",
    options: [
      "A) Automatic variable declaration",
      "B) Type deduction",
      "C) Auto increment",
      "D) Auto decrement"
    ],
    correctAnswer: "B) Type deduction",
    explanation: "auto allows the compiler to deduce the type of a variable from its initializer.",
    difficulty: "easy",
    category: "coding",
    subcategory: "competitive",
    topic: "C++11 Features"
  },
  {
    questionText: "What is the maximum number of test cases in most competitive problems?",
    options: ["A) 10", "B) 100", "C) 1000", "D) 10^5"],
    correctAnswer: "B) 100",
    explanation: "Most problems have 10-100 test cases to test different scenarios.",
    difficulty: "easy",
    category: "coding",
    subcategory: "competitive",
    topic: "Contest Rules"
  },
  {
    questionText: "Which is faster for frequency counting?",
    options: [
      "A) map<int, int>",
      "B) unordered_map<int, int>",
      "C) array",
      "D) vector"
    ],
    correctAnswer: "B) unordered_map<int, int>",
    explanation: "unordered_map provides O(1) average case access, faster than map's O(log N).",
    difficulty: "medium",
    category: "coding",
    subcategory: "competitive",
    topic: "STL"
  },
  {
    questionText: "What is the use of __builtin_clz()?",
    options: [
      "A) Count leading zeros",
      "B) Count trailing zeros",
      "C) Count set bits",
      "D) Reverse bits"
    ],
    correctAnswer: "A) Count leading zeros",
    explanation: "__builtin_clz() counts the number of leading zeros in the binary representation.",
    difficulty: "hard",
    category: "coding",
    subcategory: "competitive",
    topic: "Bit Manipulation"
  },
  {
    questionText: "What is the best way to iterate through all subsets of a set?",
    options: [
      "A) Recursion",
      "B) Bit manipulation",
      "C) Both A and B",
      "D) Neither"
    ],
    correctAnswer: "C) Both A and B",
    explanation: "Both recursive backtracking and bit manipulation (using masks) can generate all subsets.",
    difficulty: "medium",
    category: "coding",
    subcategory: "competitive",
    topic: "Bit Manipulation"
  },
  {
    questionText: "What is the time limit for Codeforces problems?",
    options: ["A) 0.5s", "B) 1s", "C) 2s", "D) 5s"],
    correctAnswer: "C) 2s",
    explanation: "Codeforces typically allows 2 seconds per test case for C++ solutions.",
    difficulty: "easy",
    category: "coding",
    subcategory: "competitive",
    topic: "Contest Rules"
  },
  {
    questionText: "What is the purpose of fast I/O in competitive programming?",
    options: ["A) To make code faster", "B) To handle large inputs efficiently", "C) To reduce memory usage", "D) To avoid TLE"],
    correctAnswer: "B) To handle large inputs efficiently",
    explanation: "Fast I/O techniques like reading all input at once prevent TLE on large test cases.",
    difficulty: "medium",
    category: "coding",
    subcategory: "competitive",
    topic: "Optimization"
  }
];

module.exports = competitiveQuestions;