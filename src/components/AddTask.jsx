import { useState } from "react";

export default function AddTask({ onAddTask }) {
  const [text, setText] = useState("");
  return (
    <div className="flex flex-row mt-3">
      <input
        className="border border-black mr-2 pl-2"
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="bg-green-300 p-2"
        onClick={() => {
          setText("");
          onAddTask(text);
        }}
      >
        Add
      </button>
    </div>
  );
}
