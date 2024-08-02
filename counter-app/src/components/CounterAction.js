import React from 'react';

const CounterAction = ({ increaseCounter, decreaseCounter }) => {
  return (
    <div>
      <button onClick={increaseCounter}>Increase</button>
      <button onClick={decreaseCounter}>Decrease</button>
    </div>
  );
};

export default CounterAction;