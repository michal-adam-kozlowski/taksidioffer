
import React from 'react';
import './Footer.scss';
import FooterColumn from './FooterColumn.js'

var OurTripsArr = [
    {
        index: 1,
        link: "wyjazdy",
        title: "Przeglądaj wyjazdy",
    },

    {
        index: 2,
        title: "Okres Specjalny",
        link: "Okres Specjalny",
    },

    {
        index: 3,
        title: "Kraj",
        link: "Kraj",
    },

]

var SpecialTripsArr = [
    
    {
        index: 1,
        link: "Majówka",
        title: "Majówka",
    },

    {
        index: 2,
        title: "Boże Ciało",
        link: "Boże Ciało",
    },

    {
        index: 3,
        title: "Sylwester",
        link: "Sylwester",
    },

]

var DiscountsArr = [
    
    {
        index: 1,
        link: "Zniżki",
        title: "Zniżki",
    },

    {
        index: 2,
        title: "Promocje",
        link: "Promocje",
    },

    {
        index: 3,
        title: "Partner",
        link: "Partner",
    },

]

var WhyUsArr = [
    
    {
        index: 1,
        link: "Wyjazdy dla każdego",
        title: "Wyjazdy dla każdego",
    },

    {
        index: 2,
        title: "Najlepsze wyjazdy",
        link: "Najlepsze wyjazdy",
    },

    {
        index: 3,
        title: "Najlepsze apatamenty",
        link: "Najlepsze apatamenty",
    },

    {
        index: 4,
        title: "Najlepsze atrakcje",
        link: "Najlepsze atrakcje",
    },

    {
        index: 5,
        title: "Najlepsze wspomnienia",
        link: "Najlepsze wspomnienia",
    },

]

var AboutUsArr = [
    
    {
        index: 1,
        link: "O firmie",
        title: "O firmie",
    },

    {
        index: 2,
        title: "Nasi ludzie",
        link: "Nasi ludzie",
    },

    {
        index: 3,
        title: "Pracuj z Nami",
        link: "Pracuj z Nami",
    },

    {
        index: 4,
        title: "Formalności",
        link: "Formalności",
    }

]

var ContactArr = [
    
    {
        index: 1,
        link: "Skontaktuj się z nami",
        title: "Skontaktuj się z nami",
    },

    {
        index: 2,
        title: "FAQ",
        link: "FAQ",
    },

]

function Footer() {
    return (
        <div id="footerContainer">
            <div className="footerMenu">
                <div className="top">
                    <div className="imageLogo" ><img src={require('./mainPage/img/logo-taksidi.png')} alt='logo' /></div>
                    <div className="socialMediaContainer">
                        <p>Śledź Nas!</p>
                        <div className="icons">
                            <i className="fab fa-facebook-square"></i>
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-youtube"></i>
                        </div>
                    </div>
                </div>
                <div className="wrapper">
                    <div className="oneFooterBox">
                        <h5>Nasze wyjazdy</h5>
                        {OurTripsArr.map((oneElement) =>
                            <FooterColumn
                                link={oneElement.link} title={oneElement.title} />
                        )}
                    </div>

                    <div className="oneFooterBox">
                        <h5>Okres specjalny</h5>
                        {SpecialTripsArr.map((oneElement) =>
                            <FooterColumn
                                link={oneElement.link} title={oneElement.title} />
                        )}
                    </div>


                    <div className="oneFooterBox">
                        <h5>Promocje</h5>
                        {DiscountsArr.map((oneElement) =>
                            <FooterColumn
                                link={oneElement.link} title={oneElement.title} />
                        )}
                    </div>

                    <div className="oneFooterBox">
                        <h5>Dlaczego My?</h5>
                        {WhyUsArr.map((oneElement) =>
                            <FooterColumn
                                link={oneElement.link} title={oneElement.title} />
                        )}
                    </div>

                    <div className="oneFooterBox">
                        <h5>O nas</h5>
                        {AboutUsArr.map((oneElement) =>
                            <FooterColumn
                                link={oneElement.link} title={oneElement.title} />
                        )}
                    </div>

                    <div className="oneFooterBox">
                        <h5>O nas</h5>
                        {ContactArr.map((oneElement) =>
                            <FooterColumn
                                link={oneElement.link} title={oneElement.title} />
                        )}
                    </div>

                </div>
            </div>
            <div className="footerContact">
                <div className="container">
                    <div className="wrapper">
                        <div className="oneContactBox">
                            <h5>Dane Firmy</h5>
                            <p>Taksidi Sp. z o.o.</p>
                            <p>ul. Armii Krajowej 3</p>
                            <p>05-530 Góra Kalwaria</p>
                            <p>NIP 123 122 14 63</p>
                        </div>
                        <div className="oneContactBox">
                            <h5>Dane kontaktowe</h5>
                            <p>Taksidi Sp. z o.o.</p>
                            <p>ul. Armii Krajowej 3</p>
                            <p>05-530 Góra Kalwaria</p>
                            <p>NIP 123 122 14 63</p>
                        </div>
                        <div className="oneContactBox">
                            <h5>Licencja</h5>
                            <p>Numer licencji organizatora turystyki 1163</p>
                        </div>
                    </div>
                </div>
                <div className="footerBottom">
                    <div className="text">
                        <p>Regulamin strony</p>
                        <p>Polityka Prywatnosci</p>
                        <p className="copyRight">© 2020 Copyright Taksidi. Wykonanie: Kerris Group</p>
                    </div>
                    <div className="logo"><img src={require("./mainPage/img/fundusze.jpg")} alt="" /></div>
                    <p className="copyRight2">© 2020 Copyright Taksidi. Wykonanie: Kerris Group</p>
                </div>
            </div>
        </div>
    );
}

export default Footer

