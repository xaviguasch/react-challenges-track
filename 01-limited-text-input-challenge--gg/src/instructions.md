Now that you know how to add preserve state in React, let's revisit our Character Limit challenge from earlier in the course and make it a little more sophisticated.

The goal of this app is to get some input from the user, but only "submit" that input if its length is less than or equal to characterLimit (20 characters, by default). Unlike our other "Character Limit" challenges, this one shows the user how many characters they have left before they hit the limit.

TASKS
LimitedTextInput renders an input and submit button

Update the remaining characters count when the user types

Add an error class to the "Characters remaining:" span element when the user exceeds the character limit and a no-error when they haven't

alert "The input exceeds the character limit. Please shorten your text." when the user submits a form with too many characters

alert "Thanks for your submission" when the user submits a form with an acceptable number of characters

Reset the input back to an empty string when the form is successfully submitted
