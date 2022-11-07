import { useState } from "react";
function Calculator() {
  const [NumberOne, setInputOne] = useState("0");
  const [NumberTwo, setInputTwo] = useState("0");
  const [Operation, setOperation] = useState("+");
  let [Result, setResult] = useState("0");
  const [StoreResult, setStoreResult] = useState("");
  const multiNumber = (numberSetInput, number, newNum) => {
    if (number === "0") {
      // && number[1])!=='.')
      // && !number.includes(".")
      numberSetInput(newNum);
    } else {
      numberSetInput(number + newNum);
    }
  };

  const CalculateResult = () => {
    const allOperators = {
      "+": parseInt(NumberOne) + parseInt(NumberTwo),
      "-": parseInt(NumberOne) - parseInt(NumberTwo),
      "*": parseInt(NumberOne) * parseInt(NumberTwo),
      "÷": parseInt(NumberOne) / parseInt(NumberTwo),
    };

    setResult(allOperators[Operation]);
  };

  const Recall = () => {};
  //   setResult = () => {
  //     if (Result.length > 6) {
  //       Number.parseFloat(Result).toFixed(5);
  //     }
  //   };
  return (
    <div className="calculator">
      <div className="panel">
        <p>{NumberOne}</p>
        <div className="numbers">
          <button onClick={() => multiNumber(setInputOne, NumberOne, "1")}>
            1
          </button>
          <button onClick={() => multiNumber(setInputOne, NumberOne, "2")}>
            2
          </button>
          <button onClick={() => multiNumber(setInputOne, NumberOne, "3")}>
            3
          </button>
          <button onClick={() => multiNumber(setInputOne, NumberOne, "4")}>
            4
          </button>
          <button onClick={() => multiNumber(setInputOne, NumberOne, "5")}>
            5
          </button>
          <button onClick={() => multiNumber(setInputOne, NumberOne, "6")}>
            6
          </button>
          <button onClick={() => multiNumber(setInputOne, NumberOne, "7")}>
            7
          </button>
          <button onClick={() => multiNumber(setInputOne, NumberOne, "8")}>
            8
          </button>
          <button onClick={() => multiNumber(setInputOne, NumberOne, "9")}>
            9
          </button>
          <button onClick={() => multiNumber(setInputOne, NumberOne, "0")}>
            0
          </button>
          <button onClick={() => setInputOne("0")}> Clear</button>
          <button onClick={() => multiNumber(setInputOne, NumberOne, ".")}>
            .
          </button>
          <button onClick={() => StoreResult}>Recall</button>
        </div>
      </div>

      <div className="panel">
        <p>{Operation}</p>
        <div className="numbers">
          <button onClick={() => setOperation("+")}>+</button>
          <button onClick={() => setOperation("-")}>-</button>
          <button onClick={() => setOperation("*")}>*</button>
          <button onClick={() => setOperation("÷")}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{NumberTwo}</p>
        <div className="numbers">
          <button onClick={() => multiNumber(setInputTwo, NumberTwo, "1")}>
            1
          </button>
          <button onClick={() => multiNumber(setInputTwo, NumberTwo, "2")}>
            2
          </button>
          <button onClick={() => multiNumber(setInputTwo, NumberTwo, "3")}>
            3
          </button>
          <button onClick={() => multiNumber(setInputTwo, NumberTwo, "4")}>
            4
          </button>
          <button onClick={() => multiNumber(setInputTwo, NumberTwo, "5")}>
            5
          </button>
          <button onClick={() => multiNumber(setInputTwo, NumberTwo, "6")}>
            6
          </button>
          <button onClick={() => multiNumber(setInputTwo, NumberTwo, "7")}>
            7
          </button>
          <button onClick={() => multiNumber(setInputTwo, NumberTwo, "8")}>
            8
          </button>
          <button onClick={() => multiNumber(setInputTwo, NumberTwo, "9")}>
            9
          </button>
          <button onClick={() => multiNumber(setInputTwo, NumberTwo, "0")}>
            0
          </button>
          <button onClick={() => setInputTwo("0")}>Clear</button>
          <button onClick={() => multiNumber(setInputTwo, NumberTwo, ".")}>
            .
          </button>
          <button onClick={() => StoreResult}>Recall</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{Result}</p>
        <div>
          <button onClick={() => CalculateResult()}>=</button>
          <button onClick={() => setStoreResult}>Store Result</button>
        </div>
      </div>
    </div>
  );
}
export default Calculator;
