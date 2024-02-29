import React from "react";
import "./App.scss";
import Hero from "./component/hero";
import WeOffer from "./component/weOffer";
import Brands from "./component/brands";
import FrequentlyQuestions from "./component/frequentlyQuestions";
import FollowClear from "./component/followClear";
import OurBlog from "./component/ourBlog";
import Footer from "./component/footer";
import AboutUs from "./component/aboutUs";

function App() {
  return (
    <div className="wrapper">
      <Hero />
      <main>
        <WeOffer />
        <FollowClear />
          <AboutUs />
        <Brands />
        <OurBlog />
        <FrequentlyQuestions />
      </main>
      <Footer />
    </div>
  );
}

export default App;
