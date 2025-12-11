import React, { Component } from "react";

export default function Header() {
  return (
<header className="flex items-center justify-center p-4 pt-4 w-full max-w-full overflow-hidden gap-2">
  <div className="flex gap-1 shrink-0">
    <span className="text-2xl animate-pulse">💌</span>
    <span className="text-2xl animate-bounce">🌸</span>
  </div>
  <h1 className="text-3xl font-bold text-red-600 font-sansita drop-shadow-lg truncate mx-2">
    Cupones
  </h1>
  <div className="flex gap-1 shrink-0">
    <span className="text-2xl animate-bounce">🌸</span>
    <span className="text-2xl animate-pulse">💌</span>
  </div>
</header>
  );
}
