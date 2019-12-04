/**
 * @author Chris Humboldt
 */

import { RocketClass } from './classes.tool';

describe('Rocket Classes Tool:', () => {
   let testElement: HTMLElement;
   let testElement2: HTMLElement;

   /**
    * Setup each test.
    */
   beforeEach(() => {
      testElement = document.createElement('div');
      testElement2 = document.createElement('div');
   });

   /**
    * Tests.
    */
   it('Should add class names to an element by string.', () => {
      const classNames = 'starWarsRocks ewoksRule';

      RocketClass.add({to: testElement, classNames: classNames});
      expect(testElement.className).toEqual(classNames);
   });

   it('Should add class names to an element by array.', () => {
      const classNames = ['starWarsRocks', 'ewoksRule'];

      RocketClass.add({to: testElement, classNames: classNames});
      expect(testElement.className).toEqual(classNames.join(' '));
   });

   it('Should remove all class names from an element.', () => {
      const classNames = ['r2d2', 'c3po'];

      // Make sure that the class names are there first.
      RocketClass.add({to: testElement, classNames});
      expect(testElement.className).toEqual(classNames.join(' '));

      // Now clear the class names.
      RocketClass.clear(testElement);
      expect(testElement.className).toBeFalsy();
   });

   it('Should remove class names from an element by string.', () => {
      const classNames = ['Tatooine', 'Dantooine', 'Hoth'];

      // Make sure that all the class names are there first.
      RocketClass.add({to: testElement, classNames});
      expect(testElement.className).toEqual(classNames.join(' '));

      // Let remove all class names except for "Hoth".
      const hothClass = classNames.pop();
      RocketClass.remove({from: testElement, classNames: classNames});
      expect(testElement.className).toEqual(hothClass);
   });

   it('Should replace the class name on an element.', () => {
      const startingClass = 'r2d2';
      const newClass = 'c3po';

      // Assign the original class.
      RocketClass.add({to: testElement, classNames: startingClass});
      expect(testElement.className).toEqual(startingClass);

      // Replace the class name.
      RocketClass.replace({elements: testElement, add: newClass, remove: startingClass});
      expect(testElement.className).toEqual(newClass);
   });

   it('Should toggle a class name on an element.', () => {
      const toggleClass = 'obiWanKenobi';

      // Toggle the class on.
      RocketClass.toggle({elements: testElement, className: toggleClass});
      expect(testElement.className).toEqual(toggleClass);

      // Toggle the class off.
      RocketClass.toggle({elements: testElement, className: toggleClass});
      expect(testElement.className).toBeFalsy();
   });

   it('Should toggle a class on an array of elements.', () => {
      const toggleClass = 'anakinSkywalker';

      // Toggle the class on.
      RocketClass.toggle({elements: [testElement, testElement2], className: toggleClass});
      expect(testElement.className).toEqual(toggleClass);
      expect(testElement2.className).toEqual(toggleClass);

      // Toggle the class off.
      RocketClass.toggle({elements: [testElement, testElement2], className: toggleClass});
      expect(testElement.className).toBeFalsy();
      expect(testElement2.className).toBeFalsy();
   });
});
