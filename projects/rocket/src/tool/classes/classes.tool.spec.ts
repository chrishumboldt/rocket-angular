/**
 * @author Chris Humboldt
 */

import { RocketClass } from './classes.tool';
import { RocketIs } from '../is/is.tool';
import { RocketArray } from '../array/array.tool';

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
      expect(testElement.className).toBe(classNames);
   });

   it('Should add class names to an element by array.', () => {
      const classNames = ['starWarsRocks', 'ewoksRule'];

      RocketClass.add({to: testElement, classNames: classNames});
      expect(testElement.className).toBe(classNames.join(' '));
   });

   it('Should add a class name to multiple elements.', () => {
      const className = 'jediRule';
      const elements = [testElement, testElement2];

      RocketClass.add({to: elements, classNames: className});
      expect(elements[0].className).toBe(className);
      expect(elements[1].className).toBe(className);
   });

   it('Should add a class name to the browser <a>\'s.', () => {
      const className = 'starWarsIsTheBest';
      const links = document.querySelectorAll('a');

      RocketClass.add({
         to: links,
         classNames: className
      });

      // Test that the links have the class.
      links.forEach((link: HTMLElement) => {
         expect(link.className.split(' ').includes(className)).toBeTruthy();
      });
   });

   it('Should remove all class names from an element.', () => {
      const classNames = ['r2d2', 'c3po'];

      // Make sure that the class names are there first.
      RocketClass.add({to: testElement, classNames});
      expect(testElement.className).toBe(classNames.join(' '));

      // Now clear the class names.
      RocketClass.clear(testElement);
      expect(testElement.className).toBeFalsy();
   });

   it('Should remove class names from an element by string.', () => {
      const classNames = ['Tatooine', 'Dantooine', 'Hoth'];

      // Make sure that all the class names are there first.
      RocketClass.add({to: testElement, classNames});
      expect(testElement.className).toBe(classNames.join(' '));

      // Let remove all class names except for "Hoth".
      const hothClass = classNames.pop();
      RocketClass.remove({from: testElement, classNames: classNames});
      expect(testElement.className).toBe(hothClass);
   });

   it('Should replace the class name on an element.', () => {
      const startingClass = 'r2d2';
      const newClass = 'c3po';

      // Assign the original class.
      RocketClass.add({to: testElement, classNames: startingClass});
      expect(testElement.className).toBe(startingClass);

      // Replace the class name.
      RocketClass.replace({elements: testElement, add: newClass, remove: startingClass});
      expect(testElement.className).toBe(newClass);
   });

   it('Should toggle a class name on an element.', () => {
      const toggleClass = 'obiWanKenobi';

      // Toggle the class on.
      RocketClass.toggle({elements: testElement, className: toggleClass});
      expect(testElement.className).toBe(toggleClass);

      // Toggle the class off.
      RocketClass.toggle({elements: testElement, className: toggleClass});
      expect(testElement.className).toBeFalsy();
   });

   it('Should toggle a class on an array of elements.', () => {
      const toggleClass = 'anakinSkywalker';

      // Toggle the class on.
      RocketClass.toggle({elements: [testElement, testElement2], className: toggleClass});
      expect(testElement.className).toBe(toggleClass);
      expect(testElement2.className).toBe(toggleClass);

      // Toggle the class off.
      RocketClass.toggle({elements: [testElement, testElement2], className: toggleClass});
      expect(testElement.className).toBeFalsy();
      expect(testElement2.className).toBeFalsy();
   });
});
