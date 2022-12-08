// Complete the regex unRegex so that it matches the strings run,
//  sun, fun, pun, nun, and bun. Your regex should use the wildcard character.
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /un./; // Change this line
let result = unRegex.test(exampleStr);


// Use a character class with vowels (a, e, i, o, u)
//  in your regex vowelRegex to find all the vowels in the string quoteSample.
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi
let result = quoteSample.match(vowelRegex); 


// Match all the letters in the string quoteSample.
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; 
let result = quoteSample.match(alphabetRegex); 


// Create a single regex that matches a range of letters between h and s,
//  and a range of numbers between 2 and 6. 
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; 
let result = quoteSample.match(myRegex); 


// Create a single regex that matches all characters that are not a number or a vowel.
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou^0-9]/gi;
let result = quoteSample.match(myRegex);


// You want to find matches when the letter s occurs one or more times in Mississippi.
let difficultSpelling = "Mississippi";
let myRegex = /s+/g; 
let result = difficultSpelling.match(myRegex);


// Create a regex chewieRegex that uses the * character to match an uppercase A character immediately
//  followed by zero or more lowercase a characters in chewieQuote
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!"
let chewieRegex = /Aa*/g;
let result = chewieQuote.match(chewieRegex);


// Fix the regex /<.*>/ to return the HTML tag <h1> and not the text "<h1>Winter is coming</h1>"
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/;
let result = text.match(myRegex);


// Write a greedy regex that finds one or more criminals within a group of other people.
//  A criminal is represented by the capital letter C.
let reCriminals = /C+/; 