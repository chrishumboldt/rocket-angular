/**
 * @author Chris Humboldt
 */

export enum RocketFormElement {
  BUTTON = 'button',
  DATALIST = 'dataList',
  FIELDSET = 'fieldSet',
  EMAIL = 'email',
  FORM = 'form',
  INPUT = 'input',
  LABEL = 'label',
  LEGEND = 'legend',
  NUMBER = 'number',
  OPTGROUP = 'optGroup',
  OPTION = 'option',
  OUTPUT = 'output',
  PASSWORD = 'password',
  SELECT = 'select',
  TEXT = 'text',
  TEXTAREA = 'textarea',
  TOGGLE = 'toggle'
}

/**
 * Lifted directly from the W3Schools website.
 * @URL: https://www.w3schools.com/html/html_form_elements.asp
 */
export enum FormElement {
  BUTTON = RocketFormElement.BUTTON,
  DATALIST = RocketFormElement.DATALIST,
  FIELDSET = RocketFormElement.FIELDSET,
  FORM = RocketFormElement.FORM,
  INPUT = RocketFormElement.INPUT,
  LABEL = RocketFormElement.LABEL,
  LEGEND = RocketFormElement.LEGEND,
  OPTGROUP = RocketFormElement.OPTGROUP,
  OPTION = RocketFormElement.OPTION,
  OUTPUT = RocketFormElement.OUTPUT,
  SELECT = RocketFormElement.SELECT,
  TEXTAREA = RocketFormElement.TEXTAREA
}

/**
 * Lifted directly from the W3Schools website.
 * @URL: https://www.w3schools.com/tags/att_disabled.asp
 */
export enum FormElementDisableable {
  BUTTON = RocketFormElement.BUTTON,
  FIELDSET = RocketFormElement.FIELDSET,
  INPUT = RocketFormElement.INPUT,
  OPTGROUP = RocketFormElement.OPTGROUP,
  OPTION = RocketFormElement.OPTION,
  SELECT = RocketFormElement.SELECT,
  TEXTAREA = RocketFormElement.TEXTAREA
}

export enum SelectorType {
  DOCUMENT,
  GET_ELEMENT_BY_ID,
  GET_ELEMENT_BY_TAG,
  UNKNOWN,
  QUERY_SELECTOR_ALL,
  WINDOW
}
