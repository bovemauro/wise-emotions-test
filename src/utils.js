import { isNil, isEmpty } from 'ramda';

/**
 * Method to capitalize first letter of a word
 *
 * @param {string} word
 * @returns {string} capitalizedWord
 */
export const capitalize = (word) => {
  return word.charAt(0).toUpperCase() + word.substring(1);
};

/**
 * Check if value is null, undefined or empty
 *
 * @param {any} val
 * @returns {boolean}
 */
export const isNilOrEmpty = (val) => {
  return isNil(val) || isEmpty(val);
};
