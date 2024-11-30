import React, { useEffect, useState, useRef } from "react";
import "./reactQuestions.css";

const block = "react-questions";
export default function ReactQuestions() {
  return (
    <div className={block}>
      <h2>Welcome to React Questions</h2>
      {/* <Counter /> */}
      <Stopwatch />
    </div>
  );
}

// ***********************************************************************************************************************************************************
// Q.1 Create a counter.

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

// ***********************************************************************************************************************************************************
// Q.2 Create a stopwatch.

function Stopwatch() {
  const [time, setTime] = useState({ hr: 0, min: 0, sec: 0 });
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  let intervalIdRef = useRef(null);

  const updateTime = () => {
    setTime((prevTime) => {
      let { hr, min, sec } = prevTime;

      sec += 1;
      if (sec === 60) {
        sec = 0;
        min += 1;
      }
      if (min === 60) {
        min = 0;
        hr += 1;
      }

      return { hr, min, sec };
    });
  };

  const handleStartTimer = () => {
    if (!isTimerRunning) {
      setIsTimerRunning(true);
      intervalIdRef.current = setInterval(updateTime, 1000);
    }
  };

  const handlePauseTimer = () => {
    setIsTimerRunning(false);
    clearInterval(intervalIdRef.current);
  };
  
  const handleResetTimer = () => {
    setIsTimerRunning(false);
    clearInterval(intervalIdRef.current);
    setTime({ hr: 0, min: 0, sec: 0 });
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <h2>
        {String(time.hr).padStart(2, "0")}:{String(time.min).padStart(2, "0")}:
        {String(time.sec).padStart(2, "0")}
      </h2>
      <button
        className="btn btn-info"
        onClick={isTimerRunning ? handlePauseTimer : handleStartTimer}
      >
        {isTimerRunning ? "Pause" : "Start"}
      </button>
      <button
        className="btn btn-danger ml-4"
        onClick={handleResetTimer}
      >
        Reset
      </button>
    </div>
  );
}
