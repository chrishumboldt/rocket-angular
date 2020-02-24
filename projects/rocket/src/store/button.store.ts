/**
 * @author Chris Humboldt
 */

import { RocketTransform } from '../tool/transform/transform.tool';

export enum ButtonColour {
   GREY = 'grey',
   BLACK = 'black',
   WHITE = 'white',
   AQUA = 'aqua',
   BLUE = 'blue',
   GREEN = 'green',
   ORANGE = 'orange',
   PINK = 'pink',
   PURPLE = 'purple',
   RED = 'red',
   YELLOW = 'yellow'
}

export const ButtonColourArray = RocketTransform.enumToArray({
   data: ButtonColour,
   valuesOnly: true
});

export enum ButtonShape {
   ROUNDED = 'rounded',
   PILL = 'pill',
   SQUARE = 'square'
}

export const ButtonShapeArray = RocketTransform.enumToArray({
   data: ButtonShape,
   valuesOnly: true
});

export enum ButtonSize {
   DEFAULT = 'default',
   LARGE = 'large',
   SMALL = 'small'
}

export const ButtonSizeArray = RocketTransform.enumToArray({
   data: ButtonSize,
   valuesOnly: true
});

export enum ButtonRender {
   FLAT = 'flat',
   LINE = 'line'
}

export const ButtonRenderArray = RocketTransform.enumToArray({
   data: ButtonRender,
   valuesOnly: true
});

export enum ButtonType {
   BUTTON = 'button',
   SUBMIT = 'submit'
}
