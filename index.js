/// CHP 12 to 13
//(QUESTION 1) Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).

let input = prompt("Enter a character (number or letter):");
if (!isNaN(input)) {
    alert(input + " is a number.");
} else {
    let charCode = input.charCodeAt(0);
    if (charCode >= 65 && charCode <= 90) {
        alert(input + " is an uppercase letter.");
    }
    else if (charCode >= 97 && charCode <= 122) {
        alert(input + " is a lowercase letter.");
    }
    else {
        alert(input + " is neither a number nor a letter.");
    }
}

//(QUESTION 2)Write a JavaScript program that accept two integers and
//display the larger. Also show if the two integers are equal.

let firstNumber = prompt("Enter the first integer:");
let secondNumber = prompt("Enter the second integer:");
if (+firstNumber > +secondNumber) {
    alert(firstNumber + " is larger than " + secondNumber);
} else if (+secondNumber > +firstNumber) {
    alert(secondNumber + " is larger than " + firstNumber);
} else {
    alert("Both numbers are equal: " + firstNumber + " and " + secondNumber);
}


//(QUESTION 3)Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

let number = prompt("Enter a number:");
number = +number;
if (number > 0) {
    alert(number + " is a positive number.");
} else if (number < 0) {
    alert(number + " is a negative number.");
} else {
    alert("The number is zero.");
}

//(QUESTION 4)Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise

let character = prompt("Enter a character (string of length 1):");
if (character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u' ||
    character === 'A' || character === 'E' || character === 'I' || character === 'O' || character === 'U') {
    alert("True - " + character + " is a vowel.");
} else {
    alert("False - " + character + " is not a vowel.");
}


//(QUESTION 5)Write a program that
//a. Store correct password in a JS variable.
//b. Asks user to enter his/her password
//c. Validate the two passwords:
//i. Check if user has entered password. If not, then
//give message “ Please enter your password”
//ii. Check if both passwords are same. If they are
//same, show message “Correct! The password you
//entered matches the original password”. Show
// “Incorrect password” otherwise.

let correctPassword = "Secret123";
let enteredPassword = prompt("Enter your password:");
if (!enteredPassword) {
    alert("Please enter your password.");
} else {
    if (enteredPassword === correctPassword) {
        alert("Correct! The password you entered matches the original password.");
    } else {
        alert("Incorrect password.");
    }
}



//////////////////////////////////////////////// ques 6 ////////////////////
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
console.log(greeting);


/////////////////////////// ques 7 ///////////////////////////
let time = parseInt(prompt("Enter time in 24-hour format (e.g., 1900 for 7pm):"));
let hour12;
let period;
if (time >= 0 && time <= 2359) {
    if (time >= 1200) {
        period = "PM";
        if (time >= 1300 && time <= 2359) {
            hour12 = time - 1200;
        } else {
            hour12 = 12;
        }
    } else {
        period = "AM";
        if (time === 0) {
            hour12 = 12;
        } else {
            hour12 = time;
        }
    }
    console.log(`Time in 12-hour format: ${hour12}${period}`);
} else {
    console.log("Invalid input. Please enter a time between 0000 and 2359.");}