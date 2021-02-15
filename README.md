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

**Pure functions** only work with data that is passed in, they do not mutate this data and they do not effect any other data that is not within the scope of the function. And finally, everyone has heard this one, given the same input a pur function will always produce the same output.

**Avoiding shared state**

**Functional programming is declarative rather than imperative**

A block of code built from pure functions is easier to reason about and test and each individual function can be reused used as a building block to easily compose larger functions to solve different tasks.  Also pure functions only work with their arguments and do not mutate them, they return the output in a new variable.   