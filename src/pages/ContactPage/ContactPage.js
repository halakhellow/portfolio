import React from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import "./ContactPage.css";

let ContactPage = () => {
  return (
    <div className="ContactPage">
      <Header />
      <h1>Let's Connect !</h1>
      <form
        action="mailto:halakhellow1996@gmail.com"
        method="GET"
        enctype="text/plain"
      >
        <label htmlFor="subject"> Subject :</label>
        <input id="subject" name="subject" type="text" />
        <label htmlFor="message"> Message :</label>
        <textarea id="message" name="body"></textarea>
        <input type="submit" value="Send" />
      </form>
      <Footer />
    </div>
  );
};

export default ContactPage;
