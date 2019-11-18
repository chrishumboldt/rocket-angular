/**
 * @author Quantify
 */

import { RocketClass } from './classes.tool';
import { RocketDOM } from './dom.tool';
import { RocketHas } from './has.tool';
import { RocketIs } from './is.tool';

/**
 * Setup an application to be "Rocket" ready, meaning add some CSS resets
 * directly onto the html and body tags of the app. Also set the is touch
 * class on the HTML element.
 *
 * @param font - The font to apply to the page.
 */
export function RocketSetup(font = '\'Open Sans\', Helvetica, Arial, sans-serif') {
   const noTouchClass = 'rocketNoTouch';
   const styleId = 'rocketStyles';
   const styleContent = `
*,
*:before,
*:after {
   -webkit-box-sizing: border-box;
   -moz-box-sizing: border-box;
   box-sizing: border-box;
}
html {
   font-family: ${font};
   color: #333;
   background-color: #fff;
   -ms-text-size-adjust: 100%;
   -webkit-texts-size-adjust: 100%;
   -webkit-backface-visibility: hidden;
}
body {
   margin: 0;
   padding: 0;
}`;

   /**
    * Get the style element.
    */
   const styleElm = RocketDOM.element(`#${styleId}`);
   /**
    * Check if the style element exists.
    */
   if (!styleElm) {
      /**
       * Create the style tag first and set the id.
       */
      const styleTag = document.createElement('style');
      styleTag.id = styleId;
      /**
       * Now create the content that will exist within the style tag.
       */
      const styleTagContent = document.createTextNode(styleContent);
      /**
       * Append the style tag content to the tag itself.
       */
      styleTag.appendChild(styleTagContent);
      /**
       * Attach the new style tag to the header.
       */
      RocketDOM.add({to: RocketDOM.head, element: styleTag});
   } else {
      /**
       * The style element already exists so just replace the existing style content.
       */
      styleElm.textContent = styleContent;
   }
   /**
    * Set the touch class.
    */
   if (!RocketIs.touch() && !RocketHas.class({check: RocketDOM.html, has: noTouchClass})) {
      RocketClass.add({to: RocketDOM.html, classNames: noTouchClass});
   }
}
