import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Heroimg2 from '../Components/HeroImg2';
import AboutContent from '../Components/AboutContent';

const About = () => {
  const [text, setText] = useState("I'm a friendly Frontend Developer");

  useEffect(() => {
    const texts = [
      "I'm a friendly MERN Developer",
      "I love creating awesome websites",
      "Let's build something amazing together",
      
    ];

    let index = 0;

    const intervalId = setInterval(() => {
      index = (index + 1) % texts.length;
      setText(texts[index]);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []); // 

  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="ABOUT." text={text} />
      <AboutContent/>
      <Footer/>
    </div>
  );
}

export default About;
