import { useState } from "react";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/about-us" element={<AboutPage />}></Route>
          <Route path="/services" element={<ServicesPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
