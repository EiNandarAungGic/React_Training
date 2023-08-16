import React from "react";

export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white",
  };
  return (
    <div
      className="h-50 w-50 shadow-md rounded-lg flex justify-center items-center"
      style={styles}
      onClick={props.holdDice}
    >
      <h2 className="font-bold text-xl p-3">{props.value}</h2>
    </div>
  );
}
