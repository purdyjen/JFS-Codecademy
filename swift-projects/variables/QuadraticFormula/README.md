# Quadratic Formula

In algebra, a quadratic equation is an equation having the form:

    ax^2 + bx + c = 0ax 

Graphing the quadratic equation will create a parabola like the one below:

The corresponding x values are the x-intercepts of the graph, while a, b, and c are constants.

Write a Swift program in **Quadratic.swift** that solves the quadratic equation for the x‘s:

x = {-b +- sqrt{b^2-4ac}} / {2a}

## Tasks

### Getting the a, b, c

1. 
First things first, declare three variables we’ll use to store decimal numbers:

- a
- b
- c

2.
Let’s take a time machine to algebra class and solve for the quadratic equation:

    2x^2 + 5x + 3 = 02x 

- a is 2.0
- b is 5.0
- c is 3.0

Give a, b, c those values.

### Solving for the roots

3. 
In Math class, solving for quadratic formula problem means figuring out what “x” is. It’s also possible for “x” to have two values, also known as roots.

Let’s declare two more Double variables to store these roots:

- `root1` for root number one
- `root2` for root number two

4. 
For `root1`, the equation has a `+` plus sign:

    root1 = {-b + sqrt{b^2-4ac}} / {2a}
 
The overall equation can be broken down. First, focus on solving for:

    b^2-4acb 

Assign the value to `root1`.

5. 
Now use the value for `root1` and solve for:

    sqrt{b^2-4ac} 

This means finding the square root of the value calculated from the previous step.

To find the square root of `root1` use the syntax:

    root1.squareRoot()

Update the value of `root1` to the square root.

Note: `.squareRoot()` is a built-in Swift method that you have access to. Methods will be covered in a later lesson.

6. 
Expanding a little more on the broken up formula:

    -b + sqrt{b^2-4ac}
​
This time, `root1`‘s new value will be `-b` plus its current value.

7. 
To finally solve for `root1`, review the complete formula:

    root1 = {-b + sqrt{b^2-4ac}} / {2a}
​
Reassign `root1` with the result of the current value of `root1` divided by the product of `2` times `a`.

8. 
For `root2`, it’s almost identical except the equation has a `-` sign:

    root2 = {-b - sqrt{b^2-4ac}} / {2a}
 
9. 
Let’s output these two roots values using `print()`.

10. 
Run the program using the terminal.

Suppose a is `2`, b is `5`, c is `3`, the output should look like:

    Root 1 is -1.0
    Root 2 is -1.5

Or try `3`, `-11`, `-4` for a, b, c.

The output should look like:

    Root 1 is 4
    Root 2 is -0.333333

Did you get the correct roots?

### Optional

11. 
Sample solution(s):

- [Quadratic.swift](https://github.com/Codecademy/learn-swift/blob/master/2-variables/quadratic-formula/Quadratic.swift)

P.S. If you make something cool, share it with us!
