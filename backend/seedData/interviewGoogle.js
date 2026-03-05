// Seed data for Google Interview Questions with Comprehensive Answers

const googleQuestions = [
  {
    question: "Longest Palindromic Substring?",
    answer: "The classic approaches are: (1) EXPAND AROUND CENTER - for each character (and between characters for even-length palindromes), expand outward while characters match. Time O(n²), Space O(1). (2) DYNAMIC PROGRAMMING - dp[i][j] = true if substring from i to j is palindrome. Build bottom-up: single chars are palindromes, then check if s[i]==s[j] and dp[i+1][j-1]. Time O(n²), Space O(n²). (3) MANACHER'S ALGORITHM - uses previously computed palindromes to find longer ones in O(n) time. It maintains a center and right boundary, exploiting mirror properties of palindromes. Manacher's Algorithm is optimal but complex to implement. Expand Around Center is the best balance of simplicity and reasonable performance. Example: 'babad' has 'bab' and 'aba' as longest palindromes with length 3.",
    category: "interview",
    subcategory: "google",
    company: "Google",
    topic: "Strings"
  },
  {
    question: "DP vs Greedy?",
    answer: "GREEDY algorithms make locally optimal choices at each step, hoping to find a global optimum. They work well for problems with optimal substructure and greedy choice property, like interval scheduling, minimum spanning tree (Kruskal's), coin change with canonical coin systems. Greedy is fast (usually O(n log n)) but doesn't always yield optimal solutions. Example: making change with coins [1, 3, 4] for amount 6, greedy picks 4+1+1 = 3 coins, but optimal is 3+3 = 2 coins. DYNAMIC PROGRAMMING explores all possible subproblems and stores results (memoization) to find globally optimal solution. It requires optimal substructure (optimal solution contains optimal solutions to subproblems) and overlapping subproblems. DP is slower (O(n²) or more) but guarantees optimality. Example: coin change with DP finds the true minimum. Use DP when greedy fails or when you need certainty of optimality. Greedy is preferred for efficiency if it provably works for your problem. Interview tip: know when each applies - many problems have greedy solutions but require DP proof.",
    category: "interview",
    subcategory: "google",
    company: "Google",
    topic: "Algorithms"
  },
  {
    question: "Dijkstra's Algorithm?",
    answer: "Dijkstra's Algorithm finds the shortest path from a source to all other nodes in a weighted graph with non-negative edge weights. It maintains a priority queue of vertices and greedily selects the vertex with minimum distance from source. Process: (1) Initialize distances to all nodes as infinity except source (distance 0), (2) Add source to priority queue, (3) While queue not empty: extract vertex with minimum distance, update distances to its unvisited neighbors through this vertex, add them to queue if distance improved, (4) Mark visited vertices to avoid reprocessing. Time complexity O((V + E) log V) with min-heap priority queue, where V is vertices and E is edges. Space complexity O(V). Example: graph with nodes A (source), B, C; edges A-B=1, A-C=4, B-C=2. Dijkstra gives distances A=0, B=1, C=3 (via shortest A->B->C). Cannot handle negative-weight edges (use Bellman-Ford instead). Used in GPS navigation, network routing, game AI pathfinding.",
    category: "interview",
    subcategory: "google",
    company: "Google",
    topic: "Graphs"
  },
  {
    question: "Design a URL Shortener?",
    answer: "A URL shortener converts long URLs into short codes (like tinyurl.com/abc123). Key requirements: generate unique, short URLs; provide fast encoding/decoding; handle scale (billions of URLs). Architecture: (1) USE BASE62 ENCODING - convert auto-incremented ID to base62 string (0-9, a-z, A-Z = 62 chars) to create short code, (2) STORE MAPPING - use NoSQL database (MongoDB, DynamoDB) with key-value: code -> originalURL, (3) HANDLE SCALE - use distributed systems, caching (Redis), load balancing, (4) REVERSE MAPPING - maintain reverse index for analytics. Example: ID 123456 in base62 is '2n9c'. Encode: convert ID to base62 repeatedly dividing by 62. Decode: convert base62 back to ID. Cache frequently accessed URLs in Redis for fast retrieval. Shard database by first character of code for distribution. Handle collisions using UUID if custom domain. Consider TTL for expired URLs. This is a classic system design problem testing scalability understanding.",
    category: "interview",
    subcategory: "google",
    company: "Google",
    topic: "System Design"
  },
  {
    question: "Paging vs Segmentation?",
    answer: "Both are memory management techniques but work differently. PAGING divides physical memory into fixed-size frames and logical memory into fixed-size pages. Virtual address maps to (page_number, offset). Page table maintains mapping. Advantages: simple, no external fragmentation, supports virtual memory. Disadvantages: internal fragmentation (wasted space within page), SEGMENTATION divides memory into variable-size logical segments (code, data, stack, heap). Logical address is (segment_number, offset within segment). Segment table maintains base address and limit. Advantages: no internal fragmentation, aligned with programmer view of memory. Disadvantages: external fragmentation, complex. COMBINED APPROACH modern systems use paging with some segmentation. Paging is more flexible for virtual memory and page swapping. Segmentation is more intuitive for programmers. Most current OS use pure paging. Comparison: Paging = fixed size, Segmentation = variable size; Paging = better performance, Segmentation = better organization.",
    category: "interview",
    subcategory: "google",
    company: "Google",
    topic: "Operating Systems"
  },
  {
    question: "What is a Trie?",
    answer: "A Trie (prefix tree) is a tree-like data structure where each node represents a character and edges represent transitions. The root node represents an empty string. Each path from root to a node represents a prefix. Nodes contain a flag marking word completion. Useful for: (1) AUTOCOMPLETE - retrieve all words starting with a prefix in O(∑word_lengths), (2) SPELL CHECK - detect valid words, (3) DICTIONARY - check word existence in O(word_length) instead of O(log n) BST. Structure: class TrieNode { Map<Character, TrieNode> children; boolean isEndOfWord; }. Insert: traverse/create nodes, mark last as end. Search: traverse matching characters, check isEndOfWord. Prefix search: traverse, return all words under that node. Space complexity O(ALPHABET_SIZE * number_of_words * avg_word_length). Time for operations O(word_length). Tradeoff: uses more space than hashtable but faster for prefix operations. Common in IP routing (longest prefix match), T9 predictive text. Variants: Compressed Trie (shares common suffixes), Radix Tree.",
    category: "interview",
    subcategory: "google",
    company: "Google",
    topic: "Data Structures"
  },
  {
    question: "Detect Cycle in Directed Graph?",
    answer: "To detect cycles in directed graphs, use DFS with a 'recursion stack' (visiting set). Algorithm: (1) Maintain three sets - WHITE (unvisited), GRAY (visiting in current path), BLACK (completely visited), (2) DFS from each unvisited node: mark as GRAY, visit all neighbors recursively, if neighbor is GRAY, cycle found, mark as BLACK when done, (3) If any node transitions from WHITE to GRAY to BLACK without finding GRAY neighbor, no cycle on that path. Time O(V + E), Space O(V). Example: Graph 0->1, 1->2, 2->0 has cycle 0->1->2->0. During DFS from 0: mark 0 GRAY, visit 1 GRAY, visit 2 GRAY, visit 0 again - it's GRAY (in current path), so cycle detected. Why not just visited set? Because in undirected graphs you'd see parent again, but in directed graphs you need to track current path to distinguish back edges (cycles) from cross edges. Union-Find is another approach but less intuitive. DFS with recursion stack is standard. Useful for topological sorting, deadlock detection.",
    category: "interview",
    subcategory: "google",
    company: "Google",
    topic: "Graphs"
  },
  {
    question: "Lowest Common Ancestor (LCA)?",
    answer: "The Lowest Common Ancestor of nodes p and q is the lowest node in a tree that has both p and q as descendants (a node can be its own ancestor). Approaches: (1) DFS with parent pointers - store parent of each node during DFS, then traverse from both nodes to root, store path, find first common node. O(h) time, O(h) space. (2) Recursion - if root is p or q, return root; recursively search left and right subtrees. If both found on different sides, root is LCA. If both found on one side, deeper node is LCA. This is elegant: if root == p || root == q, root is ancestor; recurse left and right; if both return non-null, root is LCA; if only left returns, return left (LCA is on left), same for right. (3) Binary lifting / Sparse Table - preprocess to jump 2^k levels, find LCA in O(log h). For RANGE LCA (not just tree), use Segment Tree approaches. Time O(h) for simple DFS, Space O(h). Example: Binary tree with root 3, nodes 5 (left), 1 (right), 0 and 4 under 5. LCA(5, 1) = 3 (root), LCA(5, 4) = 5 (one is ancestor).",
    category: "interview",
    subcategory: "google",
    company: "Google",
    topic: "Trees"
  },
  {
    question: "Microservices vs Monolithic?",
    answer: "MONOLITHIC architecture bundles all features (UI, API, database) into a single application. Tightly coupled, shared database, deployed as one unit. Advantages: simple to develop initially, easy debugging, good for small teams and projects. Disadvantages: scaling requires scaling entire application, technology locked-in, one bug can crash whole system, difficult for large teams. MICROSERVICES breaks application into small, independent services. Each handles specific business function, has own database, communicates via REST/gRPC/message queues, deployed independently. Advantages: fine-grained scalability, technology flexibility, independent deployment, fault isolation, easier team organization. Disadvantages: complex distributed debugging, data consistency challenges, network latency, operational overhead, more testing needed. COMPARE: Monolith is like a single restaurant, microservices like a franchise with specialized outlets. Use Monolith for: startups, simple apps, small teams. Use Microservices for: large-scale systems, independent scaling needs, diverse technologies. Key difference: deployment granularity and team structure. Most companies start monolith, transition to microservices as complexity grows.",
    category: "interview",
    subcategory: "google",
    company: "Google",
    topic: "System Architecture"
  },
  {
    question: "How does Load Balancing work?",
    answer: "Load Balancing distributes incoming network traffic across multiple servers to ensure no single server becomes a bottleneck. Prevents one server from being overwhelmed, improves availability and reliability. Key concepts: CLIENT makes request -> LOAD BALANCER receives, decides which BACKEND SERVER should handle it -> SERVER processes and responds -> LOAD BALANCER returns response to client. Load balancing strategies: (1) ROUND ROBIN - distribute requests sequentially to servers, simple, assumes equal capacity, (2) LEAST CONNECTIONS - send to server with fewest active connections, (3) IP HASH - route based on client IP, ensures same client reaches same server (session affinity), (4) WEIGHTED ROUND ROBIN - distribute based on server capacity, (5) LEAST RESPONSE TIME - send to fastest responding server. Popular load balancers: nginx, HAProxy, cloud services (AWS ELB). Issues to handle: (1) SESSION PERSISTENCE - same client to same server, (2) HEALTH CHECKS - detect dead servers and stop routing, (3) FAILOVER - redistribute if server fails, (4) SESSION REPLICATION - sync sessions across servers. Levels: Layer 4 (TCP/UDP, network), Layer 7 (HTTP application). GeoIP-based routing sends users to nearest data center. Essential for high-availability systems.",
    category: "interview",
    subcategory: "google",
    company: "Google",
    topic: "System Design"
  },
  {
    question: "Merge Sorted Arrays efficiently?",
    answer: "Given two sorted arrays, merge into one sorted array. Key insight: use two pointers approach since both are sorted. Algorithm: (1) Create result array of size m+n, (2) Maintain pointers i=0 for arr1, j=0 for arr2, k=0 for result, (3) Compare arr1[i] and arr2[j], add smaller to result, increment its pointer and k, (4) When one array exhausted, copy remaining elements from other. Time O(m+n), Space O(m+n) for result. Can optimize: if merging in-place into first array, work backward from end to avoid overwriting. Example: arr1=[1,3,5], arr2=[2,4,6]. Compare 1 and 2, add 1, move i. Compare 3 and 2, add 2, move j, continue. Result: [1,2,3,4,5,6]. For multiple arrays, use min-heap: add first element of each array, repeatedly extract minimum and add next element from same array. Time O(k*n*log k) where k arrays, n elements each. Two-pointer is optimal for two arrays. Foundation for merge sort algorithm. Interview tip: clarify if arrays are sorted, if in-place modification allowed.",
    category: "interview",
    subcategory: "google",
    company: "Google",
    topic: "Arrays"
  },
  {
    question: "What is a B-Tree?",
    answer: "A B-Tree is a self-balancing search tree optimized for disk-based storage in databases and file systems. Unlike binary trees, B-Trees have multiple keys per node and multiple children, reducing tree height. Key properties: (1) All leaves at same height (perfectly balanced), (2) Each node contains keys and pointers, (3) Each non-leaf node with k keys has k+1 children, (4) Minimum degree t ensures fanout, number of keys between t-1 and 2t-1, (5) Keys in node sorted, values in left child < first key < right subtree. Operations INSERT/DELETE/SEARCH involve potentially splitting/merging nodes. Advantages: reduced tree height means fewer disk accesses, important since disk access is expensive. B-Tree of order m and height h can store m^h keys. Example: B-Tree of order 3 (max 5 keys/node) with height 2 stores more data than binary tree of height 10. Used in databases: index structures, file systems: inode management. B+ tree variant stores data only in leaves, interior nodes for indexing. Time complexity O(log n) for operations. Handling millions of records efficiently relies on B-Trees' disk-aware structure.",
    category: "interview",
    subcategory: "google",
    company: "Google",
    topic: "Data Structures"
  },
  {
    question: "Implement Binary Search?",
    answer: "Binary Search finds a target in a sorted array in O(log n) time. Works by repeatedly dividing search space in half. Algorithm: (1) Initialize left=0, right=n-1, (2) While left <= right: mid = (left+right)/2, if arr[mid]==target return mid, if arr[mid]<target search right half (left=mid+1), else search left half (right=mid-1), (3) If target not found, return -1. Time O(log n), Space O(1). Example: arr=[1,3,5,7,9], find 5. mid=5 (arr[2]), arr[2]==5, return 2. Common mistakes: integer overflow (use mid = left + (right-left)/2), off-by-one errors in boundary conditions. Edge cases: empty array, single element, target not present, duplicates (distinguish first/last occurrence). Recursive implementation: cleaner code but O(log n) stack space. Iterative preferred for space efficiency. Applications: searching sorted data, finding boundaries (first element >= target), game guessing. Variants: (1) First Occurrence - find leftmost target, (2) Last Occurrence - find rightmost, (3) Rotated Sorted Array - handle rotation point, (4) Find Peak - no duplicate peaks. Binary Search is fundamental; master variations.",
    category: "interview",
    subcategory: "google",
    company: "Google",
    topic: "Algorithms"
  },
  {
    question: "Minimum Spanning Tree (MST)?",
    answer: "A Minimum Spanning Tree of a weighted graph is a subset of edges that connects all vertices with minimum total edge weight and no cycles. Used in network design, airline routes, road networks. Key properties: (1) Has exactly V-1 edges for V vertices, (2) Connected and acyclic, (3) Unique if all weights distinct (multiple possible otherwise). Kruskal's Algorithm: (1) Sort edges by weight, (2) Use Union-Find to track components, (3) For each edge in sorted order: if connects two different components, add to MST and union them, skip if creates cycle. Time O(E log E). Prim's Algorithm: (1) Start at any vertex, (2) Maintain priority queue of edges from tree to non-tree vertices, (3) Repeatedly add minimum-weight edge connecting tree to new vertex, (4) Continue until all vertices covered. Time O((V + E) log V) with binary heap. Example: graph with vertices A,B,C,D; edges A-B=1, B-C=2, C-D=3, A-D=5. Kruskal: sort edges, add 1,2,3 to MST (skip 5 as it would create cycle). Prim: start A, add closest (B with weight 1), add closest to {A,B} (C with weight 2), add closest to {A,B,C} (D with weight 3). Both find MST with weight 6. Applications: network design, clustering algorithms.",
    category: "interview",
    subcategory: "google",
    company: "Google",
    topic: "Graphs"
  },
  {
    question: "String Pattern Matching (KMP)?",
    answer: "The Knuth-Morris-Pratt (KMP) algorithm finds all occurrences of pattern in text efficiently. Naive approach compares every position, O(n*m). KMP avoids redundant comparisons using failure function (partial match table). Process: (1) Build FAILURE FUNCTION for pattern: for each position, compute longest proper prefix that's also suffix. Example: pattern 'ABABC', failure = [0,0,1,2,0]. (2) Search: maintain position in pattern and text, if characters match advance both, if mismatch use failure function to shift pattern without re-examining matched characters. (3) When pattern exhausted, found occurrence, continue with failure function to find more. Time O(n+m) where n is text length, m is pattern length. Space O(m) for failure function. Example: find 'ABC' in 'ABABCABAC'. Naive would restart from position 2 after first mismatch at position 1. KMP jumps using failure function, avoiding redundant comparisons. Other algorithms: Boyer-Moore (good for long patterns, works backward), Aho-Corasick (multiple patterns), Rabin-Karp (hashing). KMP is optimal for single pattern. Applications: text editors, genetics (DNA matching), data compression.",
    category: "interview",
    subcategory: "google",
    company: "Google",
    topic: "Strings"
  },
  {
    question: "Topological Sort?",
    answer: "Topological Sort arranges vertices of a directed acyclic graph (DAG) in linear order such that for every edge u->v, u appears before v. Only possible in DAGs (no cycles). Applications: task scheduling (prerequisites), course ordering, build systems, dependency resolution. Kahn's Algorithm (BFS): (1) Calculate in-degree (incoming edges) for each vertex, (2) Add all vertices with in-degree 0 to queue, (3) Remove vertex from queue, add to result, decrease in-degree of all neighbors, add neighbors with in-degree 0 to queue, (4) If result size < total vertices, graph has cycle. Time O(V+E), Space O(V). DFS Approach: (1) Do DFS traversal, (2) When finishing vertex (all neighbors processed), push to stack, (3) Reverse stack gives topological order. Time O(V+E). Example: courses [0,1] with prerequisite 1->0, also [2,3] with 3->2, no relation between them. Topological order: [1,0,3,2] or [3,2,1,0] (both valid). Cycle detection: if vertex visited again in same DFS path, cycle exists. Used in: package managers (npm, pip), build tools (make), database query planning. Essential for problems involving dependencies and ordering.",
    category: "interview",
    subcategory: "google",
    company: "Google",
    topic: "Graphs"
  },
  {
    question: "Hash Function Design?",
    answer: "A good hash function maps data to fixed-size buckets uniformly, minimizing collisions. Properties: (1) DETERMINISTIC - same input always same hash, (2) UNIFORM DISTRIBUTION - minimize clustering, (3) EFFICIENT - O(1) computation, (4) COLLISION HANDLING - handle when two keys hash to same bucket. Hash functions: (1) DIVISION METHOD h(key) = key % table_size, picks prime table_size to avoid patterns, (2) MULTIPLICATION METHOD h(key) = floor(table_size * (key*A mod 1)) where A = (√5-1)/2, (3) FOLDING - sum digit groups, (4) SQUARING - square key, extract middle digits. Collision handling: (1) CHAINING - each bucket is linked list, (2) OPEN ADDRESSING - find another empty slot using probing (linear, quadratic, double hashing). For strings: treat as polynomial h(s) = (s[0]*p^n + s[1]*p^(n-1) + ... ) % M, rolling hash for pattern matching. Example: hashCode('cat') = (99*31² + 97*31 + 116) % tableSize. Java uses 31 as prime multiplier for strings. Hash table performance O(1) average, O(n) worst if poor hash function. Load factor α = n/table_size; when exceeds threshold, rehash with larger table. Good hash functions fundamental to hash tables, hash sets, cryptography.",
    category: "interview",
    subcategory: "google",
    company: "Google",
    topic: "Data Structures"
  }
];

module.exports = googleQuestions;