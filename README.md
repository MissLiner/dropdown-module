## <make-this/dropdown>

Simple module to add dropdown functionality to your menu. Created as part of The Odin Project
coding curriculum.

### Instructions

1. Build the HTML elements, as below (make sure you add 'hidden' to the dropdown div):

    ```
    <div>
      <button id="button">              //this button will be clicked to open menu
      <div id="menu" class="hidden">    //this div will contain all buttons to dropdown
        <button> . . .                  //as many buttons as needed
      </div>
    </div>
    ```

2. Add the hidden class in CSS:

    ```
    .hidden {
    display: none;
    }
    ```

3. Install:

  `$ npm install make-this --save-dev`

3. Import the function into your .js file:

  `import { makeItDropdown } from "make-this/dropdown"`

4. Make the menu dropdown with:

  `makeItDropdown(button, menu);`

### Questions or feedback?

contact: [miss.liner@yahoo.com](mailto:miss.liner@yahoo.com)