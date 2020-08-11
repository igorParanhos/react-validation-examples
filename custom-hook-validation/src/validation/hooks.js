// Use case example
// const [value, setValue, validationErrors] = useValidtion([...validationRules])

import { useState } from "react";

export const useField = (initialValue, validationRules) => {
  const [value, setValue] = useState(initialValue);

  const validationErrors = validationRules.filter(r => !r.fn(value)).map(r => r.errorMessage)

  const props = { style: {} }

  return [value, setValue, validationErrors, props]
}