import React, {useEffect} from 'react';
import ReactGA from 'react-ga';

import "./App.css";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

const TRACKING_ID = "G-YDEZCQR352";

function App() {

//Google Analytics
ReactGA.initialize(TRACKING_ID);
ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <div id="wrapper">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
