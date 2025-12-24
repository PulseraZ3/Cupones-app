import React, { Component } from "react";
import Header from "../componentes/Header";
import CuponList from "../componentes/CuponList";
import FallingHearts from "../componentes/Corazones";
import Footer from "../componentes/Footer";
export default function Home({ cupones, canjearCupon }) {
  // Separar cupones disponibles y canjeados
  const disponibles = cupones.filter(c => !c.canjeado);
  const canjeados = cupones.filter(c => c.canjeado);

  return (
    <div>
      <FallingHearts />
      <Header />

      {/* Cupones Disponibles */}
      <div className="bg-[#fee6ea] p-6 flex flex-col justify-center">
        <h2 className="text-3xl font-bold text-red-600 font-sansita drop-shadow-lg truncate mx-2 text-center md:text-left">Cupones Disponibles</h2>
        {disponibles.length > 0 ? (
          <CuponList cupones={disponibles} canjearCupon={canjearCupon}/>
        ) : (
          <p className="font-sansita mx-2">No hay cupones disponibles</p>
        )}
      </div>

      {/* Cupones Canjeados */}
      <div className="bg-[#fee6ea] p-6">
        <h2 className="text-3xl font-bold text-black font-sansita drop-shadow-lg truncate mx-2">Cupones Canjeados</h2>
        {canjeados.length > 0 ? (
          <CuponList cupones={canjeados}/>
        ) : (
          <p className="font-sansita mx-2">No hay cupones canjeados</p>
        )}
      </div>

      <Footer />
    </div>
  );
}