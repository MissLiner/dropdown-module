## <make-this/dropdown>
*Created as part of The Odin Project coding curriculum*

Simple module to add dropdown functionality to your menu:
  -show menu on button click
  -hide menu on next subsequent click (anywhere on page)

### Instructions

1. Build the HTML elements, as below (make sure you add the classes):

    ```
    <div>
      <button id="button">                  //button to open menu
      <div id="menu" class="hidden">        //div containing dropdown buttons
        <button class="vertical"> . . .     //as many buttons as needed
      </div>
    </div>
    ```

2. Add the hidden & vertical classes in CSS:

    ```
    .vertical {
      display: block;
    }
    .hidden {
      display: none;
    }
    ```

3. Install:

      `$ npm install make-this --save-dev`

4. Import the function into your .js file:

      `import { makeItDropdown } from "make-this/src/dropdown"`

5. Use your button and menu ids to make it **drop**:

      `makeItDropdown(button, menu);`

### Questions or feedback?

      contact: [miss.liner@yahoo.com](mailto:miss.liner@yahoo.com)