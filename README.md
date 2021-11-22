MAKE IT: DROPDOWN

Simple module to add dropdown functionality to your menu.

PREREQUISITES

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

INSTRUCTIONS

Add this code to your .js file:

    import { makeItDropdown } from "./makeit"

Make any menu dropdown with:

    makeItDropdown(button, menu);

TIPS

Make sure you set your dropdown div class as "hidden".