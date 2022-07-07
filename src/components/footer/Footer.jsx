import React from "react";
import "./footer.scss";
import Logo from "../../img/logoLoading.png";
import { FaHeart } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInternetExplorer } from "react-icons/fa";

const NavBar = () => {
  return (
    <>
      <div className="footer container">
        <div className="footer_image">
          <img src={Logo} alt="Time Zone Logo" />
          <p>
            Asorem ipsum adipolor sdit amet, consectetur adipisicing elitcf sed
            do eiusmod tem.
          </p>
        </div>

        <div className="footer_item">
          <h4>Quick Links</h4>
          <ul>
            <li>About</li>
            <li>Offers & Discounts</li>
            <li>Get Coupon</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="footer_item">
          <h4>New Products</h4>
          <ul>
            <li>Woman Cloth</li>
            <li>Fashion Accessories</li>
            <li>Man Accessories</li>
            <li>Rubber made Toys</li>
          </ul>
        </div>
        <div className="footer_item">
          <h4>Support</h4>
          <ul>
            <li>Frequently Asked Questions</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Report a Payment Issue</li>
          </ul>
        </div>
      </div>

      {/* Footer End */}

      <div className="footer_end container">
        <div className="footer_end_info">
          <p>
            Copyright ©2022 All rights reserved | This template is made with 
            <i>{<FaHeart />}</i> by <span>Ayman Tarek</span>
          </p>
        </div>

        <div className="footer_end_icons">
          <i>{<FaTwitter/>}</i>
          <i>{<FaFacebookF/>}</i>
          <i>{<FaLinkedinIn/>}</i>
          <i>{<FaInternetExplorer/>}</i>
        </div>
      </div>
    </>
  );
};

export default NavBar;
