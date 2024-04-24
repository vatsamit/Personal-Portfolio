import "./Heroimg.css";
import IntroImg from "../Assets/intro-bg.jpg";
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const Heroimg = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = ["Hi, I'M A FREELANCER...", "Welcome to my Portfolio...", "Discover my Projects..."];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex(prevIndex => (prevIndex + 1) % texts.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg"/>
      </div>
      <div className="Content">
        <p>{texts[textIndex]}</p>
        <h1>React Developer</h1>
        <div>
          <Link to="/project" className="btn">Projects</Link>
          <Link to="/contact" className=" btn btn-light">Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default Heroimg;
