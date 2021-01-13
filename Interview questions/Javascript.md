https://github.com/sudheerj/javascript-interview-questions

# Is JavaScript a compiled or interpreted language?

- JavaScript is an interpreted language
- An interpreter in the browser reads over the JavaScript code, interprets each line, and runs it

# What are Javascript Data types?

Number, String, Boolean, Object, Undefined

# What are falsy values?

false, null, undefined, 0, -0, 0n, " ", NaN

# Undefined vs null

| Null                                                                         | Undefined                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| It is an assignment value which indicates that variable points to no object. | It is not an assignment value where a variable has been declared but has not yet been assigned a value. |
| Type of null is object                                                       | Type of undefined is undefined                                                                          |
| represents the null, empty, or non-existent reference.                       | variable has not been assigned a value                                                                  |
| Indicates the absence of a value for a variable                              | Indicates absence of variable itself                                                                    |
| Converted to zero (0) while performing primitive operations                  | Converted to NaN while performing primitive operations                                                  |

# Undeclared vs Undefined

| undeclared                                                                                  | undefined                                                                              |
| ------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| These variables do not exist in a program and are not declared                              | These variables declared in the program but have not assigned any value                |
| If you try to read the value of an undeclared variable, then a runtime error is encountered | If you try to read the value of an undefined variable, an undefined value is returned. |

# What is isNaN

- The isNaN() function is used to determine whether a value is an illegal number (Not-a-Number) or not.
- This function returns true if the value equates to NaN. Otherwise it returns false.

```
isNaN('Hello') //true
isNaN('100') //false
```

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

# What are modules

- Modules refer to small units of independent, reusable code
- Benefit of module system

1. Maintainability
2. Reusability
3. Namespacing: technique employed to avoid collisions with other objects or variables in the global namespace.

# Pagenation

- The process of dividing a document into discrete pages

1. Offset pagination : Set the limit of numbers of item per one page (set) when send query to database (몇개의 페이지를 가져올 것인지를 정의)
2. Cursor pagination: Cursor is a unique identifier for a specific record, which acts as aa pointer to the next record we want to start querying from to get the next page of results. (어디부터 몇개를 가져올 것인가를 정의)

# What is Cookie

- A cookie is a piece of data that is stored on your computer to be accessed by your browser.
- Saved as key and value pair
- Cookies are used to remember information about the user profile
- When user visit a web page, user profile can be stored in a cookie, next time user visit tha page, cookie remembers the user profile

# What is difference between local Storage and session Storage

- Local storage: persist the data even when the browser is closed
- Session storage: Data gets cleared when the page session ends

# What is promise

- A promise is an object that may produce a single value some time in the future.
- Promise are used to handle asynchromous operation, reducing callback hell, helping writing the cleaner code.
- Promise can have 3 possible states
  → Fulfilled: .then(onFullfillment)
  → Rejected
  → Pending: waiting for being resolved (.then() .catch) or rejected

# What is promise chaining

- The process of executing a sequence of asynchronous tasks one after another using promises

# What is callback function

- A callback function is a function passed into another function as an argument.
- Callbacks are used in a way to make sure that certain code doesn’t execute until the other code finishes execution.

# What is callback hell

Callback Hell is an anti-pattern with multiple nested callbacks which makes code hard to read and debug when dealing with asynchronous logic.

# Why do you need strict mode

- Strict mode is useful to write "secure" JavaScript by notifying "bad syntax" into real errors
- It eliminates accidentally creating a global variable by throwing an error and also throws an error for assignment to a non-writable property, a getter-only property, a non-existing property, a non-existing variable, or a non-existing object.
- How to declare

```
'use strict';
```

# What is the difference between window and document

| Window                                                                        | Document                                                                                      |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| It is the root level element in any web page                                  | It is the direct child of the window object. This is also known as Document Object Model(DOM) |
| By default window object is available implicitly in the page                  | You can access it via window.document or document.                                            |
| It has methods like alert(), confirm() and properties like document, location | It provides methods like getElementById, getElementByTagName, createElement etc               |

# What is an event flow

- The order in which event is received on the web page
- Two ways of event flow

1. Event Capturing(Top to Botton): event propagation where the event is first captured by the outermost element
2. Event Bubbling(Bottom to Top): the event first triggers on the innermost target element → this is basic setting
3. Target phase: when event happen in target element

# What is the difference between an attribute and a property

- Attributes are defined on the HTML markup
- Properties are defined on the DOM. For example, the below HTML element has 2 attributes type and value,

```
//HTML elements
<input type="text" value="Name:">
//Dom attributes
const input = document.querySelector('input');
console.log(input.getAttribute('value')); // Good morning
```

# What is the use of preventDefalut

- Cancel the default action or behaviour that belongs to the event
  <br/>ex) prevent from submission when click on submit button

# What is the use of stopPropagation method

- stop the event from bubbling up the event chain

# What is same-origin policy

- a policy that prevents JavaScript from making requests across domain boundaries

# What is CORS error & How to solve it

- CORS is a security mechanism built into (all) modern web-browsers
- CORS blocks all the http requests from your front end to any API that is not in the same “Origin” (domain, protocol, and port—which is the case most of the time)
- How to solve

1. Set Access-Control-Allow-Origin: \* from server side
2. Use Proxy

# setTimeout vs setInterval

- setInterval: call a function or evaluate an expression at specified intervals of milliseconds
- setTimeout: call a function or evaluate an expression after a specified number of milliseconds

# How do you get the current url with javascript

```
console.log('location.href', window.location.href); // Returns full URL
```

# Http request

# What is REST Api
