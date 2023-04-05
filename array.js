/**** Section 7👉 Arrays in JavaScript  ****/
// When we feel like storing multiple values in one variable then instead of var, we will use an Array.

// In JavaScript, we have an Array class, and arrays are the prototype of this class.

// 1️⃣ Array Subsection 1 👉 Traversal in array✌ 
// navigate through an array

// var myFriends = ['vinod','ramesh','arjun','vishal'];

// console.log(myFriends[4]);                      //undefined
// console.log(myFriends[3]);                      //vishal
// console.log(myFriends[myFriends.length - 2]);   //arjun
// console.log(myFriends[myFriends.length - 3]);   //ramesh


// if we want to check the length of elements of an array 

// console.log(myFriends.length);

// we use for loop to navigate 

// var friend = ['ramesh', 'suresh', 'vinod' ,'jessy']
// for(var i=0;i<friend.length;i++){
//   console.log(friend[i]);                      // 'ramesh', 'suresh', 'vinod' ,'jessy'
// }

// Taking array input in console

// const prompt = require("prompt-sync")();
// var input = [];
// var size = prompt("Enter size of an array:");
// for(var i=0; i<size; i++) {
// 	//Taking Input from user
// 	input[i] = prompt(` Enter Element ${i+1} `);
// }
// console.log(input);

// output
// enter size of an array:3
//  Enter Element 1 34
//  Enter Element 2 56
//  Enter Element 3 43
// [ '34', '56', '43' ]


// ----->  

// After ES6 we have for..in and for..of loop too 

// print index of array
// var myFriends = ['vinod','ramesh','arjun','vishal'];
// for(let elements in myFriends){
//   console.log(elements);                             // 0 1 2 3
// }

//print name of array
// var myFriends = ['vinod','ramesh','arjun','vishal'];
// for(let elements of myFriends){
//   console.log(elements);                           // 'vinod','ramesh','arjun','vishal'
// }

// Array.prototype.forEach() 🙋‍♂️ // ----->  
// Calls a function for each element in the array.

// var friends = ['vinod','ramesh','arjun','vishal'];

// friends.forEach(function(element, index, array) {
//       console.log(element + " index is: " + index + " " + array);       
// });                                                                     

// output
// vinod index is: 0 vinod,ramesh,arjun,vishal
// ramesh index is: 1 vinod,ramesh,arjun,vishal
// arjun index is: 2 vinod,ramesh,arjun,vishal
// vishal index is: 3 vinod,ramesh,arjun,vishal


// Array.prototype.forEach() using fat function 🙋‍♂️ // ----->  

// var friends = ['vinod','ramesh','arjun','vishal'];

// friends.forEach((element, index, array) => {
//   console.log(`${element} is at index ${index} list: ${array}`);
// });

// output
// vinod is at index 0 list: vinod,ramesh,arjun,vishal
// ramesh is at index 1 list: vinod,ramesh,arjun,vishal
// arjun is at index 2 list: vinod,ramesh,arjun,vishal
// vishal is at index 3 list: vinod,ramesh,arjun,vishal

// we cannot use break statement in for.Each loop


// 2️⃣ Array Subsection 2 👉 Searching and Filter in an Array 

// Array.prototype.indexOf() 🙋‍♂️ // ----->  
 
// Returns the first (least) index of an element within the array equal to an element, or -1 if none is found. It search the element from the 0th index number 
//forward search

// var myFriendNames = ["vinod","bahadur","thapa","thapatechnical","thapa"];

// console.log(myFriendNames.indexOf("thapa"));           // 2
// console.log(myFriendNames.indexOf("thapa",4));         // 4
// console.log(myFriendNames.indexOf("Thapa"));           // -1


// Array.prototype.lastIndexOf() 🙋‍♂️ // ----->  
// Returns the last (greatest) index of an element within the array equal to an element, or -1 if none is found. It search the element last to first
//backward search

// var myFriendNames = ["vinod","bahadur","thapa","thapatechnical","thapa"];

// console.log(myFriendNames.lastIndexOf("thapa"));          // 4
// console.log(myFriendNames.indexOf("thapa",0));            // 2

// Array.prototype.includes() 🙋‍♂️ // ----->  
// Determines whether the array contains a value,returning only boolean vaalue(true or false) as appropriate.

// var myFriendNames = ["vinod","bahadur","thapa","thapatechnical"];

// console.log(myFriendNames.includes("thapa"));             // true
// console.log(myFriendNames.includes("dsgggcg"));           // false

// Array.prototype.find() 🙋‍♂️ // ----->  

// arr.find(callback(element[, index[, array]])[, thisArg])

// Returns the found element in the array, if some element in the array satisfies the testing function, or undefined if not found.
// Only problem is that it return only one element

// const prices = [200,300,350,400,450,500,600];

//price < 400
// const findElem = prices.find((currVal,index,arr) =>  currVal < 400 );
// console.log(findElem);                                                  // 200


// Another way of above code

// const prices = [200,300,350,400,450,500,600];

// console.log(  prices.find((currVal) => currVal < 400 )  );            // 200
// console.log(  prices.find((currVal) => currVal > 400 )  );            // 450



// Array.prototype.findIndex() 🙋‍♂️ // ----->  

// Returns the found index in the array, if an element in the array satisfies the testing function, or -1 if not found.

// const prices = [200,300,350,400,450,500,600];
// console.log(  prices.find((currVal) => currVal < 400 )  );                  // 200
// console.log(  prices.findIndex((currVal) => currVal < 400 )  );            // 0 - return the index of found element


// Array.prototype.filter() 🙋‍♂️  // ----->  

// Returns a new array containing all elements of the calling array for which the provided filtering function returns true.

// const prices = [200,300,350,400,450,500,600];

// const newPriceTag = prices.filter((elem, index) => {
//   return elem > 200;       // conditions
// })
// console.log(newPriceTag);                                               //[ 300, 350, 400, 450, 500, 600 ]

// filter, find & findIndex all in one // ----->  

// const price = [200,300,350,400,450,500,600];

// const newPrice = price.filter((elem, index) => {
//   return elem > 200;       // conditions
// })
// console.log(newPrice);                                                    // [ 300, 350, 400, 450, 500, 600 ]
// console.log( price.find((currVal) => currVal < 400 )  );                  // 200
// console.log( price.findIndex((currVal) => currVal < 400 )  );             // 0

// 3️⃣ Array Subsection 3 👉 How to sort an Array

// Array.prototype.sort() 🙋‍♂️ // ----->  

// The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings,then comparing their sequences of UTF-16 code units values.

// const months = ['March', 'Jan', 'Feb', 'April' , 'Dec', 'Nov'];
// console.log(months.sort());                 // [ 'April', 'Dec', 'Feb', 'Jan', 'March', 'Nov' ]

// const array1 = [1, 4, 21, 99, 100000, 99];
// console.log(array1.sort());                    // [ 1, 100000, 21, 4, 99, 99 ]

// elements should be in ascending order However, if numbers are sorted as strings,"25" is bigger than "100", because "2" of 25 is bigger than "1" of 100.
// Because of this, the sort() method will produce an incorrect result when sorting numbers.


// 😀7: challenge Time  🏁

// 1: How to Sort the numbers in the array in ascending (up) and descending (down) order?

// compareFunction	Optional. 
// A function that defines an alternative sort order. The function should return a negative, zero, or positive value, depending on the arguments, like:
// function(a, b){return a-b}

// for asecnding order - kam se jada

// array1 = [23,45,22,245,6,54];
// array1.sort(function(a,b){
//     console.log(a,b);
//     if(a>b){
//         return 1;
//         // b comes first and then a 
//     }
//     if(a<b){
//         // a comes first and then b 
//         return -1;
//     }
//     if(a==b){
//         // No changes
//         return 0;
//     }
// });
// console.log(array1);        // [ 6, 22, 23, 45, 54, 245 ]

// 1: How to Sort the numbers in the array in ascending (up) and descending (down) order?

// for desecnding order - jada se kam

// array1 = [23,45,22,245,6,54];
// array1.sort(function(a,b){
//     console.log(a,b);
//     if(a>b){
//         return -1;
//         // b comes first and then a 
//     }
//     if(a<b){
//         // a comes first and then b 
//         return 1;
//     }
//     if(a==b){
//         // No changes
//         return 0;
//     }
// });
// console.log(array1);      // [ 245, 54, 45, 23, 22, 6 ]


// var fruits = ["Banana", "Orange", "Apple", "Mango"];

// let aFruits = fruits.sort();
// console.log(aFruits);

// ----->                                                                                                                         

// 4️⃣ Array Subsection 4 👉 Perform CRUD 

// Array.prototype.push() 🙋‍♂️ // ----->  
// The push() method adds one or more elements to the end of an array and returns the new length of the array.

// const animals = ['pigs', 'goats', 'sheep'];

// animals.push('chicken', 'cats','cow'); //add new element
// console.log(animals);                                         // [ 'pigs', 'goats', 'sheep', 'chicken', 'cats', 'cow' ]

// const count = animals.push('anku pagaleya');
// console.log(animals);                              // [ 'pigs', 'goats', 'sheep', 'chicken', 'cats', 'cow', 'anku pagaleya' ]
// console.log(count);                                // 7 - count no total elements in array


// Array.prototype.unshift() 🙋‍♂️ // ----->  
// The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.


// const animals = ['pigs', 'goats', 'sheep'];

// const count = animals.unshift('chicken');
// console.log(count);                             // 4
// console.log(animals);                           // [ 'chicken', 'pigs', 'goats', 'sheep' ]
// animals.unshift('chicken', 'cats','cow');
// console.log(animals);                           //  [ 'chicken','cats','cow','chicken', 'pigs','goats','sheep']
// const count2 = animals.unshift('chicken');
// console.log(count2);                            // 8  

// 2nd example 

// const myNumbers = [1,2,3,5];
// myNumbers.unshift(4,6); 
// console.log(myNumbers);                           //   [ 4, 6, 1, 2, 3, 5 ]


// Array.prototype.pop() 🙋‍♂️ // ----->  
// The pop() method removes the last element from an array and returns that element. This method changes the length of the array.

// const plants = ['broccoli', 'cauliflower',  'kale', 'tomato', 'cabbage'];

// console.log(plants);                       // [ 'broccoli', 'cauliflower', 'kale', 'tomato', 'cabbage' ]
// console.log(plants.pop());                 //  cabbage
// console.log(plants);                       // [ 'broccoli', 'cauliflower', 'kale', 'tomato' ]


// Array.prototype.shift() 🙋‍♂️ // ----->  
// The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.

// const plants = ['broccoli', 'cauliflower',  'kale', 'tomato', 'cabbage'];
// console.log(plants);                         // [ 'broccoli', 'cauliflower', 'kale', 'tomato', 'cabbage' ] 
// console.log(plants.shift());                 // broccoli
// console.log(plants);                         // [ 'cauliflower', 'kale', 'tomato', 'cabbage' ]


// 😀8: challenge Time 🏁

// Array.prototype.splice() 🙋‍♂️ // ----->  
// Adds and/or removes, update elements from an array.


// 1: Add Dec at the end of an array?

// const months = ['Jan', 'march', 'April', 'June', 'July'];
// const newMonth = months.splice(months.length,0,"Dec");
// console.log(months);                                       // [ 'Jan', 'march', 'April', 'June', 'July', 'Dec' ]


// 2: What is the return value of splice method?

// const months = ['Jan', 'march', 'April', 'June', 'July'];
// const newMonth = months.splice(0);
// console.log(months);                                        // undefined


// 3: update march to March (update)? 

// const months = ['Jan', 'march', 'April', 'June', 'July'];
// const newMonth = months.splice(1,1,'March');
// console.log(months);                                          // [ 'Jan', 'March', 'April', 'June', 'July' ]

// another way of above code if we dont know index number

// const months = ['Jan', 'march', 'April', 'June', 'July'];
// const indexOfMonth = months.indexOf('June');
// if(indexOfMonth != -1){
//   const update = months.splice(indexOfMonth,1,'December');
//   console.log(months);                                          // [ 'Jan', 'march', 'April', 'December', 'July' ]
// }else{
//   console.log('No such data found');
// }


// 4: Delete June from an array?

// var months = ['Jan', 'march', 'April', 'June', 'July'];
// const indexOfMonth = months.indexOf('April');
// if(indexOfMonth != -1){
//   const update = months.splice(indexOfMonth,1);
//   console.log(update);                        //[ 'April' ] splice will return only deleted element 
// }else{
//   console.log('No such data found');
// }
// console.log(months);                          // [ 'Jan', 'march', 'June', 'July' ] array after deletion


// ----->  

// 5️⃣ Array Subsection 4 👉 Map and Reduce Method 

// Array.prototype.map() 🙋‍♂️

// let newArray = arr.map(callback(currentValue[, index[, array]]) {
//     // return element for newArray, after executing something
//   }[, thisArg]);

// Returns a new array containing the results of calling a function on every element in this array. 

// const array1 = [1, 4, 9, 16, 25];
// let newArr = array1.map((curElem,index,arr) => {
//     return curElem >= 9;
// })
// console.log(array1);                  // [ 1, 4, 9, 16, 25 ]
// console.log(newArr);                  // [ false, false, true, true, true ]

// const array1 = [1, 4, 9, 16, 25];
// let newArr = array1.map((curElm, index, arr) => {
//     return `Index no = ${index} and the value is ${curElm} belong to ${arr} `
// })
// console.log(newArr);

// output
// 'Index no = 0 and the value is 1 belong to 1,4,9,16,25 ',
// 'Index no = 1 and the value is 4 belong to 1,4,9,16,25 ',
// 'Index no = 2 and the value is 9 belong to 1,4,9,16,25 ',
// 'Index no = 3 and the value is 16 belong to 1,4,9,16,25 ',
// 'Index no = 4 and the value is 25 belong to 1,4,9,16,25 '

// It return new array without mutating the orignal array 


// //Array.prototype.reverse() 🙋‍♂️
// // The reverse() method reverses an array in place. 
// // The first array element becomes the last, and 
// // the last array element becomes the first.

// var fruits = ["Banana", "Orange", "Apple", "Mango"];

// let aFruits = fruits.reverse();
// console.log(aFruits);


// 😀9: challenge Time 🏁

//  1: Find the square root of each element in an array? // ----->  

// let arr = [25, 36, 49, 64, 81]; 
// let newarr = arr.map((curElem) =>  Math.sqrt(curElem) )
// console.log(newarr);                                       //   [ 5, 6, 7, 8, 9 ]


// 2: Multiply each element by 2 and return only those elements which are greater than 10? 

//  let arr = [2, 3, 4, 6, 8]; 
//  let arr2 = arr.map((curElm) => {
//     return curElm *2;
//  }).filter((cur) => {                                     // .filter - chaining which can only used in map function
//     return cur > 10;
//  })
//  console.log(arr2);                                         // [ 12, 16 ]

// above code without return // ----->  

//  let arr = [2, 3, 4, 6, 8];  
//  let arr2 = arr.map((curElm) => curElm * 2).filter((cur) =>cur > 10)
//  console.log(arr2);                                          // [ 12, 16 ]


// above code using reduce method without return

//  let arr = [2, 3, 4, 6, 8]; 
//  let arr2 = arr.map((curElm) => curElm * 2).filter((curElem) => curElem > 10 ).reduce((accumulator, curElem) => {
//       return accumulator += curElem;
//     });
//  console.log(arr2);


// 👉 Reduce Method // ----->  

// flatten an array means to convert the 3d or 2d array into a single dimensional array 

// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.

// The reducer function takes four arguments:

// Accumulator
// Current Value
// Current Index
// Source Array

// 4 subj = 1sub= 7
// 3dubj = [5,6,2]

// let arr = [5,6,2];
// let sum = arr.reduce((accumulator, curElem) => {
//         debugger;
//       return accumulator += curElem;
// },7)
// console.log(sum);


// How to fatten an array or convert 2d,3d array to 1d array // ----->  
// converting 2d and 3d array into one dimensional array 

// const arr = [
//         ['zone_1', 'zone_2'],
//         ['zone_3', 'zone_4'],
//         ['zone_5', 'zone_6'],
//         ['zone_7', ['zone_7', ['zone_7', 'zone_8']]]    // 2d array or array of an array
//     ];
// let flatArr = arr.reduce((accum, currVal)  => { 
//           return accum.concat(currVal);
// })
// console.log(flatArr);                       // it will not flatten the sub array(last element in array)
// console.log(flatArr.flat(Infinity));


// const arr = [ ['zone_1', 'zone_2'], ['zone_3', ['zone_1', 'zone_2', ['zone_1', 'zone_2']]] ];
// console.log(arr.flat(Infinity)); 
// console.log(arr.flat(3));  // flatten upto 3 level


//--------------------------------------------------------------------------------------------------------------->              