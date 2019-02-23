/**
 * @desc Global Form Validations.
 * @param {*} values
 */

export const required = (value) => (value ? undefined : 'Required');
// export const required = (value) => (value ? undefined || '' : 'Required');

const maxLength = (max) => (value) =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
export const maxLength50 = maxLength(50);
export const maxLength14 = maxLength(14);
export const minLength = (min) => (value) =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
export const minLength6 = minLength(6);
const number = (value) =>
  value && isNaN(Number(value)) ? 'Must be a number' : undefined;
const minValue = (min) => (value) =>
  value && value < min ? `Must be at least ${min}` : undefined;
const minValue18 = minValue(18);
export const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;
const alphaNumeric = (value) =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Only alphanumeric characters'
    : undefined;
export const phoneNumber = (value) =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? 'Invalid phone number, must be 10 digits'
    : undefined;

    
export const phoneNumberUK = (value) =>
value && !/^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/i.test(value)
  ? 'Invalid phone number.'
  : undefined;


export const date = (value) =>
// YYYY/MM/DD - value && !/^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/i.test(value)
// YYYY/MM/DD HH:mm AM/PM -  value && !/^\d{4}\/[0-1][0-2]\/[0-3]\d\s([0-1][0-9]|2[0-3]):[0-5]\d\s['AM'|'PM']{2}$/i.test(value)
// MM/DD/YYYY HH:mm AM/PM
  value && !/^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/[0-9]{4}\s([0-1][0-9]|2[0-3]):[0-5]\d\s['AM'|'PM']{2}$/i.test(value)
    ? 'Not valid Date'
    : undefined;

// const validate = (values) => {
//   const errors = {};
//   if (!values.currentPassword) {
//     errors.currentPassword = 'Please enter current password';
//   }
//   if (!values.newPassword) {
//     errors.newPassword = 'Please enter new password';
//   }
//   if (!values.confirmNewPassword) {
//     errors.confirmNewPassword = 'Please confirm new password';
//   } else if (values.confirmNewPassword !== values.newPassword) {
//     errors.confirmNewPassword = 'Password mismatched';
//   }
//   return errors;
// };
// export default validate;
