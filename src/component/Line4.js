import "../App.css";
import { useContext } from "react";
import { ContextBox } from "./../App.js";

function Line4() {
  let {
    result,
    setMode,
    setFormula,
    calculation,
    handleResult,
    noWhite,
    modeVar,
  } = useContext(ContextBox);
  function setPlus() {
    setMode("+");
    setFormula(Number(result));
    if (modeVar !== "=") calculation("+");
  }
  return (
    <div className="line">
      <div className="round gray" onClick={() => handleResult(1)}>
        1
      </div>
      <div className="round gray" onClick={() => handleResult(2)}>
        2
      </div>
      <div className="round gray" onClick={() => handleResult(3)}>
        3
      </div>
      <div className={noWhite("+")} onClick={setPlus}>
        +
      </div>
    </div>
  );
}

export default Line4;
