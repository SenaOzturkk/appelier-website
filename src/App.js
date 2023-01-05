import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter } from "react-router-dom";
import Services from "./components/pages/Services";
import About from "./components/pages/About";

import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Home />
        <Services />
        <About />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
