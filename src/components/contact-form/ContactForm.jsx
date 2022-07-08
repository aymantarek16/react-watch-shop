import React from "react";
import "./contact-form.scss";
import { BiHome } from "react-icons/bi";
import { BsPhone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const ContactForm = () => {
  return (
    <>
      <div className="getTouch container">
        <form action="#" className="getTouch_form">
          <h2>Get in Touch </h2>
          <textarea
            name=""
            id=""
            cols="40"
            rows="12"
            placeholder="Enter Messege"
            className="textarea"
          ></textarea>
          <div className="nameAdress">
            <input type="text" className="text" placeholder="Enter your name" />
            <input
              type="email"
              className="email"
              placeholder="Enter email address"
            />
          </div>
          <input type="text" className="subject" placeholder="Enter subject" />
          <button className="btn">SEND</button>
        </form>

        <div className="getTouch_all-icons">
            
          <div className="getTouch_all-icons_icon">
            <i>{<BiHome />}</i>
            <div className="getTouch_all-icons_icon_info">
              <h6>Buttonwood, California.</h6>
              <p>Rosemead, CA 91770</p>
            </div>
          </div>

          <div className="getTouch_all-icons_icon">
            <i>{<BsPhone />}</i>
            <div className="getTouch_all-icons_icon_info">
              <h6>+1 253 565 2365</h6>
              <p>Mon to Fri 9am to 6pm</p>
            </div>
          </div>

          <div className="getTouch_all-icons_icon">
            <i>{<AiOutlineMail />}</i>
            <div className="getTouch_all-icons_icon_info">
              <h6>support@colorlib.com.</h6>
              <p>Send us your query anytime!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
