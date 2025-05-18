/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
// Using addEventListener();
// clientX, clientY: includes the border as part of element [no negative values];
// offsetX, offsetY: exculde the border as a part of the element [negative values shown];

const div1_btn1 = document.querySelector(".div1 #btn1");

function code1(event) {
    console.log(event.target);
    console.log(event.type);

    if (event.clientX) {
        console.log("OOOOH, HII!!");
    }

    if (event.clientY) {
        console.log("OOOOH, SHIT!!");
    }

    if (event.offsetX < 0) {
        console.log(event.offsetX);
        console.log("Nigative WTF!");
    } else {
        console.log("Go! GO! GO!...");
    }
}

const event = div1_btn1.addEventListener("click", code1);

document.querySelector("p").addEventListener("click", () => {
    const userSelection = window.getSelection();

    console.log("Selection is:", userSelection.toString()); // shows what exactly is selected;
    console.log("anchorNode:", userSelection.anchorNode); // shows the whole text in that node
});

/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
///////////////////////////// DOM Summary ///////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////

// recape of our DOM: CRUD

/* --  Create an Element:
            -- document.createElement("element_tag_name");
*/

/*  --  Holding a document element to do a "RUD":
            --  .querySelector()     querySelectorAll();
            --  .getElementById();// fastest for single elements;
            --  .getElementsByName();
            --  .getElementsByClassName();
            --  .getElementsByTagName();
            --  .getElementsByTagNameNS();
            --  window.getSelection(): highlited Text By Usser;
                    --  selection_var.anchorNode;// start point
                    --  selection_var.focusNode;// end point
                    --  selection_var.toSting();// text selected
*/

/*  --  Read an ELement:
        //  reading HTML/textContent:
            --  .innerHTML: stringfy whats inside the tags of the Element;"Vulnrability issues";
            --  .outerHTML: stringfy the whole element including it's tags;

            --  .textContent: collect and stringfy all TEXT inside the elemnt's tags;
            --  innerText:  show only the readable text in the whole Element; better than innerHTML;

        //  reading specific Child Nodes:
            --  .childNodes;
            --  .children;

            --  .firstChild;
            --  .lastChild;

            --  firstElementChild;
            --  lastElementChild;

        // reading Form input values:
            --  .value; <input><select><textarea>
            --  .valueAsNumber;<input tyoe="number">
            --  .checked;<checkbox><radio>
            --  .selectedIndex;<select>

        //  reading attributes:
            --  .getAttribute("attr");
            --  .dataset;
*/

/*  -- Update an Element:
        //  update  content/structure:
            --  .innerHTML  =   HTMLstring
            --  .outerHTML  =   HTMLstring
            --  .textContent    =   string
            --  .innerText  =    string
            --  .insertAdjacentHTML(position, HTMLstring);
            --  old.replaceWith(Node/s);

        // Update attributes or properties:
            --  .setAttribute(name, value);
            --  .removeAttribute(Name);
            --  .toggleAttribute(name, force?)
            --  Direct Properity Acess: element.propety = value;
        
        // Update Classes:
            --  .classList.add("string")
            --  .calssList.remove("string")
            --  .classList.toggle(class, force?)
            --  .classList.replace(old,new)

        //Update style:
            --  .style.property = "value"
            --  .style.cssText = "css line"
        
        //Update Child Nodes:
            --  parent.append(child_node)   //  insert node at the end, accepts multiple nodes
            --  parent.prepend(child_noed)  //  insert nodes at the start
            --  parent.replaceChild(new, old)   // replace old node with new one
                -- old.replaceWith(new)
            --  parent.removeChild(node)    //  remove a child  node
                -- child.remove()
        
*/

/*  -- Delete an Element:
            --  element.remove()    //removes teh element
            --  element.innerHTML = ''  //clear all children
            --  element.textContent = ''    //text removal and keep the nodes

*/

/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////

//  BOM Browser Object Model:

// #region Open/Close a new window:
const fbBtn = document.getElementById("fbBtn");
const ytBtn = document.getElementById("ytBtn");

const closefb  =document.getElementById("closefb");
const closeyt  =document.getElementById("closeyt");

let fbWindow, ytWindow;
////////////////////

function open_fb(){
    fbWindow = window.open("#", "Facebook", "width=350, height=500");
    console.log(fbWindow);
}

function open_yt(){
    ytWindow = window.open("#", "Youtube", "width=200   height=200");
    console.log(ytWindow);
}
////////////////////
fbBtn.addEventListener("click", open_fb);
ytBtn.addEventListener("click", open_yt);
// ytBtn.onclick = open_yt;


function close_fb(){
    console.log(fbWindow);
    fbWindow.close();
    console.log("fbWindow is close");
}

function close_yt(){
    console.log("HERE",ytWindow);
    ytWindow.close();
}

closefb.onclick = close_fb;
closeyt.onclick = close_yt;
// #endregion
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*  screen:
        --  screeen.width; return the full screen width value;
        --  screen.availableWidth; return the "vw"
        --  screen.height; return the full height of screen;
        --  screen.availableHeight; return the "vh"
*/


/*  history:
        --  history.forward(); load the next page in history
        --  history.back(); load the previous page in history
*/


/*  location:
        --  loaction.assign("url"); change page ur to given one;
        --  location.reload(); reload the page
        --  location.href(); return the url of current page
*/

/*  Navigator:
        -- navigator.language; return the language the browser is using
        --  navigator.online; return boolean value for the browser online or not
*/

/*  timer:
        --  setTimeout( func, time(ms)); // one time excution
        --  setInterval(func, time(ms)); // repeat event on timer
*/

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*  Todo:
        --  create 2 divs next to each other
            on left div contain buttons to open/ close windows
            on right div leave a msg on to show the window is open correctly
            when open a windowo create an icon on the right side.
            when close the window delete that icon

        --  create 4 divs on same row with space in between
            for each div when clicked on, show the values of:
                total width of the div
                the total height of the div
                the width and height where the click happened
                use client*, offset*, screen

        --  create a div with multiple urls for different websites atleast 7;
            open and close them all 7 in random

            create a forward button and a back button to move between history
        
        --  create a div where u take an input of url.
            use that input to change location of the page to the new url given
            this happen when the button "change location" is clicked

        --  create a div with buttons that uses navigation and timer
            to create a prompt that appear once after 5s of click event
            create a confirm that appear once after 5 sec of click event
            create an alert that appear every 3s of the click event
            create a button that closes the timer for each one of them speratly
*/
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
