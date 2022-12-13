import { useEffect, useState } from "react";
import styles from "./style.module.css";

function HorizontalOperation({ slNo, num1, num2, answer, operator, verify }) {
  const [result, setResult] = useState("");
  const [correctness, setCorrectness] = useState("incorrect");

  const resultOnChange = (e) => {
    setResult(e.target.value);
  };

  useEffect(() => {
    if (parseInt(result) === answer) {
      setCorrectness("correct");
    } else {
      setCorrectness("incorrect");
    }
  }, [result]);

  return (
    <div className={styles.wrapper}>
      <small className={styles.slNo}>{slNo})</small>
      <span>{num1}</span>
      <span>{operator}</span>
      <span>{num2}</span>
      <span>=</span>
      <input
        type="text"
        className={`${styles.resultInput} ${verify ? styles[correctness] : ""}`}
        maxLength="3"
        onChange={resultOnChange}
        tabIndex={slNo}
      />
    </div>
  );
}

export default HorizontalOperation;
