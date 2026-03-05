// Seed data for Amazon Interview Questions with Comprehensive Answers

const amazonQuestions = [
  {
    question: "Customer Obsession example?",
    answer: "Customer Obsession means thinking deeply about customer needs and solving their problems. Example: During an internship at a startup, a user reported a critical bug in our mobile app at 8 PM Friday. Instead of waiting until Monday, I stayed late, debugged the issue (corrupted user profile data), fixed it, deployed, and sent a personalized email to the user with explanation and compensation offer. The user later became our promoter and referred clients. This exemplifies going above and beyond, listening deeply to frustration, and delivering extraordinary experience. Another mindset: when building feature, don't ask 'what do customers want?', ask 'what problem do customers have?' Deep understanding led us to pivot feature design, resulting in 3x adoption. Customer obsession isn't one action but constant mindset - reading reviews, talking to users, obsessing over metrics that matter to them, sacrificing short-term convenience for long-term customer value.",
    category: "interview",
    subcategory: "amazon",
    company: "Amazon",
    topic: "Leadership Principles"
  },
  {
    question: "Ownership example?",
    answer: "Ownership means taking responsibility for outcomes, not making excuses. Example: Noticed our backend server costs were rising unexpectedly each month. This wasn't assigned to me, but instead of reporting to manager, I took ownership. Audited AWS CloudTrail and billing, found unused RDS instances and old snapshots consuming storage. Without waiting for approval, I created plan to decommission resources safely (notified teams using old instances), cleaned up unused snapshots, implemented auto-cleanup scripts. Result: 20% cost reduction, saved company $50K annually. This showed proactive ownership - saw problem, owned solution, drove change. Another example: project delay due to unclear requirements. Instead of blaming product team, I took ownership: scheduled clarity session, documented requirements, created checklist, mentored junior developers, rescheduled milestones. Project delivered on time. Ownership means: when something breaks, you own fixing it regardless of who's at fault, you drive results, you don't settle for 'not my job'.",
    category: "interview",
    subcategory: "amazon",
    company: "Amazon",
    topic: "Leadership Principles"
  },
  {
    question: "Bias for Action example?",
    answer: "Bias for Action means preferring fast execution over analysis paralysis. Example: Client needed working prototype for demo in two days. Normally, building full backend, payment integration, API would take 2 weeks. Instead, I used low-code tool (Firebase, Stripe setup), built MVP in 1.5 days with core features only, walked client through vision of full product, secured deal, and extended timeline to 4 weeks for full build. Risk: prototype might have technical debt, but reward was capturing client. This exemplifies acting with 70% information rather than waiting for 100%. Another example: during incident, database connection pool was exhausted. Analysis showed new code had leak. Instead of hours of detailed investigation, I quickly rolled back recent deployment (risky but contained), restored service (5 minutes downtime instead of hours), then investigated thoroughly in controlled manner. Bias for action is about calculated boldness - gathering minimum sufficient information, making decision, taking action, learning fast.",
    category: "interview",
    subcategory: "amazon",
    company: "Amazon",
    topic: "Leadership Principles"
  },
  {
    question: "Deep Dive example?",
    answer: "Deep Dive means digging relentlessly until finding root cause, not settling for surface explanations. Example: Database query for user profile was timing out (5+ seconds), blocking page load. Initial thought: need to scale database. But instead of reactive scaling, I deep dived: ran EXPLAIN PLAN, found query doing full table scan on user table. Checked indexes, found missing composite index on frequently joined columns (user_id, status). Added index, query time dropped from 5000ms to 200ms, solved without scaling. Cost: index creation, Benefit: saved thousands in database scaling costs. Learning: didn't assume infrastructure problem, investigated execution plan. Another example: API returning wrong data intermittently. Wasn't obvious from logs. I traced every request through code, checked database state during concurrent updates, found race condition in update logic (two threads modifying same field). Added proper locking, fixed. Deep dive mentality: question assumptions, look beyond obvious, investigate until confident in root cause, document learnings.",
    category: "interview",
    subcategory: "amazon",
    company: "Amazon",
    topic: "Leadership Principles"
  },
  {
    question: "Implement LRU Cache?",
    answer: "LRU (Least Recently Used) Cache stores fixed number of items, evicting least recent item when capacity exceeded. Design approach: combine Hash Map (O(1) lookup) with Doubly Linked List (O(1) removal/insertion). When accessing item: move it to front (most recent). When adding beyond capacity: remove tail (least recent). Structure: class Node { int key, value; Node prev, next; }. class LRUCache { int capacity; Map<Integer, Node> map = new HashMap<>(); Node head = new Node(), tail = new Node(); } head and tail dummy nodes. get(key): check if exists in map, if yes, move to front return value, else return -1. put(key, value): if exists, update value and move to front; if new and at capacity, remove tail; add new node to front. Move to front: remove from current position, add after head. Example: capacity=2, get(1)->hit, put(2), put(3)->evicts 1, get(1)->miss. Time O(1) for all operations. Space O(capacity). Variants: LFU (Least Frequently Used), TTL-based cache.",
    category: "interview",
    subcategory: "amazon",
    company: "Amazon",
    topic: "Data Structures"
  },
  {
    question: "Merge K sorted Lists?",
    answer: "Given K sorted linked lists, merge into single sorted list. Approach 1: MIN-PRIORITY QUEUE. Insert first node of each list into min-heap, repeatedly extract min and insert its next node. Time O(n*log K) where n total nodes. Approach 2: DIVIDE AND CONQUER. Recursively divide lists into two halves, merge each half, then merge results. Time O(n*log K). Approach 3: ITERATIVE TWO-WAY MERGE. Merge lists pairwise: merge list 1&2, result with list 3, etc. Time O(n*K). Priority Queue approach is most efficient: while heap not empty, extract min, add to result, push its next node. Example: [1->4->5, 1->3->4, 2->6], heap starts with (1,list1), (1,list2), (2,list3). Extract 1 from list1, push 4. Extract 1 from list2, push 3. Continue. Result: 1->1->2->3->4->4->5->6. Implementation: class ListNode { int val; ListNode next; }. Use PriorityQueue<ListNode> with custom comparator for values.",
    category: "interview",
    subcategory: "amazon",
    company: "Amazon",
    topic: "Arrays & Strings"
  },
  {
    question: "Valid Parentheses?",
    answer: "Given string with brackets, determine if valid (properly closed and ordered). Push opening brackets onto stack, for closing brackets check if matches stack top. Valid when all matched and stack empty. Algorithm: scan each character, ('{') push to stack, ('}') check top of stack, if mismatch, invalid, pop and continue, at end if stack empty, valid, else invalid. Example: '({[]})' -> push (, push {, push [, ], matches [, pop, }, matches {, pop, ), matches (, pop, stack empty, valid. '({[}])' -> ... }, top is [, mismatch, invalid. Time O(n), Space O(n) for stack. Edge cases: empty string (valid), only closing (invalid), mismatched types. Pairs to match: (), [], {}. Variations: different bracket types, nested structures. This is leetcode easy but important for understanding stacks.",
    category: "interview",
    subcategory: "amazon",
    company: "Amazon",
    topic: "Stack"
  },
  {
    question: "Word Ladder?",
    answer: "Given start word, end word, list of valid words, find shortest path where each step changes one letter. Treat as graph: nodes are words, edges connect words differing by one letter. Use BFS to find shortest path. Algorithm: (1) Start node is start word, enqueue with distance 1, (2) For each word, generate all one-letter variants, if in word list and not visited, enqueue with distance+1, (3) If find end word, return distance, (4) If exhaust queue, no path. Example: 'hit' -> 'hot' -> 'dot' -> 'dog' -> 'log'. Path length 5. BFS guarantees shortest as each layer is one edit distance away. Optimization: bidirectional BFS from start and end, reduces search space. Generate variants: for each position, try all 26 letters, check if in set. Time O(n*L*26) where n words, L word length, generating variants and checking. Space O(n) for queue and visited set. Common in word games, puzzle solvers.",
    category: "interview",
    subcategory: "amazon",
    company: "Amazon",
    topic: "Graph"
  },
  {
    question: "Binary Tree Level Order Traversal?",
    answer: "Visit tree nodes level by level (breadth-first). Use Queue: enqueue root, process each level by dequeuing node, enqueuing its children. Variation: return levels as list of lists. Algorithm: (1) Initialize queue with root, (2) While queue not empty: get size (nodes at current level), process all nodes at this level, enqueue their children, add level to result, (3) Move to next level. Example: tree [3, 9, 20, null, null, 15, 7]. Root 3, dequeue 3, enqueue 9 and 20. Next: dequeue 9 (no children), dequeue 20, enqueue 15 and 7. Result: [[3], [9,20], [15,7]]. Time O(n), Space O(w) where w is maximum width (max nodes at any level). Variations: zigzag traversal (alternate left-right), level minimum/maximum. This is common tree problem testing BFS understanding.",
    category: "interview",
    subcategory: "amazon",
    company: "Amazon",
    topic: "Trees"
  },
  {
    question: "Invent and Simplify example?",
    answer: "Invent and Simplify means creating new solutions to customer problems while keeping implementation simple and elegant. Example: Company processes documents manually, tedious, error-prone. Recognized need (customer problem), invented solution: built Python script parsing documents into structured data, extracted key info using regex and NLP, stored in database. Simple script (200 lines) replaced hours of manual work per document. Process: understood customer workflow deeply, brainstormed solutions, chose simplest that solves problem. Another example: monitoring system had 50 alerts daily, engineers ignoring due to noise. Instead of adding more alerts, simplified: grouped related alerts, made smarter thresholds, added context (why alert matters). Reduced noise 90%, actually noticed important alerts. Invent philosophy: imagine designing for aliens - what is minimum needed? What assumptions can remove? Beautiful solutions are surprisingly simple (quote from Feynman: 'if can't explain simply, don't understand well'). Focus on simplicity often reveals hidden complexity issues.",
    category: "interview",
    subcategory: "amazon",
    company: "Amazon",
    topic: "Leadership Principles"
  },
  {
    question: "Two Sum Problem?",
    answer: "Given array of integers, find two numbers that sum to target. Approach 1: BRUTE FORCE - nested loops, O(n²) time. Approach 2: HASH MAP - single pass, store (target - num) as we go, check if current num's complement exists. Time O(n), Space O(n). Algorithm: create map { num: index }, iterate array, if target - num in map, return [index of complement, current index], else add num to map. Example: [2,7,11,15], target=9. i=0, num=2, complement=7, not in map, add 2. i=1, num=7, complement=2, in map at index 0, return [0,1]. Sorted array variant: two pointers from start/end, if sum < target move left++, if sum > target move right--, saves space. Most interviews expect O(n) time. Variations: three sum (n²), k sum (n^(k-1)), closest sum, etc. Foundation for many interview problems.",
    category: "interview",
    subcategory: "amazon",
    company: "Amazon",
    topic: "Arrays & Strings"
  },
  {
    question: "Longest Substring without Repeating Characters?",
    answer: "Find length of longest substring without repeating characters. Sliding window approach: maintain window [left, right], expand right, if char repeated, shrink from left until no repeat. Track last seen index of each char. Algorithm: (1) Initialize left=0, maxLen=0, charIndex={}, (2) For each right from 0 to n-1: if char seen after left, move left, update char's index, update maxLen, (3) Return maxLen. Example: 'dvdf'. right=0, 'd', maxLen=1. right=1, 'v', maxLen=2. right=2, 'd', last 'd' at 0, move left to 1. right=3, 'f', maxLen=3. Time O(n), Space O(min(n, alphabet_size)). Edge cases: empty string (0), all repeating ('aaa', answer 1). Variations: with replace limit, at most k distinct. Common interview question testing hash maps and sliding window.",
    category: "interview",
    subcategory: "amazon",
    company: "Amazon",
    topic: "Arrays & Strings"
  },
  {
    question: "Container With Most Water?",
    answer: "Given array heights, find two lines that form container with maximum area. Area = width * min(height[left], height[right]). Two pointers: start left=0, right=n-1, calculate area, move pointer with smaller height inward (moving larger doesn't help, area limited by smaller height). Track maximum area. Algorithm: (1) left=0, right=n-1, maxArea=0, (2) While left < right: area = (right-left) * min(heights[left], heights[right]), maxArea = max(maxArea, area), if heights[left] < heights[right], left++ else right--, (3) Return maxArea. Time O(n), Space O(1). Example: heights=[1,8,6,2,5,4,8,3,7]. Start 1,7 area=1*3=3. Move left (1<7). 1,8 area=2*1=2. Move left. 8,7 area=3*7=21. Move right (6<8). Continue. Maximum area encountered. Why this works: if move pointer with larger height, width decreases and new height can't be larger, area can only stay same or decrease. Greedy choice is optimal.",
    category: "interview",
    subcategory: "amazon",
    company: "Amazon",
    topic: "Arrays & Strings"
  },
  {
    question: "Rotate Array?",
    answer: "Rotate array right by k positions. Example: [1,2,3,4,5], k=2 becomes [4,5,1,2,3]. Approach 1: BRUTE FORCE - rotate k times, each rotation moves last element to front, Time O(n*k). Approach 2: EXTRA ARRAY - copy last k elements to front, Time O(n), Space O(n). Approach 3: REVERSE TRICK (optimal) - reverse last k elements, reverse first n-k elements, reverse entire array. Time O(n), Space O(1). Algorithm: reverse(arr, 0, n-k-1), reverse(arr, n-k, n-1), reverse(arr, 0, n-1). Example: [1,2,3,4,5], k=2. Reverse [1,2,3] -> [3,2,1]. Reverse [4,5] -> [5,4]. Reverse entire -> [4,5,1,2,3]. Interview tip: can explain intuition (rotating pattern), handle edge case k > n (use k=k%n), clarify if in-place needed.",
    category: "interview",
    subcategory: "amazon",
    company: "Amazon",
    topic: "Arrays & Strings"
  },
  {
    question: "Serialize and Deserialize Binary Tree?",
    answer: "Convert tree to string (serialization) and reconstruct from string (deserialization). Approach 1: PREORDER TRAVERSAL. Serialize: do preorder traversal, record null pointers, concatenate values. Deserialize: use preorder to rebuild tree from serialized data. Example: tree [1,2,3] serializes as '1,2,null,null,3,null,null', deserialization rebuilds tree. Algorithm serialize: preorder(node) = node.val + ',' + preorder(node.left) + preorder(node.right) with null check. Deserialize: use pointer/queue to traversevalues, recursively build tree. Approach 2: LEVEL ORDER. Serialize each level, can rebuild. Approach 3: BFS. Simpler for some. Time/Space O(n). Edge cases: null tree, single node, skewed tree. Interview discussion: which traversal, null representation, delimiter choice, space efficiency.",
    category: "interview",
    subcategory: "amazon",
    company: "Amazon",
    topic: "Trees"
  }
];

module.exports = amazonQuestions;