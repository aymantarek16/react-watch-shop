import React, { useEffect, useState } from "react";
import "./scrollUp.scss";
import { FaAngleUp } from "react-icons/fa";

const ScrollUp = () => {
  const [scroll, setScroll] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setScroll(false);
      } else {
        setScroll(true);
      }
    });
  }, []);

  return (
    <>
      <div
        className={!scroll ? "scrollUp" : "hidescroll"}
        onClick={() => window.scrollTo(0, 0)}
      >
        <div className="icon">
          <FaAngleUp />
        </div>
      </div>
    </>
  );
};

export default ScrollUp;
