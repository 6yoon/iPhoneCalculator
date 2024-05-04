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
    setModePM,
    setEqual,
    mode,
    formula,
  } = useContext(ContextBox);
  function resultClear() {
    setResult("");
    setFormula(0);
    setMode("");
    setModeVar("");
    setModePM("");
    setEqual(0);
  }
  function resultMinus() {
    if (result.length === 9) {
      return;
    } else {
      if (result.includes("-")) setResult(`${-Number(result)}`);
      else setResult(`-${result}`);
    }
  }
  function resultPercent() {
    setResult(`${Number(result) / 100.0}`);
  }
  function setDvide() {
    setMode("÷");
    setFormula(Number(result));
    if (modeVar !== "=") calculation("÷");
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
