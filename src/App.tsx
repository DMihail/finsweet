import React from "react";
import "./App.scss";
import Hero from "./component/hero";
import WeOffer from "./component/weOffer";
import Brands from "./component/brands";
import FrequentlyQuestions from "./component/frequentlyQuestions";
import FollowClear from "./component/followClear";

function App() {
  return (
    <div className="wrapper">
      <Hero />
      <main>
        <WeOffer />
          <FollowClear />
        <Brands />

        <FrequentlyQuestions />
      </main>
    </div>
  );
}

export default App;
