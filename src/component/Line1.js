import "../App.css";
import { useContext } from "react";
import { ContextBox } from "./../App.js";

function Line1() {
  let {
    result,
    setResult,
    setMode,
    setFormula,
    calculation,
    setModeVar,
    noWhite,
    modeVar,
    setModePM
  } = useContext(ContextBox);
  function resultClear() {
    setResult("0");
    setFormula("");
    setMode("");
    setModeVar("");
    setModePM("");
  }
  function resultMinus() {
    if (result.length === 9) {
    } else {
      if (result.includes("-")) {
        setResult(`${-Number(result)}`);
      } else {
        if (result === "0") {
        } else {
          setResult(`-${result}`);
        }
      }
    }
  }
  function resultPercent() {
    setResult(`${Number(result) / 100.0}`);
  }
  function setDvide() {
    setMode("÷");
    setFormula(Number(result));
    if (modeVar !== "=") calculation();
  }
  return (
    <div className="line">
      <div className="round lightgray" onClick={resultClear}>
        {result === "0" ? "AC" : "C"}
      </div>
      <div className="round lightgray" onClick={resultMinus}>
        +/-
      </div>
      <div className="round lightgray" onClick={resultPercent}>
        %
      </div>
      <div className={noWhite("÷")} onClick={setDvide}>
        ÷
      </div>
    </div>
  );
}

export default Line1;
