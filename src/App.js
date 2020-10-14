import React from 'react';
import './App.css';

function App() {

  const [isLit, setLit] = React.useState(false);
  const [ isTemp, setTemp] = React.useState(72);
  return (
    <div className={`room ${isLit ? 'lit': 'dark'}`}>This room is {isLit ? 'light': 'dark'}<br />
    <button onClick={() => setLit(true)}>On</button>
    <button onClick={() => setLit(false)}>Off</button><br />
    <br /> Temperature is {isTemp}<br />
    <button onClick={() => setTemp(isTemp + 1)}>+</button>
     <button onClick={() => setTemp(isTemp - 1)}>-</button>

    </div>

    );
}

export default App;
