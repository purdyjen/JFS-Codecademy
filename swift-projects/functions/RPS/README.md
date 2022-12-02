# Rock, Paper, Scissors

[Rock, paper, scissors](https://en.wikipedia.org/wiki/Rock_paper_scissors) is a classic two player hand game dating back to ancient China.

Here are its universal rules:

- Rock destroys scissors
- Scissors cut paper
- Paper covers rock

Keeping these guidelines in mind, we’ll create a rock, paper, scissors program but with a modern twist - one of the players is a computer! 💻

Our program will consist of 3 functions and utilize previously covered Swift concepts including if/else and switch statements to determine the winner amongst 2 players.

## Tasks

### User Choice

1. 
As a player, the first thing we’d do is make a choice between throwing rock, paper, or scissors. Let’s create a function that will handle this choice and ensure the player has entered valid input.

In **RockPaperScissors.swift**, declare a function, `getUserChoice` that will accept a single parameter, `userInput` of type, `String`.

The function should return a value of type, `String`.

2. 
Within the function, set up an `if`/`else` statement that will check the value of `userInput`. If the input is valid, the choice should get returned, otherwise, an error message displayed.

If `userInput` is `"rock"` OR `userInput` is `"paper"` OR `userInput` is `"scissors"`, return `userInput`.

Otherwise, return the message, `"You can only enter rock, paper, or scissors. Try again."`

3. 
Call the function, `getUserChoice(userInput:)`, and pass in an argument for `userInput`. Wrap the function in a `print()` statement.

Once you’ve confirmed the function is working as expected, remove the `print()` statement.

### Computer Choice

4. 
In the game, when you’re making a choice between rock, paper, or scissors, your opponent is doing the same. In this case, your opponent is a computer. The next function we create will determine and display the computer’s choice in the game.

Declare a function, `getComputerChoice`, that will accept no parameters and return a value of type, `String`.

It will generate a random number and use a `switch` statement to decide which option to play.

5. 
Within the function, declare a constant, `randomNumber` and assign it the result of calling `.random()` on a range of `Ints`, `0` through `2`.

On the following line, create a `switch` statement that will accept `randomNumber` as its expression and contain 3 cases.

Each case will check for one numerical value between `0` and `2` and return a move choice.

- `0` should return `"rock"`
- `1` should return `"paper"`
- `2` should return `"scissors"`

Conclude the `switch` statement with a `default` that returns the `String`, `"Something went wrong"`.

6. 
Outside of the function, call `getComputerChoice()` and wrap it in a `print()` statement to see its output.

Running the program multiple times should result in a random choice displayed each time. Once you’ve confirmed the expected output, remove the `print()` statement.

### Determine Winner

7. 
Now that we’ve set up each player’s move, it’s time to determine the winner.

Declare a function, `determineWinner`, that accepts two parameters:

- `userChoice` of type, `String`
- `compChoice` of type, `String`

Both parameters should be prepended with an `_` to allow for an omitted argument label.

The function should return a value of type, `String`.

8. 
Within the function, first declare a variable, `decision` and assign it the String, `"It's a tie"`.

Next, create a `switch` statement that accepts `userChoice` as its expression.

In each `case` within the `switch` statement, we’ll check for the value of `userChoice` and compare it to the computer’s move using an `if`/`else if` statement.

Start with the first case, when `case` is `"rock"`:

- check `if` `compChoice` is equal to `"paper"`. If it is, set `decision` to `"The computer won"`.
- `else if` the `compChoice` is equal to `"scissors"`, set `decision` to `"The user won"`.

9. 
Set up the second case when `case` is `"paper"`:

- check `if` `compChoice` is equal to `"rock"`. If it is, set `decision` to `"The user won"`.
- `else if` the `compChoice` is equal to `"scissors"`, set `decision` to `"The computer won"`.

10. 
Set up the third and final case where `case` is `"scissors"`:

- check `if` `compChoice` is equal to `"rock"`. If it is, set `decision` to `"The computer won"`.
- `else if` the `compChoice` is equal to `"paper"`, set `decision` to `"The user won"`.

Below the final `case`, add a `default` statement that prints, `"Something went wrong"`.

Conclude the function with a statement that returns `decision`.

### Display Result

11. 
To play the game, we must first call the functions defined.

- Call the function, `getUserChoice(userInput:)` and pass in `"paper"` as the argument for `userInput`. Store this function call in the constant, `userChoice`.
- Call the function, `getComputerChoice()` and store it in the constant, `compChoice`.

12. 
Add three consecutive `print()` statements to display the user’s choice, the computer’s choice, and the winner:

- Use string interpolation in the first `print()` statement to output: `"You threw [user choice]"`
- Use string interpolation in the second `print()` statement to output: `"The computer threw [computer choice]"`
- Call the `determineWinner()` function and pass in the variables, `userChoice` and `compChoice`, as arguments.

13. 
Excellent work! 👏 You’ve utilized your knowledge of functions and previous fundamental Swift concepts to create a rock, paper, scissors game.

Run your program several times to see the computer’s different moves and outcome of the game each time. Test your code with different values for `userInput` and ensure your code is working as expected.

### Solution

14. 
Sample solution:

- [RockPaperScissors.swift](https://github.com/Codecademy/learn-swift/blob/master/7-functions/rock-paper-scissors/RockPaperScissors.swift)
