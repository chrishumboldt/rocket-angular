/**
 * @author Quantify
 */

import { RocketClass } from './classes.tool';
import { RocketDOM } from './dom.tool';
import { RocketHas } from './has.tool';
import { RocketIs } from './is.tool';

const noTouchClass = 'rocket-no-touch';

/**
 * Setup an application to be "Rocket" ready, meaning add some CSS resets
 * directly onto the html and body tags of the app. Also set the is touch
 * class on the HTML element.
 */
export function RocketSetup() {
   /**
    * Create the style tag first and set the type.
    */
   const styleTag = document.createElement('style');
   /**
    * Now create the content that will exist within the style tag.
    */
   const styleTagContent = document.createTextNode(`
*,
*:before,
*:after {
   -webkit-box-sizing: border-box;
   -moz-box-sizing: border-box;
   box-sizing: border-box;
}
html {
   font-family: 'Open Sans', Helvetica, Arial, sans-serif;
   color: #333;
   background-color: #fff;
   -ms-text-size-adjust: 100%;
   -webkit-texts-size-adjust: 100%;
   -webkit-backface-visibility: hidden;
}
body {
   margin: 0;
   padding: 0;
}`);
   /**
    * Append the style tag content to the tag itself.
    */
   styleTag.appendChild(styleTagContent);
   /**
    * Attach the new style tag to the header.
    */
   RocketDOM.add(RocketDOM.head, styleTag);
   /**
    * Set the touch class.
    */
   if (!RocketIs.touch() && !RocketHas.class(RocketDOM.html, noTouchClass)) {
      RocketClass.add(RocketDOM.html, noTouchClass);
   }
}
