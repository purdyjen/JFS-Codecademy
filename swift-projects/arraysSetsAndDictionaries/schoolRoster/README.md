# School Roster

You have been hired by a school to help them sort their student roster.

After a database failure, the school has lost its entire student roster. Fortunately, the school was able to get lists of the students who are enrolled in each class.

It’s your job to help sort this data and provide the school with valuable information using sets.

Good luck!

## Tasks

### All Student Roster

1. 
Take a look at the 6 sets in **Roster.swift**.

Each set contains the names of students who are currently enrolled in a specific class. Students can take multiple classes, so there is overlapping data between several of the sets.

Use the set operation `.union()` to combine all the students into one set called `allStudents`.

You may need to use the `.union()` several times to achieve this goal.

2. 
The school wants to know the names of all the students and how many students are currently enrolled in at least 1 class.

Use a `for`-`in` loop to iterate through `allStudents` and `print()` the name of each individual student.

Use `print()` and ``.count`()` to output the total number of students.

### Language Classes

3. 
The school needs to know which students aren’t taking any language classes.

Create a set called noLanguage that contains the students who aren’t taking either `german101` or `spanish101` by using the `.subtracting()` operation.

Output these names to the terminal.

4. 
Administration wants to know which students are taking either `spanish101` or `german101`, but not both.

Use the set operation `.symmetricDifference()` to store the names of these students in a set called `spanishOrGerman`.

Print `spanishOrGerman` to the output terminal.

5. 
The school offers a language award to any student who takes all three of the following classes: `spanish101`, `german101`, and `englishLiterature`.

Use the set operation `.intersection()` to create a set called `languageAwardWinners` that contains any students enrolled in all three classes.

### Class Size

6. 
The school wants information about the number of classes that have 7 or more students.

Create a variable called `sevenPlus` and give it a value of `0`.

7. 
Create a set called `classSet` that contains the set variable of each class.

8. 
Use a `for`-`in` loop to iterate through each value in `classSet`.

Inside the `for`-`in` loop, create an `if` statement that checks if the number of students in each set exceeds 7 or more by using the `.count` property.

9. 
Inside the `if` statement, increase the value of `sevenPlus` by `1`.

Outside of the `for`-`in` loop, `print()` the value of `sevenPlus`.

### Optional

10. 
Great job completing this project!

The school wants to hire you for more work. If you’re up for the challenge, check out these additional tasks!

- The student `"Skyla"` has transferred to a new school. Use `.remove()` to delete the student from any classes they are currently enrolled in.
- The students from the `computerScience` class and `advancedCalculus` class are going on a field trip. Create a set called `fieldTrip` that combines these two sets using `.union()`.
- The day of the field trip, there is a test in `german101`. Use `.subtracting()` to remove any students in `fieldTrip` who are also in `german101`.

### Sample Solution(s)

11. 
Sample Solution(s):

- [Roster.swift](https://github.com/Codecademy/learn-swift/blob/master/5-arrays-and-sets/school-roster/Roster.swift)
