import React from 'react';
import './App.scss';
import Hero from "./component/hero";
import WeOffer from "./component/weOffer/iindex";
import Brands from "./component/brands/iindex";

function App() {
  return (
    <div className="wrapper">
        <Hero />
      <main>
        <WeOffer />
          <Brands />
      </main>
    </div>
  );
}

export default App;
