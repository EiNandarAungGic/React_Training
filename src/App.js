import React from "react";
import Challenge1 from "./Challenge1";
import Contact from "./components/Contact";
import plantData from "./PlantData";
import Challenge2 from "./Challenge2";
import FormBody from "./components/FormBody";
import Count from "./components/Count";
import WindowTracker from "./components/WindowTracker";
import TenziesMain from "./components/TenziesMain";
import QuizzicalMainPage from "./components/QuizzicalMainPage";

export default function App() {
  // plantData.map((plant) => {
  //   return <Contact key={plant.id} {...plant} />;
  // });
  // return <Challenge1 />;
  // return <Challenge2 />;
  // return <FormBody />;
  // return <Count />;
  // return <WindowTracker />;
  // return <TenziesMain />;
  return <QuizzicalMainPage />;
}
