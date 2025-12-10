import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Cupon from "./pages/Cupon";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1 className="text-3xl font-bold">Inicio</h1>} />
        <Route path="/cupon/:id" element={<Cupon/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
