# Magic Eight Ball

Source:
Codecademy's [Learn JavaScript](https://www.codecademy.com/courses/introduction-to-javascript) course, Conditionals Unit

## Project Overview:

You’ve learned a powerful tool in JavaScript: control flow! It’s so powerful, in fact, that it can be used to tell someone’s fortune.

In this project we will build a [Magic Eight Ball](https://en.wikipedia.org/wiki/Magic_8-Ball) using control flow in JavaScript.

The user will be able to input a question, then our program will output a random fortune.

##### Tasks:

1.  In the first line of the program, define a variable called `userName` that is set to an empty string.

If the user wants, they can enter their name in between the quotation marks.

2.  Below this variable, create a ternary expression that decides what to do if the user enters a name or not. If the user enters a name — like `'Jane'` — use string interpolation to log `Hello, Jane!` to the console. Otherwise, simply log `Hello!`.

3.  Create a variable named `userQuestion`. The value of the variable should be a string that is the question the user wants to ask the Magic Eight Ball.

4.  Write a `console.log()` for the `userQuestion`, stating what was asked. You can include the user’s name in the `console.log()` statement, if you wish!

5.  We need to generate a random number between 0 and 7.

Create another variable, and name it `randomNumber`. Set it equal to this expression, which uses two methods (`Math.floor()` and `Math.random()`) from the Math library.

    Math.floor(Math.random() * 8);

`Math.random()` returns a value between `0` (inclusive) and `1` (exclusive).

In order to make this set of numbers range from 0 (inclusive) to 8 (exclusive) we can multiply the returned value by `8`.

Finally, to ensure we only have whole numbers from `0` to `7` we can round down using `Math.floor()`.

6.  Create one more variable named `eightBall`, and set it equal to an empty string. We will save a value to this variable in the next steps, depending on the value of `randomNumber`.

7.  We need to create a control flow that takes in the `randomNumber` we made in step 5, and then assigns `eightBall` to a reply that a Magic Eight Ball would return. Think about utilizing `if`/`else` or `switch` statements. Here are 8 Magic Eight Ball phrases that we’d like to save to the variable `eightBall`:

- 'It is certain'
- 'It is decidedly so'
- - 'Reply hazy try again'
- 'Cannot predict now'
- 'Do not count on it'
- 'My sources say no'
- 'Outlook not so good'
- 'Signs point to yes'

If the `randomNumber` is `0`, then save an answer to the `eightBall` variable; if `randomNumber` is 1, then save the next answer, and so on. If you’re feeling creative, make your own responses!

8.  Write a `console.log()` to print the Magic Eight Ball’s answer, the value of the `eightBall` variable.

9.  Run your program a few times to see random results appear in the console!

If you want extra practice:

- If you started with a `switch` statement, convert it to `if`/`else if`/`else` statements.
- If you started with `if`/`else if`/`else` statements, convert them to a `switch` statement.

### Challenge #1: User Input

Bust out your Google Fu skills to figure out how you can make this script truly interactive by getting user input. Refactor your code.

_The solution to this challenge is available in the `magic-8-ball-prompt.js` file, but **try** not to peek at it._

#### Challenge #2: Run JavaScript in your Terminal

##### Install and use node.js to run JavaScript in Terminal

1. If you don't already have node installed, download and install from [here](https://nodejs.org/en/download/).
2. In your terminal, navigate to the folder containing your project.
3. Run `npm init -y`. This initializes the directory so that it can run node. The `-y` flag allows you to skip the package.json setup.
   _Note: `npm` stands for node package manager. There are thousands of packages at [npmjs.com](https://www.npmjs.com/) that you can import to streamline your development by simply running `npm install [name-of-package]`._
4. Because this project requires user input for extra functionality, you need to download a package that enables you to do so. Run `npm install prompt-sync`.
5. Finally, include this line of code at the top of your .js file: `const prompt = require("prompt-sync")();`
