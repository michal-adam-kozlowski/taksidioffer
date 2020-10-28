
import React from 'react';
import './ProgramWrapper.scss';
import ProgramCarousel from "./ProgramCarousel.js"                 

function ProgramWrapper() {
    return (
        <div id="programContainer">
            <div className="programBox">
                <div className="overlayImage"></div>
                <h2>Rób to, czego pragniesz</h2>
                <div className="programBoxes">
                <ProgramCarousel />
                </div>
            </div>
        </div>
    );
}

export default ProgramWrapper
