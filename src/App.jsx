import { useState } from "react";
import "./App.css";

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <>
      <h2 id="titulo">Boca de urnas</h2>
      <div className="card">
        <h2>Candidato 1</h2>
        <p>{count1}</p>
        <button onClick={() => setCount1(count1+1)}>+</button>
        <button onClick={() => count1>0?setCount1(count1-1):setCount1(count1)}>-</button>
      </div>
      <div className="card">
        <h2>Candidato 2</h2>
        <p>{count2}</p>
        <button onClick={() => setCount2(count2+1)}>+</button>
        <button onClick={() => count2>0?setCount2(count2-1):setCount2(count2)}>-</button>
      </div>
    </>
  );
}

export default App;
