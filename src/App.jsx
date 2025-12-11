import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Cupon from "./pages/Cupon";
import Home from "./pages/Home"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cupon/:id" element={<Cupon/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
