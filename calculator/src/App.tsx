import { useState } from "react";
import "./App.css";

function App() {
  const [firstNumber, setFirstNumber] = useState<number>(0);
  const [secondNumber, setsecondNumber] = useState<number>(0);
  const [total, setTotal] = useState(firstNumber + secondNumber);

  const handleClick = () => {
    setTotal(+firstNumber + +secondNumber);
  };
  return (
    <>
      <h1>Adding Two Numbers</h1>
      <input
        type="number"
        value={firstNumber}
        onChange={(e) => setFirstNumber(+e.target.value)}
      />
      <input
        type="number"
        value={secondNumber}
        onChange={(e) => setsecondNumber(+e.target.value)}
      />
      <button onClick={handleClick}>Add Two Numbers</button>
      <p>Total: {total}</p>
    </>
  );
}

export default App;
