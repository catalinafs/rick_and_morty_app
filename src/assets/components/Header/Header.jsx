import React from "react";
import Modal from "../Modal/Modal.jsx";
import './index.css';

const Header = () => {
    return (<>
    <div className="header" >
        <input className="inputName" placeholder="search"></input>
        <Modal/>
        
    </div>
    </>);
};

export default Header;