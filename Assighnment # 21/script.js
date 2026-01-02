// answer # 1
function power(a, b) {
    var result = 1;
    for (var i = 0; i < b; i++) {
        result *= a;
    }
    return result;
}

// answer # 2
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return "Leap Year";
    } else {
        return "Not a Leap Year";
    }
}

// answer # 3

function calculateS(a, b, c) {
    return (a + b + c) / 2;
}

function triangleArea(a, b, c) {
    var S = calculateS(a, b, c);
    return Math.sqrt(S * (S - a) * (S - b) * (S - c));
}
// answer # 4

function average(m1, m2, m3) {
    return (m1 + m2 + m3) / 3;
}
function percentage(m1, m2, m3) {
    return ((m1 + m2 + m3) / 300) * 100;
}
function mainFunction(m1, m2, m3) {
    alert("Average: " + average(m1, m2, m3));
    alert("Percentage: " + percentage(m1, m2, m3) + "%");
}

// answer # 5

function customIndexOf(str, char) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return i;
        }
    }
    return -1;
}

// answer # 6
function removeVowels(sentence) {
    var result = "";
    for (var i = 0; i < sentence.length; i++) {
        var ch = sentence[i].toLowerCase();
        if (ch !== "a" && ch !== "e" && ch !== "i" && ch !== "o" && ch !== "u") {
            result += sentence[i];
        }
    }
    return result;
}

// answer # 7
function countDoubleVowels(text) {
    var count = 0;
    var i = 0;

    while (i < text.length - 1) {
        var pair = text[i].toLowerCase() + text[i + 1].toLowerCase();

        switch (pair) {
            case "aa":
            case "ae":
            case "ai":
            case "ao":
            case "au":
            case "ea":
            case "ee":
            case "ei":
            case "eo":
            case "eu":
            case "ia":
            case "ie":
            case "ii":
            case "io":
            case "iu":
            case "oa":
            case "oe":
            case "oi":
            case "oo":
            case "ou":
            case "ua":
            case "ue":
            case "ui":
            case "uo":
            case "uu":
                count++;
                break;
        }
        i++;
    }
    return count;
}

// answer # 8
function toMeters(km) {
    return km * 1000;
}

function toFeet(km) {
    return km * 3280.84;
}

function toInches(km) {
    return km * 39370.1;
}

function toCentimeters(km) {
    return km * 100000;
}

// answer # 9
function overtimePay(hoursWorked) {
    var overtime = 0;
    if (hoursWorked > 40) {
        overtime = (hoursWorked - 40) * 12;
    }
    return overtime;
}

// answer # 10
function currencyNotes(amount) {
    var hundreds = Math.floor(amount / 100);
    var remainder = amount % 100;

    var fifties = Math.floor(remainder / 50);
    remainder = remainder % 50;

    var tens = Math.floor(remainder / 10);

    alert("100 Notes: " + hundreds);
    alert("50 Notes: " + fifties);
    alert("10 Notes: " + tens);
}

// 1
function showAlert() {
    alert("You clicked the link!");
}

// 2
function mobileAlert(mobileName) {
    alert("Thanks for purchasing " + mobileName);
}

// 3
function deleteRow(btn) {
    var row = btn.parentNode.parentNode;
    row.remove();
}

// 4
function changeImage(img) {
    img.src = "https://img.freepik.com/free-photo/web-design-technology-browsing-programming-concept_53876-163260.jpg?semt=ais_hybrid&w=740&q=80";
}

function resetImage(img) {
    img.src = "https://img.freepik.com/free-photo/web-template-website-design-concept_53876-125608.jpg?semt=ais_hybrid&w=740&q=80";
}

// 5
var count = 0;

function increase() {
    count++;
    document.getElementById("counter").innerHTML = count;
}

function decrease() {
    count--;
    document.getElementById("counter").innerHTML = count;
}