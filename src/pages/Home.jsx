import React, { Component } from "react";
import Header from "../componentes/Header";
import CuponList from "../componentes/CuponList";
import FallingHearts from "../componentes/Corazones";
import Footer from "../componentes/Footer";
export default function Home() {
  return (
    <div>
      <FallingHearts />
      <Header />
      <div className="bg-[#fee6ea]">
        <CuponList />
      </div>
      <Footer/>
    </div>
  );
}
