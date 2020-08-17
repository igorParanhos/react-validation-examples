import { cleanEmptyStringArray } from './utils';

export const string = {
  isNotEmpty: (value) => (value.length > 0),
  isDigit: (value) => (!value.match(/\D/g)),
  hasWordCountEqualTo: (wordCount) => (value) => (cleanEmptyStringArray(value.split(' ')).length >= wordCount),
}

export const select = {
  isSelected: (value) => (!!value.length),
}

export const radio = {
  isSelected: (value) => (!!value),
}
