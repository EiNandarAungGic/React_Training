import { createContext, useState } from "react";
export const CounterContext = createContext({
  count: 0,
  setCount: () => {},
});

export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(100);
  const value = {
    count,
    setCount,
  };

  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
};
