/**** Section 7👉 Strings in JavaScript  ****/

// A JavaScript string is zero or more characters written inside quotes.

// JavaScript strings are used for storing and manipulating text.
// You can use single or double quotes

// Strings can be created as primitives, 
// from string literals, or as objects, using the String() constructor

// let myName = "vinod thapa";
// let myChannelName = 'vinod thapa';

// let ytName = new String("Thapa Technical");
// let ytName = 'thapa technical';

// console.log(myName);
// console.log((ytName));



// 👉 How to find the length of a string
// String.prototype.length 🙋‍♂️
// Reflects the length of the string. 

// let myName = "vinod thapa";
// console.log(myName.length);



// 👉 Escape Character

// let anySentence = "We are the so-called \"Vikings\" from the north.";
// console.log(anySentence);                                                   //We are the so-called "Vikings" from the north.

// // if you dont want to mess, simply use the alternate quotes 

// let anySentence =  " We are the so-called 'Vikings' from the north. ";    // We are the so-called 'Vikings' from the north.
// let Sentence2 =  ' We are the so-called "Vikings" from the north. ';      // We are the so-called "Vikings" from the north.
// console.log(anySentence);
// console.log(Sentence2);


// 👉 Finding a String in a String

// String.prototype.indexOf(searchValue [, fromIndex]) 🙋‍♂️

// The indexOf() method returns the index of (the position of) the first
//  occurrence of a specified text in a string

// const myBioData =  'I am the thapa Technical';
// console.log(myBioData.indexOf("t", 6));

// JavaScript counts positions from zero.
// 0 is the first position in a string, 1 is the second, 2 is the third ...


// String.prototype.lastIndexOf(searchValue [, fromIndex]) 🙋‍♂️
// Returns the index within the calling String object of then last occurrence of searchValue, or -1 if not found.

// const myBioData =  'I am the thapa Technical';
// console.log(myBioData.lastIndexOf("t", 6));


// 👉 Searching for a String in a String

// String.prototype.search(regexp) 🙋‍♂️

// The search() method searches a string for a specified 
// value and returns the position of the match

// const myBioData =  'I am the thapa Technical';
// let sData = myBioData.search("thapa");
// console.log(sData);                                 // 9

// The search() method cannot take a second start position argument.


// 👉 Extracting String Parts

// There are 3 methods for extracting a part of a string:

// slice(start position, end point)
// substring(start position, end point)
// substr(start position, length)

// The slice() Method 🙋‍♂️
// slice() extracts a part of a string and returns the extracted part 
// in a new string.

// The method takes 2 parameters: the start position, 
// and the end position (end not included).

// var str = "Apple, Bananaa, Kiwi, mango";

// let res = str.slice(0,2);      // Appl
// let res = str.slice(7);     // Bananaa, Kiwi, mango
// console.log(res);

// The slice() method selects the elements starting at the given start argument, and ends at, but does not include,the given end argument.

// Note: The original array will not be changed.
// Remember: JavaScript counts positions from zero. First position is 0.


// 😀11: challenge Time 🏁

// Display only 280 characters of a string like the one used in Twitter?

// let myTweets  = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? ";

// let myActualTweet = myTweets.slice(0,280);
// console.log(myActualTweet);
// console.log(myActualTweet.length);


// The substring() Method 🙋‍♂️
// substring() is similar to slice().

// The difference is that substring() cannot accept 
// negative indexes.

// var str = "Apple, Bananaa, Kiwi";
// let res = str.substring(8,-2);
// console.log(res);

// // If we give negative value then the characters are
//  counted from the 0th pos 


// The substr() Method 🙋‍♂️
// substr() is similar to slice().

// The difference is that the second parameter specifies the length of the extracted part.

// var str = "Apple, Bananaa, Kiwi";
// let res = str.substr(7,2);
// // let res = str.substr(-4);
// console.log(res);


// 👉 Replacing String Content() 

// String.prototype.replace(searchFor, replaceWith) 🙋‍♂️

// The replace() method replaces a specified value 
// with another value in a string.

// let myBioData = `I am vinod bahadur thapa Vinod`;
// console.log(myBioData);
// let repalceData = myBioData.replace('Vinod','VINOD');
// console.log(repalceData);

// Points to remember 
// 1: The replace() method does not change the string it is called on.  It returns a new string.
// 2: By default, the replace() method replaces only the first match
// 3:By default, the replace() method is case sensitive.Writing VINOD (with upper-case) will not work


//👉 Extracting String Characters

// There are 3 methods for extracting string characters:

// charAt(position)
// charCodeAt(position)
// Property access [ ]

// The charAt() Method 🙋‍♂️
// The charAt() method returns the character at a specified index (position) in a string

// let str = "HELLO WORLD";
// console.log(str.charAt(10));   // D - kis position pe kon sa letter h 10th position pe D letter h string me
// console.log(str.charAt(0));    // H


// The charCodeAt() Method 🙋‍♂️
// The charCodeAt() method returns the unicode of the character at a specified index in a string:

// The method returns a UTF-16 code (an integer between 0 and 65535).

// The Unicode Standard provides a unique number for every character, no matter the platform, device, applicationor language. UTF-8 is a popular Unicode encoding which has 88-bit code units.

// var str = "HELLO WORLD";
// console.log( str.charCodeAt(0) ); // 72 - bcoz unicode of H is 72
// console.log( str.charCodeAt(10) );  // 68


// 😀12: challenge Time 🏁

// Return the Unicode of the last character in a string

// let str = "HELLO UNIVERSE"
// let newstr = str.length - 1;
// console.log(str.charCodeAt(newstr));  // 69

// Property access [ ] 🙋‍♂️
// ECMAScript 5 (2009) allows property access [ ] on strings

// var str = "HELLO WORLD";
// console.log(str[1]);       // E


//👉  Other useful methods 

// let myName = "vinod tHapa";
// console.log(myName.toUpperCase());   // VINOD THAPA
// console.log(myName.toLowerCase());      // vinod thapa


// The concat() Method 🙋‍♂️
// concat() joins two or more strings

// let fName = "vinod"
// let lName = "thapa"
// console.log(fName + lName );
// console.log(`${fName} ${lName}`);
// console.log(fName.concat(lName));
// console.log(fName.concat(" " ,lName));


// String.trim() 🙋‍♂️
// The trim() method removes whitespace from both sides of a string

// var str = "              Hello         World!            ";
// console.log(str.trim());                                    // Hello         World!


// Converting a String to an Array   // ----->  
// A string can be converted to an array with the split() method

// var txt = "a, b,c d,e";   // String
// console.log(txt.split(" "));            //                 [ 'a,', 'b,c', 'd,e' ]     
// console.log(txt.split(","));           // Split on commas  [ 'a', ' b', 'c d', 'e' ]  
// console.log( txt.split(" "));          // Split on spaces  [ 'a,', 'b,c', 'd,e' ]   
// console.log(txt.split("|"));         // Split on pipe      [ 'a, b,c d,e' ] 


// convert a string into number 

// three ways: 

// using the unary plus operator:
// var n = +str;

// the number constructor:
// var n = Number(str);

// the parseFloat function:
// var n = parseFloat(str);