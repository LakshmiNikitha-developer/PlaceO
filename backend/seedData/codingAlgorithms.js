// Seed data for Algorithms questions

const algoQuestions = [
  {
    questionText: "What is the time complexity of binary search on a sorted array of size n?",
    options: ["A) O(n)", "B) O(log n)", "C) O(n log n)", "D) O(1)"],
    correctAnswer: "B) O(log n)",
    explanation: "Binary search divides the search interval in half each time, leading to logarithmic complexity.",
    difficulty: "easy",
    category: "coding",
    subcategory: "algorithms",
    topic: "Search"
  },
  {
    questionText: "Which algorithm is commonly used for finding the shortest path in a weighted graph?",
    options: ["A) Depth-first search", "B) Dijkstra's algorithm", "C) Prim's algorithm", "D) Bubble sort"],
    correctAnswer: "B) Dijkstra's algorithm",
    explanation: "Dijkstra's algorithm computes shortest paths from a source to all vertices in a graph with non-negative weights.",
    difficulty: "medium",
    category: "coding",
    subcategory: "algorithms",
    topic: "Graphs"
  },
  {
    questionText: "What is the worst-case time complexity of quicksort?",
    options: ["A) O(n)", "B) O(n log n)", "C) O(n^2)", "D) O(log n)"],
    correctAnswer: "C) O(n^2)",
    explanation: "Quicksort degrades to quadratic time when the pivot selection results in highly unbalanced partitions.",
    difficulty: "hard",
    category: "coding",
    subcategory: "algorithms",
    topic: "Sorting"
  },
  {
    questionText: "What is the time complexity of merge sort?",
    options: ["A) O(n)", "B) O(n log n)", "C) O(n^2)", "D) O(log n)"],
    correctAnswer: "B) O(n log n)",
    explanation: "Merge sort divides the array into halves and merges them, always achieving O(n log n) time.",
    difficulty: "easy",
    category: "coding",
    subcategory: "algorithms",
    topic: "Sorting"
  },
  {
    questionText: "Which algorithm uses a divide and conquer approach?",
    options: ["A) Bubble sort", "B) Merge sort", "C) Insertion sort", "D) Selection sort"],
    correctAnswer: "B) Merge sort",
    explanation: "Merge sort divides the problem into subproblems, solves them, and combines the solutions.",
    difficulty: "medium",
    category: "coding",
    subcategory: "algorithms",
    topic: "Divide and Conquer"
  },
  {
    questionText: "What is the purpose of Kruskal's algorithm?",
    options: [
      "A) Finding shortest path",
      "B) Finding minimum spanning tree",
      "C) Sorting elements",
      "D) Searching elements"
    ],
    correctAnswer: "B) Finding minimum spanning tree",
    explanation: "Kruskal's algorithm finds a minimum spanning tree for a connected weighted graph.",
    difficulty: "medium",
    category: "coding",
    subcategory: "algorithms",
    topic: "Graphs"
  },
  {
    questionText: "What is dynamic programming?",
    options: [
      "A) A programming language",
      "B) A method to solve problems by combining solutions to subproblems",
      "C) A type of data structure",
      "D) A sorting algorithm"
    ],
    correctAnswer: "B) A method to solve problems by combining solutions to subproblems",
    explanation: "Dynamic programming breaks down problems into overlapping subproblems and stores their solutions.",
    difficulty: "medium",
    category: "coding",
    subcategory: "algorithms",
    topic: "Dynamic Programming"
  },
  {
    questionText: "What is the time complexity of the Fibonacci sequence using naive recursion?",
    options: ["A) O(n)", "B) O(2^n)", "C) O(n log n)", "D) O(log n)"],
    correctAnswer: "B) O(2^n)",
    explanation: "Naive recursion for Fibonacci has exponential time due to redundant calculations.",
    difficulty: "medium",
    category: "coding",
    subcategory: "algorithms",
    topic: "Recursion"
  },
  {
    questionText: "Which algorithm is used to find the longest common subsequence?",
    options: [
      "A) Dynamic programming",
      "B) Greedy algorithm",
      "C) Divide and conquer",
      "D) Backtracking"
    ],
    correctAnswer: "A) Dynamic programming",
    explanation: "LCS is solved using dynamic programming with a 2D table.",
    difficulty: "hard",
    category: "coding",
    subcategory: "algorithms",
    topic: "Dynamic Programming"
  },
  {
    questionText: "What is the greedy choice property?",
    options: [
      "A) Always choosing the locally optimal solution",
      "B) Always choosing the globally optimal solution",
      "C) Never choosing suboptimal solutions",
      "D) Choosing random solutions"
    ],
    correctAnswer: "A) Always choosing the locally optimal solution",
    explanation: "Greedy algorithms make the best choice at each step, hoping for a global optimum.",
    difficulty: "medium",
    category: "coding",
    subcategory: "algorithms",
    topic: "Greedy"
  },
  {
    questionText: "What is the time complexity of the knapsack problem using dynamic programming?",
    options: ["A) O(n)", "B) O(nW)", "C) O(2^n)", "D) O(n^2)"],
    correctAnswer: "B) O(nW)",
    explanation: "0/1 knapsack DP uses a table of size n x W, giving O(nW) time.",
    difficulty: "hard",
    category: "coding",
    subcategory: "algorithms",
    topic: "Dynamic Programming"
  },
  {
    questionText: "Which algorithm is used for topological sorting?",
    options: [
      "A) DFS with stack",
      "B) BFS with queue",
      "C) Both A and B",
      "D) Neither"
    ],
    correctAnswer: "C) Both A and B",
    explanation: "Topological sort can be implemented using DFS or Kahn's algorithm (BFS).",
    difficulty: "hard",
    category: "coding",
    subcategory: "algorithms",
    topic: "Graphs"
  },
  {
    questionText: "What is the purpose of the Floyd-Warshall algorithm?",
    options: [
      "A) Finding shortest path between all pairs",
      "B) Finding minimum spanning tree",
      "C) Sorting elements",
      "D) Searching elements"
    ],
    correctAnswer: "A) Finding shortest path between all pairs",
    explanation: "Floyd-Warshall computes shortest paths between all pairs of vertices in a weighted graph.",
    difficulty: "hard",
    category: "coding",
    subcategory: "algorithms",
    topic: "Graphs"
  },
  {
    questionText: "What is backtracking?",
    options: [
      "A) A systematic way to try all possible solutions",
      "B) A method to optimize solutions",
      "C) A sorting technique",
      "D) A search algorithm"
    ],
    correctAnswer: "A) A systematic way to try all possible solutions",
    explanation: "Backtracking explores all possible solutions by trying and abandoning invalid ones.",
    difficulty: "medium",
    category: "coding",
    subcategory: "algorithms",
    topic: "Backtracking"
  },
  {
    questionText: "What is the time complexity of the subset sum problem using dynamic programming?",
    options: ["A) O(n)", "B) O(n sum)", "C) O(2^n)", "D) O(n^2)"],
    correctAnswer: "B) O(n sum)",
    explanation: "Subset sum DP uses a table of size n x sum, giving O(n * sum) time.",
    difficulty: "hard",
    category: "coding",
    subcategory: "algorithms",
    topic: "Dynamic Programming"
  },
  {
    questionText: "Which algorithm is used to solve the traveling salesman problem approximately?",
    options: [
      "A) Nearest neighbor",
      "B) Dynamic programming",
      "C) Both A and B",
      "D) Neither"
    ],
    correctAnswer: "C) Both A and B",
    explanation: "TSP can be approximated using nearest neighbor heuristic or solved exactly with DP (exponential time).",
    difficulty: "hard",
    category: "coding",
    subcategory: "algorithms",
    topic: "Approximation"
  },
  {
    questionText: "What is the master theorem used for?",
    options: [
      "A) Analyzing divide and conquer algorithms",
      "B) Analyzing greedy algorithms",
      "C) Analyzing dynamic programming",
      "D) Analyzing backtracking"
    ],
    correctAnswer: "A) Analyzing divide and conquer algorithms",
    explanation: "Master theorem provides asymptotic bounds for recurrence relations of divide and conquer algorithms.",
    difficulty: "hard",
    category: "coding",
    subcategory: "algorithms",
    topic: "Analysis"
  },
  {
    questionText: "What is the time complexity of counting sort?",
    options: ["A) O(n)", "B) O(n log n)", "C) O(n + k)", "D) O(n^2)"],
    correctAnswer: "C) O(n + k)",
    explanation: "Counting sort runs in O(n + k) time where k is the range of input values.",
    difficulty: "medium",
    category: "coding",
    subcategory: "algorithms",
    topic: "Sorting"
  },
  {
    questionText: "Which algorithm uses a priority queue?",
    options: [
      "A) Dijkstra's algorithm",
      "B) Bubble sort",
      "C) Linear search",
      "D) Binary search"
    ],
    correctAnswer: "A) Dijkstra's algorithm",
    explanation: "Dijkstra's algorithm uses a priority queue to select the next vertex with minimum distance.",
    difficulty: "medium",
    category: "coding",
    subcategory: "algorithms",
    topic: "Graphs"
  },
  {
    questionText: "What is the purpose of the Bellman-Ford algorithm?",
    options: [
      "A) Finding shortest path with negative weights",
      "B) Finding minimum spanning tree",
      "C) Sorting elements",
      "D) Searching elements"
    ],
    correctAnswer: "A) Finding shortest path with negative weights",
    explanation: "Bellman-Ford can handle graphs with negative edge weights, unlike Dijkstra's.",
    difficulty: "hard",
    category: "coding",
    subcategory: "algorithms",
    topic: "Graphs"
  },
  {
    questionText: "What is the time complexity of the longest increasing subsequence problem using DP?",
    options: ["A) O(n)", "B) O(n log n)", "C) O(n^2)", "D) O(2^n)"],
    correctAnswer: "C) O(n^2)",
    explanation: "LIS DP uses a table of size n and compares all pairs, giving O(n^2) time.",
    difficulty: "hard",
    category: "coding",
    subcategory: "algorithms",
    topic: "Dynamic Programming"
  },
  {
    questionText: "Which algorithm is used for string matching with wildcards?",
    options: [
      "A) KMP algorithm",
      "B) Rabin-Karp",
      "C) Both A and B",
      "D) Neither"
    ],
    correctAnswer: "A) KMP algorithm",
    explanation: "KMP can be extended for wildcard matching, while Rabin-Karp is for exact matching.",
    difficulty: "hard",
    category: "coding",
    subcategory: "algorithms",
    topic: "Strings"
  },
  {
    questionText: "What is the greedy choice for the activity selection problem?",
    options: [
      "A) Choose the activity that starts earliest",
      "B) Choose the activity that ends earliest",
      "C) Choose the activity with maximum duration",
      "D) Choose the activity with minimum duration"
    ],
    correctAnswer: "B) Choose the activity that ends earliest",
    explanation: "In activity selection, greedily choosing the earliest ending activity leaves more time for others.",
    difficulty: "medium",
    category: "coding",
    subcategory: "algorithms",
    topic: "Greedy"
  },
  {
    questionText: "What is the time complexity of the edit distance problem using DP?",
    options: ["A) O(m)", "B) O(m + n)", "C) O(m * n)", "D) O(2^{m+n})"],
    correctAnswer: "C) O(m * n)",
    explanation: "Edit distance DP uses a table of size (m+1) x (n+1), giving O(m * n) time.",
    difficulty: "hard",
    category: "coding",
    subcategory: "algorithms",
    topic: "Dynamic Programming"
  },
  {
    questionText: "Which algorithm uses union-find data structure?",
    options: [
      "A) Kruskal's MST",
      "B) Prim's MST",
      "C) Dijkstra's shortest path",
      "D) Bellman-Ford"
    ],
    correctAnswer: "A) Kruskal's MST",
    explanation: "Kruskal's algorithm uses union-find to detect cycles while adding edges.",
    difficulty: "hard",
    category: "coding",
    subcategory: "algorithms",
    topic: "Graphs"
  },
  {
    questionText: "What is the purpose of the A* search algorithm?",
    options: [
      "A) Finding shortest path in unweighted graphs",
      "B) Finding shortest path using heuristics",
      "C) Finding minimum spanning tree",
      "D) Sorting elements"
    ],
    correctAnswer: "B) Finding shortest path using heuristics",
    explanation: "A* uses both actual cost and heuristic estimate to find optimal paths efficiently.",
    difficulty: "hard",
    category: "coding",
    subcategory: "algorithms",
    topic: "Search"
  },
  {
    questionText: "What is the time complexity of the matrix chain multiplication problem using DP?",
    options: ["A) O(n)", "B) O(n^2)", "C) O(n^3)", "D) O(2^n)"],
    correctAnswer: "C) O(n^3)",
    explanation: "Matrix chain multiplication DP fills a table of size n x n, giving O(n^3) time.",
    difficulty: "hard",
    category: "coding",
    subcategory: "algorithms",
    topic: "Dynamic Programming"
  },
  {
    questionText: "Which algorithm is used for finding articulation points in a graph?",
    options: [
      "A) DFS with discovery time",
      "B) BFS",
      "C) Dijkstra's",
      "D) Kruskal's"
    ],
    correctAnswer: "A) DFS with discovery time",
    explanation: "Articulation points are found using DFS traversal with discovery and low values.",
    difficulty: "hard",
    category: "coding",
    subcategory: "algorithms",
    topic: "Graphs"
  },
  {
    questionText: "What is the greedy choice for the Huffman coding problem?",
    options: [
      "A) Choose the two most frequent characters",
      "B) Choose the two least frequent characters",
      "C) Choose random characters",
      "D) Choose the longest strings"
    ],
    correctAnswer: "B) Choose the two least frequent characters",
    explanation: "Huffman coding greedily combines the two least frequent nodes at each step.",
    difficulty: "hard",
    category: "coding",
    subcategory: "algorithms",
    topic: "Greedy"
  },
  {
    questionText: "What is the time complexity of the convex hull problem using Graham scan?",
    options: ["A) O(n)", "B) O(n log n)", "C) O(n^2)", "D) O(log n)"],
    correctAnswer: "B) O(n log n)",
    explanation: "Graham scan sorts points and scans them, achieving O(n log n) time.",
    difficulty: "hard",
    category: "coding",
    subcategory: "algorithms",
    topic: "Computational Geometry"
  },
  {
    questionText: "Which algorithm is used for finding the maximum flow in a network?",
    options: [
      "A) Ford-Fulkerson",
      "B) Dijkstra's",
      "C) Kruskal's",
      "D) Bellman-Ford"
    ],
    correctAnswer: "A) Ford-Fulkerson",
    explanation: "Ford-Fulkerson method finds maximum flow by repeatedly finding augmenting paths.",
    difficulty: "hard",
    category: "coding",
    subcategory: "algorithms",
    topic: "Graphs"
  },
  {
    questionText: "What is the purpose of the Rabin-Karp algorithm?",
    options: [
      "A) String matching with hashing",
      "B) Sorting strings",
      "C) Compressing strings",
      "D) Encrypting strings"
    ],
    correctAnswer: "A) String matching with hashing",
    explanation: "Rabin-Karp uses rolling hash to find substrings efficiently.",
    difficulty: "hard",
    category: "coding",
    subcategory: "algorithms",
    topic: "Strings"
  },
  {
    questionText: "What is the time complexity of the KMP algorithm for string matching?",
    options: ["A) O(m)", "B) O(n)", "C) O(m + n)", "D) O(m * n)"],
    correctAnswer: "C) O(m + n)",
    explanation: "KMP preprocesses the pattern in O(m) and searches in O(n), total O(m + n).",
    difficulty: "hard",
    category: "coding",
    subcategory: "algorithms",
    topic: "Strings"
  },
  {
    questionText: "Which algorithm uses the concept of memoization?",
    options: [
      "A) Dynamic programming",
      "B) Greedy algorithms",
      "C) Divide and conquer",
      "D) Backtracking"
    ],
    correctAnswer: "A) Dynamic programming",
    explanation: "Dynamic programming often uses memoization to store subproblem solutions.",
    difficulty: "medium",
    category: "coding",
    subcategory: "algorithms",
    topic: "Dynamic Programming"
  },
  {
    questionText: "What is the greedy choice for the fractional knapsack problem?",
    options: [
      "A) Choose items with highest value",
      "B) Choose items with highest value-to-weight ratio",
      "C) Choose items with lowest weight",
      "D) Choose items randomly"
    ],
    correctAnswer: "B) Choose items with highest value-to-weight ratio",
    explanation: "Fractional knapsack greedily selects items with best value per unit weight.",
    difficulty: "medium",
    category: "coding",
    subcategory: "algorithms",
    topic: "Greedy"
  },
  {
    questionText: "What is the time complexity of the longest palindromic subsequence using DP?",
    options: ["A) O(n)", "B) O(n log n)", "C) O(n^2)", "D) O(2^n)"],
    correctAnswer: "C) O(n^2)",
    explanation: "LPS DP uses a 2D table of size n x n, giving O(n^2) time.",
    difficulty: "hard",
    category: "coding",
    subcategory: "algorithms",
    topic: "Dynamic Programming"
  },
  {
    questionText: "Which algorithm is used for finding bridges in a graph?",
    options: [
      "A) DFS with discovery time",
      "B) BFS",
      "C) Dijkstra's",
      "D) Prim's"
    ],
    correctAnswer: "A) DFS with discovery time",
    explanation: "Bridges are found using DFS traversal with discovery and low values.",
    difficulty: "hard",
    category: "coding",
    subcategory: "algorithms",
    topic: "Graphs"
  },
  {
    questionText: "What is the purpose of the Z-algorithm?",
    options: [
      "A) String matching",
      "B) Sorting",
      "C) Compression",
      "D) Encryption"
    ],
    correctAnswer: "A) String matching",
    explanation: "Z-algorithm computes the longest substring starting at each position that matches a prefix.",
    difficulty: "hard",
    category: "coding",
    subcategory: "algorithms",
    topic: "Strings"
  },
  {
    questionText: "What is the time complexity of the Z-algorithm?",
    options: ["A) O(n)", "B) O(n log n)", "C) O(n^2)", "D) O(1)"],
    correctAnswer: "A) O(n)",
    explanation: "Z-algorithm runs in linear time O(n) for string of length n.",
    difficulty: "hard",
    category: "coding",
    subcategory: "algorithms",
    topic: "Strings"
  },
  {
    questionText: "Which algorithm is used for convex hull?",
    options: ["A) Graham scan", "B) Quick sort", "C) Merge sort", "D) Binary search"],
    correctAnswer: "A) Graham scan",
    explanation: "Graham scan is a method for computing the convex hull of a set of points.",
    difficulty: "hard",
    category: "coding",
    subcategory: "algorithms",
    topic: "Geometry"
  }
];

module.exports = algoQuestions;