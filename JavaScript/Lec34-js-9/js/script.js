// DOM: Document Object Model

/*
    -- innerText: reads the "visible text" from the element selected;
    -- innerHTML: reads the "whole" HTML content inside the element tags;
    -- TextContent: reads "all" text inside the element tags;


*/
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
//  accessing the text inside the div:
//  innerText   innerHTML   TextContent

console.log(document.getElementById("span2").textContent);
const div1 = document.querySelector(".div1");

console.log(div1.innerText, typeof div1.innerText);
console.log(div1.innerHTML, typeof div1.innerHTML);
console.log(div1);
console.log(div1.textContent, typeof div1.textContent);
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
// accessing the style: [using the dot notation]

div1.style.color = "red";
div1.style.backgroundColor = "lightblue";
div1.querySelector(".btn1").style.backgroundColor = "lightgreen";

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
// Capturing & Holding Elements:
//  -- getElementsByClassName(); return HTMLCollection
//  -- getElementById(); single element-1st found
//  -- getElementsByName(); return HTMLCollection
//  -- getElementsByTagName(); for normal HTML docs
//  -- getElementsByTagNameNS(); for specific namespaces like SVG, MathML; return live HTMLCollection.

const div2_elements = document.getElementsByClassName("item");
console.log(div2_elements, typeof div2_elements, div2_elements.length);

for (let i = 0; i < div2_elements.length; i++) {
  div2_elements[i].style.backgroundColor = "darkblue";
  div2_elements[i].style.color = "white";
  console.log(`div2_elements[${i}]\n`);
}

//  adding an attribute to element:
//  using the [ .setAttrribute("attr_name", "attr_value") ].

div2_elements[4].setAttribute("Name", "WTTTTTF");
console.log(div2_elements[4]);
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

const submit = document.querySelectorAll("input[type=submit]");
console.log("Element:", submit[0]);
console.log("Element:", submit[0].parentElement);
console.log("Element:", submit[0].parentNode);
submit[0].value = "OOOOKKK";

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
// const section1 = document.querySelector("sec1");

// Create New Elements In Memory:
// (section => [span => text, text], div5)
const section2 = document.createElement("section");

const span2 = document.createElement("span");
span2.textContent = "this is a very long ass span for no reason";
section2.appendChild(span2);

const span_text = document.createTextNode("this is a noter thing to add!!!");
span2.appendChild(span_text); // puts it at teh end of the parent tag.

const div5 = document.createElement("div");
div5.textContent = "this is a new div";
section2.appendChild(div5);

// NOW we append the section to the actual document:

//  at the end of sec1
document.querySelector(".sec1").appendChild(section2);

// at the start of sec1 "1st child":
document.querySelector(".sec1").insertBefore(section2, document.querySelector(".sec1").firstChild);

// inside sec1 as 1st child:
document.querySelector(".sec1").insertAdjacentElement("afterbegin", section2);

// inside sec1 before div2:
document.querySelector(".sec1").insertBefore(section2,
    document.querySelector(".sec1 .div2"));

// inside div3 after form:
document.querySelector(".sec1 .form-div").appendChild(section2);

// inside the form:
document.querySelector(".sec1 .div3 form br").insertAdjacentElement("afterend", section2);

//  inside the form between submit and input:
document.querySelector(".sec1 .div3 form ").insertBefore(section2,
    document.querySelector(".sec1 .div3 form #form-submit"));

// inside div4 after 2nd paragraph:
document.querySelector(".sec1 .div4 p:nth-child(2)").appendChild(section2);

// random 2 choices:
document.querySelector(".sec1").insertBefore(section2, document.querySelector(".sec1 .div4"));
section2.insertBefore(div5,span2);
section2.className = "section2";
console.log(section2);

// section1.insertAdjacentElement("afterend", "section2");
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// now lets start playing a bit

// lets create a new section3:
    // 1- will contain 4 input: text, password, email, submit-btn

//sec3:
const sec3 = document.createElement("form");

//input1: text
const sec3_text_inpt = document.createElement("input");
sec3_text_inpt.setAttribute("type", "text");
sec3_text_inpt.setAttribute("class", "sec3_text_inpt");
console.log(sec3_text_inpt);

//input2: password
const sec3_password_inpt = document.createElement("input");
sec3_password_inpt.type = "password";
sec3_password_inpt.className = "sec3_password_inpt";
console.log(sec3_password_inpt);

// input3: email
const sec3_email_inpt = document.createElement("input");
sec3_email_inpt.setAttribute("type", "email");
sec3_email_inpt.setAttribute("class", "sec3_email_inpt");
console.log(sec3_email_inpt);

// input4: submit
const sec3_submit_btn = document.createElement("input");
sec3_submit_btn.type = "submit";
sec3_submit_btn.className = "sec3_submit_btn";
console.log(sec3_submit_btn);
///////////////////////////////////
///////////////////////////////////
    // 2- append all the elements to sec3

//append in order [text, email, password, submit]

sec3.appendChild(sec3_text_inpt);
sec3.appendChild(sec3_email_inpt);
sec3.appendChild(sec3_password_inpt);
sec3.appendChild(sec3_submit_btn);
console.log(sec3);
///////////////////////////////////
///////////////////////////////////

    // 3- append the whole section into the doc inside sec1 before div4:

document.querySelector(".sec1").insertBefore(sec3, document.querySelector(".sec1 .div4"));
///////////////////////////////////
///////////////////////////////////

    // 4- lets add some styling and change the text of the button to "AGREED":
sec3.style.width = "auto";
sec3.style.height = "150px";
sec3.style.paddingTop = "20px";
sec3.style.backgroundColor = "darkgray";

sec3_text_inpt.style.display = "block";
sec3_email_inpt.style.display  = "block";
sec3_password_inpt.style.display  = "block";
sec3_submit_btn.style.display  = "block";

sec3_text_inpt.placeholder = "Enter Your Name";
sec3_password_inpt.placeholder = "Enter Your password";
sec3_email_inpt.placeholder = "Enter Your email";

sec3.style.backgroundColor = "darkblue";

sec3_text_inpt.style.backgroundColor = "#eab08a";
sec3_email_inpt.style.backgroundColor = "#eab08a";
sec3_password_inpt.style.backgroundColor = "#eab08a";
sec3_submit_btn.style.backgroundColor = "#37ce41";


// autocomplete password:
sec3_password_inpt.setAttribute("autocomplete", "on");
// lets crate a breakline and append it to each inpput
const br = document.createElement("br");

sec3_text_inpt.appendChild(br);
sec3_password_inpt.appendChild(br);
sec3_email_inpt.appendChild(br);
