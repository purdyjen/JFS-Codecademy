# Fizz Buzz

[Fizz Buzz](https://en.wikipedia.org/wiki/Fizz_buzz) is a classic developer interview question that is asked/referenced so often for so long, it is almost a cliché!

Though this challenge will appear very simplistic to those with some coding experience, it is designed to weed out 99.5% programming job candidates who cannot creatively use their coding knowledge to solve simple problems.

Want to give it a shot?

Write a **FizzBuzz.swift** program that outputs numbers from 1 to 100.

But for multiples of 3, print `Fizz` instead of the number and for the multiples of 5, print `Buzz`. For numbers which are multiples of both 3 and 5 print, `FizzBuzz`.

    1
    2
    Fizz
    4
    Buzz
    Fizz
    7
    8
    Fizz
    Buzz
    11
    Fizz
    13
    14
    FizzBuzz
    16
    ...
    97
    98
    Fizz
    Buzz

Happy coding!

## Tasks

### (Background) Story Time!

1. 
**As the inventor of this challenge, Imran Ghory, states:**

> “After a fair bit of trial and error I’ve come to discover that people who struggle to code don’t just struggle on big problems, or even smallish problems (i.e. write an implementation of a linked list). They struggle with tiny problems.

> So I set out to develop questions that can identify this kind of developer and came up with a class of questions I call “FizzBuzz Questions” named after a game children often play (or are made to play) in schools in the UK.”

### Creating the Program

2. 
Ultimately, you want to check the numbers `1` through `100` and see if these numbers “Fizz”, “Buzz”, “FizzBuzz”, or don’t. An ideal solution to go through all these numbers would be to use a loop!

Start by creating a loop of your choice to iterate the range of numbers.

3.
Make sure your loop is working properly and you’re able to loop through the entirety of `1` through (and including) `100`. Print out the counter you’re using to keep track of the current iteration.

4.
And now you have all the numbers. It’s time to solve the hard part.

Before coding further, take a second to plan out how to tackle this problem: maybe write down some ideas on a piece of paper or brainstorm with someone.

The key questions you need to figure out are:

- How to check if a number is a multiple of 3?
- How to check if a number is a multiple of 5?
- How to check if a number is a multiple of both 3 AND 5?
- What to do in the loop when the current number fits any of the rules above?

When you are ready, try to implement it. If you need some additional guidance, check the hint, it’s ok to get some help. If you prefer a more step by step approach look over the next section of steps.

### Guided Steps

5. 
Breaking down the problem into even smaller problems is helpful. This approach is exceptionally helpful when tackling a big problem — it makes a large task more manageable.

First, let’s not write any code yet but think about the question: “How to check if a number is fully divisible by 3?”.

If a number is a multiple of `3`, it should not have a remainder when divided by `3`. Using the handy remainder operator `%`, you can quickly check if a number is a multiple of `3`. E.g.

    print(6 % 3) // Prints: 0
    // 6 is a multiple of 3
    
    print(7 % 3) // Prints: 1
    // 7 is not a multiple of 3

6. 
Now you can implement the logic for checking for multiples by adding an `if` statement in your loop. The `if` statement’s condition checks if the current iteration `% 3` is `0`.

If that condition is `true`, print out `"Fizz"`.

7. 
The same logic applies for multiples of `5`. You have to:

- Add an `else if` statement.
- For the `else if` condition, check if the current iteration is a multiple of `5`.
- Add a `print()` statement to print out `"Buzz"` if the condition is `true`.

8. 
To account for numbers that are both multiples of `3` and `5`. You can use the logical operator `&&` to check for both expressions.

Remember, in an `if`/`else if`/`else` statement, once a condition is `true`, the other statements will not execute.

You’ll need to restructure your current `if`/`else if` statement to check if the current iteration is a multiple of `3` and `5` in the `if` condition. If this condition is `true`, print out `"FizzBuzz"`.

9. 
Remember to also account for numbers that aren’t multiples of either `3` or `5`. You need to add an `else` clause that contains a `print()` statement that prints out the number as is.

### Optional

10. 
Congratulations! You passed the FizzBuzz screening!

If you want to challenge yourself further, consider:

- Changing the range of what numbers you want to test.
- Add an additional rule, e.g. numbers divisible by `2` print out `"Pazz"`.
- Use a different loop from the one you chose to implement FizzBuzz.

### Solutions

11. 
If you want to compare your solution, here’s a sample solution:

- [FizzBuzz.swift](https://github.com/Codecademy/learn-swift/blob/master/4-loops/fizzbuzz/FizzBuzz.swift)

P.S. If you make something cool, share it with us!
