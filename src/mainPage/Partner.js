import React, { Component } from "react";
import "./Partner.scss";

class Partner extends Component {
    render() {
        return (
            <div className="onePartner">
                <div className="imageLogo">
                    <img src={require(`${this.props.image}`)} alt="" /></div>
                <div className="partnersInfo">
                    <p>{this.props.info}</p>
                    <a href={this.props.page} target="_blank" rel="noopener noreferrer">Dowiedz się więcej<i className="arrow"></i></a>
                </div>
            </div>
        );
    }
}

export default Partner;
