import React, { useContext } from "react";
import { CounterContext } from "../contexts/CounterProvider";

export default function JobSearch() {
  const { data } = useContext(CounterContext);

  function refreshPage() {
    window.location.href = window.location.href;
  }

  return (
    <div className="flex justify-center ">
      <div className="w-2/3 bg-white mt-2 shadow-lg rounded-lg md:flex justify-between">
        <div className="md:flex p-4">
          {data.map((item, index) => (
            <div key={index} className="md:flex">
              {item.role.map((language, langIndex) => (
                <div
                  key={langIndex}
                  className="border border-teal-200 bg-teal-50 text-teal-600 rounded-md px-3 py-1 md:mr-2 mb-1"
                >
                  {language}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div
          className="md:flex items-center px-5 pb-3 cursor-pointer underline text-teal-600"
          onClick={refreshPage}
        >
          Clear
        </div>
      </div>
    </div>
  );
}
