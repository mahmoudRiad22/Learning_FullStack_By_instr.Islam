// Data types:

const x = 10;
console.log(typeof x);

// array object null undefined
///////////////////////////////////////////////
// creating an array:
const arr = [10, 20, 30, "ahmed", "zaki", "محاسن"];
// finding the number of array:
console.log(arr.length);
// type of an array:
console.log(typeof arr); //the array in itself is an "OBJECT".
// Acess array-elements using indexs:
console.log(arr[0], arr[3], arr[5]); // 10, "ahmed", "محاسن"
///////////////////////////////////////////////

// creating an object:
const obj1 = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
  key4: "value4",
};

console.log(obj1);
console.log(obj1.length); // there is no length for an object.
console.log(obj1.key3); // dot notaion
console.log(obj1["key2"]);
//////////////////////////////////////////////////
// null and undefined

let var1 = 6000,
  var2;

var1 = null;
console.log(var1);
console.log(typeof var1);
console.log(var1 === null);

//////////////////////////////////////////////////

// if conditions:

// let grade = prompt("Enter a grade number:");
// console.log(grade, typeof grade);

// if (grade === null) {
//   grade = prompt("You Must Enter a grade umber");
// }
// if (grade === "") {
//   grade = prompt("You Must Enter a grade umber");
// } else if (grade !== null) {
//   alert("Thank you!");
// }

////////////////////////////////
// arithmatic operators:
// +    addition
// -    subtraction
// *    multiplication
// /    division
// %    modulus: whats left from division operation.
// ++   increment
// --   decrement
// **   exponentioal
//////////////////////////////////
// Assignment operators:
// +=   =+
// -=   =-
// *=   =*
// /=   =/
// %=   =%
// ++=  =++
// --=  =--
// **=  =**
///////////////////////////////////
// Logical operators:
// &&   ||  !
///////////////////////////////////

const result = document.querySelector(".resultsection .result");
const addition = document.getElementById("addition");

// const div1btn = document.getElementById("div1btn");
// const div2btn = document.getElementById("div2btn");

function SubmitData() {
  const input1 = document.getElementById("div1input");
  const input2 = document.getElementById("div2input");
  const input3 = document.getElementById("div3input");
  const input4 = document.getElementById("div4input");
  const input5 = document.getElementById("div5input");

  const value1 = input1.value;
  const value2 = input2.value;
  const value3 = input3.value;
  const value4 = input4.value;
  const value5 = input5.value;

  console.log("Div1 Number is:", value1);
  console.log("Div2 Number is:", value2);
  console.log("Div3 Number is:", value3);
  console.log("Div4 Number is:", value4);
  console.log("Div5 Number is:", value5);
}

document.getElementById("div1btn").onclick = SubmitData;
document.getElementById("div2btn").onclick = SubmitData;
document.getElementById("div3btn").onclick = SubmitData;
document.getElementById("div4btn").onclick = SubmitData;
document.getElementById("div5btn").onclick = SubmitData;
// console.log(`Number Entered in Div1: ${value}`);



/////////////////// TODO //////////////////////////
// excuate addtion operation on all input values
// output the result in the result div as a span

// excuate subtraction operation on all input values
// output the result in the result div as a span

// excuate multiplication operation on all input values
// output the result in the result div as a span

// excuate division operation on all input values
// output the result in the result div as a span

// excuate modulus operation on all input values
// output the result in the result div as a span

// excuate increment operation on all input values
// output the result in the result div as a span

// excuate decrement operation on all input values
// output the result in the result div as a span

// excuate eponential operation on all input values
// output the result in the result div as a span


