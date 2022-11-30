# Magic 8-Ball

The [Magic 8-Ball](https://en.wikipedia.org/wiki/Magic_8-Ball) is a popular toy developed in the 1950s for fortune-telling or advice seeking.

In this project, you’ll hone your conditional skills by creating a program that can answer any “Yes” or “No” question with a different fortune each time.

We’ll be using the following 9 possible answers inside our Magic 8-Ball:

**Positive** 👍:

- Yes - definitely
- It is decidedly so
- Without a doubt

**Neutral** 🤔:

- Reply hazy, try again
- Ask again later
- Better not tell you now

**Negative** 👎:

- My sources say no
- Outlook not so good
- Very doubtful

Let’s get to fortune telling!

## Tasks

### Set Up

1. 
In **Magic8Ball.swift**, declare a constant playerName and assign it your (or any) name.

2. 
The second constant we’ll need is playerQuestion.

Declare it on the following line and assign it a “Yes” or “No” question you’d like to ask the Magic 8 Ball.

3. 
Next, we’ll need a constant to store a randomly generated value.

- Declare the constant, `randomNumber` and assign it the result of calling `.random(`) on a range of `Int`s, `1` through `9`.

- Print the value of `randomNumber` to ensure the random values are being generated as expected.

Running the program several times should result in a different number (1-9) printed each time. Once you’re certain this is working as expected, feel free to comment out the `print()` statement.

4. 
Lastly, declare the constant, `eightBall` to hold a `String` value.

No need to assign it a value yet, our program will assign one for us in the following steps.

### Control Flow

5. 
Now that we’ve completed our constant declarations, it’s time to develop the core logic for our program.

Create a `switch` statement that accepts `randomNumber` as its expression and contains 9 cases.

- Each `case` will check for one numerical value between 1 and 9. For example, if the `randomNumber` is `1`, then the first `case`, `case 1:` will execute.

- Each `case` should assign an answer to `eightBall`.

Recall the 9 possible answers of the Magic 8 Ball:

1. `Yes - definitely`

2. `It is decidedly so`

3. `Without a doubt`

4. `Reply hazy, try again`

5. `Ask again later`

6. `Better not tell you now`

7. `My sources say no`

8. `Outlook not so good`

9. `Very doubtful`

6. 
Conclude the `switch` statement with a `default` statement that will assign the `String`, `"Error"`, to `eightBall`.

### See the Magic 🔮

7. 
Now, let’s see our magical oracle in action!

Add a `print()` statement that will output the player’s name followed by their question.

Use this example output as a guide:

    [Galina] asks: [Will there be any more snowfall in New York for winter 2020?] 

8. 
Add a second `print()` statement that will output the Magic 8 Ball’s answer.

Use this example output as a guide:

Magic 8 Ball's answer: [It is decidedly so.]

9. 
Awesome work! 👏 You’ve utilized your knowledge of conditionals and previous fundamental Swift concepts to create a program that generates fortune-telling answers.

Run your program several times to see the random answers appear on the right.

### Optional Challenges

10. 
If you’re up for a challenge, try implementing the following feature.

Assume someone else using this program forgot to assign a name for playerName and left it an empty String, "", resulting in the following output:

    asks: Will I win the lottery?
    Magic 8 Ball's answer: Without a doubt 

Uh-oh! We don’t know who the lucky winner is.

In place of your current `print()` statement, set up a conditional to catch this.

Create an `if`/`else` statement where:

- if `playerName` is an empty `String`, only the question is printed
- else, the player’s name and questions are both printed

11. 
Convert your `if`/`else` statement into one line using the ternary conditional operator.

### Solution

12. 
Sample solution:

- [Magic8Ball.swift](https://github.com/Codecademy/learn-swift/blob/master/3-conditionals/magic-8-ball/Magic8Ball.swift)
