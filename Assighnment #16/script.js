// Question # 1
let multiArray = [
    [],[],[]+ "<br>" 
];
console.log(multiArray);

// Question # 2
let matrix = [
    [0,1,2,3] + "<br>" +
    [1,0,1,2]+ "<br>" +
    [2,1,0,1]+ "<br>" 
];
document.writeln(matrix);

// Question # 3
let count = 1;
for(let i=1; i<=10; i++){
    document.writeln(count + "<br>");
    count++;
}
// Question # 4
let number =+ prompt("Enter a number to show its multiplication table");
let lenght =+prompt("Enter lenght multiplication table");

for (let i=1; i <= lenght; i++){
    let result = number * i;
    document.writeln(number + " x " + i + " = " + result + "<br>");
}
// Question # 5
let fruits = ["apple","banana","mango","orange","strawberry" ];

for (let i=0; i < fruits.length; i++) {
    document.writeln(fruits[i] + "<br>");
}
for (let i=0; i < fruits.length; i++) {
    document.writeln(`Element at index ${i}  is  ${fruits [i]}` + "<br>" );
}

// Question # 6 (a)
document.writeln("<h3>Counting:</h3>");
for (let i=1; i<=15; i++){
    document.writeln(i + ",");
}
// (b)
document.writeln("<h3>Reverse Counting:</h3>");
for (let i=10; i >=1; i--){
    document.writeln(i + ",");
}
c// (c)
document.writeln("<h3>Even:</h3>");
for (let i=0; i <=20; i+=2){
    document.writeln(i + ",");
}
// (d)
document.writeln("<h3>Odd:</h3>");  
for (let i=1; i <20; i+=2){
    document.writeln(i + ",");
}
// (e)
document.writeln("<h3>Series:</h3>");       
for (let i=2; i <=20; i+=2){
    document.writeln(i + "k,");
}       
// Question # 7
let A = ["cake", "apple pie", "cookie", "chips", "patties"];
let search = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
let found = false;
for (let i = 0; i < A.length; i++) {
    if (A[i].toLowerCase() === search.toLowerCase()) {
        document.writeln(search + " is available at index " + i + " in our bakery" + "<br>");
        found = true;
        break;
    }   }
if (!found) {
    document.writeln("We are sorry. " + search + " is not available in our bakery" + "<br>");
}
// Question # 8
let arr = [24, 53, 78, 91, 12];
let largest = arr[0];   
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
}   
document.writeln("Array items: " + arr + "<br>");
document.writeln("The largest number is " + largest + "<br>");

// Question # 9
let arr2 = [24, 53, 78, 91, 12];
let smallest = arr2[0];     
for (let i = 1; i < arr2.lenght; i++) {
    if (arr[i] < smallest) {
        smallest = arr[i];
    }
}
document.writeln("Array items: " + arr2 + "<br>");
document.writeln("The smallest number is " + smallest + "<br>");
// Question # 10
for (let i = 1; i <= 20; i++) {
    let result = i * 5;
    document.writeln(result + ",");

}
