import React from "react";
import Modal from "../Modal/Modal.jsx";
import './index.css';

const Header = () => {
    return (<>
    <div className="header" >
        <Modal/>
        <input className="inputName" placeholder="search"></input>
        <a href="#">click</a>
    </div>
    </>);
};

export default Header;