import React, { Component } from "react";
import Header from "../componentes/Header";
import CuponList from "../componentes/CuponList";
import FallingHearts from "../componentes/Corazones";
export default function Home() {
  return (
    <div>
      <FallingHearts />
      <Header />
      <div className="bg-[#fee6ea]">
        <CuponList />
      </div>
    </div>
  );
}
