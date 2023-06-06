/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/register.css';
import { useDispatch, useSelector } from 'react-redux';
import Example from './registroExitoso';
import { addUserThunk } from '../store/slices/user.slice';

const RegistroFormUser = ({ rol }) => {
  /*provincias */

  const provincia = useSelector(state => state.location);

  /*-------- */

  const [formUser, setFormUser] = useState(new FormData());
  const [business, setBusiness] = useState({});
  const [modal, setModal] = useState('');

  /*-----seleccionar archivo */
  const selectFile = file => {
    document.getElementById(file).click();
  };

  /*--------------- */
  const handlePassword = () => {};

  const handleInputChange = event => {
    const { name, value } = event.target;
    formUser.set(name, value);
  };

  const handleFileChange = event => {
    const { name, files } = event.target;

    const UrlImage = URL.createObjectURL(files[0]);
    formUser.set(name, UrlImage.split('blob:')[1]);
  };
  const [pagina, setPagina] = useState(100);
  const handleNextPart = () => {
    const formu = document.getElementById('formu');
    setPagina(pagina + 100);
    formu.style.marginLeft = '-' + pagina + '%';
  };
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);
  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30
  };
  /*-------- */
  const dispatch = useDispatch();
  /*-------- */
  const handleSubmit = () => {
    setModal('xxl-down');
    formUser.append('roleId', rol);
    formUser.append('isClientFinal', true);
    let user = new Object();
    for (const pair of formUser.entries()) {
      user[pair[0]] = pair[1];
    }

    dispatch(addUserThunk({ user, business }));
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
        </div>
      </div>
      <form id="formu">
        <div className="pagina">
          <div className="titulo">Datos personales</div>
          <div className="form-control">
            {' '}
            <label> Nombre y apellido:</label>
            <input type="text" name="fullName" onChange={handleInputChange} />
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
            <label> Numero de celular:</label>
            <input type="tel" name="number" onChange={handleInputChange} />
          </div>
          <br />
          <div className="form-control">
            <label> Contraseña:</label>
            <input type="password" name="password" onChange={handleInputChange} />
          </div>
          <br />
          <div className="form-control">
            <label> Confirmar contraseña:</label>
            <input type="password" name="confirmarPassword" onChange={handlePassword()} />
          </div>
          <br />
          <div className="tyc">
            <div className="tyc-text">
              <p>
                Acepto <a href="#">términos y condiciones generales y política de privacidad</a> de Unimarket.
              </p>
            </div>
            <div className="switch" data-isOn={isOn} onClick={toggleSwitch}>
              <motion.div className="handle" layout transition={spring} />
            </div>
          </div>

          <div className="form-control">
            <button className="button-next " type="button" onClick={() => handleNextPart()}>
              Siguiente
            </button>
          </div>
        </div>
        <div className="pagina">
          {' '}
          <div className="titulo">Datos personales</div>
          <div className="form-control">
            <label> Tipo de documento:</label>
            <div className="tipo-cuit">
              <select name="dni" onChange={handleInputChange}>
                <option value="dni">DNI</option>
              </select>

              <input type="text" name="dni" onChange={handleInputChange} />
            </div>
          </div>
          <br />
          {/* <div className="form-control">
            <label> Provincia:</label>
            <select name="provincia" onChange={handleInputChange}>
              <option defaultValue={'true'} value="#">
                seleccione una opcion
              </option>
              {provincia.map(e => (
                <option key={e.id} value={e.nombre}>
                  {e.nombre}
                </option>
              ))}
            </select>
          </div> */}
          <br />
          {/* <div className="form-control">
            <label> Calle y número:</label>
            <input type="text" name="calleNumero" onChange={handleInputChange} />
          </div> */}
          <br />
          <div className="form-control docum">
            <label> Foto de perfil:</label>
            <div className="ducumentacion">
              <input style={{ display: 'none' }} id="imgProfile" type="file" name="imgProfile" onChange={handleFileChange} />
              <button onClick={() => selectFile('imgProfile')} type="button" className="icono">
                <span className="material-symbols-outlined">drive_folder_upload</span>
                subir archivo
              </button>
            </div>
          </div>
          <br />
          <div className="form-control">
            <button className="button-omitir " type="button" onClick={() => handleSubmit()}>
              Omitir
            </button>
            <button className="button-next " type="button" onClick={() => handleSubmit()}>
              Crear cuenta
            </button>
          </div>
        </div>
      </form>{' '}
      <Example modal={modal} />
    </div>
  );
};

export default RegistroFormUser;
