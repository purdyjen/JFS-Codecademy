# WorkAround Explorer

Source:
From Codecademy's Learn Intermediate JavaScript course, Modules Unit:
<https://www.codecademy.com/learn/learn-intermediate-javascript>

## Overview

WorkAround is a research organization that provides data on salary trends in the tech industry. Open up **salaryData.js** to see the data they have collected. You’ll notice that they have also created a few functions for filtering that data to get subsets of data by role and by company.

WorkAround now wants to release a new web application called WorkAround Explorer to make their data more easily viewable. This web app should allow users to choose specific roles and companies in the tech industry to see the following information:

- The salary for the chosen role at the chosen company.
- The industry average for the chosen role.
- The average salary at the chosen company across all roles.
- The industry average salary across all roles and all companies.

Much of the user interface has already been designed by front-end developers, however, the core data and functionality are either missing or need to be connected together using modules. Your task is to help your team members out by using your `import` and `export` expertise!

### Tasks

#### Render the radio buttons using the salaryData module

1. 
These first four tasks will focus on rendering the `<input>` elements using the names of the companies and the different roles available in the collected salary data.

Open **salaryData.js** where you will find the collected data in the variable `salaryData`. Below are four functions for filtering down this data.

You need to:

- Export the four functions from **salaryData.js** using ES6 named `export` syntax.
- Export the `salaryData` array as the `default` export.

*Note: In most web browsers, you can [access the developer console](https://www.codecademy.com/articles/use-devtools) to get some helpful errors by right-clicking anywhere on the page and selecting “Inspect.”*

2. 
Open up **main.js** and take a look at the function `renderInputButtons()`. This function accepts an array of labels that are used to create individual [radio-style `<input>` elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio). The function also accepts a string that is used as the name for that input group.

Currently, this function is being called twice with the variables `companies` and `roles` as the first arguments. However, each of these variables are assigned empty arrays.

Instead, you will use the `getRoles()` and `getCompanies()` functions from **salaryData.js** to initialize these variables.

First, at the top of **main.js**, use ES6 named `import` syntax to import `getRoles` and `getCompanies` from **salaryData.js**. Check the file system to determine the relative path from **main.js**.

3. 
Now, replace the empty arrays assigned to `companies` and `roles` with function calls to `getCompanies()` and `getRoles()`, respectively.

4. 
Even if you correctly completed the previous tasks, the radio-style `<input>` elements still will not render. This is because we are now required to specify that **main.js** is using modules.

In index.html, add a `type` attribute to `<script src='main.js'>` with the correct value to indicate that the **main.js** script is using modules.

After completing this task, you should see the radio-style `<input>` elements rendered in your application!

#### Create the workAroundModule

5. 
Great job! You now have radio-style `<input>` elements for the different companies and roles represented in the salary dataset. Try selecting a combination of company and role and you’ll see that the data isn’t being calculated. Instead, all four values are showing up as $0.

Open up **workAroundModule.js** where you will find four functions that each calculate a different data value that we want to display. They are currently incomplete.

To complete these four functions, you will need some data from **salaryData.js**.

- Import the functions `getDataByRole()` and `getDataByCompany()` from **salaryData.js** using named `import` syntax.
- Import `salaryData` from **salaryData.js** using the default `import` syntax.

*Note: The reason these functions are in a separate module from **salaryData.js** is to achieve separation of concerns. **salaryData.js** is concerned only with providing access to raw data while **workAroundModule.js** is concerned with digging into the data to find precise values.*

6. 
Each of the incomplete functions in **workAroundModule.js** contains an empty array (`[]`) that needs to be replaced. You will need to use the appropriate imported data/functions from the **salaryData.js** module to replace these arrays.

7. 
As a final step, to make these functions available to **main.js**, export the four functions using named `export` syntax.

#### Calculate and render the data when the user input changes

8. 
We are all set up now to use the functions defined in **workAroundModule.js** to calculate and render the data based on the user’s input selections.

In **main.js**, import the four functions from **workAroundModule.js**.

9. 
And finally, take a look at `updateResults()`. This function is called any time the user selects one of the radio input elements.

At the top of the definition of `updateResults()`, the `company` and `role` selected by the user are extracted from the `<input>` elements. These values can be used in combination with the imported functions from **workAroundModule.js** to calculate the four variables below:

    const averageSalaryByRole = 0;
    const averageSalaryByCompany = 0;
    const salary = 0;
    const industryAverageSalary = 0;

As you can see, they are all assigned to `0` rather than the appropriate calculated data. Replace each `0` with a call to the appropriate imported function from **workAroundModule.js** using either (or both) `company` and `role` as arguments.

#### Extra Challenge

10. 
Congrats! You’ve helped WorkAround build their WorkAround Explorer application using a modular approach. The end result is a well-organized program with clear boundaries for each of its separate concerns.

Often, programmers will create a set of generic “utility” functions that can be applied to any program, regardless of the context. In this case, it would be useful to have a function that can properly format a number, like so:

    const result = formatNumber(1234567.89);
    // result = "1,234,567.89"

As an extra challenge:

- Create a new file in the **modules/** directory called **utilities.js**.
- Define and export a function in **utilities.js** called `formatNumber()`. This function should have a `number` parameter and should return a string representation of that `number` value with a comma (`,`) character between every 3rd digit.
- Import this function into **main.js** and use it to format the four data values rendered to the screen.
