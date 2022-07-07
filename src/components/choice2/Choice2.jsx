import React from "react";
import "./choice2.scss";
import Choice2Img from "../../img/Watch of Choice2.jpg";

const choice2 = () => {
  return (
    <>
      <div className="choice2 container">
        <div className="choice2_image">
          <img src={Choice2Img} alt="watch of choice img" />
        </div>
        <div className="choice2_info">
          <h2>Watch of Choice</h2>
          <p>
            Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse.
          </p>
          <button className="btn">SHOW WATCHES</button>
        </div>
      </div>
    </>
  );
};

export default choice2;
