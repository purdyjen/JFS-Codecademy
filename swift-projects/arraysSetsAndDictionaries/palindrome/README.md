# Palindrome

A [palindrome](https://en.wikipedia.org/wiki/Palindrome) is a word, number, phrase, or other sequences of characters that remains the same when its characters are reversed, such as:

- `"madam"`
- `"racecar"`
- `"10801"`
Sentence-length palindromes may be written when allowances are made for adjustments to capital letters, punctuation, and word dividers, such as:

- `"Was it a car or a cat I saw?"`
- `"A man, a plan, a canal, Panama!"`

Write a **Palindrome.swift** program that checks whether or not an array contains a palindrome.

## Tasks

### Setting Up

1. 
Let’s get started by creating an array named `text` with the value: `["h", "e", "l", "l", "o"]`

We’ll be using `text` later and check if it actually is or isn’t a palindrome.

2. 
Next, declare an empty array called `reversed` of type `String`.

This is where we will store the reversed version of the `text` array.

### The While Loop

3. 
Okay, but how do we get the reverse of `text`?

One way is to iterate from the end of the `text` array to its beginning and add each character one by one to `reverse`.

To do this, we can use a `while` loop.

First things first, create a counter variable that starts at 1 less than the size of `text` using the `.count` property.

4. 
Next, create a `while` loop that has the condition of `counter` greater than or equal to `0`.

5. 
Inside the loop body, make the counter decrement one a time.

After all, we don’t want to get stuck in an infinite loop!

6. 
Now we have a `while` loop, let’s write the instruction that to add to our `reversed` array.

Before the decrement of the counter, add a line of code that *appends* the character in `text` at index `counter` to the end of `reversed` array.

### Checking for Palindrome

7. 
Now we have `reversed`, the exact flip of `text`, we now want our program to check whether or not we have a palindrome.

Create a conditional that prints out “We have a palindrome!” *if* `text` equals to `reversed`.

8. 
Then, create an `else` clause that prints out a message if it does not equal.

This means that we don’t have a palindrome.

### Optional

9. 
Congrats! You have created a palindrome checker. 🥳

To make sure your program works, try it out with different `text` arrays:

- `["l", "e", "v", "e", "l"]`
- `["a", "n", "n", "a"]`

To go a step further, try rewriting the code using a `for`-`in` loop or a `stride()` function.

10. 
Sample solutions:

- [Palindrome.swift](https://github.com/Codecademy/learn-swift/blob/master/5-arrays-and-sets/palindrome/Palindrome.swift)

P.S. If you make something cool, share it with us!
