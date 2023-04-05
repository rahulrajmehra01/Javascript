/* 

console.log('helo world');

var MyName='hdbccvbc';
var _1my__Nmae=21;

console.log(MyName);
console.log(_1my__Nmae);




data types - difference between null and undefined, what is NaN 
// NaN is a property of the global object. 
// In other words, it is a variable in global scope.
// The initial value of NaN is Not-A-Number


var MyName='Rahul raj mehra';
var myAge=21;
var myBool=true;
var myHggv= '*';

console.log(MyName);
console.log(myAge);

console.log(typeof(MyName));
console.log(typeof(myAge));
console.log(typeof(myBool));
console.log(typeof(myundefine));

console.log(10 - "5");  //bug
console.log(10 + "5");
console.log("javascript" + "java");
console.log(" " - " ");
console.log(" " - "0");
console.log(true + true);
console.log(true + false);
console.log(true - true);
console.log(false + false);



var MyName='Rahul raj mehra';
var myNumber = 7898765421;

console.log(isNaN(MyName));
console.log(isNaN(myNumber));

if(isNaN(myNumber)){
    console.log('valid number');
}
else{
    console.log('invalid number');
}




console.log(isNaN(NaN));
console.log(isNaN(NaN === NaN));
console.log(isNaN(NaN == NaN));
console.log(isNaN(NaN - NaN));
console.log(isNaN(NaN + NaN));

*/

/* Expression and Operators



*/
// console.log(9**3); //exponential operator 9*9*9
// console.log(10 ** -1);   // 1/10

// var a=5, b=10;

// var temp = b; // temp=10
//  b = a; // b=5
//  a = temp;


// a = a + b;
// b = a - b;
// a = a - b;

// console.log("value of a is " + a);
// console.log("value of b is " + b);


// if else conditions 


// var tom = 'rain';

// if(tom == 'rain'){
//   console.log("take raincoat");
// }else{
//  console.log("no raincoat");
// }




// const chalk = require("chalk");

/****  Section 1👉 we need to do it in console ****/
// alert("Welcome, to Complete JavaScript course");
// console.log('Welcome, to complete JavaScript Course');



/**** Section 2👉 Code Editor for writing JS ****/



/**** Section 3👉 values and variables in JavaScript ****/


// var myName = 'vinod bahadur thapa';
// var myAge = 26;

// console.log(myage);





// Naming Practice
// var _myName = "vinod";
// var 1myName = "thapa";
// var _1my__Name = "bahadur";
// var $myName = "thapa technical";
// var myNaem% = "thapa technical";

// console.log(myNaem%);



// // **********************************************************************



/**** Section 4👉 Data Types in JavaScript ****/


// var myName = "vinod thapa";
// console.log(myName);

// var myAge = 26;
// console.log(myAge);

// var iAmThapas = false;
// console.log(iAmThapas);

// // typeof operator 
// console.log(typeof(iAmThapas));


// DataTypes Practice

// console.log( 10 + "20");
// 9 - "5"
// console.log( 9 - "5"); //bug
// "Java" + "Script"
// console.log( "Java "+ "Script");
// " " + " "
// console.log( " " + 0);
// " " + 0
// "vinod" - "thapa"
// true + true
// true + false
// false + true
// false - true


// console.log("vinod" - "thapa");





// 🙋‍👨‍🏫 Interview Question 1 🙋‍👨‍🏫
// Difference between null vs undefined? 


// var iAmUseless = null;
// console.log(iAmUseless);
// console.log(typeof(iAmUseless));
// //2nd javascript bug

// var iAmStandBy;
// console.log(iAmStandBy);
// console.log(typeof(iAmStandBy));


// 🙋‍👨‍🏫 Interview Question 2 🙋‍👨‍🏫
// What is NaN?

// NaN is a property of the global object. 
// In other words, it is a variable in global scope.
// The initial value of NaN is Not-A-Number 


// var myPhoneNumber = 9876543210;
// var myName = "thapa technical";

// console.log(isNaN(myPhoneNumber));
// console.log(isNaN(myName));

// if(isNaN(myName)){
//     console.log("plz enter valid phone no");
// }




// NaN Practice 🤯

// NaN === NaN;        
// Number.NaN === NaN; 
// isNaN(NaN);         
// isNaN(Number.NaN);  
// Number.isNaN(NaN);


// console.log(Number.isNaN(NaN));



/**** Section 5👉 Arithmetic operators in JavaScript ****/



// console.log(5+20);


// 1️⃣Assignment operators
// An assignment operator assigns a value to its left operand 
// based on the value of its right operand. 
// The simple assignment operator is equal (=)

// var x = 5; 
// var y = 5;

// console.log("is both the x and y are equal or not" + x == y );

// I will tell you when we will see es6
// console.log(`Is both the x and y are equal : ${x == y}`);











// 2️⃣Arithmetic operators
// An arithmetic operator takes numerical values 
// (either literals or variables) as their operands and 
// returns a single numerical value.

// console.log(3+3);
// console.log(10-5);
// console.log(20/5);
// console.log(5*6);

// console.log("Remainder Operator " + 27%4);






// 🙄Increment and Decrement operator
// Operator: x++ or ++x or x-- or --x
// If used postfix, with operator after operand (for example, x++), 
// the increment operator increments and returns the value before incrementing.

// var num = 15;
// var newNum = num-- + 5;
// console.log(num);
// console.log(newNum);


// Postfix increment operator means the expression is evaluated 
// first using the original value of the variable and then the 
// variable is incremented(increased).


// If used prefix, with operator before operand (for example, ++x), 
// the increment operator increments and returns the value after incrementing.

// var num = 15;
// var newNum = --num + 5; 
// console.log(num);
// console.log(newNum);


// Prefix increment operator means the variable is incremented first and then 
// the expression is evaluated using the new value of the variable.










// 3️⃣Comparison operators
// A comparison operator compares its operands and 
// returns a logical value based on whether the comparison is true.

// var a = 30;
// var b = 10;

// Equal (==)
// console.log(a == b);

// Not equal (!=)
// console.log(a != b);

// // Greater than (>)
// console.log(a > b);

// // Greater than or equal (>=)
// console.log(a >= b);

// // Less than (<)
// console.log(a < b);

// // Less than or equal (<=)
// console.log(a <= b);








// 4️⃣ Logical operators
// Logical operators are typically used with Boolean (logical) values; 
// when they are, they return a Boolean value.

// var a = 30;
// var b = -20;

// Logical AND (&&)
// The logical AND (&&) operator (logical conjunction) for a set of 
// operands is true if and only if all of its operands are true.


// console.log(a > b && b > -50 && b < 0);


// Logical OR (||)
// The logical OR (||) operator (logical disjunction) for a set of 
// operands is true if and only if one or more of its operands is true.

// console.log((a < b) || (b > 0) || (b > 0));

// Logical NOT (!)
// The logical NOT (!) operator (logical complement, negation) 
// takes truth to falsity and vice versa.

// console.log(!((a>0) || (b<0)));
// console.log(!true);


// // **********************************************************************



// 5️⃣ String Concatenation(operators)
// The concatenation operator (+) concatenates two string values together, 
// returning another string that is the union of the two operand strings.


// console.log("Hello World");

// console.log("hello " +  "world");

// var myName = "vinod";

// console.log(myName + " thapa");
// console.log(myName + " bahadur");
// console.log(myName + " bahadur Thapa");





// 😳 4 Challenge Time 
// What will be the output of 3**3? 
// What will be the output, when we add a number and a string?
// Write a program to swap two numbers?
// Write a program to swap two numbers without using third variable?



// sol 1: ✔
// console.log(9**2); // 9*9
// console.log(10 ** -1); 1/10


// sol 2:  ✔
// console.log(5 + "thapa");

// sol 3: ✔ 

// var a = 5;
// var b = 10;

// output b=5; a=10

// var c = b; //c = 10
// b = a; // b = 5;
// a = c;

// console.log("the value of a is " + a);
// console.log("the value of b is " + b);


// sol 4: ✔

// var a = 5;
// var b = 10;

// // output b=5; a=10

// a = a + b; // a = 15
// b = a - b; // b = 5; 
// a = a - b; // a = 10;

// console.log("the value of a is " + a);
// console.log("the value of b is " + b);




// 🙋‍👨‍🏫 Interview Question 4 🙋‍👨‍🏫
// What is the Difference between == vs === ?


// sol 
// var num1 = 5;
// var num2 = '5';

// console.log(typeof(num1));
// console.log(typeof(num2));

// console.log(num1 == num2 );

// var num1 = 5;
// var num2 = '5';

// console.log(typeof(num1));
// console.log(typeof(num2));
// console.log(num2);

// console.log(num1 === num2 );



// ************************************************************


/**** Section 6👉 Control Statement - 
 * 
 * 1️⃣If...Else */
// The if statement executes a statement if a specified condition is truthy. 
// If the condition is falsy, another statement can be executed.


// if raining = raincoat
// else no raincoat


// var tomr = 'sunny';

// if(tomr == 'rain'){
//   console.log('take a raincoat');
// }else{
//   console.log('No need to take a raincoat');
// }




// 🤩Challenge Time 
// write a program that works out whether if a given year is a leap year or not?
// A normal year has 365 days, leap years have 366, with an extra day in February.

// const prompt = require("prompt-sync")();

// const year = prompt("Year:");
// debugger;
// if(year % 4 === 0){
//   if(year % 100 === 0){
//     if(year % 400 === 0){
//       console.log(`the year ${year} is a leap year`);
//     }else{
//       console.log(`the year ${year} is not a leap year`);
//     }
//   }else{
//     console.log(`the year ${year} is a leap year`);
//   }
// }else{
//   console.log(`the year ${year} is not a leap year`);
// }




// What is truthy and falsy values in Javascript?

// we have total 5 falsy values in javascript
// 👉 0,"",undefined,null,NaN,false** is false anyway

// if(score = 5){
//   console.log("OMG, we loss the game 😭");
// }else{
//   console.log("Yay, We won the game 😀");
// }




// 2️⃣Conditional (ternary) operator

// The conditional (ternary) operator is the only JavaScript operator 
// that takes three operands
// var age = 17;
// if(age >= 18){
//   console.log("you are eligible to vote");
// }else{
//   console.log("you are not eligible to vote");
// }
 
// var age = 18;
// console.log((age >= 18) ? "you can vote" : "you can't vote");




// 3️⃣ switch Statement
// Evaluates an expression, matching the expression's value to a 
// case clause, and executes statements associated with that case.

// 1st without break statment 
// Find the Area of circle, triangle and rectangle?

// var area = "square" ;
// var PI = 3.142, l=5, b=4, r=3;

// if(area == "circle"){
//   console.log("the area of the circle is : " + PI*r**2);
// }else if(area == "triangle"){
//   console.log("the area of the triangle is : " + (l*b)/2);
// }else if(area == "rectangle"){
//   console.log("the area of the rectangle is : " + (l*b));
// }else{
//   console.log("please enter valid data");
// }


// const prompt = require("prompt-sync")();
// const area = prompt("please enter case:");
// var PI = 3.142, l=5, b=4, r=3;

// switch(area){  
//   case 'circle': 
//     console.log(`the area of the circle is ${PI*r**2}`);
//     break;

//   case 'triangle':
//     console.log("the area of the triangle is : " + (l*b)/2);
//     break;

//   case 'rectangle':
//     console.log("the area of the rectangle is : " + (l*b));
//     break;

//   default:
//     console.log("please enter valid data");
// }   



// 🤗break
// Terminates the current loop, switch, or label 
// statement and transfers 
// program control to the statement following the terminated statement.


// 🤗continue
// Terminates execution of the statements in the current iteration of the 
// current or labeled loop, and continues execution of the loop with the 
// next iteration.





// 4️⃣ While Loop Statement
// The while statement creates a loop that executes a specified statement 
// as long as the test condition evaluates to true. 

// while infinte loop // ----->  
// var num=10;
// while(num <= 10){
//   console.log(num);

// while loop syntax
// var num= 0;
// // block scope 
// while(num <= 10){
//   console.log(num); 
//   num++;
// }

// 5️⃣ Do-While Loop Statement

// Do-While infinte loop // ----->  
// var num = 20;
// do{
//   console.log(num);
// }while(num <= 20);


// var num = 20;
// do{
//   debugger;
//   console.log(num);
//   num++;
// }while(num <= 10);

// 6️⃣ For Loop 

// for infinte loop // ----->  
// for(var num = 10; num <= 10; ){
//     debugger;
//     console.log(num);
// }

// for(var num = 0; num <= 10; num++){
//     debugger;
//     console.log(num);
// }


// 😀6: challenge Time 🏁
// JavaScript program to print table for given number (8)?


// const prompt = require("prompt-sync")(); // ----->  
// const n = prompt("enter value:");

// for(var date=1;date<=n;date++) // n ka mtlb jagah jaha tak print karana h 
//         {
//          if(date%6==0)   // 3 mtlb 3 se divide hone val e no print honge
//          {
//            console.log(date);
//            }
//         }


// const prompt = require("prompt-sync")();
// const n = prompt("enter value:");
// console.log("Table of " + n + " is :");

// for(var num = 1; num<= 10; num++){  
//   console.log(n * num);
// }

// output :  8 * 1 = 8 
//           8 * 2 = 16(8*2)
//          => 8 * 10 = 80

// ************************************************************

/**** Section 5 👉 Functions in JavaScript ****/ 

// A JavaScript function is a block of code designed to perform a particular task.



//  1️⃣Function Definition 

// Before we use a function, we need to define it. 

// A function definition (also called a function declaration, or function statement) 
// consists of the function keyword, followed by:

// The name of the function.
// A list of parameters to the function, enclosed in parentheses and separated by commas.
// The JavaScript statements that define the function, enclosed in curly brackets, {...}.


// var a = 10;
// var b = 20;
// var sum = a+b;
// console.log(sum);


// 2️⃣Calling functions
// Defining a function does not execute it.
// A JavaScript function is executed when "something" invokes it (calls it).


// function sum(){
//   var a = 10, b = 40;
//   var total = a*b;
//   console.log(total);
// }

// sum();



// 3️⃣ Function Parameter vs Function Arguments 
// Function parameters are the names listed in the function's definition. 
// Function arguments are the real values passed to the function.


// function sum(a,b){
//   var total = a+b;
//   console.log(total);
// }

// sum();  //no argument passed // ----->  
// sum(20,30); //20,30 argument is passed
// sum(50,50); //50,50 argument is passed
// sum(5,6);   //5,6 argument is passed




// 🙋‍👨‍🏫 Interview Question 🙋‍👨‍🏫 

// Why Functions? 

// You can reuse code: Define the code once, and use it many times.
// You can use the same code many times with different arguments, 
// to produce different results.

//   OR

//   A function is a group of reusable code which can be called anywhere 
// in your program. This eliminates the need of writing the same code 
// again and again.

// DRY => do not repeat yourself






// 4️⃣ Function expressions
// "Function expressions simply means 
// create a function and put it into the variable "

// function sum(a,b){
//   var total = a+b;
//   console.log(total);
// }

// var funExp = sum(5,15);



// 5️⃣ Return Keyword
// When JavaScript reaches a return statement, 
// the function will stop executing.

// Functions often compute a return value.
// The return value is "returned" back to the "caller"


// function add(a,b){
//   return sum= a*b;
// }
// var exp = add(59,78);
// console.log(exp);


// function dfrv() {
//   var a=3,b=2;
//   add(a,b);
//   return 0;
// }
// function print(num){
//   console.log(num);
// }

// function add(num1,num2)
// {
//   console.log(num1);
//   console.log(num2);
//   return sum = num1+num2;
// }



// 6️⃣ Anonymous Function

// A function expression is similar to and has the same syntax 
// as a function declaration One can define "named" 
// function expressions (where the name of the expression might 
// be used in the call stack for example) 
// or "anonymous" function expressions.


// var exp = function(a,b){
//   return sum = a+b;
// }

// var sum = exp(23,43);
// var sum1 = exp(23,43);

// if(sum> sum1){
//   console.log(sum);
// }
// else{
//   console.log(sum);
// }


// ************************************************************


// 👻 Now It's Time for Modern JavaScript 😍😍 

// 2015 ECMAScript 6 = ES6
// 2016 ECMAScript 7 = ES7
// 2017 ECMAScript 8 = ES8
// 2018 ECMAScript 9 = ES9
// 2019 ECMAScript 10 = ES10
// 2020 ECMAScript 11 = ES11

// 1️⃣ LET VS CONST vs VAR

// var => Function scope 
// let and const => Block Scope 

// var myName = "thapa technical";
// console.log(myName);

// myName = "vinod thapa";
// console.log(myName);

// let myName = "thapa technical";
// console.log(myName);

// myName = "vinod thapa";
// console.log(myName);


// const myName = "thapa technical"; //in const we cannot change value after 1st use
// console.log(myName);

// myName = "vinod thapa";
// console.log(myName);

// function data(sum){                              // function scope 
//   if(sum){                                       // function scope  
//     var name = "rahul";                          // function scope       
//     var sname = "raj";                           // function scope    
//   }                                              // function scope
//   console.log("my name is" + name + sname);      // function scope  
// }                                                // function scope

// data(true);

// function data(sum){
//   if(sum){                                          // block scope
//     let name = "rahul";                             // block scope
//     const sname = "raj";                            // block scope
//     console.log("my name is" + name + sname);       // block scope
//   }                                                 // block scope
//   // console.log("my name is" + name + sname); // we cant access let and const outside of scope it will give error
// }

// data(true);


// function biodata() {
//   var myFirstName = "Vinod";
//   console.log(myFirstName);

//   if(true){
//     var myLastName = "thapa";
//     console.log('inner ' + myLastName);
//     console.log('inner ' + myFirstName);
//   }

//    console.log('innerOuter ' + myLastName);
// }

// biodata();



// 2️⃣ Template literals (Template strings) 

// JavaScript program to print table for given number (8)?

// output :  8 * 1 = 8 
        //   8 * 2 = 16(8*2)
        //  => 8 * 10 = 80

// for(let num = 1; num<= 10; num++){
//     let tableOf = 12;
//   // console.log(tableOf + " * " + num + " = " + tableOf * num);
//   console.log( ` ${tableOf} * ${num} = ${tableOf * num}` );
// }




// 3️⃣  Default Parameters
// Default function parameters allow named parameters to be 
// initialized with default values if no value or undefined is passed.

// function mult(a,b=5){
//   return a*b;
// }

// console.log(mult(3));



// ----->  
// 4️⃣ Destructuring in ES6
// The destructuring assignment syntax is a JavaScript expression 
// that makes it possible to unpack values from arrays, 
// or properties from objects, into distinct variables.

  //  ➡ Array Destructuring  🏁

  // const myBioData = ['vinod', 'thapa', 26];

  // let myFName = myBioData[0];
  // let myLName = myBioData[1];
  // let myAge = myBioData[2];
  
// let [myFName, myAge, myLName] = myBioData;
// console.log(myAge);

  // we can add values too 
  
  // let [myFName,myLName,myAge, myDegree="MCS"] = myBioData;
  // console.log(myDegree);



  // ➡ Object destructuring 🏁
  // const myBioData = {
  //   myFname : 'vinod',
  //   myLname : 'thapa',
  //   myAge : 26
  // }

  // let {myFname,myLname,myAge, myDegree="MCS"} = myBioData;
  // console.log(myAge);
  // console.log(myDegree);





// 5️⃣ Object Properties 

// ➡ we can now use Dynamic Properties 

      // let myName = "vinod";
      // const myBio = {
      //   [myName] : "hello how are you?",   // dynamic data
      //   myName : "hello how are you?",
      //   [20 + 6] : "is my age"
      // }

      // console.log(myBio);

  // ➡ no need to write key and value, if both are same 

  // let myName = "vinod thapa";
  // let myAge = 26;

  // const myBio = {
  //   myName : myName,
  //   myAge : myAge
  // }

  // const myBio = {myName,myAge} // if key and value is same as above then we can write like this

  // console.log(myBio);




 
// 6️⃣ Fat Arror Function 

// 👻 Normal Way of writing Function  

// console.log(sum()); 

// function sum() {
//   let a = 5; b = 6;
//   let sum = a+b;
//  return `the sum of the two number is ${sum}`;
// }

// 👻 How to convert in into Fat Arrow Function 


// const sum = () => `the sum of the two number is ${(a=5)+(b=6)}`;

// console.log(sum()); 




// 7️⃣Spread Operator

// const colors = ['red', 'green', 'blue', 'white', 'pink'];

// const myColors = ['red', 'green', 'blue', 'white','pink', 'yellow', 'black'];
// // // 2nd time add one more color on top and tell we need to write it again 
// // // on myColor array too 

// const MyFavColors = [...colors, 'yellow', 'black'];

// console.log(MyFavColors);


// ES7 features 

// 1: array include 
// const colors = ['red', 'green', 'blue', 'white', 'pink'];
// const isPresent = colors.includes('purple');
// console.log(isPresent);

// 2: **
// console.log(2**3); 



// ES8 Features 

// String padding
// Object.values()
// Object.entries()

// String padding

// const message = "my name is vinod";
// console.log(message);
// console.log(message.padStart(5));
// console.log(message.padEnd(10));

// let myname = "rahul".padStart(7);
// console.log(myname);

// Object.values()  - convert object into array

// const person = { 
//   name: 'Fred',
//    age: 87 
//   };
// console.log( Object.values(person) );           // [ 'Fred', 87 ]
// console.log(Object.entries(person));            // [ [ 'name', 'Fred' ], [ 'age', 87 ] ]



// ES2018

// spread and rest properties - in 7 spread operater we cannot use spread in object but now in 2018 we can use it below

// const person = { name: 'Fred', age: 87, degree : "mcs" };
// const sPerson = { ...person };

// console.log(person);
// console.log(sPerson);


// ES2019
// Array.prototype.{flat,flatMap}

// Object.fromEntries()

// const person = [ [ 'name', 'Fred' ], [ 'age', 87 ] ];

// console.log(Object.fromEntries(person));                   // { name: 'Fred', age: 87 } - convert array into object

// ES2020
// #1: BigInt

// let oldNum = Number.MAX_SAFE_INTEGER;
// // console.log(oldNum);
// // console.log( 9007199254740991n + 12n );
// const newNum = 9007199254740991n + 12n;

// console.log(newNum);
// console.log(typeof newNum);


// const foo = null ?? 'default string';
// console.log(foo);

// ES2014

// "use strict";

// x = 3.14; 
// console.log(x);

// ----->  

/**** Section 8👉 Date and Time in JavaScript ****/

// JavaScript Date objects represent a single moment in time in a 
// platform-independent format. Date objects contain a Number 
// that represents milliseconds since 1 January 1970 UTC.

// 👉 Creating Date Objects
// There are 4 ways to create a new date object:

// new Date()
// new Date(year, month, day, hours, minutes, seconds, milliseconds)
// // it takes 7 arguments
// new Date(milliseconds)
// // we cannot avoid month section 
// new Date(date string)

// new Date() 🙋‍♂️
// Date objects are created with the new Date() constructor.

// let currDate = new Date(); 
// console.log(currDate);                  // 2023-03-20T12:37:36.313Z

// console.log(new Date());                  // 2023-03-20T12:37:36.313Z
// console.log(new Date().toLocaleString()); // 20/3/2023, 6:07:36 pm 
// console.log(new Date().toString());       // Mon Mar 20 2023 18:07:36 GMT+0530 (India Standard Time) 


// Date.now() 🙋‍♂️
// Returns the numeric value corresponding to the current time—the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC

// console.log(Date.now());    // 1679315971736 -  total millisecond from date  January 1, 1970


// new Date(year, month, ...) 🙋‍♂️
// 7 numbers specify year, month, day, hour, minute, second, 
// and millisecond (in that order)
// Note: JavaScript counts months from 0 to 11.

// January is 0. December is 11.

// var d = new Date(2021,0);
// var d = new Date(2022,1,22,34);
// console.log(d.toLocaleString());


// new Date(dateString) 🙋‍♂️
// new Date(dateString) creates a new date object from a date string

// var d = new Date("October 13, 2021 11:13:00");
// console.log(d.toLocaleString());

// new Date(milliseconds) 🙋‍♂️
// new Date(milliseconds) creates a new date object as zero time plus milliseconds:

// var d = new Date(0);
// var d = new Date(1609574531435);
// var d = new Date(86400000*2);
// console.log(d.toLocaleString());

//👉 Dates Method

// const curDate = new Date();

// // how to get the indivisual date 
// console.log(curDate.toLocaleString());
// console.log(curDate.getFullYear());
// console.log(curDate.getMonth()); // 0-11 jan to dec
// console.log(curDate.getDate());
// console.log(curDate.getDay());

// // how to set the indivisual date 

// console.log(curDate.setFullYear(2022));
// // The setFullYear() method can optionally set month and day
// console.log(curDate.setFullYear(2022, 10, 5));
// let setmonth = curDate.setMonth(10); // 0-11 jan to dec
// console.log(setmonth);
// console.log(curDate.setDate(5));
// console.log(curDate.toLocaleString());


//👉 Time Methods

// const curTime = new Date();

// how to get the indivisual Time 

// console.log(curTime.getTime());
// // // The getTime() method returns the number of milliseconds 
// // since January 1, 1970
// console.log(curTime.getHours());
// // // The getHours() method returns the hours of a date as a 
// // number (0-23)
// console.log(curTime.getMinutes());
// console.log(curTime.getSeconds());
// console.log(curTime.getMilliseconds());


// // how to set the indivisual Time 

// let curTime = new Date();

// // console.log(curTime.setTime());
// console.log(curTime.setHours(5));
// console.log(curTime.setMinutes(5));
// console.log(curTime.setSeconds(5));
// console.log(curTime.setMilliseconds(5));

// Write code in javascript to get today's date in the format 'dd/mm/yyyy'
// Example: "02/07/2020"
// const today = new Date();
// const day = today.getDate();
// const month = today.getMonth() + 1; // months start at index 0
// const year = today.getFullYear();

// console.log(`"${day}/${month}/${year}"`);
// console.log(today.toLocaleDateString());

// console.log("Today is : " + today.getDay());
// // Practice Time 
// new Date().toLocaleTimeString(); // 11:18:48 AM
// //---
// new Date().toLocaleDateString(); // 11/16/2015
// //---
// new Date().toLocaleString(); // 11/16/2015, 11:18:48 PM

// Challenge Time NOT yet decided
// (function(){
//   setInterval(()=> {
//     console.log(new Date().toLocaleTimeString());
//   }, 1000)
// })();


// ----->  

// Section 9👉 Math Object in JavaScript

// The JavaScript Math object allows you to perform mathematical tasks on numbers.

//  🙋‍♂️
// console.log(Math.PI);      // 3.141592653589793 


// Math.round() 🙋‍♂️
// returns the value of x rounded to its nearest integer

// let num = 10.501;
// console.log(Math.round(num));   // 11


// Math.pow() 🙋‍♂️
// Math.pow(x, y) returns the value of x to the power of y

// console.log(Math.pow(2,3));  // 8
// console.log(2**3);           // 8


// Math.sqrt() 🙋‍♂️
// Math.sqrt(x) returns the square root of x

// console.log(Math.sqrt(25));  // 5
// console.log(Math.sqrt(81));  // 9
// console.log(Math.sqrt(66));  // 8.12403840463596


// Math.abs() 🙋‍♂️
// Math.abs(x) returns the absolute (positive) value of x

// console.log(Math.abs(-55));    // 55
// console.log(Math.abs(-55.5));  // 55.5
// console.log(Math.abs(-955));   // 955
// console.log(Math.abs(4-6));   // 2


// Math.ceil() 🙋‍♂️
// Math.ceil(x) returns the value of x rounded up to its nearest integer

// console.log(Math.ceil(4.51));   // 5
// console.log(Math.round(4.21));  // 4
// console.log(Math.ceil(99.01));  // 100
// console.log(Math.round(99.1));  // 99


// Math.floor()  🙋‍♂️
// Math.floor(x) returns the value of x rounded down to its nearest integer

// console.log(Math.floor(4.7));   // 4
// console.log(Math.floor(99.1));  // 99


// Math.min() 🙋‍♂️
// Math.min() can be used to find the lowest value in a list of arguments

// console.log(Math.min(0, 150, 30, 20, -8, -200));  // -200


// Math.max() 🙋‍♂️
// Math.max() can be used to find the highest value in a list of arguments

// console.log(Math.max(0, 150, 30, 20, -8, -200)); // 150


// Math.random() 🙋‍♂️
// Math.random() returns a random number between 0 (inclusive), and 1 (exclusive)

// console.log(Math.random());       
// console.log(Math.random()*10);      
// console.log(Math.floor(Math.random()*10)); // 0 to 9


// Math.round() 🙋‍♂️
// The Math.round() function returns the value of a number 
// rounded to the nearest integer.

// console.log(Math.round(4.6));   // 5 
// console.log(Math.round(99.1));  // 99


// Math.trunc()  🙋‍♂️
// The trunc() method returns the integer part of a number

// console.log(Math.trunc(4.6));    // 4
// console.log(Math.trunc(-99.1));  // -99


// Practice Time 

// if the argument is a positive number, Math.trunc() is equivalent to Math.floor(),
// otherwise Math.trunc() is equivalent to Math.ceil().



// ----->  

// Section 10👉 Document Object model in JavaScript 

// 1️⃣ Window is the main container or we can say the global Object and any operations related to entire browser window can be a part of window object. 

// For ex 👉 the history or to find the url etc.

// 1️⃣ whereas the DOM is the child of Window Object


// 2️⃣ All the members like objects, methods or properties. 
// If they are the part of window object then we do not refer 
// the window object. Since window is the global object 
// so you do not have to write down window. 
// - it will be figured out by the runtime.

// For example
// 👉 window.screen or just screen is a small information object about physical screen dimensions.
// 👉 window.location giving the current URL
// 👉 window.document or just document is the main object of the potentially visible (or better yet: rendered) document object model/DOM.
  

// 2️⃣ Where in the DOM we need to refer the document, 
// if we want to use the document object, methods or properties
// For example
// 👉 document.getElementById()


// 3️⃣ Window has methods, properties and object. 
// ex setTimeout() or setInterval() are the methods 
// where as Document is the object of the Window and 
// It also has a screen object with properties describing the physical display.


// Now, I know you have a doubt like we have seen the methods and object of the global object that is window. But What about the properties of the Window Object 🤔

// so example of window object properties are
// innerHeight, 
// innerWidth and there are many more 

// let's see some practical in DOM HTML file



// ************** DOM vs BOM *******************

// 👉 The DOM is the Document Object Model, which deals with the document, 
// the HTML elements themselves, e.g. document and all traversal you 
// would do in it, events, etc.

// For Ex: 👨‍🏫
// change the background color to red
// document.body.style.background = "red";


// 👉 The BOM is the Browser Object Model, which deals with browser components 
// aside from the document, like history, location, navigator and screen 
// (as well as some others that vary by browser). OR 
// In simple meaning all the Window operations which comes under BOM are performed 
// usign BOM 




// Let's see more practical on History object 

// Functions alert/confirm/prompt are also a part of BOM: 
// they are directly not related to the document, 
// but represent pure browser methods of communicating with the user.

// alert(location.href); // shows current URL
// if (confirm("Want to Visit ThapaTechnical?")) {
//   location.href = "https://www.youtube.com/thapatechnical"; // redirect the browser to another URL
// }

// Difference between getElementbyId & querySelector  // ----->                  important 



// Section 3️⃣: Navigate through the DOM 

// 1: document.documentElement
      // returns the Element that is the root element of the document. 
// 2: document.head
// 3: document.body
// 4: document.body.childNodes (include tab,enter and whiteSpace)
  // list of the direct children only 
// 5: document.children (without text nodes, only regular Elements)
// 6: document.childNodes.length

// 👉 Practice Time 
// How to check whether an element has child nodes or not?
// we will use hasChildNodes()

// 👉 Practice Time 
// How to find the child in DOM tree 
// firstChild vs firstElementChild
// lastChild vs lastElementChild 
// const data = document.body.firstElementChild;
// undefined
// data
// data.firstElementChild
// data.firstElementChild.firstElementChild
// data.firstElementChild.firstElementChild.style.color = "red"
// vs 
// document.querySelector(".child-two").style.color = "yellow";

// 👉 How to find the Parent Nodes 
// document.body.parentNode
// document.body.parentElement

// 👉 How to find or access the siblings
// document.body.nextSibling
// document.body.nextElementSibling
// document.body.previousSibling
// document.body.previousElementSibling



//SECTION 4️⃣:  How to search the Elements and the References 
// We will see the new file 




// ----->  


// Section 11👉 EVENTS in JavaScript 


// HTML events are "things" that happen to HTML elements.
// When JavaScript is used in HTML pages, JavaScript can "react" on these events.


// 👨‍🏫 HTML Events
// An HTML event can be something the browser does, or something a user does.

// Here are some examples of HTML events:

// An HTML web page has finished loading
// An HTML input field was changed
// An HTML button was clicked
// Often, when events happen, you may want to do something.

// JavaScript lets you execute code when events are detected.

// HTML allows event handler attributes, with JavaScript code, 
// to be added to HTML elements.



// section 1️⃣ 4 ways of writing Events in JavaScript

// 1: using inline events alert();
// 2: By Calling a funcion (We already seen and most common way of writing) 
// 3: using Inline events (HTML onclick="" property and element.onclick)
// 4: using Event Listeners (addEventListener and IE's attachEvent)

// check the Events HTML File



// section 2️⃣: What is Event Object?                        // 4 types of event
// Event object is the parent object of the event object. 
// for Example 
// MouseEvent, focusEvent, KeyboardEvent etc 



// section ️3️⃣ MouseEvent in JavaScript                     // mouse event- mouseup & mousedown, mouseenter , mouseleave
// The MouseEvent Object
// Events that occur when the mouse interacts with the HTML document belongs to the MouseEvent Object.



// section ️4️⃣ KeyboardEvent  in JavaScript                          // on key press, keyUp and KeyDown
// Events that occur when user presses a key on the keyboard, 
// belongs to the KeyboardEvent Object.
// https://www.w3schools.com/jsref/obj_keyboardevent.asp


// Section 5️⃣ InputEvents in JavaScript                                          // OnChange Event                        
// The onchange event occurs when the value of an element has been changed.

// For radiobuttons and checkboxes, the onchange event occurs when the 
// checked state has been changed.

// Difference between Inline events and Event Listeners // ----->  

// This is bcoz addEventListener does not overwrite existing event handlers, whereas onclick overrides any existing onclick = fn event handlers.

//The other significant difference is that onclick will always work,whereas addEventListener does not work in internet explorer before version 9

// 👉  JavaScript Timing Events 

// The window object allows execution of code at specified time intervals.

// These time intervals are called timing events.

// The two key methods to use with JavaScript are:

// setTimeout(function, milliseconds)
// Executes a function, after waiting a specified number of milliseconds.

// setInterval(function, milliseconds)
// Same as setTimeout(), but repeats the execution of the function continuously.


// 1️⃣ setTimeout()

// 2️⃣clearTimeout()

// 3️⃣ setInterval()

// 4️⃣ clearInterval()


// 👉 object oriented Javascript // ----->  

// 1️⃣ What is Object Literal?

// Object literal is simply a key:value pair data structure. 

// Storing variables and functions together in one container, 
// we can refer this as an Objects.

// object = school bag 

// How to create an Object?

// 1st way 

  // let bioData = { 
  //     myName : "thapatechnical",
  //     myAge : 26,
  //     getData : function(){
  //       console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
  //     }
  // }

  // bioData.getData();

// 2nd way no need to write functions as well after es6

// let bioData = { 
//   myName : "thapatechnical",
//   myAge : 26,
//   getData (){
//     console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
//   }
// }

// bioData.getData();


// 👉 What if we want object as a value inside an Object 


// let bioData = { 
//   myName : {
//     realName : "vinod",
//     channelName : "thapa technical" 
//   },
//   myAge : 26,
//   getData (){
//     console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
//   }
// }

// console.log(bioData.myName.channelName );





// 2️⃣ What is this Object?

// The definition  of "this" object is that it contain the current context. 

// The this object can have different values depending on where it is placed.  


// // For Example 1 
// console.log(this.alert('Awesome'));
// // it refers to the current context and that is window global object 


// // ex 2 
// function myName() {
//     console.log(this);
// }
// myName();



// // ex 3 

// var myNames = 'vinod';
// function myName() {
//     console.log(this.myNames);
// }
// myName();


// // ex 4 
// const obj = {
//     name : "rahul",
//     myAge : 26,
//     myName() {
//       console.log(this.myAge);
//       console.log(this.name);
//     }
// }
// obj.myName();

// // ex 5 
// // this object will not work with arrow function bcz arrow function is bound to class.

// const obj = {
//     myAge : 26,
//     myName : () => {
//       console.log(this);
//     }
// }
// obj.myName();



// // ex 6

// let bioData = {
//     myName : {
//         realName : "vinod thapa",
//         channelName : 'thapa technical'
//     },
//     // things to remember is that the myName is the key and the object is act like a value 
//     myAge : 26,
//     getData (){
//       console.log(`My name is ${this.myName.channelName} and my age is ${this.myAge} `);
//     }
//   }

//   bioData.getData();


// // call method is used to call the method of another object 
// // or with call(), an object can use a method belonging to another object 

// // But as per other it is simply the way to use the this keyword or another object 




// ----->  


// // 👉 How JavaScript Works? Advanced and Asynchronous JavaScript


// // Advanced JavaScript Section

// // 1️⃣: Event Propagation (Event Bubbling and Event Capturing)

// // check html file 

// ----->  
// // 2️⃣: Higher Order Function
// // function which takes another function as an arguments is called HOF 
// // wo function jo dusre function ko as an argument accept krta hai use HOF 

// ----->  
// // 3️⃣: Callback Function
// // function which get passed as an argument to another function is called CBF 
// // A callback function is a function that is passed as an argument to 
// // another function, to be “called back” at a later time. 

// // Jis bhi function ko hum kisi or function ke under as an arguments passed 
// // krte hai then usko hum CallBack fun bolte hai 


// we need to create a calculator

// const add = (a,b) => {
//     return a+b;
// }

// const subs = (a,b) => {
//     return Math.abs(a-b);
// }

// const mult = (a,b) => {
//     return a*b;
// }

// // add, subs & mult is an callback function bcoz they are getting passed as arguments in another functions

// const calculator = (num1,num2, operator) => {
//   return operator(num1,num2);
// }

// console.log(calculator(5,2,subs)); // - calculator function is higher order function bcoz it is accepting other functions as an argument.


// // // I have to do the hardcoded for each operation which is bad
// // // we will use the callback and the HOF to make it simple to use 




// // // Now instead of calling each function indivisually we can call it
// // // by simply using one function that is calculator 

// console.log(calculator(5,6,add));
// console.log(calculator(5,6,subs));
// console.log(calculator(5,6,mult));

// // In the above example, calculator is the higher-order function, 
// // which accepts three arguments, the third one being the callback.
// // Here the calculator is called the Higher Order Function because it takes
// // another function as an argument 

// // and add, sub and mult are called the callback function bcz they are passed 
// // as an argument to another fucntion 

// ----->  
// // InterView Question

// // Difference Between Higher Order Function and Callback Function ?

// Difference between Synchronous and Asynchronous JavaScript ?



// ----->  

// // 🏁🏁Asynchronous JavaScript


// // 6️⃣:   Synchronous JavaScript Prog 

// 1work = 10min
// 2work = 5s

// const fun2 = () => {
//   console.log(`Function 2️⃣ is called`);
// }
// const fun1 = () => {
//   console.log(`Function 1 is called`);
//   fun2();
//   console.log(`Function 1 is called Again ✌`);
// }
// fun1();

// output 
// Function 1 is called
// Function 2️⃣ is called      
// Function 1 is called Again ✌



// Asynchronous JavaScript Prog 

// const fun2 = () => {
//   setTimeout(()=> {
//       console.log(`Function 2️⃣  is called`);
//   }, 2000);
// }
// const fun1 = () => {
//   console.log(`Function 1 is called`);
//   fun2();
//   console.log(`Function 1 is called Again ✌`);
// }
// fun1();

// output
// Function 1 is called
// Function 1 is called Again ✌
// Function 2️⃣  is called


// ----->  
// //👻 What is Event Loop in JavaScript?

// // ppt explain 


// // 5️⃣ Hoisting in JavaScript 

// // we have a creation phase and execution phase.

// // Hoisting in Javascript is a mechanism where variables and functions declarations are moved to the top of their scope before the code execute.

// For Example 👇
// console.log(myName);
// let myName;
// myName = "thapa";

// // How it will be in output during creation phase 

// 1: var myName = undefined;
// 2: console.log(myName);
// 3: myName = "thapa";


// //😲 In ES2015 (a.k.a. ES6), hoisting is avoided by using the let keyword 
// // instead of var. (The other difference is that variables declared 
// // with let are local to the surrounding block, not the entire function.)



// // 6️⃣ What is Scope Chain and Lexical Scoping in JavaScript? 

// // The scope chain is used to resolve the value of variable names 
// // in JS.

// // scope chain in js is lexically defined, which means that we can see what the scope chain will be by looking at the code. 

// // At the top, we have the Global Scope, which is the window Object in the browser.

// // Lexical Scoping means Now, the inner function can get access to their parent functions variables But(let & const bcoz it is function scope cannot access outside its own function) the vice-versa is not true.


// // For Example 👇

// let a = "Hello guys. "; // global scope

// const first= () => {
//   let b = " How are you?"
 
//     const second = () => {
//       let c = " Hii, I am fine thank you🙏";
//       console.log(a+b+c);  // here inner function can get access of outer function a and b 
//     }
//     second();
//     // console.log(a+b+c); // but here outer fuction cannot access inner function it is known as lexial scoping.
// }
// first();



// // 7️⃣ What is Closures in JavaScript 🤔

// // A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). 

// // In other words, a closure gives you access to an outer function’s scope from an inner function.

// // In JavaScript, closures are created every time a function is created, at function creation time.

// // For Example 👇

// const outerFun = (a) => {
//     let b = 10;
//     const innerFun = () => {
//       let sum = a+b;
//       console.log(`the sum of the two no is ${sum}`);
//     }
//     innerFun();
// }
// outerFun(34);

// // it same like lexical scoping 

// // One more Example 👇

// const outerFun = (a) => {
//   let b = 10;
//   const innerFun = () => {
//     let sum = a+b;
//     console.log(`the sum of the two no is ${sum}`);
//   }
//   return innerFun;
// }
// let checkClousure = outerFun(5);
// console.dir(checkClousure);  // dir - output in detailed in browser console

// "use strict"

// let x = "vinod";
// console.log(x);


// //🏁🏁🏁 Back To Advanced JavaScript 


// Currying
// Currying is a technique of evaluating function with multiple arguments, into sequence of function with single argument.


// const sum = (num1) => (num2) => (num3) => console.log(num1+num2+num3); 

// sum(5)(3)(8);



// // 8️⃣: CallBack Hell 

// setTimeout(()=>{
//     console.log(`1️⃣ works is done`);    
//     setTimeout(()=>{
//         console.log(`2️⃣ works is done`); 
//         setTimeout(()=>{
//             console.log(`3️⃣ works is done`);  
//             setTimeout(()=>{
//                 console.log(`4️⃣ works is done`); 
//                 setTimeout(()=>{
//                     console.log(`5️⃣ works is done`);   
//                     setTimeout(()=>{
//                         console.log(`6️⃣ works is done`);    
//                     }, 1000) 
//                 }, 1000)   
//             }, 1000)  
//         }, 1000)   
//     }, 1000)
// }, 1000)



// // **********************************************************************

// // 👉 // 🤩 Bonus JSON 🤩

// // **********************************************************************


// // 👉 JSON.stringify turns a JavaScript object into JSON text and 
// stores that JSON text in a string, eg:

//convert object to json

// var my_object = { key_1: "some text", key_2: true, key_3: 5 };

// var object_as_string = JSON.stringify(my_object);     // "{"key_1":"some text","key_2":true,"key_3":5}"  

// console.log(object_as_string);

// typeof(object_as_string);     // "string" 


// // 👉 JSON.parse turns a string of JSON text into a JavaScript object, eg:

// convert json into object

// var Jsonfile= '{"key_1":"some text","key_2":true,"key_3":5}';

// var newjson = JSON.parse(Jsonfile);

// typeof(newjson);

// console.log(newjson);            // { key_1: 'some text', key_2: true, key_3: 5 }
// console.log(newjson.key_2);      // true    
// console.log(newjson.key_3);      // 5   



// // 7️⃣ AJAX Call using XMLHttprequest 

// // how to handled with the events and callback 

// // XMLHttpRequest (XHR) objects are used to interact with servers. 
// // You can retrieve data from a URL without having to do a full 
// // page refresh. This enables a Web page to update just part 
// // of a page without disrupting what the user is doing. 
// // XMLHttpRequest is used heavily in AJAX programming.

// const request = new XMLHttpRequest();
// // we need to call the api or request the api using GET method ki, me jo
// // url pass kar kr rha hu uska data chaiye 
// request.open('GET', "https://covid-api.mmediagroup.fr/v1");
// request.send(); // we need to send the request and its async so we need to 
// // add the event to load the data adn get it

// // to get the response 
// request.addEventListener("load", () => {
//     console.log(this.responseText);
// });


