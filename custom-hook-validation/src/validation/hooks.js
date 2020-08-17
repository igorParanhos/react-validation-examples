import { useState } from "react";

export const useField = (initialValue, validationRules) => {
  const [value, setValue] = useState(initialValue);
  const [touched, setTouched] = useState(false);

  if (!!value && !touched)
    setTouched(true)

  const validationErrors = touched ? validationRules
    .filter((rule) => !rule.fn(value)).map((rule) => rule.errorMessage) : []

  const props = { style: {} }

  return [value, setValue, validationErrors, touched, props]
}