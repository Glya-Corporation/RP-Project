/* eslint-disable */
import React, { useState } from "react";
import "../styles/register.css";
import RegistrationForm from "../components/FormComerciante";
import RegistroFormUser from "../components/FormUserFinal";
const SelectRol = () => {
  const [rol, setRol] = useState("");
  const [handleForm, setHandleForm] = useState("");

  const [pagina, setPagina] = useState(100);
  const handleNextPart = () => {
    const formu = document.getElementById("mostrar-form");
    setHandleForm(rol);
    setPagina(pagina + 100);
    formu.style.marginLeft = "-" + pagina + "%";
  };

  return (
    <div className="content-form">
      <div className="mostrar-form" id="mostrar-form">
        <div className="pagina pagina-rol">
          <div className="titulo">Seleccionar rol</div>

          <div className="content-rol">
            <button onClick={() => setRol("mayorista")} className="button-rol">
              Soy mayorista
            </button>

            <button
              onClick={() => setRol("distribuidor")}
              className="button-rol"
            >
              Soy distribuidor o proveedor
            </button>

            <button
              onClick={() => setRol("comerciante")}
              className="button-rol"
            >
              Soy comerciante o reevendedor
            </button>

            <button
              onClick={() => setRol("consumidor_final")}
              className="button-rol"
            >
              Soy consumidor final
            </button>

            <button onClick={() => handleNextPart()} className="button-next">
              {" "}
              siguiente
            </button>
          </div>
        </div>
        <div className="pagina-rol">
          {handleForm === "comerciante" ? (
            <RegistrationForm rol={rol} />
          ) : (
            handleForm === "consumidor_final" && <RegistroFormUser rol={rol} />
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectRol;
