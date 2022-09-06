import React from "react";
import bgMainMobile from './bg-main-mobile.png'
import bgMainDesktop from './bg-main-desktop.png';
import './Main.css';

function Main({children}) {
    let bgMain;
    if (window.innerWidth <= 800) {
        bgMain = bgMainMobile;
    } else {
        bgMain = bgMainDesktop;
    }
    return(
        <main style={{ 
            backgroundImage: `url("${bgMain}")`
        }}>
            {children}
        </main>
    );
}

export { Main }