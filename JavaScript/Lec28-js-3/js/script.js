/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/*  ======== Summary ========
    -- switch case break
    -- function para and arguments
    -- SIF or IIFE or encapsulation

    all events are triggered by assigning a function to invoke;
    -- Mouse Events:
            -onclick: captures the click-down-and-up of the mouse;
            -ondbclick: capture a double click back to back;
            -onmousemove: captures any movement of the mouse over the element space;
            -onmouseleave: captures the mouse leaving the element space;
            -onmouseenter: captures the mouse entering the elemnt space;
    -- Key Events:
            -onkeypress: not used, merged in onkeydown;
            -onkeydown: captures the press or press&hold events;
            -onclickup: captures the pressup of a key;
    -- window.onload: not a function but an event that is triggered
                !!!!! the tab will not be available untill the onload event is fully completed;
    -- for loop :)
    -- while loop;
    -- do while loop;
    
*/
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

let x = 20;
let y = 40;
let z = 60;

if ((!(x == 40) && !(y == 40 || !(z == 60))) || (z = 40 || !(x == 40))) {
  console.log("Yes");
} else {
  console.log("NOOOOOOOOOO");
}
/////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
// switch case:
// let degree= prompt("Enter your degree");

switch (x) {
  case "a":
    console.log("case a");
    break;
  case "b":
    console.log("case b");
    break;
  case "c":
    console.log("case c");
    break;
  default:
    console.log("default state");
}

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
// parameters:
function func1(num1, num2) {
  // these are parameters;
  const sum = num1 + num2;
  return sum;
}
const try1 = func1(5, 14); // these are arguments;
const call2 = func1(90, 586);
console.log(try1);
console.log(call2);

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////// the next 3 names are the same ///////////////
// SIF: self Invoked function;
// IIFE: imediately Invoked function experssion
// Encapsulation: using the invoke paranthiese to invoke the function.

// self invoked funciton "Invoked automatically at creation"
// be aware of the syntax of how to do it;
(function f1() {
  console.log("HIIIIIIIIII!!!!!!");
})();

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

//-------------- Events ----------------
/*
    mouse events:
        click   dbclick     mouseenter      mouseleave  mousemove
*/

const btn1 = document.getElementById("btn1");
const div1 = document.getElementById("div1");
let mouseover_num = 0;
let mousemove_num = 0;
function click() {
  div1.insertAdjacentHTML("afterbegin", "<h3> onclick: MahmoudRiad </h3><br>");
}
function dbclick() {
  div1.insertAdjacentHTML(
    "afterbegin",
    '<h3 style="color:red;"> ondblclick: MahmoudRiad </h3><br>'
  );
}
function mouseenter() {
  div1.insertAdjacentHTML(
    "afterbegin",
    '<h3 style="color:blue;"> onmouseenter: MahmoudRiad </h3><br>'
  );
}
function mouseleave() {
  div1.insertAdjacentHTML(
    "afterbegin",
    '<h3 style="color:blueviolet;"> onmouseleave: MahmoudRiad </h3><br>'
  );
}
function mousemove() {
  //   div1.insertAdjacentHTML("beforeend", "<h3> onmousemove: MahmoudRiad </h3>");
  console.log(mousemove_num++);
}
function mouseover() {
  //   div1.insertAdjacentHTML("beforeend", "<h3> onmouseover: MahmoudRiad </h3>");
  console.log(mouseover_num++);
}
function mouseup() {
  div1.insertAdjacentHTML(
    "afterbegin",
    '<h3 style="color:burlywood;"> onmouseup: MahmoudRiad </h3><br>'
  );
}
function mousedown() {
  div1.insertAdjacentHTML(
    "afterbegin",
    '<h3 style="color:chocolate;"> onmousedown: MahmoudRiad </h3><br>'
  );
}
function mouseout() {
  div1.insertAdjacentHTML(
    "afterbegin",
    '<h3 style="color:firebrick;"> onmouseout: MahmoudRiad </h3><br>'
  );
}

btn1.onclick = click; //captures both click and unclick event back to back;
btn1.ondblclick = dbclick; // caputers 2 clicks back to back

btn1.onmouseenter = mouseenter; // captures the mouse entering the div
btn1.onmouseleave = mouseleave; // caputres the mosue leaving the div

btn1.onmousemove = mousemove; // caputre a mouse movement over the element;
btn1.onmouseover = mouseover; // capture an enter event over the element;

// btn1.onclick = code1; === btn1.onmouseup = code7;

btn1.onmousedown = mousedown; // click&hold
btn1.onmouseup = mouseup; // unclick
btn1.onmouseout = mouseout; // same as mouseenter

// ---------- NOTES -------------
// mouseover === mouseenter
// mouseup === onclick
// click&hold = onmousedown
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

//------------ Key Events ---------------
// keypress     keydown     keyup

let keypress_counter = 0;
let keydown_counter = 0;
let keyup_counter = 0;

const div2 = document.getElementById("div2");
const input1 = document.getElementById("input1");

function keydown() {
  keydown_counter++;
  if (keydown_counter >= 5) {
    div2.innerHTML = "";
    keydown_counter = 0;
  }
  div2.insertAdjacentHTML(
    "afterbegin",
    `<h4 style="color: red;"> KeyDown Event: ${keydown_counter}</h4><br>`
  );
}

function keyup() {
  keyup_counter++;
  if (keyup_counter >= 5) {
    div2.innerHTML = "";
    keyup_counter = 0;
  }
  div2.insertAdjacentHTML(
    "afterbegin",
    `<h4 style="color:blue"> KeyUp Event: ${keyup_counter}</h4><br>`
  );
}

// input1.onkeypress = keypress;// not used anymore
input1.onkeydown = keydown; // captures a keydown event and a keypress event both
input1.onkeyup = keyup;

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
//  --------- Window Onload -----------------

window.onload = function () {
  //   confirm("WOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOah!!!");
};
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

// for (initialization; condition(s); iteration){}

for (let forx = 0; forx < 10; forx++) {
  console.log(`for counter = ${forx}`);
}
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
// initalization
// while(condition)
// {loop counter}

let whilex = 0;
while (whilex < 15) {
  console.log(`while counter = ${whilex}`);
  whilex++;
}
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
// initalization
// do{}
// while{}
let dowhilex = "init";
let dowhiley = 0;
do {
  if (dowhiley == 0) {
    console.log(`iside Do ${dowhilex}`);
    dowhiley++;
  } else {
    console.log(`inside Do ${dowhiley}`);
    dowhiley++;
  }
} while (dowhiley <= 6);
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
