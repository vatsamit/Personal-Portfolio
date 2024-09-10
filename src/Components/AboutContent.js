import "./AboutStyle.css";

import React from 'react'
import { Link } from "react-router-dom";
import React1 from  "../Assets/react1.jpg" ;
import React2 from  "../Assets/mern1.jpeg" ;

const AboutContent = () => {
  return (
    <div className="about">
    <div className="left">
    <h1>Who Am I?</h1>
    <p>I am  a MERN-stack developer . I create responsive and secure websites for my clients </p>
    <Link to = "/contact">
    <button className="btn" >Contact </button>
    </Link>
    </div>
  <div className="right">
  <div className="img-container">
  <div className="img-stack top">
  <img src = {React1} className="img" alt="true"/>
  </div>
  <div className="img-stack bottom">
  <img src = {React2} className="img" alt="true"/>
  </div>
  </div>
  </div>

    </div>
  )
}

export default AboutContent
