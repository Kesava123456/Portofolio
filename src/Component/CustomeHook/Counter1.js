import React from 'react';
import useCounter from '../Hookss/useCounter'
const Counter1 = () => {
  const [count,increment,decrement,reset]=useCounter(0,1);
  return (
    <div>
      <h1>Count = {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button> {/* Corrected onClick */}
    </div>
  );
};

export default Counter1;
