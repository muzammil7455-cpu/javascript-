// chapter 1
// Question # 1
let num = prompt("Enter a positive integer:");
num = Number(num);

document.writeln(`number: ${num} <br>`)
document.writeln(`round off value: ${Math.round(num)} <br>`)
document.writeln(`floor value: ${Math.floor(num)} <br>`)
document.writeln(`ceil value: ${Math.ceil(num)} <br>`)

// Question # 2
let num1 = prompt("Enter a negative floating number:");
num1 = Number(num1);

document.writeln(`number: ${num1} <br>`)
document.writeln(`round off value: ${Math.round(num1)} <br>`)
document.writeln(`floor value: ${Math.floor(num1)} <br>`)
document.writeln(`ceil value: ${Math.ceil(num1)} <br>`)

// Question # 3
var num2 = prompt("Enter a number:");
num2 = Number(num2);

document.writeln("The absolute value of " + num2 + " is " + Math.abs(num2) +"<br>");

// Question # 4
var dice = Math.floor(Math.random() * 6) + 1;
document.writeln("Random Dice Value: " + dice +"<br>");
var dice1 = Math.floor(Math.random() * 6) + 1;
document.writeln("Random Dice Value: " + dice1 +"<br>");

// Question # 5
let toss = Math.floor(Math.random() * 2) + 1;

if (toss === 2) {
    document.writeln(`${toss}<br> Random Coin Value: Heads <br>`)
} else {
    document.writeln(`${toss}<br> Random Coin Value: Tails <br>`)
}

// Question #  6
let random = Math.floor(Math.random() * 100 + 1);

document.writeln(`random number between 1 and 100: ${random} <br>`);

// Question #  7
var weightInput = prompt("Enter your weight");
var weight = parseFloat(weightInput);

document.writeln(`Your weight is ${weight} kilograms <br>`);

// Question #  8
var secretNumber = Math.floor(Math.random() * 10) + 1;
var userGuess = parseInt(prompt("Guess a number between 1 and 10"));

if (userGuess === secretNumber) {
    alert("Congratulations! You guessed the correct number" );
} else {
    alert(`Sorry! The secret number was ${secretNumber}`);
}

// chapter 2
// Question # 1
var now = new Date();
document.writeln(now + "<br>");

// Question # 2 
var months = ["January","February","March","April","May","June",
              "July","August","September","October","November","December"];
var now = new Date();
document.writeln(months[now.getMonth()]);

// Question # 3
var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
var now = new Date();
document.writeln(days[now.getDay()]);

// Question # 4
var now = new Date();
var day = now.getDay();

if (day === 0 || day === 6) {
    document.writeln("It’s Fun day");
}

// Question # 5
var today = new Date();
var date = today.getDate();

if (date < 16) {
  document.writeln("First fifteen days of the month");
} else {
  document.writeln("Last days of the month");
}

// Question # 6
var d = new Date();
var millisecondsSince1970 = d.getTime();
var minutesSince1970 = d.getTime() / (1000 * 60);
document.writeln("Current Date: " + d);
document.writeln("Milliseconds since Jan 1, 1970: " + millisecondsSince1970);
document.writeln("Minutes since Jan 1, 1970: " + minutesSince1970);

// Question # 7
var time = new Date();
var hours = time.getHours();

if (hours < 12) {
  document.writeln("Its AM");
} else {
  document.writeln("Its PM");
}

// Question # 8
var laterDate = new Date(2020, 11, 31);
document.writeln(laterDate);

// Question # 9
var ramadanStart = new Date("June 18, 2015");
var today = new Date();

var diff = today.getTime() - ramadanStart.getTime();
var daysPassed = Math.floor(diff / (1000 * 60 * 60 * 24));

document.writeln(daysPassed + " days have passed since 1st Ramadan");
// Question # 10
var start2015 = new Date("January 1, 2015");
var now = new Date();

var seconds = Math.floor((now.getTime() - start2015.getTime()) / 1000);
document.writeln("Seconds elapsed since 2015: " + seconds);

// Question # 11
var currentDate = new Date();
currentDate.setHours(currentDate.getHours() + 1);

document.writeln(currentDate);

// Question # 12
var date = new Date();
date.setFullYear(date.getFullYear() - 100);

document.writeln("current date: " + date);

// Question # 13
var age = prompt("Enter your age");
var currentYear = new Date().getFullYear();
var birthYear = currentYear - age;
document.wrireln("Your age is " + age + "<br>")
document.writeln("Your birth year is " + birthYear);

// Question # 14
var customerName = "Muhammad Muzammil";
var month = new Date().toLocaleString("default", { month: "long" });
var units = 410;
var chargesPerUnit = 16;
var latePaymentSurcharge = 350;

var netAmount = (units * chargesPerUnit).toFixed(2);
var grossAmount = (parseFloat(netAmount) + latePaymentSurcharge).toFixed(2);

document.writeln("<h2>K-Electric Bill</h2>");
document.writeln("Customer Name: " + customerName + "<br>");
document.writeln("Month: " + month + "<br>");
document.writeln("Number of units: " + units + "<br>");
document.writeln("Charges per unit: " + chargesPerUnit + "<br>");
document.writeln("Net Amount Payable (within Due Date): " + netAmount + "<br>");
document.writeln("Late Payment Surcharge: " + latePaymentSurcharge + "<br>");
document.writeln("Gross Amount Payable (after Due Date): " + grossAmount);

























