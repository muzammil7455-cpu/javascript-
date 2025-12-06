// Question 1
let firstName =prompt("Enter your first name:");
let lastName =prompt("Enter your last name:");
let fullName = firstName + " " + lastName;
alert("Hello, " + fullName + "! Welcome!");

// Question 2
let favPhone = prompt("Enter your favorite phone model:");
document.writeln("My favorite phone is: " + favPhone + "<br>Length of string: " + favPhone.length + "<br>");

// Question 3
let word = "Pakistani";
document.writeln("String: " + word + "<br>Index of 'n': " + word.indexOf('n') + "<br>");

// Question 4
let greeting = "Hello World";
document.writeln("String: " + greeting + "<br>Last index of 'l': " + greeting.lastIndexOf('l') + "<br>");

// Question 5
let word2 = "Pakistani";
document.writeln("String: " + word2 + "<br>Character at index 3: " + word2.charAt(3) + "<br>");

// Question 6
let firstName2 = prompt("Enter your first name:");
let lastName2 = prompt("Enter your last name:");
let fullName2 = firstName2.concat(" ", lastName2);
alert("Hello, " + fullName2 + "! Welcome!" + "<br>");    

// Question 7
let city = "Hyderabad";
let newCity = city.replace("Hyder", "Islam");
document.writeln("City: " + city + "<br>After replacement: " + newCity + "<br>");

// Question 8
let message = "Ali and Sami are best friends. They play cricket and football together.";
let newMessage = message.replace(/and/g, "&");
document.writeln("Original Message: " + message + "<br>After replacement: " + newMessage + "<br>");

// Question 9                               
let str = "472";
let num = Number(str);

document.writeln("Value: " + str + "<br>");
document.writeln("Type: " + typeof str + "<br>");
document.writeln("Value: " + num + "<br>");
document.writeln("Type: " + typeof num + "<br>");

// Question 10
let userInput = prompt("Enter some text:");
let upperCaseInput = userInput.toUpperCase();
document.writeln("User Input: " + userInput + "<br>Uppercase: " + upperCaseInput + "<br>");

// Question 11
let userInput2 = prompt("Enter some text:");
let titleCaseInput = userInput2.charAt(0).toUpperCase() + userInput2.slice(1).toLowerCase();
document.writeln("User Input: " + userInput2 + "<br>Title Case: " + titleCaseInput + "<br>");

// Question 12
let num3 = 35.36;
let numStr = num3.toString().replace(".", "");
document.writeln("Number: " + num3 + "<br>Result: " + numStr + "<br>");

// Question 13
let username = prompt("Enter a username:");
let invalidChars = ["@", ".", ",", "!"];
let isValid = true;
for (let char of invalidChars) {
    if (username.includes(char)) {
        isValid = false;
        break;
    }   
}
if (isValid) {
    alert("Username is valid.");
} else {
    alert("Please enter a valid username without special characters (@, ., ,, !).");
}

// Question 14
let A = ["cake", "apple pie", "cookie", "chips", "patties"];
let userSearch = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?").toLowerCase();
let found = false;      
for (let i = 0; i < A.length; i++) {
    if (A[i].toLowerCase() === userSearch) {
        document.writeln(userSearch + " is available at index " + i + " in our bakery.<br>");
        found = true;
        break;
    }       
}
if (!found) {
    document.writeln("We are sorry. " + userSearch + " is not available in our bakery.<br>");
}   

// Question 15
let password = prompt("Enter your password:");

let hasLetter = /[a-zA-Z]/.test(password);
let hasNumber = /[0-9]/.test(password);
let startsWithNumber = /^[0-9]/.test(password);

if (password.length < 6 || !hasLetter || !hasNumber || startsWithNumber) {
    alert("Invalid password. Please follow the rules.");
} else {
    alert("Password accepted.");
}

// Question 16
let university = "University of Karachi";
let arr = university.split("");

for (let i = 0; i < arr.length; i++) {
    document.writeln(arr[i] + "<br>");
}

// Question 17  
let input = prompt("Enter something:");
let lastChar = input.charAt(input.length - 1);
document.writeln("Last character: " + lastChar + "<br>");

// Question 18
let text = "The quick brown fox jumps over the lazy dog";
let count = (text.toLowerCase().match(/the/g) || []).length;

document.writeln("Number of occurrences of 'the': " + count);

