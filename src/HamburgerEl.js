
import React from 'react';
import './Hamburger.scss';

class HamburgerEl extends React.Component {
    render() {
        return (
            <>
            <li><a href={this.props.menu_link}>{this.props.name}<i className={this.props.class}></i></a></li>
            </>
        );
    }
}

export default HamburgerEl
