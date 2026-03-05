// Seed data for Python coding questions

const pythonQuestions = [
  {
    questionText: "What does the following list comprehension produce? `[x*x for x in range(3)]`",
    options: ["A) [1,4,9]", "B) [0,1,4]", "C) [0,1,2]", "D) [\"0\", \"1\", \"4\"]"],
    correctAnswer: "B) [0,1,4]",
    explanation: "Range(3) yields 0,1,2; each is squared resulting in [0,1,4]",
    difficulty: "easy",
    category: "coding",
    subcategory: "python",
    topic: "Syntax"
  },
  {
    questionText: "Which of the following data types is immutable in Python?",
    options: ["A) list", "B) dict", "C) set", "D) tuple"],
    correctAnswer: "D) tuple",
    explanation: "Tuples cannot be changed after creation, whereas lists, dicts and sets are mutable.",
    difficulty: "medium",
    category: "coding",
    subcategory: "python",
    topic: "Data Types"
  },
  {
    questionText: "What is the output of `print('Hello' * 2)` in Python?",
    options: ["A) HelloHello", "B) Hello 2", "C) Error", "D) None"],
    correctAnswer: "A) HelloHello",
    explanation: "String repetition with `*` concatenates the string the specified number of times.",
    difficulty: "easy",
    category: "coding",
    subcategory: "python",
    topic: "Operators"
  },
  {
    questionText: "What is the purpose of the `if __name__ == '__main__':` block?",
    options: [
      "A) To define the main function",
      "B) To check if the script is run directly",
      "C) To import modules",
      "D) To handle exceptions"
    ],
    correctAnswer: "B) To check if the script is run directly",
    explanation: "This block ensures code runs only when the script is executed directly, not when imported as a module.",
    difficulty: "medium",
    category: "coding",
    subcategory: "python",
    topic: "Modules"
  },
  {
    questionText: "What does the `len()` function return for a dictionary?",
    options: [
      "A) Number of keys",
      "B) Number of values",
      "C) Number of key-value pairs",
      "D) Length of the longest key"
    ],
    correctAnswer: "C) Number of key-value pairs",
    explanation: "len() on a dictionary returns the number of key-value pairs it contains.",
    difficulty: "easy",
    category: "coding",
    subcategory: "python",
    topic: "Dictionaries"
  },
  {
    questionText: "What is a lambda function in Python?",
    options: [
      "A) A function defined with def",
      "B) An anonymous function",
      "C) A built-in function",
      "D) A recursive function"
    ],
    correctAnswer: "B) An anonymous function",
    explanation: "Lambda functions are small anonymous functions defined with the lambda keyword.",
    difficulty: "medium",
    category: "coding",
    subcategory: "python",
    topic: "Functions"
  },
  {
    questionText: "What is the difference between `is` and `==` in Python?",
    options: [
      "A) `is` checks identity, `==` checks equality",
      "B) `==` checks identity, `is` checks equality",
      "C) They are the same",
      "D) `is` is for numbers, `==` for strings"
    ],
    correctAnswer: "A) `is` checks identity, `==` checks equality",
    explanation: "`is` checks if two variables refer to the same object, `==` checks if they have the same value.",
    difficulty: "medium",
    category: "coding",
    subcategory: "python",
    topic: "Operators"
  },
  {
    questionText: "What does the `yield` keyword do?",
    options: [
      "A) Returns a value and ends the function",
      "B) Pauses the function and returns a value",
      "C) Raises an exception",
      "D) Imports a module"
    ],
    correctAnswer: "B) Pauses the function and returns a value",
    explanation: "`yield` makes a function a generator, pausing execution and returning a value each time.",
    difficulty: "hard",
    category: "coding",
    subcategory: "python",
    topic: "Generators"
  },
  {
    questionText: "What is the purpose of `__init__` in a class?",
    options: [
      "A) To create the class",
      "B) To initialize object attributes",
      "C) To define methods",
      "D) To inherit from another class"
    ],
    correctAnswer: "B) To initialize object attributes",
    explanation: "`__init__` is the constructor method called when creating a new instance of a class.",
    difficulty: "easy",
    category: "coding",
    subcategory: "python",
    topic: "Classes"
  },
  {
    questionText: "What is list slicing in Python?",
    options: [
      "A) Creating a new list from a portion of another list",
      "B) Sorting a list",
      "C) Reversing a list",
      "D) Finding an element in a list"
    ],
    correctAnswer: "A) Creating a new list from a portion of another list",
    explanation: "List slicing uses [start:stop:step] to extract a sublist from a list.",
    difficulty: "easy",
    category: "coding",
    subcategory: "python",
    topic: "Lists"
  },
  {
    questionText: "What is the output of `print([1,2,3] + [4,5])`?",
    options: ["A) [1,2,3,4,5]", "B) [5,7,8]", "C) Error", "D) [1,2,3][4,5]"],
    correctAnswer: "A) [1,2,3,4,5]",
    explanation: "`+` concatenates two lists into a new list.",
    difficulty: "easy",
    category: "coding",
    subcategory: "python",
    topic: "Lists"
  },
  {
    questionText: "What does `import *` do?",
    options: [
      "A) Imports all functions from a module",
      "B) Imports the module itself",
      "C) Imports specific functions",
      "D) Creates a new module"
    ],
    correctAnswer: "A) Imports all functions from a module",
    explanation: "`from module import *` imports all public names from the module into the current namespace.",
    difficulty: "medium",
    category: "coding",
    subcategory: "python",
    topic: "Modules"
  },
  {
    questionText: "What is a decorator in Python?",
    options: [
      "A) A function that modifies another function",
      "B) A class attribute",
      "C) A type of loop",
      "D) A string method"
    ],
    correctAnswer: "A) A function that modifies another function",
    explanation: "Decorators are functions that take another function and extend its behavior without modifying it.",
    difficulty: "hard",
    category: "coding",
    subcategory: "python",
    topic: "Decorators"
  },
  {
    questionText: "What is the purpose of `self` in a class method?",
    options: [
      "A) To refer to the class",
      "B) To refer to the instance",
      "C) To call other methods",
      "D) To create new instances"
    ],
    correctAnswer: "B) To refer to the instance",
    explanation: "`self` is a reference to the current instance of the class.",
    difficulty: "easy",
    category: "coding",
    subcategory: "python",
    topic: "Classes"
  },
  {
    questionText: "What is the difference between a list and a tuple?",
    options: [
      "A) Lists are mutable, tuples are immutable",
      "B) Tuples are mutable, lists are immutable",
      "C) Lists use [], tuples use ()",
      "D) Both A and C"
    ],
    correctAnswer: "D) Both A and C",
    explanation: "Lists are mutable and use square brackets, tuples are immutable and use parentheses.",
    difficulty: "easy",
    category: "coding",
    subcategory: "python",
    topic: "Data Types"
  },
  {
    questionText: "What does `enumerate()` do?",
    options: [
      "A) Creates an iterator of tuples with index and value",
      "B) Counts elements in a list",
      "C) Sorts a list",
      "D) Reverses a list"
    ],
    correctAnswer: "A) Creates an iterator of tuples with index and value",
    explanation: "`enumerate()` adds a counter to an iterable and returns it as an enumerate object.",
    difficulty: "medium",
    category: "coding",
    subcategory: "python",
    topic: "Built-ins"
  },
  {
    questionText: "What is a set in Python?",
    options: [
      "A) An ordered collection of unique elements",
      "B) An unordered collection of unique elements",
      "C) A list with duplicates",
      "D) A dictionary without values"
    ],
    correctAnswer: "B) An unordered collection of unique elements",
    explanation: "Sets are unordered collections of unique elements, useful for membership testing.",
    difficulty: "easy",
    category: "coding",
    subcategory: "python",
    topic: "Sets"
  },
  {
    questionText: "What is the purpose of `try-except` blocks?",
    options: [
      "A) To define functions",
      "B) To handle exceptions",
      "C) To create loops",
      "D) To import modules"
    ],
    correctAnswer: "B) To handle exceptions",
    explanation: "`try-except` blocks catch and handle exceptions that occur during execution.",
    difficulty: "easy",
    category: "coding",
    subcategory: "python",
    topic: "Exceptions"
  },
  {
    questionText: "What is list comprehension?",
    options: [
      "A) A way to create lists from iterables",
      "B) A method to sort lists",
      "C) A function to reverse lists",
      "D) A way to copy lists"
    ],
    correctAnswer: "A) A way to create lists from iterables",
    explanation: "List comprehensions provide a concise way to create lists from existing iterables.",
    difficulty: "medium",
    category: "coding",
    subcategory: "python",
    topic: "Lists"
  },
  {
    questionText: "What does `**kwargs` do in a function definition?",
    options: [
      "A) Passes keyword arguments as a dictionary",
      "B) Passes positional arguments as a tuple",
      "C) Defines default parameters",
      "D) Creates a new function"
    ],
    correctAnswer: "A) Passes keyword arguments as a dictionary",
    explanation: "`**kwargs` collects additional keyword arguments into a dictionary.",
    difficulty: "medium",
    category: "coding",
    subcategory: "python",
    topic: "Functions"
  },
  {
    questionText: "What is the output of `print(bool([]))`?",
    options: ["A) True", "B) False", "C) []", "D) Error"],
    correctAnswer: "B) False",
    explanation: "Empty containers like lists, tuples, dicts, etc. are falsy in Python.",
    difficulty: "easy",
    category: "coding",
    subcategory: "python",
    topic: "Built-ins"
  },
  {
    questionText: "What is inheritance in Python?",
    options: [
      "A) Creating multiple classes",
      "B) A class inheriting from another class",
      "C) Defining methods",
      "D) Creating instances"
    ],
    correctAnswer: "B) A class inheriting from another class",
    explanation: "Inheritance allows a class to inherit attributes and methods from another class.",
    difficulty: "easy",
    category: "coding",
    subcategory: "python",
    topic: "Classes"
  },
  {
    questionText: "What does `zip()` do?",
    options: [
      "A) Combines two or more iterables element-wise",
      "B) Sorts iterables",
      "C) Reverses iterables",
      "D) Filters iterables"
    ],
    correctAnswer: "A) Combines two or more iterables element-wise",
    explanation: "`zip()` takes iterables and returns an iterator of tuples pairing elements.",
    difficulty: "medium",
    category: "coding",
    subcategory: "python",
    topic: "Built-ins"
  },
  {
    questionText: "What is the purpose of `__str__` method?",
    options: [
      "A) To create string representations",
      "B) To compare objects",
      "C) To hash objects",
      "D) To copy objects"
    ],
    correctAnswer: "A) To create string representations",
    explanation: "`__str__` defines how an object is converted to a string for display.",
    difficulty: "medium",
    category: "coding",
    subcategory: "python",
    topic: "Classes"
  },
  {
    questionText: "What is the difference between `append()` and `extend()` for lists?",
    options: [
      "A) `append()` adds one element, `extend()` adds multiple",
      "B) `extend()` adds one element, `append()` adds multiple",
      "C) They are the same",
      "D) `append()` is for strings, `extend()` for numbers"
    ],
    correctAnswer: "A) `append()` adds one element, `extend()` adds multiple",
    explanation: "`append()` adds a single element, `extend()` adds elements from an iterable.",
    difficulty: "easy",
    category: "coding",
    subcategory: "python",
    topic: "Lists"
  },
  {
    questionText: "What is a module in Python?",
    options: [
      "A) A function",
      "B) A file containing Python code",
      "C) A class",
      "D) A variable"
    ],
    correctAnswer: "B) A file containing Python code",
    explanation: "A module is a file containing Python definitions and statements.",
    difficulty: "easy",
    category: "coding",
    subcategory: "python",
    topic: "Modules"
  },
  {
    questionText: "What does `super()` do?",
    options: [
      "A) Calls a method from the parent class",
      "B) Creates a new instance",
      "C) Deletes an instance",
      "D) Copies an object"
    ],
    correctAnswer: "A) Calls a method from the parent class",
    explanation: "`super()` returns a proxy object to call methods from the parent class.",
    difficulty: "medium",
    category: "coding",
    subcategory: "python",
    topic: "Inheritance"
  },
  {
    questionText: "What is the output of `print('a' in 'apple')`?",
    options: ["A) True", "B) False", "C) Error", "D) 'a'"],
    correctAnswer: "A) True",
    explanation: "`in` checks for substring presence in strings.",
    difficulty: "easy",
    category: "coding",
    subcategory: "python",
    topic: "Strings"
  },
  {
    questionText: "What is a generator in Python?",
    options: [
      "A) A function that returns a list",
      "B) A function that yields values one at a time",
      "C) A type of class",
      "D) A built-in data type"
    ],
    correctAnswer: "B) A function that yields values one at a time",
    explanation: "Generators are functions that use `yield` to return values lazily.",
    difficulty: "hard",
    category: "coding",
    subcategory: "python",
    topic: "Generators"
  },
  {
    questionText: "What does `map()` do?",
    options: [
      "A) Applies a function to each item in an iterable",
      "B) Filters items in an iterable",
      "C) Reduces an iterable to a single value",
      "D) Sorts an iterable"
    ],
    correctAnswer: "A) Applies a function to each item in an iterable",
    explanation: "`map()` applies a function to every item of an iterable and returns a map object.",
    difficulty: "medium",
    category: "coding",
    subcategory: "python",
    topic: "Built-ins"
  },
  {
    questionText: "What is the purpose of `pass` statement?",
    options: [
      "A) To skip execution",
      "B) To do nothing (placeholder)",
      "C) To break out of loops",
      "D) To continue loops"
    ],
    correctAnswer: "B) To do nothing (placeholder)",
    explanation: "`pass` is a null operation used as a placeholder in code blocks.",
    difficulty: "easy",
    category: "coding",
    subcategory: "python",
    topic: "Syntax"
  },
  {
    questionText: "What is the difference between `range()` and `xrange()`?",
    options: [
      "A) `range()` returns a list, `xrange()` returns an iterator",
      "B) `xrange()` returns a list, `range()` returns an iterator",
      "C) They are the same in Python 3",
      "D) `range()` is for integers, `xrange()` for floats"
    ],
    correctAnswer: "C) They are the same in Python 3",
    explanation: "In Python 3, `range()` returns an iterator (like `xrange()` in Python 2).",
    difficulty: "medium",
    category: "coding",
    subcategory: "python",
    topic: "Built-ins"
  },
  {
    questionText: "What does `filter()` do?",
    options: [
      "A) Applies a function to each item",
      "B) Filters items based on a condition",
      "C) Sorts items",
      "D) Groups items"
    ],
    correctAnswer: "B) Filters items based on a condition",
    explanation: "`filter()` constructs an iterator from elements of an iterable for which a function returns true.",
    difficulty: "medium",
    category: "coding",
    subcategory: "python",
    topic: "Built-ins"
  },
  {
    questionText: "What is the output of `print(3 // 2)`?",
    options: ["A) 1.5", "B) 2", "C) 1", "D) Error"],
    correctAnswer: "C) 1",
    explanation: "`//` is floor division, which returns the largest integer less than or equal to the result.",
    difficulty: "easy",
    category: "coding",
    subcategory: "python",
    topic: "Operators"
  },
  {
    questionText: "What is a dictionary comprehension?",
    options: [
      "A) A way to create dictionaries from iterables",
      "B) A method to sort dictionaries",
      "C) A function to reverse dictionaries",
      "D) A way to copy dictionaries"
    ],
    correctAnswer: "A) A way to create dictionaries from iterables",
    explanation: "Dictionary comprehensions provide a concise way to create dictionaries.",
    difficulty: "medium",
    category: "coding",
    subcategory: "python",
    topic: "Dictionaries"
  },
  {
    questionText: "What does `isinstance()` do?",
    options: [
      "A) Checks if an object is an instance of a class",
      "B) Creates an instance",
      "C) Compares types",
      "D) Converts types"
    ],
    correctAnswer: "A) Checks if an object is an instance of a class",
    explanation: "`isinstance()` checks if an object is an instance or subclass of a class.",
    difficulty: "easy",
    category: "coding",
    subcategory: "python",
    topic: "Built-ins"
  },
  {
    questionText: "What is the purpose of `__name__`?",
    options: [
      "A) To define the class name",
      "B) To check how the module is being used",
      "C) To import modules",
      "D) To create functions"
    ],
    correctAnswer: "B) To check how the module is being used",
    explanation: "`__name__` is set to '__main__' when the module is run directly.",
    difficulty: "medium",
    category: "coding",
    subcategory: "python",
    topic: "Modules"
  },
  {
    questionText: "What is the output of `print([x for x in range(5) if x % 2 == 0])`?",
    options: ["A) [0,2,4]", "B) [1,3]", "C) [0,1,2,3,4]", "D) Error"],
    correctAnswer: "A) [0,2,4]",
    explanation: "List comprehension with condition filters even numbers from 0 to 4.",
    difficulty: "easy",
    category: "coding",
    subcategory: "python",
    topic: "Lists"
  },
  {
    questionText: "What is method resolution order (MRO) in Python?",
    options: [
      "A) The order in which methods are called",
      "B) The order in which classes are searched for methods",
      "C) The order of method definitions",
      "D) The order of inheritance"
    ],
    correctAnswer: "B) The order in which classes are searched for methods",
    explanation: "MRO determines the order in which base classes are searched when looking for a method.",
    difficulty: "hard",
    category: "coding",
    subcategory: "python",
    topic: "Inheritance"
  },
  {
    questionText: "What does `reduce()` do?",
    options: [
      "A) Applies a function cumulatively to items",
      "B) Filters items",
      "C) Maps items",
      "D) Sorts items"
    ],
    correctAnswer: "A) Applies a function cumulatively to items",
    explanation: "`reduce()` applies a function of two arguments cumulatively to the items of a sequence.",
    difficulty: "hard",
    category: "coding",
    subcategory: "python",
    topic: "Built-ins"
  }
];

module.exports = pythonQuestions;