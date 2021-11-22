MAKE IT: DROPDOWN

Simple module to add dropdown functionality to your menu. Created as part of The Odin Project
coding curriculum.

INSTRUCTIONS

1. Build the HTML elements, structured as below (make sure you add 'hidden' to the dropdown div).


        HTML:
            <div>
                <button id="<button>">              ** this button will be clicked to open menu **
                <div id="<menu>" class="hidden">    ** this div will contain all buttons to dropdown **
                    <button>                        ** as many buttons as needed **
                </div>
            </div>

        CSS:
            .hidden {
                display: none;
            }

2. Add the hidden class in CSS.

3. Import the function into your .js file:


        import { makeItDropdown } from "./makeit"

4. Make the menu dropdown with:


        makeItDropdown(button, menu);

QUESTIONS OR FEEDBACK?

    miss.liner@yahoo.com