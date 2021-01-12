https://github.com/sudheerj/javascript-interview-questions

# What are Javascript Data types?

Number, String, Boolean, Object, Undefined

# What are falsy values?

false, null, undefined, 0, -0, 0n, " ", NaN

# Tenary Operator

simplified if / else statement, condition ? true : false

# Deep copy vs shallow copy

- Shallow copy is pointing a same space in memory,
- deep copy create new memory

# .forEach vs map

- forEach() — executes a provided function once for each array element.
- map() — creates a new array with the results of calling a provided function on every element in the calling array.

# What is a prototype & prototype chain

- Prototype: Prototypes are the mechanism by which JavaScript objects inherit features from one another
- Prototype chaining: The prototype on object instance is available through Object.getPrototypeOf(object) or proto property whereas prototype on constructors function is available through object.prototype.

# What is 'this'

- this keyword refers to the object it belongs to.
  Use bind, call, and apply methods to explicitly determine the value of this.

# What is the difference between Call, Apply, Bind

- Call: The call() method invokes a function with a given this value and arguments provided one by one
- Apply: Invokes the function and allows you to pass in arguments as an array
- bind: returns a new function, allowing you to pass in an array and any number of arguments

# What is JSON and its common operations

- JSON: a text-based data format, It is useful when you want to transmit data across a network and it is basically just a text file
- Parsing: Converting a string to a native object

```
JSON.parse(text)
```

- Stringification: Converting a native object to a string so it can be transmitted across the network

```
JSON.stringify(object)
```

# Slice vs Splice

- Slice: Returns the selected elements in an array as a new array object.
- Splice: Used either adds/removes items to/from an array, and then returns the removed item.

| Slice                                        | Splice                                          |
| -------------------------------------------- | ----------------------------------------------- |
| Dosen't modify the original array(immutable) | modifies the original array                     |
| Returns the subset of original array         | Returns the deleted elemnts as array            |
| Used to pic the elements from array          | Used to insert or delete elements to/from array |

# Comparte different types of tests

1. Unit test: It is a testing method by which individual units of source code are tested to determine if they are ready to use.
2. Integration test: Integration testing is executed by testers and tests integration between software modules.
3. E2E test: End-to-end testing is a technique that tests the entire software product from beginning to end to ensure the application flow behaves as expected

# Compare different types of developement methods

1. Test driven development : development process relying on software requirements being converted to test cases before software is fully developed, and tracking all software development by repeatedly testing the software against all test cases.
2. behavior driven development: tests are more user-focused and based on the system’s behavior. improves communication between tech and non-tech teams and stakeholders.

# What's the difference between == and === operators

1. ===, !== : Strict → take type of variable in consideration
2. ==, != : type-converting → make type correction/conversion based upon values of variables

```
0 == false   // true
0 === false  // false
1 == "1"     // true
1 === "1"    // false
null == undefined // true
null === undefined // false
'0' == false // true
'0' === false // false
[]==[] or []===[] //false, refer different objects in memory
{}=={} or {}==={} //false, refer different objects in memory
```

# Function arguments vs parameters

- Parameter is defined in function declaration
- Arguments is the the actual data passed into parameter

# What is arrow function

- An arrow function is a shorter syntax for a function expression and does not have its own this, arguments, super, or new.target

# What is first class function

- First class function is treated like any other variable
- Can be passed as argument for callback

# First order function

- Function that doesn’t accept another function as an argument and doesn’t return a function as its return value.

# Higher order function

- functions that take other functions - callback functions as arguments
- First order func vs Higer order func

```
const firstOrderFunc = () => console.log ('Hello I am a First order function');
const higherOrder = ReturnFirstOrderFunc => ReturnFirstOrderFunc ();
higherOrder (firstOrderFunc);
```

# Currying function

- Currying is the process of taking a function with multiple arguments and turning it into a sequence of functions each with only a single argument

# Pure function

- Function where the return value is only determined by its arguments without any side effects

# Let vs Var

| var                       | let                         |
| ------------------------- | --------------------------- |
| It has function scope     | It has block scope          |
| Variables will be hoisted | Hoisted but not initialized |

# What is Hoisting

- Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

# What are closures

- A closure is the combination of a function and the lexical environment within which that function was declared.
- makes it possible for a function to have "private" variables.
