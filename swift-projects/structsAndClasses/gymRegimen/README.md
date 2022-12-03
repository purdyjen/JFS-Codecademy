# Structured Gym Regimen

When exercising it’s really helpful to have a goal in mind and a plan to achieve that goal. While everyone’s goals are different, we can use structures to devise a plan and keep us on track!

We’ll first create a structure for our exercises. We’ll use this structure to keep track of:

- its name.
- what muscle groups it targets.
- how many repetitions (reps) we should do in one go.
- how many rounds of repetitions we should do (sets).
- How many total reps we’ll be doing.

Another structure we’ll need to keep track of all these exercises is for our regimen! 
This structure will:

- track the day of the week.
- store the exercises we should do for a given day.
- include a method to remind us of a given day’s workout regimen.
- Are you ready to work this out? 🏋️‍♀️

## Tasks

### Creating the Exercise Structure

1. 
In **Exercise.swift**, we’ll create our regimen program!

To start, we’ll create a structure named `Exercise` that will model real-life exercises. But before we write any code, let’s review what properties go into `Exercise`.

This structure should:

- have a name.
- a list of muscle groups that the exercise targets.
- track how many repetitions (reps) are done in one go.
- track how many sets, or rounds of repetitions, we should do.
- tally up the total amount of reps.

2. 
Since we know what properties we need to include in `Exercise`, let's code it up!

Create a structure named `Exercise` with the following properties and their types:

- `name` with type `String`.
- `muscleGroups` with type `[String]`.
- `reps` with type `Int`.
- `sets` with type `Int`.
- `totalReps` with type `Int`.

3. 
With our properties set up, we can now create the `init()` method.

The `init()` method should have the following parameters:

- `name: String`
- `muscleGroups: [String]`
- `reps: Int`
- `sets: Int`

4. 
Inside the `init()` method, assign the parameter values to the properties:

- `self.name` takes on the value of `name`.
- `self.muscleGroups` takes on the value of `muscleGroups`.
- `self.reps` takes on the value of `reps`.
- `self.sets` takes on the value of `sets`.
- `self.totalReps` takes on the value of `reps` multiplied by `sets` .

### Adding Exercise Instances

5. 
Using the `Exercise` structure, we can make instances of exercises! One common and useful exercise to gain muscle is the [push-up](https://en.wikipedia.org/wiki/Push-up).

Create a variable called `pushUp` that is an instance of `Exercise` with the following arguments:

- `name: "Push up"`
- `muscleGroups: ["Triceps", "Chest", "Shoulders"]`
- `reps: 10`
- `sets: 3`

You may want to change the values to suit your goals but we’ll be using this example in the later steps.

6. 
Print out `pushUp` to check that the instance was created properly.

Once it’s confirmed that it works and there are no errors, you can safely remove the `print()` statement.

You can take a pause here to create even more `Exercise` instances if you want, like [sit-ups](https://en.wikipedia.org/wiki/Sit-up) or [squats](https://en.wikipedia.org/wiki/Squat_(exercise)). If not, go on to create the regimen structure. The power is in your hands!

### Creating The Regimen Structure

7. 
With our `Exercise` instance(s) set up, we can now create another structure that holds the template for each day of the week. Once again, let’s set up a plan before we commit to writing any code.

This structure will model a [regimen](https://en.wikipedia.org/wiki/Regimen) that keeps track of our day’s exercises. For example, we’ll have a Monday regimen that contains the exercises we want to do on Mondays. Tuesday’s regimen will contain another list of exercises that are done on Tuesdays.

This means we’ll need a structure to:

- Keep track of what day of the week it is.
- Store an array of `Exercise` instances.

8. 
Time to implement this regimen structure!

Create a structure called `Regimen` that has the following properties:

- `dayOfWeek` with type `String`.
- `exercises` with type `[Exercise]`.

9. 
In the body of `init()`, assign:

- `self.dayOfWeek` the value of `dayOfWeek`.
- `self.exercises` the value of `exercises`.

10. 
Time to check that the `Regimen` structure works.

Create an instance of `Regimen` called `mondayRegimen` that has the arguments:

- `dayOfWeek: "Monday"`
- `exercises: [pushUp]`

Then print out the value of mondayRegimen.

### Forming an Exercise Plan

11. 
Let’s add a method to the `Regimen` structure to make it even more useful. This method will print out what day of the week it is and what exercises to do and how many times to do them for.

Inside the `Regimen` struct, create a method called `printExercisePlan()` that doesn’t have any parameters and doesn’t return anything.

12. 
Inside the method, add a print statement that tells you what day of the week it is and a little introductory phrase like:

    Today is [Day of the week] and the plan is to: ]

Sub in `self.dayOfWeek` for `[Day of the week]`.

13. 
Since `self.exercises` is an array of `Exercise` instances, let’s loop through each one.

Add a `for`-`in` loop that iterates over `self.exercises` and uses `exercise` as the placeholder variable.

14. 
We can use the loop with some `print()` statements that say what to do and how many times to do it.

Inside the loop you just created, add a `print()` statement that says:

    Do [Number of sets] sets of [Number of reps] [Exercise name]s

Use string interpolation to replace the values in `[ ]` with the correct property values.

15. 
Let’s add one more `print()` statement to list out how many total repetitions are required.

It should output something like:

    That's a total of [Total exercise reps] [Exercise name].

For our pushUp example it would print out:

    That's a total of 30 Push ups

16. 
Check `.printExercisePlan()` in action by calling it on `mondayRegimen`.

### Additional Challenges

17.
Congratulations, you made your very own regimen using structures!

This project creates the basis of an app but it’s not fully complete. You can customize it to your liking. If you want to challenge yourself further:

- Create additional `Exercise` instances.
- Create additional `Regimen` instances.
- Add a mutating method to the `Regimen` structure to add exercises.

### Solutions

18. 
If you want to compare your solution, here’s a sample solution: [Exercise.swift](https://github.com/Codecademy/learn-swift/blob/master/8-structures/Structured%20Exercise%20Regimen/Exercise.swift).

Let us know if you make something really cool!
