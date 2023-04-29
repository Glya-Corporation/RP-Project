/* eslint-disable */
import React, { useState } from "react";
import "../styles/register.css";
import { useDispatch } from "react-redux";
import { addUserThunk } from "../store/slices/user.slice";
const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dni, setDni] = useState();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUserThunk({ username, email, password }));
    setShow(true);
    setEmail(""), setPassword(""), setUsername("");
  };
  const [show, setShow] = useState(false);

  return (
    <div className="container">
      <div className={show ? " show " : " show noshow"}>
        <div className="message">
          <p>
            gracias por registrarse en unitmarcket. por favor revise su bandeja
            de entrada para activar su cuenta
          </p>
        </div>
      </div>
      <div className="content-form">
        <h1>Registro de usuario</h1>
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-control ">
            <label
              htmlFor="username"
              className={username ? "input-label shrink" : "input-label"}
            >
              Nombre de usuario
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label
              htmlFor="email"
              className={email ? "input-label shrink" : "input-label"}
            >
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label
              htmlFor="dni"
              className={dni ? "input-label shrink" : "input-label"}
            >
              Dni
            </label>
            <input
              type="text"
              id="dni"
              value={dni}
              onChange={(e) => setDni(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label
              htmlFor="password"
              className={password ? "input-label shrink" : "input-label"}
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="button-form" type="submit">
            Submit
          </button>
          <p className="text">
            ya tienes una cuenta?
            <a href="#">iniciar sesion</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
