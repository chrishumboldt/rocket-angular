/**
 * @author Chris Humboldt
 */

/**
 * Take directly from the W3Schools website.
 * @URL: https://www.w3schools.com/html/html_form_elements.asp
 */
export enum FormElements {
   FORM = 'FORM',
   INPUT = 'INPUT',
   TEXTAREA = 'TEXTAREA',
   LABEL = 'LABEL',
   FIELDSET = 'FIELDSET',
   LEGEND = 'LEGEND',
   SELECT = 'SELECT',
   OPTGROUP = 'OPTGROUP',
   OPTION = 'OPTION',
   BUTTON = 'BUTTON',
   DATALIST = 'DATALIST',
   OUTPUT = 'OUTPUT'
}

/**
 * Take directly from the W3Schools website.
 * @URL: https://www.w3schools.com/tags/att_disabled.asp
 */
export enum FormElementsDisableable {
   BUTTON = 'BUTTON',
   FIELDSET = 'FIELDSET',
   INPUT = 'INPUT',
   OPTGROUP = 'OPTGROUP',
   OPTION = 'OPTION',
   SELECT = 'SELECT',
   TEXTAREA = 'TEXTAREA'
}

export enum SelectorType {
   GET_ELEMENT_BY_ID,
   GET_ELEMENT_BY_TAG,
   UNKNOWN,
   QUERY_SELECTOR_ALL,
}
