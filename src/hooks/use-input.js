//인풋 값, 인풋 창 건드려 졌는지 다룸
//유연해야 하기 때문에 확실한 검증 로직은 외부에서 훅으로 전달되어야 함

import { useState } from "react";

const useInput = (validateValue) => {
  // input
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  // input validation
  //🌟검증 로직은 훅이 사용되는 부분에서 결정헤야 커스텀 훅 유연하게 사용 가능: 훅 인자로 받기
  const valueIsValid = validateValue(enteredValue);
  // enteredName.trim() !== "";
  // enteredEmail.includes("@"));

  // input is invalid
  const hasError = !valueIsValid && isTouched;

  // value change handler
  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  //input blur handler
  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const resetState = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    resetState,
    inputBlurHandler,
  };
};

export default useInput;
