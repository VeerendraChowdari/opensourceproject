import React, { useState, useEffect } from 'react';
import './Counter.css'; 

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  const backgroundColor = `linear-gradient(90deg, rgba(128, 0, 128, 0.7) ${count}%, rgba(216, 191, 216, 0.7) ${100 - count}%)`;

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1); 
  const reset = () => {
    setCount(0);
    const mainBody = document.querySelector('.mainbody') as HTMLElement;
    if (mainBody) {
      mainBody.style.background = 'linear-gradient(90deg, rgba(128, 0, 128, 0.7) 0%, rgba(216, 191, 216, 0.7) 100%)';
    }
  };

  useEffect(() => {
    const mainBody = document.querySelector('.mainbody') as HTMLElement;
    if (mainBody) {
      mainBody.style.background = backgroundColor;
    }
  }, [count, backgroundColor]);

  return (
    <div className="counter-container">
      <h2>Count: {count}</h2>
      <div className="counter-buttons">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
