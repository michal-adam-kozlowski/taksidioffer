
import React from 'react';
import './MenuPage.scss';
import HamburgerEl from "./HamburgerEl.js";
import './Hamburger.scss';
import MenuEl from "./MenuEl.js"
import $ from 'jquery';
import { Link } from 'react-router-dom';

var MenuArr = [
    {
        index: 1,
        name: 'Nasze wyjazdy',
        menu_link: 'Wyjazdy',
        class: '',
    },
    {
        index: 2,
        name: 'Okres specjalny',
        menu_link: 'Okres-specjalny',
        class: '',
    },
    {
        index: 3,
        name: 'Promocje',
        menu_link: 'Promocje',
        class: ""
    },
    {
        index: 4,
        name: 'Dlaczego My',
        menu_link: 'Dlaczego-My',
        class: "",
    },
    {
        index: 5,
        name: 'O nas',
        menu_link: 'O-nas',
        class: "",
    },
    {
        index: 6,
        name: 'FAQ',
        menu_link: 'FAQ',
        class: "",
    },

    {
        index: 7,
        name: 'Kontakt',
        menu_link: "Kontakt",
        class: ""
    },
    {
        index: 8,
        name: 'Zaloguj',
        menu_link: "Zaloguj",
        class: ""
    },
    {
        index: 9,
        name: 'PL',
        menu_link: "",
        class: "arrow down"
    },

]

class MenuPage extends React.Component {
    componentDidMount() {
        $(".menuCollapsed").click(function () {
            $(this).toggleClass("menuExpanded");
        });
    }
    render() {
        return (
            <>
                <div id="menuPage">
                    <div class="menu">
                        <div class="logoBox">
                        <Link to="/"><img src={require('./mainPage//img/logo-taksidi.png')} alt='logo' /></Link>
                        </div>
                        <div class="menuCollapsed">
                            <div class="bar"></div>
                            <nav>
                                <ul>
                                    {MenuArr.map((hamburgerItem) =>
                                        <HamburgerEl name={hamburgerItem.name} menu_link={hamburgerItem.menu_link} />
                                    )}
                                </ul>
                            </nav>
                        </div>
                        <ul class="navItems">
                            {MenuArr.map((menuItem) =>
                                <MenuEl name={menuItem.name} menu_link={menuItem.menu_link} class={menuItem.class} />
                            )}
                        </ul>
                    </div>
                </div>

            </>
        );
    }
}

export default MenuPage
