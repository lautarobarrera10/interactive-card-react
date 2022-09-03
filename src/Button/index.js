import React from "react";
import './Button.css';

function Button({children}) {
    return(
        <button type="submit" className="Button">
            {children}
        </button>
    );
}

export { Button }