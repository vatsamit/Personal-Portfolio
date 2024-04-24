import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Heroimg2 from '../Components/HeroImg2';
import PricingCard from '../Components/PricingCard';
import Work from '../Components/Work';

const Project = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = ["Some of my recent works", "Check out my latest projects!"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [texts.length]);

  return (
    <div>
      <Navbar />
      <Heroimg2 heading="PROJECTS." text={texts[textIndex]} />
      <Work />
      <PricingCard />
      <Footer />
    </div>
  );
}

export default Project;
