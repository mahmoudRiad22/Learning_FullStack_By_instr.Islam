// where can I write the js code?
//      1- in the <head> tag. not best pracite.
//      2- at the end of the <body> tag. [BEST OPTION]
//      3- link in an external file at the end of the body tag.

//------------------------------------------------------------------

// defining Variables:
// var     let     const

var numb1 = 10;
var num2 = 20;

/* how to show output:
    adding html code to the document
    using the consol.log
    using "alert"
*/

// document is a key word
//  write directly to the document body.
// document.write("<h1>mahmoud raid</h1> <br/>")

//  write inside a tag using ID
document
  .getElementById("div1")
  .insertAdjacentHTML("beforeend", "Hello mahmoud riad");

//  write inside a tag using class name:

// 1- Old ways:
// getElementsByClassName() is an array, you need to specify the index to access it.
document
  .getElementsByClassName("div3")[0]
  .insertAdjacentHTML("beforeend", "Div3 is saying HI back!");

// 2- Best Practice:
//  calling an element using its class name aka "Selector"
// uses tha same way we use selectors in CSS
document.querySelector(".div2").innerHTML = "Div2 is saying HI back!";

// Using a button to show some content
document.getElementById("btn1").onclick = function () {
  // document.getElementById("div4").innerHTML = "HIUIUIU"
  document
    .querySelector(".div4")
    .insertAdjacentHTML("beforeend", "<br/>HIIIIII>");
};

//////////////////////////////////////////////////////////////////////////
//  ======== Best Practice For Doing Scripts===================

/*
    1- what element are u using [doc element, created element].
    2- what is the action logic "funcs".
    3- what event triggers that action.
*/

// what elements are we using:
let btn1 = document.getElementById("btn1");
let div4 = document.querySelector(".div4");

// Action logic:
function add_html(msg) {
  div4.insertAdjacentHTML("beforeend", msg);
}

// Event trigger:
btn1.onclick = () => add_html("<br/>BUTTON CLICK: SUCESS!");

/////////////////////////////////////////////////////////////////////
// ======== Using "Consol.log" ===================
// Sending msg to the consol
console.log("Hello consol viewer, its me your code!");

/////////////////////////////////////////////////////////////////////
// ======== Using "Alert" ===================
// sending an alret

let btn2 = document.getElementById("btn2");

function create_alert() {
  alert("this is an alret 'Be careful!!'");
}

btn2.onclick = () => create_alert();

/////////////////////////////////////////////////////////////////////
// ======== Using "confirm" ===================

let div5 = document.querySelector(".div5");
let btn3 = document.getElementById("btn3");

function create_confirmation() {
  let response = confirm("Do you Agree? ");
  console.log(response);
}

btn3.onclick = () => create_confirmation();

/////////////////////////////////////////////////////////////////////
// ======== Using "prompt" ===================

let div6 = document.querySelector(".div6");
let btn4 = document.getElementById("btn4");

function Enter_data() {
  let data = prompt("Enter Your Data please:");
  console.log("Your Data is:", data);
}

btn4.onclick = () => Enter_data();

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
// ======== Data Types ===================
// 8 main types
/*
        number
        string
        boolean
        array

        object
        null
        undefined
        
        buffer // at the backend
    */
const var1 = 10;
const var2 = "mahmoud";
const var3 = true;
const var4 = ["mahmoud", "ahmed", 30, true, 10, false];
const var5 = null;
const var6 = undefined;
// const var7 = ArrayBuffer;

console.log(
  "\n Variables:\n",
  `   var1 : ${var1}\n`,
  `   var2 : ${var2}\n`,
  `   var2 : ${var3}\n`,
  `   var2 : ${var4}\n`,
  `   var2 : ${var5}\n`,
  `   var2 : ${var6}\n`
);
