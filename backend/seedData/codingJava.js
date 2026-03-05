// Seed data for Java coding questions

const javaQuestions = [
  {
    questionText: "What is polymorphism in Java?",
    options: [
      "A) The ability of an object to take many forms",
      "B) Java's memory management system",
      "C) A feature to overload operators",
      "D) Java's garbage collector"
    ],
    correctAnswer: "A) The ability of an object to take many forms",
    explanation: "Polymorphism allows methods to do different things based on the object that it is acting upon.",
    difficulty: "medium",
    category: "coding",
    subcategory: "java",
    topic: "OOP"
  },
  {
    questionText: "Which keyword is used to inherit a class in Java?",
    options: ["A) implement", "B) extends", "C) inherits", "D) super"],
    correctAnswer: "B) extends",
    explanation: "In Java, the `extends` keyword is used to indicate that a class is subclassing another class.",
    difficulty: "easy",
    category: "coding",
    subcategory: "java",
    topic: "Inheritance"
  },
  {
    questionText: "What is the size of an `int` in Java?",
    options: ["A) 2 bytes", "B) 4 bytes", "C) 8 bytes", "D) Depends on the platform"],
    correctAnswer: "B) 4 bytes",
    explanation: "In Java, the primitive type `int` is always 4 bytes (32 bits) regardless of platform.",
    difficulty: "easy",
    category: "coding",
    subcategory: "java",
    topic: "Data Types"
  },
  {
    questionText: "What is encapsulation in Java?",
    options: [
      "A) Hiding the implementation details",
      "B) Inheriting from multiple classes",
      "C) Overloading methods",
      "D) Creating objects"
    ],
    correctAnswer: "A) Hiding the implementation details",
    explanation: "Encapsulation is the technique of making the fields in a class private and providing access to the fields via public methods.",
    difficulty: "medium",
    category: "coding",
    subcategory: "java",
    topic: "OOP"
  },
  {
    questionText: "What is the difference between an abstract class and an interface in Java?",
    options: [
      "A) Abstract classes can have constructors, interfaces cannot",
      "B) Interfaces can have method implementations, abstract classes cannot",
      "C) Abstract classes support multiple inheritance, interfaces do not",
      "D) Interfaces can extend multiple interfaces, abstract classes cannot"
    ],
    correctAnswer: "A) Abstract classes can have constructors, interfaces cannot",
    explanation: "Abstract classes can have constructors and can provide partial implementation, while interfaces define contracts without implementation.",
    difficulty: "hard",
    category: "coding",
    subcategory: "java",
    topic: "OOP"
  },
  {
    questionText: "What is JVM?",
    options: [
      "A) Java Virtual Machine",
      "B) Java Variable Manager",
      "C) Java Version Manager",
      "D) Java Virtual Memory"
    ],
    correctAnswer: "A) Java Virtual Machine",
    explanation: "JVM is the runtime environment that executes Java bytecode.",
    difficulty: "easy",
    category: "coding",
    subcategory: "java",
    topic: "JVM"
  },
  {
    questionText: "What is JRE?",
    options: [
      "A) Java Runtime Environment",
      "B) Java Resource Engine",
      "C) Java Runtime Executor",
      "D) Java Reference Environment"
    ],
    correctAnswer: "A) Java Runtime Environment",
    explanation: "JRE provides the libraries, JVM, and other components to run Java applications.",
    difficulty: "easy",
    category: "coding",
    subcategory: "java",
    topic: "JRE"
  },
  {
    questionText: "What is JDK?",
    options: [
      "A) Java Development Kit",
      "B) Java Debug Kit",
      "C) Java Deployment Kit",
      "D) Java Documentation Kit"
    ],
    correctAnswer: "A) Java Development Kit",
    explanation: "JDK includes JRE plus development tools like compiler and debugger.",
    difficulty: "easy",
    category: "coding",
    subcategory: "java",
    topic: "JDK"
  },
  {
    questionText: "What is a constructor in Java?",
    options: [
      "A) A method to destroy objects",
      "B) A special method to initialize objects",
      "C) A method to compare objects",
      "D) A method to clone objects"
    ],
    correctAnswer: "B) A special method to initialize objects",
    explanation: "Constructors are called when an object is created and are used to initialize the object's state.",
    difficulty: "easy",
    category: "coding",
    subcategory: "java",
    topic: "Constructors"
  },
  {
    questionText: "What is method overloading?",
    options: [
      "A) Changing the return type of a method",
      "B) Having multiple methods with the same name but different parameters",
      "C) Overriding a method in a subclass",
      "D) Making a method static"
    ],
    correctAnswer: "B) Having multiple methods with the same name but different parameters",
    explanation: "Method overloading allows a class to have multiple methods with the same name but different signatures.",
    difficulty: "medium",
    category: "coding",
    subcategory: "java",
    topic: "Methods"
  },
  {
    questionText: "What is method overriding?",
    options: [
      "A) Having multiple methods with the same name in the same class",
      "B) Providing a specific implementation of a method in a subclass",
      "C) Making a method private",
      "D) Changing the method's return type"
    ],
    correctAnswer: "B) Providing a specific implementation of a method in a subclass",
    explanation: "Method overriding occurs when a subclass provides a specific implementation for a method defined in its superclass.",
    difficulty: "medium",
    category: "coding",
    subcategory: "java",
    topic: "Inheritance"
  },
  {
    questionText: "What is the difference between == and equals() in Java?",
    options: [
      "A) == compares references, equals() compares content",
      "B) == compares content, equals() compares references",
      "C) Both compare references",
      "D) Both compare content"
    ],
    correctAnswer: "A) == compares references, equals() compares content",
    explanation: "== checks if two references point to the same object, while equals() checks if two objects are equal in value.",
    difficulty: "medium",
    category: "coding",
    subcategory: "java",
    topic: "Object Comparison"
  },
  {
    questionText: "What is a static method?",
    options: [
      "A) A method that belongs to an instance",
      "B) A method that belongs to the class",
      "C) A method that cannot be overridden",
      "D) A method that is private"
    ],
    correctAnswer: "B) A method that belongs to the class",
    explanation: "Static methods can be called without creating an instance of the class and belong to the class rather than any instance.",
    difficulty: "easy",
    category: "coding",
    subcategory: "java",
    topic: "Static Members"
  },
  {
    questionText: "What is the purpose of the 'final' keyword?",
    options: [
      "A) To make a variable constant",
      "B) To prevent inheritance",
      "C) To prevent method overriding",
      "D) All of the above"
    ],
    correctAnswer: "D) All of the above",
    explanation: "The 'final' keyword can be used to make variables constant, prevent class inheritance, and prevent method overriding.",
    difficulty: "medium",
    category: "coding",
    subcategory: "java",
    topic: "Keywords"
  },
  {
    questionText: "What is an exception in Java?",
    options: [
      "A) A syntax error",
      "B) An event that occurs during execution that disrupts the normal flow",
      "C) A logical error",
      "D) A compilation error"
    ],
    correctAnswer: "B) An event that occurs during execution that disrupts the normal flow",
    explanation: "Exceptions are events that occur during the execution of a program that disrupt the normal flow of instructions.",
    difficulty: "easy",
    category: "coding",
    subcategory: "java",
    topic: "Exceptions"
  },
  {
    questionText: "What is the difference between checked and unchecked exceptions?",
    options: [
      "A) Checked are caught at compile time, unchecked at runtime",
      "B) Checked are caught at runtime, unchecked at compile time",
      "C) Checked are for user errors, unchecked for programming errors",
      "D) There is no difference"
    ],
    correctAnswer: "A) Checked are caught at compile time, unchecked at runtime",
    explanation: "Checked exceptions are checked at compile time, while unchecked exceptions occur at runtime.",
    difficulty: "hard",
    category: "coding",
    subcategory: "java",
    topic: "Exceptions"
  },
  {
    questionText: "What is a thread in Java?",
    options: [
      "A) A lightweight process",
      "B) A heavy process",
      "C) A type of exception",
      "D) A data structure"
    ],
    correctAnswer: "A) A lightweight process",
    explanation: "A thread is a lightweight subprocess that allows concurrent execution within a program.",
    difficulty: "medium",
    category: "coding",
    subcategory: "java",
    topic: "Multithreading"
  },
  {
    questionText: "What is synchronization in Java?",
    options: [
      "A) Making methods run faster",
      "B) Controlling access to shared resources",
      "C) Creating new threads",
      "D) Stopping threads"
    ],
    correctAnswer: "B) Controlling access to shared resources",
    explanation: "Synchronization ensures that only one thread can access a shared resource at a time.",
    difficulty: "medium",
    category: "coding",
    subcategory: "java",
    topic: "Multithreading"
  },
  {
    questionText: "What is a collection in Java?",
    options: [
      "A) A group of objects",
      "B) A single object",
      "C) A primitive data type",
      "D) A keyword"
    ],
    correctAnswer: "A) A group of objects",
    explanation: "Collections are frameworks that provide an architecture to store and manipulate groups of objects.",
    difficulty: "easy",
    category: "coding",
    subcategory: "java",
    topic: "Collections"
  },
  {
    questionText: "What is the difference between ArrayList and LinkedList?",
    options: [
      "A) ArrayList is faster for random access, LinkedList for insertions/deletions",
      "B) LinkedList is faster for random access, ArrayList for insertions/deletions",
      "C) They are the same",
      "D) ArrayList uses more memory"
    ],
    correctAnswer: "A) ArrayList is faster for random access, LinkedList for insertions/deletions",
    explanation: "ArrayList provides fast random access, while LinkedList is better for frequent insertions and deletions.",
    difficulty: "medium",
    category: "coding",
    subcategory: "java",
    topic: "Collections"
  },
  {
    questionText: "What is a HashMap in Java?",
    options: [
      "A) A sorted map",
      "B) An unsorted map based on hash codes",
      "C) A list implementation",
      "D) A set implementation"
    ],
    correctAnswer: "B) An unsorted map based on hash codes",
    explanation: "HashMap stores key-value pairs and uses hash codes for fast lookups.",
    difficulty: "easy",
    category: "coding",
    subcategory: "java",
    topic: "Collections"
  },
  {
    questionText: "What is the main method in Java?",
    options: [
      "A) The first method called",
      "B) The entry point of a Java application",
      "C) A method to print output",
      "D) A method to read input"
    ],
    correctAnswer: "B) The entry point of a Java application",
    explanation: "The main method is the entry point where the JVM starts executing the program.",
    difficulty: "easy",
    category: "coding",
    subcategory: "java",
    topic: "Main Method"
  },
  {
    questionText: "What is the difference between String, StringBuilder, and StringBuffer?",
    options: [
      "A) String is immutable, StringBuilder is mutable and not thread-safe, StringBuffer is mutable and thread-safe",
      "B) All are mutable",
      "C) String is mutable, others are not",
      "D) They are all the same"
    ],
    correctAnswer: "A) String is immutable, StringBuilder is mutable and not thread-safe, StringBuffer is mutable and thread-safe",
    explanation: "String objects are immutable, StringBuilder is for single-threaded mutable strings, StringBuffer for multi-threaded.",
    difficulty: "hard",
    category: "coding",
    subcategory: "java",
    topic: "Strings"
  },
  {
    questionText: "What is garbage collection in Java?",
    options: [
      "A) Manual memory management",
      "B) Automatic memory management",
      "C) Memory allocation",
      "D) Memory deallocation only"
    ],
    correctAnswer: "B) Automatic memory management",
    explanation: "Garbage collection automatically frees memory by removing objects that are no longer referenced.",
    difficulty: "easy",
    category: "coding",
    subcategory: "java",
    topic: "Memory Management"
  },
  {
    questionText: "What is the purpose of the 'this' keyword?",
    options: [
      "A) To refer to the current instance",
      "B) To refer to the superclass",
      "C) To create new objects",
      "D) To call static methods"
    ],
    correctAnswer: "A) To refer to the current instance",
    explanation: "'this' refers to the current object instance and is used to access instance variables and methods.",
    difficulty: "easy",
    category: "coding",
    subcategory: "java",
    topic: "Keywords"
  },
  {
    questionText: "What is inheritance in Java?",
    options: [
      "A) Creating multiple instances",
      "B) Acquiring properties from a parent class",
      "C) Hiding data",
      "D) Overloading methods"
    ],
    correctAnswer: "B) Acquiring properties from a parent class",
    explanation: "Inheritance allows a class to inherit properties and methods from another class.",
    difficulty: "easy",
    category: "coding",
    subcategory: "java",
    topic: "Inheritance"
  },
  {
    questionText: "What is an interface in Java?",
    options: [
      "A) A class with only abstract methods",
      "B) A blueprint for classes",
      "C) A concrete class",
      "D) A data type"
    ],
    correctAnswer: "B) A blueprint for classes",
    explanation: "An interface defines a contract that implementing classes must follow.",
    difficulty: "easy",
    category: "coding",
    subcategory: "java",
    topic: "Interfaces"
  },
  {
    questionText: "What is the difference between throw and throws?",
    options: [
      "A) throw is used to throw an exception, throws declares exceptions",
      "B) throws is used to throw an exception, throw declares exceptions",
      "C) They are the same",
      "D) throw is for checked exceptions, throws for unchecked"
    ],
    correctAnswer: "A) throw is used to throw an exception, throws declares exceptions",
    explanation: "'throw' is used to explicitly throw an exception, 'throws' declares that a method may throw exceptions.",
    difficulty: "medium",
    category: "coding",
    subcategory: "java",
    topic: "Exceptions"
  },
  {
    questionText: "What is a lambda expression in Java?",
    options: [
      "A) A way to define anonymous functions",
      "B) A type of loop",
      "C) A data structure",
      "D) A keyword"
    ],
    correctAnswer: "A) A way to define anonymous functions",
    explanation: "Lambda expressions provide a clear and concise way to represent one method interface using an expression.",
    difficulty: "hard",
    category: "coding",
    subcategory: "java",
    topic: "Functional Programming"
  },
  {
    questionText: "What is the purpose of the 'super' keyword?",
    options: [
      "A) To call superclass methods",
      "B) To create objects",
      "C) To access static members",
      "D) To throw exceptions"
    ],
    correctAnswer: "A) To call superclass methods",
    explanation: "'super' is used to refer to the immediate parent class object and call its methods or constructors.",
    difficulty: "medium",
    category: "coding",
    subcategory: "java",
    topic: "Inheritance"
  },
  {
    questionText: "What is the difference between HashSet and TreeSet?",
    options: [
      "A) HashSet is unordered, TreeSet is ordered",
      "B) TreeSet is unordered, HashSet is ordered",
      "C) They are the same",
      "D) HashSet allows duplicates, TreeSet does not"
    ],
    correctAnswer: "A) HashSet is unordered, TreeSet is ordered",
    explanation: "HashSet does not maintain order, while TreeSet maintains natural ordering.",
    difficulty: "medium",
    category: "coding",
    subcategory: "java",
    topic: "Collections"
  },
  {
    questionText: "What is serialization in Java?",
    options: [
      "A) Converting an object to a byte stream",
      "B) Converting a byte stream to an object",
      "C) Both A and B",
      "D) Neither"
    ],
    correctAnswer: "C) Both A and B",
    explanation: "Serialization is the process of converting an object into a byte stream and vice versa.",
    difficulty: "medium",
    category: "coding",
    subcategory: "java",
    topic: "Serialization"
  },
  {
    questionText: "What is the difference between Array and ArrayList?",
    options: [
      "A) Array is fixed size, ArrayList is dynamic",
      "B) ArrayList is fixed size, Array is dynamic",
      "C) They are the same",
      "D) Array allows primitives, ArrayList does not"
    ],
    correctAnswer: "A) Array is fixed size, ArrayList is dynamic",
    explanation: "Arrays have fixed size, while ArrayList can grow dynamically.",
    difficulty: "easy",
    category: "coding",
    subcategory: "java",
    topic: "Arrays vs Collections"
  },
  {
    questionText: "What is a package in Java?",
    options: [
      "A) A collection of classes and interfaces",
      "B) A single class",
      "C) A method",
      "D) A variable"
    ],
    correctAnswer: "A) A collection of classes and interfaces",
    explanation: "Packages are used to group related classes and interfaces.",
    difficulty: "easy",
    category: "coding",
    subcategory: "java",
    topic: "Packages"
  },
  {
    questionText: "What is the difference between public, private, and protected?",
    options: [
      "A) Access modifiers controlling visibility",
      "B) Data types",
      "C) Method types",
      "D) Class types"
    ],
    correctAnswer: "A) Access modifiers controlling visibility",
    explanation: "Public is accessible everywhere, private only within the class, protected within package and subclasses.",
    difficulty: "medium",
    category: "coding",
    subcategory: "java",
    topic: "Access Modifiers"
  },
  {
    questionText: "What is the purpose of the 'static' keyword?",
    options: [
      "A) To make variables and methods belong to the class",
      "B) To make them instance-specific",
      "C) To prevent inheritance",
      "D) To allow multiple inheritance"
    ],
    correctAnswer: "A) To make variables and methods belong to the class",
    explanation: "Static members belong to the class rather than any particular instance.",
    difficulty: "easy",
    category: "coding",
    subcategory: "java",
    topic: "Static Members"
  },
  {
    questionText: "What is the difference between while and do-while loops?",
    options: [
      "A) while checks condition first, do-while executes body first",
      "B) do-while checks condition first, while executes body first",
      "C) They are the same",
      "D) while is for arrays, do-while for collections"
    ],
    correctAnswer: "A) while checks condition first, do-while executes body first",
    explanation: "In while loop, condition is checked before execution; in do-while, body executes at least once.",
    difficulty: "easy",
    category: "coding",
    subcategory: "java",
    topic: "Loops"
  },
  {
    questionText: "What is the purpose of the 'break' statement?",
    options: [
      "A) To exit a loop or switch",
      "B) To continue to the next iteration",
      "C) To throw an exception",
      "D) To return from a method"
    ],
    correctAnswer: "A) To exit a loop or switch",
    explanation: "'break' terminates the nearest enclosing loop or switch statement.",
    difficulty: "easy",
    category: "coding",
    subcategory: "java",
    topic: "Control Flow"
  },
  {
    questionText: "What is the difference between '==' and '.equals()' for strings?",
    options: [
      "A) == compares references, .equals() compares content",
      "B) .equals() compares references, == compares content",
      "C) Both compare content",
      "D) Both compare references"
    ],
    correctAnswer: "A) == compares references, .equals() compares content",
    explanation: "For strings, == checks if they refer to the same object, .equals() checks if content is the same.",
    difficulty: "medium",
    category: "coding",
    subcategory: "java",
    topic: "Strings"
  },
  {
    questionText: "What is the purpose of the 'continue' statement?",
    options: [
      "A) To exit a loop",
      "B) To skip the current iteration and continue to the next",
      "C) To throw an exception",
      "D) To return from a method"
    ],
    correctAnswer: "B) To skip the current iteration and continue to the next",
    explanation: "'continue' skips the rest of the current loop iteration and proceeds to the next one.",
    difficulty: "easy",
    category: "coding",
    subcategory: "java",
    topic: "Control Flow"
  },
  {
    questionText: "What is the difference between primitive and reference types?",
    options: [
      "A) Primitives store values, references store addresses",
      "B) References store values, primitives store addresses",
      "C) They are the same",
      "D) Primitives are objects, references are not"
    ],
    correctAnswer: "A) Primitives store values, references store addresses",
    explanation: "Primitive types store actual values, reference types store references (addresses) to objects.",
    difficulty: "medium",
    category: "coding",
    subcategory: "java",
    topic: "Data Types"
  },
  {
    questionText: "What is the purpose of the 'instanceof' operator?",
    options: [
      "A) To check if an object is an instance of a class",
      "B) To create instances",
      "C) To compare objects",
      "D) To cast objects"
    ],
    correctAnswer: "A) To check if an object is an instance of a class",
    explanation: "'instanceof' checks if an object is an instance of a specific class or implements an interface.",
    difficulty: "medium",
    category: "coding",
    subcategory: "java",
    topic: "Operators"
  },
  {
    questionText: "What is the difference between method overloading and overriding?",
    options: [
      "A) Overloading is compile-time, overriding is runtime",
      "B) Overriding is compile-time, overloading is runtime",
      "C) They are the same",
      "D) Overloading is for same class, overriding for different classes"
    ],
    correctAnswer: "A) Overloading is compile-time, overriding is runtime",
    explanation: "Overloading is resolved at compile time, overriding at runtime based on the actual object type.",
    difficulty: "hard",
    category: "coding",
    subcategory: "java",
    topic: "Polymorphism"
  }
];

module.exports = javaQuestions;