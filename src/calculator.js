// import { click } from "@testing-library/user-event/dist/click";
import { useState } from "react";
function Calculator() {
  const [NumberOne, setInputOne] = useState("0");
  const [NumberTwo, setInputTwo] = useState("0");
  let [Operation, setOperation] = useState("+");
  const [Result, setResult] = useState("");
  function Add() {
    return NumberOne + NumberTwo;
  }
  setOperation = Add();
  return (
    <div className="calculator">
      <div className="panel">
        <p>NumberOne {NumberOne}</p>
        <div className="numbers">
          <button onClick={(target) => setInputOne("1")}>1</button>
          <button onClick={(event) => setInputOne("2")}>2</button>
          <button onClick={(event) => setInputOne("3")}>3</button>
          <button onClick={(event) => setInputOne("4")}>4</button>
          <button onClick={(event) => setInputOne("5")}>5</button>
          <button onClick={(event) => setInputOne("6")}>6</button>
          <button onClick={(event) => setInputOne("7")}>7</button>
          <button onClick={(event) => setInputOne("8")}>8</button>
          <button onClick={(event) => setInputOne("9")}>9</button>
          <button onClick={(event) => setInputOne("0")}>0</button>
          <button>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>Operation{Operation}</p>
        <div className="numbers">
          <button onClick={setOperation}>+</button>
          <button>-</button>
          <button>*</button>
          <button>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>InputTwo{NumberTwo}</p>
        <div className="numbers">
          <button onClick={() => setInputTwo("1")}>1</button>
          <button onClick={() => setInputTwo("2")}>2</button>
          <button onClick={() => setInputTwo("3")}>3</button>
          <button onClick={() => setInputTwo("4")}>4</button>
          <button onClick={() => setInputTwo("5")}>5</button>
          <button onClick={() => setInputTwo("6")}>6</button>
          <button onClick={() => setInputTwo("7")}>7</button>
          <button onClick={() => setInputTwo("8")}>8</button>
          <button onClick={() => setInputTwo("9")}>9</button>
          <button onClick={() => setInputTwo("0")}>0</button>
          <button>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>Result {Result}</p>
        <div>
          <button onClick={() => setResult(Add)}>=</button>
        </div>
      </div>
    </div>
  );
}
export default Calculator;
