import React, { useState } from "react";
import './index.css';

const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
          <button onClick={() => setIsOpen(!isOpen)}>Coders</button>
          {isOpen && (
            <div className="MainContainerModal">

              <div className="ContainerModal">
                <button onClick={() => setIsOpen(!isOpen)}>X</button>

                <h2>Programadores</h2>

                <div className="Modal">
                  <h2>Juan Francisco</h2>
                  <h2>Sebastian Bula</h2>
                  <h2>Catalina Forero</h2>
                </div>
              </div>
            </div>
          )}
        </>
      );
}

export default Modal;