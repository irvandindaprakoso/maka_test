import React from 'react';
import { useSelector } from 'react-redux';
import { selectCount } from './CounterSlice';

const CounterComponent2 = () => {
  const count = useSelector(selectCount);

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
};

export default CounterComponent2;