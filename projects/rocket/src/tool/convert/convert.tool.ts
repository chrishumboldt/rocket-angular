/**
 * @author Chris Humboldt
 */

import { RocketIs } from '../is/is.tool';

/**
 * Convert days into milliseconds.
 *
 * @param days - The hours to convert.
 */
function convertDaysToMilliseconds(days: number): number {
  // Catch.
  if (!RocketIs.number(days)) {
    return;
  }

  return days * 24 * 60 * 60 * 1000;
}

/**
 * Convert hours into milliseconds.
 *
 * @param hours - The hours to convert.
 */
function convertHoursToMilliseconds(hours: number): number {
  // Catch.
  if (!RocketIs.number(hours)) {
    return;
  }

  return hours * 60 * 60 * 1000;
}

/**
 * Convert milliseconds into days.
 *
 * @param milliseconds - The milliseconds to convert.
 */
function convertMillisecondsToDays(milliseconds: number): number {
  // Catch.
  if (!RocketIs.number(milliseconds)) {
    return;
  }

  return convertMillisecondsToHours(milliseconds) / 24;
}

/**
 * Convert milliseconds into hours.
 *
 * @param milliseconds - The milliseconds to convert.
 */
function convertMillisecondsToHours(milliseconds: number): number {
  // Catch.
  if (!RocketIs.number(milliseconds)) {
    return;
  }

  return convertMillisecondsToMinutes(milliseconds) / 60;
}

/**
 * Convert milliseconds into minutes.
 *
 * @param milliseconds - The milliseconds to convert.
 */
function convertMillisecondsToMinutes(milliseconds: number): number {
  // Catch.
  if (!RocketIs.number(milliseconds)) {
    return;
  }

  return convertMillisecondsToSeconds(milliseconds) / 60;
}

/**
 * Convert milliseconds into seconds.
 *
 * @param milliseconds - The milliseconds to convert.
 */
function convertMillisecondsToSeconds(milliseconds: number): number {
  // Catch.
  if (!RocketIs.number(milliseconds)) {
    return;
  }

  return milliseconds / 1000;
}

/**
 * Convert milliseconds into weeks.
 *
 * @param milliseconds - The milliseconds to convert.
 */
function convertMillisecondsToWeeks(milliseconds: number): number {
  // Catch.
  if (!RocketIs.number(milliseconds)) {
    return;
  }

  return convertMillisecondsToDays(milliseconds) / 7;
}

/**
 * Convert minutes into milliseconds.
 *
 * @param minutes - The minutes to convert.
 */
function convertMinutesToMilliseconds(minutes: number): number {
  // Catch.
  if (!RocketIs.number(minutes)) {
    return;
  }

  return minutes * 60 * 1000;
}

/**
 * Convert seconds into milliseconds.
 *
 * @param seconds - The seconds to convert.
 */
function convertSecondsToMilliseconds(seconds: number): number {
  // Catch.
  if (!RocketIs.number(seconds)) {
    return;
  }

  return seconds * 1000;
}

/**
 * Convert to JSON and return a usable object.
 *
 * @param json - The JSON to convert.
 */
function convertToJSON(json: any): any {
  if (RocketIs.json(json)) {
    return json;
  } else {
    return JSON.parse(json);
  }
}

/**
 * Convert weeks into milliseconds.
 *
 * @param hours - The hours to convert.
 */
function convertWeeksToMilliseconds(weeks: number): number {
  // Catch.
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
  toJSON: convertToJSON,
  weeksToMilliseconds: convertWeeksToMilliseconds
};
