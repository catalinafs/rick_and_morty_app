import React from "react";

const Header = ({ children }) => {
    return (<>
    <div className="header">
        <input className="inputName" placeholder="search"></input>
    </div>
    </>);
};

export default Header;