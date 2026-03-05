// Seed data for Zoho Interview Questions with Comprehensive Answers

const zohoQuestions = [
  {
    question: "Find the second largest element in an array in O(n)?",
    answer: "Initialize two variables max1 and max2 to negative infinity to track the largest and second largest elements. Traverse the array once: if the current element is greater than max1, shift max1 to max2 and update max1 to the current element. Otherwise, if it's greater than max2 and not equal to max1, update max2. This approach requires only one pass through the array with O(1) space complexity, making it the most efficient solution. Time complexity is O(n) as we traverse the entire array exactly once.",
    category: "interview",
    subcategory: "zoho",
    company: "Zoho",
    topic: "Arrays"
  },
  {
    question: "Reverse a string without a temporary variable?",
    answer: "The XOR swap algorithm leverages the properties of XOR (exclusive OR) operation. XOR has the property that a ^ a = 0, a ^ 0 = a, and XOR is commutative. To reverse a string, convert it to a character array, then use two pointers at the start and end. Swap characters using: a = a ^ b; b = a ^ b; a = a ^ b;. This works because XOR effectively stores information about both values combined. When applied in reverse, it extracts the original values. This technique is memory-efficient and eliminates the need for a temporary variable, though it's primarily a technique of academic interest today.",
    category: "interview",
    subcategory: "zoho",
    company: "Zoho",
    topic: "Strings"
  },
  {
    question: "Difference between == and is in Python?",
    answer: "In Python, == and is serve different purposes. The == operator compares VALUES (content equality) - it asks 'do these objects have the same value?'. The is operator compares MEMORY ADDRESSES (identity) - it asks 'are these the same object in memory?'. For example, a = [1, 2, 3] and b = [1, 2, 3] will return a == b as True because the values are identical, but a is b returns False because they reference different list objects. Another important case is with small integers: Python caches integers from -5 to 256, so a = 5; b = 5; then a is b returns True because they point to the cached object. However, a = 257; b = 257; would typically return False because new objects are created (though CPython implementation details may vary).",
    category: "interview",
    subcategory: "zoho",
    company: "Zoho",
    topic: "Python"
  },
  {
    question: "How to print a Diamond Pattern?",
    answer: "A diamond pattern requires two distinct loops: one for the upper half (including the middle) and one for the lower half. In the upper half, for each row i from 1 to n, print (n-i) spaces followed by (2*i-1) stars. This creates an expanding triangle. In the lower half, for each row j from (n-1) down to 1, print (n-j) spaces followed by (2*j-1) stars. This creates a contracting triangle to mirror the top half. The key insight is that the middle row has the maximum number of stars (2*n-1), and symmetric rows on both sides have the same pattern of spaces and stars. This pattern is commonly asked to test loop control and output formatting skills.",
    category: "interview",
    subcategory: "zoho",
    company: "Zoho",
    topic: "Patterns"
  },
  {
    question: "What is a Dangling Pointer?",
    answer: "A dangling pointer is a pointer variable that still holds a memory address after the memory location it pointed to has been deallocated or freed. This creates undefined behavior when accessed. Common causes include: (1) using memory after free/delete - allocating memory with malloc/new, freeing it, then still using the pointer; (2) returning a pointer to a local variable from a function - the stack memory becomes invalid once the function returns; (3) deleting an object but leaving pointers still referencing it. Accessing a dangling pointer can cause the program to read/write garbage data, leading to crashes or security vulnerabilities. Prevention includes: setting pointers to NULL after freeing, using smart pointers in modern C++, and careful scope management. This is one of the most dangerous issues in C/C++ programming.",
    category: "interview",
    subcategory: "zoho",
    company: "Zoho",
    topic: "Pointers"
  },
  {
    question: "Implement a Stack using two Queues?",
    answer: "This can be done in two ways: (1) Making push operation costly - when pushing a new element, enqueue it into Q2, then dequeue all elements from Q1 and enqueue them into Q2. Finally, swap the roles of Q1 and Q2. This gives O(n) push and O(1) pop. (2) Making pop operation costly - simply enqueue new elements into Q1. For popping, dequeue n-1 elements from Q1 into Q2, remove one element, then swap Q1 and Q2. This gives O(1) push and O(n) pop. The key insight is that queues have FIFO behavior while stacks need LIFO, so we must reverse the order somehow using two queues. The second approach is generally preferred in practice because push operations are typically more frequent than pop operations.",
    category: "interview",
    subcategory: "zoho",
    company: "Zoho",
    topic: "Data Structures"
  },
  {
    question: "Check Palindrome without string conversion?",
    answer: "To check if a number is a palindrome, extract digits from the end using modulo operation and build a reversed number. Initialize rev = 0. While num > 0: rev = (rev * 10) + (num % 10); num = num / 10. Compare rev with the original number - if they're equal, it's a palindrome. For example, checking 121: extract 1 (rev=1), then 2 (rev=12), then 1 (rev=121). Since 121 == 121, it's a palindrome. This works for positive integers. For negative numbers, they're typically considered non-palindromes since the sign matters. An optimization: instead of reversing the entire number, reverse only half to handle integer overflow for large numbers. This approach avoids string conversion and is more efficient.",
    category: "interview",
    subcategory: "zoho",
    company: "Zoho",
    topic: "Numbers"
  },
  {
    question: "Difference between struct and union?",
    answer: "Both struct and union are composite data types, but they differ fundamentally in memory allocation. A STRUCT allocates SEPARATE memory for every member - the total size is the sum of all member sizes. Each member has its own memory location and can be accessed independently. A UNION, however, allocates ONE SHARED memory block that is large enough to accommodate the LARGEST member. All members share the same memory space, so storing a value in one member overwrites the others. When one member is modified, the others reflect this change. Example: struct Point { int x; int y; } takes 8 bytes (4+4), but union Data { int a; char b; } takes 4 bytes (size of int, the largest). Unions are useful when you need to interpret the same memory in different ways or when memory is extremely limited. They're commonly used in embedded systems and low-level programming.",
    category: "interview",
    subcategory: "zoho",
    company: "Zoho",
    topic: "C/C++"
  },
  {
    question: "Real-world example of Method Overriding?",
    answer: "Consider a banking example: a base class Bank defines a method getInterestRate() that returns a default interest rate of 3%. However, different banks have different rates. City Bank (subclass) overrides this method to return 4%, while Axis Bank returns 5%, and ICICI returns 6%. In your code, you can use Bank reference = new CityBank(); and call rate = reference.getInterestRate() to get 4% based on the actual runtime object type. This demonstrates polymorphism - the same interface method behaves differently based on the object type. Another example: Animal class has sound() method returning 'generic sound'. Dog class overrides it to return 'Woof', Cat class returns 'Meow'. Method overriding enables writing flexible, maintainable code where you can work with the base class type but get behavior specific to each subclass.",
    category: "interview",
    subcategory: "zoho",
    company: "Zoho",
    topic: "OOP"
  },
  {
    question: "Remove duplicates from a sorted Linked List?",
    answer: "Since the list is sorted, duplicate elements are adjacent. Use a single pointer traversal starting from the head. For each node, compare its value with the next node's value. If they're equal, it means we have a duplicate, so skip the next node by setting current.next = current.next.next. This effectively removes the duplicate node from the list. Continue until current.next becomes null. Time complexity is O(n) as we traverse the entire list once, and space complexity is O(1) as no extra space is needed. For example, in list 1->1->2->3->3, first iteration removes one '1' to get 1->2->3->3, then removes one '3' to get 1->2->3. This in-place approach is efficient and commonly tested.",
    category: "interview",
    subcategory: "zoho",
    company: "Zoho",
    topic: "Linked Lists"
  },
  {
    question: "What is Encapsulation?",
    answer: "Encapsulation is the bundling of data (variables) and methods (functions) that operate on that data into a single unit called a class, along with hiding the internal details from the outside world. It's the practice of keeping fields private (or protected) and providing public getter and setter methods to access them. This prevents unauthorized direct access and modification of object state. Benefits include: (1) Data Protection - you control how data is modified through validators in setters, (2) Maintainability - internal implementation can change without affecting external code, (3) Flexibility - you can add logic to getters/setters without changing the interface. Example: a BankAccount class keeps balance private and provides withdraw() method that validates against insufficient funds. Direct access like account.balance = -1000 is prevented, ensuring data integrity. Encapsulation is a fundamental principle of object-oriented programming.",
    category: "interview",
    subcategory: "zoho",
    company: "Zoho",
    topic: "OOP"
  },
  {
    question: "Explain Polymorphism with an example?",
    answer: "Polymorphism means 'many forms' - it's the ability of objects to take multiple forms or for methods to behave differently based on context. There are two main types: (1) COMPILE-TIME polymorphism (Method Overloading) - same method name, different parameters, resolved at compile time. Example: class Calculator with add(int a, int b), add(double a, double b), add(int a, int b, int c). (2) RUNTIME polymorphism (Method Overriding) - same method name, overridden in subclasses, resolved at runtime. Example: Shape class with calculateArea(), Circle overrides to return π*r², Rectangle overrides to return length*width. Then Shape shape = new Circle(); shape.calculateArea() calls Circle's implementation. Polymorphism enables writing generic code that works with parent class references but exhibits child-class specific behavior, making code flexible and extensible without modification.",
    category: "interview",
    subcategory: "zoho",
    company: "Zoho",
    topic: "OOP"
  },
  {
    question: "What's the difference between ArrayList and LinkedList?",
    answer: "Both implement the List interface but have different underlying structures and performance characteristics. ArrayList uses dynamic array internally - it provides O(1) random access via index but O(n) insertion/deletion in middle (requires shifting elements). LinkedList uses doubly-linked nodes - insertion/deletion at beginning or end is O(1), but random access requires O(n) traversal. Use ArrayList when you need frequent random access and few insertions/deletions. Use LinkedList when you need frequent insertions/deletions and mostly sequential access. ArrayList is more memory-efficient as it doesn't store node references. LinkedList uses extra memory for pointers but is better for frequent add/remove operations. In practice, ArrayList is used more often unless you specifically need LinkedList's O(1) add/remove at beginning.",
    category: "interview",
    subcategory: "zoho",
    company: "Zoho",
    topic: "Collections"
  },
  {
    question: "How does Garbage Collection work in Java?",
    answer: "Garbage Collection (GC) is the automatic memory management feature in Java that reclaims memory occupied by objects no longer in use. The JVM tracks object references - if an object has no references pointing to it (unreachable), it's eligible for garbage collection. The GC process involves: (1) MARKING - identify which objects are reachable from root objects (local variables, static fields), (2) SWEEPING - delete unreachable objects and free their memory. Java uses generational garbage collection theory: younger objects are collected more frequently (Young Generation), while older survivors are collected less often (Old Generation). Major GC algorithms include Mark-Sweep-Compact, G1GC, and CMS. You can suggest GC with System.gc() but can't force it. GC pauses the application briefly (Stop-The-World), which is a consideration for latency-sensitive systems. Proper understanding of GC is crucial for writing memory-efficient Java applications.",
    category: "interview",
    subcategory: "zoho",
    company: "Zoho",
    topic: "Java"
  },
  {
    question: "Explain Access Modifiers in Java?",
    answer: "Java has four access modifiers that control the visibility of classes, methods, and variables: (1) PUBLIC - accessible from anywhere, (2) PROTECTED - accessible within the same package and by subclasses, (3) DEFAULT (no modifier) - accessible only within the same package, (4) PRIVATE - accessible only within the same class. For a class, you can only use public or default. Private members are often accessed via public getter/setter methods (encapsulation). Protected is useful in inheritance hierarchies where subclasses need access to parent implementation details. Default is commonly used for package-private utilities. Example: class BankAccount has private balance (no direct access), public getBalance() (controlled read), public withdraw(amount) (validates before reducing balance). Choosing appropriate access modifiers enforces encapsulation and prevents misuse of your code.",
    category: "interview",
    subcategory: "zoho",
    company: "Zoho",
    topic: "Java"
  },
  {
    question: "What is Thread-safe code?",
    answer: "Thread-safe code is code that correctly handles multiple threads accessing shared resources simultaneously without data corruption or race conditions. A race condition occurs when the outcome depends on the timing of thread execution. Making code thread-safe involves: (1) SYNCHRONIZATION - using synchronized keyword or locks to ensure only one thread accesses critical section at a time, (2) IMMUTABILITY - using final fields and immutable objects that can't be modified, (3) THREAD-LOCAL STORAGE - each thread gets its own copy of data, (4) ATOMIC OPERATIONS - using atomic classes for simple operations like AtomicInteger. Example: incrementing a counter in multi-threaded environment without synchronization causes lost updates because read-modify-write isn't atomic. With synchronization or AtomicInteger, the operation is atomic. Java Collections like HashMap are NOT thread-safe, so use Collections.synchronizedMap() or ConcurrentHashMap for multi-threaded access. Understanding thread-safety is essential for correct concurrent programming.",
    category: "interview",
    subcategory: "zoho",
    company: "Zoho",
    topic: "Concurrency"
  },
  {
    question: "Explain the concept of Inheritance?",
    answer: "Inheritance is a mechanism where a new class (subclass/child) inherits properties and methods from an existing class (superclass/parent). The subclass extends the parent using the 'extends' keyword and can reuse parent's code, override methods, and add new functionality. Benefits include: (1) Code Reusability - avoid duplicating common code, (2) Extensibility - easily add new functionality by creating new subclasses, (3) Maintainability - changes in parent propagate to all children. Types: (1) Single Inheritance - one child inherits from one parent, (2) Multilevel Inheritance - child becomes parent to another child (grandparent -> parent -> child), (3) Hierarchical Inheritance - multiple children inherit from one parent. Java doesn't support multiple inheritance with classes (to avoid diamond problem) but supports it with interfaces. Example: Vehicle is parent with start(), stop() methods. Car and Bike inherit from Vehicle and add specific methods like openTrunk() for Car. This creates code organization and reusability.",
    category: "interview",
    subcategory: "zoho",
    company: "Zoho",
    topic: "OOP"
  },
  {
    question: "What is an Interface in Java?",
    answer: "An Interface is a contract that defines methods a class MUST implement. It contains only abstract methods (before Java 8) and constants. Interfaces cannot be instantiated - they must be implemented by a concrete class using the 'implements' keyword. Before Java 8, interfaces had only abstract methods. Java 8 introduced default methods (with implementation) and static methods. Java 9 added private methods for code reuse. Key differences from abstract classes: (1) Interface members are public by default, (2) can implement multiple interfaces but extend only one class, (3) interfaces don't have constructors or instance variables. Benefits: (1) Multiple Inheritance - a class can implement multiple interfaces achieving multiple inheritance, (2) Loose Coupling - depend on interface contract, not implementation, (3) Polymorphism - different classes implementing same interface can be used interchangeably. Example: interface PaymentMode with process() method, implemented by CreditCard and NetBanking classes. Code using PaymentMode reference can work with any implementation.",
    category: "interview",
    subcategory: "zoho",
    company: "Zoho",
    topic: "OOP"
  },
  {
    question: "Explain Exception Handling in Java?",
    answer: "Exception Handling is a mechanism to handle runtime errors gracefully rather than crashing the program. It uses try-catch-finally blocks and throw statements. The TRY block contains code that might throw an exception. The CATCH block handles specific exception types with appropriate recovery logic. Multiple catch blocks handle different exception types. The FINALLY block executes regardless of whether an exception occurred - useful for cleanup like closing files. THROW statement manually throws exceptions. Example: try { int result = 10/0; } catch(ArithmeticException e) { System.out.println(\"Cannot divide by zero\"); } finally { cleanup(); }. Java has checked exceptions (must be caught or declared - IOException) and unchecked exceptions (can be ignored - NullPointerException). Best practices: catch specific exceptions, avoid swallowing exceptions silently, use finally for resource cleanup. Try-with-resources (Java 7+) automatically closes resources: try(FileReader fr = new FileReader(file)) { }. Proper exception handling makes code robust and maintainable.",
    category: "interview",
    subcategory: "zoho",
    company: "Zoho",
    topic: "Java"
  },
  {
    question: "What is a Constructor and Destructor?",
    answer: "A CONSTRUCTOR is a special method called when an object is created. It initializes object state and has the same name as the class with no return type. Java constructors are fundamental for object initialization. Multiple overloaded constructors with different parameters can exist. If no constructor is defined, Java provides a default no-arg constructor. Constructors cannot be inherited but can be overloaded. A DESTRUCTOR (finalize in Java) is called when an object is about to be destroyed. Java doesn't have explicit destructors like C++ - instead, finalize() method is called by garbage collector before object destruction, but it's unpredictable and rarely used. Modern Java prefers try-with-resources for resource cleanup. Example: class Student { String name; int id; // Constructor public Student(String n, int i) { name = n; id = i; } }. Constructor chaining using this() or super() calls is common. Constructors are crucial for proper object initialization.",
    category: "interview",
    subcategory: "zoho",
    company: "Zoho",
    topic: "Java"
  },
  {
    question: "Explain Abstraction with an example?",
    answer: "Abstraction is the concept of hiding complex implementation details and showing only the necessary features to the outside world. It reduces complexity by letting you work with objects at higher levels of abstraction. Abstract classes and interfaces are main tools for abstraction. An ABSTRACT CLASS cannot be instantiated and must be extended. It can contain both abstract methods (no body) and concrete methods (with implementation). A subclass must implement all abstract methods. ABSTRACT METHODS provide a contract that subclasses must follow. Example: Animal is an abstract class with abstract method sound(). Dog extends Animal and provides implementation 'Woof'. Application code uses Animal reference = new Dog(); animal.sound(); without knowing implementation details. Benefits: (1) Simplifies interface, (2) Enforces consistency across subclasses, (3) Allows changing implementation without affecting external code. Database abstraction example: JDBC abstracts database connections - your code uses Connection interface without knowing if it's MySQL, Oracle, or PostgreSQL. Abstraction is key to designing flexible, maintainable systems.",
    category: "interview",
    subcategory: "zoho",
    company: "Zoho",
    topic: "OOP"
  },
  {
    question: "What is the purpose of 'this' keyword in Java?",
    answer: "The 'this' keyword is a reference to the current object instance. It's used to: (1) DISTINGUISH between instance variables and parameters with same names - if Constructor has int age parameter, this.age refers to instance variable, (2) CALL another constructor in the same class using this() - helps with constructor chaining and code reuse, (3) PASS current object as parameter to another method, (4) RETURN current object from a method (useful for method chaining). Example: class Person { String name; public Person(String name) { this.name = name; } // without 'this', parameter shadows instance variable }. In method chaining: class Builder { Builder setName(String n) { this.name = n; return this; } }. 'this' is implicitly available in non-static contexts. It helps resolve ambiguities and enables elegant patterns like fluent interfaces and copy constructors. Understanding 'this' is essential for OOP grasp.",
    category: "interview",
    subcategory: "zoho",
    company: "Zoho",
    topic: "Java"
  },
  {
    question: "Explain 'super' keyword in Java?",
    answer: "The 'super' keyword is a reference to the parent class object. It's used to: (1) ACCESS parent class instance variables - super.variableName, (2) CALL parent class methods - useful when overriding but still need parent's functionality, (3) CALL parent class constructor - super() must be first statement in child constructor if parent constructor takes parameters. Example: class Vehicle { void start() { print(\"Engine starting\"); } } class Car extends Vehicle { void start() { super.start(); print(\"Car ready\"); } }. When Car's start() is called, it executes parent's start() first, then adds Car-specific logic. This is useful for extending parent behavior rather than replacing it. Another example: class Employee extends Person { public Employee(String name, int id) { super(name); // calls Person(name) constructor this.id = id; }}. Without super(), Person's no-arg constructor is called. 'super' enables cooperative inheritance and code reuse in class hierarchies.",
    category: "interview",
    subcategory: "zoho",
    company: "Zoho",
    topic: "Java"
  },
  {
    question: "What is a Wrapper Class in Java?",
    answer: "Wrapper Classes are classes that convert primitive types to objects. Java provides wrapper classes for each primitive: Byte, Short, Integer, Long, Float, Double, Boolean, Character. They're in java.lang package. Benefits: (1) working with collections that require objects, (2) type consistency - all elements can be treated as Objects, (3) provides utility methods like Integer.parseInt(), Boolean.parseBoolean(). AUTO-BOXING automatically converts primitive to wrapper during assignment: Integer obj = 5; // calls Integer.valueOf(5). UNBOXING converts wrapper to primitive: int num = obj; // calls intValue(). These automatic conversions make code cleaner. Example: int[] primes = {2, 3, 5}; List<Integer> list = new ArrayList<>(); for(int p : primes) list.add(p); // autoboxing. This is possible because of wrapper classes. Wrapper classes are immutable - once created, they can't be changed. Performance consideration: frequent boxing/unboxing has overhead, so use primitives when performance matters. Wrapper classes are essential for using primitives with generic collections.",
    category: "interview",
    subcategory: "zoho",
    company: "Zoho",
    topic: "Java"
  }
];

module.exports = zohoQuestions;