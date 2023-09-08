import React from "react";

function Layout({children}) {
    return(
        <div className="flex flex-col mt-11">
            {children}
        </div>
    );
}

export default Layout;