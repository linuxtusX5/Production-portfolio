import React, {useRef} from "react";
import { Button } from "react-bootstrap";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_t9564z3', 'template_gcp44gu', form.current, 'user_zGZ7M9G7Yd20lIrSMAwL9')
      .then((result) => {
          console.log(result.text);            
          toast.success('Successfully!', {
              position: toast.POSITION.BOTTOM_LEFT,
              className: 'foo-bar'
            })
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id="contact" className="py-10 px-3 text-white">
    <ToastContainer/>
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-red-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div className="mt-16 flex md:flex-row flex-col
          gap-5 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto">
          <form ref={form}  onSubmit={sendEmail}className="flex flex-col flex-1 gap-3">
            <input type="text" name="Name" placeholder="Your Name" />
            <input type="Email" name="Email" placeholder="Your Email Address" />
            <textarea placeholder="Your Message" name="message" rows={10}></textarea>
            <Button type="submit" className="btn-primary flex items-center justify-center">Send Message</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;