import React from "react";
import Modal from "../Modal/Modal.jsx";
import './index.css';

const Header = ({ children }) => {
    return (<>
    <div className="header" >
        { children }
        <input className="inputName" placeholder="search"></input>
        <Modal/>
    </div>
    </>);
};

export default Header;