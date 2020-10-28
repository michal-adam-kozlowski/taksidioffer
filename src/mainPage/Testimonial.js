import React, {Component} from "react";
import "./Testimonial.scss";

class Testimonial extends Component {
    render () {
        return (
            <div class="oneTestimonial">
                <img className='testimonialImage' src={require(`${this.props.image}`)} alt={""} />
                <h1 className='testimonialName'>{this.props.name}<span>{this.props.job}</span></h1>
                
                <p className='testimonialText'>{this.props.text}</p>
            </div>
        );
    }
}

export default Testimonial;
