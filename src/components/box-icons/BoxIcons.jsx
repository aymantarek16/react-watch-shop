import React from "react";
import "./box-icon.scss";
import { VscSymbolMethod } from "react-icons/vsc";
import { FaUnlockAlt } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";

const BoxIcons = () => {
  return (
    <>
      <div className="boxicon container">
        <div className="boxicon_items">
          <i>{<VscSymbolMethod />}</i>
          <h6>Free Shipping Method</h6>
          <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
        </div>

        <div className="boxicon_items">
          <i>{<FaUnlockAlt />}</i>
          <h6>Secure Payment System</h6>
          <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
        </div>

        <div className="boxicon_items">
          <i>{<FaHistory/>}</i>
          <h6>Backup Payment System</h6>
          <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
        </div>
      </div>
    </>
  );
};

export default BoxIcons;
