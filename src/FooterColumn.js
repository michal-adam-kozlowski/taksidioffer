import React, { Component } from "react";
import "./Footer.scss";
import { Link, } from "react-router-dom";

class FooterColumn extends Component {
    render() {
        return (
            <p><Link to={this.props.link}>{this.props.title}</Link></p>
        );
    }
}

export default FooterColumn;


