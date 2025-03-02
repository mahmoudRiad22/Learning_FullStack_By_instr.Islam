# Software Engineering Future Academy

## SEF_FullStack_By_instr.Islam
this repo will contain all the projects and task during my journey learning frontend and backend from SEF academy under the instractor Islam as the instructor.

also this is a redo type situation as I stopped the course before and today will contiue from scratch.. lets have some fun :)

        <!-- ============================================================================== -->
        <!-- ============================================================================== -->

        <!-- Lec 1 summary:
                1- the title tag to change the title of the page.
                2- the headline tags to put headlines, only use the h1 tag one for the SEO item.
                3- the paragraph tags "p" "span".
                4- the button tag "button".
                5- HTML is to create things CSS is to stylish it.
        -->
        <!-- ============================================================================== -->
        <!-- =========================== LEC 1 END ======================================== -->
        <!-- ============================================================================== -->


    <!-- ///////////////////////////////////////////////////////////////////////////////////////// -->
    <!-- ///////////////////////////////// Summary of lec 2 ///////////////////////////////////////-->
    <!-- ///////////////////////////////////////////////////////////////////////////////////////// -->

        <!-- "img" tag to add a pic to your page.[default draggable = "true"] -->

        <!-- "a" tag to acnhor your page and move to extrnal links.[default target = _self] -->

        <!-- "iframe" tag used to encode extrnal links inside the page and activate it to be used i.e: YT video -->

        <!-- "br" and "hr" tags to organize between tags -->

        <!-- "ul" tag used for Unordered list. [use the "li" tag multiplier to add the list items]-->

        <!-- "ol" tag used for the Ordered list. [use the "type" keyword to specify the type of order you want] -->

        <!-- "dl" tag used for describtive lists
            consists of "dt" the destribtive title or term
                        "dd" the describtive details -->

        <!-- "select" tag using the "options" tags and naming the first option as "hidden" -->
        
        <!-- "form" tag used to take info form the user --> 
                <!-- "label" tag to name each field of the form -->
                <!-- "input" tag used to take the info from the user -->
                        <!-- there is "33" type of input so far -->
                            <!-- input types are [text, password, email, radio with name, checkbox] -->

        <!-- "textarea" tag used to take a paragraph input from the user -->


    <!-- ///////////////////////////////////////////////////////////////////////////////////////// -->
    <!-- ///////////////////////////////////////////////////////////////////////////////////////// -->
    <!-- ///////////////////////////////////////////////////////////////////////////////////////// -->


    <!-- //////////////////////////////////////////////////////////////////////////////////////////// -->
    <!-- //////////////////////////// LEC 3 Summary ///////////////////////////////////////////////// -->
    <!-- //////////////////////////////////////////////////////////////////////////////////////////// -->


        <!-- tags we learned -->
            <!-- "meta" tag using utf-8 for arabic language -->
            <!-- "meta" tag with keyowrds and content that will appear during search -->
            <!-- "meta" tag with description and content to describe the keywords -->

        <!-- //////////////////////////////////////////////////////////////////////////////////////////// -->
        <!-- //////////////////////////////////////////////////////////////////////////////////////////// -->

        <!-- "link" tag used to link the CSS with HTML properly -->

        <!-- //////////////////////////////////////////////////////////////////////////////////////////// -->
        <!-- //////////////////////////////////////////////////////////////////////////////////////////// -->

        <!--  "11" new tags in HTML -->
            <!-- "b" and "strong" to make the text BOLD ["strong has higher priority"] -->
            <!-- "i" and "em" tags used to make the text italic ["em" has higher priority] -->
            <!-- "u" and "ins" used for underlined text -->
            <!-- "del" used for the cross-over lined text -->
            <!-- "small" used to make the text small sized -->
            <!-- "mark" used to highlight the text with yellow color -->
            <!-- "sub" and "sup" used to create sub-scribted and super-scribted text-->

        <!-- //////////////////////////////////////////////////////////////////////////////////////////// -->
        <!-- //////////////////////////////////////////////////////////////////////////////////////////// -->
        
        <!-- CSS: Cascaded Style Sheet -->
            <!-- call the element you want to syle it by its name -->
            <!-- you can create its own name using the "calss" attribute -->
            <!-- u can call an element inside another element just by sperate it with space -->
            <!--    Ex:    div2 h2 {}       -->

            <!-- most common features we learned: 

                    width
                    height

                    background-color

                    font-size
                    color

                    border [solid- dashed- dotted]
                    border-radius [can make it a cicle if it bigger than half the width = height]

            -->

        <!-- //////////////////////////////////////////////////////////////////////////////////////////// -->
        <!-- //////////////////////////////////////////////////////////////////////////////////////////// -->

            <!-- there are 6 tags that has no end-tag word -->
                    <!-- 1- "img" tag -->
                    <!-- 2- "br" tag -->
                    <!-- 3- "hr" tag -->
                    <!-- 4- "input" tag -->
                    <!-- 5- "meta" tag -->
                    <!-- 6- "link" tag -->

    <!-- //////////////////////////////////////////////////////////////////////////////////////////// -->
    <!-- //////////////////////////////////////////////////////////////////////////////////////////// -->
    <!-- //////////////////////////////////////////////////////////////////////////////////////////// -->

    <!-- ////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
    <!-- ////////////////////////////////// Summary of lec 4 ////////////////////////////////////////////////////// -->
    <!-- ////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
    
        <!-- 3 ways to style an element -->
                    <!-- 1- in-line style inside the tag start-->
                    <!-- 2- internal style inside the header using keyword  "style"-->
                    <!-- 3- external style inside teh style.css file and link it to ur html file -->

        <!-- u can give a specific name to an element and use it for styling later -->
                    <!-- 1- using the "class".[gets called by the dot call] this is the way-->
                    <!-- 2- using the "id".[gets called by the hashtag call] -->

                <!-- /////////////////////////////////////////////////// -->
                <!-- /////////////////////////////////////////////////// -->

        <!-- background iamge attributes: -->
                        <!-- background img: url(/src destination) -->

                        <!-- background size: [cover] streaches  the iamge fit the div size regardless -->
                        
                        <!-- background position: [top, bottom. right, left, center] or a mix of them -->
                        
                        <!-- background repeat: used to stop the img from repeating -->
                        
                        <!-- background attachement: 
                                if fixed: makes the iamge just fixed with respect to its size and position 
                                if scroll: the pic is scrollable with respect to its size and postion -->

                <!-- /////////////////////////////////////////////////// -->
                <!-- /////////////////////////////////////////////////// -->

        <!-- fonts has 4 main attributes [MUST be in that order] -->
                        <!-- style, weight, size, family -->
                            <!-- style: [italic == oblique or normal] -->

                            <!-- weight: default = normal == 100-400, bold == 700-900 -->

                            <!-- size: in pixel -->

                            <!-- family: to add a new font:-->

                                    <!-- 1- download the font .zip file -->                                    
                                    <!-- 2- extract it then install using the font view app -->
                                    <!-- 3- import it into the css file using @font-face -->
                                                <!-- @font-face {
                                                    font-family: "playwrite";
                                                    src: url(../fonts/Playwrite_IT_Moderna/PlaywriteITModerna-VariableFont_wght.ttf);
                                                } -->

                                    <!-- 4- use the name-holder u give it as your font family -->
                                                <!-- font-family: "playwrite"; -->
                                                

    <!-- ////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
    <!-- ////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
    <!-- ////////////////////////////////////////////////////////////////////////////////////////////////////////// -->

    <!-- ////////////////////////////////////////////////////////////////////////////// -->
    <!-- //////////////////////// Summary of LEC 5 //////////////////////////////////// -->
    <!-- ////////////////////////////////////////////////////////////////////////////// -->
            <!-- Tables: -->
                <!-- a table has:
                        1- "caption": the table title.
                        2- "thead": the first row of the table.
                        3- "tbody": the in-between rows of the table.
                        4- "tfoot": the last row of the table.
                        5- each row consist of "tr" and "td". 
                -->            
            <!-- ----------------------------------------------------------------------- -->
            <!-- ----------------------------------------------------------------------- -->            
            <!-- Block vs In-line:
                    -"block": it takes the full row as its size.
                    -"In-line": it only takes its content size.-->

            <!-- What is the difference between "in-line" element and "block" element?? -->
                    <!-- "block" elements block the whole row for tiself [ex: "p" tag]-->
                    <!-- "in-line" elements just takes its own size nothing more [ex: "span" tag] -->
                    <!-- easy way to check is give it a background color -->

                    <!-- block elements Examples
                            div     p   li   h2-->

                    <!-- in-line elements examples 
                            button  span    img -->

            <!-- CSS : -->
                    <!-- ":hover" [what will happen when crusor hover over the selected div] -->
                    <!-- "float: left" [make the divs next to each other rather than over each other as default] -->

            <!--  now lets learn how to interchange between blocks and inlines -->
                    <!-- "display: [inline, block]" for TEXT type elements like  -->
                    <!-- "float: [right. left]" used for NONE-TEXT element to float it to a higher/upper layer.-->

            <!-- whats the problem with using the "float"?? -->
                        <!-- the parent div is seperated from the the children
                             so any change in the parent div will not appear on the higher layer-->
                    
                        <!-- to solve the problem:
                                1- apply a "overflow: auto" on the parent div to merge them together
                                2- create an empty div and use the "clear: both" attribute to merge them togehter -->
            <!-- ----------------------------------------------------------------------- -->
            <!-- ----------------------------------------------------------------------- -->
                            <!-- margin for spacing -->
            
            <!-- 1st step is to seperate between "text" type or "none-text" type -->
            <!-- "margine": used for the "NONE-TEXT" elements -->
            
                    <!-- margine-left, margine-top, margine-right, margine-bottom
                        margin = from all sides
                        margin: auto [to center single element inside its block with respect to its parent]
                        margin: top-bottom  left-right      i.e: margin: 100px 300px;
                        margin:  top right bottom left (تبع عقارب الساعة)       i.e: margin: 10px 20px 30px 40px
                    -->

            <!-- "text-align: center" used for the "TEXT" type elements -->
            <!-- ----------------------------------------------------------------------- -->
            <!-- ----------------------------------------------------------------------- -->
                                    <!-- Entities -->
                                    
            <!-- 1- "&nbsp": none breaking space -->
            <!-- 2- &gt; and &lt;-->
            <!-- 3- copyright signature [ &copy;] -->
            <!-- 4- trademark [&reg;] -->
        <!-- for extra Entities use w3school website->HTML->Entities -->
    <!-- ////////////////////////////////////////////////////////////////////////////// -->
    <!-- ////////////////////////////////////////////////////////////////////////////// -->
    <!-- ////////////////////////////////////////////////////////////////////////////// -->


    <!-- /////////////////////////////////////////////////////////////////////////// -->
    <!-- //////////////////////////// Summary of Lec 6 ///////////////////////////// -->
    <!-- /////////////////////////////////////////////////////////////////////////// -->
            <!-- the naming of CSS selectors:
                        .selector{
                            properity: value; /* the whole line is called declaration */
                        } -->
                
                <!-- now we Continue learning about spacing in CSS -->
                        <!-- 1- "outline": to create a border over the normal border. -->
                        <!-- 2- "outline-offset": the distance between the 2 borders. -->
                        <!-- 3- "padding": is the space between the border and the content. -->
                        <!-- 4- "margin": is the space between the parent border and the element border:
                                    [margin [border [padding [TEXT/ELEMENT] padding] border] margin] 
                                -->
                        <!-- 5- THE "PADDING" adds an EXTRA space inside the element.. it can cause an oversize!! be carefull with it  -->

                        <!-- //////////////////////////////////////////////// -->
                        <!-- 6- text-decoration:
                                text-decoration: none
                                text-decoration: underline
                                text-decoration: overline
                                text-decoration: line-through-->

                        <!-- 7- text-transform:
                                1- text-transform: capitalize
                                2- text-transform: uppercase
                                3- text-transform: lowercase
                                4- text-transform: none-->  
                                
                        <!-- //////////////////////////////////////////////// -->
                                
                        <!-- How To Create The Header Of a Website?? -->
                            <!-- 
                                1- import the logo image and adjust its size to fit the header height.
                                2- create a list of all the other links using "ul" and "li".
                                3- adjust the "li" properities to make it look like words remove the underline/decoration.
                                4- make the list an inline-block.. so that the words are side by side 
                                5- make sure the logo and the list are float so they can be in same line.
                                6- make each list item a link using the "a" tag.
                                7- remove the link decoration and change its color as needed.
                                8- add margins and hover effects if needed. thanks!
                            -->
                        
    <!-- /////////////////////////////////////////////////////////////////////////// -->
    <!-- /////////////////////////////////////////////////////////////////////////// -->
    <!-- /////////////////////////////////////////////////////////////////////////// -->

    <!-- ////////////////////////////////////////////////////////////////////////////////////////// -->
    <!-- /////////////////////// Summary of Lec 7 ///////////////////////////////////////////////// -->
    <!-- ////////////////////////////////////////////////////////////////////////////////////////// -->

        <!-- How to make elements go on top of each other? -->
                    <!-- just use the "position: absolute" properity -->
                    <!-- A MUST: if any element is using "position: absolute" the parent MUST be "position: relative". -->
                        <!-- why?: to make the childern always in-bound of the parent. will apear more when take "after and before". -->
                    
                <!-- "z-index": to re-order the items that are on top of each other. [the most top has the most value] -->
                
                <!-- re-cap of the "position" properity:
                        - position: default = static
                        - position: absolute
                        - position: relative
                        - position: fixed 
                        
                    -NOTE 1: "absolute" and "fixed" both make the element goes to the outter layer.. so we must use the 
                    z-index in accordance when needed so that elements form the main layer and the outer layer done overlap.-->

                    <!-- -NOTE 2: when we use position and go to the upper layer, we open the [top, bottom, left, right] properities -->        
            
                <!-- "opacity": used to make the elements "see-through" takes the range of [0-1] -->
        <!-- //////////////////////////////////////////////////////////////////// -->


                <!-- Appear vs Disappear effects: -->
                    <!-- in all front study there is 11 ways to do it. -->
                    <!-- in CSS: there is 3 ways only:
                            1- "opacity : 0 vs 1;" : element is not shown but it still exists.
                            2- "visability: hidden vs visible" : the element is removed but its place is reserved.
                            3- "display: none vs block" : the element is compeletly removed == delete.-->


                <!-- NOTE:  always use <br> between divs to seperate it correctly.. good practice untill proven wrong later-->
    <!-- ////////////////////////////////////////////////////////////////////////////////////////// -->
    <!-- ////////////////////////////////////////////////////////////////////////////////////////// -->
    <!-- ////////////////////////////////////////////////////////////////////////////////////////// -->

    
    <!-- ////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
    <!-- /////////////////////////// Summary Lec 8 //////////////////////////////////////////////////////////////// -->
    <!-- ////////////////////////////////////////////////////////////////////////////////////////////////////////// -->

        <!-- Specificity equation: -->
                    <!-- styleinline        id      [class      :pseudo-class    attr-selector]      element -->
            
            <!--
            "id":           0               1                           0                               0       =100
            "class":        0               0                           1                               0       =10
            "pseudo class": 0               0                           1                               0       =10
            "styleinline":  1               0                           0                               0       =1000
            "element":      0               0                           0                               1       =1

            -->
        
        <!-- styleinline, class, id: we know them from before alread -->
        
        <!-- styleline: "1000" -->

        <!-- id: "100" -->

        <!-- class: "10" -->

        <!-- pseudo classes: "10" -->
            <!-- ":hover" : gives effect when crusor hover over the element. -->
            <!-- ":active" : gives effect when we actively click and hold the clickable-elements. -->
            <!-- ":focus" : gives effect once the element is activated at least once fo clickable-elements. -->

        <!-- att selector: "10" -->
            <!-- [type="text"] -->

        <!-- pseudo elements/ elements: "1" -->
            <!-- "after" and "before" : will be studied later -->
        

        <!-- CSS:
                transform: translate(); ["transform" :the element is talking to itself]
                position: relative [for the parent or the bigger parent.]
                position: absolute [for the childern to free them into another layer.] 
                height: using "vh" = "view height"[100% gives the exact height of the screen.]
                        similiar to width: 100% [covers the whole width of the screen regardless.]-->
        
    <!-- ////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
    <!-- ////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
    <!-- ////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
