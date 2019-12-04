/**
 * @author Chris Humboldt
 */

import { RocketIs } from '../is/is.tool';
import { RocketConvert } from './convert.tool';

describe('Rocket Convert Tool:', () => {
   const days = 14;
   const hours = 336;
   const jsonString = '{"mostDangerous": true, "villain": "Darth Vader"}';
   const milliseconds = 1209600000;
   const minutes = 20160;
   const seconds = 1209600;
   const weeks = 2;

   /**
    * Tests.
    */
   it('Should convert days into milliseconds.', () => {
      expect(RocketConvert.daysToMilliseconds(days)).toEqual(milliseconds);
   });

   it('Should convert hours into milliseconds.', () => {
      expect(RocketConvert.hoursToMilliseconds(hours)).toEqual(milliseconds);
   });

   it('Should convert milliseconds into days.', () => {
      expect(RocketConvert.millisecondsToDays(milliseconds)).toEqual(days);
   });

   it('Should convert milliseconds into hours.', () => {
      expect(RocketConvert.millisecondsToHours(milliseconds)).toEqual(hours);
   });

   it('Should convert milliseconds into minutes.', () => {
      expect(RocketConvert.millisecondsToMinutes(milliseconds)).toEqual(minutes);
   });

   it('Should convert milliseconds into seconds.', () => {
      expect(RocketConvert.millisecondsToSeconds(milliseconds)).toEqual(seconds);
   });

   it('Should convert milliseconds into weeks.', () => {
      expect(RocketConvert.millisecondsToWeeks(milliseconds)).toEqual(weeks);
   });

   it('Should convert minutes into milliseconds.', () => {
      expect(RocketConvert.minutesToMilliseconds(minutes)).toEqual(milliseconds);
   });

   it('Should convert seconds into milliseconds.', () => {
      expect(RocketConvert.secondsToMilliseconds(seconds)).toEqual(milliseconds);
   });

   it('Should convert a string into a JSON object.', () => {
      const result = RocketConvert.toJSON(jsonString);

      expect(RocketIs.json(result)).toBeTruthy();
      expect(result.mostDangerous).toEqual(true);
      expect(result.villain).toEqual('Darth Vader');
   });

   it('Should convert weeks into milliseconds.', () => {
      expect(RocketConvert.weeksToMilliseconds(weeks)).toEqual(milliseconds);
   });
});
