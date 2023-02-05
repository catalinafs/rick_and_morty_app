import React, { useState } from "react";

function Modal() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
          <button onClick={() => setIsOpen(true)}>Abrir modal</button>
          {isOpen && (
            <div className="modal">
              <div className="modal-content">
                <div className="modal-header">
                  <h2>Título del modal</h2>
                  <button onClick={() => setIsOpen(false)}>Cerrar</button>
                </div>
                <div className="modal-body">
                  Contenido del modal
                </div>
              </div>
            </div>
          )}
        </>
      );
}

export default Modal;