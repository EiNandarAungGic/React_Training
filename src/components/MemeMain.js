import React from "react";
import memeData from "../memesData.js";

export default function MemeMain() {
  const [memeImage, setMemeImage] = React.useState("");

  function getMemeImg() {
    const memesArray = memeData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
  }

  return (
    <main>
      <div>
        <div className="max-w-md mx-auto p-6">
          <div className="flex space-x-4 mb-4">
            <div className="flex-grow">
              <input
                type="text"
                id="input1"
                name="input1"
                className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-purple-200 focus:border-purple-300"
                placeholder="Top Text"
              />
            </div>
            <div className="flex-grow">
              <input
                type="text"
                id="input2"
                name="input2"
                className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-purple-200 focus:border-purple-300"
                placeholder="Bottom Text"
              />
            </div>
          </div>
          <button
            className="w-full bg-purple-800 text-white px-4 py-2 rounded-md hover:bg-purple-600 focus:outline-none focus:ring focus:ring-purple-200"
            onClick={getMemeImg}
          >
            Get a new meme image
          </button>
          <div className="mt-4 text-center">
            <img
              src={memeImage}
              alt="Meme Image"
              className="mx-auto max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
