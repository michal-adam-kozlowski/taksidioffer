
import React from 'react';
import './Highlights.scss';
import Popup from "./HighlightPopup";


class Highlight extends React.Component {

    constructor(props) {
        super(props);
        // here is the popup state
        this.state = {
            showPopup: false,
        };
        this.togglePopup = this.togglePopup.bind(this);
    }
    // function to toggle popup
    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup,
        });
    }

    render() {

        return (
            <div className='highlight' onClick={() => this.togglePopup()} ><div className="overlayImage"></div>
                <img src={require(`${this.props.image}`)} alt={""} className='image' />
                <div className="textBox"><p className='title'>{this.props.name}</p></div>
                {this.state.showPopup ?
                    <Popup
                        text='Click "Close Button" to hide popup'
                        closePopup={this.togglePopup}
                        name={this.props.name}
                        info={this.props.info}
                    />
                    : null
                }
            </div>
        )
    }
}

export default Highlight;