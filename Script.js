// ===============> Chapter 31 - 34 (Date & Time) <=================

// 1. Code a statement that creates a new Date object and assigns it to dObj, which hasn&#39;t been declared beforehand.

// var dObj = new Date();

// console.log(dObj)


// 2. Code a statement that creates a new Date object, converts it
// to a string, and assigns the string to dStr, which hasn't been declared beforehand.

// var d = new Date();

// var dStr = String(d);

// console.log(typeof dStr, dStr); 


// 3. Code a statement that extracts the day of the week from a
// Date object represented by d and assigns it to day, which hasn't been declared beforehand.

// var d = new Date();

// var dateOfWeak = d.getDate();

// console.log(dateOfWeak);


// 4. The day has been extracted from the Date object and
// assigned to d. The names of the days of the week have been assigned to the
// array dayNames. Alert the current day with array index.

// var d = new Date();

// var daysNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// console.log("Today is: " + daysNames[d.getDay()]);


// 5. Extract all parts of the Date and Time and assign it to the
// variable which has not been declared beforehand.

// var now = new Date();

// var year = now.getFullYear();

// var month = now.getMonth() + 1; // Months are 0-based, so add 1

// var day = now.getDate();

// var hours = now.getHours();

// var minutes = now.getMinutes();

// var seconds = now.getSeconds();


// console.log("Year:", year);

// console.log("Month:", month);

// console.log("Day:", day);

// console.log("Hours:", hours);

// console.log("Minutes:", minutes);

// console.log("Seconds:", seconds);


// 6. Code a statement that creates a Date object for the last day
// of the last month of 2024 and assigns it to later, which
// hasn't been declared beforehand.

// var lastDayOfYear = new Date("2024-12-31");

// console.log(lastDayOfYear);

// 7. Create a Date object for the second day of the second
// month of 1992 and assign it to a variable that hasn't been declared beforehand.

// var secondDay = new Date("1992-2-2");

// console.log(secondDay)

// 8. Code a single statement that displays in an alert the
// milliseconds that elapsed between the reference date and the beginning of 1980.

// var milliSecond = (new Date().getTime() - new Date(1980, 0, 1).getTime()) / 1000;

// alert(milliSecond);


// 9. How do you change the year of a date in JavaScript? 

// var year = new Date();

// year.setFullYear(2023);

// console.log(year);

// 10. Write a JavaScript function to change the month of a given
// date to January.

//----> Month start index 0 to 11 e.g 0 - Jan

// With Function

// function changeMonth(date) {
//     var newDate = new Date(date);
//     newDate.setMonth(0);
//     return newDate;
// }

// var originalDate = new Date();

// var changedMonth = changeMonth(originalDate);

// console.log("Original Date: " + originalDate)

// console.log("Changed in January: " + changedMonth)

// ----> Without function 

// var d = new Date();

// d.setMonth(0);

// console.log(d);


// 11. What is the method to change the day of the week for a specific date in JavaScript?

// function setDayOfWeak(date, targetDay) {
//     var currentDay = date.getDay();

//     var dayDifference = (targetDay - currentDay + 7) % 7;

//     date.setDate(date.getDate() + dayDifference);

//     return date;
// }

// var d = new Date();

// console.log("Before: " + d);

// var after = setDayOfWeak(d, 2);

// console.log("After: " + after);










// 12. Write a JavaScript function to change the minutes of a given time to a specific value. (Value by prompt)

