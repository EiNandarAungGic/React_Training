import React, { useContext } from "react";
import { CounterContext } from "../contexts/CounterProvider";

export default function JobMainContent(props) {
  const { data, addData } = useContext(CounterContext);

  const setClickedData = () => {
    const newData = { flag: true, role: props.languages };
    addData(newData);
  };

  return (
    <div className="flex justify-center mb-4">
      <div className="w-2/3 bg-white mt-2 shadow-lg rounded-lg md:flex">
        <div className="w-full md:w-1/2">
          <div className="flex bg-white-200 px-6 py-4 justify-between">
            <div className="md:flex items-center pt-3">
              <img
                className="bg-blue-700 w-16 h-16 md:w-12 md:h-12 flex justify-center items-center rounded-full uppercase font-bold text-white"
                src={props.logo}
                alt=""
              />
              <div className="mt-3 md:ml-4">
                <div className="flex flex-row">
                  <p className="text-teal-600 font-bold mx-2">
                    {props.company}
                  </p>
                  <p
                    className={`text-xs uppercase px-2 py-1 rounded-full border border-gray-200 text-gray-200 font-bold inline mx-1 ${
                      props.new === true
                        ? "bg-teal-600"
                        : "border-white text-white"
                    }`}
                  >
                    NEW!
                  </p>

                  <p
                    className={`text-xs uppercase px-2 py-1 rounded-full border border-gray-200 text-gray-200 font-bold inline mx-1 ${
                      props.featured === true
                        ? "bg-black"
                        : "border-white text-white"
                    }`}
                  >
                    FEATURED
                  </p>
                </div>
                <p className="font-bold my-1 mx-2">Senior Frontend Developer</p>
                <ul className="flex flex-row">
                  <li className="text-gray-500 mx-2">1d ago</li>
                  <li className="text-gray-500 mx-2">&#8226; Full Time</li>
                  <li className="text-gray-500 mx-2">&#8226; USA only</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-wrap items-center md:w-1/2 p-4">
          <div className="my-1">
            <button
              className="bg-gray-300 text-xs uppercase px-2 py-1 rounded-md border border-gray-300 text-teal-600 font-bold inline my-3 mx-2"
              id="req"
            >
              {props.role}
            </button>
          </div>
          <div className="my-1">
            <button
              className="bg-gray-300 text-xs uppercase px-2 py-1 rounded-md border border-gray-300 text-teal-600 font-bold inline my-3 mx-2"
              id="req"
              onClick={setClickedData}
            >
              {props.level}
            </button>
          </div>
          {props.languages.map((lang) => (
            <div className="my-1" key={lang}>
              <button
                className="bg-gray-300 text-xs uppercase px-2 py-1 rounded-md border border-gray-300 text-teal-600 font-bold inline my-3 mx-2"
                id="req"
              >
                {lang}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
