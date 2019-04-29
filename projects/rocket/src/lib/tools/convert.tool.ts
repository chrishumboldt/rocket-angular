/**
 * @author Chris Humboldt
 */

import { RocketIs } from './is.tool';

/**
 * Convert days into milliseconds.
 *
 * @param hours
 */
function convertDaysToMilliseconds(days: number): number {
   /**
    * Catch.
    */
   if (!RocketIs.number(days)) {
      return;
   }

   return days * 24 * 60 * 60 * 1000;
}

/**
 * Convert hours into milliseconds.
 *
 * @param hours
 */
function convertHoursToMilliseconds(hours: number): number {
   /**
    * Catch.
    */
   if (!RocketIs.number(hours)) {
      return;
   }

   return hours * 60 * 60 * 1000;
}

/**
 * Convert milliseconds into days.
 *
 * @param milliseconds
 */
function convertMillisecondsToDays(milliseconds: number): number {
   /**
    * Catch.
    */
   if (!RocketIs.number(milliseconds)) {
      return;
   }

   return convertMillisecondsToHours(milliseconds) / 24;
}

/**
 * Convert milliseconds into hours.
 *
 * @param milliseconds
 */
function convertMillisecondsToHours(milliseconds: number): number {
   /**
    * Catch.
    */
   if (!RocketIs.number(milliseconds)) {
      return;
   }

   return convertMillisecondsToMinutes(milliseconds) / 60;
}

/**
 * Convert milliseconds into minutes.
 *
 * @param milliseconds
 */
function convertMillisecondsToMinutes(milliseconds: number): number {
   /**
    * Catch.
    */
   if (!RocketIs.number(milliseconds)) {
      return;
   }

   return convertMillisecondsToSeconds(milliseconds) / 60;
}

/**
 * Convert milliseconds into seconds.
 *
 * @param milliseconds
 */
function convertMillisecondsToSeconds(milliseconds: number): number {
   /**
    * Catch.
    */
   if (!RocketIs.number(milliseconds)) {
      return;
   }

   return milliseconds / 1000;
}

/**
 * Convert milliseconds into weeks.
 *
 * @param milliseconds
 */
function convertMillisecondsToWeeks(milliseconds: number): number {
   /**
    * Catch.
    */
   if (!RocketIs.number(milliseconds)) {
      return;
   }

   return convertMillisecondsToDays(milliseconds) / 7;
}

/**
 * Convert minutes into milliseconds.
 *
 * @param minutes
 */
function convertMinutesToMilliseconds(minutes: number): number {
   /**
    * Catch.
    */
   if (!RocketIs.number(minutes)) {
      return;
   }

   return minutes * 60 * 1000;
}

/**
 * Convert seconds into milliseconds.
 *
 * @param seconds
 */
function convertSecondsToMilliseconds(seconds: number): number {
   /**
    * Catch.
    */
   if (!RocketIs.number(seconds)) {
      return;
   }

   return seconds * 1000;
}

/**
 * Convert weeks into milliseconds.
 *
 * @param hours
 */
function convertWeeksToMilliseconds(weeks: number): number {
   /**
    * Catch.
    */
   if (!RocketIs.number(weeks)) {
      return;
   }

   return weeks * 7 * 24 * 60 * 60 * 1000;
}

export const RocketConvert = {
   daysToMilliseconds: convertDaysToMilliseconds,
   hoursToMilliseconds: convertHoursToMilliseconds,
   millisecondsToDays: convertMillisecondsToDays,
   millisecondsToHours: convertMillisecondsToHours,
   millisecondsToMinutes: convertMillisecondsToMinutes,
   millisecondsToSeconds: convertMillisecondsToSeconds,
   millisecondsToWeeks: convertMillisecondsToWeeks,
   minutesToMilliseconds: convertMinutesToMilliseconds,
   secondsToMilliseconds: convertSecondsToMilliseconds,
   weeksToMilliseconds: convertWeeksToMilliseconds
};
