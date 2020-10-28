
import React from 'react';
import Slider from "./Slider.js";
import TestimonialsWrapper from './TestimonialsWrapper'
import DestinationWrapper from "./DestinationWrapper.js"
import ProgramWrapper from "./ProgramWrapper.js"
import HighlightsWrapper from "./HighlightsWrapper.js"
import Newsletter from "./Newsletter.js"
import Contact from "./Contact.js"
import PartnersWrapper from "./PartnersWrapper.js"
// import Footer from "./Footer.js"

function MainPage() {
    return (
        <div>
            <Slider />
            <TestimonialsWrapper />
            <DestinationWrapper />
            <ProgramWrapper />
            <HighlightsWrapper />
            <Newsletter />
            <Contact />
            <PartnersWrapper />
            {/* <Footer />  */}
        </div>

    );
}

export default MainPage
