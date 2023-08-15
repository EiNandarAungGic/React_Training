import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Contact from "./components/Contact";
import plantData from "./PlantData";
import Footer from "./components/Footer";

export default function Challenge1() {
  const plants = plantData.map((plant) => {
    return <Contact key={plant.id} {...plant} />;
  });
  return (
    <div>
      <Header />
      <MainContent />
      <div className="flex flex-row">{plants}</div>
      <Footer />
    </div>
  );
}
