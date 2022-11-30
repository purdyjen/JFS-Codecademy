# 99 Bottles of Milk

If you have ever been stuck in a car during a long drive, you might have sung some fun, repetitive songs to help pass the time. One of those songs may have been the [“99 Bottles of Milk”](https://www.youtube.com/watch?v=7QxI76nnt2s) song.

The first verse of this song goes like this:

    “99 bottles of milk on the wall, 99 bottles of milk!
    You take one down and pass it around…
    98 bottles of milk on the wall!”

The following verse repeats the lyrics above, except this time it would start with 98 bottles and end with 97 bottles; then, the lyrics would continue to repeat over and over again until we are left with 0 bottles of milk. When you think about it, that’s a lot of repetition!

Write a program in **Bottles.swift** that uses a `while` loop to print the “99 Bottles of Milk” song in its entirety.

## Tasks

### Creating a Loop

1. 
Declare an `Int` variable called `numBottles`. Give `numBottles` a value of `99`.

This variable will represent how many bottles of milk are on the wall.

2. 
Create a `while` loop that repeatedly executes a block of code as long as the value of `numBottles` is greater than `0`.

You can leave the body of the loop empty for now.

### Making the Song

3. 
Add the song lyrics as `print()` statements to the body of the loop. The output should look something like this:

    [numBottles] bottles of milk on the wall, [numBottles] bottles of milk!
    You take one down and pass it around…
    [numBottles] bottles of milk on the wall!

Not a fan of milk? Feel free to use a different kind of drink!

4. 
Inside the loop, decrease the value of `numBottles` by `1` before the last line of the verse gets `print()`ed.

5. 
Outside of the `while` loop, add the final lyrics of the song as a `print()` statement to your program:

    0 bottles of milk on the wall, 0 bottles of milk!
    Go to the store and buy some more,
    99 bottles of milk on the wall!

Remember, this should only be printed after `numBottles` has a value of `0`.

6. 
Run your code to make sure everything works!

### Optional

7. 
Great job completing this project! Feeling on a roll? Keep it up by checking out these additional tasks!

- Complete this project again using a for-in loop.
- Assign the lyrics of the song to some String variables.
- Find another repetitive song to create a program for. For example: [“Five Little Monkeys Jumping On The Bed”](https://www.youtube.com/watch?v=b0NHrFNZWh0)

### Solutions(s)

8. 
Sample solutions:

- [Bottles.swift](https://github.com/Codecademy/learn-swift/blob/master/4-loops/99-bottles/Bottles.swift)
- [FiveLittleMonkeys.swift](https://github.com/Codecademy/learn-swift/blob/master/4-loops/99-bottles/FiveLittleMonkeys.swift)

P.S. If you make something cool, share it with us!
