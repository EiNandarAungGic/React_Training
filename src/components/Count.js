import React from "react";

export default function Count() {
  const [starWarsData, setStarWarsData] = React.useState({});
  const [count, setCount] = React.useState(1);

  React.useEffect(() => {
    fetch(`https://swapi.dev/api/people/${count}`)
      .then((res) => res.json())
      .then((data) => setStarWarsData(data));
  }, [count]);

  return (
    <div className="ml-4 mt-4">
      <h2 className="font-bold text-lg my-4">Count is {count}</h2>
      <button
        className="border border-black font-bold px-4 py-1"
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        Get Next Character
      </button>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  );
}
