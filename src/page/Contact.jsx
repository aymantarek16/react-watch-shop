import React from "react";
import ContactUs from "./../components/contact-us/ContactUs";
import Map from "./../components/map/Map";
import Footer from "./../components/footer/Footer";
import ContactForm from "../components/contact-form/ContactForm";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact | eCommers</title>
      </Helmet>
      <ContactUs />
      <Map />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Contact;
