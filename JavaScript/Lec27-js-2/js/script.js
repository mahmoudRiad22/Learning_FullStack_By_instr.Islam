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

// const result = document.querySelector(".resultsection .result");

///////////////////////////////////////////////////////////
///////////////////// Functions //////////////////////////

function SubmitData() {
  console.log("inside the submitdata function");
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

  // console.log(value1,value2, value3,value4,value5);

  document.querySelector(".resultsection").insertAdjacentHTML(
    "beforeend",
    `<span>You Entered these numbers:<br>
  ${value1},
  ${value2},
  ${value3},
  ${value4},
  ${value5},
  <span/> <br>`
  );
}
////////////////////////////////////
function addition() {
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

  const total =
    Number(value1) +
    Number(value2) +
    Number(value3) +
    Number(value4) +
    Number(value5);

  // console.log(`Total: ${total}`);

  document
    .querySelector(".resultsection")
    .insertAdjacentHTML(
      "beforeend",
      `<span>Addition Total = ${total}<span/> <br>`
    );
}
////////////////////////////////////

function subtraction() {
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

  const total =
    Number(value1) -
    Number(value2) -
    Number(value3) -
    Number(value4) -
    Number(value5);

  document
    .querySelector(".resultsection")
    .insertAdjacentHTML(
      "beforeend",
      `<span>Subtraction Total: ${total}<span/> <br>`
    );
}
////////////////////////////////////

function division() {
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

  const total =
    Number(value1) /
    Number(value2) /
    Number(value3) /
    Number(value4) /
    Number(value5);

  document
    .querySelector(".resultsection")
    .insertAdjacentHTML(
      "beforeend",
      `<span>Division Total: ${total}<span/> <br>`
    );
}
////////////////////////////////////

function multiplication() {
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

  const total =
    Number(value1) *
    Number(value2) *
    Number(value3) *
    Number(value4) *
    Number(value5);

  document
    .querySelector(".resultsection")
    .insertAdjacentHTML(
      "beforeend",
      `<span>Multiplication Total: ${total}<span/> <br>`
    );
}
////////////////////////////////////

function modulus() {
  const input1 = document.getElementById("div1input");
  const input2 = document.getElementById("div2input");
  const input3 = document.getElementById("div3input");
  const input4 = document.getElementById("div4input");
  const input5 = document.getElementById("div5input");
  const modulus = document.getElementById("modulusinput");

  const value1 = input1.value;
  const value2 = input2.value;
  const value3 = input3.value;
  const value4 = input4.value;
  const value5 = input5.value;
  const modulusvalue = modulus.value;

  document.querySelector(".resultsection").insertAdjacentHTML(
    "beforeend",
    `<span>Modulus All By ${modulusvalue}:<br>
      ${Number(value1) % Number(modulusvalue)},
      ${Number(value2) % Number(modulusvalue)},
      ${Number(value3) % Number(modulusvalue)},
      ${Number(value4) % Number(modulusvalue)},
      ${Number(value5) % Number(modulusvalue)}
    <span/> <br>`
  );
}
////////////////////////////////////

function increment() {
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

  const total =
    Number(value1) *
    Number(value2) *
    Number(value3) *
    Number(value4) *
    Number(value5);

  document.querySelector(".resultsection").insertAdjacentHTML(
    "beforeend",
    `<span>Increment All: <br>
    ${Number(value1) + 1}, ${Number(value2) + 1}, ${Number(value3) + 1}, 
    ${Number(value4) + 1}, ${Number(value5) + 1}
    <span/> <br>`
  );
}
////////////////////////////////////

function decrement() {
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

  const total =
    Number(value1) *
    Number(value2) *
    Number(value3) *
    Number(value4) *
    Number(value5);

  document.querySelector(".resultsection").insertAdjacentHTML(
    "beforeend",
    `<span>Decrement All: <br>
    ${Number(value1) - 1}, ${Number(value2) - 1}, ${Number(value3) - 1}, 
    ${Number(value4) - 1}, ${Number(value5) - 1}
    <span/> <br>`
  );
}
////////////////////////////////////

function exponentioal() {
  const input1 = document.getElementById("div1input");
  const input2 = document.getElementById("div2input");
  const input3 = document.getElementById("div3input");
  const input4 = document.getElementById("div4input");
  const input5 = document.getElementById("div5input");
  const expo = document.getElementById("expoinput");

  const value1 = input1.value;
  const value2 = input2.value;
  const value3 = input3.value;
  const value4 = input4.value;
  const value5 = input5.value;
  const expoval = expo.value;

  document.querySelector(".resultsection").insertAdjacentHTML(
    "beforeend",
    `<span>exponentioal All: <br>
    ${Number(value1) ** Number(expoval)}, ${
      Number(value2) ** Number(expoval)
    }, ${Number(value3) ** Number(expoval)}, 
    ${Number(value4) ** Number(expoval)}, ${Number(value5) ** Number(expoval)}
    <span/> <br>`
  );
}
////////////////////////////////////

///////////////////////////////////////////////////////
///////////////////// EVENTS //////////////////////////
document.getElementById("submitbtn").onclick = SubmitData;
document.getElementById("btn1").onclick = addition;
document.getElementById("btn2").onclick = subtraction;
document.getElementById("btn3").onclick = division;
document.getElementById("btn4").onclick = multiplication;
document.getElementById("btn5").onclick = modulus;
document.getElementById("btn6").onclick = increment;
document.getElementById("btn7").onclick = decrement;
document.getElementById("btn8").onclick = exponentioal;

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
