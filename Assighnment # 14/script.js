// Question # 1
var city = prompt("enter your city name:");
if (city ==="Karachi") {
    alert("Welcome to city of lights")
}
// Question # 2
var gender = prompt("enter your gender (male or female):");
if (gender === "male") {
    alert("Good Morning Sir")
}
else if (gender === "female") {
    alert("Good Morning Ma'am")
}
// Question # 3
 var color = prompt("Enter traffic signal color (Red, Yellow, Green):");
if (color === "red") {
      alert("Must Stop");
    } else if (color === "yellow") {
      alert("Ready to move");
    } else if (color === "green") {
      alert("Move now");
    } else {
      alert("Invalid color! Please enter Red, Yellow, or Green.");
    }
    // Question # 4
    var fuel = prompt("enter your fuel in your car:") 
    if (fuel <= "0.25litres") {
        alert("Please refill the fuel in your car")
    }
    // Question # 5
   var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
if (true){
alert("True");
}
if (false){
alert("False");
}
if("car" < "cat"){
alert("car is smaller than cat");
}
// Question # 6
var subject1 = +prompt("Enter marks obtained in Subject 1:");
    var subject2 = +prompt("Enter marks obtained in Subject 2:");
    var subject3 = +prompt("Enter marks obtained in Subject 3:");
    var totalMarks = +prompt("Enter total marks:");

    var obtainedMarks = subject1 + subject2 + subject3;
    var percentage = (obtainedMarks / totalMarks) * 100;
    var grade, remarks;

    if (percentage >= 80) {
      grade = "A-one";
      remarks = "Excellent";
    } else if (percentage >= 70) {
      grade = "A";
      remarks = "Good";
    } else if (percentage >= 60) {
      grade = "B";
      remarks = "You need to improve";
    } else {
      grade = "Fail";
      remarks = "Sorry";
    }
    document.write("<h3>Marks Sheet</h3>");
    document.write("Total Marks: " + totalMarks + "<br>");
    document.write("Marks Obtained: " + obtainedMarks + "<br>");
    document.write("Percentage: " + percentage.toFixed(2) + "%<br>");
    document.write("Grade: " + grade + "<br>");
    document.write("Remarks: " + remarks);
// Question # 7
var secretNumber = 7; 
var guess = +prompt("Guess the secret number (1-10):");

if (guess === secretNumber) {
  alert("Bingo! Correct answer");
} else if (guess + 1 === secretNumber) {
  alert("Close enough to the correct answer");
} else {
  alert("Try again!");
}
// Question # 8
var num = +prompt("Enter a number to check if it's divisible by 3:");
if (num % 3 === 0) {
  alert(num + " is divisible by 3");
} else {
  alert(num + " is not divisible by 3");
}
// Question # 9
var number = +prompt("Enter a number to check if it's even or odd:");
if (number % 2 === 0) {
  alert(number + " is even");
} else {
  alert(number + " is odd");
}
// Question # 10
var temp = prompt("Enter the temperature:");

if (temp > 40) {
  alert("It is too hot outside.");
}else if (temp > 30) {
  alert("The Weather today is Normal.");
}else if (temp > 20) {
  alert("Today’s Weather is cool.");
}else if (temp > 10) {
  alert("OMG! Today’s weather is so Cool.");
}
// Question # 11
var num1 = +prompt("Enter first number:");
var num2 = +prompt("Enter second number:");
var operation = prompt("Enter operation (+, -, *, /, %):");
var result;

if (operation === "+") {
  result = num1 + num2;
} else if (operation === "-") {
  result = num1 - num2;
} else if (operation === "*") {
  result = num1 * num2;
} else if (operation === "/") {
  result = num1 / num2;
} else if (operation === "%") {
  result = num1 % num2;
} else {
  alert("Invalid operation!");
}

if (result !== undefined) {
  alert("Result: " + result);
}




