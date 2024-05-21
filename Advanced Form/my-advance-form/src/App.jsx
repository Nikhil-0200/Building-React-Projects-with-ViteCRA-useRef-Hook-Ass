import { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  let nameRef = useRef(null);
  let ageRef = useRef(null);
  let mobileRef = useRef(null);
  let checkRef = useRef(null);

  let name1Ref = useRef(null);
  let age1Ref = useRef(null);
  let userId1Ref = useRef(null);
  let pass1Ref = useRef(null);
  let email1Ref = useRef(null);

  let [nameError, setNameError] = useState("");
  let [ageError, setAgeError] = useState("");
  let [userError, setUserError] = useState("");
  let [passwordError, setPasswordError] = useState("");

  useEffect(()=>{
    nameRef.current.focus()
  }, [])

  function handleKeyStoke(e, ref){
    if(e.key === "Enter" || e.key === "Tab"){
      e.preventDefault()
      ref.current.focus()
    }

  }

  function validateName() {
    if (name1Ref.current.value === "") {
      setNameError("Name Input Filed Is Empty");
    } else if (name1Ref.current.value.length >= 10) {
      setNameError("Name Cannot Be Greater Then 10");
    } else {
      setNameError("");
    }
  }

  function validateAge() {
    if (age1Ref.current.value === "") {
      setAgeError("Age Input Filed Is Empty");
    } else if (age1Ref.current.value < 0) {
      setAgeError("Age Cannot Be Negative");
    } else {
      setAgeError("");
    }
  }

  function validateUserId() {
    if (userId1Ref.current.value === "") {
      setUserError("User Id Input Filed Is Empty");
    } else if (userId1Ref.current.value.length >= 10) {
      setUserError("User Id Cannot Be Greater Then 10");
    } else {
      setUserError("");
    }
  }

  function validatePass() {
    const userPassword = pass1Ref.current.value;
    const regexPassword =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (userPassword === "") {
      setPasswordError("Password Cannot Be Empty");
    } else if (!regexPassword.test(userPassword)) {
      setPasswordError(
        "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a digit, and a special character."
      );
    } else {
      setPasswordError("");
    }
  }

  function validateEmail() {}

  return (
    <div>
      <div>
        <h1>Dynamic Form Input Focus</h1>
        <input type="text" placeholder='Enter Name' ref={nameRef} onKeyDown={(e)=> handleKeyStoke(e, ageRef )}/>
        <br />
        <input type="text" placeholder='Enter Age' ref={ageRef} onKeyDown={(e)=> handleKeyStoke(e, mobileRef)}/>
        <br />
        <input type="number" placeholder='Enter Mobile No.' ref={mobileRef} onKeyDown={(e)=> handleKeyStoke(e, checkRef )}/>
        <br />
        <input type="checkbox" ref={checkRef} onKeyDown={(e)=> handleKeyStoke(e, nameRef)}/>
        <hr />
      </div>

      <div>
        <h1>Real-time Input Validation</h1>
        <form>
          <label>Name: </label>
          <input
            type="text"
            placeholder="Enter Name"
            ref={name1Ref}
            onChange={validateName}
          />
          <span>{nameError}</span>
          <br />
          <label>Age: </label>
          <input
            type="number"
            placeholder="Enter Age"
            ref={age1Ref}
            onChange={validateAge}
          />
          <span>{ageError}</span>
          <br />
          <label>User ID: </label>
          <input
            type="number"
            placeholder="Enter User Id"
            ref={userId1Ref}
            onChange={validateUserId}
          />
          <span>{userError}</span>
          <br />
          <label>Password: </label>
          <input
            type="password"
            placeholder="Enter Password"
            ref={pass1Ref}
            onChange={validatePass}
          />
          <span>{passwordError}</span>
          <br />
        </form>
        <hr />
      </div>
    </div>
  );
}

export default App;
