import "./App.css";
import Line1 from "./component/Line1";
import Line2 from "./component/Line2";
import Line3 from "./component/Line3";
import Line4 from "./component/Line4";
import Line5 from "./component/Line5";
import React, { useState } from "react";
export let ContextBox = React.createContext();

function App() {
  const [result, setResult] = useState("0");
  const [mode, setMode] = useState("");
  const [modeVar, setModeVar] = useState("");
  const [modePM, setModePM] = useState("");
  const [formula, setFormula] = useState("");
  const [equal, setEqual] = useState(0);
  const resultFloat = parseFloat(Number(result).toFixed(8));
  const resultString =
    resultFloat > 100000000
      ? resultFloat.toExponential()
      : `${resultFloat}`.includes(".") > 0
      ? `${resultFloat}`
      : `${resultFloat}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  function calculation(op) {
    if (modeVar !== "") {
      const preResult = formula;
      if (modeVar === "+") {
        if (op === "×" || op === "÷") {
          setEqual(formula);
        } else {
          setFormula(preResult + Number(result));
          setResult(`${preResult + Number(result)}`);
          setEqual(Number(result));
        }
      } else if (modeVar === "-") {
        if (op === "×" || op === "÷") {
          setEqual(formula);
        } else {
          setFormula(preResult - Number(result));
          setResult(`${preResult - Number(result)}`);
          setEqual(Number(result));
        }
      } else if (modeVar === "×") {
        if (op === "+" || op === "-" || op === "=") {
          if (modePM === "+") {
            setFormula(equal + preResult * Number(result));
            setResult(`${equal + preResult * Number(result)}`);
            setEqual(0);
            setModePM("");
          } else if (modePM === "-") {
            setFormula(equal - preResult * Number(result));
            setResult(`${equal - preResult * Number(result)}`);
            setEqual(0);
            setModePM("");
          } else {
            setFormula(preResult * Number(result));
            setResult(`${preResult * Number(result)}`);
            if (modePM === "") setEqual(Number(result));
          }
        } else {
          setFormula(preResult * Number(result));
          setResult(`${preResult * Number(result)}`);
          if (modePM === "") setEqual(Number(result));
        }
      } else if (modeVar === "÷") {
        if (op === "+" || op === "-" || op === "=") {
          if (modePM === "+") {
            setFormula(equal + preResult / Number(result));
            setResult(`${equal + preResult / Number(result)}`);
            setEqual(0);
            setModePM("");
          } else if (modePM === "-") {
            setFormula(equal - preResult / Number(result));
            setResult(`${equal - preResult / Number(result)}`);
            setEqual(0);
            setModePM("");
          } else {
            setFormula(preResult / Number(result));
            setResult(`${preResult / Number(result)}`);
            if (modePM === "") setEqual(Number(result));
          }
        } else {
          setFormula(preResult / Number(result));
          setResult(`${preResult / Number(result)}`);
          if (modePM === "") setEqual(Number(result));
        }
      } else if (modeVar === "=") {
        console.log(`preResult${preResult}`);
        if (modePM === "+") {
          setFormula(preResult + equal);
          setResult(`${preResult + equal}`);
        } else if (modePM === "-") {
          setFormula(preResult - equal);
          setResult(`${preResult - equal}`);
        } else if (modePM === "×") {
          setFormula(preResult * equal);
          setResult(`${preResult * equal}`);
        } else if (modePM === "÷") {
          setFormula(preResult / equal);
          setResult(`${preResult / equal}`);
        }
      }
    }
  }

  function handleResult(e) {
    if (resultString.length === 11) {
      return;
    } else {
      if (mode !== "") {
        setResult(`${e}`);
        setModeVar(mode);
        if (mode === "+" || mode === "-") setModePM(mode);
        setMode("");
      } else {
        if (result === "0") {
          setResult(`${e}`);
        } else {
          setResult(`${result}${e}`);
        }
      }
    }
  }

  function noWhite(op) {
    if (mode === op) {
      if (modeVar === "=") {
        if (modePM === "+" || "-" || "×" || "÷") return "round white";
        else return "round orange";
      } else return "round white";
    } else {
      return "round orange";
    }
  }

  return (
    <div className="App">
      <div className="calc">
        <h2>iPhone Calculator</h2>
        <img className="iPhoneBorder" src="iPhoneBorder.png" alt="아이폰 테두리"></img>
        <div className="calcBackground">
          <div className="clacBox">
            <div className="resultBox">
              <div className={resultString.length < 10 ? "result" : "result2"}>
                {resultString}
              </div>
            </div>
            <div className="buttonBox">
              <ContextBox.Provider
                value={{
                  result,
                  setResult,
                  setMode,
                  modeVar,
                  setModeVar,
                  setFormula,
                  calculation,
                  noWhite,
                  handleResult,
                  modePM,
                  setModePM,
                  setEqual,
                  formula,
                  equal,
                }}
              >
                <Line1 />
                <Line2 />
                <Line3 />
                <Line4 />
                <Line5 />
              </ContextBox.Provider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
