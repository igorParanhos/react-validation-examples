export const checkValueAgainstRules = (value, locks) => locks.reduce((initial, fn) => initial && fn(value), true);

export const cleanEmptyStringArray = stringArray =>
  stringArray.filter(word => !!word && word !== '')
