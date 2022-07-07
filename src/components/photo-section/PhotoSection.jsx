import React from "react";
import "./photo-section.scss";
import img1 from "../../img/1s.jpg";
import img2 from "../../img/2s.jpg";
import img3 from "../../img/3s.jpg";
import img4 from "../../img/4s.jpg";

const PhotoSection = () => {
  return (
    <>
      <div className="photoSection">
        <div className="photoSection_items">
          <div className="photoSection_items_card1 card">
            <div className="overlay"></div>
            <img src={img1} alt="" />
          </div>

          <div className="photoSection_items_card2 card">
            <div className="overlay"></div>

            <img src={img2} alt="" />
          </div>

          <div className="card">
            <div className="photoSection_items_card3 card">
              <div className="overlay"></div>
              <img src={img3} alt="" />
            </div>

            <div className="photoSection_items_card4 card">
              <div className="overlay"></div>
              <img src={img4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotoSection;
