/* eslint-disable */
import React, { useState } from "react";
import "../styles/userProfile.css";
import UserProfile from "../components/userProfile";
import PurchasesHistory from "../components/purchasesHistory";
import Favorites from "../components/Favorites";
const User = () => {
  // Estado para controlar qué opción está seleccionada
  const [selectedOption, setSelectedOption] = useState("personalInfo");

  // Función para cambiar la opción seleccionada
  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="user-profile">
      <div className="user-options">
        {/* Opción Información Personal */}
        <div
          className={`user-option ${
            selectedOption === "personalInfo" ? "selected" : ""
          }`}
          onClick={() => handleOptionChange("personalInfo")}
        >
          Información Personal
        </div>

        {/* Opción Historial de Compras */}
        <div
          className={`user-option ${
            selectedOption === "purchaseHistory" ? "selected" : ""
          }`}
          onClick={() => handleOptionChange("purchaseHistory")}
        >
          Historial de Compras
        </div>

        {/* Opción Favoritos */}
        <div
          className={`user-option ${
            selectedOption === "favorites" ? "selected" : ""
          }`}
          onClick={() => handleOptionChange("favorites")}
        >
          Favoritos
        </div>
      </div>

      {/* Sección de la derecha para mostrar el contenido dependiendo de la opción seleccionada */}
      <div className="user-section">
        {selectedOption === "personalInfo" && <UserProfile />}

        {selectedOption === "purchaseHistory" && <PurchasesHistory />}

        {selectedOption === "favorites" && <Favorites />}
      </div>
    </div>
  );
};

export default User;
