import React from "react";
// import MainImg from "../images/indoor2.png";

export default function MainContent() {
  let pageName = "Seven";
  return (
    <div className="flex items-center bg-green-200">
      <div>
        <img
          src={process.env.PUBLIC_URL + "/images/indoor2.png"}
          alt="Background Image"
          className="h-1/2 w-5/7"
        />
      </div>
      <div>
        <div className="uppercase font-bold text-5xl my-3">{pageName}</div>
        <div className="uppercase font-bold text-xl text-green-800 mb-3">
          Indoor Plant Shop
        </div>
        <div className="uppercase border border-solid border-green-500 inline mt-3 p-2">
          Learn More
        </div>
      </div>
    </div>
  );
}
