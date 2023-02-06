import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CountryPage from "./pages/CountryPage";
import Homepage from "./pages/Homepage";

export default function App() {
  let routes = (
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route path="/:cName" element={<CountryPage />} />
    </Routes>
  );
  return (
    <div>
      <Router>{routes}</Router>
    </div>
  );
}
