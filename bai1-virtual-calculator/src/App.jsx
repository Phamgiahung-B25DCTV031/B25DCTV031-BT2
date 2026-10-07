import { useState } from "react";
import Display from "./components/Display";
import Button from "./components/Button";

function App() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const isOperator = (char) => ["+", "-", "×", "÷"].includes(char);

  const calculate = () => {
    if (!expression) return;

    try {
      let exp = expression
        .replaceAll("×", "*")
        .replaceAll("÷", "/");

      // Chỉ cho phép số, dấu chấm, khoảng trắng, ngoặc và 4 phép toán
      if (!/^[0-9+\-*/().\s]+$/.test(exp)) {
        setResult("Lỗi");
        return;
      }

      // Bài thực hành cơ bản: dùng Function để tính biểu thức sau khi đã lọc ký tự
      const value = Function(`"use strict"; return (${exp})`)();

      if (!Number.isFinite(value)) {
        setResult("Lỗi");
      } else {
        setResult(String(Math.round((value + Number.EPSILON) * 1e10) / 1e10));
      }
    } catch {
      setResult("Lỗi");
    }
  };

  const handleClick = (label) => {
    if (label === "C") {
      setExpression("");
      setResult("");
      return;
    }

    if (label === "DEL") {
      setExpression((prev) => prev.slice(0, -1));
      setResult("");
      return;
    }

    if (label === "=") {
      calculate();
      return;
    }

    if (isOperator(label)) {
      setExpression((prev) => {
        if (!prev && label !== "-") return prev;
        if (isOperator(prev.slice(-1))) {
          return prev.slice(0, -1) + label;
        }
        return prev + label;
      });
      setResult("");
      return;
    }

    if (label === ".") {
      const currentNumber = expression.split(/[+\-×÷]/).pop();
      if (currentNumber.includes(".")) return;
    }

    setExpression((prev) => prev + label);
    setResult("");
  };

  const buttons = [
    ["C", "danger"], ["DEL", "secondary"], ["÷", "operator"], ["×", "operator"],
    ["7", "normal"], ["8", "normal"], ["9", "normal"], ["-", "operator"],
    ["4", "normal"], ["5", "normal"], ["6", "normal"], ["+", "operator"],
    ["1", "normal"], ["2", "normal"], ["3", "normal"], ["=", "equal"],
    ["0", "normal", "zero"], [".", "normal"]
  ];

  return (
    <main className="page">
      <section className="calculator">
        <h1>Virtual Calculator</h1>

        <Display expression={expression} result={result} />

        <div className="keypad">
          {buttons.map(([label, color, extra]) => (
            <Button
              key={label}
              label={label}
              color={color}
              className={extra || ""}
              onClick={handleClick}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
