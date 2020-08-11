import { cleanEmptyStringArray } from './utils';

export const string = {
  isNotEmpty: v => v.length > 0,
  hasWordCountEqualTo: wordCount => v => cleanEmptyStringArray(v.split(' ')).length >= wordCount
}

export const select = {
  isSelected: v => !!v.length,
}

export const radio = {
  isSelected: v => !!v,
}
