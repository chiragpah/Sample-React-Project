import "./styles.css";
import Header from "./Components/Header";
import UserInput from "./Components/UserInput";
import Result from "./Components/Result";
import { useState } from "react";
export default function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 2000,
    expectedReturn: 6,
    duration: 10,
  });
  const inputIsValid = userInput.duration >= 1;
  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }
  return (
    <div className="App">
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {inputIsValid && <Result input={userInput} />}
      {!inputIsValid && <p className="center">Please Enter Valid Input Data</p>}
    </div>
  );
}
