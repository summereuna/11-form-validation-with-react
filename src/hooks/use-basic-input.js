import { useState } from "react";

const useBasicInput = (valueValidate) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };
  const valueBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  const isValueValid = valueValidate(enteredValue);

  const hasError = !isValueValid && isTouched;

  return {
    enteredValue,
    isValueValid,
    hasError,
    valueChangeHandler,
    valueBlurHandler,
    reset,
  };
};

export default useBasicInput;
