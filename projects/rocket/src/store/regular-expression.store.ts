/**
 * @author Chris Humboldt
 */

export const RegEx = {
   ATTRIBUTE: /([a-z])+(\[)+([a-z])+(=")+([a-zA-Z\-])+("\])/,
   COLOUR: /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/,
   DATE: /^[0-9]{4}-[0-9]{2}-[0-9]{2}/,
   EMAIL: /([\w\.\-]+)@([\w\.\-]+)\.(\w+)/i,
   PASSWORD: /^(?=.*\d).{6,}/,
   TAG: /^[a-zA-Z]+$/,
   TIME: /([01]\d|2[0-3]):([0-5]\d)/,
   URL: /^(https?:\/\/[^\s]+)/
};
