import "./contact.css"
import { useRef } from "react"
import instalogo from "../../assets/instagram.png"
import linkedinlogo from "../../assets/linkedin.png"
import twitetrlogo from "../../assets/twitter.png"
import React from 'react'
import emailjs from '@emailjs/browser';



export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a3itycn', 'template_xqdgla6', form.current, 'BNhQsrh8j37XyT853')
      .then((result) => {
          console.log(result.text);
          e.target.reset()
          alert("Email sent!")
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id="contactpage">
        <div id="contactsec">
          <h1 className="contacttitle">Contact</h1>
          <span className="contactdesc">Kindly fill out the form below to discuss the work oppurtunity!</span>
            <form action="" className="contactform" ref={form} onSubmit={sendEmail}>
                <input type="text"  className="name" placeholder="Your name" name="your_name"/>
                <input type="email" className="email" placeholder="Your email" name="your_email"/>
                <textarea className="msg" name="message" rows="5" placeholder="Your message"></textarea>      
                <button type="submit" className="submitbtn" value="send">Submit</button>
            </form>

            <div className="links">
                  <img src={instalogo} alt="LinkedIN" className="link" />
                  <img src={linkedinlogo} alt="Twitter" className="link" />
                  <img src={twitetrlogo} alt="Instagram" className="link" />
            </div>
        </div>
    </section>
    )
}
