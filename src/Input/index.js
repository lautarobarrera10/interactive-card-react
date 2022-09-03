import React from "react";
import './Input.css';

function Input({
    type,
    text,
    placeholder,
}) {
    if (type === 'text' || type === 'number' || type === 'name') {
        return(
            <div className="Input-Text-Container">
                <p className="Input-Text--Text">{text}</p>
                <input className="Input-Text--Input" type={type} placeholder={placeholder} />
            </div>
        );
    }
    if(type === 'special') {
        return(
            <div className="special-container">
                <div className="special-inputandtext-container">
                    <p className="Input-Text--Text">EXP. DATE (MM/YY)</p>
                    <div className="special-input-container">
                        <input placeholder='MM' type='number' className="Input-Text--Input special-input"/>
                        <input placeholder='YY' type='number' className="Input-Text--Input special-input"/>
                    </div>
                </div>
                <div className="special-inputandtext-container cvc-container">
                    <p className="Input-Text--Text">CVC</p>
                    <input placeholder="e.g. 123" type='number' className="Input-Text--Input"/>
                </div>
            </div>
        );
    }
}

export { Input }