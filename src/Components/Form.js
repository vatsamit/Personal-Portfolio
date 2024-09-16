import "./FormStyle.css";
import React , {useRef , useEffect} from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Form = () => {
  const form = useRef();
  const nameInput = useRef();

  useEffect(() => {
    //for focus on input field//
    if (nameInput.current) {
      nameInput.current.focus();
    }
  }, []);
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_e7ymzyb', 'template_vih4xdf', form.current, {
        publicKey: '_aYeYYD4-Kjf8XQfV',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success('Message sent successfully!');
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error('Failed to send message. Please try again.');
        },
      );
  };
  return (
    <div className="form">
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name"  required   ref={nameInput} placeholder="Enter your name" />
      <label>Email</label>
      <input type="email" name="user_email"  required  placeholder="Enter your email (ex.abc@email.com)"/>
      <label>Message</label>
      <textarea name="message"  required  placeholder="Type an message!"/>
      <input type="submit" value="Send" />
    </form>
    <Toaster />
    </div>
  )
}

export default Form ;