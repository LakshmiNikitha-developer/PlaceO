// Seed data for C programming questions

const cQuestions = [
  {
    questionText: "What is the size of `char` data type in C (on most platforms)?",
    options: ["A) 1 byte", "B) 2 bytes", "C) 4 bytes", "D) Depends on compiler"],
    correctAnswer: "A) 1 byte",
    explanation: "The C standard guarantees that `char` is at least 1 byte; on nearly all common platforms it is exactly 1 byte.",
    difficulty: "easy",
    category: "coding",
    subcategory: "c",
    topic: "Data Types"
  },
  {
    questionText: "Which header file is required to use `printf` function?",
    options: ["A) <stdio.h>", "B) <stdlib.h>", "C) <string.h>", "D) <math.h>"],
    correctAnswer: "A) <stdio.h>",
    explanation: "`printf` is declared in the standard input/output header <stdio.h>.",
    difficulty: "easy",
    category: "coding",
    subcategory: "c",
    topic: "Standard Library"
  },
  {
    questionText: "What will be the output of the following code?\nint a = 5;\nprintf(\"%d\", a++);",
    options: ["A) 5", "B) 6", "C) Undefined", "D) 0"],
    correctAnswer: "A) 5",
    explanation: "The post-increment operator returns the value before incrementing, so `printf` prints 5 and then `a` becomes 6.",
    difficulty: "medium",
    category: "coding",
    subcategory: "c",
    topic: "Operators"
  },
  {
    questionText: "What is a pointer in C?",
    options: [
      "A) A variable that stores memory addresses",
      "B) A function that points to data",
      "C) A type of array",
      "D) A keyword for loops"
    ],
    correctAnswer: "A) A variable that stores memory addresses",
    explanation: "Pointers are variables that store the memory address of another variable.",
    difficulty: "easy",
    category: "coding",
    subcategory: "c",
    topic: "Pointers"
  },
  {
    questionText: "What does the `&` operator do?",
    options: [
      "A) Logical AND",
      "B) Bitwise AND",
      "C) Address-of operator",
      "D) Reference operator"
    ],
    correctAnswer: "C) Address-of operator",
    explanation: "`&` is used to get the memory address of a variable.",
    difficulty: "easy",
    category: "coding",
    subcategory: "c",
    topic: "Operators"
  },
  {
    questionText: "What does the `*` operator do when used with pointers?",
    options: [
      "A) Multiplication",
      "B) Dereference operator",
      "C) Pointer declaration",
      "D) Both B and C"
    ],
    correctAnswer: "D) Both B and C",
    explanation: "`*` is used to declare pointers and to dereference them.",
    difficulty: "medium",
    category: "coding",
    subcategory: "c",
    topic: "Pointers"
  },
  {
    questionText: "What is the difference between `malloc` and `calloc`?",
    options: [
      "A) `malloc` allocates and initializes to zero, `calloc` does not",
      "B) `calloc` allocates and initializes to zero, `malloc` does not",
      "C) They are the same",
      "D) `malloc` is for arrays, `calloc` for single variables"
    ],
    correctAnswer: "B) `calloc` allocates and initializes to zero, `malloc` does not",
    explanation: "`calloc` allocates memory and initializes it to zero, while `malloc` just allocates uninitialized memory.",
    difficulty: "medium",
    category: "coding",
    subcategory: "c",
    topic: "Memory Management"
  },
  {
    questionText: "What is a function prototype in C?",
    options: [
      "A) The definition of a function",
      "B) A declaration of a function before its definition",
      "C) A call to a function",
      "D) A type of variable"
    ],
    correctAnswer: "B) A declaration of a function before its definition",
    explanation: "Function prototypes tell the compiler about function name, return type, and parameters.",
    difficulty: "easy",
    category: "coding",
    subcategory: "c",
    topic: "Functions"
  },
  {
    questionText: "What is the purpose of the `sizeof` operator?",
    options: [
      "A) To get the size of a data type or variable",
      "B) To allocate memory",
      "C) To compare sizes",
      "D) To define array sizes"
    ],
    correctAnswer: "A) To get the size of a data type or variable",
    explanation: "`sizeof` returns the size in bytes of its operand.",
    difficulty: "easy",
    category: "coding",
    subcategory: "c",
    topic: "Operators"
  },
  {
    questionText: "What is an array in C?",
    options: [
      "A) A collection of variables of the same type",
      "B) A type of pointer",
      "C) A function",
      "D) A keyword"
    ],
    correctAnswer: "A) A collection of variables of the same type",
    explanation: "Arrays are fixed-size sequences of elements of the same type stored in contiguous memory.",
    difficulty: "easy",
    category: "coding",
    subcategory: "c",
    topic: "Arrays"
  },
  {
    questionText: "What is the difference between `struct` and `union`?",
    options: [
      "A) `struct` allocates space for all members, `union` for the largest",
      "B) `union` allocates space for all members, `struct` for the largest",
      "C) They are the same",
      "D) `struct` is for functions, `union` for variables"
    ],
    correctAnswer: "A) `struct` allocates space for all members, `union` for the largest",
    explanation: "In a struct, all members have their own space; in a union, all members share the same space.",
    difficulty: "medium",
    category: "coding",
    subcategory: "c",
    topic: "Structures"
  },
  {
    questionText: "What is recursion in C?",
    options: [
      "A) A function calling itself",
      "B) A loop",
      "C) A type of array",
      "D) Memory allocation"
    ],
    correctAnswer: "A) A function calling itself",
    explanation: "Recursion is when a function calls itself directly or indirectly.",
    difficulty: "easy",
    category: "coding",
    subcategory: "c",
    topic: "Functions"
  },
  {
    questionText: "What is the `void` keyword used for?",
    options: [
      "A) To declare functions that return nothing",
      "B) To declare generic pointers",
      "C) Both A and B",
      "D) To declare empty structures"
    ],
    correctAnswer: "C) Both A and B",
    explanation: "`void` indicates no return value for functions and can point to any type for pointers.",
    difficulty: "easy",
    category: "coding",
    subcategory: "c",
    topic: "Keywords"
  },
  {
    questionText: "What is the difference between `break` and `continue`?",
    options: [
      "A) `break` exits the loop, `continue` skips to next iteration",
      "B) `continue` exits the loop, `break` skips to next iteration",
      "C) They are the same",
      "D) `break` is for switches, `continue` for loops"
    ],
    correctAnswer: "A) `break` exits the loop, `continue` skips to next iteration",
    explanation: "`break` terminates the loop entirely, `continue` jumps to the next iteration.",
    difficulty: "easy",
    category: "coding",
    subcategory: "c",
    topic: "Control Flow"
  },
  {
    questionText: "What is a string in C?",
    options: [
      "A) A built-in data type",
      "B) An array of characters terminated by '\\0'",
      "C) A pointer to char",
      "D) Both B and C"
    ],
    correctAnswer: "D) Both B and C",
    explanation: "Strings in C are arrays of characters ending with null terminator, often handled via char pointers.",
    difficulty: "medium",
    category: "coding",
    subcategory: "c",
    topic: "Strings"
  },
  {
    questionText: "What does `static` mean for a local variable?",
    options: [
      "A) The variable is global",
      "B) The variable retains its value between function calls",
      "C) The variable is constant",
      "D) The variable is volatile"
    ],
    correctAnswer: "B) The variable retains its value between function calls",
    explanation: "Static local variables maintain their value across function calls.",
    difficulty: "medium",
    category: "coding",
    subcategory: "c",
    topic: "Storage Classes"
  },
  {
    questionText: "What is the purpose of `const` keyword?",
    options: [
      "A) To declare constants",
      "B) To prevent modification of variables",
      "C) Both A and B",
      "D) To declare functions"
    ],
    correctAnswer: "C) Both A and B",
    explanation: "`const` makes variables read-only, preventing accidental modification.",
    difficulty: "easy",
    category: "coding",
    subcategory: "c",
    topic: "Keywords"
  },
  {
    questionText: "What is a preprocessor directive?",
    options: [
      "A) A function call",
      "B) Instructions to the compiler before compilation",
      "C) A type of loop",
      "D) Memory management"
    ],
    correctAnswer: "B) Instructions to the compiler before compilation",
    explanation: "Preprocessor directives like #include and #define are processed before compilation.",
    difficulty: "easy",
    category: "coding",
    subcategory: "c",
    topic: "Preprocessor"
  },
  {
    questionText: "What is the difference between `int *p` and `int * p`?",
    options: [
      "A) No difference",
      "B) `*p` is a pointer, `p` is an int",
      "C) Spacing matters in declarations",
      "D) `*p` declares a pointer, `p` is invalid"
    ],
    correctAnswer: "A) No difference",
    explanation: "In C, whitespace in declarations is ignored; both declare a pointer to int.",
    difficulty: "easy",
    category: "coding",
    subcategory: "c",
    topic: "Pointers"
  },
  {
    questionText: "What is the `main` function in C?",
    options: [
      "A) An optional function",
      "B) The entry point of a C program",
      "C) A library function",
      "D) A macro"
    ],
    correctAnswer: "B) The entry point of a C program",
    explanation: "Execution of a C program starts from the main function.",
    difficulty: "easy",
    category: "coding",
    subcategory: "c",
    topic: "Functions"
  },
  {
    questionText: "What is a macro in C?",
    options: [
      "A) A function",
      "B) A preprocessor directive for text substitution",
      "C) A variable",
      "D) A data type"
    ],
    correctAnswer: "B) A preprocessor directive for text substitution",
    explanation: "#define creates macros that are replaced by the preprocessor.",
    difficulty: "easy",
    category: "coding",
    subcategory: "c",
    topic: "Preprocessor"
  },
  {
    questionText: "What is the difference between `++i` and `i++`?",
    options: [
      "A) `++i` increments before use, `i++` after use",
      "B) `i++` increments before use, `++i` after use",
      "C) They are the same",
      "D) `++i` is for ints, `i++` for floats"
    ],
    correctAnswer: "A) `++i` increments before use, `i++` after use",
    explanation: "Pre-increment returns the incremented value, post-increment returns the original value.",
    difficulty: "medium",
    category: "coding",
    subcategory: "c",
    topic: "Operators"
  },
  {
    questionText: "What is a file pointer in C?",
    options: [
      "A) A pointer to a file on disk",
      "B) A pointer used for file operations",
      "C) Both A and B",
      "D) A type of array"
    ],
    correctAnswer: "B) A pointer used for file operations",
    explanation: "FILE pointers are used to perform I/O operations on files.",
    difficulty: "easy",
    category: "coding",
    subcategory: "c",
    topic: "File I/O"
  },
  {
    questionText: "What does `fopen` do?",
    options: [
      "A) Closes a file",
      "B) Opens a file and returns a file pointer",
      "C) Reads from a file",
      "D) Writes to a file"
    ],
    correctAnswer: "B) Opens a file and returns a file pointer",
    explanation: "`fopen` opens a file in specified mode and returns a FILE pointer.",
    difficulty: "easy",
    category: "coding",
    subcategory: "c",
    topic: "File I/O"
  },
  {
    questionText: "What is the purpose of `free` function?",
    options: [
      "A) To allocate memory",
      "B) To deallocate dynamically allocated memory",
      "C) To initialize memory",
      "D) To copy memory"
    ],
    correctAnswer: "B) To deallocate dynamically allocated memory",
    explanation: "`free` deallocates memory previously allocated by malloc, calloc, etc.",
    difficulty: "easy",
    category: "coding",
    subcategory: "c",
    topic: "Memory Management"
  },
  {
    questionText: "What is a typedef in C?",
    options: [
      "A) A way to define new data types",
      "B) A function declaration",
      "C) A variable declaration",
      "D) A macro"
    ],
    correctAnswer: "A) A way to define new data types",
    explanation: "`typedef` creates an alias for existing data types.",
    difficulty: "medium",
    category: "coding",
    subcategory: "c",
    topic: "Type Definitions"
  },
  {
    questionText: "What is the difference between `gets` and `fgets`?",
    options: [
      "A) `gets` is safer than `fgets`",
      "B) `fgets` is safer than `gets`",
      "C) They are the same",
      "D) `gets` reads from files, `fgets` from stdin"
    ],
    correctAnswer: "B) `fgets` is safer than `gets`",
    explanation: "`fgets` prevents buffer overflow by limiting input size, `gets` does not.",
    difficulty: "medium",
    category: "coding",
    subcategory: "c",
    topic: "Strings"
  },
  {
    questionText: "What is a bit field in C?",
    options: [
      "A) A way to define variables smaller than a byte",
      "B) A field in a structure that occupies a specified number of bits",
      "C) Both A and B",
      "D) A type of array"
    ],
    correctAnswer: "B) A field in a structure that occupies a specified number of bits",
    explanation: "Bit fields allow packing multiple values into a single machine word.",
    difficulty: "hard",
    category: "coding",
    subcategory: "c",
    topic: "Structures"
  },
  {
    questionText: "What is the `volatile` keyword used for?",
    options: [
      "A) To make variables constant",
      "B) To prevent compiler optimizations on variables",
      "C) To declare functions",
      "D) To allocate memory"
    ],
    correctAnswer: "B) To prevent compiler optimizations on variables",
    explanation: "`volatile` tells the compiler that a variable may change unexpectedly.",
    difficulty: "hard",
    category: "coding",
    subcategory: "c",
    topic: "Keywords"
  },
  {
    questionText: "What is the difference between `strcpy` and `strncpy`?",
    options: [
      "A) `strcpy` copies safely, `strncpy` does not",
      "B) `strncpy` copies safely with size limit, `strcpy` does not",
      "C) They are the same",
      "D) `strcpy` is for arrays, `strncpy` for pointers"
    ],
    correctAnswer: "B) `strncpy` copies safely with size limit, `strcpy` does not",
    explanation: "`strncpy` copies up to n characters, preventing buffer overflow.",
    difficulty: "medium",
    category: "coding",
    subcategory: "c",
    topic: "Strings"
  },
  {
    questionText: "What is a function pointer in C?",
    options: [
      "A) A pointer to a function",
      "B) A function that returns a pointer",
      "C) A pointer inside a function",
      "D) A type of array"
    ],
    correctAnswer: "A) A pointer to a function",
    explanation: "Function pointers store the address of a function and can be used to call it.",
    difficulty: "hard",
    category: "coding",
    subcategory: "c",
    topic: "Pointers"
  },
  {
    questionText: "What does `memset` do?",
    options: [
      "A) Copies memory",
      "B) Sets a block of memory to a value",
      "C) Compares memory",
      "D) Moves memory"
    ],
    correctAnswer: "B) Sets a block of memory to a value",
    explanation: "`memset` fills a block of memory with a specified value.",
    difficulty: "medium",
    category: "coding",
    subcategory: "c",
    topic: "Memory Functions"
  },
  {
    questionText: "What is the `register` keyword?",
    options: [
      "A) A hint to store variable in register",
      "B) A way to declare constants",
      "C) A type of pointer",
      "D) A function modifier"
    ],
    correctAnswer: "A) A hint to store variable in register",
    explanation: "`register` suggests the compiler to store the variable in a CPU register for faster access.",
    difficulty: "medium",
    category: "coding",
    subcategory: "c",
    topic: "Storage Classes"
  },
  {
    questionText: "What is the difference between `printf` and `sprintf`?",
    options: [
      "A) `printf` prints to stdout, `sprintf` to a string",
      "B) `sprintf` prints to stdout, `printf` to a string",
      "C) They are the same",
      "D) `printf` is for files, `sprintf` for console"
    ],
    correctAnswer: "A) `printf` prints to stdout, `sprintf` to a string",
    explanation: "`sprintf` writes formatted output to a string buffer instead of stdout.",
    difficulty: "medium",
    category: "coding",
    subcategory: "c",
    topic: "Standard Library"
  },
  {
    questionText: "What is a dangling pointer?",
    options: [
      "A) A pointer that points to valid memory",
      "B) A pointer that points to freed memory",
      "C) A null pointer",
      "D) A pointer to a function"
    ],
    correctAnswer: "B) A pointer that points to freed memory",
    explanation: "Dangling pointers point to memory that has been deallocated, leading to undefined behavior.",
    difficulty: "medium",
    category: "coding",
    subcategory: "c",
    topic: "Pointers"
  },
  {
    questionText: "What is the `restrict` keyword in C99?",
    options: [
      "A) A type qualifier for pointers",
      "B) A way to declare constants",
      "C) A function modifier",
      "D) A loop keyword"
    ],
    correctAnswer: "A) A type qualifier for pointers",
    explanation: "`restrict` tells the compiler that a pointer is the only way to access a data object.",
    difficulty: "hard",
    category: "coding",
    subcategory: "c",
    topic: "Keywords"
  },
  {
    questionText: "What does `feof` check?",
    options: [
      "A) If a file is open",
      "B) If end-of-file has been reached",
      "C) If a file exists",
      "D) If a file is readable"
    ],
    correctAnswer: "B) If end-of-file has been reached",
    explanation: "`feof` returns non-zero if the end of the file has been reached.",
    difficulty: "easy",
    category: "coding",
    subcategory: "c",
    topic: "File I/O"
  },
  {
    questionText: "What is the difference between `union` and `struct` memory usage?",
    options: [
      "A) `union` uses less memory than `struct`",
      "B) `struct` uses less memory than `union`",
      "C) They use the same amount",
      "D) Depends on the members"
    ],
    correctAnswer: "A) `union` uses less memory than `struct`",
    explanation: "`union` size is the size of the largest member, `struct` is sum of all members.",
    difficulty: "medium",
    category: "coding",
    subcategory: "c",
    topic: "Structures"
  },
  {
    questionText: "What is the purpose of the `volatile` keyword?",
    options: ["A) To make a variable constant", "B) To indicate that a variable can be changed by external factors", "C) To make a variable static", "D) To allocate memory"],
    correctAnswer: "B) To indicate that a variable can be changed by external factors",
    explanation: "`volatile` tells the compiler that the variable may be changed by something outside the program, preventing optimizations.",
    difficulty: "hard",
    category: "coding",
    subcategory: "c",
    topic: "Keywords"
  },
  {
    questionText: "What does `fgets` do?",
    options: ["A) Writes to a file", "B) Reads a line from a file", "C) Opens a file", "D) Closes a file"],
    correctAnswer: "B) Reads a line from a file",
    explanation: "`fgets` reads a string from a file stream.",
    difficulty: "easy",
    category: "coding",
    subcategory: "c",
    topic: "File I/O"
  }
];

module.exports = cQuestions;