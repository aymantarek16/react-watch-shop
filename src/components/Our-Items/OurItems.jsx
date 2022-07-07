import React from "react";
import "./our-items.scss";
import img1 from "../../img/1w.jpg";
import img2 from "../../img/2w.jpg";
import img3 from "../../img/3w.jpg";
import img4 from "../../img/4w.jpg";
import img5 from "../../img/5w.jpg";
import img6 from "../../img/6w.jpg";
import { FiHeart } from "react-icons/fi";

const OurItems = () => {
  return (
    <>
      <div className="OurItems container">
        <div className="OurItems_info">
          <h2>Our Items</h2>
          <p>
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
            gravida.
          </p>
        </div>

        <div className="OurItems_items">
          {/* Start Card 1 */}
          <div className="OurItems_items_card">
            <div className="OurItems_items_card_img">
              <img src={img1} alt="" />
              <span>Add to cart</span>
              <i>{<FiHeart />}</i>
            </div>
            <div className="OurItems_items_card_info">
              <h3>Thermo Ball Etip Gloves</h3>
              <span>$ 32,230</span>
            </div>
          </div>
          {/* End Card 1 */}

          {/* Start Card 2 */}
          <div className="OurItems_items_card">
            <div className="OurItems_items_card_img">
              <img src={img2} alt="" />
              <span>Add to cart</span>
              <i>{<FiHeart />}</i>
            </div>
            <div className="OurItems_items_card_info">
              <h3>Thermo Ball Etip Gloves</h3>
              <span>$ 36,743</span>
            </div>
          </div>
          {/* End Card 2 */}

          {/* Start Card 3 */}
          <div className="OurItems_items_card">
            <div className="OurItems_items_card_img">
              <img src={img3} alt="" />
              <span>Add to cart</span>
              <i>{<FiHeart />}</i>
            </div>
            <div className="OurItems_items_card_info">
              <h3>Thermo Ball Etip Gloves</h3>
              <span>$ 41,129</span>
            </div>
          </div>
          {/* End Card 3 */}

          {/* Start Card 4 */}
          <div className="OurItems_items_card">
            <div className="OurItems_items_card_img">
              <img src={img4} alt="" />
              <span>Add to cart</span>
              <i>{<FiHeart />}</i>
            </div>
            <div className="OurItems_items_card_info">
              <h3>Thermo Ball Etip Gloves</h3>
              <span>$ 34,532</span>
            </div>
          </div>
          {/* End Card 4 */}

          {/* Start Card 5 */}
          <div className="OurItems_items_card">
            <div className="OurItems_items_card_img">
              <img src={img5} alt="" />
              <span>Add to cart</span>
              <i>{<FiHeart />}</i>
            </div>
            <div className="OurItems_items_card_info">
              <h3>Thermo Ball Etip Gloves</h3>
              <span>$ 43,100</span>
            </div>
          </div>
          {/* End Card 5 */}

          {/* Start Card 6 */}
          <div className="OurItems_items_card">
            <div className="OurItems_items_card_img">
              <img src={img6} alt="" />
              <span>Add to cart</span>
              <i>{<FiHeart />}</i>
            </div>
            <div className="OurItems_items_card_info">
              <h3>Thermo Ball Etip Gloves</h3>
              <span>$ 38,211</span>
            </div>
          </div>
          {/* End Card 6 */}
        </div>
        <button className="btn">VIEW MORE PRODUCT</button>

      </div>
    </>
  );
};

export default OurItems;
