import "../App.css";
import { useContext } from "react";
import { ContextBox } from "./../App.js";

function Line2() {
  let {
    result,
    setMode,
    setFormula,
    calculation,
    handleResult,
    noWhite,
    modeVar,
  } = useContext(ContextBox);
  function setTimes() {
    setMode("×");
    setFormula(Number(result));
    if (modeVar !== "=") calculation("×");
  }
  return (
    <div className="line">
      <div
        className="round gray"
        onClick={() => {
          handleResult(7);
        }}
      >
        7
      </div>
      <div className="round gray" onClick={() => handleResult(8)}>
        8
      </div>
      <div className="round gray" onClick={() => handleResult(9)}>
        9
      </div>
      <div className={noWhite("×")} onClick={setTimes}>
        ×
      </div>
    </div>
  );
}

export default Line2;
