import { useState, useRef } from "react";
// Whenever a ref changes the component does not re-execute, however, state does
// also, '' !== null, undefined, or NaN is true
export default function Player() {
  const playerName = useRef();

  const [enteredPlayerName, setEnteredPlayerName] = useState();

  // We no longer need this state since we are using refs
  // const [submitted, setSuBmitted] = useState(false);

  // We no longer need this function since we are using refs
  // function handleChange(e) {
  //   setSuBmitted(false);
  //   setEnteredPlayerName(e.target.value);
  // }

  function handleClick() {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = "";
  }

  // If enteredPlayerName is not empty, we will display the enteredPlayerName
  // The two question marks are nullish coalescing operators that returns its
  // right-hand side operand when its left-hand side operand is null or undefined,
  // and otherwise returns its left-hand side operand.
  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
