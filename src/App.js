import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  function changeNumberPlus() {
    setCount(count + 1);
  }
  function changeNumberMinus() {
    if (count <= 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  }
  function changeNumberReset() {
    setCount(0);
  }

  return (
    <div className="App">
      <div className="counter">
        <h1>Счет: {count} </h1>
        <button className="btn" onClick={changeNumberPlus}>
          увеличить
        </button>{" "}
        <hr />
        <button className="btn" onClick={changeNumberMinus}>
          снижать
        </button>{" "}
        <hr />
        <button className="btn" onClick={changeNumberReset}>
          Сбросить
        </button>
      </div>
      <h2>Нажмите кнопку чтобы манипулировать счет!!!</h2>
    </div>
  );
}

export default App;
