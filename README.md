# JavaScript Functional Programming 

## A functional programming reference guide 

### A study in functional programming detailing in a practical way the core methodologies and patterns

### ToC:

[Definition and Introduction](#Definition-and-Introduction)<br>
[Cloning](#Cloning)<br>
[Singular Reusable Pattern](#Singular-Reusable-Pattern)<br>
[Arrow Functions](#Arrow-Functions)<br>
[Composing a Pipe](#Pipe)<br>

------------------------------------------------------------------------------------------------------------------------------


## Definition and Introduction
There are many advantages to adding functional style coding to a project whether it is used almost exclusively or in conjunction with other styles like OOP.

Below is a definition of the functional approach as quoted by Eric Elliot, who is an expert in this field:

'Functional programming is the process of building software by composing pure functions, avoiding shared state, mutable data and side-effects. Functional programming is declarative rather than imperative, and application state flows through pure functions.'

This is an extremely concise definition and one that is difficult at first to fully grasp so lets break it down before moving on:

**Pure functions** only work with data that is passed in, they do not mutate this data and they do not effect any other data that is not within the scope of the function. And finally, everyone has heard this one, given the same input a pure function will always produce the same output.

Pure functions do not cause **side effects**, meaning they do not affect any variable outside the scope of the function. Side note, the closure scope is regarded as outside the scope of the function when talking about shared state and side effects.  This includes triggering other functions that do have side effects.  One thing to note here is being mindful of making a true copy of an input before working on it and not just referencing and mutating the original data. More on this later.  

We touched on **avoiding shared state** above, this refers to an object that is either global or within a closure scope but outside the scope of any functions that alter it's state.  A shared state exists when this objects state is altered by more than one function.  To prevent this, an object's state/data is passed into the function, which is then cloned, updated and then a new object with its new state is returned.  To recap, state is not shared, it is passed from one function to another.

**Functional programming is declarative rather than imperative**. In practical terms this means using JavaScript built in methods where possible, for example filter, map, reduce.  This has major benefits, firstly we write less code and can keep things cleaner. Also its much easier to reason about a chain of built in JavaScript methods than to try and decipher custom functions that someone else has written.  A lot of these methods also make a copy, for example map works like forEach but makes a copy instead of mutating the original data and slice also returns a new array.  In fact reduce is used in the construction of the pipe function which we will dive into later. 

A block of code built from pure functions is easier to reason about and test and each individual function can be reused and used as a building block to easily compose larger functions to solve different tasks.  Managing state seems to be more robust and the conscious effort to never mutate data has a side effect of its own: eliminating many typical bugs during development.

-----------------------------------------------------------------------------------------------------------------------------

## Cloning
As cloning is such a core part of functional programming lets look at three object cloning patterns and the nuances between them. Understanding the differences now will also reduce debugging later. 

`const drinkTwo = {...drink};`

Using the spread operator to spread an array or object into a new array or object is clean and really nice to use.  Its not perfect though, yes it is immutable however it only clones the top layer.  Therefore if you want to clone an array or object that does not have nested layers then this is a great option.

`const drinkTwo = Object.assign({}, drink);`

The above pattern also only provides a shallow clone as any nested layers although included (unlike spreading) are however only a reference to the original object and thus are mutable.

To recap so far, for top level cloning either of the above does the job, however for a true deep clone we want to use this next pattern:

`const drinkTwo = JSON.parse(JSON.stringify(drink));`

Stringify returns the object as a JSON string, then parse returns a new deep clone object from the string and this returned object is assigned to the new variable.

There is one caveat to note though, this clone will not include any methods that are in the cloned object.

----------------------------------------------------------------------------

## Singular Reusable Pattern

Below is one example of the smallest building block.  This includes a single function that does one task, takes an input, makes a copy and returns a new value. It can be chained and used as part of a larger composition.  Depending on experience, different levels of conciseness are more readable to each dev so I will refactor the same example:

![Screenshot from 2021-02-17 06-39-50](https://user-images.githubusercontent.com/73107656/108165778-09dc7380-70eb-11eb-98ef-fc178955dbee.png)

When using arrow functions if there is only one argument parentheses are not needed and side note, if curly braces are used (when there is more than one statement), the return keyword is required:

![Screenshot from 2021-02-17 08-30-52](https://user-images.githubusercontent.com/73107656/108176925-7c088480-70fa-11eb-94ba-cf2d01db3d3e.png)

These patterns are similar which ever built in method is used and using them thereafter is the same. They can be used on there own, or layered with each return value being saved to a new variable:

![Screenshot from 2021-02-17 06-56-24](https://user-images.githubusercontent.com/73107656/108167235-48732d80-70ed-11eb-9bc3-4bd706ad91d9.png)

Or nested as callbacks which is at the heart of function composition.  The trick is to work from in to out which is how they are layered on the call stack.    

![Screenshot from 2021-02-17 07-08-51](https://user-images.githubusercontent.com/73107656/108168759-bcaed080-70ef-11eb-8631-7c86c6ecce2d.png)

Later we will compose these functions into a pipe, building the pipe from the ground up.

--------------------------------------------------------------------
## Arrow Functions

The first example is of a function not using an arrow function:

![Screenshot from 2021-02-17 08-47-12](https://user-images.githubusercontent.com/73107656/108178839-d1459580-70fc-11eb-9a1e-67b4e2f41873.png)

This is the same function using the arrow function pattern:

![Screenshot from 2021-02-17 08-48-48](https://user-images.githubusercontent.com/73107656/108178983-fc2fe980-70fc-11eb-88d8-ff2623baeace.png)

This is an arrow function using the curly braces and return keyword as there is more than one statement:

![Screenshot from 2021-02-17 08-49-38](https://user-images.githubusercontent.com/73107656/108179079-179af480-70fd-11eb-924e-3db0703ce846.png)

------------------------------------------------------------------

## Pipe

Compose and Pipe are functions that let us easily use singular functions as building blocks to create more complex reusable functions. Compose is constructed using reduceRight and Pipe uses reduce.  We will focus on Pipe as it allows us to compose new functions from left to right and top to bottom as apposed to Compose which is back to front and upside down. First we will create the Pipe function, then we will compose a complex function using our new pipe.

![Screenshot from 2021-02-17 10-37-39](https://user-images.githubusercontent.com/73107656/108192636-6bf9a080-710c-11eb-870b-43cb23a2a9df.png)

------------------------------------------------------------

## Arity and Currying

When a function takes a single input it has an arity of one. When composing a pipe we only want the pipe to deal with one input in and out of each function, so if functions within the pipe require more than one input currying is used to manage this. Currying takes care of the first arguments so the pipe only deals with the last argument being passed and worked on by each individual function.

------**Currying deep dive section to be added here**------

--------------------------------------------------------------------- 