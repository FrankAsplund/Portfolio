import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const emailJsServiceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const emailJsTemplateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const emailJsUserId = process.env.REACT_APP_EMAILJS_USER_ID;

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        emailJsServiceId,
        emailJsTemplateId,
        form.current,
        emailJsUserId
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <main className="container-box" id="contact">
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </main>
  );
}
