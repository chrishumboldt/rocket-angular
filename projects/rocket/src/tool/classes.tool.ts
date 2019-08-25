/**
 * @author Chris Humboldt
 */

import { RocketArray } from './array.tool';
import { RocketDOM } from './dom.tool';
import { RocketExists } from './exists.tool';
import { RocketHas } from './has.tool';
import { RocketIs } from './is.tool';

/**
 * @param elements - The HTML elements.
 * @param classNames - The class names to apply.
 */
function classNameAddExecute(element: HTMLElement, classNames: string[]): void {
   element.className = element.className
      .split(' ')
      .concat(classNames)
      .filter((value: string, index: number, array: string[]) => {
         return (array.indexOf(value) === index) && (value !== '');
      })
      .toString()
      .replace(/,/g, ' ');
}

/**
 * Add a class name to elements.
 *
 * @param elements - The HTML elements.
 * @param classNames - The class names to apply.
 */
function classNameAdds(elements: any, classNames: string): void {
   classNameModification(createElementList(elements), classNames, undefined);
}

/**
 * Clear the class name attribute from an element.
 *
 * @param elements - The elements to clear.
 */
function classNameClear(elements: any): void {
   let elementList: HTMLElement[];

   /**
    * If the elements input is a string then select else simply make it a list.
    */
   if (RocketIs.string(elements)) {
      elementList = RocketDOM.select(elements);
   } else {
      elementList = [elements];
   }
   /**
    * Make sure there are elements and then remove the class attribute.
    */
   elementList.forEach((element: HTMLElement) => {
      if (RocketExists(element)) {
         element.removeAttribute('class');
      }
   });
}

/**
 * Execute class name modifications on elements.
 *
 * @param elements - The elements to modify.
 * @param classesAdd - Class names to add.
 * @param classesRemove - Class names to remove.
 */
function classNameModification(
   elements: any,
   classesAdd: string,
   classesRemove: string
): void {
   /**
    * Do nothing should the elements not exist.
    */
   if (!RocketExists(elements)) {
      return;
   }

   /**
    * Create an array of elements. If the array is empty then kill the
    * function execution.
    */
   const elementsList: HTMLElement[] = RocketArray.make(elements);
   if (elementsList.length < 1) {
      return;
   }

   /**
    * Since the elements check out create arrays for the classes that need
    * to be added and removed.
    */
   const classesAddList = RocketArray.make(classesAdd, true);
   const classesAddAction = (classesAddList.length > 0) ? true : false;
   const classesRemoveList = RocketArray.make(classesRemove, true);
   const classesRemoveAction = (classesRemoveList.length > 0) ? true : false;

   /**
    * Iterate over each elements and remove and apply the class names as
    * needed.
    */
   elementsList.forEach((element: HTMLElement) => {
      if (classesRemoveAction) {
         classNameRemoveExecute(element, classesRemoveList);
      }
      if (classesAddAction) {
         classNameAddExecute(element, classesAddList);
      }
   });
}

/**
 * Remove a class name from an elements.
 *
 * @param element - The element to remove from.
 * @param classNames - The class names.
 */
function classNameRemoveExecute(
   element: HTMLElement,
   classNames: string[]
): void {
   element.className = element.className
      .split(' ')
      .filter((value: string) => classNames.indexOf(value) < 0)
      .toString()
      .replace(/,/g, ' ');

   /**
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
 * @param elements - The elements to remove from.
 * @param classNames - The class names to remove.
 */
function classNameRemoves(elements: any, classNames: string): void {
   classNameModification(createElementList(elements), undefined, classNames);
}

/**
 * Replace class names on elements.
 *
 * @param elements - The elements to replace.
 * @param classesAdd - The class names to add.
 * @param classesRemove - The class names to remove.
 */
function classNamesReplace(
   elements: any,
   classesAdd: string,
   classesRemove: string
): void {
   classNameModification(createElementList(elements), classesAdd, classesRemove);
}

/**
 * Toggle class name on elements.
 *
 * @param elements - The elements to toggle.
 * @param className - The class name to toggle.
 */
function classNameToggle(
   elements: any,
   className: string
): void {
   const elementList: HTMLElement[] = createElementList(elements);

   /**
    * Catch.
    */
   if (
      !RocketExists(elementList)
      || !RocketIs.string(className)
      || !RocketHas.spaces(className)
   ) {
      return;
   }

   elementList.forEach((element: HTMLElement) => {
      if (RocketHas.class(element, className)) {
         classNameAddExecute(element, [className]);
      } else {
         classNameRemoveExecute(element, [className]);
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
   } else {
      return elements;
   }
}

/**
 * Manage DOM class names.
 */
export const RocketClass = {
   add: classNameAdds,
   clear: classNameClear,
   remove: classNameRemoves,
   replace: classNamesReplace,
   toggle: classNameToggle
};
