import React from "react";


function Layout({children}:{ children: React.ReactNode }):JSX.Element {
    return(
        <div className="flex flex-col">
            {children}
        </div>
    );
}

export default Layout;