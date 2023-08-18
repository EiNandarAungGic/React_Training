import React, { useContext, useState } from "react";
import { CounterContext } from "../contexts/CounterProvider";

export default function ContextTest() {
  const { count, setCount } = useContext(CounterContext);
  // const [chosenAnswers, setChosenAnswers] = useState([]);
  // const [tasks, dispatch] = useReducer(tasksReducer, initialTasks); // (current state, dispatch method) = useReducer(<reducer>, <initialState>)

  return (
    <main className="mx-auto container p-2">
      <h1>Count : {count}</h1>
      <button className="bg-blue-600 p-3" onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </main>
  );
}
