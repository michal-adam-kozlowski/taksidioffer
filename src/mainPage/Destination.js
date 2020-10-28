import React, { Component } from "react";
import "./Destination.scss";

class Destination extends Component {
    render() {
        return (
            <div className="oneDestination">
                <div className="destinationImage"><img src={require(`${this.props.image}`)} alt={""} /></div>
                <h3 className="destinationName">{this.props.country_name}</h3>
                <div className="destinationNumberBox"><span className="destinationNumber">{this.props.number}</span></div>
                <button className="destinationButton btn"><a href={this.props.more_destinations}>Zobacz wyjazdy</a></button>
            </div>
        );
    }
}

export default Destination;
