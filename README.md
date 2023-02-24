# Adrian-Mikkelsen-Johannessen-JS1-CA

# Uploaded on Github and Netlify.

https://github.com/AdrianMikk/Adrian-Mikkelsen-Johannessen-JS1-CA
https://delicate-bunny-0a84fa.netlify.app/

# Index.html

For the index page I just added a simple border around and in between the jokes to separate them.
And added a h1, a home button and a contact button.

# Details.html

On the details page I have the joke itself with the category of the joke, and ID of the joke and a "go back" button.

# Contact.html

The contact page includes a first name, a last name, a subject, an email, and an address which includes the criteria of minimum characters etc. It also have a submit button, which displays an error message if you have forgotten or if you haven't met the criteria. If you fill out the form like it says, it displays a "Success! Your form has been submitted." in green to let you know that everything worked. It also have a "go back" button.

All of these includes a footer where I credit the API.

# Javascript

First I had to figure out how to fetch the jokes. And how to display them. On the index.js I have a displayJoke function where I fetch the data from the url. I have two different types of joke where one have a joke and a punchline, and some that have the joke like a punchline. I had to display both, and I also wanted to display a category so you can choose on for your own liking.
And a catch with "There was an error loading the jokes" if something went wrong.
I also have a loader with a 2 second timeout before it displays anything.

On the details I get the ID of the joke and again a loader with a 2 second timeout before showing the details of the joke. Same with the error catch.
I have a createJoke(details) function where it shows the category of the joke and the ID including the joke itself. Same for the ones with just a punchline.

The contact page I struggled a bit with, but eventually figured out. I had some problems with displaying the error messages and getting the form to do what it was supposed to do. I have all the criteria which I mentioned in the contact.html above. Which displays an error message if it doesn't match what I want it to match. If you don't do it correctly it will display a message showing you what you need to do or what you did wrong. If not it submits the form and a "Success!" message. I had to check all the lengths with a function and add the regEx function to get it all to work, and validate the email.
