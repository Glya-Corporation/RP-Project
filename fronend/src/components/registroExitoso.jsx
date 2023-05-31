/* eslint-disable */
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Example({ modal }) {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  useEffect(() => {
    modal != "" && (setFullscreen(modal), setShow(true));
  }, [modal]);

  return (
    <>
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Body>
          Gracias por registrarse en Unimarket. Para validar su cuenta revise su
          correo ...
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Example;
