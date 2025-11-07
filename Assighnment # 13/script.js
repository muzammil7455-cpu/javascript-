    // chapter 1 (alerts)
    // alert("First Name: Muhammad");
    // alert("Last Name: Muzammil");
    // alert("Email: muzammil7455@gmail.com");
    // alert("Phone Number: 0313-3240787");
    // alert("Password: 12345");
    // alert("You're learning JavaScript!");
    // alert("Welcome to my JavaScript practice!");

    // Chapter 2 (Variables for string)
    var fullName = `Muhammad Muzammil`;
    var cityName;
     cityName = "Karachi";
    var teamName = `pakistan`;
    alert(`teamName`);
    var bestMan = "charlie";
    bestMan = "muzammil";

    // Chapter 3 (Variables for numbers)
    var  caseQty;
    caseQty = 144;
    var num = 9;
    var sum ;
    sum = 5+10;
    var merchTotal = 100;
    var shippingCharge = 10;
    var orderTotal = merchTotal + shippingCharge;
    var score = 50;
    score = score + 25;

    //  chapter # 4
    // VARIABLE NAMES: LEGAL & ILLEGAL
    var name, age, city;
    // Legal variable 
    var firstName;
    var $price;
    var _userID;
    var totalAmount;
    var user1;

    // Illegal variable names
    // var 1user;      (cannot start with a number)
// var user-name;    (hyphen not allowed)
// var @value;       (no special characters except $ or _)
// var var;          (‘var’ is a reserved keyword)
// var user name;    (no spaces allowed)

console.log(`<b>Rules for naming JS variables</b>`);

 console.log("<p>Variable names can only contain <b>letters</b>, <b>numbers</b>, <b>$</b> and <b>_</b>. For example: <i>$my_1stVariable</i></p>");
   console.log("<p>Variables must begin with a <b>letter</b>, <b>$</b> or <b>_</b>. For example: <i>$name</i>, <i>_name</i> or <i>name</i></p>");
  console.log("<p>Variable names are case <b>sensitive</b>.</p>");
  console.log("<p>Variable names should not be JS <b>keywords</b>.</p>");

//  CHAPTER # 5 MATH EXPRESSIONS
var num1 = 3;
    var num2 = 5;
    var sum = num1 + num2;
    console.log("1. Sum of " + num1 + " and " + num2 + " is " + sum );
     console.log("2. Subt of "  + num1 + " and " + num2 + " is " + (num1 - num2)  );
    console.log( "3.Multiply of " + num1 + " and " + num2 + " is "  + (num1 * num2)  );
    console.log( "4.Division of " + num1 + " and " + num2 + " is "  + (num1 / num2)  );
    console.log("5.Modulus of " + num1 + " and " + num2 + " is "  + (num1 % num2)  );

    var num;
    console.log("Value after variable declaration is: " + num );
    num = 5;
    console.log("Initial value: " + num );
    num++;
    console.log("Value after increment is: " + num );
    num = num + 7;
    console.log("Value after addition is: " + num );
    num--;
    console.log("Value after decrement is: " + num );
    var remainder = num % 3;
    console.log("The remainder is: " + remainder  );

    console.log("Cost of Movie Tickets");
    var ticketPrice = 600;
    var totalCost = ticketPrice * 5;
    console.log("Cost of one movie ticket is " + ticketPrice + " PKR");
    console.log("Total cost to buy 5 tickets to a movie is " + totalCost + " PKR");

    console.log("Multiplication Table");
    var tableNumber = 4; 
    for (var i = 1; i <= 10; i++) {
      console.log(tableNumber + " x " + i + " = " + (tableNumber * i) );
    }

     var celsius = 25;
    var fahrenheit = (celsius * 9/5) + 32;
     console.log(celsius + "°C is " + fahrenheit + "°F");
    var fahrenheit2 = 70;
    var celsius2 = (fahrenheit2 - 32) * 5/9;
     console.log(fahrenheit2 + "°F is " + celsius2.toFixed(2) + "°C");

      var priceItem1 = 650;
    var priceItem2 = 100;
    var quantityItem1 = 3;
    var quantityItem2 = 7;
    var shippingCharges = 100;
    var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;

   console.log("Price of item 1 is " + priceItem1 + " PKR");
    console.log("Quantity of item 1 is " + quantityItem1 + "");
    console.log("Price of item 2 is " + priceItem2 + " PKR");
    console.log("Quantity of item 2 is " + quantityItem2 + "");
    console.log("Shipping Charges: " + shippingCharges + " PKR");
    console.log("Total cost of your order is " + totalCost + " PKR");

    var totalMarks = 980;
    var marksObtained = 804;
    var percentage = (marksObtained / totalMarks) * 100;
    console.log("Total Marks: " + totalMarks + "<br>");
    console.log("Marks Obtained: " + marksObtained + "<br>");
    console.log("Percentage: " + percentage.toFixed(2) + "%");

    var usDollars = 10;
    var saudiRiyals = 25;
    var usdToPkr = 104.80;
    var riyalToPkr = 28;
    var totalPkr = (usDollars * usdToPkr) + (saudiRiyals * riyalToPkr);
     console.log("Total Currency in PKR: " + totalPkr);
     var number = 10;

    var result = ((number + 5) * 10) / 2;
     console.log("Initial number: " + number );
     console.log("Result after ((number + 5) * 10) / 2 = " + result);

    var currentYear = 2025;
    var birthYear = 2003;
    var age1 = currentYear - birthYear;
    var age2 = age1 - 1;
     console.log("Current Year: " + currentYear );
    console.log("Birth Year: " + birthYear );
     console.log("They are either " + age1 + " or " + age2 + " years old.");

      var favoriteSnack = "Chocolate Chip Cookies";
    var currentAge = 20;
    var maxAge = 65;
    var amountPerDay = 3;
    var totalNeeded = (maxAge - currentAge) * 365 * amountPerDay;
    console.log("Favorite Snack: " + favoriteSnack );
    console.log("Current Age: " + currentAge );
    console.log("Estimated Maximum Age: " + maxAge );
    console.log("Amount of snacks per day: " + amountPerDay );
    console.log("You will need " + totalNeeded + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge + ".");

    var a = 2, b = 1;
var result = --a - --b + ++b + b--;
--a;
--a - --b;
--a - --b + ++b;
--a - --b + ++b + b--;
console.log(result);

var name = prompt("Enter your name:");
alert("Hello " + name + "! Welcome!");

var num = prompt("Enter a number to show its multiplication table:", 5);
console.log("Multiplication Table of " + num );

for (var i = 1; i <= 10; i++) {
  console.log(num + " x " + i + " = " + (num * i) );
}

// a) Take three subjects name from user
var subject1 = prompt("Enter name of first subject:");
var subject2 = prompt("Enter name of second subject:");
var subject3 = prompt("Enter name of third subject:");

// b) Total marks for each subject
var totalMarks = 100;

// c) & d) Take obtained marks for each subject
var obtained1 = +prompt("Enter obtained marks for " + subject1 + ":");
var obtained2 = +prompt("Enter obtained marks for " + subject2 + ":");
var obtained3 = +prompt("Enter obtained marks for " + subject3 + ":");

// e) Calculate total and percentage
var totalObtained = obtained1 + obtained2 + obtained3;
var percentage = (totalObtained / (totalMarks * 3)) * 100;

// Display the result in a table
document.write("<h2>Marks Sheet</h2>");
document.write("<table border='1' cellpadding='8'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtained1 + "</td><td>" + ((obtained1 / totalMarks) * 100).toFixed(2) + "%</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtained2 + "</td><td>" + ((obtained2 / totalMarks) * 100).toFixed(2) + "%</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtained3 + "</td><td>" + ((obtained3 / totalMarks) * 100).toFixed(2) + "%</td></tr>");
document.write("</table>");

document.write("<h3>Total Marks: " + (totalMarks * 3) + "</h3>");
document.write("<h3>Marks Obtained: " + totalObtained + "</h3>");
document.write("<h3>Overall Percentage: " + percentage.toFixed(2) + "%</h3>");
