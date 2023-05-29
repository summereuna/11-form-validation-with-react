import { useReducer } from "react";

const initialInputState = { value: "", isTouched: false };

const inputStateReducer = (preState, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: preState.isTouched };
    //isTouched는 true로 설정하지 않음: 키를 입력 하는 중에 입력을 마치는 것이 아니기 때문에
    //따라서 그냥 이전 상태로 설정
  }
  if (action.type === "BLUR") {
    return { value: preState.value, isTouched: true };
    //value 값도 그냥 이전 값으로 하면 된다. 키 입력 마다 받고 있기 때문에
  }
  if (action.type === "RESET") {
    return { value: "", isTouched: false };
  }
  return { value: "", isTouched: false };
};

const useBasicInput = (valueValidate) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueChangeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };
  const inputBlurHandler = () => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  const isValueValid = valueValidate(inputState.value);

  const hasError = !isValueValid && inputState.isTouched;

  return {
    enteredValue: inputState.value,
    isValueValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useBasicInput;
