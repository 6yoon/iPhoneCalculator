import "../App.css";
import { useContext } from "react";
import { ContextBox } from "./../App.js";

function Line3() {
  let {
    result,
    setMode,
    setFormula,
    calculation,
    handleResult,
    noWhite,
    modeVar,
  } = useContext(ContextBox);
  function setMinus() {
    setMode("-");
    setFormula(Number(result));
    if (modeVar !== "=") calculation("-");
  }
  return (
    <div className="line">
      <div className="round gray" onClick={() => handleResult(4)}>
        4
      </div>
      <div className="round gray" onClick={() => handleResult(5)}>
        5
      </div>
      <div className="round gray" onClick={() => handleResult(6)}>
        6
      </div>
      <div className={noWhite("-")} onClick={setMinus}>
        -
      </div>
    </div>
  );
}

export default Line3;
