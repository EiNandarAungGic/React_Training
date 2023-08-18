import React, { createContext, useState } from "react";

export const CounterContext = createContext({
  data: [],
  setData: () => {},
});

export const CounterProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const addData = (newData) => {
    setData([...data, newData]);
  };

  const value = {
    data,
    addData,
  };

  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
};
