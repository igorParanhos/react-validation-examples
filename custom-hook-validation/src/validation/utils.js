export const checkValueAgainstRules = (value, validationRules) =>
  validationRules.reduce((initial, fn) => initial && fn(value), true);

export const cleanEmptyStringArray = stringArray =>
  stringArray.filter(word => !!word && word !== '')
