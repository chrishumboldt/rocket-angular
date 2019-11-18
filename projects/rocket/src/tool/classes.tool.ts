/**
 * @author Chris Humboldt
 */

import { RocketArray } from './array.tool';
import { RocketDOM } from './dom.tool';
import { RocketExists } from './exists.tool';
import { RocketHas } from './has.tool';
import { RocketIs } from './is.tool';

/**
 * Interfaces.
 */
interface ClassNameFromOptions {
   from: any;
   classNames: string;
}
interface ClassNameToOptions {
   to: any;
   classNames: string;
}
interface ClassNameExecuteOptions {
   element: HTMLElement;
   classNames: string[];
}
interface ClassNameModificationOptions {
   elements: any;
   classesAdd?: string;
   classesRemove?: string;
}
interface ClassNameToggleOptions {
   elements: any;
   className: string;
}

/**
 * @param options - The deconstructed options object.
 * @param options.classNames - The class names to apply.
 * @param options.element - The HTML elements.
 */
function classNameAddExecute({ classNames, element }: ClassNameExecuteOptions): void {
   element.className = element.className
      .split(' ')
      .concat(classNames)
      .filter((value: string, index: number, array: string[]) => {
         return (array.indexOf(value) === index) && (value !== '');
      })
      .join(' ');
}

/**
 * Add a class name to elements.
 *
 * @param options - The deconstructed options object.
 * @param options.to - The HTML elements.
 * @param options.classNames - The class names to apply.
 */
function classNameAdds({ to, classNames }: ClassNameToOptions): void {
   classNameModification({
      elements: createElementList(to),
      classesAdd: classNames
   });
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
 * @param options - The deconstructed options object.
 * @param options.elements - The elements to modify.
 * @param options.classesAdd - Class names to add.
 * @param options.classesRemove - Class names to remove.
 */
function classNameModification({
   elements,
   classesAdd = undefined,
   classesRemove = undefined
}: ClassNameModificationOptions): void {
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
   const elementsList: HTMLElement[] = RocketArray.make({input: elements});
   if (elementsList.length < 1) {
      return;
   }

   /**
    * Since the elements check out create arrays for the classes that need
    * to be added and removed.
    */
   const classesAddList = RocketArray.make({input: classesAdd, unique: true});
   const classesAddAction = (classesAddList.length > 0) ? true : false;
   const classesRemoveList = RocketArray.make({input: classesRemove, unique: true});
   const classesRemoveAction = (classesRemoveList.length > 0) ? true : false;

   /**
    * Iterate over each elements and remove and apply the class names as
    * needed.
    */
   elementsList.forEach((element: HTMLElement) => {
      if (classesRemoveAction) {
         classNameRemoveExecute({element, classNames: classesRemoveList});
      }
      if (classesAddAction) {
         classNameAddExecute({element, classNames: classesAddList});
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
}: ClassNameExecuteOptions): void {
   element.className = element.className
      .split(' ')
      .filter((value: string) => classNames.indexOf(value) < 0)
      .join(' ');

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
 * @param options - The deconstructed options object.
 * @param options.from - The elements to remove from.
 * @param classNames - The class names to remove.
 */
function classNameRemoves({ classNames, from }: ClassNameFromOptions): void {
   classNameModification({
      elements: createElementList(from),
      classesRemove: classNames
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
   classesAdd,
   classesRemove
}: ClassNameModificationOptions): void {
   classNameModification({
      elements: createElementList(elements),
      classesAdd,
      classesRemove
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
}: ClassNameToggleOptions): void {
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
      if (RocketHas.class({check: element, has: className})) {
         classNameAddExecute({element, classNames: [className]});
      } else {
         classNameRemoveExecute({element, classNames: [className]});
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
