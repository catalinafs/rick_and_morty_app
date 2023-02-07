import React, { useState } from "react";
import './index.css';

function Modal() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
          <button onClick={() => setIsOpen(!isOpen)}>Open</button>
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
                  <button onClick={() => setIsOpen(!isOpen)}>Close</button>
                </div>
              </div>
            </div>
          )}
        </>
      );
}

export default Modal;