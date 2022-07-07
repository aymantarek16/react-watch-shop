import React from "react";
import "./new-arrivals.scss";
import img1 from '../../img/1.jpg'
import img2 from '../../img/2.jpg'
import img3 from '../../img/3.jpg'
  

const NewArrivals = () => {
  return (
    <>
      <div className="container newArrivals">
        <h2>New Arrivals</h2>

        <div className="newArrivals_items">
            
                {/* Card 1 */}
            <div className="newArrivals_items_card">
            <div className="newArrivals_items_card_img">
                <img src={img1} alt="" />
            </div>
            <div className="newArrivals_items_card_info">
            <h3>Thermo Ball Etip Gloves</h3>
            <span>$ 30,743</span>
             </div>
             </div>

                {/* Card 2 */}
                <div className="newArrivals_items_card">
            <div className="newArrivals_items_card_img">
                <img src={img2} alt="" />
            </div>
            <div className="newArrivals_items_card_info">
            <h3>Thermo Ball Etip Gloves</h3>
            <span>$ 45,320</span>
             </div>
             </div>


                {/* Card 3 */}
                <div className="newArrivals_items_card">
            <div className="newArrivals_items_card_img">
                <img src={img3} alt="" />
            </div>
            <div className="newArrivals_items_card_info">
            <h3>Thermo Ball Etip Gloves</h3>
            <span>$ 50,600</span>
             </div>
             </div>


           

        </div>
      </div>
    </>
  );
};

export default NewArrivals;
