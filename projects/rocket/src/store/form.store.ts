/**
 * @author Chris Humboldt
 */

import { RocketTransform } from '../tool/transform/transform.tool';
import { RocketFormElement } from './selector.store';

export enum FormInputType {
  EMAIL = RocketFormElement.EMAIL,
  NUMBER = RocketFormElement.NUMBER,
  PASSWORD = RocketFormElement.PASSWORD,
  SELECT = RocketFormElement.SELECT,
  TEXT = RocketFormElement.TEXT,
  TEXTAREA = RocketFormElement.TEXTAREA,
  TOGGLE = RocketFormElement.TOGGLE
}

export const FormInputTypeArray = RocketTransform.enumToArray({
  data: FormInputType,
  valuesOnly: true
});

export enum FormStyle {
  FLAT = 'flat',
  LINE = 'line',
  OUTLINE = 'outline'
}

export const FormStyleArray = RocketTransform.enumToArray({
  data: FormStyle,
  valuesOnly: true
});
