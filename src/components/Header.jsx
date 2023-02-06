import React from "react";

const Header = ({ children }) => {
    return (<>
    <div className="header">
       {children}
        <input className="inputName" placeholder="search"></input>
    </div>
    </>);
};

export default Header;