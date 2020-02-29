/**
 * @author Chris Humboldt
 */

import { RocketDOM } from './dom.tool';

describe('Rocket DOM tool:', () => {
  const className = 'youngling';
  let childElement: HTMLElement;
  let parentElement: HTMLElement;

  // Setup each test.
  beforeEach(() => {
    // Setup the DOM elements.
    childElement = document.createElement('div');
    parentElement = document.createElement('div');
    childElement.className = className;

    RocketDOM.add({ element: childElement, to: parentElement });
  });

  // Tests.
  it('Should add an element to another.', () => {
    // Lets test the dom add function worked.
    expect(parentElement.querySelector(`.${className}`)).toEqual(childElement);
  });

  it('Should remove an element from another.', () => {
    // First make sure that child element exists.
    expect(parentElement.querySelector(`.${className}`)).toEqual(childElement);
    // Now remove the child element.
    RocketDOM.remove(childElement);
    // Test the result.
    expect(parentElement.querySelector(`.${className}`)).toBeFalsy();
  });

  it('Should select a tag on the page.', () => {
    const header = RocketDOM.element('head');
    expect(header).toBeTruthy();
  });
});
