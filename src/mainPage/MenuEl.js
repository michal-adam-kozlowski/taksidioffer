
import React from 'react';
import './Menu.scss';
import { Link } from "react-router-dom";

class MenuEl extends React.Component {
    render() {
        return (
            <>
                <li className="navItem"><Link to={this.props.menu_link}>{this.props.name}<i className={this.props.class}></i></Link></li>
            </>
        );
    }
}

export default MenuEl