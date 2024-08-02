import React from 'react';
import './App.css';
import CounterComponent1 from './components/CounterComponent1';
import CounterComponent2 from './components/CounterComponent2';

function App() {
  return (
    <div className="App">
      <h1>Counter</h1>
      <div>
        <CounterComponent1 />
        <CounterComponent2 />
      </div>
    </div>
  );
}

export default App;
