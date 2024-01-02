'use strict';
/**
 * Lecture 1: Brief Introduction
 */

/**
 * Lecture 2: Internal & External JavaScript File(s)
 * Go to this 'index.html' file and you can see how it works/links
 */

/**
 * Lecture 3: JavaScript Variable, Name & Value
 * In the following, fullName is variable name, 'MH Mamun' is the value of the variable name. With let keyword variable name and its value is called variable.
 */
// let fullName = 'MH Mamun';
// console.log(fullName);

/**
 * Lecture 4: Convension of declare a veriable
 * Variable name connot start with a number
 * Variable name cannot contain special character and white space
 * Variable name must start with a letter or a dollar sign ($)
 * Variable name use underscore (_) in multiple word saperator
 * Best way to write JavaScript variable name by the camelCase syntax
 * Variable cannot be the same as reserved keywords like if or const
 */

// Wrong way
// ***********
// let 3years = 3;
// let my&name = 'MH Mamun';
// let my name = 'MH Mamun';

// Right way
// ***********
// let $name = 'MH Mamun';
// let myPreviousJob = 'Programming';
// let my_current_job = 'Mentoring';
// console.log($name, myPreviousJob, my_current_job);

/**
 * Lecture 5: Data Types
 */
// let myName = 'MH Mamun'; // String
// let age = 29; // Number
// let isMarried = true; // Boolean
// let guessNumber; // Undefined
// let sayHi = null; // Null

// console.log(myName, typeof myName);
// console.log(age, typeof age);
// console.log(isMarried, typeof isMarried);
// console.log(guessNumber, typeof guessNumber);
// console.log(sayHi, typeof sayHi);

/**
 * Lecture 6: difference of let vs const vs var
 * Re-assigning or muted data in the let variable
 */

// LET
// ********
// let name = 'Raju Ahsan';
// name = 'MH Mamun'; // Re-assign OR Muted variable

// let age;
// age = 1996;

// let guess = null;
// guess = 20;

// let doingJob = true;
// doingJob = 'Yes!';

// console.log(name, age, guess, doingJob);

// CONST
// ********
// const birthYear = 1996; // Can not re-assign value is called immutable variable

// VAR
// ********
// var lastName = 'Hasan'; // Var works as same as Let
// lastName = 'Mamun';

// console.log(lastName);

/**
 * Lecture 7: Basic Operations
 */

// Math Operations
// ===================
// const sq = 2 * 4;
// console.log(sq);

// const qub1 = 2 ** 4;
// console.log(qub1);

// const qub2 = 3 ** 4;
// console.log(qub2);

// Concatenation
// const firstName = 'MH';
// const lastName = 'Mamun';

// console.log(firstName + ' ' + lastName);

// Assignment Operators
// =====================
// let x = 5 + 5;
// x += 5; // x = x + 5 => 15
// x *= 5; // x = x * 5 => 50
// x /= 5; // x = x / 5 => 2
// x -= 5; // x = x - 5 => 5
// x %= 5; // x = x % 5 => 0

// Increment/Decrement: Post
// x++; // 10, x = x + 1 => 11
// console.log(x++, x++, x++);

// x--; // 10, x = x - 1 => 9
// console.log(x--, x--, x--);

// // Increment/Decrement: Pre
// ++x; // 11
// console.log(++x);

// --x; // 9
// console.log(--x);

// Comparison Operators
// =======================
// const ageRasti = 29;
// const ageRobi = 36;

// console.log(ageRobi > ageRasti); // >, <, >=, <=

/**
 * Lecture 8: Operator Precedence => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence
 */

// let x, y;
// x = y = 25 - 10 - 5;

// console.log(x, y);

/**
 * Problem Solving #1
 */

/**
 * Lecture 9: String Quote and Template Literal
 */

/*
const fullName = 'MH Mamun';
const birthYear = 1996;
const currentYear = 2024;
const myCurrentJob = 'Programmer';

// String Quote
console.log(
  "I'm " +
    fullName +
    ', a ' +
    myCurrentJob +
    ' and ' +
    (currentYear - birthYear) +
    '-years old now. '
);

console.log("Let's writing \ncode in new \nline.");

// Template Literal
console.log(
  `I'm ${fullName}, a ${myCurrentJob} and ${
    currentYear - birthYear
  }-years old now.`
);

console.log(`Let's writing 
code in new 
line.`);
*/

/**
 * Lecture 10: Make Decesion - if / else statements
 * Making decision always is depanding on boolean value
 */

/*
// Example 1
const age = 15;
if (age >= 18) {
  // This block is excuted for true value
  console.log(`Sarah is eligible to get driving license to drive her car 🚗`);
} else {
  // This is false value
  const leftYear = 18 - age;
  console.log(`She is too young, let's wait more ${leftYear}-years :)`);
}

// Example 2
const birthYear = 2001;
let century;
if (birthYear < 2000) {
  century = `He's born in 19th century.`;
} else {
  century = `He's born in 20th century.`;
}
console.log(century);
*/

/**
 * Lecture 11: Type Conversion and Coercion
 */
/*
// Type Conversion
const currentYear = '2024';
console.log(currentYear, typeof currentYear);

console.log(Number(currentYear) + 10, typeof (Number(currentYear) + 10));

console.log(String(29), typeof String(29), 29, typeof 29);

// Type Coercion
console.log("I'm " + 29 + '-years old.'); // 29 is number but its automatic converted to string by + operator because others arguments are string

console.log('25' - 10 - '5'); // 10
console.log('15' * 5); // 75
console.log('15' / 5); // 3

console.log(-'23', -'s23'); // -23(number), NaN => NaN is also a invalid number

let x = '2' + 2; // '22' string
x = x - 2; // 20 number
console.log(x);

console.log(2 + 3 + 5 + '5'); // '105' string
console.log('10' - '4' - '3' - 2 + '5'); // '15' string
*/

/**
 * Lecture 12: Truthy and Falsy Value
 * JavaScript gives us 5 falsy values: 0, '', undefined, null, NaN
 */

/*
// Falsy Values
console.log(Boolean(0)); // false
console.log(Boolean('')); // false => Empty String
console.log(Boolean(NaN)); // false => NaN is an invalid number also called an object
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false

// Truthy Values
console.log(Boolean(100));
console.log(Boolean('MH Mamun'));
console.log(Boolean({}));

// Example 1
const money = 0; // 0 is falsy value
if (money) {
  // True block
  console.log(`Don't spend all the money. :)`);
} else {
  // False block
  console.log(`You should do a job soon!`);
}

//  Example 2
let height; // Undefined is falsy value
if (height) {
  // True block
  console.log(`YAY! height in defined. :)`);
} else {
  // False block
  console.log(`Height is UNDEFINED!`);
}
*/

/**
 * Lecture 13: Equality Operators (== vs ===)
 * (==) means 2 values are equal, its accept type coercion which is loosely type
 * (===) means 2 values and its data types are equal. it's called strictly type
 */
/*
const age = 18;
// ( == ) Operator
console.log(age == '18');
if (age == '18') console.log(`She is adult now. :D (loosely type)`);
// Note: '18' is string and age value is number, so (==) operator is converted '18' to number 18 by type coercion because it's loosely type

// ( === ) Operator
console.log(age === '18');
if (age === '18') console.log(`Adult now!`);
else console.log(`NOT an adult! (strictly type)`);

// Example 1
const favouriteNumber = Number(prompt(`What's your favourite number?`));
console.log(favouriteNumber, typeof favouriteNumber);

if (favouriteNumber === 29) {
  console.log(`Cool! ${favouriteNumber} is an amazing number :D`);
} else if (favouriteNumber === 16) {
  console.log(`${favouriteNumber} is also an amazing number :D`);
} else {
  console.log(`Number is NOT 29 or 16!`);
}
*/

/**
 * Lecture 14: Boolean Logic and Logical Operators
 * AND/&& => True && True = True, True && False = False, False && True = False, False && False = False
 * In AND/&& operator, result will be true, when all value will be true
 * OR/|| => True || True =  True, True || False = True, False || True = True, False || False = False
 * In OR/|| operator, result will be true, when at least one value will be true
 * NOT/! => !True = False, !False = True
 */

/*
const hasDriverLicense = true;
const hasGoodVision = true;
const isTired = false;
console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

// Example 1
if (hasDriverLicense && hasGoodVision) {
  console.log(`Metela is able to drive her car 🚗`);
} else {
  console.log(`Someone else should drive!`);
}

// Example 2
if (hasDriverLicense || (hasGoodVision && isTired)) {
  console.log(`Able to drive her car 🚗`);
} else {
  console.log(`Someone else should drive!`);
}

// Example 3
if (!hasDriverLicense || !(hasGoodVision && !isTired)) {
  console.log(`Able to drive her car 🚗`);
} else {
  console.log(`Someone else should drive!`);
}
*/

/**
 * Lecture 15: Switch Statement
 */

/*
const day = 'Monday';

switch (day) {
  case 'Saturday': // day === 'Saturday' (Strictly type)
    console.log(`Go to my office.`);
    break;
  case 'Sunday':
  case 'Monday':
    console.log(`Office meeting.`);
    console.log(`Meetup with my buyer.`);
    break;
  case 'Tuesday':
  case 'Wednesday':
  case 'Thursday':
    console.log(`Half day of my office.`);
    console.log(`Come back my home earlier.`);
    break;
  case 'Friday':
    console.log(`Weekend!`);
  default:
    console.log(`NOT a valid day!`);
}

if (day === 'Saturday') {
  console.log(`Go to my office.`);
} else if (day === 'Sunday' || day === 'Monday') {
  console.log(`Office meeting.`);
  console.log(`Meetup with my buyer.`);
} else if (day === 'Tuesday' || day === 'Wednesday' || day === 'Thursday') {
  console.log(`Half day of my office.`);
  console.log(`Come back my home earlier.`);
} else if (day === 'Friday') {
  console.log(`Weekend!`);
} else {
  console.log(`NOT a valid day!`);
}
*/

/**
 * Lecture 16: Statements and Expressions
 * Statement can not produce a value
 * But expression can produce a value
 * And expression can be part of statement
 */
/*
// Expression
3 + 4; // Expression
1991; // Expression
(true && false) || !true; // Expression

// Statement
let number;
if (number) {
  // if - else is a statement
  number = `4 is lucky number.`; // Expression
} else {
  number = `Why not 4.`; // Expression
}
console.log(number);
*/

/**
 * Lecture 17: The Conditinal (Ternary) Operator
 * Ternary operator is aslo an expression which is produce value
 */
/*
const age = 20;
// if - else statement
if (age >= 18) {
  console.log(`I like to drink wine 🍷`);
} else {
  console.log(`Drinking water 💧`);
}

// Ternary Operator is an expression
const drink =
  age >= 18
    ? console.log(`I like to drink wine 🍷`)
    : console.log(`Drinking water 💧`);

const drink2 = age >= 18 ? `Wine 🍷` : `Water 💧`; // Expression
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? `Wine 🍷` : `Water 💧`}`);
*/
