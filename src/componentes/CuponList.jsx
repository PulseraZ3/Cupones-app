import React from "react";
import { Link } from "react-router-dom";
import { lista } from "../data/cupones";

export default function CuponList() {
  return (
    <div className="px-9 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
      {lista.map((cupon) => (
        <div
          key={cupon.id}
          className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col items-center my-5" 
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
          <Link
            to={`/cupon/${cupon.id}`}
            className="w-full text-center bg-[#c7455d] hover:bg-red-700 text-white font-bold py-4 px-4 rounded-3xl transition-colors"
          >
            Canjear
          </Link>
        </div>
      ))}
    </div>
  );
}
