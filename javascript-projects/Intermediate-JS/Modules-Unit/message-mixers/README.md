# Message Mixer

Source:
From Codecademy's Learn Intermediate JavaScript course, Modules Unit:
<https://www.codecademy.com/learn/learn-intermediate-javascript>

## Overview
Message Mixer Inc. offers a message-encryption service that transforms input text, using various [ciphers](https://en.wikipedia.org/wiki/Cipher), and displays the encrypted message to the console.

There are three encryption methods provided by this service:

1. A [“Caesar Cipher”](https://en.wikipedia.org/wiki/Caesar_cipher) in which the characters of the input message are shifted alphabetically by a given amount.
2. A “Symbol Cipher” in which select characters from the input message are replaced with visually similar symbols.
3. A “Reverse Cipher” in which each word of the input message is reversed in place.

To use this service, run the command below:

    node message-mixer.js ['caesar'|'symbol'|'reverse'] [amount]

Here are some examples of running this program:

    $ node message-mixer.js caesar 4
    Enter the message you would like to encrypt...
    > hello world

    Here is your encrypted message:
    > lipps asvph

    $ node message-mixer.js 'reverse'
    Enter the message you would like to encrypt...
    > hello world

    Here is your encrypted message:
    > olleh dlrow

At present, Message Mixer Inc. sells their encryption service as a program in a single file called **message-mixer.js**. This single file includes:

1. The functions that perform the encryptions listed above.
2. The code for retrieving the user input.
3. The code for displaying the output back to the user.

Message Mixer Inc. now wants to join the open-source community by packaging its encryption functions in a module and allowing other developers to import these encryption functions into their own projects.

In this project, you will help Message Mixer Inc. extract and isolate its encryption functions into a module, called **encryptors.js**, and then refactor **message-mixer.js** to use this module’s functions.

Before you begin, try running the commands listed above in the terminal. Then, familiarize yourself with how the program works by examining the three files in the file directory, focusing on **message-mixer.js**. At the top of this file you will find the three encryption cipher functions. Towards the bottom of the file, you will find some code that uses the `process.argv`, `process.stdin`, `process.stdout` environment variables to determine which encryption method to use, parse the user input, and display the encrypted message.

### Tasks

#### Extract the encryption functions

1. 
The three encryption functions that Message Mixer Inc. wants to share are defined in **message-mixer.js**. They are:

- `caesarCipher()`
- `symbolCipher()`
- `reverseCipher()`

First, copy all three of these function definitions into **encryptors.js**. Then, save **encryptors.js**.

2. 
Now, to turn **encryptors.js** into a module, its functions must be exported.

Inside **encryptors.js**, assign each encryption function as a property of the `module.exports` object.

#### Refactor your code to use the exported functions

3. 
Now that you have moved the encryption functions into **encryptors.js** and exported them, you now have these functions duplicated.

First, delete these three function definitions from **message-mixer.js**.

As a result, you should only have the user input and output logic remaining. Additionally, running the program will now produce reference errors.

4. 
You can now replace those deleted functions by importing them from the **encryptors.js** module.

There are multiple ways of doing this, however, the suggested approach will avoid needing to make modifications to the input / output logic.

At the top of **message-mixer.js**:

- Declare a new variable called encryptors.
- Then, import the `module.exports` object from **encryptors.js** and assign the imported object to `encryptors`.

5. 

The `module.exports` object from **encryptors.js** is now stored in the variable `encryptors`.

Extract the three encryption methods from `encryptors` and store them in three variables: `caesarCipher`, `symbolCipher`, and `reverseCipher`.

6. 
Well done! If you’ve completed the steps correctly you should now be able to run the program again. For example, try running this command in the terminal:

    node **message-mixer.js** caesar 4

And then, when prompted, type the following message:

    > cnawp fkx!

By moving the encryption functions into a separate module and exporting them, you’ve separated the concerns of the program, making it more organized and easier to navigate. Furthermore, you can now use these encryption methods to build another program!

#### Create a new program using the module

7. 
The developers over at Super Encoder LLC heard about the **encryptors.js** module that you just released and want to use your encryption functions to create a new program.

The Super Encoder developers want the user to be able to use their program to encode messages and decode them using the commands below:

    node super-encoder.js encode

and

    node super-encoder.js decode

Try running each of these commands. They currently print `undefined`.

8. 
Open up **super-encoder.js** where you will see the input / output logic already defined.

At the top of the file, you should see the functions `encodeMessage()` and `decodeMessage()` are incomplete. It will be your job to use the encryption functions to complete these two functions.

First, at the top of **super-encoder.js**, import the encryption functions `caesarCipher()`, `symbolCipher()`, and `reverseCipher()` from the **encryptors.js** file.

9. 
Use the three encryption methods to complete the `encodeMessage()` function by passing the input str parameter into one encryption function and then passing the returned value to the next encryption function. `encodeMessage()` should return the final encoded message.

Some guidelines:

- You must use each encryption function at least once.
- It is your choice what order you use to call the encryption functions.
- You may also re-use encryption functions to encode the message.
- `caesarCipher()` requires an `amount` argument. Choose some number between `0` and `26` to use for this argument and remember your choice for `decodeMessage()`.

When you are finished, try running the program like so:

    node super-encoder.js encode

10. 
Decoding is the process of taking an encoded message and determining the original message by reversing the encoding process.

For example, using **message-mixer.js**, we can encode the message `'hello world'` using a Caesar cipher with an amount of `4` like so:

    $ node message-mixer.js caesar 4
    Enter the message you would like to encrypt...
    > hello world
    
    Here is your encrypted message:
    > lipps asvph

To decode the message `'lipps asvph'`, we can run the program in reverse, like so:

    $ node message-mixer.js caesar -4
    Enter the message you would like to encrypt...
    > lipps asvph
    
    Here is your encrypted message:
    > hello world

Now, in **super-encoder.js**, define `decodeMessage()` to provide a function that reverses the encoding of `encodeMessage()`.

11. 
If you completed all of the steps properly, you should now be able to encode the message “hello world” to produce an encoded message. You should then be able to take the encoded message and decode it to get “hello world” back.

In the terminal, run the **super-encoder.js** program to test your code.
