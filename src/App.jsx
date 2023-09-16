import { useState } from "react";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ReviewsPage from "./pages/ReviewsPage";
import SupportPage from "./pages/SupportPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/about-us" element={<AboutPage />}></Route>
          <Route path="/services" element={<ServicesPage />}></Route>
          <Route path="/reviews" element={<ReviewsPage />}></Route>
          <Route path="/support" element={<SupportPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
