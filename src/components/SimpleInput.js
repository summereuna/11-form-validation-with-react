import { useState } from "react";

const SimpleInput = (props) => {
  const [userName, setUserName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = userName.trim() !== "";
  const nameInputIsInvalid = enteredNameTouched && !enteredNameIsValid;

  let formIsValid = false;

  //전체 폼 폼 유효성 설정
  if (enteredNameIsValid) {
    formIsValid = true;
  }

  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }
    console.log(userName);
    setUserName("");
    setEnteredNameTouched(false);
  };

  //유효성 검증에 따라 스타일 변경
  const nameInputClasses = nameInputIsInvalid
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
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
