// Questions # 1
var studentNames = [];

// Questions # 2
var studentNames = new Array();

// Questions # 3
var stringsArray = ["Apple", "Banana", "Mango"];

// Questions # 4
var numbersArray = [10, 20, 30, 40, 50];

// Questions # 5
var booleanArray = [true, false, true, false];

// Questions # 6
var mixedArray = ["muzammil", 22, true, 5.5];

// Questions # 7
var educationQualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];

document.write("<h2>Qualifications in Pakistan:</h2>");
for (var i = 0; i < educationQualifications.length; i++) {
    document.write((i + 1) + ") " + educationQualifications[i] + "<br>");
}

// Questions # 8
let studNames=["muzammil","saib","ali"];
let studentScores = [320,230,480];
let totalMarks = 500;

for (let i=0; i < studNames.length; i++) {
    let percentage=(studentScores[i] / totalMarks) * 100;

document.write("Score of " + studNames [i] + " is " + studentScores[i] + ". Percentage: " + percentage + "% <br>" );
}

// Questions # 9
var colors = ["Red", "Green", "Blue"];
document.write("Initial Array: " + colors + "<br><br>");

var colorStart = prompt("Which color do you want to add at the beginning?");
colors.unshift(colorStart);
document.write("After adding color at the beginning: " + colors + "<br><br>");

var colorEnd = prompt("Which color do you want to add at the end?");
colors.push(colorEnd);
document.write("After adding color at the end: " + colors + "<br><br>");

colors.unshift("Purple", "Yellow");
document.write("After adding two more colors at the beginning: " + colors + "<br><br>");

colors.shift();
document.write("After deleting first color: " + colors + "<br><br>");

colors.pop();
document.write("After deleting last color: " + colors + "<br><br>");

var indexAdd = +prompt("At which index do you want to add a color?");
var colorName = prompt("Enter the color name you want to add:");
colors.splice(indexAdd, 0, colorName);
document.write("After adding color at index " + indexAdd + ": " + colors + "<br><br>");

var indexDelete = +prompt("At which index do you want to delete color(s)?");
var countDelete = +prompt("How many colors do you want to delete?");
colors.splice(indexDelete, countDelete);
document.write("After deleting colors: " + colors + "<br><br>");

// Questions # 10
var scores = [320, 230, 480, 120];
document.write("Scores of Students: " + scores + "<br>");
scores.sort(function(a, b) {
    return a - b;
});
document.write("Ordered Scores: " + scores);

// Questions # 11
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = cities.slice(1, 4);

document.write("Cities List: " + cities + "<br>");
document.write("Selected Cities: " + selectedCities);

// Questions # 12
var arr = ["This ", " is ", " my ", " cat"];
var result = arr.join(""); 

document.write("Array: " + arr + "<br>");
document.write("String: " + result);

// Question # 13
var parts= ["Keyboard","Mouse","Printer","Monitor"]
var queue = [];
queue.push("Keyboard");
queue.push("Mouse");
queue.push("Printer");
queue.push("Monitor\n");

document.write("Devices:<br>" + parts + "<br><br>");
document.write("Out:<br>");

document.write(queue.shift() + "<br>");
document.write("Out:<br>");

document.write(queue.shift() + "<br>");
document.write("Out:<br>");

document.write(queue.shift() + "<br>");
document.write("Out:<br>");

document.write(queue.shift() + "<br>");


// Question # 14
var parts= ["Keyboard","Mouse","Printer","Monitor"]
var queue = [];
queue.push("Keyboard");
queue.push("Mouse");
queue.push("Printer");
queue.push("Monitor\n");

document.write("Devices:<br>" + parts + "<br><br>");
document.write("Out:<br>");

document.write(queue.pop() + "<br>");
document.write("Out:<br>");

document.write(queue.pop() + "<br>");
document.write("Out:<br>");

document.write(queue.pop() + "<br>");
document.write("Out:<br>");

document.write(queue.pop() + "<br>");

// Question # 15
var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<select>")
for (var i=0; i < manufacturers.length; i++) {
document.write("<option>" + manufacturers[i] + "</option>" );
}
document.write("</select>");


