import React, { useState } from "react";

function Modal() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
          <button onClick={() => setIsOpen(true)} className="H">Abrir modal</button>
          {isOpen && (
            <div className="modal">
              <div className="modal-content">
                <div className="modal-header">
                  <h2>Programadores</h2>
                </div>
                <div className="modal-body">
                  Jufra,
                  Sebastian,
                  Catalina
                  <button onClick={() => setIsOpen(false)} className="M">Cerrar</button>
                </div>
              </div>
            </div>
          )}
        </>
      );
}

export default Modal;