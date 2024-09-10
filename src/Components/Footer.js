import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";
import "./footerStyle.css"; // Assuming you have some custom styling for the footer

import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          {/* Address */}
          <div className="location">
            <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
            <div>
              <p>k2-122 Nihal Vihar</p>
              <p>New Delhi , India</p>
            </div>                                   
          </div>

          {/* Phone */}
          <div className="phone">
            <h4><FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>8368726004</h4>
          </div>

          {/* Email */}
          <div className="email">
            <h4><FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>rokothe@gmail.com</h4>
          </div>
        </div>

        {/* About Me */}
        <div className="right">
          <h4>About Me</h4>
          <p>
          Hey there! I'm Amit Kumar, a passionate Full-Stack Developer with a knack for turning ideas into visually stunning realities.</p>

          <p>💡 I thrive on the thrill of tackling fresh projects and embracing design challenges head-on. Whether it's crafting seamless user experiences or bringing creative concepts to life, I'm all in!</p>
          
          {/* Social Media Icons */}
          <div className="social">
          <a href="https://www.facebook.com/profile.php?id=100003554414112"><FaFacebook size={30} style={{color:"#fff",marginRight:"1rem"}}/></a>
          <a href="https://twitter.com/AkChadhury"><FaTwitter size={30} style={{color:"#fff",marginRight:"1rem"}}/></a>
          <a href="https://www.linkedin.com/in/amit-kumar-97026a21b/"><FaLinkedin size={30} style={{color:"#fff",marginRight:"1rem"}}/></a>
        
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
