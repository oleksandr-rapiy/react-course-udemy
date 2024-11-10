import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

const DEFAULT_INPUT = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};
function App() {
  const [userInput, setUserInput] = useState(DEFAULT_INPUT);

  function handleChange(key, value) {
    setUserInput((prev) => {
      return {
        ...prev,
        [key]: +value,
      };
    });
  }

  const isValidData = userInput.duration >= 1;

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!isValidData && (
        <p className="center">Please enter a duration greater then zero.</p>
      )}
      {isValidData && <Results investmentData={userInput} />}
    </>
  );
}

export default App;
