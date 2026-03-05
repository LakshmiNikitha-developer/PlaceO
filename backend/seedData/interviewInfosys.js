// Seed data for Infosys Interview Questions with Comprehensive Answers

const infosysQuestions = [
  {
    question: "What is SOLID Principles?",
    answer: "SOLID is an acronym for five design principles making software more maintainable, extensible, and testable. S - SINGLE RESPONSIBILITY PRINCIPLE: class should have one reason to change, one responsibility. A User class manages users, not payments. R - OPEN/CLOSED PRINCIPLE: open for extension, closed for modification. Use inheritance/interfaces to extend functionality without changing existing code. L - LISKOV SUBSTITUTION PRINCIPLE: subclass objects should be substitutable for superclass objects. If Square extends Rectangle, setting width/height should work for both. I - INTERFACE SEGREGATION PRINCIPLE: many client-specific interfaces better than one general-purpose interface. Worker interface with work() better than giant interface with work(), eat(), sleep(). D - DEPENDENCY INVERSION PRINCIPLE: depend on abstractions, not concretions. Class should depend on interfaces, not concrete implementations, enables loose coupling. Violating SOLID: tight coupling, hard to extend, difficult testing. Benefits: cleaner architecture, easier maintenance, reduced complexity. Example: payment system with PaymentProcessor interface (abstraction), CreditCardProcessor implements it (concrete). Code depends on interface, not implementation, allows swapping processors easily. SOLID principles are foundation of good OOP design, critical for enterprise software.",
    category: "interview",
    subcategory: "infosys",
    company: "Infosys",
    topic: "Design Principles"
  },
  {
    question: "Explain Database Indexing?",
    answer: "Database Indexing creates auxiliary data structure enabling fast data retrieval without scanning entire table. INDEX is like book index - instead of reading every page to find topic, jump directly. TYPES: (1) PRIMARY INDEX - automatically created on primary key, enforces uniqueness, (2) UNIQUE INDEX - ensures values unique, allows null, (3) COMPOSITE INDEX - index on multiple columns, (4) FULL-TEXT INDEX - fast text searching, (5) SPATIAL INDEX - geographic queries. How it works: B-tree structure (most common) organizes indexed column values, maintains pointers to actual rows. Search becomes logarithmic instead of linear. Example: SELECT * FROM users WHERE email='john@example.com' without index scans all rows, with index jumps directly. Cost: storage (extra space), slower INSERT/UPDATE/DELETE (must update index). Benefits: faster SELECT queries, especially with WHERE clauses, JOIN operations, ORDER BY. Choosing indexes: analyze query patterns, index frequently searched columns, avoid indexing seldom-used columns. Index selection important - wrong indexes waste space without benefit. Query optimizer decides using indexes. Database statistics help optimizer choose best index. Monitoring: EXPLAIN PLAN shows if index used. Rebuilding indexes maintains performance. Understanding indexing crucial for database optimization.",
    category: "interview",
    subcategory: "infosys",
    company: "Infosys",
    topic: "Database"
  },
  {
    question: "Explain MVC Architecture?",
    answer: "MVC (Model-View-Controller) separates application into three interconnected components. MODEL: represents data and business logic, independent of presentation, contains data structures, validation, calculations. Example: User model with properties (name, email), methods (authenticate(), validate()). Doesn't know about UI. VIEW: presentation layer, displays data to user, typically HTML/CSS/JSX for web. Receives data from model, renders visually. No business logic. Receives user input, passes to controller. CONTROLLER: handles user interactions, processes input, updates model, selects view. Acts as intermediary. Example: UserController receives form submission, calls UserModel to save, returns success view. Flow: User interacts with VIEW -> VIEW sends request to CONTROLLER -> CONTROLLER updates MODEL -> MODEL notifies VIEW of changes -> VIEW renders updated data. Benefits: (1) SEPARATION OF CONCERNS - each component has single responsibility, (2) TESTABILITY - model easily testable without UI, (3) REUSABILITY - same model for web/mobile, (4) MAINTAINABILITY - changes in one concern don't affect others. Example: web application, mobile app, API can share same model. Variants: MVP (Model-View-Presenter), MVVM (Model-View-ViewModel), CLEAN architecture. MVC is industry standard for application design.",
    category: "interview",
    subcategory: "infosys",
    company: "Infosys",
    topic: "Architecture"
  },
  {
    question: "What is Coupling and Cohesion?",
    answer: "COUPLING measures degree of interdependence between software modules/classes - how much one depends on another. TIGHT COUPLING: modules highly dependent, changes in one require changes in many others. Class A directly calls Class B methods, creates instances of B. Difficult to test, maintain, modify. LOOSE COUPLING: modules minimally dependent, changes in one don't affect others. Classes depend on interfaces, not concrete implementations. Easy to test (mock interfaces), maintain, modify. COHESION measures how closely related and focused elements within a module are. HIGH COHESION: module has single, well-defined responsibility, elements work together for same purpose. LOW COHESION: module contains unrelated elements, scattered responsibility. Example of low cohesion: UserManager class handling user registration, payment processing, email sending (three unrelated concerns). Example of high cohesion: User class containing user properties and methods (user-related only). Goal: HIGH COHESION + LOOSE COUPLING. How to achieve: (1) Define focused classes with single responsibility, (2) Use interfaces for abstraction, (3) Dependency injection (inject dependencies, don't create inside), (4) Avoid circular dependencies, (5) Minimize class interactions. Benefits: easier testing, reusability, maintainability, flexibility. Good design separates concerns (cohesion within modules, coupling between loose), poor design mixes concerns (tight coupling, low cohesion).",
    category: "interview",
    subcategory: "infosys",
    company: "Infosys",
    topic: "Design Principles"
  },
  {
    question: "Explain REST API Statelessness?",
    answer: "REST APIs are STATELESS - server doesn't store client context between requests. Each request contains all information needed for server to process it. Server doesn't remember previous interactions. Implication: server can't rely on session state. Every request must be independent, complete. Example of STATEFUL (wrong for REST): Client logs in (session created on server). Next client request assumes logged-in state. Server needs session storage. Scalability problem. Example of STATELESS (REST): Client logs in, server returns authentication token (JWT). Client includes token in every request. Server validates token each time, doesn't store session. Token contains all needed info. Benefits: (1) SCALABILITY - no server-side session storage, any server handles any request, (2) LOAD BALANCING - request can go to any server in cluster, (3) CACHING - responses cacheable (no user-specific state), (4) SIMPLICITY - each request independent. Implementation: (1) Use tokens (JWT, OAuth) instead of sessions, (2) Include authentication info in each request (Authorization header), (3) Use HTTP methods correctly (GET retrieves, POST creates, PUT updates), (4) Version APIs, (5) Proper status codes. Trade-off: client responsibility increased (manage tokens), slightly larger request size. Testing: stateless APIs easier to test (no setup/cleanup of server state). Modern REST APIs follow statelessness principle for web-scale systems.",
    category: "interview",
    subcategory: "infosys",
    company: "Infosys",
    topic: "API Design"
  },
  {
    question: "What is Object-Oriented Programming benefits?",
    answer: "Object-Oriented Programming provides numerous benefits making software more maintainable, scalable, and intuitive. (1) MODULARITY: objects encapsulate data and methods, self-contained units, easier to understand and manage. Code organized around objects mirroring real-world concepts. (2) REUSABILITY: classes reused in different parts of application or different projects, inheritance enables code sharing. Libraries of reusable classes. (3) MAINTAINABILITY: clear structure, changes isolated to specific classes, bugs easier to locate. Updates in one place propagate. (4) EXTENSIBILITY: inheritance allows new classes extending existing ones, new functionality without modifying existing code. (5) ABSTRACTION: hide complexity, expose simple interfaces, users don't need to understand internals. (6) POLYMORPHISM: different objects responding to same method call differently, flexible, elegant code. (7) TEAM DEVELOPMENT: clear interfaces between classes, multiple developers work on different classes independently. (8) TESTING: classes testable in isolation (unit testing), mock objects for dependencies. (9) SCALABILITY: OOP design scales well with application growth. Issues if misused: over-engineering, unnecessary complexity, tight coupling. Best practice: correct application of OOP principles (SOLID, DRY) not just using OOP language. OOP dominates industry because benefits well-proven, enables large-scale systems.",
    category: "interview",
    subcategory: "infosys",
    company: "Infosys",
    topic: "OOP"
  },
  {
    question: "Explain Generics in Java?",
    answer: "Generics enable type-safe collections and methods, allowing specification of type constraints at compile time. Without generics: List list = new ArrayList(); list.add('hello'); list.add(5); String s = (String) list.get(0); // must cast, runtime error possible. With generics: List<String> list = new ArrayList<>(); list.add('hello'); // OK list.add(5); // compile error, prevents invalid type. String s = list.get(0); // no cast needed. SYNTAX: class GenericClass<T> { T value; void set(T val) { value = val; } T get() { return value; } }. T is type parameter, replaced at runtime with actual type. Benefits: (1) TYPE SAFETY - compile catches errors, (2) NO CASTING - compiler knows types, (3) CLEANER CODE - less casting clutter, (4) PERFORMANCE - no runtime type checking. Bounded types: <T extends Number> restricts T to Number and subclasses. Wildcards: List<?> unknown type, List<? extends Number> upper bound, List<? super Integer> lower bound. Example: static <T extends Comparable<T>> T max(List<T> list) { } generic method finding maximum comparable. Raw types (List without <>): not type-safe, should avoid. Erasure: generics erased at runtime (List<String> becomes List), enables backward compatibility. Generics fundamental for clean, safe Java code, essential for collections framework.",
    category: "interview",
    subcategory: "infosys",
    company: "Infosys",
    topic: "Java"
  },
  {
    question: "What is Immutability in Java?",
    answer: "Immutability means object state cannot change after creation. Once created, object remains same. Immutable classes: String (Java), Integer, LocalDate, BigDecimal. Benefits: (1) THREAD-SAFE - no synchronization needed, multiple threads safely access, no race conditions, (2) CACHING - safe to cache without invalidation concerns, (3) SECURITY - no manipulation of internal state, (4) PREDICTABLE - state never changes, reasoning about code easier, (5) HASHABLE - safe as HashMap/Set keys (hash doesn't change). How to make class immutable: (1) Make class final (prevent inheritance), (2) Make all fields private and final, (3) Initialize fields in constructor only, (4) Provide no setters, (5) If fields are mutable objects (arrays, lists), return defensive copies in getters. Example: public final class Person { private final String name; private final int age; public Person(String name, int age) { this.name = name; this.age = age; } public String getName() { return name; } }. Downsides: less flexible, creation of new objects for modifications. Example: String s1 = 'hello'; String s2 = s1.concat(' world'); creates new String, original unchanged. For mutable alternative, use StringBuilder. Collections.unmodifiableList() creates immutable view of collection. Immutability important for concurrent programming, security, simplicity. Understanding immutability crucial for Java programming.",
    category: "interview",
    subcategory: "infosys",
    company: "Infosys",
    topic: "Java"
  },
  {
    question: "Explain Design Pattern: Factory?",
    answer: "Factory Pattern creates objects without specifying exact classes. Encapsulates object creation logic. SIMPLE FACTORY: static method returns appropriate object based on parameter. class ShapeFactory { static Shape createShape(String type) { if(type.equals('circle')) return new Circle(); if(type.equals('rectangle')) return new Rectangle(); } }. Usage: Shape shape = ShapeFactory.createShape('circle');. Benefits: centralized creation logic, if creation logic changes, update only factory. FACTORY METHOD PATTERN: abstract method in parent class, subclasses override to create specific objects. abstract class Creator { abstract Product createProduct(); void use() { Product p = createProduct(); p.use(); } }. Concrete classes create their own products. Enables subclasses to choose product type. ABSTRACT FACTORY: creates families of related objects. DatabaseFactory interface with methods createConnection(), createSchema(). MySQLFactory, OracleFactory implement, each creating MySQL/Oracle objects. Benefits: (1) LOOSE COUPLING - code depends on factory interface, not concrete classes, (2) FLEXIBILITY - easy add new product types, (3) CENTRALIZATION - object creation in one place, (4) CONSISTENCY - factory ensures objects created correctly, follow rules. Real-world: JDBC DriverManager gets database connections (factory), application doesn't know if MySQL or Oracle. Factory Pattern common in libraries, frameworks, essential for extensibility.",
    category: "interview",
    subcategory: "infosys",
    company: "Infosys",
    topic: "Design Patterns"
  },
  {
    question: "What is Version Control System (Git)?",
    answer: "Git is distributed version control system tracking code changes, enabling collaboration. REPOSITORY: directory containing project files and version history. LOCAL REPOSITORY on machine, REMOTE REPOSITORY on server (GitHub, GitLab). KEY CONCEPTS: COMMIT: snapshot of code at point in time with message describing changes. BRANCH: independent line of development, allows parallel work. MERGE: combine branches together. PUSH: upload commits to remote. PULL: download commits from remote. CONFLICT: when merges find contradictory changes. Workflow: (1) Clone remote repo, (2) Create branch for feature, (3) Make changes and commit, (4) Push to remote, (5) Create pull request, (6) Code review, (7) Merge to main. Benefits: (1) HISTORY - see all changes, who made them, when, (2) COLLABORATION - multiple developers work simultaneously, (3) REVERSION - revert to previous versions if needed, (4) BRANCHING - parallel development, (5) BACKUP - distributed copies, (6) TRACKING - understand code evolution. Commands: git init (create repo), git add (stage changes), git commit (record changes), git branch (create branch), git checkout (switch branch), git merge (combine branches), git push (upload), git pull (download). Branching strategies: Git Flow (main, develop, feature branches), GitHub Flow (main, feature branches). Understanding Git essential for professional development.",
    category: "interview",
    subcategory: "infosys",
    company: "Infosys",
    topic: "Tools"
  },
  {
    question: "Explain API Authentication Methods?",
    answer: "API Authentication verifies user identity before granting access. Methods: (1) API KEY: simple string token, passed in header or query parameter. Example: Authorization: ApiKey abc123. Easy to implement, less secure, suitable for public/semi-public APIs, not suitable for sensitive operations. (2) BASIC AUTH: username:password in Base64 encoding in Authorization header. Example: Authorization: Basic dXNlcjpwYXNz. Simple, requires HTTPS (plaintext otherwise), no logout concept. (3) BEARER TOKEN (JWT): JSON Web Token in Authorization header. Contains encoded user info, signature for verification. Example: Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiam9obiJ9.signature. Stateless (no server-side session), expiration, refresh tokens. Industry standard. (4) OAUTH 2.0: delegated authorization, user authorizes third-party app without sharing password. Google/Facebook login is OAuth. Complex but secure, industry standard for third-party integration. (5) DIGEST AUTH: username/password with challenge-response, more secure than basic. (6) MUTUAL TLS: certificate-based, both client and server verify each other. Most secure, complex setup. Choosing: API KEY for internal/public simple APIs, JWT for stateless services, OAuth for third-party, TLS for high security. Best practices: (1) Always use HTTPS, (2) Expire tokens, (3) Refresh tokens for renewed access, (4) Rate limiting to prevent abuse, (5) CORS carefully configure, (6) Log authentication failures. Understanding authentication crucial for secure APIs.",
    category: "interview",
    subcategory: "infosys",
    company: "Infosys",
    topic: "Security"
  }
];

module.exports = infosysQuestions;