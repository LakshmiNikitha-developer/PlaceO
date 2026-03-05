// Seed data for Data Structures questions

const dsaQuestions = [
  {
    questionText: "Which data structure uses FIFO order?",
    options: ["A) Stack", "B) Queue", "C) Tree", "D) Graph"],
    correctAnswer: "B) Queue",
    explanation: "FIFO stands for First In First Out, which is the behavior of a queue.",
    difficulty: "easy",
    category: "coding",
    subcategory: "dsa",
    topic: "Basics"
  },
  {
    questionText: "What is the time complexity of accessing an element by index in an array?",
    options: ["A) O(1)", "B) O(n)", "C) O(log n)", "D) O(n log n)"],
    correctAnswer: "A) O(1)",
    explanation: "Random access in an array is constant time because the address can be computed directly.",
    difficulty: "easy",
    category: "coding",
    subcategory: "dsa",
    topic: "Arrays"
  },
  {
    questionText: "Which data structure is optimal for implementing recursion?",
    options: ["A) Queue", "B) Stack", "C) Linked List", "D) Hash Table"],
    correctAnswer: "B) Stack",
    explanation: "Function call stacks use a stack data structure to keep track of active subroutines.",
    difficulty: "medium",
    category: "coding",
    subcategory: "dsa",
    topic: "Stacks"
  },
  {
    questionText: "What is a linked list?",
    options: [
      "A) A linear data structure where elements are stored in contiguous memory",
      "B) A linear data structure where elements are linked using pointers",
      "C) A non-linear data structure",
      "D) A type of array"
    ],
    correctAnswer: "B) A linear data structure where elements are linked using pointers",
    explanation: "Linked lists consist of nodes where each node contains data and a pointer to the next node.",
    difficulty: "easy",
    category: "coding",
    subcategory: "dsa",
    topic: "Linked Lists"
  },
  {
    questionText: "What is the time complexity of inserting an element at the beginning of a linked list?",
    options: ["A) O(1)", "B) O(n)", "C) O(log n)", "D) O(n^2)"],
    correctAnswer: "A) O(1)",
    explanation: "With a head pointer, insertion at the beginning is constant time.",
    difficulty: "easy",
    category: "coding",
    subcategory: "dsa",
    topic: "Linked Lists"
  },
  {
    questionText: "Which data structure uses LIFO order?",
    options: ["A) Queue", "B) Stack", "C) Array", "D) Tree"],
    correctAnswer: "B) Stack",
    explanation: "LIFO stands for Last In First Out, which is the behavior of a stack.",
    difficulty: "easy",
    category: "coding",
    subcategory: "dsa",
    topic: "Stacks"
  },
  {
    questionText: "What is a binary tree?",
    options: [
      "A) A tree where each node has at most two children",
      "B) A tree where each node has exactly two children",
      "C) A tree with only one child per node",
      "D) A tree with no children"
    ],
    correctAnswer: "A) A tree where each node has at most two children",
    explanation: "Binary trees have nodes with at most two children: left and right.",
    difficulty: "easy",
    category: "coding",
    subcategory: "dsa",
    topic: "Trees"
  },
  {
    questionText: "What is the height of a binary tree?",
    options: [
      "A) Number of nodes in the tree",
      "B) Number of leaf nodes",
      "C) Length of the longest path from root to leaf",
      "D) Number of edges in the tree"
    ],
    correctAnswer: "C) Length of the longest path from root to leaf",
    explanation: "Height is the number of edges on the longest path from root to leaf.",
    difficulty: "medium",
    category: "coding",
    subcategory: "dsa",
    topic: "Trees"
  },
  {
    questionText: "What is a binary search tree (BST)?",
    options: [
      "A) A binary tree where left child < parent < right child",
      "B) A binary tree with sorted elements",
      "C) A complete binary tree",
      "D) A balanced binary tree"
    ],
    correctAnswer: "A) A binary tree where left child < parent < right child",
    explanation: "In BST, for each node, all elements in left subtree are less than the node, and all in right are greater.",
    difficulty: "medium",
    category: "coding",
    subcategory: "dsa",
    topic: "Trees"
  },
  {
    questionText: "What is the time complexity of searching in a balanced BST?",
    options: ["A) O(1)", "B) O(n)", "C) O(log n)", "D) O(n log n)"],
    correctAnswer: "C) O(log n)",
    explanation: "Balanced BSTs maintain logarithmic height, so search is O(log n).",
    difficulty: "medium",
    category: "coding",
    subcategory: "dsa",
    topic: "Trees"
  },
  {
    questionText: "What is a graph?",
    options: [
      "A) A linear data structure",
      "B) A non-linear data structure with vertices and edges",
      "C) A type of tree",
      "D) A sorted array"
    ],
    correctAnswer: "B) A non-linear data structure with vertices and edges",
    explanation: "Graphs consist of vertices (nodes) connected by edges.",
    difficulty: "easy",
    category: "coding",
    subcategory: "dsa",
    topic: "Graphs"
  },
  {
    questionText: "What is the difference between DFS and BFS?",
    options: [
      "A) DFS uses stack, BFS uses queue",
      "B) DFS uses queue, BFS uses stack",
      "C) They are the same",
      "D) DFS is for trees, BFS for graphs"
    ],
    correctAnswer: "A) DFS uses stack, BFS uses queue",
    explanation: "DFS explores depth-first using a stack, BFS explores breadth-first using a queue.",
    difficulty: "medium",
    category: "coding",
    subcategory: "dsa",
    topic: "Graphs"
  },
  {
    questionText: "What is a hash table?",
    options: [
      "A) A data structure that maps keys to values using a hash function",
      "B) A sorted array",
      "C) A type of tree",
      "D) A linked list"
    ],
    correctAnswer: "A) A data structure that maps keys to values using a hash function",
    explanation: "Hash tables use hash functions to compute indices for storing key-value pairs.",
    difficulty: "easy",
    category: "coding",
    subcategory: "dsa",
    topic: "Hash Tables"
  },
  {
    questionText: "What is collision in hashing?",
    options: [
      "A) When two keys hash to the same index",
      "B) When a key is not found",
      "C) When the hash table is full",
      "D) When the hash function fails"
    ],
    correctAnswer: "A) When two keys hash to the same index",
    explanation: "Collisions occur when different keys produce the same hash value.",
    difficulty: "medium",
    category: "coding",
    subcategory: "dsa",
    topic: "Hash Tables"
  },
  {
    questionText: "What is the time complexity of bubble sort?",
    options: ["A) O(n)", "B) O(n log n)", "C) O(n^2)", "D) O(log n)"],
    correctAnswer: "C) O(n^2)",
    explanation: "Bubble sort compares adjacent elements and swaps them, resulting in O(n^2) time.",
    difficulty: "easy",
    category: "coding",
    subcategory: "dsa",
    topic: "Sorting"
  },
  {
    questionText: "What is the best case time complexity of quicksort?",
    options: ["A) O(n)", "B) O(n log n)", "C) O(n^2)", "D) O(log n)"],
    correctAnswer: "B) O(n log n)",
    explanation: "Quicksort's best case occurs when the pivot divides the array evenly, giving O(n log n).",
    difficulty: "medium",
    category: "coding",
    subcategory: "dsa",
    topic: "Sorting"
  },
  {
    questionText: "What is the time complexity of merge sort?",
    options: ["A) O(n)", "B) O(n log n)", "C) O(n^2)", "D) O(log n)"],
    correctAnswer: "B) O(n log n)",
    explanation: "Merge sort divides the array and merges sorted halves, always O(n log n).",
    difficulty: "easy",
    category: "coding",
    subcategory: "dsa",
    topic: "Sorting"
  },
  {
    questionText: "What is linear search?",
    options: [
      "A) Searching by dividing the array",
      "B) Searching sequentially from start to end",
      "C) Searching using a hash function",
      "D) Searching in a tree"
    ],
    correctAnswer: "B) Searching sequentially from start to end",
    explanation: "Linear search checks each element in order until the target is found.",
    difficulty: "easy",
    category: "coding",
    subcategory: "dsa",
    topic: "Searching"
  },
  {
    questionText: "What is the time complexity of binary search?",
    options: ["A) O(n)", "B) O(n log n)", "C) O(log n)", "D) O(n^2)"],
    correctAnswer: "C) O(log n)",
    explanation: "Binary search halves the search space each time, giving O(log n) time.",
    difficulty: "easy",
    category: "coding",
    subcategory: "dsa",
    topic: "Searching"
  },
  {
    questionText: "What is a heap?",
    options: [
      "A) A complete binary tree where each node satisfies the heap property",
      "B) A linked list",
      "C) A stack",
      "D) A queue"
    ],
    correctAnswer: "A) A complete binary tree where each node satisfies the heap property",
    explanation: "Heaps are complete binary trees where parent nodes are greater (max-heap) or less (min-heap) than children.",
    difficulty: "medium",
    category: "coding",
    subcategory: "dsa",
    topic: "Heaps"
  },
  {
    questionText: "What is the time complexity of heap sort?",
    options: ["A) O(n)", "B) O(n log n)", "C) O(n^2)", "D) O(log n)"],
    correctAnswer: "B) O(n log n)",
    explanation: "Heap sort builds a heap and repeatedly extracts the maximum element.",
    difficulty: "medium",
    category: "coding",
    subcategory: "dsa",
    topic: "Sorting"
  },
  {
    questionText: "What is a trie?",
    options: [
      "A) A tree data structure for efficient string retrieval",
      "B) A type of hash table",
      "C) A sorted array",
      "D) A graph"
    ],
    correctAnswer: "A) A tree data structure for efficient string retrieval",
    explanation: "Tries store strings by sharing common prefixes, enabling fast lookups.",
    difficulty: "hard",
    category: "coding",
    subcategory: "dsa",
    topic: "Tries"
  },
  {
    questionText: "What is dynamic programming?",
    options: [
      "A) A programming paradigm",
      "B) A method to solve problems by breaking them into subproblems",
      "C) A type of data structure",
      "D) A sorting algorithm"
    ],
    correctAnswer: "B) A method to solve problems by breaking them into subproblems",
    explanation: "Dynamic programming solves complex problems by breaking them into simpler subproblems and storing results.",
    difficulty: "medium",
    category: "coding",
    subcategory: "dsa",
    topic: "Dynamic Programming"
  },
  {
    questionText: "What is the time complexity of inserting into a hash table (average case)?",
    options: ["A) O(1)", "B) O(n)", "C) O(log n)", "D) O(n log n)"],
    correctAnswer: "A) O(1)",
    explanation: "Hash table insertions are O(1) on average with a good hash function.",
    difficulty: "easy",
    category: "coding",
    subcategory: "dsa",
    topic: "Hash Tables"
  },
  {
    questionText: "What is a circular linked list?",
    options: [
      "A) A linked list where the last node points to the first",
      "B) A linked list with no end",
      "C) A doubly linked list",
      "D) A sorted linked list"
    ],
    correctAnswer: "A) A linked list where the last node points to the first",
    explanation: "In circular linked lists, the last node's next pointer points back to the head.",
    difficulty: "easy",
    category: "coding",
    subcategory: "dsa",
    topic: "Linked Lists"
  },
  {
    questionText: "What is the space complexity of an adjacency matrix for a graph?",
    options: ["A) O(V)", "B) O(E)", "C) O(V + E)", "D) O(V^2)"],
    correctAnswer: "D) O(V^2)",
    explanation: "Adjacency matrices use a 2D array of size V x V, so O(V^2) space.",
    difficulty: "medium",
    category: "coding",
    subcategory: "dsa",
    topic: "Graphs"
  },
  {
    questionText: "What is the difference between an array and a linked list?",
    options: [
      "A) Arrays have fixed size, linked lists are dynamic",
      "B) Arrays allow random access, linked lists do not",
      "C) Both A and B",
      "D) They are the same"
    ],
    correctAnswer: "C) Both A and B",
    explanation: "Arrays have fixed size and allow O(1) access, linked lists are dynamic but O(n) access.",
    difficulty: "easy",
    category: "coding",
    subcategory: "dsa",
    topic: "Arrays vs Linked Lists"
  },
  {
    questionText: "What is a priority queue?",
    options: [
      "A) A queue where elements have priorities",
      "B) A queue that sorts elements",
      "C) A stack with priorities",
      "D) A type of array"
    ],
    correctAnswer: "A) A queue where elements have priorities",
    explanation: "Priority queues dequeue the element with the highest priority first.",
    difficulty: "easy",
    category: "coding",
    subcategory: "dsa",
    topic: "Queues"
  },
  {
    questionText: "What is the time complexity of Dijkstra's algorithm?",
    options: ["A) O(V)", "B) O(E log V)", "C) O(V^2)", "D) O(E)"],
    correctAnswer: "B) O(E log V)",
    explanation: "Using a priority queue, Dijkstra's algorithm runs in O((V + E) log V) time.",
    difficulty: "hard",
    category: "coding",
    subcategory: "dsa",
    topic: "Graphs"
  },
  {
    questionText: "What is a balanced binary tree?",
    options: [
      "A) A tree where left and right subtrees differ in height by at most 1",
      "B) A tree with equal number of nodes on both sides",
      "C) A complete binary tree",
      "D) A full binary tree"
    ],
    correctAnswer: "A) A tree where left and right subtrees differ in height by at most 1",
    explanation: "Balanced trees maintain height difference of at most 1 between subtrees.",
    difficulty: "medium",
    category: "coding",
    subcategory: "dsa",
    topic: "Trees"
  },
  {
    questionText: "What is the purpose of a sentinel node in linked lists?",
    options: [
      "A) To mark the end of the list",
      "B) To simplify boundary conditions",
      "C) To store extra data",
      "D) To sort the list"
    ],
    correctAnswer: "B) To simplify boundary conditions",
    explanation: "Sentinel nodes eliminate special cases for empty lists and insertions/deletions.",
    difficulty: "hard",
    category: "coding",
    subcategory: "dsa",
    topic: "Linked Lists"
  },
  {
    questionText: "What is the time complexity of the knapsack problem using dynamic programming?",
    options: ["A) O(n)", "B) O(nW)", "C) O(2^n)", "D) O(n log n)"],
    correctAnswer: "B) O(nW)",
    explanation: "0/1 knapsack DP solution has time complexity O(nW) where W is the capacity.",
    difficulty: "hard",
    category: "coding",
    subcategory: "dsa",
    topic: "Dynamic Programming"
  },
  {
    questionText: "What is a red-black tree?",
    options: [
      "A) A self-balancing binary search tree",
      "B) A tree with red and black nodes",
      "C) Both A and B",
      "D) A type of heap"
    ],
    correctAnswer: "C) Both A and B",
    explanation: "Red-black trees are self-balancing BSTs that use color properties to maintain balance.",
    difficulty: "hard",
    category: "coding",
    subcategory: "dsa",
    topic: "Trees"
  },
  {
    questionText: "What is the difference between a stack and a queue?",
    options: [
      "A) Stack is LIFO, queue is FIFO",
      "B) Stack is FIFO, queue is LIFO",
      "C) They are the same",
      "D) Stack uses arrays, queue uses linked lists"
    ],
    correctAnswer: "A) Stack is LIFO, queue is FIFO",
    explanation: "Stacks follow Last In First Out, queues follow First In First Out.",
    difficulty: "easy",
    category: "coding",
    subcategory: "dsa",
    topic: "Stacks vs Queues"
  },
  {
    questionText: "What is topological sort?",
    options: [
      "A) Sorting nodes in a graph based on dependencies",
      "B) Sorting edges in a graph",
      "C) Sorting vertices by degree",
      "D) Sorting paths in a graph"
    ],
    correctAnswer: "A) Sorting nodes in a graph based on dependencies",
    explanation: "Topological sort orders vertices such that for every edge u->v, u comes before v.",
    difficulty: "hard",
    category: "coding",
    subcategory: "dsa",
    topic: "Graphs"
  },
  {
    questionText: "What is the space complexity of an adjacency list?",
    options: ["A) O(V)", "B) O(E)", "C) O(V + E)", "D) O(V^2)"],
    correctAnswer: "C) O(V + E)",
    explanation: "Adjacency lists store vertices and their edges, using O(V + E) space.",
    difficulty: "medium",
    category: "coding",
    subcategory: "dsa",
    topic: "Graphs"
  },
  {
    questionText: "What is memoization?",
    options: [
      "A) Storing results of expensive function calls",
      "B) A type of sorting",
      "C) A data structure",
      "D) A search algorithm"
    ],
    correctAnswer: "A) Storing results of expensive function calls",
    explanation: "Memoization caches the results of function calls to avoid recomputation.",
    difficulty: "medium",
    category: "coding",
    subcategory: "dsa",
    topic: "Dynamic Programming"
  },
  {
    questionText: "What is the worst case time complexity of quicksort?",
    options: ["A) O(n)", "B) O(n log n)", "C) O(n^2)", "D) O(log n)"],
    correctAnswer: "C) O(n^2)",
    explanation: "Quicksort's worst case occurs when the pivot is always the smallest or largest element.",
    difficulty: "medium",
    category: "coding",
    subcategory: "dsa",
    topic: "Sorting"
  },
  {
    questionText: "What is a B-tree?",
    options: [
      "A) A self-balancing tree for disk-based storage",
      "B) A binary tree",
      "C) A type of heap",
      "D) A graph"
    ],
    correctAnswer: "A) A self-balancing tree for disk-based storage",
    explanation: "B-trees are designed to work well on disks, minimizing disk accesses.",
    difficulty: "hard",
    category: "coding",
    subcategory: "dsa",
    topic: "Trees"
  },
  {
    questionText: "What is an AVL tree?",
    options: ["A) A self-balancing binary search tree", "B) A type of hash table", "C) A graph traversal algorithm", "D) A sorting algorithm"],
    correctAnswer: "A) A self-balancing binary search tree",
    explanation: "AVL trees maintain balance by ensuring the height difference between subtrees is at most 1.",
    difficulty: "hard",
    category: "coding",
    subcategory: "dsa",
    topic: "Trees"
  }
];

module.exports = dsaQuestions;