import { useState } from "react";

const SimpleInput = (props) => {
  // name
  const [userName, setUserName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  // name validation
  const enteredNameIsValid = userName.trim() !== "";
  const nameInputIsInvalid = enteredNameTouched && !enteredNameIsValid;

  // email
  const [userEmail, setUserEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  // email validation
  const enteredEmailIsValid = userEmail.includes("@");
  const emailInputIsInvalid = enteredEmailTouched && !enteredEmailIsValid;

  // form
  let formIsValid = false;

  // form validation
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  // name
  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true);
  };

  // email
  const emailChangeHandler = (event) => {
    setUserEmail(event.target.value);
  };
  const emailInputBlurHandler = () => {
    setEnteredEmailTouched(true);
  };

  // form
  const formSubmitHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);

    if (!enteredNameIsValid && !enteredNameIsValid) {
      return;
    }
    console.log(userName, userEmail);
    setUserName("");
    setUserEmail("");
    setEnteredNameTouched(false);
    setEnteredEmailTouched(false);
  };

  // name: styles
  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  // email: styles
  const emailInputClasses = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={userNameChangeHandler}
          value={userName}
          onBlur={nameInputBlurHandler}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your E-mail</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          value={userEmail}
          onBlur={emailInputBlurHandler}
        />
        {emailInputIsInvalid && (
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
