MAKE IT: DROPDOWN

Simple module to add dropdown funcitonality to your menu.

PREREQUISITES

    HTML:
        <div>
            <button id="<button>">  ** this button will be clicked to open menu **
            <div id="<menu>" class="hidden"> ** this div will contain all buttons to dropdown **
                <button> 
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