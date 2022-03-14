---
title: "Find out If a number is fibonacci or not"
author: Dabobroto Sarkar
date: 2022-03-14 02:40:00 +0600
categories: [Coding, Algorithm]
tags: [python,java,fibonacci,algorithms]
render_with_liquid: true
---

In mathematics, the Fibonacci numbers form a sequence, the Fibonacci sequence, in which each number is the sum of the two preceding ones. The sequence commonly starts from 0 and 1, although some authors omit the initial terms and start the sequence from 1 and 1 or from 1 and 2. Starting from 0 and 1, the next few values in the sequence are:

   `0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, .......................`

To know more about fibonacci sequence and it's history,  [go here](https://en.wikipedia.org/wiki/Fibonacci_number "go here")

**Here we will make a program that can determine if a number is in fibonacci series or not by the following algorithm :**
- Define first 2 numbers in the sequence which is 0 & 1
- Take a number as input. (Let it be N)
- Loop until the firstNumber is larger than N
- if firstNumber == N or secondNumber == N, print Fibonacci Number and exit
- temp = secondNumber
- secondNumber = firstNumber+secondNumber
- firstNumber = temp
- if firstNumber>N print 'Not Fibonacci Number' and exit


**Now we will implement it in python and java :**


### Python Implementation
```python
def check_fibonacci(number):
    first_number = 0
    second_number = 1
    while(first_number<=number):
        if(number == second_number or number == first_number):
            print("It's a fibonacci number")
            return None
        temp = second_number
        second_number = first_number+second_number
        first_number = temp
    print("Not Fibonacci number")
    return None


n = int(input("Input a Number : "))
check_fibonacci(n)
```
[Code here](https://github.com/dstushar7/basic-projects/blob/main/Is%20it%20Fibonacci%3F/fibo.py "here"). 

### Java Implementation
```java
package com.dstushar;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        int number;
        int firstElement = 0, secondElement = 1;

        Scanner takeInput = new Scanner(System.in);
        number = takeInput.nextInt();

        while (number<=firstElement){
            int temp = secondElement;
            secondElement = firstElement+secondElement;
            firstElement = secondElement;
            if (firstElement==number || secondElement==number){
                System.out.println("Fibonacci Number");
                System.exit(0);
            }
        }
        System.out.println("Not Fibonacci Number");
    }
}
```
[Code Here](https://github.com/dstushar7/basic-projects/blob/main/Is%20it%20Fibonacci%3F/Fibonacci/src/com/dstushar/Main.java "Code Here")
