# JavaScript Functional Programming 

## A functional programming reference guide 

### A study in functional programming detailing in a practical way the core methodologies and patterns

### ToC:

[Definition & Introduction](##Definition-&-Introduction)<br>
[Cloning](##Cloning)

------------------------------------------------------------------------------------------------------------------------------


## Definition & Introduction
There are many advantages to adding functional style coding to a project whether it is used almost exclusively or in conjunction with other styles like OOP.

Below is a definition of the functional approach as quoted by Eric Elliot, who is an expert in this field:

'Functional programming is the process of building software by composing pure functions, avoiding shared state, mutable data and side-effects. Functional programming is declarative rather than imperative, and application state flows through pure functions.'

This is an extremely concise definition and one that is difficult at first to fully grasp so lets break it down before moving on:

**Pure functions** only work with data that is passed in, they do not mutate this data and they do not effect any other data that is not within the scope of the function. And finally, everyone has heard this one, given the same input a pure function will always produce the same output.

Pure functions do not cause **side effects**, meaning they do not affect any variable outside the scope of the function. Side note, the closure scope is regarded as outside the scope of the function when talking about shared state and side effects.  This includes triggering other functions that do have side effects.  One thing to note here is being mindful of making a true copy of an input before working on it and not just referencing and mutating the original data. More on this later.  

We touched on **avoiding shared state** above, this refers to an object that is either global or within a closure scope but outside the scope of any functions that alter it's state.  A shared state exists when this objects state is altered by more than one function.  To prevent this, no function mutates the object and then returns a reference to the object, but instead clones the object first returning a new object that is then passed on with its new state to the next function.  To recap, state is not shared, it is passed from one function to another.

**Functional programming is declarative rather than imperative**. In practical terms this means using JavaScript built in methods where possible, for example filter, map, reduce.  This has major benefits, firstly we write less code and can keep things cleaner. Also its much easier to reason about a chain of built in JavaScript methods than to try and decipher custom functions that someone else has written.  A lot of these methods also make a copy, for example map works like forEach but makes a copy first, slice also returns a new array.  In fact reduce is used in the construction of the pipe function which we will dive into later. 

A block of code built from pure functions is easier to reason about and test and each individual function can be reused used as a building block to easily compose larger functions to solve different tasks.  Managing state seems to be more robust and the conscious effort to never mutate data has a side effect of its own: eliminating many typical bugs during development.

-----------------------------------------------------------------------------------------------------------------------------

## Cloning
As cloning is such a core part of functional programming lets look at three object cloning patterns and the nuances between them. Understanding the differences now will also reduce debugging later. 

- `const drinkTwo = {...drink};`

Using the spread operator to spread an array or object into a new array or object is clean and really nice to use.  Its not perfect though, yes it is immutable however it only clones the top layer.  Therefore if you want to clone an array or object that does not have nested layers then this is a great option.

- `const drinkTwo = Object.assign({}, drink);`

The above pattern also only provides a shallow clone as any nested layers although included (unlike spreading) are however only a reference to the original object and thus are mutable.

To recap so far, for top level cloning either of the above does the job, however for a true deep clone we want to use this next pattern:

- `const drinkTwo = JSON.parse(JSON.stringify(drink));`

Stringify returns the object as a JSON string, then parse returns a new deep clone object from the string and this returned object is assigned to the new variable.

There is one caveat to note though, this clone will not include any methods that are in the cloned object.

----------------------------------------------------------------------------

