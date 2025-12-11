import React, { useEffect, useState } from "react";

export default function FallingHearts() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newHeart = {
        id: Date.now(),
        left: Math.random() * 100, // posición horizontal %
        size: 20 + Math.random() * 20, // tamaño entre 20px y 40px
        duration: 5 + Math.random() * 5 // duración de caída
      };
      setHearts((prev) => [...prev, newHeart]);

      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
      }, newHeart.duration * 1000);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            animationDuration: `${heart.duration}s`
          }}
          className="absolute text-pink-400 animate-fall"
        >
          ❤️
        </span>
      ))}
    </div>
  );
}
