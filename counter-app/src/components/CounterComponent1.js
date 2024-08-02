
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, selectCount } from './CounterSlice';

const CounterComponent1 = () => {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);

  return (
    <div>
      <button style={{ padding: '7px', margin: '10px' }} onClick={() => dispatch(increment())}>+</button>
      <span>{count}</span>
      <button style={{ padding: '7px', margin: '10px' }} onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default CounterComponent1;