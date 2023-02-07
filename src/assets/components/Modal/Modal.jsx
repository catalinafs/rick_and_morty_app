import React, { useState } from "react";
import './index.css';

const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
          <button onClick={() => setIsOpen(!isOpen)}>Open</button>
          {isOpen && (
            <div className="Modal">
              <div className="ModalContent">
                <div className="ModalHeader">
                  <h2>Programadores</h2>
                </div>
                <div className="ModalBody">
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