import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast, cssTransition } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CustomBtn from "../../components/CustomBtn/CustomBtn";

import "./ContactPage.css";

const bounce = cssTransition({
  enter: "animate__animated animate__bounceIn",
  exit: "animate__animated animate__bounceOut",
});

type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>();

  const showSuccessToast = () => {
    toast(`Thank you for connecting${"\xa0".repeat(2)}:)`, {
      transition: bounce,
      position: "bottom-right",
      pauseOnHover: true,
    });
  };

  const onSubmit = async (data: ContactFormValues) => {
    const { name, email, message } = data;
    try {
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        { name, email, message },
        { publicKey: import.meta.env.VITE_PUBLIC_KEY }
      );

      reset();
      showSuccessToast();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="contact-page page">
      <div className="page-content">
        <Header />
        <h1>Let's connect!</h1>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <label htmlFor="name">Name:</label>
          <div className="input-icons">
            <i className="fa fa-user icon"></i>
            <input
              id="name"
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
          {errors.name && <span className="error-message">{errors.name.message}</span>}
          <label htmlFor="email">Email:</label>
          <div className="input-icons">
            <i className="fa fa-envelope icon"></i>
            <input
              id="email"
              type="email"
              {...register("email", {
                required: true,
                pattern:
                  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              })}
            />
          </div>
          {errors.email && (
            <span className="error-message">Please enter a valid email address</span>
          )}
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            {...register("message", {
              required: true,
            })}
          ></textarea>
          {errors.message && <span className="error-message">Please enter a message</span>}
          <CustomBtn text={isSubmitting ? "SENDING..." : "SEND"} type="submit" disabled={isSubmitting} />
        </form>

        <ToastContainer />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
