import { useState } from "react";

import { styled } from "styled-components";
import ButtonV2 from "./Button";
import Input from "./Input";

const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  //   label.invalid {
  //     color: #f87171;
  //   }

  //   input.invalid {
  //     color: #ef4444;
  //     border-color: #f73f3f;
  //     background-color: #fed2d2;
  //   }
  return (
    <div id="auth-inputs">
      <ControlContainer>
        {/* <p>
          <Label className={`label ${emailNotValid ? "invalid" : ""}`}>
            Email
          </Label>
          <Input
            type="email"
            style={{
              backgroundColor: emailNotValid ? "#fed2d2" : "#d1d5db",
            }}
            className={emailNotValid ? "invalid" : undefined}
            onChange={(event) => handleInputChange("email", event.target.value)}
          />
        </p> */}
        <p>
          <Input
            label="Password"
            invalid={passwordNotValid}
            type="password"
            className={passwordNotValid ? "invalid" : undefined}
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
          />
          {/* <Label $invalid={passwordNotValid}>Password</Label>
          <Input
            type="password"
            className={passwordNotValid ? "invalid" : undefined}
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
          /> */}
        </p>
      </ControlContainer>
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <ButtonV2 onClick={handleLogin}>Sign In</ButtonV2>
      </div>
    </div>
  );
}
