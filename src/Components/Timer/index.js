import { useState, useRef } from 'react';

const Timer = () => {
    const [counter, setCounter] = useState(0);
    let id = useRef();
  
    const handleStart = () => {
      id.current = setInterval(() => {
        setCounter(prevState => prevState + 1)
      }, 1000)
    };
  
    const handleStop = () => {
      clearInterval(id.current);
    };
    
    return (
      <div className="App">
        <p>Timer with function react component, that start timer when press on Start button and stop it when press on Stop button</p>
          <hr></hr>
          <button onClick={handleStart}>Start</button>
          <button onClick={handleStop}>Stop</button>
        <div>{counter}</div>
      </div>
    );
};

export default Timer;