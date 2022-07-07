import React from "react";
import "./choice1.scss";
import ChoiceImg from "../../img/watch of choice.jpg";

const Choice1 = () => {
  return (
    <>
      <div className="choice1 container">
        <div className="choice1_info">
          <h2>Watch of Choice</h2>
          <p>
            Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse.
          </p>
          <button className="btn">SHOW WATCHES</button>
        </div>
        <div className="choice1_image">
            <img src={ChoiceImg} alt="watch of choice img" />
        </div>
      </div>
    </>
  );
};

export default Choice1;
