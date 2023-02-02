import React from "react";

const Layout = ({ children }) => {
    return (<>
        <div className="fatherCards">{children}</div>
    </>);
};

export default Layout;