import useBasicInput from "../hooks/use-basic-input";

const BasicForm = (props) => {
  const {
    enteredValue: enteredFirstName,
    isValueValid: isFirstNameValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    valueBlurHandler: firstNameBlurHandler,
    reset: firstNameInputReset,
  } = useBasicInput((enteredValue) => enteredValue.trim() !== "");

  const {
    enteredValue: enteredLastName,
    isValueValid: isLastNameValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    valueBlurHandler: lastNameBlurHandler,
    reset: lastNameInputReset,
  } = useBasicInput((enteredValue) => enteredValue.trim() !== "");

  const {
    enteredValue: enteredEmail,
    isValueValid: isEmailValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: emailInputReset,
  } = useBasicInput((enteredValue) => enteredValue.includes("@"));

  let formIsValid = false;

  if (isFirstNameValid && isLastNameValid && isEmailValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }
    console.log(enteredFirstName, enteredLastName, enteredEmail);

    firstNameInputReset();
    lastNameInputReset();
    emailInputReset();
  };

  const firstNameInputClasses = firstNameHasError
    ? "form-control invalid"
    : "form-control";

  const lastNameInputClasses = lastNameHasError
    ? "form-control invalid"
    : "form-control";
  const emailInputClasses = emailHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={firstNameInputClasses}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={enteredFirstName}
          />
          {firstNameHasError && (
            <p className="error-text">First name must not be empty.</p>
          )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastName}
          />
          {lastNameHasError && (
            <p className="error-text">Last name must not be empty.</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailHasError && (
          <p className="error-text">Please enter a valid E-mail.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
