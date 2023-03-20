/* eslint-disable no-unreachable-loop */
// https://github.com/vue-generators/vue-form-generator/blob/master/src/utils/validators.js

// TODO Add ObjectID Validation...
import mongoose from 'mongoose';

const errorMessages = {
  fieldIsRequired: 'This field is required!',
  invalidFormat: 'Invalid format!',

  invalidObjectID: 'This is invalid object ID !',

  numberTooSmall: 'The number is too small! Minimum: {0}',
  numberTooBig: 'The number is too big! Maximum: {0}',
  invalidNumber: 'Invalid number',

  textTooSmall: 'The length of text is too small! Current: {0}, Minimum: {1}',
  textTooBig: 'The length of text is too big! Current: {0}, Maximum: {1}',
  thisNotText: 'This is not a text!',

  thisNotArray: 'This is not an array!',
  arrayTooSmall: 'The length of array is too small! Current: {0}, Minimum: {1}',
  arrayTooBig: 'The length of array is too big! Current: {0}, Maximum: {1}',

  selectMinItems: 'Select minimum {0} items!',
  selectMaxItems: 'Select maximum {0} items!',

  thisNotBoolean: 'This is not an boolean!',

  invalidDate: 'Invalid date!',
  invalidDateFormat: 'Invalid date format! Expected format: yyyy-mm-dd',
  invalidISODate: 'Invalid ISO date!',
  invalidISODateFormat: 'Invalid date time format! Expected format: yyyy-mm-ddThh:mm:ss.sssZ',
  dateIsEarly: 'The date is too early! Current: {0}, Minimum: {1}',
  dateIsLate: 'The date is too late! Current: {0}, Maximum: {1}',

  invalidEmail: 'Invalid e-mail address!',
  invalidURL: 'Invalid URL!',
  invalidIP: 'Invalid IP address!',
};

function formatMessage(text) {
  if (text !== null && arguments.length > 1) {
    for (let i = 1; i < arguments.length; i++) {
      // eslint-disable-next-line prefer-rest-params
      text = text.replace(`{${i - 1}}`, arguments[i]);
    }
  }

  return text;
}

const rules = {
  isEmpty(value) {
    // checks if `value` is `null` or `undefined` or empty string
    return value === null || value === undefined || value === '';
  },

  isFiniteNumber(value) {
    // eslint-disable-next-line no-restricted-globals
    return typeof value === 'number' && isFinite(value); // To exclude `Infinity`, `-Infinity`, and `NaN` which are classified as numbers
  },

  checkEmpty(value, field) {
    if (rules.isEmpty(value)) {
      if (field && field.required) {
        return errorMessages.fieldIsRequired;
      }
      return '';
    }

    return null;
  },
};

export default {
  isNumber(value, field = {}) {
    field = field || {};
    const errorMessage = rules.checkEmpty(value, field);

    if (errorMessage !== null) {
      return errorMessage || null; // if empty returning ""
    }
    if (!rules.isFiniteNumber(value)) {
      if (!field.required) {
        return null;
      }

      return errorMessages.invalidNumber;
    }
    if (rules.isFiniteNumber(field.min) && value <= field.min) {
      return formatMessage(errorMessages.numberTooSmall, field.min);
    }
    if (rules.isFiniteNumber(field.max) && value >= field.max) {
      return formatMessage(errorMessages.numberTooBig, field.max);
    }

    return null;
  },

  isTimestamp(value, field = {}) {
    field = field || {};
    const errorMessage = rules.checkEmpty(value, field);

    if (errorMessage !== null) {
      return errorMessage || null; // if empty returning ""
    }
    // timestamp can be a a type of string. In that case convert it to number
    value = +value;
    if (!rules.isFiniteNumber(value)) {
      return errorMessages.invalidDate;
    }
    if (rules.isFiniteNumber(field.min) && value < field.min) {
      return formatMessage(errorMessages.dateIsEarly, value, field.min);
    }
    if (rules.isFiniteNumber(field.max) && value > field.max) {
      return formatMessage(errorMessages.dateIsLate, value, field.max);
    }

    return null;
  },

  isDate(value, field = {}) {
    field = field || {};
    const errorMessage = rules.checkEmpty(value, field);

    if (errorMessage !== null) {
      return errorMessage || null; // if empty returning ""
    }
    const regEx = /^\d{4}-\d{2}-\d{2}$/;

    if (!value.match || !value.match(regEx)) {
      return errorMessages.invalidDateFormat;
    }
    const d = new Date(value);
    const dNum = d.getTime();

    if ((!dNum && dNum !== 0) || d.toISOString().slice(0, 10) !== value) {
      return errorMessages.invalidDate; // NaN value, Invalid date
    }

    return null;
  },

  isISOFormat(value, field = {}) {
    field = field || {};
    const errorMessage = rules.checkEmpty(value, field);

    if (errorMessage !== null) {
      return errorMessage || null; // if empty returning ""
    }
    const regEx =
      /^(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))$/;

    if (!value.match || !value.match(regEx)) {
      return errorMessages.invalidISODateFormat;
    }
    const d = new Date(value);
    const dNum = d.getTime();

    if ((!dNum && dNum !== 0) || d.toISOString().slice(0, 19) !== value.slice(0, 19)) {
      return errorMessages.invalidISODate; // NaN value, Invalid date
    }

    return null;
  },

  isString(value, field = {}) {
    const errorMessage = rules.checkEmpty(value, field);

    if (errorMessage !== null) {
      return errorMessage || null; // if empty returning ""
    }
    if (typeof value !== 'string') {
      return errorMessages.thisNotText;
    }
    const len = value.length;

    if (rules.isFiniteNumber(field.min) && len < field.min) {
      return formatMessage(errorMessages.textTooSmall, len, field.min);
    }
    if (rules.isFiniteNumber(field.max) && len > field.max) {
      return formatMessage(errorMessages.textTooBig, len, field.max);
    }

    return null;
  },

  isObjectID(value, field = {}) {
    const errorMessage = rules.checkEmpty(value, field);

    if (errorMessage !== null) {
      return errorMessage || null; // if empty returning ""
    }
    if (!mongoose.Types.ObjectId.isValid(value)) {
      return errorMessages.invalidObjectID;
    }

    return null;
  },

  isPattern(value, field = {}) {
    const errorMessage = rules.checkEmpty(value, field);

    if (errorMessage !== null) {
      return errorMessage || null; // if empty returning ""
    }
    if (!rules.isEmpty(field.pattern)) {
      const reg = new RegExp(field.pattern);

      if (!reg.test(value)) {
        return errorMessages.invalidFormat;
      }
    }

    return null;
  },

  isBoolean(value, field = {}) {
    const errorMessage = rules.checkEmpty(value, field);

    if (errorMessage !== null) {
      return errorMessage || null; // if empty returning ""
    }
    if (typeof value !== 'boolean') {
      return errorMessages.thisNotBoolean;
    }

    return null;
  },

  isEmail(value, field = {}) {
    const errorMessage = rules.checkEmpty(value, field);

    if (errorMessage !== null) {
      return errorMessage || null; // if empty returning ""
    }
    const len = value.length;

    if (rules.isFiniteNumber(field.min) && len < field.min) {
      return formatMessage(errorMessages.textTooSmall, len, field.min);
    }
    if (rules.isFiniteNumber(field.max) && len > field.max) {
      return formatMessage(errorMessages.textTooBig, len, field.max);
    }
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line no-useless-escape

    if (!reg.test(value)) {
      return errorMessages.invalidEmail;
    }

    return null;
  },

  isUrl(value, field = {}) {
    const errorMessage = rules.checkEmpty(value, field);

    if (errorMessage !== null) {
      return errorMessage || null; // if empty returning ""
    }
    const reg = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g; // eslint-disable-line no-useless-escape

    if (!reg.test(value)) {
      return errorMessages.invalidURL;
    }

    return null;
  },

  isArray(value, field = {}) {
    field = field || {};
    const errorMessage = rules.checkEmpty(value, field);

    if (errorMessage !== null) {
      return errorMessage || null; // if empty returning ""
    }
    if (value.constructor.name !== 'Array') {
      return errorMessages.thisNotArray;
    }
    const len = value.length;

    if (rules.isFiniteNumber(field.min) && len < field.min) {
      return formatMessage(errorMessages.arrayTooSmall, len, field.min);
    }
    if (rules.isFiniteNumber(field.min) && len > field.max) {
      return formatMessage(errorMessages.arrayTooBig, len, field.max);
    }

    return null;
  },

  isIP(value, field = {}) {
    const errorMessage = rules.checkEmpty(value, field);

    if (errorMessage !== null) {
      return errorMessage || null; // if empty returning ""
    }
    // /* Match IPv4 address */
    // /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/
    // /* Match IPv6 address */
    // /(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/
    // /* Match both IPv4, IPv6 addresses */
    const reg =
      /((^\s*((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*$)|(^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$))/; // eslint-disable-line no-useless-escape

    if (!reg.test(value)) {
      return errorMessages.invalidIP;
    }

    return null;
  },

  isEmptyObject(obj) {
    // Because Object.keys(new Date()).length === 0;
    // we have to do some additional check
    // return Object.keys(obj).length === 0 && obj.constructor === Object;

    // fastest for an empty object
    // eslint-disable-next-line guard-for-in
    for (const p in obj) {
      return false;
    }

    return true;
  },

  isObject(obj) {
    const val = typeof obj === 'object' && obj !== null;

    return val ? null : 'object is not type of object';
  },
};
