import { html5InputType } from './enum';

const operater = {
  EQUAL: {
    operater: '=',
    value: '=',
  },
  DIFFERENT: {
    operater: '<>',
    value: '<>',
  },
  GREAT_THAN: {
    operater: '>',
    value: '>',
  },
  LESS_THAN: {
    operater: '<',
    value: '<',
  },
  GREAT_THAN_OR_EQUAL: {
    operater: '>=',
    value: '>=',
  },
  LESS_THAN_OR_EQUAL: {
    operater: '<=',
    value: '<=',
  },
  IS_NOT_NULL: {
    operater: `N'est pas vide`,
    value: `N'est pas vide`,
  },
  IS_NULL: {
    operater: 'Est vide',
    value: 'Est vide',
  },
  NOT_IN: {
    operater: 'Contient',
    value: 'Contient',
  },
  IN: {
    operater: 'Ne contient pas',
    value: 'Ne contient pas',
  },
};

const operateurList = [
  {
    html5InputType: html5InputType.Search,
    default: {
      11: operater.IN.value,
      12: operater.NOT_IN.value,
      13: operater.IS_NULL.value,
      14: operater.IS_NOT_NULL.value,
    },
  },
  {
    html5InputType: html5InputType.None,
    number: { 1: operater.EQUAL.value, 2: operater.DIFFERENT.value },
    default: {
      11: operater.IN.value,
      12: operater.NOT_IN.value,
      13: operater.IS_NULL.value,
      14: operater.IS_NOT_NULL.value,
    },
  },
  {
    html5InputType: html5InputType.Number,
    default: { 1: operater.EQUAL.value, 2: operater.DIFFERENT.value },
  },
  {
    html5InputType: html5InputType.Datetime,
    default: {
      1: operater.EQUAL.value,
      2: operater.DIFFERENT.value,

      5: operater.GREAT_THAN.value,
      6: operater.GREAT_THAN_OR_EQUAL.value,
      7: operater.LESS_THAN.value,
      8: operater.LESS_THAN_OR_EQUAL.value,
    },
  },
  {
    html5InputType: html5InputType.DatetimeLocal,
    default: {
      1: operater.EQUAL.value,
      2: operater.DIFFERENT.value,

      5: operater.GREAT_THAN.value,
      6: operater.GREAT_THAN_OR_EQUAL.value,
      7: operater.LESS_THAN.value,
      8: operater.LESS_THAN_OR_EQUAL.value,
    },
  },
  {
    html5InputType: html5InputType.Radio,
    default: {
      1: operater.EQUAL.value,
      2: operater.DIFFERENT.value,
    },
  },
  {
    html5InputType: html5InputType.CheckBox,
    default: {
      1: operater.EQUAL.value,
      2: operater.DIFFERENT.value,
    },
  },
  {
    html5InputType: html5InputType.Text,
    number: { 1: operater.EQUAL.value, 2: operater.DIFFERENT.value },
    default: {
      1: operater.EQUAL.value,
      2: operater.DIFFERENT.value,
      11: operater.IN.value,
      12: operater.NOT_IN.value,
      13: operater.IS_NULL.value,
      14: operater.IS_NOT_NULL.value,
    },
  },
  {
    html5InputType: html5InputType.Time,
    default: {
      5: operater.GREAT_THAN.value,
      6: operater.GREAT_THAN_OR_EQUAL.value,
      7: operater.LESS_THAN.value,
      8: operater.LESS_THAN_OR_EQUAL.value,
      13: operater.IS_NULL.value,
      14: operater.IS_NOT_NULL.value,
    },
  },
];

export default operateurList;
