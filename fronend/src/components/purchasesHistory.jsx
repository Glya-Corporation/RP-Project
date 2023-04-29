/* eslint-disable */
import React from "react";
import { useSelector } from "react-redux";
const PurchasesHistory = () => {
  /* ejemplo hasta tener el point*/
  let compras = [
    "campra 1",
    "compra 2",
    "compra 3",
    "compra 4",
    "compra 5",
    "compra 6",
    "compra 7",
    "compra 8",
    "compra 9",
  ];
  return (
    <div>
      <h2>Historial de Compras</h2>
      <ul>
        {compras.map((e) => (
          <li key={e}>{e}</li>
        ))}
      </ul>
    </div>
  );
};

export default PurchasesHistory;
