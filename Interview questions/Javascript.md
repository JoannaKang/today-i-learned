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

# let vs const

- let: can be re-declared
- const: Can't be re-declared, but can mutate

```
const userList = [];
userList.push('John'); // Can mutate even though it can't re-assign
console.log(userList); // ['John']
```

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
- Promise(()=>{}).then(()=>{}).catch(()=>{}).finally(()=>{})

# What is async function

- function declared with the async keyword which enables asynchronous, promise-based behavior to be written in a cleaner style by avoiding promise chains.

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

# How do you detect a mobile browser

```
window.mobilecheck = function() {
  var mobileCheck = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) mobileCheck = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return mobileCheck;
};
```

# What is a spread operator

- Spread operator allows iterables( arrays / objects / strings ) to be expanded into single arguments/elements.

# What is an anonymous function

- An anonymous function is a function without a name
- Anonymous functions are commonly assigned to a variable name or used as a callback function

# What is the purpose of switch-case

- The switch case statement in JavaScript is used for decision making purposes
- using the switch case statement is going to be more convenient than if-else statements

# Various statements in error handling

1. try: This statement is used to test a block of code for errors
2. catch: This statement is used to handle the error
3. throw: This statement is used to create custom errors.
4. finally: This statement is used to execute code after try and catch regardless of the result.

# What is node.js

- Node.js is an open-source, Javascript runtime environment on Chrome’s V8 that lets you run Javascript outside of browser

# What is call stack

- Call Stack is a data structure for javascript interpreters to keep track of function calls in the program

1. Whenever you call a function for its execution, you are pushing it to the stack.
2. Whenever the execution is completed, the function is popped out of the stack.
   https://github.com/sudheerj/javascript-interview-questions#What-is-call-stack

# What is an event loop

- The Event Loop is a queue of callback functions.
- When an async function executes, the callback function is pushed into the queue.

# type coersion

- Javascript is dynamic typing language,
- Process of converting values from one type to another
- Implicit type coercion: data type can be converted between different types automatically

1. String conversion

```
String(123) //explicit
123 + '' //implicit
```

2. Numeric conversion

```
Number('123') //explicit
+'123' //implicit
```

```
true + false             // 1
12 / "6"                 // 2
"number" + 15 + 3        // 'number153'
15 + 3 + "number"        // '18number'
[1] > null               // true
"foo" + + "bar"          // 'fooNaN'
'true' == true           // false
false == 'false'         // false
null == ''               // false
!!"false" == !!"true"    // true
['x'] == 'x'             // true
[] + null + 1            // 'null1'
[1,2,3] == [1,2,3]       // false
{}+[]+{}+[1]             // '0[object Object]1'
!+[]+[]+![]              // 'truefalse'
new Date(0) - 0          // 0
new Date(0) + 0          // 'Thu Jan 01 1970 02:00:00(EET)0'
```

# How to find HTML element in DOM

- document.getElementById(id): It finds an element by Id
- document.getElementsByTagName(name): It finds an element by tag name
- document.getElementsByClassName(name): It finds an element by class name

# What is V8 engine

- V8 is an open source high-performance JavaScript engine used by the Google Chrome browser, written in C++. It is also being used in the node.js project.

# Destructuring

- The destructuring assignment is a JavaScript expression that makes it possible to unpack values from arrays or properties from objects into distinct variables.
- It helps to avoid setting default values separately for each assignment.

# What is MVC

# CSS positioning

- Static: They will go next to each other or under each other if no space
- Relative:
- Absolute: Taken out of the flow / dom and just foat in top left corner
- fixed: will go wherever you tell it to go but not effected by scroll

# CSS Display

- Block: takes all space on his horizontal
- Inline: Allows elements to stack

# EM vs REM

# z-index

# Http request

# What is REST Api entail

# what is Closure & scope

- 참고 - 스코프와 클로저의 관계 : https://2ssue.github.io/common_questions_for_Web_Developer/docs/Javascript/5_clouser&scope.html#%E1%84%8B%E1%85%AD%E1%84%8B%E1%85%A3%E1%86%A8
- 참고2: https://meetup.toast.com/posts/86

* 스코프
  - the current context of code, which determines the accessibility of variables to JavaScript.
    - Global variables are those declared outside of a block
    - Local variables are those declared inside of a block
  - 상수, 변수들의 접근이 허용된 영역
  - 스코프 체인? 스코프 안쪽에 선언된 변수들부터 접근 후, 바깥의 스코프로 접근하게 된다. (밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.)
* 클로저:
  - A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
  - A closure is the combination of a function and the lexical environment within which that function was declared
  - a closure gives you access to an outer function’s scope from an inner function.
  - 실행 스택과 관련 없는 스코프의 변수(비공개 변수)를 scope chain에 의해 사용할 수 있게 된 형태를 말한다.
  - 함수가 선언된 환경의 (렉시컬) 스코프를 기억하여 함수가 스코프 밖에서 실행될 때에도 이 스코프에 접근할 수 있게 함?
  - 내부 함수는 외부 함수의 지역변수에 접근할 수 있는데 외부 함수의 실행이 끝나서 외부함수가 소멸된 이후에도 내부 함수가 외부 함수의 변수에 접근할 수 있다. 이러한 메커니즘을 클로저라고 한다?
