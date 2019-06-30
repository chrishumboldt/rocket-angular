/**
 * @author Chris Humboldt
 */

import { RocketDOM } from '../dom';

/**
 * Setup an application to be "Rocket" ready, meaning add some CSS resets
 * directly onto the html and body tags of the app.
 */
function rocketSetup() {
   /**
    * Create the style tag first and set the type.
    */
   const styleTag = document.createElement('style');
   styleTag.type = 'text/css';
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
   color: #999;
   background-color: #fff;
   -ms-text-size-adjust: 100%;
   -webkit-texts-size-adjust: 100%;
   -webkit-backface-visibility: hidden;

   body {
      margin: 0;
      padding: 0;
   }
}`);
   /**
    * Append the style tag content to the tag itself.
    */
   styleTag.appendChild(styleTagContent);
   /**
    * Attach the new style tag to the header.
    */
   RocketDOM.head.appendChild(styleTag);
}

export const RocketSetup = rocketSetup;
