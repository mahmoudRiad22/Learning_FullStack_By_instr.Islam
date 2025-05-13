// string methods:
/*
    -- split("seperator"): removes the seperator and create a split instead;
    -- slice(start, end): takes out a slice where slice = [start,end[;

    -- toUpperCase(string): capitalization;
    -- toLowerCase(string): smalization;

    -- indexOf(keyword): return the starting index of the keyword for 1st occurance only;
    -- trim(): Removes the leading and trailing white space and line terminator characters from a string;
*/


//  array methods:
/*
    --  join(seperator): transform the array elements into strings then 
                         join them using the seperator;
                         
    // pop(): Removes the last element from an array, "returns the removed element";
    // shift(): it pops from the start of the array, "returns the removed element";

    // push(): Appends new elements to the end of an array, "returns the new length";
    // unshift(): it push from the start of the array, "returns the new length";

    // length NOT a "function":
    // concat()
    // slice(start, end)

*/

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// split()

let s = "Hello Mahmoud Riad!!!";

let split = s.split(" ");
console.log(s.split(" "));
console.log(s.split("a"));

let ss = "http://127.0.0.1:5500/JavaScript/Lec33-js-8/";

console.log(ss.split("/"));
// -- split("seperator"): removes the seperator and create a split instead;

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// slice()

console.log(ss.slice(4, 10));
// -- slice(start, end): takes out a slice where slice = [start,end[;

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//  indexOf()
let s3 = "mahmoud mostafa riad and aya mostafa riad says HI!!";

let res3 = s3.indexOf("mostafa");

console.log(res3);

///////////////////////////
let s4 = "http://127.0.0.1:5500/JavaScript/Lec33-js-8/";

const portNumber = "8080";
if (s4.indexOf(`${portNumber}`) != -1) {
  console.log(`port ${portNumber} is BUSY!`);
} else {
  console.log(`port ${portNumber} is FREE!`);
}
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//  trim()
let s5 = "      mahmoud mostafa riad and aya mostafa riad says HI!!     ";

console.log(s5.trim(s5));
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//  array methods:
/*
    --  join(seperator): transform the array elements into strings then 
                         join them using the seperator;

    // pop(): Removes the last element from an array, "returns the removed element";
    // shift(): it pops from the start of the array, "returns the removed element";

    // push(): Appends new elements to the end of an array, "returns the new length";
    // unshift(): it push from the start of the array, "returns the new length";

    // length NOT a "function":
    // concat()
    // slice(start, end)

*/

// join(seperator)

let arr1 = ["word1", "word2", 30, "word4", true, "word6"];

let newArr1 = arr1.join("+");
console.log(newArr1);
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//  pop()   shift()  push() unshift()

// handling the end of the array:
    // pop(): Removes the last element from an array, "returns the removed element";
    // push(): Appends new elements to the end of an array, "returns the new length";

let arr2 = ["word1", "word2", 30, "word4", true, "word6"];
console.log("original arr2: ", arr2);
console.log("after one pop: ", arr2.pop(), arr2);
console.log("after a pop and a push;",arr2.push("MAHMOUD"), arr2);

// handling the start of the array:
    // shift(): it pops from the start of the array, "returns the removed element";
    // unshift(): it push from the start of the array, "returns the new length";

let arr3 = ["word1", "word2", 30, "word4", true, "word6"];

console.log("original arr3: ", arr3);
console.log("after 1st shift: ", arr3.shift(), arr3);
console.log("after 1st shift: ", arr3.unshift("WTF!!"), arr3);

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// length NOT a "function":
let arr4 = ["word1", "word2", 30, "word4", true, "word6"];
arr4.pop();
arr4.pop();
arr4.pop();
let newArr4 = arr4;
console.log(newArr4, "length of newArr4: " + newArr4.length);

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// concat()

let arr5 = ["word1", "word2", 30, "word4", true, "word6"];

let arr6 = ["mahmoud", "mostafa", "mona", "aya", "bassma", "mohamed"];

console.log("length of arr5: " + arr5.length, "length of arr6: " + arr6.length);
console.log("after concat, the new length = " + arr5.concat(arr6).length);
console.log(arr5.concat(arr6));

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// slice(start, end)

let bothArr = arr5.concat(arr6);    

console.log(bothArr.slice(3,8));
