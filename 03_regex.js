// Use the caret character in a regex to find Cal only in the beginning of the string rickyAndCal.
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; 
let result = calRegex.test(rickyAndCal);


// Use the anchor character ($) to match the string caboose at the end of the string caboose.
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; 
let result = lastRegex.test(caboose);


// Use the shorthand character class \w to count the number of alphanumeric characters 
// in various quotes and strings.

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; 
let result = quoteSample.match(alphabetRegexV2).length;


// Use the shorthand character class \W to count the number of non-alphanumeric characters
//  in various quotes and strings.
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; 
let result = quoteSample.match(nonAlphabetRegex).length;


// Use the shorthand character class \d to count how many digits are in movie titles.
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; 
let result = movieName.match(numRegex).length;


// Use the shorthand character class for non-digits \D to count how many non-digits are in movie titles
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; 
let result = movieName.match(noNumRegex).length;


Usernames can only use alpha-numeric characters.

// The only numbers in the username have to be at the end. There can be zero or more of them at the end.
// Username cannot start with the number.
// Username letters can be lowercase and uppercase.
// Usernames have to be at least two characters long.
//  A two-character username can only use alphabet letters as characters.
let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; 
let result = userCheck.test(username);


// Change the regex countWhiteSpace to look for multiple whitespace characters in a string.
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; 
let result = sample.match(countWhiteSpace);


// Change the regex countNonWhiteSpace to look for multiple non-whitespace characters in a string.
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; 
let result = sample.match(countNonWhiteSpace);


// Change the regex ohRegex to match the entire phrase Oh no only when it has 3 to 6 letter h's.
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/; 
let result = ohRegex.test(ohStr);


// Change the regex haRegex to match the word Hazzah only when it has four or more letter z's
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; 
let result = haRegex.test(haStr);


// Change the regex timRegex to match the word Timber only when it has four letter m's.
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; 
let result = timRegex.test(timStr);


// Change the regex favRegex to match both the American English (favorite) 
// and the British English (favourite) version of the word.
let favWord = "favorite";
let favRegex = /favou?rite/; 
let result = favRegex.test(favWord);


// Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long
// , and have two consecutive digits.
let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/; 
let result = pwRegex.test(sampleWord);


// Fix the regex so that it checks for the names of Franklin Roosevelt or Eleanor Roosevelt in a case
// sensitive manner and it should make concessions for middle names.
// Then fix the code so that the regex that you have created is checked against 
// myString and either true or false is returned depending on whether the regex matches.
let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor) (([A-Z]\.?|[A-Z][a-z]+) )?Roosevelt/;
let result = myRegex.test(myString);


// Write a regex fixRegex using three capture groups that will search for each word in
//  the string one two three. Then update the replaceText variable to replace one two three with
//  the string three two one and assign the result to the result variable. Make sure you are 
// utilizing capture groups in the replacement string using the dollar sign ($) syntax.
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; 
let replaceText = "$3 $2 $1"; 
let result = str.replace(fixRegex, replaceText);


// Write a regex and use the appropriate string methods to remove 
// whitespace at the beginning and end of strings.
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; 
let result = hello.replace(wsRegex, ""); 