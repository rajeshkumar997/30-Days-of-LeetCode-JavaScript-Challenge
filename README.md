# 30-Days-of-LeetCode-JavaScript-Challenge

# Important topic of Javascript

## Function Syntax
In JavaScript, there are two main ways to declare a function. One of which is to use the function keyword.

## Basic Syntax
The syntax is:
```js
function f(a, b) {
  const sum = a + b;
  return sum;
}
console.log(f(3, 4)); // 7
```
In this example, f is the name of the function. (a, b) are the arguments. You can write any logic in the body and finally return a result. You are allowed to return nothing, and it will instead implicitly return undefined.

## Anonymous Function
You can optionally exclude the name of the function after the function keyword.
```js
var f = function(a, b) {
  const sum = a + b;
  return sum;
}
console.log(f(3, 4)); // 7
```
## Immediately Invoked Function Expression (IIFE)
You can create a function and immediately execute it in Javascript.
```js
const result = (function(a, b) {
  const sum = a + b;
  return sum;
})(3, 4);
console.log(result); // 7
```
Why would you write code like this? It gives you the opportunity to encapsulate a variable within a new scope. For example, another developer can immediately see that sum can't be used anywhere outside the function body.

## Functions Within Functions
A powerful feature of JavaScript is you can actually create functions within other functions and even return them!
```js
function createFunction() {
  function f(a, b) {
    const sum = a + b;
    return sum;
  }
  return f;
}
const f = createFunction();
console.log(f(3, 4)); // 7
```
In this example, createFunction() returns a new function. Then that function can be used as normal.

## Function Hoisting
JavaScript has a feature called hoisting where a function can sometimes be used before it is initialized. You can only do this if you declare functions with the function syntax.
```js
function createFunction() {
  return f;
  function f(a, b) {
    const sum = a + b;
    return sum;
  }
}
const f = createFunction();
console.log(f(3, 4)); // 7
```
In this example, the function is returned before it is initialized. Although it is valid syntax, it is sometimes considered bad practice as it can reduce readability.

## Closures
An important topic in JavaScript is the concept of closures. When a function is created, it has access to a reference to all the variables declared around it, also known as it's lexical environment. The combination of the function and its enviroment is called a closure. This is a powerful and often used feature of the language.
```js
function createAdder(a) {
  function f(b) {
    const sum = a + b;
    return sum;
  }
  return f;
}
const f = createAdder(3);
console.log(f(4)); // 7
```
In this example, createAdder passes the first parameter a and the inner function has access to it. This way, createAdder serves as a factory of new functions, with each returned function having different behavior.

## Arrow Syntax
The other common way to declare functions is with arrow syntax. In fact, on many projects, it is the preferred syntax.

##Basic Syntax
```js
const f = (a, b) => {
  const sum = a + b;
  return sum;
};
console.log(f(3, 4)); // 7
```
In this example, f is the name of the function. (a, b) are the arguments. You can write any logic in the body and finally return a result. You are allowed to return nothing, and it will instead implicitly return undefined.

## Omit Return
If you can write the code in a single line, you can omit the return keyword. This can result in very short code.
```js
const f = (a, b) => a + b;
console.log(f(3, 4)); // 7
```
## Differences
There are 3 major differences between arrow syntax and function syntax.

- [ ] More minimalistic syntax. This is especially true for anonymous functions and single-line functions. For this reason, this way is generally preferred when passing short anonymous functions to other functions.
- [ ] No automatic hoisting. You are only allowed to use the function after it was declared. This is generally considered a good thing for readability.
- [ ] Can't be bound to this, super, and arguments or be used as a constructor. These are all complex topics in themselves but the basic takeaway should be that arrow functions are simpler in their feature set.
The choice of arrow syntax versus function syntax is primarily down to preference and your project's stylistic standards.

## Rest Arguments
You can use rest syntax to access all the passed arguments as an array. This isn't necessary for this problem, but it will be a critical concept for many problems.

##  Basic Syntax
The syntax is:
```js
function f(...args) {
  const sum = args[0] + args[1];
  return sum;
}
console.log(f(3, 4)); // 7
```
In this example the variable args is [3, 4].

## Why
- [ ] It may not be immediately obvious why you would use this syntax because you can always just pass an array and get the same result.

- [ ] The primary use-case is for creating generic factory functions that accept any function as input and return a new version of the function with some specific modification.

- [ ] By the way, a function that accepts a function and/or returns a function is called a higher-order function, and they are very common in JavaScript.

For example, you can create a logged function factory:
```js
function log(inputFunction) {
  return function(...args) {
     console.log("Input", args);
     const result = inputFunction(...args);
     console.log("Output", result);
     return result;
  }
}
const f = log((a, b) => a + b);
f(1, 2); // Logs: Input [1, 2] Output 3
```
## Closure Example
In Javascript, you can declare functions within other functions and return them. The inner function has access to any variables declared above it.
```js
function createAdder(a) {
  return function add(b) {
    const sum = a + b;
    return sum;
  }
}
const addTo2 = createAdder(2);
addTo2(5); // 7
```
The inner function add has access to a. This allows the outer function to serve as a factory of new functions, each with different behavior.

## Closures Versus Classes
You may notice that in the above example createAdder is very similar to a class constructor.
```js
class Adder {
  constructor(a) {
     this.a = a;
  }

  add(b) {
    const sum = this.a + b;
    return sum;
  }
}
const addTo2 = new Adder(2);
addTo2.add(5); // 7
```
Besides differences in syntax, both code examples essentially serve the same purpose. They both allow you to pass in some state in a "constructor" and have "methods" that access this state.

## Classes and Prototypes
You can also define classes in JavaScript. The classes's constructor returns an object which is an instance of that class.
```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("My name is", this.name);
  }
}

const alice = new Person("Alice", 25);
alice.greet(); // Logs: "My name is Alice"
```
JavaScript implements classes with special objects call prototypes. All the methods (in this case greet) are functions stored on the object's prototype.

To make this concrete, the behavior of the above code could be replicated with the following code:
```js
const alice = {
  name: "Alice",
  age: 25,
  __proto__: {
    greet: function() {
      console.log("My name is", this.name);
    }
  }
};
alice.greet(); // Logs: "My name is Alice"
```
Looking at this code, you might wonder "How can you access the greet method even though it's not a key on the alice object"?

The reason is that accessing keys on an object is actually slightly more complicated than just looking at the object's keys. There is actually an algorithm that traverse the prototype chain. First, JavaScript looks at the keys on the object. If the requested key wasn't found, it then looks on the keys of the prototype object. If it still wasn't found, it looks at the prototype's prototype, and so on. This is how inheritance is implemented in JavaScript!

You might also wonder why JavaScript has this strange prototype concept at all. Why not just store the functions on the object itself? The answer is efficiency. Every time a new Person is created, age and name fields are added to the object. However only a single reference to the prototype object is added. So no matter how many instances of Person are created or how many methods are on the class, only a single prototype object is generated.

## Memoization
To give a concrete example of memoization, here is some code without memoization.
```js
let callCount = 0;
const add = (a, b) => {
  callCount += 1;
  return a + b;
}

add(2, 2); // 4
console.log(callCount); // 1
add(2, 2); // 4
console.log(callCount); // 2
add(2, 2); // 4
console.log(callCount); // 3
```
As expected, callCount is incremented every time add is called.

However if we apply memoization:
```js
let callCount = 0;
const add = (a, b) => {
  callCount += 1;
  return a + b;
};
const memoizedAdd = memoize(add);

memoizedAdd(2, 2); // 4
console.log(callCount); // 1
memoizedAdd(2, 2); // 4
console.log(callCount); // 1
memoizedAdd(2, 2); // 4
console.log(callCount); // 1
```
We can see that callCount was only incremented the first time memoizedAdd was called. Each subsequent time (2, 2) was passed, the memoization logic detected that those arguments were passed before and it instead immediately returned the cached value (4) without calling add.

Avoiding adding 2 numbers is obviously not much of an optimization, but you could imagine memoizing a more complex function could result in serious performance gains.

## Pure Functions
It is important to note that memoization only works correctly for pure functions. A pure function is defined as function that always returns the same output given the same inputs and doesn't have any side-effects.

For example, suppose you attempted to memoize the impure function Date.now which returns the current time in milliseconds since the unix epoch.
```js
const getCurrentTimeMemoized = memoize(Date.now);

getCurrentTimeMemoized(); // 1683784131157
getCurrentTimeMemoized(); // 1683784131157
getCurrentTimeMemoized(); // 1683784131157
```
getCurrentTimeMemoized correctly returns the current time the first time it is called. But each subsequent time, it incorrectly returns the same value.

Similarly, suppose you have a function with a side-effect like uploading data to a database.
```js
function uploadRow(row) {
  // upload logic
}

const memoizedUpload = memoize(uploadRows);
memoizedUpload('Some Data'); // successful upload
memoizedUpload('Some Data'); // nothing happens
```
The first time memoizedUpload, data is correctly uploaded to the database, but each subsequent time, nothing will happen.

The fact you can only apply this optimization on pure functions is a good reason to try to make functions pure when possible.

## Memoization Use-cases in Web Development
There are countless use-cases of memoization but we can discuss a few.

## Caching Website Files
A large website often consists of many JavaScript files which are dynamically downloaded when a user visits different pages. A pattern is sometimes employed where the filename is based on a hash of the file's content. That way, when the web browser requests a filename that was already requested before, it can load the file locally from disk rather than have to download it again.

## React Components
React is a highly popular library for building user interfaces, especially for single-page applications. One of its core principles is the idea of breaking down your application into separate components. Each of these components is responsible for rendering a distinct part of the app's HTML.

For example you might have a component like this:
```js
const TitleComponent = (props) => {
  return <h1>{props.title}</h1>;
};
```
The above function will get called every time the parent component renders, even if title was not changed. Performance can be improved by calling React.memo on it, avoiding unnecessary renders.
```js
const TitleComponent = React.memo((props) => {
  return <h1>{props.title}</h1>;
});
```
Now, TitleComponent will only re-render if the title has changed, thereby improving the performance of the application.

## Promise in javascript
A promise in JavaScript is an object representing the eventual completion or failure of an asynchronous operation. Essentially, it's a returned object to which you attach callbacks, as opposed to passing callbacks into a function.
```js
let promise = new Promise((resolve, reject) => {
    let condition = true;  // This could be the result of some operation

    // After 1 second, check the condition and resolve or reject the promise
    setTimeout(() => {
        if (condition) {
            resolve('Promise fulfilled!');
        } else {
            reject('Promise rejected!');
        }
    }, 1000);
});

// Attach then() and catch() handlers to the Promise
promise
    .then(value => {
        // This will be executed if the promise is resolved
        console.log(value); // Output: Promise fulfilled!
    })
    .catch(error => {
        // This will be executed if the promise is rejected
        console.log(error);
    });
```

## JavaScript's Event Loop
JavaScript uses a call stack to manage the execution of functions. When a function is called, it's added to the stack. When the function completes, it's removed from the stack. JavaScript, being single-threaded, can only execute one function at a time.

However, this could be problematic if a function takes a long time to execute (like a network request). This is where the Event Loop comes in.

The Event Loop is a continuous loop that checks if the call stack is empty. If it is, it takes the first task from the task queue (also known as the event queue or the callback queue) and pushes it onto the call stack, which immediately executes it.

## Async/await
Async/await can be seen as syntax sugar on top of promises, making asynchronous code easier to write and understand. When we mark a function with the async keyword, it becomes an asynchronous function that automatically returns a promise. Within an async function, we can use the await keyword to pause the execution of the code until the promise is resolved or rejected.

By employing await, we can eliminate the need for explicit .then() and .catch() chains that are typically used with promises. Instead, we can structure our code in a more linear and synchronous-looking manner. This makes it easier to reason about the flow of the program and handle errors in a more concise way.

Example:
```js
// Using explicit .then() and .catch() with promises
fetchData()
  .then(response => {
    // Handle the response
    console.log("Response:", response);
    return processData(response);
  })
  .then(result => {
    // Handle the processed data
    console.log("Processed data:", result);
  })
  .catch(error => {
    // Handle any errors
    console.error("Error:", error);
  });

// Using async/await
async function fetchDataAndProcess() {
  try {
    const response = await fetchData();
    console.log("Response:", response);

    const result = await processData(response);
    console.log("Processed data:", result);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchDataAndProcess();
```
Using explicit .then() and .catch() chains, we have to handle each step of the asynchronous operations separately. It can become complex when multiple promises are involved, leading to nested or chained .then() calls. Additionally, error handling requires a separate .catch() block.

In contrast, the second example utilizes async/await to structure the code in a more linear and synchronous-looking manner. The fetchDataAndProcess() function is marked as async, allowing us to use the await keyword inside it. This eliminates the need for explicit .then() and .catch() chains.

Under the hood, the await keyword halts the execution of the function, allowing other tasks to continue, such as handling user input or animations. The JavaScript engine switches to executing other code until the awaited promise is settled, at which point it resumes executing the remaining code within the async function.

## Promise Chaining
Promise chaining is a technique in JavaScript that allows you to perform multiple asynchronous operations in a sequence, with each operation starting when the previous one has completed. The primary advantage of promise chaining is that it allows you to avoid the "callback hell" or "pyramid of doom" that can result from using nested callbacks to handle asynchronous code. Instead, you can write asynchronous code that almost looks like synchronous code, making it much easier to understand and maintain. Each then in a promise chain receives the result of the previous promise's resolution. This result can be used to inform the next step in the chain. If a promise in the chain is rejected, the chain's subsequent then methods will be skipped until a catch method is found.
```js
fetchData()
  .then(response => {
    console.log("Response:", response);
    return processData(response);  // This returns a new promise
  })
  .then(processedData => {
    console.log("Processed data:", processedData);
    return furtherProcessing(processedData);  // This returns another new promise
  })
  .then(finalResult => {
    console.log("Final result:", finalResult);
  })
  .catch(error => {
    console.error("Error:", error);
  });
  ```
fetchData, processData, and furtherProcessing are all asynchronous functions that return promises. The then methods are chained together, with each one waiting for the previous promise to resolve before starting its operation. If any promise in the chain is rejected, the catch method at the end will be invoked to handle the error.

## Debouncing
This question asks you to implement the debounce higher-order function. After the debounced function is called, the provided function should be called with the same arguments but with some delay t. However, if the debounced function was called again before t milliseconds have elapsed, the execution of the provided function should be cancelled and the timer reset.

To give a concrete example of debounce in action:
```js
const start = Date.now();
function log() {
  console.log(Date.now() - start);
}

setTimeout(log, 10); // logs: 10
setTimeout(log, 20); // logs: 20
setTimeout(log, 50); // logs: 50
setTimeout(log, 60); // logs: 60
```
As expected, the log function is called with the delay specified by setTimeout.

However, if we debounce the log function:
```js
const start = Date.now();
function log() {
  console.log(Date.now() - start);
}
const debouncedLog = debounce(log, 20);

setTimeout(debouncedLog, 10); // cancelled
setTimeout(debouncedLog, 20); // logs: 40
setTimeout(debouncedLog, 50); // cancelled
setTimeout(debouncedLog, 60); // logs: 80
```
In the above example, the function call at t=10ms is cancelled because the call at t=20ms happened within 20ms. The call at t=20ms was delayed by 20ms.

Similarly, the function call at t=50ms is cancelled because the call at t=60ms happened within 20ms. The call at t=60ms was delayed by 20ms.
