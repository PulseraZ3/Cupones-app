const QRCode = require("qrcode");
const fs = require("fs");

const BASE_URL = "https://cupones-app-rho.vercel.app/cupon";

const cupones = [
  { id: 1, nombre: "cine" },
  { id: 2, nombre: "cena" },
  { id: 3, nombre: "masaje" },
  { id: 4, nombre: "postre" },
  { id: 5, nombre: "paseo" },
  { id: 6, nombre: "juegos" },
  { id: 7, nombre: "carta" },
  { id: 8, nombre: "pelicula" },
  { id: 9, nombre: "desayuno" },
  { id: 10, nombre: "bano" },
  { id: 11, nombre: "no-peleas" },
  { id: 12, nombre: "picnic" },
  { id: 13, nombre: "playa" },
  { id: 14, nombre: "fideos" },
  { id: 15, nombre: "abrazos" },
];

if (!fs.existsSync("qrs")) {
  fs.mkdirSync("qrs");
}

cupones.forEach((cupon) => {
  const url = `${BASE_URL}/${cupon.id}`;

  QRCode.toFile(
    `qrs/cupon-${cupon.id}-${cupon.nombre}.png`,
    url,
    {
      color: {
        dark: "#c7455d",
        light: "#ffffff",
      },
      width: 600,
    },
    (err) => {
      if (err) console.error(err);
      else console.log(`QR generado: cupón ${cupon.id}`);
    }
  );
});
