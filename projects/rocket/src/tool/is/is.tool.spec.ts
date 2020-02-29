/**
 * @author Chris Humboldt
 */

import { RocketIs } from './is.tool';

describe('Rocket Is Tool:', () => {
  const basicString = 'Darth Vader Is Scary!';
  const divElm = document.createElement('div');
  const emptyArray = [];
  const emptyMap = new Map();
  const emptyObject = {};
  const numberArray = [1, 2, 3];
  const stringArray = ['Luke Skywalker', 'Darth Vader', 'Chewbacca'];

  // Tests.
  it('Should successfully test if something is an array.', () => {
    expect(RocketIs.array(stringArray)).toBeTruthy();
    expect(RocketIs.array(emptyArray)).toBeTruthy();
    expect(RocketIs.array(numberArray)).toBeTruthy();

    expect(RocketIs.array(basicString)).toBeFalsy();
    expect(RocketIs.array(emptyObject)).toBeFalsy();
    expect(RocketIs.array(true)).toBeFalsy();
    expect(RocketIs.array(42)).toBeFalsy();
    expect(RocketIs.array(undefined)).toBeFalsy();
  });

  it('Should successfully test if something is a boolean', () => {
    expect(RocketIs.boolean(true)).toBeTruthy();
    expect(RocketIs.boolean(false)).toBeTruthy();

    expect(RocketIs.boolean(emptyArray)).toBeFalsy();
    expect(RocketIs.boolean(emptyObject)).toBeFalsy();
    expect(RocketIs.boolean(basicString)).toBeFalsy();
    expect(RocketIs.boolean(42)).toBeFalsy();
    expect(RocketIs.boolean(undefined)).toBeFalsy();
  });

  it('Should successfully test if something is a date.', () => {
    expect(RocketIs.date(new Date())).toBeTruthy();

    expect(RocketIs.date(emptyArray)).toBeFalsy();
    expect(RocketIs.date(emptyObject)).toBeFalsy();
    expect(RocketIs.date(basicString)).toBeFalsy();
    expect(RocketIs.date(42)).toBeFalsy();
    expect(RocketIs.date(undefined)).toBeFalsy();
  });

  it('Should successfully test if something is an element.', () => {
    expect(RocketIs.element(divElm)).toBeTruthy();

    expect(RocketIs.element(emptyArray)).toBeFalsy();
    expect(RocketIs.element(emptyObject)).toBeFalsy();
    expect(RocketIs.element(basicString)).toBeFalsy();
    expect(RocketIs.element(42)).toBeFalsy();
    expect(RocketIs.element(undefined)).toBeFalsy();
  });

  it('Should successfully test if something is an email.', () => {
    expect(RocketIs.email('rocket@rocket.com')).toBeTruthy();

    expect(RocketIs.email(basicString)).toBeFalsy();
    expect(RocketIs.email(undefined)).toBeFalsy();
  });

  it('Should successfully test if something is a function.', () => {
    expect(RocketIs.function(function() {})).toBeTruthy();

    expect(RocketIs.function(emptyArray)).toBeFalsy();
    expect(RocketIs.function(emptyObject)).toBeFalsy();
    expect(RocketIs.function(basicString)).toBeFalsy();
    expect(RocketIs.function(42)).toBeFalsy();
    expect(RocketIs.function(undefined)).toBeFalsy();
  });

  it('Should successfully test if a string represents a hex colour.', () => {
    expect(RocketIs.hexColor('#123456')).toBeTruthy();

    expect(RocketIs.hexColor(basicString)).toBeFalsy();
    expect(RocketIs.hexColor(undefined)).toBeFalsy();
  });

  it('Should successfully test if a string represents an image.', () => {
    expect(RocketIs.image({ check: 'something.jpg' })).toBeTruthy();

    expect(RocketIs.image({ check: basicString })).toBeFalsy();
    expect(RocketIs.image({ check: undefined })).toBeFalsy();
  });

  it('Should successfully test if something is JSON.', () => {
    expect(RocketIs.json(emptyObject)).toBeTruthy();

    expect(RocketIs.json(emptyArray)).toBeFalsy();
    expect(RocketIs.json(basicString)).toBeFalsy();
    expect(RocketIs.json(42)).toBeFalsy();
    expect(RocketIs.json(undefined)).toBeFalsy();
  });

  it('Should successfully test if something is a Map.', () => {
    expect(RocketIs.map(emptyMap)).toBeTruthy();

    expect(RocketIs.map(emptyArray)).toBeFalsy();
    expect(RocketIs.map(emptyObject)).toBeFalsy();
    expect(RocketIs.map(basicString)).toBeFalsy();
    expect(RocketIs.map(42)).toBeFalsy();
    expect(RocketIs.map(undefined)).toBeFalsy();
  });

  it('Should successfully test if something is a number.', () => {
    expect(RocketIs.number(42)).toBeTruthy();

    expect(RocketIs.number(emptyArray)).toBeFalsy();
    expect(RocketIs.number(emptyObject)).toBeFalsy();
    expect(RocketIs.number(basicString)).toBeFalsy();
    expect(RocketIs.number(divElm)).toBeFalsy();
    expect(RocketIs.number(undefined)).toBeFalsy();
  });

  it('Should successfully test if something is an object.', () => {
    expect(RocketIs.object(emptyArray)).toBeTruthy();
    expect(RocketIs.object(emptyMap)).toBeTruthy();
    expect(RocketIs.object(emptyObject)).toBeTruthy();
    expect(RocketIs.object(divElm)).toBeTruthy();

    expect(RocketIs.object(42)).toBeFalsy();
    expect(RocketIs.object(undefined)).toBeFalsy();
  });

  it('Should successfully test if a string represents a password.', () => {
    expect(RocketIs.password('This12IsCool')).toBeTruthy();

    expect(RocketIs.password(basicString)).toBeFalsy();
    expect(RocketIs.password(undefined)).toBeFalsy();
  });

  it('Should successfully test if something is a string.', () => {
    expect(RocketIs.string(basicString)).toBeTruthy();

    expect(RocketIs.string(emptyArray)).toBeFalsy();
    expect(RocketIs.string(emptyMap)).toBeFalsy();
    expect(RocketIs.string(emptyObject)).toBeFalsy();
    expect(RocketIs.string(divElm)).toBeFalsy();
    expect(RocketIs.string(42)).toBeFalsy();
    expect(RocketIs.string(undefined)).toBeFalsy();
  });

  it('Should successfully test if a string represents time.', () => {
    expect(RocketIs.time('12:30:15')).toBeTruthy();
    expect(RocketIs.time('12:30')).toBeTruthy();
    expect(RocketIs.time('12:30:15:22')).toBeTruthy();

    expect(RocketIs.time(basicString)).toBeFalsy();
    expect(RocketIs.time('12')).toBeFalsy();
    expect(RocketIs.time('12-30-15')).toBeFalsy();
    expect(RocketIs.time(undefined)).toBeFalsy();
  });

  it('Should successfully test if a string represents a URL.', () => {
    expect(RocketIs.url('https://www.something.com')).toBeTruthy();
    expect(RocketIs.url('http://www.something.com')).toBeTruthy();
    expect(RocketIs.url('https://something.com')).toBeTruthy();
    expect(RocketIs.url('http://something.com')).toBeTruthy();

    expect(RocketIs.url(basicString)).toBeFalsy();
    expect(RocketIs.url('www.something.com')).toBeFalsy();
    expect(RocketIs.url('something.com')).toBeFalsy();
    expect(RocketIs.url(undefined)).toBeFalsy();
  });
});
