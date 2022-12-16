import { ITimesheet } from 'src/interfaces/timesheet';

/**
 * Text input validation
 * @param {String} text: the value of inputs
 * @returns {Boolean} return if the value is match with condition
 */
const validationText = (text: string): boolean => {
  const specialCharacters = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  return specialCharacters.test(text);
};

/**
 * Validation Timsheet
 * @param {ITimesheet} timesheet: timesheet value
 * @returns {Object | null} return object containing error message or null if no error
 */
export const validationTimesheet = (timesheet: ITimesheet) => {
  if (isNaN(timesheet.hour) || timesheet.hour < 0 || timesheet.hour > 16) {
    return { hour: 'Invalid hours', comment: '' };
  }

  const validateComments = validationText(timesheet.comment);
  if (validateComments) {
    return { hour: '', comment: 'Invalid comment' };
  }

  return null;
};
