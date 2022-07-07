import React from "react";
import "./watch-animate.scss";
import Watch from "../../img/watch.jpg";
import "animate.css";

const WatchAnimate = () => {
  return (
    <>
      <div className="select">
        <div className="select_info">
          <h1 className="animate__animated animate__fadeInLeft">
            Select Your New Perfect Style
          </h1>
          <p className="animate__animated animate__fadeInLeft animate__delay-1s">
            uorem ipsum dolor sit amet consectetur adipisicing elit. Natus omnis
            recusandae, amet fuga sapiente tempora a. Omnis architecto autem,
            maiores officiis vel blanditiis.
          </p>

          <button className="btn animate__animated  animate__fadeInUp animate__delay-2s">
            SHOP NOW
          </button>
        </div>

        <div className="select_img ">
          <img src={Watch} alt="Watch" />
        </div>
      </div>
    </>
  );
};

export default WatchAnimate;
