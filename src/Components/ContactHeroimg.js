import './ContactHeroimg.css' ;
import React, { Component } from 'react';
import animationData from "../Assets/lottieimg1.json";
import Lottie from "lottie-react";  

class ContactHeroimg extends Component {
  render() {
    return (
      <div className='hero-img1'>
        {/* Lottie Animation as background */}
        <Lottie
          animationData={animationData}  // Proper prop for lottie-react
          autoplay
          loop
          style={{ height: '100%', width: '100%', position: 'absolute', zIndex: '-1' , objectFit: 'cover'  }}
        />

        {/* Heading content */}
        <div className='heading'>
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default ContactHeroimg;
