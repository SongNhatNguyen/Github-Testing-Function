"use client";
import { useState } from "react";

export default function Calculator() {
  const [val, setVal] = useState("0");

  const click = (x) => {

    let isZero;
    if (val === "0") {
        isZero = true;
    } else {
        isZero = false;
    }

    let isNum;
    if (x === "0" || x === "1" || x === "2" || x === "3" || x === "4" || 
        x === "5" || x === "6" || x === "7" || x === "8" || x === "9") {
        isNum = true;
    } else {
        isNum = false;
    }

    if (isZero && isNum) {
      setVal(x);
    } else {
      setVal(val + x);
    }
};

  const clear = () => {
    setVal("0");
    };

  const calculate = () => {
    try {
      const r = eval(val);
      setVal(String(r));
    } catch {
      setVal("Error");
    }
  };

  return (
    <div style={{ width: "250px", margin: "40px auto" }}>
      <input id="display" value={val} readOnly style={{
          width: "100%",
          height: "45px",
          fontSize: "20px",
          marginBottom: "15px",
          padding: "10px"
        }}
      />

<div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "5px" }}>
        <button id="btn-0" onClick={() => click("0")}>0</button>
        <button id="btn-1" onClick={() => click("1")}>1</button>
        <button id="btn-2" onClick={() => click("2")}>2</button>
        <button id="btn-3" onClick={() => click("3")}>3</button>

        <button id="btn-4" onClick={() => click("4")}>4</button>
        <button id="btn-5" onClick={() => click("5")}>5</button>
        <button id="btn-6" onClick={() => click("6")}>6</button>
        <button id="btn-7" onClick={() => click("7")}>7</button>

        <button id="btn-8" onClick={() => click("8")}>8</button>
        <button id="btn-9" onClick={() => click("9")}>9</button>
        <button id="btn-add" onClick={() => click("+")}>+</button>
        <button id="btn-sub" onClick={() => click("-")}>-</button>

        <button id="btn-mul" onClick={() => click("*")}>*</button>
        <button id="btn-div" onClick={() => click("/")}>/</button>
        <button id="btn-clear" onClick={clear}>C</button>
        <button id="btn-equal" onClick={calculate}>=</button>
    </div>
    </div>
  );
}
