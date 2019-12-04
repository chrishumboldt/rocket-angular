/**
 * @author Chris Humboldt
 */

import { RocketString } from './string.tool';

describe('Rocket String Tool:', () => {

   /**
    * Tests.
    */
   it('Should lowercase an entire string.', () => {
      expect(RocketString.lowercase.all('Some text.')).toEqual('some text.');
   });

   it('Should lowercase the first character of a string.', () => {
      expect(RocketString.lowercase.first('Some text.')).toEqual('some text.');
   });

   it('Should lowercase the last character of a string.', () => {
      expect(RocketString.lowercase.last('some texT')).toEqual('some text');
   });

   it('Should remove the first character of a string.', () => {
      expect(RocketString.remove.first('Some text.')).toEqual('ome text.');
   });

   it('Should remove the first and last character of a string.', () => {
      expect(RocketString.remove.firstAndLast('Some text.')).toEqual('ome text');
   });

   it('Should remove the last character of a string.', () => {
      expect(RocketString.remove.last('Some text.')).toEqual('Some text');
   });

   it('Should remove the spaces in a string.', () => {
      expect(RocketString.remove.spaces('Some cool text.')).toEqual('Somecooltext.');
   });

   it('Should uppercase an entire string.', () => {
      expect(RocketString.uppercase.all('Some text.')).toEqual('SOME TEXT.');
   });

   it('Should uppercase the first character of a string.', () => {
      expect(RocketString.uppercase.first('some text.')).toEqual('Some text.');
   });

   it('Should uppercase the last character of a string.', () => {
      expect(RocketString.uppercase.last('some text')).toEqual('some texT');
   });
});
