import React from "react";
import { useState } from "react";
import s from "./Calculator.module.css";

function Calculator(props) {
  const [value, setValue] = useState("");

  const result = () => {
    try {
      let res = eval(value);
      setValue(res);
    } catch (error) {}
  };

  const buttons = [
    "+",
    "1",
    "2",
    "3",
    "-",
    "4",
    "5",
    "6",
    "*",
    "7",
    "8",
    "9",
    "/",
    ".",
    "0",
    "**",
  ];

  const buttonsSymbols = buttons.map((b) => (
    <button key={b} onClick={(e) => setValue(value + b)}>
      {b}
    </button>
  ));

  return (
    <div className={s.calcWrapper}>
      <div className={s.display}>
        <input type="text" value={value} disabled={true} />
      </div>
      <div className={s.buttons}>
        <button onClick={() => setValue("")}>CE</button>
        <button
          onClick={() => setValue(value.toString().slice(0, value.length - 1))}
        >
          C
        </button>
        <button onClick={result}>=</button>
        {buttonsSymbols}
        <button onClick={() => setValue(Math.sqrt(value))}>cor</button>
      </div>
    </div>
  );
}

export default Calculator;
