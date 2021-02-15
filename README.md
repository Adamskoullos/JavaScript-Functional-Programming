# JavaScript Functional Programming 

## A functional programming reference guide 

### A study in functional programming detailing in a practical way the core methodologies and patterns

### ToC:

[Defining & Purpose](##Defining-&-Purpose)


## Defining & Purpose
There are many advantages to adding functional style coding to a project whether it is used almost exclusively or in conjunction with other styles like OOP.

Below is a definition of the functional approach as quoted by Eric Elliot, who is an expert in this field:

'Functional programming is the process of building software by composing pure functions, avoiding shared state, mutable data and side-effects. Functional programming is declarative rather than imperative, and application state flows through pure functions.'

This is an extremely concise definition and one that is difficult at first to fully grasp so lets break it down before moving on:

**Pure functions** only work with data that is passed in, they do not mutate this data and they do not effect any other data that is not within the scope of the function. And finally, everyone has heard this one, given the same input a pure function will always produce the same output.

Pure functions do not cause **side effects**, meaning they do not affect any variable outside the scope of the function. Side note, the closure scope is regarded as outside the scope of the function when talking about shared state and side effects.  This includes triggering other functions that do have side effects.  One thing to note here is being mindful of making a true copy of an input before working on it and not just referencing and mutating the original data. More on this later.  

We touched on **avoiding shared state** above, this refers to an object that is either global or within a closure scope but outside the scope of any functions that alter it's state.  A shared state exists when this objects state is altered by more than one function.  To prevent this, no function mutates the object and then returns a reference to the object, but instead clones the object first returning a new object that is then passed on with its new state to the next function.  To recap, state is not shared, it is passed from one function to another.

**Functional programming is declarative rather than imperative**

A block of code built from pure functions is easier to reason about and test and each individual function can be reused used as a building block to easily compose larger functions to solve different tasks.  Managing state seems to be more robust and the conscious effort to never mutate data has a side effect of its own of eliminating many typical bugs during development.

Before we move on lets look at each object cloning pattern and the naunces between them. As this is such a core part of the functional style understadning the differences now will also reduce debugging later: