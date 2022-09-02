import React from "react";
import bgMainMobile from './bg-main-mobile.png'
import './Main.css';

function Main({children}) {
    return(
        <main style={{ 
            backgroundImage: `url("${bgMainMobile}")`
        }}>
            {children}
        </main>
    );
}

export { Main }