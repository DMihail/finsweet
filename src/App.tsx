import React from "react";
import "./App.scss";
import Hero from "./component/hero";
import WeOffer from "./component/weOffer";
import Brands from "./component/brands";
import FrequentlyQuestions from "./component/frequentlyQuestions";

function App() {
  return (
    <div className="wrapper">
      <Hero />
      <main>
        <WeOffer />
        <Brands />
        <FrequentlyQuestions />
      </main>
    </div>
  );
}

export default App;
