import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cupon from "./pages/Cupon";
import { lista } from "./data/cupones";

function App() {
  const lastCanje = localStorage.getItem("lastCanje");
  const [ultimaFechaCanje, setUltimaFechaCanje] = useState(lastCanje ? new Date(lastCanje) : null);

  const [cupones, setCupones] = useState(() => {
    const saved = localStorage.getItem("cupones");
    return saved ? JSON.parse(saved) : lista;
  });

  const canjearCupon = (id) => {
  const ahora = new Date();

  // Si ya hubo un canje
  if (ultimaFechaCanje) {
    const diff = ahora - new Date(ultimaFechaCanje);
    const dias = diff / (1000 * 60 * 60 * 24);

    if (dias < 7) {
      alert(`Debes esperar ${Math.ceil(7 - dias)} días para canjear otro cupón`);
      return;
    }
  }

  // Marcar cupón como canjeado
  setCupones(prev => {
    const updated = prev.map(c => c.id === id ? { ...c, canjeado: true } : c);
    localStorage.setItem("cupones", JSON.stringify(updated));
    return updated;
  });

  // Guardar la fecha del último canje
  setUltimaFechaCanje(ahora);
  localStorage.setItem("lastCanje", ahora.toISOString());
};

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home cupones={cupones} canjearCupon={canjearCupon} />}
        />
        <Route
          path="/cupon/:id"
          element={<Cupon cupones={cupones} canjearCupon={canjearCupon} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
