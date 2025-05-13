// JSON: JavaScript Object Notation

// an object in js can be : [] {}

// JSON is unique array of objects
/////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////// Creating JSON style objects and strignfy it ////////////
let arrayOfObjects = [
  {
    key1: "value1",
    key2: "value2",
    key3: "value3",
    key4: "value4",
    key5: "value5",
    key6: "value6",
  },
  {
    key1: "value1",
    key2: "value2",
    key3: "value3",
    key4: "value4",
    key5: "value5",
    key6: "value6",
  },
  {
    key1: "value1",
    key2: "value2",
    key3: "value3",
    key4: "value4",
    key5: "value5",
    key6: "value6",
  },
];

// console.log(arrayOfObjects);
console.log("array of objects:", arrayOfObjects);

let json1 = [
  {
    key1: "value1",
    key2: "value2",
    key3: "value3",
    key4: "value4",
    key5: "value5",
    key6: "value6",
  },
  {
    key1: "value1",
    key2: "value2",
    key3: "value3",
    key4: "value4",
    key5: "value5",
    key6: "value6",
  },
  {
    key1: "value1",
    key2: "value2",
    key3: "value3",
    key4: "value4",
    key5: "value5",
    key6: "value6",
  },
  {
    key1: "value1",
    key2: "value2",
    key3: "value3",
    key4: "value4",
    key5: "value5",
    key6: "value6",
  },
];

// console.log("JSON:", json1);
console.log(
  "type of json1:" + typeof json1,
  "\ntype of array of objects:" + typeof arrayOfObjects
);

console.log("type of JSON:" + typeof JSON.stringify(json1));
// console.log(JSON.stringify(json1));

document.querySelector(".div1").insertAdjacentText("beforeend", arrayOfObjects);
document.querySelector(".div1").insertAdjacentHTML("beforeend", "<br><br><br>");
document
  .querySelector(".div1")
  .insertAdjacentText("beforeend", JSON.stringify(json1));

/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
///////////////////// Acessing JSON data and modify it //////////////////
// 1- make sure the JSON file is in the Object form;
// 2- then you can access it normally:
//      -- first acess the array "index notation";
//      -- then acess the object key "dot notaion";

json1 = JSON.parse(JSON.stringify(json1));

json1[0]["key4"] = "MAHMOUD";
json1[2].key6 = "WTF";
console.log("JSON:", json1);
// console.log(json1[0]["key4"]);
document.querySelector(".div1").insertAdjacentHTML("beforeend", "<br><br><br>");
document
  .querySelector(".div1")
  .insertAdjacentText("beforeend", JSON.stringify(json1));

/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
// Commented cuz of the "prompt"

// let student_num = prompt("Enter Students Number");
// let students_data = [];

// for(let x =0; x<student_num; x++){
//     students_data[x] = prompt(`Enter STUDENT #${x + 1} name:`);
// }

// document.querySelector(".div1").insertAdjacentHTML("beforeend", "<br><br><br>");
// document.querySelector(".div1").insertAdjacentHTML("beforeend", JSON.stringify(students_data));

/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/* 
    Scope [let, const]: if not block-scopped they are global-scope but not given global properties;
    re-assing [let, const]: let is allowed, const is forbidden;
    re-decleration[let, const]: Not Allowed;
    Hoisting[let, const]: next lecture;
 */

var x1 = 30;
let x2 = 40;
const x3 = 50;

console.log(window.x1);
console.log(window.x2);
console.log(window.x3);

function f1() {
  var xf = 35;
}

console.log(window);
