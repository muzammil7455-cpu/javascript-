// Chapter # 1 (alerts)
alert("Welcome to javascript!");

let userName = prompt("Enter your name:");
alert("Hello, " + userName + "!");

let favColor = prompt("What is your favorite color?");
alert("Wow! " + favColor + " is a beautiful color!");

// Chapter # 2 (variables for strings)
let firstName = "Muzammil";
let lastName = "Sajid";
let fullName = firstName + " " + lastName;
alert("Full Name: " + fullName);

let cityName = "karachi";
alert(`you live in ${cityName}`);

let hobby = `reading books`;
alert(`My hobby is ${hobby}`);

// Chapter 3 – Variables for Numbers
let num1 =`10`;
let num2 =`5`;
let sum =num1 + num2;
alert(sum);

let marks = `85`;
alert(marks >= 50 ? "Pass" : "Fail");

let age = `20`;
alert(age >= 18 ? "You are eligible to vote." : "You are not eligible to vote.");

// Chapter 4 – Variable Names: Legal & Illegal
let LegalName, myAge, totalMarks;
alert("Legal variable names created!");

alert("Illegal names: 1num, my-age, var");

let vars = ["userName", "myAge", "totalMarks"];
alert(vars);

// Chapter 5 – Math Expressions: Familiar Operators
let a = 15;
let b = 7;      
let addition = a + b;
let subtraction = a - b;
let multiplication = a * b;
let division = a / b;
let modulus = a % b;    
alert("Addition: " + addition);
alert("Subtraction: " + subtraction);
alert("Multiplication: " + multiplication);
alert("Division: " + division);
alert("Modulus: " + modulus);
let number = 10;
 number ++;
    alert("After increment: " + number);

// Chapter 6 – Math Expressions: unfamiliar operators
let num = 10;
alert("Initial value: " + num);
num++;  
alert("After increment: " + num);
num--;  
alert("After decrement: " + num);

let n = 5;
n += 3;
alert("After addition assignment: " + n);
n -= 2; 
alert("After subtraction assignment: " + n);
n *= 4; 
alert("After multiplication assignment: " + n);
n /= 2; 
alert("After division assignment: " + n);

// Chapter 7 – Math Expressions: eliminating ambiguity
let r = (2 + 3) * 4;
alert(r);

let res = 5 + 3 * 2 - 1;
alert(res);

let calc = ((4 + 2) * (6 - 3));
alert(calc);
// Chapter 8 – Concatenating text strings
let f = "Ali", l = "Raza";
alert(f + " " + l);

let userCity = "Lahore";
alert("Welcome from " + userCity);

alert("Hello " + f + "! You live in " + userCity + ".");
// Chapter 9 – prompts
let favColor = prompt("Favorite color?");
alert("Your favorite color is " + favColor);

let userAge = prompt("Your age?");
alert("You are " + userAge + " years old");

let fruit = prompt("Favorite fruit?");
alert("Favorite fruit: " + fruit);

// Chapter 10 – if statements
let n1 = 12;
if (n1 > 10) alert("Number is greater than 10");

let m1 = 55;
if (m1 >= 50) alert("Pass");

let age1 = 16;
if (age1 < 18) alert("Minor");

// Chapter 11 – Comparison operators
alert(5 > 3);

let A = 10, B = 10;
alert(A == B ? "Numbers are equal" : "Numbers are not equal");

alert(5 <= 10);

// Chapter 12 – if...else and else if statements
let score = 85;
if(score >= 90) alert("A");
else if(score >= 70) alert("B");
else alert("C");

let ag = 15;
if(ag < 12) alert("Child");
else if(ag < 18) alert("Teen");
else alert("Adult");

let temp = 30;
if(temp > 35) alert("Hot");
else if(temp > 20) alert("Warm");
else alert("Cold");

// Chapter 13 – Testing sets of conditions
let num1 = 6;
if(num1 > 0 && num1 % 2 == 0) alert("Positive & even");

let mk = 75;
if(mk >= 50 && mk <= 100) alert("Valid Marks");

let n2 = 15;
if(n2 % 3 == 0 && n2 % 5 == 0) alert("Divisible by 3 & 5");

// Chapter 14 – if statements nested
let age2 = 20, hasID = true;
if(age2 >= 18){
    if(hasID) alert("Allowed");
    else alert("Not Allowed");
}
let n3 = 8;
if(n3 > 0){
    if(n3 % 2 == 0) alert("Positive Even");
}
let marks2 = 60, extra = true;
if(marks2 >= 50){
    if(extra) alert("Extra Credit Applied");
}

// Chapter 15 – Arrays
let fruits = ["Apple","Mango","Banana","Grapes","Orange"];
alert(fruits);

let nums = [10,20,30,40];
alert(nums[0] + " & " + nums[nums.length-1]);

let colors = ["Red","Blue","Green"];
alert(colors);

// Chapter 16 – Arrays: adding and removing elements
var fruits = ["Apple", "Banana", "Mango"];
fruits.push("Orange");
alert(fruits);

var fruits = ["Apple", "Banana", "Mango"];
fruits.pop();
alert(fruits);

var fruits = ["Apple", "Banana", "Mango"];
fruits.unshift("Orange");   
fruits.shift();             
alert(fruits);

// Chapter 17 – Arrays: removing, inserting, and extracting elements
var arr = ["A", "B", "C"];
arr.splice(1, 0, "X");  
alert(arr);

var arr = ["A", "B", "C", "D"];
arr.splice(2, 1);
alert(arr);

var arr = ["A", "B", "C", "D", "E"];
var part = arr.slice(1, 4);
alert(part);

// Chapter 18 – loops
for(let i = 1; i <= 5; i++){
    alert( i);
}

var items = ["Pen", "Book", "Table"];
for (var i = 0; i < items.length; i++) {
    alert(items[i]);
}

for (var i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
        alert(i);
    }
}

// Chapter 19 – for loops: flags, Booleans, array length, and breaks
var nums = [10, 20, -5, 40];
for (var i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
        alert("Negative found: " + nums[i]);
        break;
    }
    alert(nums[i]);
}

var nums = [5, 7, 9, 12];
var flag = false;

for (var i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
        flag = true;
    }
}
alert("Even number found? " + flag);

var nums = [10, 20, 55, 30];
for (var i = 0; i < nums.length; i++) {
    if (nums[i] > 50) {
        alert("Stopped at: " + nums[i]);
        break;
    }
    alert(nums[i]);
}
// Chapter 20 – for loops nested
for (var i = 1; i <= 3; i++) {
    for (var j = 1; j <= 10; j++) {
        alert(i + " x " + j + " = " + (i*j));
    }
}

var arr = [[1,2], [3,4], [5,6]];
for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
        alert(arr[i][j]);
    }
}
var a = [1, 2, 3];
var b = [4, 5, 6];

for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < b.length; j++) {
        alert(a[i] + b[j]);
    }
}
// Chapter 21 – changing case
var text = "hello world";
alert(text.toUpperCase());

var text = "HELLO WORLD";
alert(text.toLowerCase());

var text = "javascript";
var result = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
alert(result);

// Chapter 22 – strings: measuring length and extracting parts
var str = "Hello, World!";
alert("Length: " + str.length);

var text = "JavaScript";
alert(text.slice(0, 3));

var text = "Programming";
alert(text.slice(-3));

// Chapter 23 – strings: finding segments
var text = "I love JavaScript";
alert(text.indexOf("love"));

var text = "Hello World";
alert(text.lastIndexOf("l"));

var text = "JavaScript is fun";
alert(text.includes("fun"));

// Chapter 24 – Strings: finding a character at a location
var text = "Hello";
alert(text.charAt(2));

var text = "Hello";
alert(text.charAt(text.length - 1));

var text = "Hello";
var mid = Math.floor(text.length / 2);
alert(text.charAt(mid));

// Chapter 25 – strings: replacing characters
var text = "I like apples";
var result = text.replace("apples", "mangoes");
alert(result);

var text = "banana";
var result = text.replace(/a/g, "o");
alert(result);

var text = "This is a test. This is fun.";
var result = text.replace("This", "That");
alert(result);
