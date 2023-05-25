/* eslint-disable */
import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/register.css";
import { useSelector } from "react-redux";

const RegistrationForm = () => {
  /*provincias */
  const provincia = useSelector((state) => state.location);

  /*-------- */
  const [rol, setRol] = useState("");
  const [formData, setFormData] = useState(new FormData());

  /*-----seleccionar archivo */
  const selectFile = (file) => {
    document.getElementById(file).click();
  };

  /*--------------- */
  const handleRol = () => {
    handleNextPart();
    formData.append("rol", rol);
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    formData.set(name, value);
  };

  const handleFileChange = (event) => {
    const { name, files } = event.target;
    formData.set(name, files[0]);
  };
  const [pagina, setPagina] = useState(100);
  const handleNextPart = () => {
    const formu = document.getElementById("formu");
    setPagina(pagina + 100);
    formu.style.marginLeft = "-" + pagina + "%";
  };
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    for (const pair of formData.entries()) {
      console.log(`${pair[0]}, ${pair[1]}`);
    }
  };

  return (
    <div className="content-form">
      <div className="content-progres">
        <div className="progress-bar">
          <div className="paso">
            <div id="uno" className="num">
              1
            </div>
          </div>
          <div className="paso medio">
            <div id="dos" className="num">
              2
            </div>
          </div>
          <div className="paso">
            <div id="tres" className="num">
              3
            </div>
          </div>
        </div>
      </div>
      <form id="formu" onSubmit={handleSubmit}>
        <div className="pagina">
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

            <button onClick={() => handleRol()} className="button-next">
              {" "}
              siguiente
            </button>
          </div>
        </div>
        <div className="pagina">
          <div className="titulo">Datos personales</div>
          <div className="form-control">
            {" "}
            <label> Nombre y apellido:</label>
            <input
              type="text"
              name="nombreApellido"
              onChange={handleInputChange}
            />
          </div>
          <br />
          <div className="form-control">
            <label> Username:</label>
            <input type="text" name="username" onChange={handleInputChange} />
          </div>
          <br />
          <div className="form-control">
            <label> Correo electrónico:</label>
            <input type="email" name="email" onChange={handleInputChange} />
          </div>
          <br />
          <div className="form-control">
            <label> Teléfono:</label>
            <input type="tel" name="telefono" onChange={handleInputChange} />
          </div>
          <br />
          <div className="form-control">
            <label> Contraseña:</label>
            <input
              type="password"
              name="password"
              onChange={handleInputChange}
            />
          </div>
          <br />
          <div className="form-control">
            <label> Confirmar contraseña:</label>
            <input
              type="password"
              name="confirmarPassword"
              onChange={handleInputChange}
            />
          </div>
          <br />
          <div className="tyc">
            <div className="tyc-text">
              <p>
                Acepto{" "}
                <a href="#">
                  términos y condiciones generales y política de privacidad
                </a>
                de Unimarket.
              </p>
            </div>
            <div className="switch" data-isOn={isOn} onClick={toggleSwitch}>
              <motion.div className="handle" layout transition={spring} />
            </div>
          </div>

          <div className="form-control">
            <button
              className="button-next "
              type="button"
              onClick={() => handleNextPart()}
            >
              Siguiente
            </button>
          </div>
        </div>
        <div className="pagina">
          {" "}
          <div className="titulo">Datos de comercio</div>
          <div className="form-control">
            <label> Nombre de comercio:</label>
            <input
              type="text"
              name="nombreComercio"
              onChange={handleInputChange}
            />
          </div>
          <br />
          <div className="form-control">
            <label> Tipo de documento:</label>
            <div className="tipo-cuit">
              <select name="tipoDocumento" onChange={handleInputChange}>
                <option value="cuit">CUIT</option>
              </select>

              <input
                type="text"
                name="numeroDocumento"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <br />
          <div className="form-control">
            <label> Tipo de negocio:</label>
            <select name="tipoDeNegocio" onChange={handleInputChange}>
              <option value="autoservicio">Autoservicio</option>
              <option value="opcion2">opcion2</option>
              <option value="opcion3">opcion3</option>
              <option value="opcion4">opcion4</option>
            </select>
          </div>
          <br />
          <div className="form-control">
            <label> Provincia:</label>
            <select name="provincia" onChange={handleInputChange}>
              {provincia.map((e) => (
                <option key={e.id} value={e.nombre}>
                  {e.nombre}
                </option>
              ))}
            </select>
          </div>
          <br />
          <div className="form-control">
            <label> Calle y número:</label>
            <input
              type="text"
              name="calleNumero"
              onChange={handleInputChange}
            />
          </div>
          <br />
          <div className="form-control">
            <label> Dirección de facturación:</label>
            <input
              type="text"
              name="direccionFacturacion"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-control">
            <div className="direcf">
              <p>
                Tu dirección de facturación debe ser igual que la dirección del
                negocio{" "}
              </p>
            </div>
          </div>
          <br />
          <div className="form-control">
            <button
              className="button-next "
              type="button"
              onClick={() => handleNextPart()}
            >
              Siguiente
            </button>
          </div>
        </div>
        <div className="pagina">
          {" "}
          <div className="titulo">Documentos</div>
          <div className="form-control">
            <label> Constancia de AFIP:</label>
            <div className="ducumentacion">
              <input
                style={{ display: "none" }}
                type="file"
                id="constancia"
                name="constanciaAFIP"
                onChange={handleFileChange}
              />
              <button
                onClick={() => selectFile("constancia")}
                type="button"
                className="icono"
              >
                <span className="material-symbols-outlined">
                  drive_folder_upload
                </span>
                subir archivo
              </button>
            </div>
          </div>
          <br />
          <div className="form-control">
            <label> Imagen de tu documento de identidad (frente):</label>
            <div className="ducumentacion">
              <input
                style={{ display: "none" }}
                id="dniFrente"
                type="file"
                name="imagenDniFrente"
                onChange={handleFileChange}
              />
              <button
                onClick={() => selectFile("dniFrente")}
                type="button"
                className="icono"
              >
                <span className="material-symbols-outlined">
                  drive_folder_upload
                </span>
                subir archivo
              </button>
            </div>
          </div>
          <br />
          <div className="form-control">
            <label> Imagen de tu documento de identidad (dorso):</label>
            <div className="ducumentacion">
              <input
                style={{ display: "none" }}
                type="file"
                id="dniDorso"
                name="imagenDniDorso"
                onChange={handleFileChange}
              />
              <button
                onClick={() => selectFile("dniDorso")}
                type="button"
                className="icono"
              >
                <span className="material-symbols-outlined">
                  drive_folder_upload
                </span>
                subir archivo
              </button>
            </div>
          </div>
          <br />
          <div className="form-control">
            <label> Tipo de persona:</label>
            <select name="tipoPersona" onChange={handleInputChange}>
              <option value="opcion1">Opción 1</option>
              <option value="opcion2">Opción 2</option>
            </select>
          </div>
          <br />
          <div className="form-control">
            <button className="button-next " type="submit">
              Crear cuenta
            </button>
          </div>
        </div>
      </form>{" "}
    </div>
  );
};

export default RegistrationForm;
