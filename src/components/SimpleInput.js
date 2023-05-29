import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  // name input
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    resetState: resetNameInput,
  } = useInput((value) => value.trim() !== "");
  //value 이용한 인라인 함수를 훅에 전달하면, value에 대해 위 함수를 호출한 결과가 반환되므로
  //밸리데이션 할 수 있음

  // email input
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    resetState: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  // form
  let formIsValid = false;

  // form validation
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  // form
  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid && !enteredEmailIsValid) {
      return;
    }

    console.log(enteredName, enteredEmail);
    resetNameInput();
    resetEmailInput();
  };

  // name: styles
  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  // email: styles
  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          value={enteredName}
          onBlur={nameBlurHandler}
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your E-mail</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          value={enteredEmail}
          onBlur={emailBlurHandler}
        />
        {emailInputHasError && (
          <p className="error-text">Please enter a valid E-mail.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
