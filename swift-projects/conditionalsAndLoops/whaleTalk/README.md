# Whale Talk

Our goal is to take human phrases like `"turpentine and turtles"` and translate it to its “whale talk” equivalent: `"UUEEIEEAUUEE"`.

There are a few simple rules for translating English text to “whale language”:

1. There are no consonants. Only vowels: "a", "e", "i", "o", "u".
2. The "u"s and "e"s are extra long, so we must double them in our program.
3. Once we have converted text to the whale language, the result is sung slowly, as is a custom in the ocean.

Write a **WhaleTalk.swift** program that uses loops to accomplish this translation.

Let’s get started!

## Tasks

### Setting Up

1. 
Create a variable named `input` that is equal to any phrase you’d like. This variable will contain the text we’re going to translate into “whale talk”.

2. 
Create another variable `output` and assign it to an empty string. This variable will contain the translated “whale talk”.

### Looping

3. 
Create a `for`-`in` loop that iterates over each character of `input`. We’ll be referring to the placeholder variable as `char`.

4. 
While iterating through `input`, we may encounter some capital letters. To ensure that we check through all the letters, we will use the [method `.lowercased()`](https://developer.apple.com/documentation/swift/string/1641392-lowercased) on `char`. This converts any uppercase character into lowercase characters (and keeps lowercase characters the same).

Inside the body of the `for-in` loop, create a variable named `lowerChar` and assign it the value `char.lowercased()`.

### Translating to Whale Talk

5. 
Now that we know we’re checking every character, we have to create a `switch` statement that checks `lowerChar`. We’ll add in the `case` statements later.

**Note:** Since the `switch` statement won’t be finished until step 10, there will be errors and warnings in the terminal as you save your code. By the end though, all red text from the errors and warnings will disappear!

6. 
We first want to check if `lowerChar` is an `"a"`, `"i"`, or `"o"`.

In the `switch` body, add a compound `case` statement that checks if `lowerChar` is any of the 3 vowels mentioned.

7. 
For all three of these vowels, we only add to `output` one capitalized vowel.

Therefore, under the newly added `case`, update `output` by adding `lowerChar.uppercased()` to the end of `output`.

8. 
We also have to account for when `lowerChar` is an `"e"`.

- Add another `case` statement to check for `"e"`.
- In the body of the `case` statement, update `output` to add `"EE"` at the end.

9. 
The last vowel we have to check is `"u"`.

- Add another `case` statement to check for `"u"`.
- In the body of the `case` statement, update output to add `"UU"` at the end.

10. 
We only want to add vowels, so anything else we’ll skip over.

Finish the `switch` statement by adding a `default` case. Inside the `default`, add the `continue` keyword to skip over any other characters.

**Note:** After finishing this step, there shouldn’t be any more errors or warnings!

11. 
After looping through `input`, our loop will have fully created `output`. Under the `for`-`in` loop, print out `output`!

Remember, when reading aloud “whale talk” is sung slowwwly… and loudly!

### Additional Challenges

12. 
Great job! (or as the whales say, “EEAO”)

If you want to challenge yourself further:

- Add an additional `case` to the `switch` statement.
- Allow certain consonants to be included in `output`.
- Combine the `"e"` and `"u"` cases into a single compound case.

### Solutions

13. 
If you want to compare your solution, here’s a sample solution: [WhaleTalk.swift](https://github.com/Codecademy/learn-swift/blob/master/4-loops/whale-talk/WhaleTalk.swift).

Let us know if you make something really cool!
