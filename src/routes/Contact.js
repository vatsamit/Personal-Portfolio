import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import ContactHeroimg from '../Components/ContactHeroimg'
import Form from '../Components/Form';

const Contact = () => {
  return (
    <div>
    <Navbar/>
    <ContactHeroimg heading = "CONTACT." text= "Lets Chat"/> 
    <Form/>
    <Footer/>
    </div>
  )
}

export default Contact ;