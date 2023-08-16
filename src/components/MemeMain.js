import React from "react";
// import memesData from "../memesData.js";

export default function MemeMain() {
  const [meme, setMeme] = React.useState({
    input1: "",
    input2: "",
    randomImage: "https://i.imgflip.com/1ur9b0.jpg",
  });

  const [allMemes, setAllMemes] = React.useState([]);
  React.useEffect(() => {
    async function getMemes() {
      const res = await fetch(`https://api.imgflip.com/get_memes`);
      const data = await res.json();
      setAllMemes(data.data.memes);
    }

    getMemes();
  }, []);

  function getMemeImg() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
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
                value={meme.input1}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-purple-200 focus:border-purple-300"
                placeholder="Top Text"
              />
            </div>
            <div className="flex-grow">
              <input
                type="text"
                id="input2"
                name="input2"
                value={meme.input2}
                onChange={handleChange}
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
          <div className="flex justify-center items-center relative mt-4 text-center">
            <img
              src={meme.randomImage}
              alt="Meme Image"
              className="mx-auto max-w-full h-auto"
            />
            <h2 className="font-bold uppercase text-xl font-serif text-white absolute top-5">
              {meme.input1}
            </h2>
            <h2 className="font-bold uppercase text-xl font-serif text-white absolute bottom-5">
              {meme.input2}
            </h2>
          </div>
        </div>
      </div>
    </main>
  );
}
