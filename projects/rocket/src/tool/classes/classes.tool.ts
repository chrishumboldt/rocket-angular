/**
 * @author Chris Humboldt
 */

import { RocketArray } from '../array/array.tool';
import { RocketDOM } from '../dom/dom.tool';
import { RocketExists } from '../exists/exists.tool';
import { RocketHas } from '../has/has.tool';
import { RocketIs } from '../is/is.tool';
import {
  ClassNameFromParams,
  ClassNameToParams,
  ClassNameExecuteParams,
  ClassNameModificationParams,
  ClassNameToggleParams
} from '../../model/classes.model';

/**
 * @param params - The deconstructed options object.
 * @param params.classNames - The class names to apply.
 * @param params.element - The HTML elements.
 */
function classNameAddExecute({
  classNames,
  element
}: ClassNameExecuteParams): void {
  if (!RocketIs.element(element)) {
    return;
  }

  element.className = element.className
    .split(' ')
    .concat(classNames)
    .filter((value: string, index: number, array: string[]) => {
      return array.indexOf(value) === index && value !== '';
    })
    .join(' ');
}

/**
 * Add a class name to elements.
 *
 * @param params - The deconstructed options object.
 * @param params.to - The HTML elements.
 * @param params.classNames - The class names to apply.
 */
function classNameAdds({ to, classNames }: ClassNameToParams): void {
  classNameModification({
    elements: createElementList(to),
    add: classNames
  });
}

/**
 * Clear the class name attribute from an element.
 *
 * @param elements - The elements to clear.
 */
function classNameClear(elements: any): void {
  let elementList: HTMLElement[];

  // If the elements data is a string then select else simply make it a list.
  if (RocketIs.string(elements)) {
    elementList = RocketDOM.select(elements);
  } else {
    elementList = [elements];
  }

  // Make sure there are elements and then remove the class attribute.
  elementList.forEach((element: HTMLElement) => {
    if (RocketExists(element)) {
      element.removeAttribute('class');
    }
  });
}

/**
 * Execute class name modifications on elements.
 *
 * @param params - The deconstructed options object.
 * @param params.elements - The elements to modify.
 * @param params.classesAdd - Class names to add.
 * @param params.classesRemove - Class names to remove.
 */
function classNameModification({
  elements,
  add = undefined,
  remove = undefined
}: ClassNameModificationParams): void {
  if (!RocketExists(elements)) {
    return;
  }

  /*
   * Create an array of elements. If the array is empty then kill the
   * function execution.
   */
  const elementsList: HTMLElement[] = RocketArray.make({ data: elements });
  if (elementsList.length < 1) {
    return;
  }

  /*
   * Since the elements check out create arrays for the classes that need
   * to be added and removed.
   */
  const classesAddList = RocketArray.make({ data: add, unique: true });
  const classesAddAction = classesAddList.length > 0 ? true : false;
  const classesRemoveList = RocketArray.make({ data: remove, unique: true });
  const classesRemoveAction = classesRemoveList.length > 0 ? true : false;

  /*
   * Iterate over each elements and remove and apply the class names as
   * needed.
   */
  elementsList.forEach((element: HTMLElement) => {
    if (classesRemoveAction) {
      classNameRemoveExecute({ element, classNames: classesRemoveList });
    }
    if (classesAddAction) {
      classNameAddExecute({ element, classNames: classesAddList });
    }
  });
}

/**
 * Remove a class name from an elements.
 *
 * @param element - The element to remove from.
 * @param classNames - The class names.
 */
function classNameRemoveExecute({
  element,
  classNames
}: ClassNameExecuteParams): void {
  if (!RocketIs.element(element)) {
    return;
  }

  element.className = element.className
    .split(' ')
    .filter((value: string) => classNames.indexOf(value) < 0)
    .join(' ');

  /*
   * If the class names is truly empty to a clean clear of the class
   * attribute as not to leave it empty.
   */
  if (element.className === '') {
    classNameClear(element);
  }
}

/**
 * Remove class names from elements.
 *
 * @param params - The deconstructed options object.
 * @param params.from - The elements to remove from.
 * @param classNames - The class names to remove.
 */
function classNameRemoves({ classNames, from }: ClassNameFromParams): void {
  classNameModification({
    elements: createElementList(from),
    remove: classNames
  });
}

/**
 * Replace class names on elements.
 *
 * @param elements - The elements to replace.
 * @param classesAdd - The class names to add.
 * @param classesRemove - The class names to remove.
 */
function classNamesReplace({
  elements,
  add,
  remove
}: ClassNameModificationParams): void {
  classNameModification({
    elements: createElementList(elements),
    add,
    remove
  });
}

/**
 * Toggle class name on elements.
 *
 * @param elements - The elements to toggle.
 * @param className - The class name to toggle.
 */
function classNameToggle({
  elements,
  className
}: ClassNameToggleParams): void {
  const elementList: HTMLElement[] = createElementList(elements);

  if (
    !RocketExists(elementList) ||
    !RocketIs.string(className) ||
    RocketHas.spaces(className)
  ) {
    return;
  }

  elementList.forEach((element: HTMLElement) => {
    if (!RocketHas.class({ check: element, has: className })) {
      classNameAddExecute({ element, classNames: [className] });
    } else {
      classNameRemoveExecute({ element, classNames: [className] });
    }
  });
}

/**
 * Create an elements list.
 *
 * @param elements - The elements.
 */
function createElementList(elements: any): HTMLElement[] {
  if (RocketIs.string(elements)) {
    return RocketDOM.select(elements);
  } else if (RocketIs.array(elements)) {
    return elements;
  } else {
    return RocketArray.make({ data: elements });
  }
}

export const RocketClass = {
  add: classNameAdds,
  clear: classNameClear,
  remove: classNameRemoves,
  replace: classNamesReplace,
  toggle: classNameToggle
};
