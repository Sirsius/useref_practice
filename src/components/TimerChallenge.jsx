import { useState, useRef } from "react";

// This timer would be shared across all instances of TimerChallenge
// let timer;


// useRef can be used to store mutable values that are not part of the component's state
export default function TimerChallenge({ title, targetTime }) {
  // This value is not lost when the component re-renders.
  // If you have a value that must be managed but isn't really a state, use a ref.
  const timer = useRef();

  const [timerStarted, setTimerStarted] = useState(false); // [1
  const [timerExpired, setTimerExpired] = useState(false);

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);
    setTimerStarted(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
    setTimerStarted(false);
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p className="challenge-expired">You Lost!</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={timerStarted ? handleStop : handleStart}>
          {timerStarted ? "Stop Timer" : "Start Challenge"}
        </button>
      </p>
      <p className={timerStarted ? "active" : undefined}>
        {timerStarted ? "Time is running..." : "Timer inactive"}
      </p>
    </section>
  );
}
