// Seed data for Microsoft Interview Questions with Comprehensive Answers

const microsoftQuestions = [
  {
    question: "Coercion in JavaScript?",
    answer: "Coercion is the automatic or implicit conversion of values from one data type to another. JavaScript is loosely typed, so operations between different types trigger coercion. IMPLICIT COERCION happens automatically: 5 + '5' = '55' (number to string), '5' - 2 = 3 (string to number), true + 1 = 2 (boolean to number). EXPLICIT COERCION uses conversion functions: String(123), Number('456'), Boolean(0). TRUTHY/FALSY: false, 0, -0, '', null, undefined, NaN are falsy; everything else is truthy. Double equals (==) coerces types: 5 == '5' is true. Triple equals (===) compares without coercion: 5 === '5' is false. Coercion rules: numerical context converts to number, string context to string, logical context to boolean. Double NOT (!!) converts to boolean. Practical issues: null == undefined is true (special case), [] == '' is true (array coerces to string). Best practice: use ===, be explicit with conversions, understand coercion rules. Example: if ('0') evaluates true because non-empty string is truthy, even though the string represents zero. Mastering coercion is crucial for JavaScript competency.",
    category: "interview",
    subcategory: "microsoft",
    company: "Microsoft",
    topic: "JavaScript"
  },
  {
    question: "Scope in JavaScript?",
    answer: "Scope determines the accessibility of variables - which code can access which variables. GLOBAL SCOPE: variables defined outside all functions, accessible everywhere. FUNCTION SCOPE: variables defined in function, accessible only within that function, created fresh for each call. BLOCK SCOPE (ES6): variables declared with let/const inside { }, accessible only within block, created separately for each iteration in loops. VAR issues: function-scoped only, hoisted (moved to function top), can be redeclared. LET/CONST: block-scoped, not hoisted in same way (temporal dead zone), let can be reassigned, const cannot. LEXICAL SCOPE (CLOSURE): inner function accesses outer function variables. Example: function outer() { const x = 1; function inner() { console.log(x); } return inner; } const fn = outer(); fn(); // logs 1. SCOPE CHAIN: when accessing variable, JavaScript searches current scope, parent scope, up to global scope. Example: function test() { let a=1; function nested() { let b=2; console.log(a + b); } }. Inner function can access 'a' from parent scope but not vice versa. Understanding scope prevents variable naming conflicts, memory leaks (from accidental global variables), and is foundational for JavaScript.",
    category: "interview",
    subcategory: "microsoft",
    company: "Microsoft",
    topic: "JavaScript"
  },
  {
    question: "Node.js features?",
    answer: "Node.js is a JavaScript runtime built on Chrome's V8 engine for server-side development. Key features: (1) EVENT-DRIVEN ARCHITECTURE: uses event emitters and listeners, code executes based on events, (2) NON-BLOCKING I/O: operations like file read, network requests don't block execution, uses callbacks/promises/async-await, (3) SINGLE-THREADED but asynchronous: single thread via event loop manages multiple concurrent operations, doesn't block for I/O, (4) MODULE SYSTEM: CommonJS (require/module.exports) or ES6 (import/export) for code organization, (5) NPM ECOSYSTEM: package manager with million+ packages. How it works: When I/O operation needed, request sent to system, execution continues, when I/O completes, callback queued and executed. Event loop checks for completed operations and pending callbacks. This allows handling thousands of connections with single thread - impossible in synchronous model. Example: readFile() starts, immediately returns, execution continues, file finishes, callback executes. Advantages: lightweight, fast for I/O-intensive apps, scalable. Disadvantages: CPU-intensive work blocks event loop (use worker threads), callback complexity (callback hell). Used in: web servers, real-time apps, IoT, APIs. Understanding event-driven, non-blocking nature is critical for Node.js programming.",
    category: "interview",
    subcategory: "microsoft",
    company: "Microsoft",
    topic: "Node.js"
  },
  {
    question: "Strict Mode in JavaScript?",
    answer: "Strict Mode is a way to opt into a restricted variant of JavaScript that eliminates some silent errors and makes code execute faster. Enable with 'use strict' directive at start of file or function. Changes behavior: (1) VARIABLES must be declared with var/let/const, assignment to undeclared variable throws error instead of creating global, (2) FUNCTION CONTEXT: this is undefined in functions instead of global object, (3) EVAL limitations: eval() can't create variables in surrounding scope, (4) DELETE restrictions: can't delete non-configurable properties, (5) PARAMETER restrictions: function parameters must have unique names, (6) OCTAL literals forbidden (0123), (7) ARGUMENTS object: can't alias (i.e., arguments.length = 1 doesn't affect parameters). Example: 'use strict'; x = 3; throws error without variable declaration. In non-strict, creates global variable. Performance benefit: optimizers know strict mode code is safer, apply more optimizations. Module scope: import/export implicitly run in strict mode. Class scope: class bodies execute in strict mode. Best practice: always use strict mode, use linters (ESLint) to enforce. Modern code assumes strict mode. Understanding strict mode prevents bugs from unexpected global variables.",
    category: "interview",
    subcategory: "microsoft",
    company: "Microsoft",
    topic: "JavaScript"
  },
  {
    question: "Callback Hell?",
    answer: "Callback Hell (Pyramid of Doom) occurs when code uses many nested callbacks, making it deeply indented and hard to read/maintain. Happens with asynchronous JavaScript before promises/async-await. Example: readFile('file.txt', function(err, data) { parse(data, function(err, result) { validate(result, function(err, validated) { save(validated, function(err) { console.log('Done'); }); }); }); }); This becomes unreadable and hard to debug. Issues: (1) Code flow hard to follow, (2) Difficult error handling (each callback must check for errors), (3) Variable scope confusion, (4) Hard to combine multiple async operations. Solutions: (1) NAMED FUNCTIONS: instead of inline callbacks, define separate functions, (2) PROMISES: convert callbacks to promises, chain with .then(), cleaner flow, (3) ASYNC/AWAIT: use async functions and await keyword, reads like synchronous code, (4) PROMISE CHAINING: use .then().catch() pattern. Modern equivalent using async/await: async function process() { const data = await readFile('file.txt'); const result = await parse(data); const validated = await validate(result); await save(validated); console.log('Done'); }. Much cleaner! Best practice: avoid callbacks if possible, use promises or async/await. Understanding callback hell and solutions shows JavaScript maturity.",
    category: "interview",
    subcategory: "microsoft",
    company: "Microsoft",
    topic: "Asynchronous"
  },
  {
    question: "Promise in JavaScript?",
    answer: "A Promise is an object representing eventual completion (or failure) of an asynchronous operation and its resulting value. States: (1) PENDING: initial state, operation not yet complete, (2) FULFILLED: operation succeeded, has resolved value, (3) REJECTED: operation failed, has reason (error). Once settled (fulfilled or rejected), cannot change state. Create: new Promise((resolve, reject) => { if(success) resolve(value); else reject(error); }). Methods: .then(onFulfilled, onRejected) handles resolution/rejection; .catch(onRejected) handles errors; .finally(callback) runs regardless of outcome. Chaining: promise.then(val => process(val)).then(result => save(result)).catch(err => handle(err)). Each .then returns new promise, enabling chain. Promise.all([p1, p2, p3]) waits for all, rejects if any rejects. Promise.race([p1, p2]) returns first settled. Promise.allSettled() waits for all regardless of rejection. Example: fetch(url).then(r => r.json()).then(data => console.log(data)).catch(err => console.log(err)). Advantages over callbacks: cleaner syntax, better error handling, natural chaining. Disadvantages: slightly overhead, learning curve. Async/await built on top of promises: async function getData() { const data = await fetch(url).then(r => r.json()); return data; }. Promises are fundamental to modern JavaScript.",
    category: "interview",
    subcategory: "microsoft",
    company: "Microsoft",
    topic: "Asynchronous"
  },
  {
    question: "Async/Await in JavaScript?",
    answer: "Async/Await is syntactic sugar over promises making asynchronous code look synchronous and easier to understand. ASYNC keyword marks function as asynchronous, always returns promise. AWAIT keyword pauses execution until promise settles, only usable inside async functions. Execution: when await encountered, function suspends, other code runs, when promise settles, execution resumes with resolved value. Example: async function fetchData() { const response = await fetch(url); const data = await response.json(); return data; }. Looks synchronous but runs asynchronously. Error handling: try { const data = await risky(); } catch(err) { handle(err); }. Much cleaner than .catch() chains. Multiple awaits: async function { const [data1, data2] = await Promise.all([fetch1(), fetch2()]); } runs in parallel. Advantages: readable, synchronous error handling, debuggable. Compared to promises: cleaner code, easier learning, less nesting. Pitfalls: (1) forgetting await causes race condition, (2) serial await in loop when parallel possible (use Promise.all), (3) returning promise without await still works but loses advantage. Sequential: const a = await task1(); const b = await task2(); // b waits for a. Parallel: const [a,b] = await Promise.all([task1(), task2()]); // both run together. Async/Await is modern JavaScript standard.",
    category: "interview",
    subcategory: "microsoft",
    company: "Microsoft",
    topic: "Asynchronous"
  },
  {
    question: "Wrapper classes in Java?",
    answer: "Wrapper Classes convert primitive types to objects. Primitives (int, double, boolean) can't work with collections or reflection. Wrapper classes: Integer for int, Double for double, Boolean for boolean, Character for char, etc., in java.lang package. Methods: intValue(), doubleValue() extract primitives; parseInt(), parseDouble() parse strings. AUTO-BOXING (Java 5+) automatically wraps primitives: List<Integer> list = new ArrayList<>(); list.add(5); // 5 wrapped to Integer. UNBOXING extracts: Integer obj = 5; int num = obj; // obj unboxed to 5. Equality: new Integer(5) == new Integer(5) is false (different objects), but Integer.valueOf(5) may be true (caching for -128 to 127). Use equals(): Integer.valueOf(5).equals(Integer.valueOf(5)) is true. Cache: Integer caches -128 to 127, so Integer.valueOf(5) always same object. Frequent boxing/unboxing has overhead - avoid in tight loops with primitives. Performance: primitive arrays faster than Integer[]. Immutable: once created, Wrapper value unchangeable. Useful for: generic collections (ArrayList<Integer>), reflection, nullable values (Integer can be null, int cannot). Utility methods: Integer.max(), min(), bitCount(), toHexString(). Understand boxing/unboxing prevents unexpected bugs.",
    category: "interview",
    subcategory: "microsoft",
    company: "Microsoft",
    topic: "Java"
  },
  {
    question: "Stack vs Heap?",
    answer: "Stack and Heap are memory regions with different characteristics. STACK: LIFO structure, stores LOCAL VARIABLES and METHOD REFERENCES (not actual objects), memory automatically freed when variable scope ends. Fast allocation/deallocation, small size (usually few MB), thread-safe (each thread has own stack), organized into stack frames for each method call. Example: void method() { int x = 5; String s = 'hello'; } creates frame with x=5 and s (reference). When method exits, frame popped, x and s destroyed. HEAP: stores OBJECTS and ARRAYS, garbage-collected, large size (usually GB), shared among threads, slower allocation/deallocation, fragmentation possible. Example: same method, String object containing 'hello' actually stored on heap, s is reference (pointer to heap location) stored on stack. Object lifetime independent of scope - exists until no references point to it, then GC reclaims. Key difference: primitives and references on stack, objects on heap. String pool (string literals) on heap. Memory leak: if reference never released, object on heap never GC'd. Stack overflow: too many nested calls exhaust stack. Heap exhaustion: too many objects exhaust heap. Performance: stack access faster (pointer arithmetic), heap access slower (pointer dereference). Understanding stack/heap essential for memory management and debugging.",
    category: "interview",
    subcategory: "microsoft",
    company: "Microsoft",
    topic: "Memory Management"
  },
  {
    question: "B-Tree vs Binary Tree?",
    answer: "Binary Tree: each node has at most 2 children. Properties: height logarithmic for balanced trees O(log n), height linear for skewed trees O(n). Simple structure. B-Tree: each node can have many children (up to m in m-ary B-Tree), typically ordered (each non-leaf with k keys has k+1 children). Properties: always balanced (height = O(log n) for any size), perfect for disk-based storage. B-Tree design: (1) optimizes disk access - fewer nodes read from disk means fewer expensive operations, (2) fanout (branching factor) chosen based on block size, (3) keeps keys sorted within node, (4) maintains balance through split/merge during insertion/deletion. Comparison: Binary tree simple, good for in-memory. B-Tree complex, crucial for databases. Example: B-Tree of order 100 with height 3 can store 100³ = 1M keys. Binary tree needs height 20 for same. In databases storing millions of records, B-Tree eliminates 17-19 disk accesses. Databases (MySQL, PostgreSQL) use B+ Trees (variant): non-leaf nodes for indexing, leaves store data, linked for range scans. File systems use B-Trees for I-node blocks. NTFS, HFS+ use B+ Trees. When data too large for memory, B-Tree superior. B* Trees extend B-Trees with more balanced splits.",
    category: "interview",
    subcategory: "microsoft",
    company: "Microsoft",
    topic: "Data Structures"
  },
  {
    question: "What is Cloud Computing?",
    answer: "Cloud Computing is on-demand delivery of computing resources (servers, storage, databases, software) over the internet with pay-as-you-go pricing. Users access resources remotely, don't own/maintain physical infrastructure. Service models: (1) IAAS (Infrastructure as a Service) - rent VMs, storage, networking; user manages OS, middleware, applications. Example: AWS EC2, Azure VMs. (2) PAAS (Platform as a Service) - rent platform for development, deployment; user manages applications and data. Example: AWS Elastic Beanstalk, Azure App Service. (3) SAAS (Software as a Service) - use applications online; vendor manages everything. Example: Salesforce, Office 365. Deployment models: (1) PUBLIC - shared infrastructure, multi-tenant, economical, (2) PRIVATE - dedicated infrastructure, expensive, control, (3) HYBRID - mix of public/private, flexibility. Benefits: (1) COST - pay only for usage, no infrastructure investment, (2) SCALABILITY - easily add/remove resources, (3) RELIABILITY - high availability, redundancy, (4) FLEXIBILITY - access from anywhere, (5) PERFORMANCE - latest hardware, speed. Challenges: (1) SECURITY - data in third-party systems, (2) COMPLIANCE - regulations, (3) LOCK-IN - hard to switch providers. Global providers: AWS (largest), Azure (Microsoft), GCP (Google), Alibaba Cloud. Cloud adoption growing rapidly for business agility.",
    category: "interview",
    subcategory: "microsoft",
    company: "Microsoft",
    topic: "Cloud"
  },
  {
    question: "Azure Services examples?",
    answer: "Microsoft Azure offers 200+ services. Compute: (1) VIRTUAL MACHINES - VMs for any OS, (2) APP SERVICE - web, mobile, API apps, managed platform, (3) FUNCTIONS - serverless compute for event-driven workloads, (4) CONTAINER INSTANCES - run Docker containers without managing infrastructure, (5) KUBERNETES SERVICE (AKS) - orchestrate containers. Storage: (1) STORAGE ACCOUNTS - blob, files, tables, queues, (2) SQL DATABASE - managed relational database, (3) COSMOS DB - globally distributed NoSQL, (4) DATA LAKE - big data analytics. Networking: (1) VIRTUAL NETWORK - isolated network, (2) APPLICATION GATEWAY - application load balancing, (3) CDN - global content delivery, (4) TRAFFIC MANAGER - DNS-based load balancing. AI/ML: (1) COGNITIVE SERVICES - pre-built APIs for vision, language, speech, (2) MACHINE LEARNING - build/train ML models, (3) BOT SERVICE - build chatbots. DevOps: (1) DEVOPS - CI/CD pipelines, (2) APPLICATION INSIGHTS - monitoring, (3) DIAGNOSTICS - troubleshooting. Database: SQL Database, MySQL, PostgreSQL, MariaDB. Integration: (1) LOGIC APPS - workflow automation, (2) SERVICE BUS - messaging, (3) EVENT GRID - event routing. Security: (1) KEY VAULT - manage secrets, (2) SECURITY CENTER - threat detection, (3) AZURE AD - identity management. Pricing tied to usage (VMs, storage per GB, data transfer). Azure portal unified management. Certifications: Azure Fundamentals, Azure Developer, Azure Solutions Architect. Microsoft's comprehensive cloud platform.",
    category: "interview",
    subcategory: "microsoft",
    company: "Microsoft",
    topic: "Azure"
  },
  {
    question: "RESTful API design?",
    answer: "REST (Representational State Transfer) architectural style for web services. Principles: (1) CLIENT-SERVER - separation of concerns, (2) STATELESS - server doesn't store client context, each request has all info, (3) UNIFORM INTERFACE - consistent way to interact with resources, (4) CACHEABLE - responses marked cacheable, (5) LAYERED SYSTEM - client not aware of direct connection end, (6) CODE ON DEMAND - optional, server can extend functionality. Design guidelines: Use RESOURCES as nouns (not verbs): GET /users (good), GET /getAllUsers (bad). Methods: GET (retrieve), POST (create), PUT (update entire), PATCH (partial update), DELETE (remove). Status codes: 200 Ok, 201 Created, 204 No Content, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 500 Server Error. Example: GET /users returns list, GET /users/5 returns user 5, POST /users creates new, PUT /users/5 updates user 5, DELETE /users/5 deletes. Request/Response format: typically JSON. Versioning: /api/v1/users or /api/users?v=1. Authentication: API keys, OAuth, JWT tokens. Rate limiting, pagination for large datasets. Documentation: swagger, OpenAPI. REST simplicity makes it popular for public APIs. GraphQL alternative for complex queries.",
    category: "interview",
    subcategory: "microsoft",
    company: "Microsoft",
    topic: "Web Development"
  },
  {
    question: "Multithreading in Java?",
    answer: "Multithreading allows concurrent execution of multiple parts of program. Thread is lightweight process sharing same memory space. Benefits: (1) RESPONSIVENESS - UI remains responsive while long operation runs, (2) SCALABILITY - use multi-core processors, (3) RESOURCE SHARING - threads share memory, lighter than processes. Create threads: (1) EXTEND Thread class: class MyThread extends Thread { public void run() { } }, instantiate and call start(). (2) IMPLEMENT Runnable: class MyTask implements Runnable { public void run() { } }, new Thread(new MyTask()).start(). Runnable preferred as Java doesn't support multiple inheritance. Thread lifecycle: NEW (created), RUNNABLE (start() called, eligible to run), RUNNING (executing), BLOCKED (waiting for resource), TERMINATED (finished). Synchronization: multiple threads accessing shared data causes race conditions. synchronized keyword locks object: synchronized void method() { } or synchronized(object) { }. Only one thread executes critical section at a time. volatile keyword ensures visibility of changes. Locks: java.util.concurrent.locks.Lock interface more flexible than synchronized. Atomic classes: AtomicInteger, AtomicBoolean, atomic operations without explicit locks. Common issues: (1) DEADLOCK - threads wait on each other indefinitely, avoid by acquiring locks in consistent order, (2) RACE CONDITION - unpredictable result if multiple threads access same data, (3) STARVATION - thread never gets chance to run. Thread pool (ExecutorService) manages thread creation/reuse. Understanding multithreading critical for robust concurrent applications.",
    category: "interview",
    subcategory: "microsoft",
    company: "Microsoft",
    topic: "Concurrency"
  },
  {
    question: "Collections Framework in Java?",
    answer: "Collections Framework provides interfaces and classes for storing/manipulating groups of objects. Hierarchy: COLLECTION (root interface) with List, Set, Queue. MAP is separate. LIST: ordered, duplicates allowed. Implementations: ArrayList (dynamic array, fast random access), LinkedList (double-linked, fast insertion/deletion at ends), Vector (synchronized, legacy), CopyOnWriteArrayList (thread-safe for read-heavy). SET: unique elements, order may vary. Implementations: HashSet (unordered, O(1) operations), TreeSet (sorted, O(log n)), LinkedHashSet (insertion order). QUEUE: FIFO. Implementations: LinkedList, PriorityQueue (min/max heap), Deque (double-ended). MAP: key-value pairs. Implementations: HashMap (unordered), TreeMap (sorted), LinkedHashMap (insertion order), Hashtable (synchronized, legacy), ConcurrentHashMap (thread-safe). Choosing: ArrayList for frequent random access, LinkedList for frequent insertions/deletions. HashSet for fast lookups, TreeSet for sorted. HashMap for general use, ConcurrentHashMap for multi-threaded. Performance: ArrayList get O(1), add O(1) avg; LinkedList get O(n), add O(1); HashMap get/put O(1) avg. Iteration: for-each loop, Iterator, Streams. Legacy: Vector, Hashtable replaced by modern classes. Generics: List<Integer> prevents ClassCastException. Collections utility class: sort(), shuffle(), binarySearch(), copy(). Unmutable: Collections.unmodifiableList(). Understanding Collections essential for Java programming.",
    category: "interview",
    subcategory: "microsoft",
    company: "Microsoft",
    topic: "Collections"
  },
  {
    question: "Design pattern: Singleton?",
    answer: "Singleton pattern ensures class has only one instance and provides global access point. Use cases: logging, database connections, configuration managers. Implementation: (1) EAGER INITIALIZATION: public class Singleton { static Singleton instance = new Singleton(); private Singleton() { } public static Singleton getInstance() { return instance; } }. Thread-safe but instance created at class load time, wastes if unused. (2) LAZY INITIALIZATION: create only when requested. (3) DOUBLE-CHECKED LOCKING: private static volatile Singleton instance; public static Singleton getInstance() { if(instance == null) { synchronized(Singleton.class) { if(instance == null) instance = new Singleton(); } } return instance; }. Reduces locking overhead. (4) BILL PUGH SINGLETON: uses static inner class holder: public class Singleton { static class Holder { static Singleton instance = new Singleton(); } public static Singleton getInstance() { return Holder.instance; } }. Clean, lazy, thread-safe. (5) ENUM: public enum Singleton { INSTANCE; }. Thread-safe, serialization-proof, prevents reflection attacks. Drawbacks: (1) hidden dependency, hard to test (dependency injection preferred), (2) global state complicates debugging, (3) multi-threading complexity. Better alternatives: dependency injection (Spring IoC), factory patterns. Overuse is antipattern. Testing: use mockito to mock dependencies. Modern trend: favor composition over singleton global state. Singleton useful for: logging, configuration, thread pools.",
    category: "interview",
    subcategory: "microsoft",
    company: "Microsoft",
    topic: "Design Patterns"
  },
  {
    question: "SQL Injection prevention?",
    answer: "SQL Injection is attack where malicious SQL code injected into input, executing unintended queries. Example: query = \"SELECT * FROM users WHERE username='\" + username + \"'\"; if username = \"' OR '1'='1\", query becomes SELECT * FROM users WHERE username='' OR '1'='1' returns all users. PREVENTION METHODS: (1) PREPARED STATEMENTS: PreparedStatement ps = conn.prepareStatement(\"SELECT * FROM users WHERE id = ?\"); ps.setInt(1, userId); separates SQL structure from data, prevents injection. (2) PARAMETERIZED QUERIES: parameters replaced after structure fixed, (3) INPUT VALIDATION: check input type, length, format, whitelist allowed values, (4) ESCAPE special characters: but error-prone, not recommended. (5) LEAST PRIVILEGE: database user minimum permissions needed, (6) ORM frameworks: Hibernate, JPA abstract SQL, reduces manual queries, (7) WEB APPLICATION FIREWALL: detect attack patterns. Parameterized/prepared statements recommended defense. ORM frameworks hide direct SQL. OWASP guidelines: sanitize input, validation on server-side, error messages reveal no info. Example attacks: comment injection (--), stacking queries (;), time-based blind injection. Testing: SAST (static) tools detect, penetration testing validates. SQL Injection common vulnerability (OWASP Top 10). Understanding prevention critical for secure development.",
    category: "interview",
    subcategory: "microsoft",
    company: "Microsoft",
    topic: "Security"
  }
];

module.exports = microsoftQuestions;