// Hoisting[let, scope]: NOT allowed;

var y = 10;

function f2() {
  if (false) {
    var y = 30;
  }
  console.log(y);
}

f2();
/////////////////////////////////////////////
var x = 10;

function f1() {
  if (false) {
    var x = 30;
  }
  console.log(x);
}

f1();

////////////////////////////////////////////////////////////////////////
//////////// ARROW FUNCTION "Expression Function" //////////////////////

// function_name = (parameters)=>{body}

console.log("///////////////////////////////////////////////////////");

let result = () => {console.log("WTF1");console.log("WTF2");}
console.log(result);
result();
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
/////////////////// MATH //////////////////
/* 
    -- round(number); normal round
    -- pow(number, power); number ^ power
    -- sqrt(number); square-root;
    -- ceil(number); round for max number;
    -- floor(number); round for min number;
    -- random(); generate random numbers between 0 and 1;
    -- random()*max: generate random buners between 0 and max;
 */
let num = Math.round(3.3);

let num2 = Math.floor(Math.random()*300);
console.log(num2);