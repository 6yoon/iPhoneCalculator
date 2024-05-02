import "../App.css";
import { useContext } from "react";
import { ContextBox } from "./../App.js";

function Line5() {
  let {  result,
    setResult,
    calculation,
    setModeVar,
    handleResult,
    setMode,
    modeVar} = useContext(ContextBox)
  function demical() {
    if (result.includes(".")) {
    } else setResult(`${result}.`);
  }

  return (
    <div className="line">
      <div className="round0 gray" onClick={() => handleResult(0)}>
        0
      </div>
      <div className="round gray" onClick={demical}>
        .
      </div>
      <div
        className={"round orange"}
        onClick={() => {
          calculation();
          setModeVar("=");
          if(modeVar !== "=") setMode(modeVar)
        }}
      >
        =
      </div>
    </div>
  );
}

export default Line5;
