import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { lista } from "../data/cupones";
import QRCode from "qrcode.react";

export default function Cupon() {
const { id } = useParams();
  const navigate = useNavigate();
  const urlCupon = `${window.location.origin}/cupon/${cupon.id}`;
  const cupon = lista.find((c) => c.id === Number(id));

  if (!cupon) {
    return <p className="text-center mt-10">Cupón no encontrado 💔</p>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-50 p-6">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-sm w-full text-center">
        
        {cupon.imagen && (
          <img
            src={cupon.imagen}
            alt={cupon.titulo}
            className="w-24 h-24 mx-auto mb-4 object-contain"
          />
        )}
        <h1 className="text-2xl font-bold text-[#c7455d] mb-2">
          {cupon.titulo}
        </h1>
        <p className="text-gray-600 mb-4">{cupon.descripcion}</p>
        <p className="font-semibold text-gray-800 mb-6">
          {cupon.valor}
        </p>
        <button
          onClick={() => alert("Cupón canjeado 💖")}
          className="w-full bg-[#c7455d] hover:bg-[#a63b4b] text-white font-bold py-4 rounded-2xl mb-3 transition"
        >
          Confirmar canje
        </button>

        <button
          onClick={() => navigate(-1)}
          className="w-full text-gray-500 underline cursor-pointer"
        >
          Volver
        </button>
      </div>
    </div>
  );
}
