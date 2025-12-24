import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function CuponList({ cupones, canjearCupon }) {
  const navigate = useNavigate();

const handleCanjear = (cupon) => {
  const ahora = new Date();

  // Verificar si hay un último canje
  const lastCanje = localStorage.getItem("lastCanje");
  if (lastCanje) {
    const diff = ahora - new Date(lastCanje);
    const dias = diff / (1000 * 60 * 60 * 24);

    if (dias < 7) {
      alert(`Debes esperar ${Math.ceil(7 - dias)} días para canjear otro cupón`);
      return; // <- Esto detiene toda la función, NO se abre WhatsApp
    }
  }

  // Solo llega aquí si puede canjear
  canjearCupon(cupon.id);
  localStorage.setItem("lastCanje", ahora.toISOString());

  // Número fijo en formato internacional (sin +)
  const numero = "51915235266"; // reemplaza con el número real

  // Mensaje
  const mensaje = `¡Hola! He canjeado el cupón: ${cupon.titulo} con valor ${cupon.valor}.`;

  // URL de WhatsApp con número específico
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
};
  return (
    <div className="px-9 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
      {cupones.map((cupon) => (
        <div
          key={cupon.id}
          className={`rounded-xl shadow-lg transition-shadow duration-300 p-6 flex flex-col items-center my-5
            ${cupon.canjeado ? "bg-gray-200" : "bg-white hover:shadow-2xl"}`}
        >
          {cupon.imagen && (
            <img
              src={cupon.imagen}
              className="w-16 h-16 mb-4 object-contain"
            />
          )}
          <h2 className="font-bold text-black text-xl mb-2">{cupon.titulo}</h2>
          <p className="text-gray-600 text-center mb-2">{cupon.descripcion}</p>
          <p className="text-gray-800 font-semibold mb-4">{cupon.valor}</p>

          {/* Solo mostrar el botón si NO está canjeado */}
          {!cupon.canjeado && (
            <button
              onClick={() => handleCanjear(cupon)}
              className="w-full bg-[#c7455d] hover:bg-red-700 text-white font-bold py-4 px-4 rounded-3xl transition-colors"
            >
              Canjear
            </button>
          )}

          {/* Si está canjeado, mostrar texto opcional */}
          {cupon.canjeado && (
            <p className="text-red-500 font-semibold">Cupón canjeado</p>
          )}
        </div>
      ))}
    </div>
  );
}