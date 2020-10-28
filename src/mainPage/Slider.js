
import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import './Slider.scss';
import MenuWrapper from './MenuWrapper.js';
import { Player } from 'video-react';
import video from "./video/verbier2.mp4";
import coverImage from "./img/cover-taksidi.jpg"
import coverImage2 from "./img/cover-taksidi-2.jpg"
import logo from "./img/logo-taksidi.png"
import { Link } from 'react-router-dom';



const AutoplaySlider = withAutoplay(AwesomeSlider);

function Slider() {
    return (
        <div id="sliderContainer">
            <AutoplaySlider
                play={true}
                cancelOnInteraction={false}
                interval={6000}
            >
                <div><img src={coverImage} alt={""} /></div>
                <div><Player muted={true} autoPlay={true} loop={true} playsinline={true} controls={false} url="">
                    <source src={video} type="video/mp4" />
                </Player></div>
                <div><img src={coverImage2} alt={""}/></div>
            </AutoplaySlider>
            <MenuWrapper />
            <div className="stripeBox">
                <div className="stripe">
                    <div className="logoBox">
                        <img src={logo} alt='logo' />
                    </div>
                    <div className="textBox">
                        <div className="text">
                            <h1>Wyjazdy na narty dla każdego!</h1>
                            <p>Nasze wyjazdy tworzymy z myślą o osobach w wieku od 19 do około 39 lat, lubiących jak dużo się dzieje. </p>
                            <button id="button" className="btn">Zobacz wyjazdy</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Slider

