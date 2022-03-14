---
title: Beauty of Algorithms
author: Dabobroto Sarkar
date: 2022-01-10 02:10:00 +0800
categories: [Algorithm, Real Life Implementation]
tags: [algorithm,python,implementation,bfs,dfs]
render_with_liquid: false
---

**Algorithm**
----
An algorithm is a procedure or formula to solve a certain problem. Any thing we do in our daily life can be described as an algorithm to run our life. I can give an example of the process of making a cup of tea. There are several steps of it :
1. Put the teabag inside the cup
2. Take a kettle and pour some water inside it.
3. Boil the water in the kettle
4. Pour some water in the cup
5. Add milk 
6. Add some sugar
7. Stir it

Here's the procedure of making a cup of tea. We can say that this is the **algorithm** of making a cup of tea.

Creating an algorithm is the first step to build some system. You can't build a system by trial/error method. It is more time and energy consuming process. So we learn how to design an **algorithm.**

Here we will be studying in-depth about the analysis and design procedure of algorithms. We will see different algorithms and how we can implement them using python.

**Table of Contents**

[TOC]
# | Introduction to Algorithm |

 <ins>Difference between a program and an algorithm : </ins>

Designing an algorithm and a program is different. From the below table you can easily understand these. 
                    
Algorithms  | Program
------------- | -------------
Designing a solution to a problem | Implementing the program
Getting knowledge about the domain of the problem  | Doing the actual programming
Solving the problem in any human language  | Programming language
Independent of hardware & OS  | Dependent
Analysis of algorithm   | Testing of the program

Actually algorithm design is called the **priori analysis** and implementing the program is called **posterior testing.** The previous table can be rewritten by :

Priori Analysis  | Posteriori Testing
------------- | -------------
Designing a solution to a problem | Implementing the program
Getting knowledge about the domain of the problem  | Doing the actual programming
Solving the problem in any human language  | Dependent on programming language
Independent of hardware & OS  | Dependent
Analysis of algorithm   | Testing of the program

## | Characteristics of an Algorithm |

There are few characteristics that all algorithms must have. These are :

1. **Input** : An algorithm can take zero or more inputs to itself. That needs to be ensured.
2. **Output** : An algorithm must generate at least one output. Just like an [UDF](https://en.wikipedia.org/wiki/User-defined_function) returns something inside.
3. **Definiteness** : Every statement should be should be definite and exact. It must be clear enough to convey only one meaning.
4. **Finiteness** : An algorithm must be finte. You can think of a server that keeps running for infinite. But an algorithm must not run infinitely. It must end at one point.
5. **Effectiveness** : An algorithm shouldn't have any unnecessary steps that is not required to solve the problem you're trying to solve.

We are bulging into algorithm's core basic concepts. After finishing the basics we will hop into the practical implementations.

## | Complexity analysis of an Algorithm |

