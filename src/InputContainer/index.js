import React from "react";
import './InputContainer.css';

function InputContainer({children}) {
    return(
        <div className="input-container">
            {children}
        </div>
    );
}

export { InputContainer }