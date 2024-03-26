import "./App.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

function App() {
  const [principle, setPrinciple] = useState(0);
  const [rate, setRate] = useState(0);
  const [year, setYear] = useState(0);
  const [interest, setInterest] = useState(0);

  //conditionally render
  const [isPrinciple, setIsPrinciple] = useState(true);
  const [isRate, setIsRate] = useState(true);
  const [isYear, setIsYear] = useState(true);

  const validate = (e) => {
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
    //regular expression
    // console.log(!!value.match(/^[0-9]*$/));
    if (!!value.match(/^[0-9]*$/)) {
      if (name == "principle") {
        setPrinciple(value);
        setIsPrinciple(true);
      } else if (name == "rate") {
        setRate(value);
        setIsRate(true);
      } else {
        setYear(value);
        setIsYear(true);
      }
    } else {
      if (name == "principle") {
        setPrinciple(value);

        setIsPrinciple(false);
      } else if (name == "rate") {
        setRate(value);

        setIsRate(false);
      } else {
        setYear(value);

        setIsYear(false);
      }
    }
  };
  //function to reset
  const handleReset = () => {
    setPrinciple(0);
    setRate(0);
    setYear(0);
    setIsPrinciple(true);
    setIsYear(true);
    setIsRate(true);
    setInterest(0);
  };

  //function to calculate si

  const handleCalculate = () => {
    setInterest((principle * year * rate) / 100);
  };

  return (
    <>
      <div className="main">
        <div className="sub">
          <h1>Simpe Interest App</h1>
          <p>Calculate your simple interest </p>

          <div className="d-flex w-100 justify-content-center align-items-center flex-column result rounded shadow">
            <h1>₹ {interest}</h1>
            <p>Total simple interest</p>
          </div>

          <form action="" className="mt-5">
            <TextField
              id="outlined-basic"
              name="principle"
              label="₹ Principal Amount"
              value={principle || ""}
              variant="outlined"
              className="w-100"
              onChange={(e) => validate(e)}
            />
            {!isPrinciple && <p className="text-danger">Invalid Input</p>}{" "}
            <TextField
              id="outlined-basic"
              name="rate"
              value={rate || ""}
              label="Rate of Interest (p.a) %"
              variant="outlined"
              className="w-100 mt-3"
              onChange={(e) => validate(e)}
            />
            {!isRate && <p className="text-danger">Invalid Input</p>}{" "}
            <TextField
              id="outlined-basic"
              name="year"
              value={year || ""}
              label="Year (Yr)"
              variant="outlined"
              className="w-100 mt-3"
              onChange={(e) => validate(e)}
            />
            {!isYear && <p className="text-danger">Invalid Input</p>}{" "}
            <div className="d-flex mt-3 gap-5">
              <Button
                onClick={handleCalculate}
                variant="contained"
                color="success"
                className="w-50 p-3"
                disabled={isPrinciple && isRate && isYear ? false : true}
              >
                Calculate
              </Button>
              <Button
                onClick={handleReset}
                variant="outlined"
                color="primary"
                className="w-50 p-3"
              >
                Reset
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
