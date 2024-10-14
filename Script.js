// ===============> Chapter 31 - 34 (Date & Time) <=================

// 1. Code a statement that creates a new Date object and assigns it to dObj, which hasn&#39;t been declared beforehand.

var dObj = new Date();

console.log(dObj)


// 2. Code a statement that creates a new Date object, converts it
// to a string, and assigns the string to dStr, which hasn't been declared beforehand.

var d = new Date();

var dStr = String(d);

console.log(typeof dStr, dStr); 


// 3. Code a statement that extracts the day of the week from a
// Date object represented by d and assigns it to day, which hasn't been declared beforehand.

var d = new Date();

var dateOfWeak = d.getDate();

console.log(dateOfWeak);


// 4. The day has been extracted from the Date object and
// assigned to d. The names of the days of the week have been assigned to the
// array dayNames. Alert the current day with array index.

var d = new Date();

var daysNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

console.log("Today is: " + daysNames[d.getDay()]);


// 5. Extract all parts of the Date and Time and assign it to the
// variable which has not been declared beforehand.

var now = new Date();

var year = now.getFullYear();

var month = now.getMonth() + 1; // Months are 0-based, so add 1

var day = now.getDate();

var hours = now.getHours();

var minutes = now.getMinutes();

var seconds = now.getSeconds();


console.log("Year:", year);

console.log("Month:", month);

console.log("Day:", day);

console.log("Hours:", hours);

console.log("Minutes:", minutes);

console.log("Seconds:", seconds);


// 6. Code a statement that creates a Date object for the last day
// of the last month of 2024 and assigns it to later, which
// hasn't been declared beforehand.

var lastDayOfYear = new Date("2024-12-31");

console.log(lastDayOfYear);

// 7. Create a Date object for the second day of the second
// month of 1992 and assign it to a variable that hasn't been declared beforehand.

var secondDay = new Date("1992-2-2");

console.log(secondDay)

// 8. Code a single statement that displays in an alert the
// milliseconds that elapsed between the reference date and the beginning of 1980.

var milliSecond = (new Date().getTime() - new Date(1980, 0, 1).getTime()) / 1000;

alert(milliSecond);


// 9. How do you change the year of a date in JavaScript? 

var year = new Date();

year.setFullYear(2023);

console.log(year);

// 10. Write a JavaScript function to change the month of a given
// date to January.

//----> Month start index 0 to 11 e.g 0 - Jan

// With Function

function changeMonth(date) {
    var newDate = new Date(date);
    newDate.setMonth(0);
    return newDate;
}

var originalDate = new Date();

var changedMonth = changeMonth(originalDate);

console.log("Original Date: " + originalDate)

console.log("Changed in January: " + changedMonth)

// ----> Without function 

var d = new Date();

d.setMonth(0);

console.log(d);


// 11. What is the method to change the day of the week for a specific date in JavaScript?

function setDayOfWeak(date, targetDay) {
    var currentDay = date.getDay();

    var dayDifference = (targetDay - currentDay + 7) % 7;

    date.setDate(date.getDate() + dayDifference);

    return date;
}

var d = new Date();

console.log("Before: " + d);

var after = setDayOfWeak(d, 2);

console.log("After: " + after);


// 12. Write a JavaScript function to change the minutes of a given time to a specific value. (Value by prompt)

function changeMinute() {
    var currentDate = new Date();
    var userChoice = +prompt("Enter the new minutes (0-59): ");
    if (userChoice >= 0 && userChoice <= 59) {
        currentDate.setMinutes(userChoice);
        console.log("Updated Time: " + currentDate.toLocaleTimeString());
    } else {
        console.log("Invalid input. Please enter a number between 0 to 59")
    }
}

changeMinute()

// 13. Write a JavaScript function to add a specific number of hours to a given time.

function addHours() {
    var d = new Date();
    d.setHours(2);
    console.log(d)
}

addHours();


// 14. You have to create a age calculator in JavaScript.

var d = new Date();

var userAge = +prompt("Enter your age: ");

var eligible = d - userAge;

if (userAge >= 18 && userAge <= 59) {
    console.log("You are eligible CNIC")
} else if (userAge >= 12 && userAge <= 17) {
    console.log("You are eligible for smart card")
} else {
    console.log("You are not eligible");
}

// ==============> Chapter 35 - 37 (Functions) <================

// 1. Code the first line of a function displayAlert.

function message() {
    alert("Alert Displayed!");
}
message();


// 2. Code a function named askName that prompts the user to
// Enter name and assigns the answer to userName, which
// hasn't been declared beforehand.

function askName(name) {
    console.log("My name is:" + name);
}

console.log(prompt("Enter your name: "));

// 3. Code a function that calls 2 other functions.

function firstFunc(name) {
    console.log(`Hello: ${name}!`);
}

function secondFunc(name) {
    console.log(`Goodbye: ${name}!`);
}

function main(name) {
    firstFunc(name)
    secondFunc(name)
}

main("Aadarsh Kumar")


// 4. Code a function that displays a prompt, Enter name and
// then displays the name in an alert. Call the function.

function display() {
    var name = prompt("Enter your name: ");
    alert(`My name is: ${name}`);
}

display()

// 5. Code the first line of a function named concat that has 3
// parameters, the first three letters of the alphabet. Call that
// takes a variable, a string, and a number as arguments.

function concat(char01, char02, char03) {
    console.log(`${char01} ${char02} ${char03}`);
}

concat(101, "Aadarsh", "SMI University")  //Calling function

// 6. Code a function that has 2 parameters. Concatenate them
// and assign the result to a variable that hasn't been declared beforehand.

function concatenate(firstName, lastName) {
    var fullName = firstName + " " + lastName;
    console.log("My fullname is: " + fullName);
}

concatenate("Aadarsh", "Kumar");


// 7. Code a function that has three parameters. Multiply them
// and assign them to a variable that hasn't been declared yet.

function multiplication(numOne, numTwo, numThree) {
    var multiplied = numOne * numTwo * numThree;
    console.log(multiplied)
}

multiplication(3, 3, 3);

// 8. Write a JavaScript function that takes an array of numbers as input and returns the average of those numbers.

function averageOfNumbers() {
    var arr = [11, 22, 33, 44, 55];
    var sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(averageOfNumbers());


// 9. Write a JavaScript function that takes two parameters and returns their sum.

function addTwoNumber(numOne, numTwo) {
    return `Sum: ${numOne + numTwo}`;
}
console.log(addTwoNumber(2, 3));

// 10. Write a JavaScript function that takes an array of numbers as input and returns the average of those numbers.

 function averageOfNumbers() {
    var arr = [11, 22, 33, 44, 55];
    var sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(averageOfNumbers());


// 11. You have to capture the returned value from a function and store it in a variable?

function value(val) {
    return `First value: ${val}`
}

var enteredVal = value(3232);

console.log(enteredVal)


// 12. Write a function which tells letter counts of (word).

function counts(word) {
    for (var i = 0; i < word.length; i++) {
        console.log(i, word[i])
    }
}

counts("Aadarsh")

// 13. Write a function to set (year) in date object.

function getYear() {
    var year = new Date().getFullYear();
    console.log(year)
}

getYear();

// 14. Write a function which tells the age of a person who Born on (dateOfBirth)

function dateOfBirth() {
    var yearsOld = 21;
    var currentYear = new Date().getFullYear();
    var birthYear = currentYear - yearsOld;
    return birthYear;
}

console.log("Your year birth is: " + dateOfBirth())



// 15. Write a function which tells the presense of (word) in an array 
// result should be in true or false

function findWord() {
    var arr = ['zaid', 'haris', 'raza', 'abubakar', 'hassan', 'hussain', 'fatima']
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == "raza") {
            return true
        }
    }
    return false;
}
console.log(findWord())


// 16. Write a function which repeat (letter) 10 times. Hint: 'abcde' str.repeat(10)

function repeatLetter() {
    var str = " Aadarsh Kumar"
    var repeated = str.repeat(5);
    console.log(str, "\n String repeats: ", repeated)
}
repeatLetter()


// 17. write a function which reverse array = ['a', 'b', 'c', 'd', 'e'] Hint: arr.reverse()

var arr = ['a', 'b', 'c', 'd', 'e'];

arr.reverse();

console.log(arr)  // Output: [ 'e', 'd', 'c', 'b', 'a' ]



//=================> Chapter 38 (Local vs. Global Variables) <==================

// 1. Write a JavaScript function that demonstrates the usage of a local variable.


function socpe() {
    var local = "This is local variable inside function"
    console.log(local);
}

console.log(socpe()) // This is local variable inside function

console.log(myName) // ReferenceError: myName is not defined


// 2. How can you access a global variable inside a function in JavaScript?

function globalScope() {
    var global = "This is global variable"
    console.log(global); // This is global variable

    function inside() {
        var str = "This is local variable inside a function"
        console.log(str)
    }
    inside() // This is local variable inside a function
    console.log(str); //ReferenceError: str is not defined
}

globalScope();


//==============> Chapter 39, 40 (Switch Statements) <======================

// 1. Write a JavaScript switch statement that checks the value of a variable and performs different actions based on different cases.

function checkDay(day) {
    switch (day) {
        case "Monday":
            console.log("Monday is working day!");
            break;
        case "Tuesday":
            console.log("Tuesday is working day!");
            break;
        case "Wednesday":
            console.log("Wednesday is working day!");
            break;
        case "Thuesday":
            console.log("Thuesday is working day!");
            break;
        case "Friday":
            console.log("Friday is Half day");
            break;
        case "Saturday":
            console.log("Saturday is weekend");
            break;
        case "Sunday":
            console.log("Sunday is weekend");
            break;
        default:
            console.log("Invalid day");
    }
}

checkDay("Sunday");


// 2. Write a JavaScript switch statement that check whether cityName given by user check the cityName if match alert the user and
// break the statement, if not default message will be shown to user.

function cityCheck(city) {
    switch (city) {
        case "Karachi":
            console.log("Welcome to City of Light! Karachi");
            break;
        case "Lahore":
            console.log("Welcome to Lahore");
            break;
        case "Islamabad":
            console.log("Welcome to Islamabad");
            break;
        default:
            console.log("Ivalid City");
    }
}

cityCheck("Karachi")

// ================= THE END =================
