// Seed data for TCS/Infosys/Wipro Interview Questions with Comprehensive Answers

const tcsQuestions = [
  {
    question: "Abstraction vs Encapsulation?",
    answer: "Abstraction and Encapsulation are related OOP concepts but address different concerns. ABSTRACTION is hiding INTERNAL DETAILS/COMPLEXITY and showing only ESSENTIAL FEATURES to outside world. It asks 'what does it do?'. Example: Car abstraction shows accelerate(), brake() interfaces but hides engine mechanics, transmission details. You interact with car via simple interfaces without understanding internal combustion. Implementation: abstract classes, interfaces define what methods must exist. ENCAPSULATION is bundling DATA and CODE into single unit (class) and HIDING DATA through access modifiers, providing controlled access via getters/setters. It asks 'how is state protected?'. Example: BankAccount class has private balance field, public deposit/withdraw methods that validate operations. Direct access prevented: account.balance = -1000 not allowed. Difference: Abstraction hides 'what', Encapsulation hides 'how'. Abstraction reduces complexity, Encapsulation protects integrity. Together they provide clean interfaces and protected data. Example: Vehicle (abstract, defines start()) with implementations Car/Bike (encapsulation, hides engine details via private fields). Understanding distinction crucial for OOP design.",
    category: "interview",
    subcategory: "tcs",
    company: "TCS",
    topic: "OOP"
  },
  {
    question: "What is Agile Methodology?",
    answer: "Agile is iterative, incremental approach to software development emphasizing flexibility, customer collaboration, continuous delivery, and rapid feedback. Contrasts with Waterfall (sequential phases). Key principles: (1) INDIVIDUALS AND INTERACTIONS over processes, (2) WORKING SOFTWARE over documentation, (3) CUSTOMER COLLABORATION over negotiation, (4) RESPONDING TO CHANGE over following plan. Agile practices: (1) SPRINTS (1-4 week iterations), (2) DAILY STANDUPS (15 min sync), (3) SPRINT PLANNING, (4) RETROSPECTIVES (what went well/poorly), (5) PRODUCT BACKLOG (prioritized features), (6) USER STORIES (feature descriptions), (7) CONTINUOUS INTEGRATION/DEPLOYMENT. Popular frameworks: Scrum (defined roles, ceremonies), Kanban (flow-based, visualize work), XP (technical practices, pair programming). Benefits: early issue detection (short iterations), customer satisfaction (frequent deliveries), flexibility (adapt to changes), team morale (visible progress). Challenges: scaling to large teams, documented requirements (agile relies on communication), handling distributed teams (timezonesyncup). Roles: Product Owner (priorities), Scrum Master (process), Development Team (execution). Metrics: velocity (work completed per sprint), burn-down (remaining work). Agile now industry standard for most software companies.",
    category: "interview",
    subcategory: "tcs",
    company: "TCS",
    topic: "SDLC"
  },
  {
    question: "Primary vs Foreign Key?",
    answer: "PRIMARY KEY and FOREIGN KEY are database constraints ensuring data integrity. PRIMARY KEY uniquely identifies each row in table, must be unique and not null, only one per table (though can be composite of multiple columns). Examples: user_id, email (if unique). Enforces uniqueness and enables fast lookups via indexing. FOREIGN KEY is a column/columns in table that references PRIMARY KEY in another table, establishes relationship between tables. Example: orders table has user_id foreign key referencing users table's user_id primary key. Not null by default but can be. Purpose: ensures referential integrity - can't insert order for non-existent user. Cascade options: ON DELETE CASCADE (delete order if user deleted), ON UPDATE CASCADE (update user_id if changed), SET NULL (set to null if referenced row deleted). Example schema: CREATE TABLE users (user_id INT PRIMARY KEY). CREATE TABLE orders (order_id INT PRIMARY KEY, user_id INT FOREIGN KEY REFERENCES users(user_id)). Many-to-one relationship: many orders for one user. Without foreign keys, inconsistencies possible (orphaned orders). Constraints prevent invalid data. Query efficiency: foreign keys enable joins, indexed lookups.",
    category: "interview",
    subcategory: "tcs",
    company: "TCS",
    topic: "Database"
  },
  {
    question: "String vs StringBuilder vs StringBuffer?",
    answer: "All handle text but with different properties. STRING: immutable, once created cannot change. Every modification creates new object. Example: String s = 'hello'; s = s + ' world'; creates new String object for result, original 'hello' discarded. Advantages: thread-safe, simple. Disadvantages: inefficient for repeated modifications (concatenation in loop creates many objects). STRINGBUILDER: mutable, designed for efficiency. No synchronization, fastest. Modifications change internal buffer, don't create new objects. Example: StringBuilder sb = new StringBuilder('hello'); sb.append(' world'); modifies same object. Used for building strings in loops. STRINGBUFFER: mutable like StringBuilder, but THREAD-SAFE (synchronized methods). Slower due to locking. Use when shared among threads. Comparison: String + String in loop creates n objects (slow), StringBuilder does 1 (fast), StringBuffer thread-safe but slower. Performance test: concatenating 10000 strings, String takes seconds, StringBuilder takes milliseconds. Best practices: use String for constants, StringBuilder for building at runtime, StringBuffer rarely (modern: use StringBuilder with synchronization if needed). Interning: String.intern() returns canonical representation, useful for memory optimization.",
    category: "interview",
    subcategory: "tcs",
    company: "TCS",
    topic: "Java"
  },
  {
    question: "Normalization (1NF, 2NF, 3NF)?",
    answer: "Database Normalization removes redundancy and improves data integrity through structured decomposition. FIRST NORMAL FORM (1NF): eliminates repeating groups. Each column contains atomic (indivisible) values, no arrays/lists in single cell. Example: wrong: student(id, name, hobbies[cricket, chess]). Correct: separate hobbies table with student_id foreign key, one hobby per row. SECOND NORMAL FORM (2NF): must be 1NF AND remove partial dependencies. Every non-key column depends on entire primary key, not part of it. Example: wrong: StudentCourse(student_id, course_id, instructor_name); instructor_name depends on course_id only, not student_id. Correct: split into Student, Course, Enrollment tables. THIRD NORMAL FORM (3NF): must be 2NF AND remove transitive dependencies. Non-key columns depend only on primary key, not on other non-key columns. Example: wrong: Employee(emp_id, emp_name, dept_id, dept_name); dept_name depends on dept_id, not emp_id. Correct: separate Department table. Higher forms: BCNF, 4NF, 5NF (decreasing returns, rarely used). Goal: minimize redundancy (update one location, save space), maintain referential integrity (foreign keys). Denormalization: sometimes intentionally break rules for performance (trade consistency for speed). Normalization fundamental to database design.",
    category: "interview",
    subcategory: "tcs",
    company: "TCS",
    topic: "Database"
  },
  {
    question: "OSI Model layers?",
    answer: "The 7-layer OSI (Open Systems Interconnection) model describes how network communication works. Layer 7 (APPLICATION): user applications, services, protocols like HTTP, FTP, SMTP, DNS. Data unit: message. Layer 6 (PRESENTATION): encryption, compression, character encoding. Translates data to application format. Data unit: message. Layer 5 (SESSION): establishes, maintains, terminates connections. Handles dialogue control, synchronization. Example: login session. Data unit: message. Layer 4 (TRANSPORT): end-to-end communication, protocols TCP (reliable) and UDP (fast, unreliable), error detection, flow control. Delivers data to right application (ports). Data unit: segment. Layer 3 (NETWORK): routing, logical addressing (IP addresses), packet forwarding across networks. Protocols: IP, ICMP. Data unit: packet. Layer 2 (DATA LINK): physical addressing (MAC addresses), framing, error checking at link level. Switches operate here. Protocols: Ethernet, PPP. Data unit: frame. Layer 1 (PHYSICAL): actual electrical/optical transmission, cables, voltages, bits (0s and 1s). Hubs, repeaters. Data unit: bit. Memory aid: 'Please Do Not Throw Sausage Pizza Away'. Top-down: application to physical (encapsulation). Bottom-up: physical to application (decapsulation). Each layer adds header (encapsulation). Understanding OSI helps troubleshoot network issues - know which layer problem exists.",
    category: "interview",
    subcategory: "tcs",
    company: "TCS",
    topic: "Networking"
  },
  {
    question: "Inheritance example?",
    answer: "Inheritance allows a class (child/subclass) to inherit properties and methods from another class (parent/superclass). Child extends parent using 'extends' keyword in Java. Example: Vehicle class (parent) defines start(), stop() methods and properties like engine, wheels. Car class (child) extends Vehicle, inherits these methods, can add specific methods like openTrunk(), adjustSeat(). Bike class also extends Vehicle, adds methods like wheelie(). Both Car and Bike reuse Vehicle's code. Benefits: (1) CODE REUSABILITY - avoid duplicating start/stop in each class, (2) EXTENSIBILITY - easy to add new vehicle types, (3) POLYMORPHISM - treat Car/Bike as Vehicle objects, call start() method works for both, (4) MAINTAINABILITY - bug fix in Vehicle benefits all subclasses. IS-A relationship: Car IS-A Vehicle. Hierarchy: Vehicle (grandparent) -> Car (parent) -> SportsCar (child) (multilevel inheritance). Multiple inheritance (multiple parents): not directly supported in Java (causes diamond problem) but via interfaces. Method overriding: child can override parent methods (same signature, different implementation). super keyword calls parent method. Constructor: child constructor should call parent constructor via super(). Understanding inheritance crucial for OOP.",
    category: "interview",
    subcategory: "tcs",
    company: "TCS",
    topic: "OOP"
  },
  {
    question: "List vs Set?",
    answer: "Both are collection interfaces, different purposes. LIST: ORDERED collection allowing DUPLICATES. Maintains insertion sequence. Implementations: ArrayList (fast random access), LinkedList (fast insertion/deletion), Vector (legacy). Access: get(index), add(index, element). Iteration: index-based for-loop works well. Example: List<Integer> list = new ArrayList<>(); list.add(5); list.add(3); list.add(5); // duplicate allowed, preserve order: [5,3,5]. SET: UNORDERED (usually) collection of UNIQUE elements. Prevents duplicates. Implementations: HashSet (unordered), TreeSet (sorted), LinkedHashSet (insertion order). No indexing. Check existence: contains(element) O(1) for HashSet. Example: Set<Integer> set = new HashSet<>(); set.add(5); set.add(3); set.add(5); // duplicate ignored, result: {5,3} or {3,5}. Comparison: use List for sequences (order matters), use Set for uniqueness. Performance: HashSet add/remove O(1), HashSet.contains() O(1). ArrayList add O(1)/O(n), get O(1). Choose based on need: frequent random access -> ArrayList, frequent add/remove -> LinkedList, uniqueness -> HashSet, sorted unique -> TreeSet.",
    category: "interview",
    subcategory: "tcs",
    company: "TCS",
    topic: "Collections"
  },
  {
    question: "What is an Interface?",
    answer: "An Interface is a contract defining methods that a class MUST implement. Contains method signatures (before Java 8) and constants. Cannot be instantiated - must be implemented by concrete class using 'implements' keyword. Example: interface PaymentMode { void process(double amount); }. Class CreditCard implements PaymentMode { public void process(double amount) { // implementation } }. Key features: (1) ABSTRACT METHODS - no body (before Java 8), (2) CONSTANTS - all fields are public static final, (3) MULTIPLE INHERITANCE - class can implement multiple interfaces (interface A, interface B), solving multiple inheritance problem. Evolution: Java 8 added DEFAULT METHODS with implementation, Java 9 added PRIVATE METHODS for code reuse in interfaces. Example interface with defaults: interface Movable { void move(); default void display() { System.out.println('Moving'); } }. Implementing class can use default or override. Benefits: (1) LOOSE COUPLING - depend on interface contract, not implementation, (2) POLYMORPHISM - different classes implementing same interface used interchangeably, (3) FLEXIBILITY - swap implementations without changing code. Difference from abstract class: interface = what, abstract class = what + how. Interfaces define behavior contract, abstract classes partially implement. Modern design: prefer interfaces for contracts, composition over inheritance.",
    category: "interview",
    subcategory: "tcs",
    company: "TCS",
    topic: "OOP"
  },
  {
    question: "Exception Handling?",
    answer: "Exception Handling gracefully manages errors rather than crashing. TRY-CATCH-FINALLY: try block contains risky code, catch block handles exceptions, finally runs always (cleanup). Syntax: try { int x = 10/0; } catch(ArithmeticException e) { System.out.println('Error'); } finally { cleanup(); }. Finally executes whether exception thrown or not - useful for closing resources. THROW keyword manually throws exceptions: if(age < 0) throw new IllegalArgumentException('Age invalid'). Checked vs Unchecked: CHECKED exceptions (IOException, SQLException) must be caught or declared in throws clause - compiler enforces. UNCHECKED exceptions (RuntimeException subclasses like NullPointerException, ArrayIndexOutOfBoundsException) optional to catch - programmer responsibility. Multiple catch blocks: different exception types, specific first: catch(FileNotFoundException e) before catch(IOException e). FINALLY semantics: executes even if catch returns or throws. Prevents resource leaks. Modern: TRY-WITH-RESOURCES (Java 7+): try(FileReader fr = new FileReader('file.txt')) { } automatically closes resource (implements AutoCloseable). Stack trace: exception shows method call sequence leading to error, aids debugging. Best practices: catch specific exceptions, avoid swallowing silently (log/rethrow), use finally for cleanup, custom exceptions for domain-specific errors.",
    category: "interview",
    subcategory: "tcs",
    company: "TCS",
    topic: "Java"
  },
  {
    question: "Method Overloading?",
    answer: "Method Overloading allows multiple methods same name but different PARAMETERS (compile-time polymorphism). Different parameters means: different number, type, or order. Resolved at compile time based on argument types. Example: class Calculator { int add(int a, int b) { return a+b; } double add(double a, double b) { return a+b; } int add(int a, int b, int c) { return a+b+c; } }. Calling add(3, 5) calls first, add(3.5, 5.5) calls second, add(1,2,3) calls third. Compiler determines based on argument types. Rules: (1) Different parameter count, (2) Different parameter types, (3) Different order (int, String vs String, int are different). Cannot overload by return type only - add() and add returns different (not allowed). Benefits: intuitive API (same operation, same name), no need for addInt, addDouble, addString. Type coercion: if exact match not found, widens type (int to double). Example: add(3, 5.0) matches add(double, double), not add(int, int). Difference from OVERRIDING: overloading same method multiple times, overriding replaces parent method. Overloading static binding (compile time), overriding dynamic binding (runtime).",
    category: "interview",
    subcategory: "tcs",
    company: "TCS",
    topic: "OOP"
  },
  {
    question: "Polymorphism in Java?",
    answer: "Polymorphism 'many forms' - ability of methods to behave differently based on context. TWO TYPES: (1) COMPILE-TIME (Static binding, Method Overloading) - same method name, different parameters, resolved at compile time. Example: add(int,int), add(double,double). (2) RUNTIME (Dynamic binding, Method Overriding) - same method name, overridden in subclasses, resolved at runtime based on object type. Example: Animal.sound() implemented differently in Dog.sound() 'Woof' and Cat.sound() 'Meow'. Animal animal = new Dog(); animal.sound() calls Dog's implementation. These are different actual objects referenced by Animal. Polymorphism enables writing generic code: void makeSound(List<Animal> animals) { for(Animal a : animals) a.sound(); } handles Dog, Cat, any Animal subclass. Polymorphism combined with abstraction/interfaces: interface Shape { double area(); } implemented by Circle, Rectangle differently. Code uses Shape references, actual behavior determined at runtime. Benefits: (1) extensible design, (2) reusable code, (3) flexibility. Understanding static vs dynamic binding: new Plane().fly() at compile time knows fly() exists, at runtime calls Plane's implementation. Polymorphism central to OOP - when interviewers ask about real power of OOP, often answer is polymorphism.",
    category: "interview",
    subcategory: "tcs",
    company: "TCS",
    topic: "OOP"
  },
  {
    question: "Serialization in Java?",
    answer: "Serialization converts Java object to byte stream for storage or transmission. Deserialization reconstructs object from bytes. Use case: saving state to file, sending over network, caching. Implement Serializable interface (marker interface, no methods): class Student implements Serializable { int id; String name; }. Use ObjectOutputStream to serialize: ObjectOutputStream oos = new ObjectOutputStream(fileOutput); oos.writeObject(student);. Use ObjectInputStream to deserialize: ObjectInputStream ois = new ObjectInputStream(fileInput); Student s = (Student) ois.readObject();. serialVersionUID: class version identifier, ensures deserialized object compatible with current class code. Should be static final long, usually generated. If UID mismatch, InvalidClassException thrown. Transient keyword: marks field not serialized. private transient String password; won't serialize password. Custom serialization: implement readObject(), writeObject() for special handling (encryption, validation). Example: skip sensitive fields, compress data. Issues: (1) Security - untrusted data can execute code, validate deserialize, (2) versioning - class changes break old serialized data, (3) performance - serialization overhead. Alternatives: JSON (human-readable, language-independent), Protocol Buffers (compact, typed). Serialization important for Java persistence, caching, RMI (Remote Method Invocation).",
    category: "interview",
    subcategory: "tcs",
    company: "TCS",
    topic: "Java"
  },
  {
    question: "Static variables and methods?",
    answer: "STATIC members belong to CLASS, not individual objects. Shared across all instances. STATIC VARIABLES (class variables): example static int count = 0; all objects share same count. Modification affects all objects. Memory: allocated once during class loading, not per object. Usage: shared state, constants. Example: class Student { static int totalStudents = 0; Student() { totalStudents++; } }. Five Student objects share same totalStudents. STATIC METHODS: don't have access to 'this' (no specific object context). Can access only static variables/methods. Example: static int getTotal() { return totalStudents; }. Called via class: Student.getTotal(). Cannot access instance variables: Student.count (and count is not static) causes error. Accessing instance method from static: requires object reference. Static context (static main) cannot access non-static without object. STATIC CONSTANTS: final static variables, convention UPPER_CASE. Example: static final double PI = 3.14159;. STATIC BLOCK: runs once when class loads: static { System.out.println('Class loaded'); }. Use case: initialize static variables. Benefits: memory efficient (shared), access without objects (utility methods), constants. Pitfall: overuse creates global state, harder to test, harder to parallelize. Static methods often utilities (Math.sqrt(), Collections.sort()). Understanding static crucial for Java.",
    category: "interview",
    subcategory: "tcs",
    company: "TCS",
    topic: "Java"
  },
  {
    question: "Final keyword in Java?",
    answer: "FINAL keyword in Java has different meanings based on context: (1) FINAL CLASS: cannot be extended. Example final class Immutable { }. Prevents subclassing, common for security (String, Integer are final). (2) FINAL METHOD: cannot be overridden. Example final void display() { }. Ensures implementation consistency in subclasses. (3) FINAL VARIABLE: cannot be reassigned after initialization. Example final int MAX = 100; MAX = 200 causes error. Must initialize in declaration or constructor (for instance final), static initialization (for class final). Benefits: clarity, prevents misuse, optimization (compiler knows won't change). IMMUTABILITY: combine all fields final, prevents modification. Example: final class Point { final int x; final int y; }. Thread-safe (no synchronization needed for immutable objects). Performance: final allows inlining optimization. Difference from const (not keyword in Java): final is runtime concept, similar intent though. Usages: (1) constants - final static int MAX, (2) preventing overrides - security, consistency, (3) immutable objects - thread safety, (4) optimization. Modern practice: mark methods final if definitely shouldn't override, mark classes final if not designed for inheritance. Over-using final complicates design (testing mocks need non-final). Balance needed.",
    category: "interview",
    subcategory: "tcs",
    company: "TCS",
    topic: "Java"
  },
  {
    question: "Pass by Value vs Pass by Reference?",
    answer: "Java is PASS BY VALUE - method parameters receive COPY of values. PRIMITIVES: int, double, boolean passed as copies. Changes inside method don't affect original. Example: void increment(int x) { x++; } int a=5; increment(a); a still 5 (parameter was copy). OBJECTS: reference (memory address) is passed as copy. The reference itself is copied, but both point to same object. Modifications to object affect original: void addElement(List<Integer> list) { list.add(5); } List l = new ArrayList<>(); addElement(l); l now contains 5. BUT, reassigning parameter doesn't affect original: void reassign(List<Integer> list) { list = new ArrayList<>(); } original list unchanged (parameter's local reference changed, not original). Common confusion: 'objects are passed by reference' is misleading. More accurate: references themselves are passed by value. Example distinguishes: void modify(Student s) { s.name = 'John'; // affects s.school = new School(); // doesn't affect original s }. First line modifies object, affects original. Second reassigns local reference, doesn't affect original reference. Understanding pass-by-value prevents bugs. When seeking reference behavior: return object from method or use wrapper object.",
    category: "interview",
    subcategory: "tcs",
    company: "TCS",
    topic: "Java"
  }
];

module.exports = tcsQuestions;