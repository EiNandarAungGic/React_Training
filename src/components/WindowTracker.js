import React from "react";

export default function WindowTracker() {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    window.addEventListener("resize", function () {
      setWindowWidth(this.window.innerWidth);
    });
  }, [window.innerWidth]);
  return (
    <div>
      <button>Toggle Window Tracker</button>
      <h2>Window width: {window.innerWidth}</h2>
    </div>
  );
}
