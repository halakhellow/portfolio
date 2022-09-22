import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { ToastContainer, toast, cssTransition } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "animate.css/animate.min.css";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CustomBtn from "../../components/CustomBtn/CustomBtn";

import "./ContactPage.css";

const bounce = cssTransition({
  enter: "animate__animated animate__bounceIn",
  exit: "animate__animated animate__bounceOut",
});

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Function that displays a success toast on bottom right of the page when form submission is successful
  const animateCss = () => {
    toast(`Thank you for connecting${"\xa0".repeat(2)}:)`, {
      transition: bounce,
      position: "bottom-right",
      pauseOnHover: true,
    });
  };

  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data) => {
    const { name, email, message } = data;
    try {
      const templateParams = {
        name,
        email,
        message,
      };

      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_PUBLIC_KEY
      );

      reset();
      animateCss();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="contact-page page">
      <div className="page-content">
        <Header />
        <h1>Let's Connect !</h1>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <label htmlFor="name"> Name :</label>
          <div class="input-icons">
            <i class="fa fa-user icon"></i>
            <input
              id="name"
              name="name"
              className="input-field"
              type="text"
              {...register("name", {
                required: { value: true, message: "Please enter your name" },
                maxLength: {
                  value: 30,
                  message: "Please use 30 characters or less",
                },
              })}
            />
          </div>
          {errors.name && (
            <span className="error-message">{errors.name.message}</span>
          )}
          <label htmlFor="email"> Email :</label>
          <div class="input-icons">
            <i class="fa fa-envelope icon"></i>
            <input
              id="email"
              name="email"
              type="email"
              {...register("email", {
                required: true,
                pattern:
                  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              })}
            />
          </div>
          {errors.email && (
            <span className="error-message">
              Please enter a valid email address
            </span>
          )}
          <label htmlFor="message"> Message :</label>
          <textarea
            id="message"
            name="message"
            {...register("message", {
              required: true,
            })}
          ></textarea>
          {errors.message && (
            <span className="error-message">Please enter a message</span>
          )}
          <CustomBtn text="SEND" type="submit" />
        </form>

        <ToastContainer />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
