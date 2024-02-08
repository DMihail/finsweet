import React from 'react';
import './App.scss';
import Hero from "./component/hero";
import WeOffer from "./component/weOffer/iindex";

function App() {
  return (
    <div className="wrapper">
        <Hero />
      <main>
        <WeOffer />
      </main>
    </div>
  );
}

export default App;
