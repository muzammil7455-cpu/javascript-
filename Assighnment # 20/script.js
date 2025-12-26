// 1. Display current date & time
function showDateTime() {
  var now = new Date();
  document.write.ln("<h3>Current Date & Time:</h3>" + now + "<br><br>");
}
showDateTime();


// 2. Greet user with full name
function greetUser(firstName, lastName) {
  document.write.ln("<h3>Greeting:</h3>Hello " + firstName + " " + lastName + "<br><br>");
}
greetUser("Muhammad", "Muzammil");


// 3. Add two numbers (user input)
function addNumbers() {
  var num1 = +prompt("Enter first number");
  var num2 = +prompt("Enter second number");
  return num1 + num2;
}
document.write.ln("<h3>Sum:</h3>" + addNumbers() + "<br><br>");


// 4. Calculator
function calculator(num1, num2, operator) {
  if (operator === "+") return num1 + num2;
  if (operator === "-") return num1 - num2;
  if (operator === "*") return num1 * num2;
  if (operator === "/") return num1 / num2;
}
document.write.ln("<h3>Calculator Result:</h3>" + calculator(10, 5, "*") + "<br><br>");


// 5. Square of a number
function square(num) {
  return num * num;
}
document.write.ln("<h3>Square:</h3>" + square(6) + "<br><br>");


// 6. Factorial
function factorial(num) {
  var result = 1;
  for (var i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}
document.write.ln("<h3>Factorial:</h3>" + factorial(5) + "<br><br>");


// 7. Counting
function counting(start, end) {
  document.write.ln("<h3>Counting:</h3>");
  for (var i = start; i <= end; i++) {
    document.write.ln(i + " ");
  }
  document.write.ln("<br><br>");
}
counting(1, 10);


// 8. Hypotenuse (Nested Function)
function calculateHypotenuse(base, perpendicular) {
  function calculateSquare(x) {
    return x * x;
  }
  var hypotenuse = Math.sqrt(
    calculateSquare(base) + calculateSquare(perpendicular)
  );
  document.write.ln("<h3>Hypotenuse:</h3>" + hypotenuse + "<br><br>");
}
calculateHypotenuse(3, 4);


// 9. Area of rectangle
function areaRectangle(width, height) {
  return width * height;
}
document.write.ln("<h3>Area (Values):</h3>" + areaRectangle(5, 10) + "<br>");

var w = 7;
var h = 4;
document.write.ln("<h3>Area (Variables):</h3>" + areaRectangle(w, h) + "<br><br>");


// 10. Palindrome check
function isPalindrome(str) {
  var reversed = str.split("").reverse().join("");
  return str === reversed;
}
document.write.ln("<h3>Palindrome:</h3>" + isPalindrome("madam") + "<br><br>");


// 11. Capitalize first letter of each word
function capitalizeWords(str) {
  var words = str.split(" ");
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}
document.write.ln("<h3>Capitalize:</h3>" + capitalizeWords("the quick brown fox") + "<br><br>");


// 12. Longest word
function longestWord(str) {
  var words = str.split(" ");
  var longest = "";
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest;
}
document.write.ln("<h3>Longest Word:</h3>" + longestWord("Web Development Tutorial") + "<br><br>");


// 13. Count occurrences of letter
function countLetter(str, letter) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      count++;
    }
  }
  return count;
}
document.write.ln("<h3>Letter Count:</h3>" + countLetter("JSResourceS.com", "o") + "<br><br>");


// 14. The Geometrizer
function calcCircumference(radius) {
  var c = 2 * Math.PI * radius;
  document.write.ln("<h3>Circumference:</h3>The circumference is " + c + "<br>");
}

function calcArea(radius) {
  var a = Math.PI * radius * radius;
  document.write.ln("<h3>Area:</h3>The area is " + a + "<br>");
}

calcCircumference(5);
calcArea(5);
